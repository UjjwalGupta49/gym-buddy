// import React from "react";
// import { Avatar, Button, Card, CardBody, Image } from "@nextui-org/react";
// import { motion } from "framer-motion";

// // Mobile View Component
// const HeroMobile: React.FC = () => {
//   return (
//     <div className="relative bg-softWhite py-8 px-4 flex flex-col items-center justify-start min-h-screen">
//       {/* Background Gradients */}
//       <div className="absolute inset-0 pointer-events-none">
//         {/* Left Bottom Gradient */}
//         <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-coralRed/30 via-coralRed/10 to-transparent"></div>
//         {/* Right Bottom Gradient */}
//         <div className="absolute top-0 right-0 w-full h-[50%] bg-gradient-to-b from-coralRed/30 via-coralRed/10 to-transparent"></div>
//       </div>

//       {/* Main Scene Elements */}
//       <div className="relative z-10 flex flex-col items-center justify-start w-full h-full">
//         {/* Top Section: Avatar, Product Name, and Get Started Button */}
//         <div className="flex justify-between items-center w-full px-4 mb-4">
//           <div className="flex items-center">
//             <Avatar
//               src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
//               className="w-8 h-8 mr-2"
//             />
//             <h1 className="text-base font-semibold text-midnightBlack">
//               Product Name
//             </h1>
//           </div>
//           <Button
//             radius="full"
//             className="bg-coralRed hover:bg-coralRed text-softWhite text-sm px-4 py-2 ml-auto"
//           >
//             Get Started
//           </Button>
//         </div>

//         {/* Main Heading */}
//         <div className="w-full h-fit mx-auto mt-8">
//           <motion.h2
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-xl font-bold text-midnightBlack text-center mb-4"
//           >
//             Think, Plan, and Create Together
//           </motion.h2>
//         </div>

//         {/* Subheading */}
//         <p className="text-sm text-center text-midnightBlack opacity-70 mb-6 w-full h-fit mx-auto">
//           Meet Product. Your AI-powered workspace for seamless collaboration.
//         </p>
//       </div>
//     </div>
//   );
// };



// // Desktop View Component
// const HeroDesktop: React.FC = () => {
//   return (
//     <div className="relative bg-softWhite py-16 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center min-h-screen">
//       {/* Background Gradients */}
//       <div className="absolute inset-0 pointer-events-none">
//         {/* Left Bottom Gradient */}
//         <div className="absolute bottom-0 left-0 w-1/2 h-[80%] bg-gradient-to-t from-coralRed/30 via-coralRed/10 to-transparent"></div>
//         {/* Right Bottom Gradient */}
//         <div className="absolute bottom-0 right-0 w-1/2 h-[80%] bg-gradient-to-t from-coralRed/30 via-coralRed/10 to-transparent"></div>
//       </div>

//       {/* Floating Elements Behind Main Content */}
//       <div className="absolute inset-0 z-0">
//         {/* Leg Day Floating Element */}
//         <div className="transform -rotate-12 top-0 left-0 w-fit h-fit z-0 absolute pl-4 pt-8">
//           <motion.div
//             initial={{ opacity: 0, x: -100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className=""
//           >
//             <CardWithImage
//               imageUrl="https://via.placeholder.com/250"
//               title="Leg Day"
//             />
//           </motion.div>
//         </div>

//         {/* Core Workout Floating Element */}
//         <div className="transform -rotate-12 bottom-0 right-0 w-fit h-fit z-0 absolute pr-4 pb-8">
//           <motion.div
//             initial={{ opacity: 0, x: 100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className=""
//           >
//             <CardWithImage
//               imageUrl="https://via.placeholder.com/250"
//               title="Core Workout"
//             />
//           </motion.div>
//         </div>

//         {/* Trim Fat Schedule Floating Element */}
//         <div className="transform -rotate-12 bottom-0 left-0 w-fit h-fit z-0 absolute pl-4 pb-8">
//           <motion.div
//             initial={{ opacity: 0, x: -100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className=""
//           >
//             <CardWithText title="Trim fat or Gain weight" />
//           </motion.div>
//         </div>

