import React from 'react';

const Others = () => {
  return (
    <div className="p-8 bg-gradient-to-t from-gray-900 to-slate-700">
      <h1 className="text-4xl font-bold mb-6">Miscellaneous Headers in C++ Standard Library</h1>
      <p className="mb-4">
        The C++ Standard Library includes a variety of headers that provide functionality for tasks such as handling exceptions, working with strings, managing memory, and more. These headers are essential for building robust and efficient C++ applications.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Headers</h2>
      <p className="mb-4">
        Below is a list of miscellaneous headers in the C++ Standard Library:
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-gradient-to-t from-gray-900 to-slate-700 border border-gray-300">
          <thead>
            <tr className="bg-gradient-to-t from-gray-900 to-slate-700">
              <th className="px-4 py-2 border">Header</th>
              <th className="px-4 py-2 border">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;complex&gt;</code></td>
              <td className="px-4 py-2 border">Complex numbers library (header)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;exception&gt;</code></td>
              <td className="px-4 py-2 border">Standard exceptions (header)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;functional&gt;</code></td>
              <td className="px-4 py-2 border">Function objects (header)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;iterator&gt;</code></td>
              <td className="px-4 py-2 border">Iterator definitions (header)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;limits&gt;</code></td>
              <td className="px-4 py-2 border">Numeric limits (header)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;locale&gt;</code></td>
              <td className="px-4 py-2 border">Localization library (header)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;memory&gt;</code></td>
              <td className="px-4 py-2 border">Memory elements (header)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;new&gt;</code></td>
              <td className="px-4 py-2 border">Dynamic memory (header)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;numeric&gt;</code></td>
              <td className="px-4 py-2 border">Generalized numeric operations (header)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;stdexcept&gt;</code></td>
              <td className="px-4 py-2 border">Exception classes (header)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;string&gt;</code></td>
              <td className="px-4 py-2 border">Strings (header)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;typeinfo&gt;</code></td>
              <td className="px-4 py-2 border">Type information (header)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;utility&gt;</code></td>
              <td className="px-4 py-2 border">Utility components (header)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;valarray&gt;</code></td>
              <td className="px-4 py-2 border">Library for arrays of numeric values (header)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Examples</h2>
      <p className="mb-4">
        Below are some examples of how these headers can be used in C++ programs:
      </p>

      {/* Example: <complex> */}
      <h3 className="text-xl font-semibold mt-6 mb-2"><code>&lt;complex&gt;</code></h3>
      <p className="mb-4">
        The <code>&lt;complex&gt;</code> header provides support for complex numbers.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
        <code>
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

      {/* Example: <string> */}
      <h3 className="text-xl font-semibold mt-6 mb-2"><code>&lt;string&gt;</code></h3>
      <p className="mb-4">
        The <code>&lt;string&gt;</code> header provides support for string manipulation.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
        <code>
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

      {/* Example: <memory> */}
      <h3 className="text-xl font-semibold mt-6 mb-2"><code>&lt;memory&gt;</code></h3>
      <p className="mb-4">
        The <code>&lt;memory&gt;</code> header provides support for smart pointers.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
        <code>
          {`#include <iostream>
#include <memory>

int main() {
    std::unique_ptr<int> ptr = std::make_unique<int>(42);
    std::cout << "Value: " << *ptr << std::endl;
    return 0;
}`}
        </code>
      </pre>
    </div>
  );
};

export default Others;