import React, { useState } from "react";
import { Card, CardBody, Chip } from "@nextui-org/react";
import { useGlobalState } from "@/context/GlobalStateProvider";
import { motion, AnimatePresence} from "framer-motion";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

// Chip keys for global state management
const CHIP_KEYS = {
  BICEPS: "BICEPS",
  FOREARMS: "ARMS",
  TRICEPS: "TRICEPS",
  HAMSTRINGS: "HAMSTRINGS",
  CALVES: "CALVES",
  SHOULDERS: "SHOULDERS",
  QUADS: "QUADS",
  GLUTES: "GLUTES",
  ABS: "ABS",
  LOWERBACK: "LOWERBACK",
};
// TODO: update based on schema from mongo db
const chipsData = [
  { label: "Biceps", key: CHIP_KEYS.BICEPS },
  { label: "Forearms", key: CHIP_KEYS.FOREARMS },
  { label: "Triceps", key: CHIP_KEYS.TRICEPS },
  { label: "Hamstring", key: CHIP_KEYS.HAMSTRINGS },
  { label: "Calves", key: CHIP_KEYS.CALVES },
  { label: "Shoulder", key: CHIP_KEYS.SHOULDERS },
  { label: "Quads", key: CHIP_KEYS.QUADS },
  { label: "Glutes", key: CHIP_KEYS.GLUTES },
  { label: "Abs", key: CHIP_KEYS.ABS },
  { label: "Lower Back", key: CHIP_KEYS.LOWERBACK },
];

// Reusable component to display Chips
// Updated ChipList component to handle showing the first 6 chips and the rest on dropdown
// Updated ChipList component to handle showing the first 6 chips and the rest on dropdown
const ChipList: React.FC<{ isDropdownOpen: boolean }> = ({ isDropdownOpen }) => {
    const { items, setItems } = useGlobalState();
  
    const handleChipClick = (chipKey: string) => {
      if (items.includes(chipKey)) {
        setItems(items.filter((item) => item !== chipKey));
      } else {
        setItems([...items, chipKey]);
      }
      console.log(items);
    };
  
  // Always show the first 6 chips
  const visibleChips = chipsData.slice(0, 6);
  // Show all chips when dropdown is open
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
                color={items.includes(chip.key) ? "warning" : "default"}
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

  return (
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
  );
};

// Desktop View Component
const WorkoutViewDesktop: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
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