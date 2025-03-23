import React from 'react';
import { motion } from 'framer-motion';

const CLibrary = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  const tableRowVariants = {
    hover: { scale: 1.02, backgroundColor: '#374151', transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      className="p-4 md:p-8 bg-gradient-to-t from-gray-900 to-slate-700 text-white"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
    >
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-4 md:mb-6"
        variants={fadeInVariants}
      >
        C Library in C++
      </motion.h1>

      <motion.p
        className="mb-4 text-sm md:text-base"
        variants={fadeInVariants}
      >
        The C++ library includes the same definitions as the C language library organized in the same structure of header files, with the following differences:
      </motion.p>
      <motion.ul
        className="list-disc list-inside mb-6 text-sm md:text-base"
        variants={fadeInVariants}
      >
        <li>
          Each header file has the same name as the C language version but with a <code>"c"</code> prefix and no extension. For example, the C++ equivalent for the C language header file <code>&lt;stdlib.h&gt;</code> is <code>&lt;cstdlib&gt;</code>.
        </li>
        <li>
          Every element of the library is defined within the <code>std</code> namespace.
        </li>
        <li>
          For compatibility with C, the traditional header names <code>name.h</code> (like <code>stdlib.h</code>) are also provided with the same definitions within the global namespace. However, their use is deprecated in C++.
        </li>
      </motion.ul>

      <motion.h2
        className="text-2xl md:text-2xl font-bold mt-6 md:mt-8 mb-4"
        variants={fadeInVariants}
      >
        Specific Changes in C++
      </motion.h2>
      <motion.ul
        className="list-disc list-inside mb-6 text-sm md:text-base"
        variants={fadeInVariants}
      >
        <li>
          <code>wchar_t</code>, <code>char16_t</code>, <code>char32_t</code>, and <code>bool</code> are fundamental types in C++ and therefore are not defined in the corresponding header where they appear in C.
        </li>
        <li>
          The following functions have changes in their declarations related to the <code>const</code>ness of their parameters: <code>strchr</code>, <code>strpbrk</code>, <code>strrchr</code>, <code>strstr</code>, <code>memchr</code>.
        </li>
        <li>
          The functions <code>atexit</code>, <code>exit</code>, and <code>abort</code>, defined in <code>&lt;cstdlib&gt;</code>, have additions to their behavior in C++.
        </li>
        <li>
          Overloaded versions of some functions are provided with additional types as parameters and the same semantics, like <code>float</code> and <code>long double</code> versions of the functions in the <code>&lt;cmath&gt;</code> header file, or <code>long</code> versions for <code>abs</code> and <code>div</code>.
        </li>
      </motion.ul>

      <motion.h2
        className="text-2xl md:text-2xl font-bold mt-6 md:mt-8 mb-4"
        variants={fadeInVariants}
      >
        Note on Versions
      </motion.h2>
      <motion.ul
        className="list-disc list-inside mb-6 text-sm md:text-base"
        variants={fadeInVariants}
      >
        <li>
          <strong>C++98</strong>: Includes the C library as described by the 1990 ISO C standard and its amendment #1 (ISO/IEC 9899:1990 and ISO/IEC 9899:1990/DAM 1).
        </li>
        <li>
          <strong>C++11</strong>: Includes the C library as described by the 1999 ISO C standard and its Technical Corrigenda 1, 2, and 3 (ISO/IEC 9899:1999 and ISO/IEC 9899:1999/Cor.1,2,3), plus <code>&lt;cuchar&gt;</code> (as by ISO/IEC 19769:2004).
        </li>
        <li>
          Other introductions by the 2011 ISO C standard are not compatible with C++.
        </li>
      </motion.ul>

      <motion.h2
        className="text-2xl md:text-2xl font-bold mt-6 md:mt-8 mb-4"
        variants={fadeInVariants}
      >
        Headers
      </motion.h2>
      <motion.div
        className="overflow-x-auto mb-6"
        variants={fadeInVariants}
      >
        <table className="min-w-full bg-gradient-to-t from-gray-900 to-slate-700 border border-gray-300">
          <thead>
            <tr className="bg-gradient-to-t from-gray-900 to-slate-700">
              <th className="px-4 py-2 border text-sm md:text-base">C90 (C++98)</th>
              <th className="px-4 py-2 border text-sm md:text-base">C99 (C++11)</th>
              <th className="px-4 py-2 border text-sm md:text-base">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              { c90: '<cassert>', c99: 'assert.h', description: 'C Diagnostics Library (header)' },
              { c90: '<cctype>', c99: 'ctype.h', description: 'Character handling functions (header)' },
              { c90: '<cerrno>', c99: 'errno.h', description: 'C Errors (header)' },
              { c90: '<cfloat>', c99: 'float.h', description: 'Characteristics of floating-point types (header)' },
              { c90: '<ciso646>', c99: 'iso646.h', description: 'ISO 646 Alternative operator spellings (header)' },
              { c90: '<climits>', c99: 'limits.h', description: 'Sizes of integral types (header)' },
              { c90: '<clocale>', c99: 'locale.h', description: 'C localization library (header)' },
              { c90: '<cmath>', c99: 'math.h', description: 'C numerics library (header)' },
              { c90: '<csetjmp>', c99: 'setjmp.h', description: 'Non-local jumps (header)' },
              { c90: '<csignal>', c99: 'signal.h', description: 'C library to handle signals (header)' },
              { c90: '<cstdarg>', c99: 'stdarg.h', description: 'Variable arguments handling (header)' },
              { c90: '<cstddef>', c99: 'stddef.h', description: 'C Standard definitions (header)' },
              { c90: '<cstdio>', c99: 'stdio.h', description: 'C library to perform Input/Output operations (header)' },
              { c90: '<cstdlib>', c99: 'stdlib.h', description: 'C Standard General Utilities Library (header)' },
              { c90: '<cstring>', c99: 'string.h', description: 'C Strings (header)' },
              { c90: '<ctime>', c99: 'time.h', description: 'C Time Library (header)' },
            ].map((row, index) => (
              <motion.tr
                key={index}
                className="hover:bg-gray-800"
                variants={tableRowVariants}
                whileHover="hover"
              >
                <td className="px-4 py-2 border text-sm md:text-base">
                  <code>{row.c90}</code>
                </td>
                <td className="px-4 py-2 border text-sm md:text-base">
                  <code>{row.c99}</code>
                </td>
                <td className="px-4 py-2 border text-sm md:text-base">
                  {row.description}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <motion.p
        className="mt-6 text-sm md:text-base"
        variants={fadeInVariants}
      >
        Amendment 1 to ISO-C 90 added two additional headers: <code>&lt;cwchar&gt;</code> and <code>&lt;cwctype&gt;</code>.
      </motion.p>
    </motion.div>
  );
};

export default CLibrary;