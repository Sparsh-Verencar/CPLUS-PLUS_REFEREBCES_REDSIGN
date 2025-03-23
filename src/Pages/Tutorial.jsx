import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

const Tutorial = () => {
  const sidebarVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3, ease: 'easeInOut' } },
  };

  const linkVariants = {
    hover: { scale: 1.05, backgroundColor: '#1f2937', transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  return (
    <>
      <div className="w-screen h-[10vh]"></div>
      <div className="flex flex-col md:flex-row items-center text-white bg-gray-950">
        <motion.div
          className="sidebar w-full md:w-[30vw] lg:w-[25vw] h-auto md:h-screen bg-gradient-to-t from-gray-900 to-slate-700 border-r-4 border-gray-900"
          variants={sidebarVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold my-4 md:my-6 lg:my-8 px-4 md:px-6">
            Tutorials
          </h1>
          <nav>
            <ul className="space-y-2 md:space-y-4 px-4 md:px-6 text-lg md:text-xl lg:text-2xl">
              <li>
                Basic C++
                <ul className="space-y-1 mt-1 md:mt-2 px-4 md:px-6 text-sm md:text-base lg:text-lg">
                  <motion.li
                    variants={linkVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Link
                      to="tutorial/program_structure"
                      className="block rounded p-1 md:p-2"
                    >
                      Structure of a Program
                    </Link>
                  </motion.li>
                </ul>
              </li>
            </ul>
          </nav>
        </motion.div>

        <motion.div
          className="w-full md:w-[70vw] lg:w-[75vw] h-screen overflow-y-auto"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <Outlet />
        </motion.div>
      </div>
    </>
  );
};

export default Tutorial;