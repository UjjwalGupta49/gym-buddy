import React, { useState, useEffect } from "react";
import { Card, CardBody, Chip } from "@nextui-org/react";
import { useGlobalState } from "@/context/GlobalStateProvider";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import WorkoutCard from "./WorkoutCard"; // Import the WorkoutCard component

interface Reps {
  Min: number;
  Max: number;
}

interface SetReps {
  Reps: Reps;
  Sets: number;
}

interface Workout {
  _id: string;
  Name: string;
  TargetGroup: string[];
  GIF: string;
  Description: string;
  SetReps: SetReps;
}

type WorkoutsResponse = Workout[];

const targetGroups = [
  "BICEP",
  "TRICEP",
  "SHOULDER",
  "CHEST",
  "BACK",
  "CORE",
  "GLUTES",
  "HAMSTRINGS",
  "QUADRICEPS",
  "FOREARM",
  "CALVES",
];

// Define the keys only if they are mentioned in the targetGroups array.
// Create a mapping of keys directly from the targetGroups
const CHIP_KEYS = {
    BICEP: "BICEP",
    TRICEP: "TRICEP",
    SHOULDER: "SHOULDER",
    CHEST: "CHEST",
    BACK: "BACK",
    CORE: "CORE",
    GLUTES: "GLUTES",
    HAMSTRINGS: "HAMSTRINGS",
    QUADRICEPS: "QUADRICEPS",
    FOREARM: "FOREARM",
    CALVES: "CALVES",
}
// Only include chips data for existing keys
const chipsData = [
    { label: "Biceps", key: CHIP_KEYS.BICEP },
    { label: "Triceps", key: CHIP_KEYS.TRICEP },
    { label: "Shoulders", key: CHIP_KEYS.SHOULDER },
    { label: "Chest", key: CHIP_KEYS.CHEST },
    { label: "Back", key: CHIP_KEYS.BACK },
    { label: "Core", key: CHIP_KEYS.CORE },
    { label: "Glutes", key: CHIP_KEYS.GLUTES },
    { label: "Hamstrings", key: CHIP_KEYS.HAMSTRINGS },
    { label: "Quadriceps", key: CHIP_KEYS.QUADRICEPS },
    { label: "Forearms", key: CHIP_KEYS.FOREARM },
    { label: "Calves", key: CHIP_KEYS.CALVES },
  ];

console.log(CHIP_KEYS);
console.log(chipsData);

const ChipList: React.FC<{ isDropdownOpen: boolean }> = ({
  isDropdownOpen,
}) => {
  const { items, setItems } = useGlobalState();

  const handleChipClick = (chipKey: string) => {
    if (items.includes(chipKey)) {
      setItems(items.filter((item) => item !== chipKey));
    } else {
      setItems([...items, chipKey]);
    }
  };

  // Always show the first 6 chips
  const visibleChips = chipsData.slice(0, 6);
  // Show additional chips when dropdown is open
  const additionalChips = chipsData.slice(6);

  return (
    <>
      <div className="flex flex-wrap gap-4">
        {visibleChips.map((chip) => (
          <Chip
            key={chip.key}
            variant={items.includes(chip.key) ? "solid" : "bordered"}
            color="warning"
            radius="full"
            onClick={() => handleChipClick(chip.key)}
          >
            {chip.label}
          </Chip>
        ))}
      </div>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            className="flex flex-wrap gap-4 mt-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
          >
            {additionalChips.map((chip) => (
              <Chip
                key={chip.key}
                variant={items.includes(chip.key) ? "solid" : "bordered"}
                color="warning"
                radius="full"
                onClick={() => handleChipClick(chip.key)}
              >
                {chip.label}
              </Chip>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Mobile View Component
const WorkoutViewMobile: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { items } = useGlobalState();
  const [workouts, setWorkouts] = useState<any[]>([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        console.log(items);
        const response = await fetch("/api/exercises");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: WorkoutsResponse = await response.json();

        // Check if data is a valid array of workouts
        if (!Array.isArray(data) || data.length === 0) {
          throw new Error("Invalid data format received from the API");
        }

        // Log the data to inspect its structure
        console.log("Raw data from API:", data);
        console.log("Items for filtering:", items);

        // Filter workouts based on the items in global state
        const filteredWorkouts = data.filter((workout: Workout) => {
          if (
            !workout ||
            typeof workout !== "object" ||
            !Array.isArray(workout.TargetGroup)
          ) {
            console.error("Invalid workout structure:", workout);
            return false;
          }

          // Log each workout's TargetGroup and check against items
          console.log("Checking workout:", workout.Name);
          console.log("TargetGroup:", workout.TargetGroup);

          // Check if any of the items in the global state match any TargetGroup in the workout
          const matches = workout.TargetGroup.some((group: string) =>
            items.includes(group)
          );

          if (matches) {
            console.log(`Workout "${workout.Name}" matches the items.`);
          }

          return matches;
        });

        // Log the filtered workouts to inspect the result
        console.log("Filtered workouts:", filteredWorkouts);

        if (!filteredWorkouts || !Array.isArray(filteredWorkouts)) {
          throw new Error("Filtered workouts are not in the expected format.");
        }

        setWorkouts(filteredWorkouts);
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };

    fetchWorkouts();
  }, [items]);

  return (
    <div>
      <Card className="w-full mx-auto rounded-lg p-4 bg-white shadow-lg">
        <CardBody>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">
              here’s your workout:
            </h2>
            <MdKeyboardDoubleArrowDown
              className={`text-2xl text-gray-800 cursor-pointer transform transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            />
          </div>
          <div className="mt-4">
            <ChipList isDropdownOpen={isDropdownOpen} />
          </div>
        </CardBody>
      </Card>
      <div className="mt-4 grid grid-cols-1 gap-4">
        {workouts.map((workout) => (
          <WorkoutCard
            key={workout.Name}
            workout={{
              Name: workout.Name,
              TargetGroup: workout.TargetGroup,
              GIF: workout.GIF,
              Description: workout.Description,
              SetReps: workout.SetReps,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Desktop View Component
const WorkoutViewDesktop: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { items } = useGlobalState();
  const [workouts, setWorkouts] = useState<any[]>([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("/api/exercises");
        const data = await response.json();

        // Filter workouts based on global state
        const filteredWorkouts = Object.values(data).filter((workout: any) =>
          workout.TargetGroup.some((group: string) => items.includes(group))
        );

        setWorkouts(filteredWorkouts);
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };

    fetchWorkouts();
  }, [items]);

  return (
    <div>
      <Card className="w-full mx-auto rounded-lg p-4 bg-white shadow-lg">
        <CardBody>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">
              here’s your workout:
            </h2>
            <MdKeyboardDoubleArrowDown
              className={`text-2xl text-gray-800 cursor-pointer transform transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            />
          </div>
          <div className="mt-4">
            <ChipList isDropdownOpen={isDropdownOpen} />
          </div>
        </CardBody>
      </Card>
      <div className="mt-4 grid grid-cols-1 gap-4">
        {workouts.map((workout) => (
          <WorkoutCard
            key={workout.Name}
            workout={{
              Name: workout.Name,
              TargetGroup: workout.TargetGroup,
              GIF: workout.GIF,
              Description: workout.Description,
              SetReps: workout.SetReps,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Main WorkoutView Component with Conditional Rendering
const WorkoutView: React.FC = () => {
  return (
    <div className="w-full h-full p-4">
      <div className="block md:hidden">
        <WorkoutViewMobile />
      </div>
      <div className="hidden md:block">
        <WorkoutViewDesktop />
      </div>
    </div>
  );
};

export default WorkoutView;
