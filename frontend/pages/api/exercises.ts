import type { NextApiRequest, NextApiResponse } from "next";
import mongoose, { Schema, Document, model, models } from "mongoose";

// Define the IExercise interface
interface IExercise extends Document {
  Name: string;
  TargetGroup: string[];
  GIF: string;
  Description: string;
  SetReps: {
    Sets: number;
    Reps: {
      Min: number;
      Max: number;
    };
  };
}

// Define the schema for the exercises collection with indexes
const exerciseSchema = new Schema<IExercise>({
  Name: { type: String, required: true, index: true },
  TargetGroup: { type: [String], required: true, index: true },
  GIF: { type: String, required: true },
  Description: { type: String, required: true },
  SetReps: {
    Sets: { type: Number, required: true },
    Reps: {
      Min: { type: Number, required: true },
      Max: { type: Number, required: true },
    },
  },
});

// Use existing model if available, otherwise create a new one
const Exercise =
  models.Exercise || model<IExercise>("Exercise", exerciseSchema, "gymbuddy");

// Global variable to maintain a single MongoDB connection across requests
let mongoConnection: typeof mongoose | null = null;

async function connectToDatabase() {
  if (mongoConnection && mongoose.connection.readyState >= 1) {
    return mongoConnection; // Use existing connection
  }

  const mongoUri = process.env.MONGODB_URI || "mongodb+srv://ujjwalg056:kzrH8e4XjZ18x1qR@cluster0.trja7.mongodb.net/gymbuddy";

  try {
    mongoConnection = await mongoose.connect(mongoUri, {
      bufferCommands: false,
      maxPoolSize: 10, // Use a connection pool to limit open connections
    });
    console.log("Connected to MongoDB");
    return mongoConnection;
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error("Could not connect to the database");
  }
}

// Implementing a basic in-memory cache (Optional)
let cache: { data: IExercise[] | null, timestamp: number } = {
  data: null,
  timestamp: 0,
};
const CACHE_DURATION = 60 * 1000; // Cache duration in milliseconds (e.g., 1 minute)

// Retry strategy with exponential backoff
async function fetchWithRetry(retries: number, delay: number): Promise<IExercise[]> {
  try {
    // Return cached data if available and not expired
    if (cache.data && Date.now() - cache.timestamp < CACHE_DURATION) {
      console.log("Serving from cache");
      return cache.data;
    }

    await connectToDatabase();
    const exercises = await Exercise.find({}).lean().exec() as IExercise[];

    // Update cache
    cache.data = exercises;
    cache.timestamp = Date.now();

    return exercises;
  } catch (error) {
    if (retries > 0) {
      console.warn(`Retrying API call... Attempts left: ${retries}`);
      await new Promise(res => setTimeout(res, delay));
      return fetchWithRetry(retries - 1, delay * 2); // Exponential backoff
    } else {
      console.error("Failed after retries:", error);
      throw error;
    }
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IExercise[] | { message: string }>
) {
  try {
    const exercises = await fetchWithRetry(3, 500); // 3 retries, starting with 500ms delay
    res.status(200).json(exercises);
  } catch (error) {
    console.error("Error fetching exercises:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
