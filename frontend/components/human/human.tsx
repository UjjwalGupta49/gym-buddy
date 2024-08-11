import React, { useState } from 'react';
import { FaSyncAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HumanAnatomy: React.FC = () => {
  const [showBack, setShowBack] = useState(false);
  const [rotating, setRotating] = useState(false);

  const toggleImage = () => {
    setRotating(true);
    setTimeout(() => {
      setShowBack(!showBack);
      setRotating(false);
    }, 300); // Matches the animation duration
  };

  return (
    <div 
      className="relative h-screen flex justify-center items-center bg-gradient-to-br from-royalBlue via-azureBlue to-skyBlue"
    >
      <motion.img
        src={showBack ? '/body/Group 2.svg' : '/body/Group 1.svg'}
        className="w-[400px] h-[550px] bg-softWhite rounded-lg p-5"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        onClick={toggleImage}
        className="absolute top-5 right-5 cursor-pointer bg-midnightBlack rounded-full p-2.5"
        animate={{
          rotate: rotating ? 360 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          duration: 5,
        }}
      >
        <FaSyncAlt className="text-xl text-sunshineYellow" />
      </motion.div>
    </div>
  );
};

export default HumanAnatomy;
