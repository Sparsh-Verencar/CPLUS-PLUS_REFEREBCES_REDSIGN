import React from 'react';
import { motion } from 'framer-motion';
import Card from '../Components/Card.jsx';
import ReferenceImg from '../assets/references.svg';
import ForumImg from '../assets/forum.svg';
import ArticleImg from '../assets/article.svg';
import TutorialImg from '../assets/tutorial.svg';

const Landing = () => {
  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight - 100, behavior: "smooth" });
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <motion.div
        className="w-screen h-screen flex justify-center items-center text-white
          [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <div className="flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-t from-gray-600 to-white"
            variants={fadeInVariants}
          >
            CPLUSPLUS.com
          </motion.h1>
          <motion.h2
            className="text-lg md:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-t from-gray-500 to-white mt-4"
            variants={fadeInVariants}
          >
            Your all-in-one hub for C++ tutorials, references, and expert guidance.
          </motion.h2>
          <motion.button
            className="border-2 border-blue-900 px-6 py-3 mt-6 rounded-full 
             hover:bg-blue-700 transition duration-300 text-lg md:text-xl"
            onClick={handleScrollDown}
            variants={fadeInVariants}
            whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 900 } }}
          >
            Get Started
          </motion.button>

        </div>
      </motion.div>

      <div className="w-screen min-h-screen px-4 sm:px-6 md:px-[6vw] grid 
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 
        [background:radial-gradient(125%_125%_at_50%_90%,#000_40%,#63e_100%)] py-10">
        <motion.div
          className="sm:col-span-1"
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Card title="References" to="/references" img={ReferenceImg} />
        </motion.div>
        <motion.div
          className="sm:col-span-1"
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Card title="Articles" to="/articles" img={ArticleImg} />
        </motion.div>
        <motion.div
          className="sm:col-span-1"
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Card title="Tutorials" to="/tutorial" img={TutorialImg} />
        </motion.div>
        <motion.div
          className="sm:col-span-1"
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Card title="Forum" to="/forum" img={ForumImg} />
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;