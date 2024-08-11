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
};

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

  const visibleChips = chipsData.slice(0, 6);
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

const WorkoutViewMobile: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { items } = useGlobalState();
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchWithRetry = async (url: string, retries: number = 3): Promise<WorkoutsResponse> => {
        try {
          const response = await fetch(url);
      
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
          const data: WorkoutsResponse = await response.json();
          return data;
        } catch (error) {
          if (retries > 0) {
            console.warn("Retrying API call:", error);
            return await fetchWithRetry(url, retries - 1);
          } else {
            console.error("Failed after retries:", error);
            throw error;
          }
        }
      };
      

    const fetchWorkouts = async () => {
      setLoading(true);
      try {
        const data: WorkoutsResponse = await fetchWithRetry("/api/exercises");

        const filteredWorkouts = data.filter((workout) =>
          workout.TargetGroup.some((group) => items.includes(group))
        );

        setWorkouts(filteredWorkouts);
      } catch (error) {
        console.error("Error fetching workouts:", error);
      } finally {
        setLoading(false);
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
              Here’s your workout:
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
      {loading ? (
        <div className="text-center mt-4 text-gray-500">Loading...</div>
      ) : (
        <div className="mt-4 grid grid-cols-1 gap-4">
          {workouts.map((workout) => (
            <WorkoutCard
              key={workout._id}
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
      )}
    </div>
  );
};

const WorkoutViewDesktop: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { items } = useGlobalState();
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchWithRetry = async (url: string, retries: number = 3) => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
      } catch (error) {
        if (retries > 0) {
          console.warn("Retrying API call:", error);
          return await fetchWithRetry(url, retries - 1);
        } else {
          console.error("Failed after retries:", error);
          throw error;
        }
      }
    };

    const fetchWorkouts = async () => {
      setLoading(true);
      try {
        const data: WorkoutsResponse = await fetchWithRetry("/api/exercises");

        const filteredWorkouts = data.filter((workout) =>
          workout.TargetGroup.some((group) => items.includes(group))
        );

        setWorkouts(filteredWorkouts);
      } catch (error) {
        console.error("Error fetching workouts:", error);
      } finally {
        setLoading(false);
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
              Here’s your workout:
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
      {loading ? (
        <div className="text-center mt-4 text-gray-500">Loading...</div>
      ) : (
        <div className="mt-4 grid grid-cols-1 gap-4">
          {workouts.map((workout) => (
            <WorkoutCard
              key={workout._id}
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
      )}
    </div>
  );
};

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
