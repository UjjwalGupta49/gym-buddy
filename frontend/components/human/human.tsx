import React, { useState } from 'react';
import { FaSyncAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const colors = {
  royalBlue: '#2120F8',
  azureBlue: '#0D75EE',
  skyBlue: '#0795E8',
  softWhite: '#FAFAFA',
  midnightBlack: '#030407',
  sunshineYellow: '#E7DE13',
  peachBeige: '#F8D2A3',
  coralRed: '#E0554F',
};

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
      style={{ 
        position: 'relative', 
        height: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        background: `linear-gradient(135deg, ${colors.royalBlue}, ${colors.azureBlue}, ${colors.skyBlue})`,
      }}
    >
      <motion.img
        src={showBack ? '/body/Group 2.svg' : '/body/Group 1.svg'}
        style={{ width: '400px', height: '550px', backgroundColor: colors.softWhite, borderRadius: '10px', padding: '20px' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        onClick={toggleImage}
        style={{ 
          position: 'absolute', 
          top: '20px', 
          right: '20px', 
          cursor: 'pointer', 
          backgroundColor: colors.midnightBlack, 
          borderRadius: '50%', 
          padding: '10px' 
        }}
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
        <FaSyncAlt style={{ fontSize: '24px', color: colors.sunshineYellow }} />
      </motion.div>
    </div>
  );
};

export default HumanAnatomy;
