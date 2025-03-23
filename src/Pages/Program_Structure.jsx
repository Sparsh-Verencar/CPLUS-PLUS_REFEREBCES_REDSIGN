import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Program_Structure = () => {
  return (
    <div className="p-6 sm:p-10 bg-gradient-to-t from-gray-900 to-sky-900 text-white">
      <motion.h1 className="text-3xl sm:text-4xl font-bold mb-6" variants={fadeIn} initial="hidden" animate="visible">
        Structure of a C++ Program
      </motion.h1>
      
      <motion.p className="mb-4" variants={fadeIn} initial="hidden" animate="visible">
        The best way to learn a programming language is by writing programs. Typically, the first program beginners write is a program called "Hello World", which simply prints "Hello World" to your computer screen.
      </motion.p>

      <motion.pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-6" variants={fadeIn} initial="hidden" animate="visible">
        <code>
          {`// my first program in C++
#include <iostream>

int main()
{
  std::cout << "Hello World!";
}`}
        </code>
      </motion.pre>

      <motion.h2 className="text-2xl font-bold mt-8 mb-4" variants={fadeIn} initial="hidden" animate="visible">
        Line-by-Line Explanation
      </motion.h2>
      
      <div className="space-y-6">
        {[ 
          { line: "// my first program in C++", text: "Two slashes indicate a comment, which is ignored by the compiler." },
          { line: "#include <iostream>", text: "Includes the standard C++ library for input and output operations." },
          { line: "int main()", text: "Defines the main function, which is the starting point of every C++ program." },
          { line: "std::cout << \"Hello World!\";", text: "Outputs text to the console using the standard output stream." }
        ].map((item, index) => (
          <motion.div key={index} variants={fadeIn} initial="hidden" animate="visible" className="p-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">{item.line}</h3>
            <p className="text-gray-300">{item.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.h2 className="text-2xl font-bold mt-8 mb-4" variants={fadeIn} initial="hidden" animate="visible">
        Adding More Statements
      </motion.h2>
      
      <motion.pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-6" variants={fadeIn} initial="hidden" animate="visible">
        <code>
          {`// my second program in C++
#include <iostream>

int main()
{
  std::cout << "Hello World! ";
  std::cout << "I'm a C++ program";
}`}
        </code>
      </motion.pre>

      <motion.h2 className="text-2xl font-bold mt-8 mb-4" variants={fadeIn} initial="hidden" animate="visible">
        Comments in C++
      </motion.h2>
      <motion.p className="mb-4" variants={fadeIn} initial="hidden" animate="visible">
        Comments help explain the code but do not affect its execution. C++ supports two types of comments:
      </motion.p>

      <motion.pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-6" variants={fadeIn} initial="hidden" animate="visible">
        <code>
          {`// This is a single-line comment
/* This is a
   multi-line comment */`}
        </code>
      </motion.pre>
      
      <motion.h2 className="text-2xl font-bold mt-8 mb-4" variants={fadeIn} initial="hidden" animate="visible">
        Using Namespace std
      </motion.h2>
      <motion.p className="mb-4" variants={fadeIn} initial="hidden" animate="visible">
        Instead of using std::cout, we can use a shorter form by adding <code>using namespace std;</code> at the beginning of the program.
      </motion.p>

      <motion.pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-6" variants={fadeIn} initial="hidden" animate="visible">
        <code>
          {`// my second program in C++
#include <iostream>
using namespace std;

int main()
{
  cout << "Hello World! ";
  cout << "I'm a C++ program";
}`}
        </code>
      </motion.pre>
    </div>
  );
};

export default motion(Program_Structure);
