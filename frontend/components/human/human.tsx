import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSyncAlt } from 'react-icons/fa';

// FlipCard component
const FlipCard: React.FC<{ frontContent: React.ReactNode; backContent: React.ReactNode }> = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative w-full h-80 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl rounded-3xl shadow-lg overflow-hidden cursor-pointer">
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front side */}
        <div
          className={`absolute inset-0 w-full h-full backface-hidden ${isFlipped ? 'hidden' : ''}`}
          style={{ transform: 'rotateY(0deg)' }}
        >
          {frontContent}
        </div>

        {/* Back side */}
        <div
          className={`absolute inset-0 w-full h-full backface-hidden ${isFlipped ? '' : 'hidden'}`}
          style={{ transform: 'rotateY(180deg)' }}
        >
          {backContent}
        </div>
      </motion.div>

      {/* Flip button */}
      <button
        onClick={handleFlip}
        className="absolute top-2 right-2 z-10 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all duration-300 ease-in-out"
        aria-label={isFlipped ? 'Flip card back' : 'Flip card'}
      >
        <FaSyncAlt size={20} className="text-gray-800" />
      </button>
    </div>
  );
};

// HumanAnatomy component
const Human: React.FC = () => {
  const frontContent = (
    <motion.img
      src="/body/Group 1.svg"
      className="w-full h-full object-cover rounded-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      style={{ objectFit: 'contain' }}
    />
  );

  const backContent = (
    <motion.img
      src="/body/Group 2.svg"
      className="w-full h-full object-cover rounded-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      style={{ objectFit: 'contain', transform: 'rotateY(180deg)' }}
    />
  );

  return (
    <div className="flex flex-col justify-center items-center px-4 py-2">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl font-bold text-midnightBlack text-center mb-2"
      >
        Know your muscle
      </motion.h2>

      {/* Flip Card */}
      <FlipCard frontContent={frontContent} backContent={backContent} />
    </div>
  );
};

export default Human;