//         {/* Chest & Tricep Workout Floating Elements */}
//         <div className="transform -rotate-12 top-0 right-0 w-fit h-fit z-0 absolute pt-8 pr-4">
//           <motion.div
//             initial={{ opacity: 0, x: 100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="flex flex-col space-y-4"
//           >
//             <CardWithText title="Chest & Tricep" />
//             <CardWithText title="Back & Bicep" />
//             <CardWithText title="Legs & Shoulder" />
//           </motion.div>
//         </div>
//       </div>

//       {/* Main Scene Elements */}
//       <div className="relative z-10 flex flex-col items-center justify-center w-fit h-fit">
//         {/* Logo and Name */}
//         <div className="flex justify-center items-center mb-4 w-fit h-fit">
//           <Avatar
//             src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
//             className="w-10 h-10 mr-2"
//           />
//           <h1 className="text-lg font-semibold text-midnightBlack">
//             Product Name
//           </h1>
//         </div>

//         <div className="w-fit h-fit mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-2xl md:text-3xl lg:text-4xl font-bold text-midnightBlack text-center mb-4"
//           >
//             Think, Plan, and Create Together
//           </motion.h2>
//         </div>

//         {/* Subheading */}
//         <p className="text-base md:text-lg text-center text-midnightBlack opacity-70 mb-6 w-fit h-fit mx-auto">
//           Meet Product. Your AI-powered workspace for seamless collaboration.
//         </p>

//         {/* Call to Action Button */}
//         <div className="flex justify-center mb-12 w-fit h-fit mx-auto">
//           <Button
//             radius="full"
//             className="bg-coralRed hover:bg-coralRed text-softWhite text-lg px-6 py-3"
//           >
//             Get Started
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main Hero Component with Conditional Rendering
// const Hero: React.FC = () => {
//   return (
//     <div>
//       <div className="block md:hidden">
//         <HeroMobile />
//       </div>
//       <div className="hidden md:block">
//         <HeroDesktop />
//       </div>
//     </div>
//   );
// };

// // Card with Image Component
// const CardWithImage: React.FC<{ imageUrl: string; title: string }> = ({
//   imageUrl,
//   title,
// }) => (
//   <Card className="shadow-lg w-full md:w-fit h-fit">
//     <CardBody className="p-4 text-center">
//       <Image
//         src={imageUrl}
//         alt={title}
//         width={176}  // 44 * 4px (as per the previous w-44 in Tailwind)
//         height={176} // 44 * 4px (as per the previous h-44 in Tailwind)
       
//         className="rounded-lg mb-4 mx-auto"
//       />
//       <p className="text-lg font-semibold text-midnightBlack">{title}</p>
//     </CardBody>
//   </Card>
// );



// // Card with Text Component
// const CardWithText: React.FC<{ title: string }> = ({ title }) => (
//   <Card className="shadow-lg w-full md:w-fit h-fit">
//     <CardBody className="p-4">
//       <p className="text-lg font-semibold text-midnightBlack">{title}</p>
//     </CardBody>
//   </Card>
// );

// export default Hero;

import React, { useState } from "react";
import { Avatar, Button, Card, CardBody, Image, Tabs, Tab } from "@nextui-org/react";
import { motion } from "framer-motion";

