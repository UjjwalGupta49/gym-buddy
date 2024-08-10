import type { NextApiRequest, NextApiResponse } from "next";
import mongoose, { Schema, Document, model, models } from "mongoose";

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

// Define the schema for the exercises collection
const exerciseSchema = new Schema<IExercise>({
  Name: { type: String, required: true },
  TargetGroup: { type: [String], required: true },
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

async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) {
    return; // Already connected
  }
  try {
    await mongoose.connect(
      "mongodb+srv://navalbihani15:Ab4hM7uHrMxRNFyG@cluster0.fzkiqho.mongodb.net/gymbuddy?retryWrites=true&w=majority&appName=Cluster0"
    );
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error("Could not connect to the database");
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IExercise[] | { message: string }>
) {
  try {
    await connectToDatabase();

    // Explicitly type the result of the find().lean() operation
    const exercises = await Exercise.find({}).lean<IExercise[]>();

    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}
