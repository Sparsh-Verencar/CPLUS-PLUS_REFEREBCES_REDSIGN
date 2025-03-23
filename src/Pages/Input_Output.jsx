import React from 'react';
import { motion } from 'framer-motion';

const IOLibraryDoc = () => {
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
        Input/Output Library in C++
      </motion.h1>

      <motion.p
        className="mb-4 text-sm md:text-base"
        variants={fadeInVariants}
      >
        The <code>iostream</code> library is an object-oriented library that provides input and output functionality using streams.
      </motion.p>
      <motion.p
        className="mb-4 text-sm md:text-base"
        variants={fadeInVariants}
      >
        A <strong>stream</strong> is an abstraction that represents a device on which input and output operations are performed. A stream can be represented as a source or destination of characters of indefinite length.
      </motion.p>
      <motion.p
        className="mb-6 text-sm md:text-base"
        variants={fadeInVariants}
      >
        Streams are generally associated with physical sources or destinations of characters, such as disk files, keyboards, or consoles. For example, file streams are C++ objects used to manipulate and interact with files. Once a file stream is used to open a file, any input or output operation performed on that stream is physically reflected in the file.
      </motion.p>

      <motion.h2
        className="text-2xl md:text-2xl font-bold mt-6 md:mt-8 mb-4"
        variants={fadeInVariants}
      >
        Basic Class Templates
      </motion.h2>
      <motion.p
        className="mb-4 text-sm md:text-base"
        variants={fadeInVariants}
      >
        The base of the <code>iostream</code> library is the hierarchy of class templates. These templates provide most of the library's functionality in a type-independent fashion.
      </motion.p>
      <motion.p
        className="mb-4 text-sm md:text-base"
        variants={fadeInVariants}
      >
        Each class template has two template parameters:
      </motion.p>
      <motion.ul
        className="list-disc list-inside mb-6 text-sm md:text-base"
        variants={fadeInVariants}
      >
        <li>
          <code>charT</code>: Determines the type of elements to be manipulated (e.g., <code>char</code> or <code>wchar_t</code>).
        </li>
        <li>
          <code>traits</code>: Provides additional characteristics specific to the type of elements.
        </li>
      </motion.ul>
      <motion.p
        className="mb-6 text-sm md:text-base"
        variants={fadeInVariants}
      >
        Class templates are prefixed with <code>basic_</code>. For example, <code>basic_istream</code> is the template for <code>istream</code>, and <code>basic_fstream</code> is the template for <code>fstream</code>.
      </motion.p>

      <motion.h2
        className="text-2xl md:text-2xl font-bold mt-6 md:mt-8 mb-4"
        variants={fadeInVariants}
      >
        Class Template Instantiations
      </motion.h2>
      <motion.p
        className="mb-4 text-sm md:text-base"
        variants={fadeInVariants}
      >
        The library incorporates two standard sets of instantiations:
      </motion.p>
      <motion.ul
        className="list-disc list-inside mb-6 text-sm md:text-base"
        variants={fadeInVariants}
      >
        <li>
          <strong>Narrow-oriented</strong>: Manipulates elements of type <code>char</code> (e.g., <code>ios</code>, <code>istream</code>, <code>ofstream</code>).
        </li>
        <li>
          <strong>Wide-oriented</strong>: Manipulates elements of type <code>wchar_t</code> (e.g., <code>wios</code>, <code>wistream</code>, <code>wofstream</code>).
        </li>
      </motion.ul>

      <motion.h2
        className="text-2xl md:text-2xl font-bold mt-6 md:mt-8 mb-4"
        variants={fadeInVariants}
      >
        Standard Objects
      </motion.h2>
      <motion.p
        className="mb-4 text-sm md:text-base"
        variants={fadeInVariants}
      >
        The <code>&lt;iostream&gt;</code> header declares objects for standard input and output operations:
      </motion.p>
      <motion.div
        className="overflow-x-auto mb-6"
        variants={fadeInVariants}
      >
        <table className="min-w-full bg-gradient-to-t from-gray-900 to-slate-700 border border-gray-300">
          <thead>
            <tr className="bg-gradient-to-t from-gray-900 to-slate-700">
              <th className="px-4 py-2 border text-sm md:text-base">Object</th>
              <th className="px-4 py-2 border text-sm md:text-base">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              { object: 'cin', description: 'Standard input stream' },
              { object: 'cout', description: 'Standard output stream' },
              { object: 'cerr', description: 'Standard output stream for errors' },
              { object: 'clog', description: 'Standard output stream for logging' },
            ].map((row, index) => (
              <motion.tr
                key={index}
                className="hover:bg-gray-800"
                variants={tableRowVariants}
                whileHover="hover"
              >
                <td className="px-4 py-2 border text-sm md:text-base">
                  <code>{row.object}</code>
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
        Types
      </motion.h2>
      <motion.p
        className="mb-4 text-sm md:text-base"
        variants={fadeInVariants}
      >
        The <code>iostream</code> classes use defined types for positions, offsets, and sizes:
      </motion.p>
      <motion.div
        className="overflow-x-auto mb-6"
        variants={fadeInVariants}
      >
        <table className="min-w-full bg-gradient-to-t from-gray-900 to-slate-700 border border-gray-300">
          <thead>
            <tr className="bg-gradient-to-t from-gray-900 to-slate-700">
              <th className="px-4 py-2 border text-sm md:text-base">Type</th>
              <th className="px-4 py-2 border text-sm md:text-base">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              { type: 'streampos', description: 'Stream position type' },
              { type: 'streamoff', description: 'Stream offset type' },
              { type: 'streamsize', description: 'Stream size type' },
            ].map((row, index) => (
              <motion.tr
                key={index}
                className="hover:bg-gray-800"
                variants={tableRowVariants}
                whileHover="hover"
              >
                <td className="px-4 py-2 border text-sm md:text-base">
                  <code>{row.type}</code>
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
        Manipulators
      </motion.h2>
      <motion.p
        className="mb-4 text-sm md:text-base"
        variants={fadeInVariants}
      >
        Manipulators are global functions used with insertion (<code>&lt;&lt;</code>) and extraction (<code>&gt;&gt;</code>) operators to modify stream properties and formatting settings. Examples include:
      </motion.p>
      <motion.div
        className="overflow-x-auto mb-6"
        variants={fadeInVariants}
      >
        <table className="min-w-full bg-gradient-to-t from-gray-900 to-slate-700 border border-gray-300">
          <thead>
            <tr className="bg-gradient-to-t from-gray-900 to-slate-700">
              <th className="px-4 py-2 border text-sm md:text-base">Manipulator</th>
              <th className="px-4 py-2 border text-sm md:text-base">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              { manipulator: 'endl', description: 'Insert newline and flush' },
              { manipulator: 'hex', description: 'Use hexadecimal base' },
              { manipulator: 'scientific', description: 'Use scientific floating-point notation' },
              { manipulator: 'setw', description: 'Set field width' },
            ].map((row, index) => (
              <motion.tr
                key={index}
                className="hover:bg-gray-800"
                variants={tableRowVariants}
                whileHover="hover"
              >
                <td className="px-4 py-2 border text-sm md:text-base">
                  <code>{row.manipulator}</code>
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
        Organization
      </motion.h2>
      <motion.p
        className="mb-4 text-sm md:text-base"
        variants={fadeInVariants}
      >
        The <code>iostream</code> library is split into different header files:
      </motion.p>
      <motion.ul
        className="list-disc list-inside mb-6 text-sm md:text-base"
        variants={fadeInVariants}
      >
        <li><code>&lt;ios&gt;</code>: Base classes for streams.</li>
        <li><code>&lt;iostream&gt;</code>: Standard input/output objects (e.g., <code>cin</code>, <code>cout</code>).</li>
        <li><code>&lt;fstream&gt;</code>: File stream classes (e.g., <code>ifstream</code>, <code>ofstream</code>).</li>
        <li><code>&lt;sstream&gt;</code>: String stream classes (e.g., <code>istringstream</code>, <code>ostringstream</code>).</li>
        <li><code>&lt;iomanip&gt;</code>: Manipulators with parameters (e.g., <code>setw</code>, <code>setprecision</code>).</li>
      </motion.ul>

      <motion.h2
        className="text-2xl md:text-2xl font-bold mt-6 md:mt-8 mb-4"
        variants={fadeInVariants}
      >
        Elements of the iostream Library
      </motion.h2>
      <motion.p
        className="mb-4 text-sm md:text-base"
        variants={fadeInVariants}
      >
        Below are the key elements of the <code>iostream</code> library (char instantiation):
      </motion.p>
      <motion.div
        className="overflow-x-auto mb-6"
        variants={fadeInVariants}
      >
        <table className="min-w-full bg-gradient-to-t from-gray-900 to-slate-700 border border-gray-300">
          <thead>
            <tr className="bg-gradient-to-t from-gray-900 to-slate-700">
              <th className="px-4 py-2 border text-sm md:text-base">Element</th>
              <th className="px-4 py-2 border text-sm md:text-base">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              { element: 'ios_base', description: 'Base class for streams' },
              { element: 'istream', description: 'Input stream' },
              { element: 'ostream', description: 'Output stream' },
              { element: 'fstream', description: 'Input/output file stream' },
              { element: 'streambuf', description: 'Base buffer class for streams' },
            ].map((row, index) => (
              <motion.tr
                key={index}
                className="hover:bg-gray-800"
                variants={tableRowVariants}
                whileHover="hover"
              >
                <td className="px-4 py-2 border text-sm md:text-base">
                  <code>{row.element}</code>
                </td>
                <td className="px-4 py-2 border text-sm md:text-base">
                  {row.description}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  );
};

export default IOLibraryDoc;