// Mobile View Component
const HeroMobile: React.FC = () => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>(["BICEPS", "ARMS"]);

  const handleTabChange = (key: string | number) => {
    const selectedKey = key as string;
    const selectionMap: { [key: string]: string[] } = {
      "back & bicep": ["BICEPS", "ARMS"],
      "chest & tricep": ["TRICEPS", "CHEST"],
      "leg and shoulder": ["CALVES", "HAMSTRING", "SHOULDER"],
    };
    setSelectedKeys(selectionMap[selectedKey]);
  };

  return (
    <div className="relative bg-softWhite py-8 px-4 flex flex-col items-center justify-start min-h-screen">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left Bottom Gradient */}
        <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-coralRed/30 via-coralRed/10 to-transparent"></div>
        {/* Right Bottom Gradient */}
        <div className="absolute top-0 right-0 w-full h-[50%] bg-gradient-to-b from-coralRed/30 via-coralRed/10 to-transparent"></div>
      </div>

      {/* Main Scene Elements */}
      <div className="relative z-10 flex flex-col items-center justify-start w-full h-full">
        {/* Top Section: Avatar, Product Name, and Get Started Button */}
        <div className="flex justify-between items-center w-full px-4 mb-4">
          <div className="flex items-center">
            <Avatar
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              className="w-8 h-8 mr-2"
            />
            <h1 className="text-base font-semibold text-midnightBlack">
              Product Name
            </h1>
          </div>
          <Button
            radius="full"
            className="bg-coralRed hover:bg-coralRed text-softWhite text-sm px-4 py-2 ml-auto"
          >
            Get Started
          </Button>
        </div>

        {/* Main Heading */}
        <div className="w-full h-fit mx-auto mt-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl font-bold text-midnightBlack text-center mb-4"
          >
            Think, Plan, and Create Together
          </motion.h2>
        </div>

        {/* Subheading */}
        <p className="text-sm text-center text-midnightBlack opacity-70 mb-6 w-full h-fit mx-auto">
          Meet Product. Your AI-powered workspace for seamless collaboration.
        </p>

        {/* Tabs Component */}
        <div className="w-full mt-4 flex items-center justify-center">
          <Tabs
            aria-label="Workout Selection"
            onSelectionChange={handleTabChange}
            defaultSelectedKey={"back & bicep"}
            radius="full"
            color="danger"
            size="sm"
          >
            <Tab key="back & bicep" title="Back & Bicep"/>
            <Tab key="chest & tricep" title="Chest & Tricep" />
            <Tab key="leg and shoulder" title="Leg and Shoulder" />
          </Tabs>
        </div>

        {/* Display Selected Keys */}
        {/* <div className="mt-4">
          <p className="text-sm font-semibold text-midnightBlack">Selected Muscle Groups:</p>
          <ul className="list-disc list-inside">
            {selectedKeys.map((key) => (
              <li key={key} className="text-sm text-midnightBlack">
                {key}
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
};

// Desktop View Component
const HeroDesktop: React.FC = () => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>(["BICEPS", "ARMS"]);

  const handleTabChange = (key: string | number) => {
    const selectedKey = key as string;
    const selectionMap: { [key: string]: string[] } = {
      "back & bicep": ["BICEPS", "ARMS"],
      "chest & tricep": ["TRICEPS", "CHEST"],
      "leg and shoulder": ["CALVES", "HAMSTRING", "SHOULDER"],
    };
    setSelectedKeys(selectionMap[selectedKey]);
  };

  return (
    <div className="relative bg-softWhite py-16 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center min-h-screen">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-1/2 h-[80%] bg-gradient-to-t from-coralRed/30 via-coralRed/10 to-transparent"></div>
        {/* Right Bottom Gradient */}
        <div className="absolute bottom-0 right-0 w-1/2 h-[80%] bg-gradient-to-t from-coralRed/30 via-coralRed/10 to-transparent"></div>
      </div>

      {/* Floating Elements Behind Main Content */}
      <div className="absolute inset-0 z-0">
        {/* Leg Day Floating Element */}
        <div className="transform -rotate-12 top-0 left-0 w-fit h-fit z-0 absolute pl-4 pt-8">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className=""
          >
            <CardWithImage
              imageUrl="https://via.placeholder.com/250"
              title="Leg Day"
            />
          </motion.div>
        </div>

        {/* Core Workout Floating Element */}
        <div className="transform -rotate-12 bottom-0 right-0 w-fit h-fit z-0 absolute pr-4 pb-8">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className=""
          >
            <CardWithImage
              imageUrl="https://via.placeholder.com/250"
              title="Core Workout"
            />
          </motion.div>
        </div>

        {/* Trim Fat Schedule Floating Element */}
        <div className="transform -rotate-12 bottom-0 left-0 w-fit h-fit z-0 absolute pl-4 pb-8">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className=""
          >
            <CardWithText title="Trim fat or Gain weight" />
          </motion.div>
        </div>

        {/* Chest & Tricep Workout Floating Elements */}
        <div className="transform -rotate-12 top-0 right-0 w-fit h-fit z-0 absolute pt-8 pr-4">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-4"
          >
            <CardWithText title="Chest & Tricep" />
            <CardWithText title="Back & Bicep" />
            <CardWithText title="Legs & Shoulder" />
          </motion.div>
        </div>
      </div>

      {/* Main Scene Elements */}
      <div className="relative z-10 flex flex-col items-center justify-center w-fit h-fit">
        {/* Logo and Name */}
        <div className="flex justify-center items-center mb-4 w-fit h-fit">
          <Avatar
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            className="w-10 h-10 mr-2"
          />
          <h1 className="text-lg font-semibold text-midnightBlack">
            Product Name
          </h1>
        </div>

        <div className="w-fit h-fit mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-midnightBlack text-center mb-4"
          >
            Think, Plan, and Create Together
          </motion.h2>
        </div>

        {/* Subheading */}
        <p className="text-base md:text-lg text-center text-midnightBlack opacity-70 mb-6 w-fit h-fit mx-auto">
          Meet Product. Your AI-powered workspace for seamless collaboration.
        </p>

        {/* Tabs Component */}
        <div className="w-full mt-4 flex items-center justify-center">
          <Tabs
            aria-label="Workout Selection"
            onSelectionChange={handleTabChange}
            defaultSelectedKey={"back & bicep"}
            radius="full"
            color="danger"
          >
            <Tab key="back & bicep" title="Back & Bicep" />
            <Tab key="chest & tricep" title="Chest & Tricep" />
            <Tab key="leg and shoulder" title="Leg and Shoulder" />
          </Tabs>
        </div>

        {/* Display Selected Keys */}
        {/* <div className="mt-4">
          <p className="text-sm font-semibold text-midnightBlack">Selected Muscle Groups:</p>
          <ul className="list-disc list-inside">
            {selectedKeys.map((key) => (
              <li key={key} className="text-sm text-midnightBlack">
                {key}
              </li>
            ))}
          </ul>
        </div> */}

        {/* Call to Action Button */}
        {/* <div className="flex justify-center mb-12 w-fit h-fit mx-auto">
          <Button
            radius="full"
            className="bg-coralRed hover:bg-coralRed text-softWhite text-lg px-6 py-3"
          >
            Get Started
          </Button>
        </div> */}
      </div>
    </div>
  );
};

// Main Hero Component with Conditional Rendering
const Hero: React.FC = () => {
  return (
    <div>
      <div className="block md:hidden">
        <HeroMobile />
      </div>
      <div className="hidden md:block">
        <HeroDesktop />
      </div>
    </div>
  );
};

// Card with Image Component
const CardWithImage: React.FC<{ imageUrl: string; title: string }> = ({
  imageUrl,
  title,
}) => (
  <Card className="shadow-lg w-full md:w-fit h-fit">
    <CardBody className="p-4 text-center">
      <Image
        src={imageUrl}
        alt={title}
        width={176}  // 44 * 4px (as per the previous w-44 in Tailwind)
        height={176} // 44 * 4px (as per the previous h-44 in Tailwind)
       
        className="rounded-lg mb-4 mx-auto"
      />
      <p className="text-lg font-semibold text-midnightBlack">{title}</p>
    </CardBody>
  </Card>
);

// Card with Text Component
const CardWithText: React.FC<{ title: string }> = ({ title }) => (
  <Card className="shadow-lg w-full md:w-fit h-fit">
    <CardBody className="p-4">
      <p className="text-lg font-semibold text-midnightBlack">{title}</p>
    </CardBody>
  </Card>
);

export default Hero;


