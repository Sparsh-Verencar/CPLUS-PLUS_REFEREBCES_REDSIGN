import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center">
      <div className="animation flex">
        {/* 'C' remains static */}
        <motion.h1 className="text-6xl text-amber-50"
        initial={{
            x: -100, 
            rotate: -180, 
            scale: 0.5, 
            opacity: 0 
        }}

        animate={{
            x: 0,
            rotate: 0,
            scale: 1.2,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "linear",
            repeat: Infinity, 
            repeatType: "reverse",
            repeatDelay: 1, 
          }}
        >C</motion.h1>

        <motion.h1
          className="text-6xl text-amber-50"
          initial={{ x: -100, rotate: -180, scale: 0.5, opacity: 0 }}
          animate={{
            x: 0,
            rotate: 0,
            scale: 1.2,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "linear",
            repeat: Infinity, // Infinite loop
            repeatType: "reverse", // Moves back and forth
            repeatDelay: 1, // 1-second pause before repeating
          }}
        >
          +
        </motion.h1>

        <motion.h1
          className="text-6xl text-amber-50"
          initial={{ x: -120, rotate: -180, scale: 0.5, opacity: 0 }}
          animate={{
            x: 10,
            rotate: 0,
            scale: 1.2,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: "linear",
            repeat: Infinity, 
            repeatType: "reverse",
            repeatDelay: 1, 
          }}
        >
          +
        </motion.h1>
      </div>

      <motion.div className="text-6xl text-amber-50"
      initial={{
        opacity:0
      }}
      animate={{
        opacity:1
      }}
      transition={{
        duration: 1,
        delay: 0.2,
        ease: "linear",
        repeat: Infinity, 
        repeatType: "reverse",
        repeatDelay: 1, 
      }}
      >References</motion.div>
    </div>
  );
};

export default Loading;
