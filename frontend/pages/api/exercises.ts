import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose, { Schema, Document } from 'mongoose';

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
}, { strict: false });

// Check if the model already exists to avoid recompiling it
const Exercise = mongoose.models.Exercise || mongoose.model<IExercise>('Exercise', exerciseSchema, 'gymbuddy');

async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) {
    return; // Already connected
  }
  return mongoose.connect('mongodb+srv://navalbihani15:Ab4hM7uHrMxRNFyG@cluster0.fzkiqho.mongodb.net/gymbuddy?retryWrites=true&w=majority&appName=Cluster0'

  );
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IExercise[] | { message: string }>,
) {
  try {
    await connectToDatabase();

    const data = await Exercise.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}
