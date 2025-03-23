import React from 'react';
import { motion } from 'framer-motion';

const Others = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  const tableRowVariants = {
    hover: { scale: 1.02, backgroundColor: '#374151', transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      className="p-4 md:p-8 bg-gradient-to-t from-gray-900 to-slate-700"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
    >
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-4 md:mb-6"
        variants={fadeInVariants}
      >
        Miscellaneous Headers in C++ Standard Library
      </motion.h1>

      <motion.p
        className="mb-4 text-sm md:text-base"
        variants={fadeInVariants}
      >
        The C++ Standard Library includes a variety of headers that provide functionality for tasks such as handling exceptions, working with strings, managing memory, and more. These headers are essential for building robust and efficient C++ applications.
      </motion.p>

      <motion.h2
        className="text-2xl md:text-2xl font-bold mt-6 md:mt-8 mb-4"
        variants={fadeInVariants}
      >
        Headers
      </motion.h2>
      <motion.p
        className="mb-4 text-sm md:text-base"
        variants={fadeInVariants}
      >
        Below is a list of miscellaneous headers in the C++ Standard Library:
      </motion.p>

      <motion.div
        className="overflow-x-auto mb-6"
        variants={fadeInVariants}
      >
        <table className="min-w-full bg-gradient-to-t from-gray-900 to-slate-700 border border-gray-300">
          <thead>
            <tr className="bg-gradient-to-t from-gray-900 to-slate-700">
              <th className="px-4 py-2 border text-sm md:text-base">Header</th>
              <th className="px-4 py-2 border text-sm md:text-base">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              { header: '<complex>', description: 'Complex numbers library (header)' },
              { header: '<exception>', description: 'Standard exceptions (header)' },
              { header: '<functional>', description: 'Function objects (header)' },
              { header: '<iterator>', description: 'Iterator definitions (header)' },
              { header: '<limits>', description: 'Numeric limits (header)' },
              { header: '<locale>', description: 'Localization library (header)' },
              { header: '<memory>', description: 'Memory elements (header)' },
              { header: '<new>', description: 'Dynamic memory (header)' },
              { header: '<numeric>', description: 'Generalized numeric operations (header)' },
              { header: '<stdexcept>', description: 'Exception classes (header)' },
              { header: '<string>', description: 'Strings (header)' },
              { header: '<typeinfo>', description: 'Type information (header)' },
              { header: '<utility>', description: 'Utility components (header)' },
              { header: '<valarray>', description: 'Library for arrays of numeric values (header)' },
            ].map((row, index) => (
              <motion.tr
                key={index}
                className="hover:bg-gray-800"
                variants={tableRowVariants}
                whileHover="hover"
              >
                <td className="px-4 py-2 border text-sm md:text-base">
                  <code>{row.header}</code>
                </td>
                <td className="px-4 py-2 border text-sm md:text-base">
                  {row.description}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <motion.h2
        className="text-2xl md:text-2xl font-bold mt-6 md:mt-8 mb-4"
        variants={fadeInVariants}
      >
        Examples
      </motion.h2>
      <motion.p
        className="mb-4 text-sm md:text-base"
        variants={fadeInVariants}
      >
        Below are some examples of how these headers can be used in C++ programs:
      </motion.p>

      <motion.div
        className="mb-6"
        variants={fadeInVariants}
      >
        <h3 className="text-xl md:text-xl font-semibold mt-4 md:mt-6 mb-2">
          <code>&lt;complex&gt;</code>
        </h3>
        <p className="mb-4 text-sm md:text-base">
          The <code>&lt;complex&gt;</code> header provides support for complex numbers.
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg">
          <code className="text-sm md:text-base">
            {`#include <iostream>
#include <complex>

int main() {
    std::complex<double> z(1.0, 2.0); // 1 + 2i
    std::cout << "Real part: " << z.real() << std::endl;
    std::cout << "Imaginary part: " << z.imag() << std::endl;
    return 0;
}`}
          </code>
        </pre>
      </motion.div>

      <motion.div
        className="mb-6"
        variants={fadeInVariants}
      >
        <h3 className="text-xl md:text-xl font-semibold mt-4 md:mt-6 mb-2">
          <code>&lt;string&gt;</code>
        </h3>
        <p className="mb-4 text-sm md:text-base">
          The <code>&lt;string&gt;</code> header provides support for string manipulation.
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg">
          <code className="text-sm md:text-base">
            {`#include <iostream>
#include <string>

int main() {
    std::string str = "Hello, World!";
    std::cout << "Length: " << str.length() << std::endl;
    std::cout << "First character: " << str[0] << std::endl;
    return 0;
}`}
          </code>
        </pre>
      </motion.div>

      <motion.div
        className="mb-6"
        variants={fadeInVariants}
      >
        <h3 className="text-xl md:text-xl font-semibold mt-4 md:mt-6 mb-2">
          <code>&lt;memory&gt;</code>
        </h3>
        <p className="mb-4 text-sm md:text-base">
          The <code>&lt;memory&gt;</code> header provides support for smart pointers.
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg">
          <code className="text-sm md:text-base">
            {`#include <iostream>
#include <memory>

int main() {
    std::unique_ptr<int> ptr = std::make_unique<int>(42);
    std::cout << "Value: " << *ptr << std::endl;
    return 0;
}`}
          </code>
        </pre>
      </motion.div>
    </motion.div>
  );
};

export default Others;