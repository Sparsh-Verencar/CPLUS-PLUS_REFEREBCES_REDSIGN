import React from 'react';

const CLibrary = () => {
  return (
    <div className="p-8 bg-gradient-to-t from-gray-900 to-slate-700 text-white">
      <h1 className="text-4xl font-bold mb-6">C Library in C++</h1>
      <p className="mb-4">
        The C++ library includes the same definitions as the C language library organized in the same structure of header files, with the following differences:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>
          Each header file has the same name as the C language version but with a <code>"c"</code> prefix and no extension. For example, the C++ equivalent for the C language header file <code>&lt;stdlib.h&gt;</code> is <code>&lt;cstdlib&gt;</code>.
        </li>
        <li>
          Every element of the library is defined within the <code>std</code> namespace.
        </li>
        <li>
          For compatibility with C, the traditional header names <code>name.h</code> (like <code>stdlib.h</code>) are also provided with the same definitions within the global namespace. However, their use is deprecated in C++.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Specific Changes in C++</h2>
      <ul className="list-disc list-inside mb-6">
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
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Note on Versions</h2>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>C++98</strong>: Includes the C library as described by the 1990 ISO C standard and its amendment #1 (ISO/IEC 9899:1990 and ISO/IEC 9899:1990/DAM 1).
        </li>
        <li>
          <strong>C++11</strong>: Includes the C library as described by the 1999 ISO C standard and its Technical Corrigenda 1, 2, and 3 (ISO/IEC 9899:1999 and ISO/IEC 9899:1999/Cor.1,2,3), plus <code>&lt;cuchar&gt;</code> (as by ISO/IEC 19769:2004).
        </li>
        <li>
          Other introductions by the 2011 ISO C standard are not compatible with C++.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Headers</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gradient-to-t from-gray-900 to-slate-700 border border-gray-300">
          <thead>
            <tr className="bg-gradient-to-t from-gray-900 to-slate-700">
              <th className="px-4 py-2 border">C90 (C++98)</th>
              <th className="px-4 py-2 border">C99 (C++11)</th>
              <th className="px-4 py-2 border">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;cassert&gt;</code></td>
              <td className="px-4 py-2 border"><code>assert.h</code></td>
              <td className="px-4 py-2 border">C Diagnostics Library (header)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;cctype&gt;</code></td>
              <td className="px-4 py-2 border"><code>ctype.h</code></td>
              <td className="px-4 py-2 border">Character handling functions (header)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;cerrno&gt;</code></td>
              <td className="px-4 py-2 border"><code>errno.h</code></td>
              <td className="px-4 py-2 border">C Errors (header)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;cfloat&gt;</code></td>
              <td className="px-4 py-2 border"><code>float.h</code></td>
              <td className="px-4 py-2 border">Characteristics of floating-point types (header)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;ciso646&gt;</code></td>
              <td className="px-4 py-2 border"><code>iso646.h</code></td>
              <td className="px-4 py-2 border">ISO 646 Alternative operator spellings (header)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;climits&gt;</code></td>
              <td className="px-4 py-2 border"><code>limits.h</code></td>
              <td className="px-4 py-2 border">Sizes of integral types (header)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;clocale&gt;</code></td>
              <td className="px-4 py-2 border"><code>locale.h</code></td>
              <td className="px-4 py-2 border">C localization library (header)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;cmath&gt;</code></td>
              <td className="px-4 py-2 border"><code>math.h</code></td>
              <td className="px-4 py-2 border">C numerics library (header)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;csetjmp&gt;</code></td>
              <td className="px-4 py-2 border"><code>setjmp.h</code></td>
              <td className="px-4 py-2 border">Non-local jumps (header)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;csignal&gt;</code></td>
              <td className="px-4 py-2 border"><code>signal.h</code></td>
              <td className="px-4 py-2 border">C library to handle signals (header)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;cstdarg&gt;</code></td>
              <td className="px-4 py-2 border"><code>stdarg.h</code></td>
              <td className="px-4 py-2 border">Variable arguments handling (header)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;cstddef&gt;</code></td>
              <td className="px-4 py-2 border"><code>stddef.h</code></td>
              <td className="px-4 py-2 border">C Standard definitions (header)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;cstdio&gt;</code></td>
              <td className="px-4 py-2 border"><code>stdio.h</code></td>
              <td className="px-4 py-2 border">C library to perform Input/Output operations (header)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;cstdlib&gt;</code></td>
              <td className="px-4 py-2 border"><code>stdlib.h</code></td>
              <td className="px-4 py-2 border">C Standard General Utilities Library (header)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;cstring&gt;</code></td>
              <td className="px-4 py-2 border"><code>string.h</code></td>
              <td className="px-4 py-2 border">C Strings (header)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;ctime&gt;</code></td>
              <td className="px-4 py-2 border"><code>time.h</code></td>
              <td className="px-4 py-2 border">C Time Library (header)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-6">
        Amendment 1 to ISO-C 90 added two additional headers: <code>&lt;cwchar&gt;</code> and <code>&lt;cwctype&gt;</code>.
      </p>
    </div>
  );
};

export default CLibrary;