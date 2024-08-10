import React from "react";
import { Card, CardBody, Chip, Image } from "@nextui-org/react";

interface Workout {
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

const WorkoutCard: React.FC<{ workout: Workout }> = ({ workout }) => {
  // Ensure that all required properties exist before rendering
  const isValidWorkout =
    workout &&
    workout.Name &&
    workout.GIF &&
    workout.Description &&
    workout.SetReps &&
    typeof workout.SetReps.Sets === 'number' &&
    workout.SetReps.Reps &&
    typeof workout.SetReps.Reps.Min === 'number' &&
    typeof workout.SetReps.Reps.Max === 'number';

  if (!isValidWorkout) {
    return null; // Optionally, you can return a fallback UI here
  }

  return (
    <Card className="w-full max-w-sm mx-auto rounded-lg shadow-lg p-4 bg-white">
      <div className="w-full aspect-video mb-4">
        <Image
          src={workout.GIF}
          alt={workout.Name}
          classNames={{
            wrapper: "w-full h-full",
            img: "w-full h-full object-cover rounded-lg"
          }}
        />
      </div>
      <CardBody className="p-4">
        <h2 className="text-xl font-semibold text-black mb-2">
          {workout.Name}
        </h2>
        <div className="flex gap-2 mb-4">
          <Chip variant="solid" color="warning">
            Sets: {workout.SetReps.Sets}
          </Chip>
          <Chip variant="solid" color="warning">
            Reps: {workout.SetReps.Reps.Min}-{workout.SetReps.Reps.Max}
          </Chip>
        </div>
        <p className="text-gray-600 text-sm">{workout.Description}</p>
      </CardBody>
    </Card>
  );
};

export default WorkoutCard;