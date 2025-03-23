import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Card = ({ title, to, img }) => {
  return (
    <Link to={to}>
      <motion.div
        className="w-full h-full bg-gray-900 rounded-4xl flex flex-col items-center justify-center text-white shadow-lg shadow-blue-600 p-4"
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }} 
        transition={{ type: 'spring', stiffness: 300, damping: 20 }} 
      >
        <motion.img
          src={img}
          className="w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] h-auto max-h-[30vh] bg-white rounded-3xl mb-4"
          alt={title}
          whileHover={{ rotate: 5 }} 
          transition={{ type: 'spring', stiffness: 200, damping: 10 }} 
        />

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-t from-gray-600 to-white text-center"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 10 }} 
        >
          {title}
        </motion.h1>
      </motion.div>
    </Link>
  );
};

export default Card;