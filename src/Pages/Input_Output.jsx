import React from 'react';

const IOLibraryDoc = () => {
  return (
    <div className="p-8 bg-gradient-to-t from-gray-900 to-slate-700">
      <h1 className="text-4xl font-bold mb-6">Input/Output Library in C++</h1>
      <p className="mb-4">
        The <code>iostream</code> library is an object-oriented library that provides input and output functionality using streams.
      </p>
      <p className="mb-4">
        A <strong>stream</strong> is an abstraction that represents a device on which input and output operations are performed. A stream can be represented as a source or destination of characters of indefinite length.
      </p>
      <p className="mb-6">
        Streams are generally associated with physical sources or destinations of characters, such as disk files, keyboards, or consoles. For example, file streams are C++ objects used to manipulate and interact with files. Once a file stream is used to open a file, any input or output operation performed on that stream is physically reflected in the file.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Basic Class Templates</h2>
      <p className="mb-4">
        The base of the <code>iostream</code> library is the hierarchy of class templates. These templates provide most of the library's functionality in a type-independent fashion.
      </p>
      <p className="mb-4">
        Each class template has two template parameters:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>
          <code>charT</code>: Determines the type of elements to be manipulated (e.g., <code>char</code> or <code>wchar_t</code>).
        </li>
        <li>
          <code>traits</code>: Provides additional characteristics specific to the type of elements.
        </li>
      </ul>
      <p className="mb-6">
        Class templates are prefixed with <code>basic_</code>. For example, <code>basic_istream</code> is the template for <code>istream</code>, and <code>basic_fstream</code> is the template for <code>fstream</code>.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Class Template Instantiations</h2>
      <p className="mb-4">
        The library incorporates two standard sets of instantiations:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Narrow-oriented</strong>: Manipulates elements of type <code>char</code> (e.g., <code>ios</code>, <code>istream</code>, <code>ofstream</code>).
        </li>
        <li>
          <strong>Wide-oriented</strong>: Manipulates elements of type <code>wchar_t</code> (e.g., <code>wios</code>, <code>wistream</code>, <code>wofstream</code>).
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Standard Objects</h2>
      <p className="mb-4">
        The <code>&lt;iostream&gt;</code> header declares objects for standard input and output operations:
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-gradient-to-t from-gray-900 to-slate-700 border border-gray-300">
          <thead>
            <tr className="bg-gradient-to-t from-gray-900 to-slate-700">
              <th className="px-4 py-2 border">Object</th>
              <th className="px-4 py-2 border">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border"><code>cin</code></td>
              <td className="px-4 py-2 border">Standard input stream</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>cout</code></td>
              <td className="px-4 py-2 border">Standard output stream</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>cerr</code></td>
              <td className="px-4 py-2 border">Standard output stream for errors</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>clog</code></td>
              <td className="px-4 py-2 border">Standard output stream for logging</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Types</h2>
      <p className="mb-4">
        The <code>iostream</code> classes use defined types for positions, offsets, and sizes:
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-gradient-to-t from-gray-900 to-slate-700 border border-gray-300">
          <thead>
            <tr className="bg-gradient-to-t from-gray-900 to-slate-700">
              <th className="px-4 py-2 border">Type</th>
              <th className="px-4 py-2 border">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border"><code>streampos</code></td>
              <td className="px-4 py-2 border">Stream position type</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>streamoff</code></td>
              <td className="px-4 py-2 border">Stream offset type</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>streamsize</code></td>
              <td className="px-4 py-2 border">Stream size type</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Manipulators</h2>
      <p className="mb-4">
        Manipulators are global functions used with insertion (<code>&lt;&lt;</code>) and extraction (<code>&gt;&gt;</code>) operators to modify stream properties and formatting settings. Examples include:
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-gradient-to-t from-gray-900 to-slate-700 border border-gray-300">
          <thead>
            <tr className="bg-gradient-to-t from-gray-900 to-slate-700">
              <th className="px-4 py-2 border">Manipulator</th>
              <th className="px-4 py-2 border">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border"><code>endl</code></td>
              <td className="px-4 py-2 border">Insert newline and flush</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>hex</code></td>
              <td className="px-4 py-2 border">Use hexadecimal base</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>scientific</code></td>
              <td className="px-4 py-2 border">Use scientific floating-point notation</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>setw</code></td>
              <td className="px-4 py-2 border">Set field width</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Organization</h2>
      <p className="mb-4">
        The <code>iostream</code> library is split into different header files:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li><code>&lt;ios&gt;</code>: Base classes for streams.</li>
        <li><code>&lt;iostream&gt;</code>: Standard input/output objects (e.g., <code>cin</code>, <code>cout</code>).</li>
        <li><code>&lt;fstream&gt;</code>: File stream classes (e.g., <code>ifstream</code>, <code>ofstream</code>).</li>
        <li><code>&lt;sstream&gt;</code>: String stream classes (e.g., <code>istringstream</code>, <code>ostringstream</code>).</li>
        <li><code>&lt;iomanip&gt;</code>: Manipulators with parameters (e.g., <code>setw</code>, <code>setprecision</code>).</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Elements of the iostream Library</h2>
      <p className="mb-4">
        Below are the key elements of the <code>iostream</code> library (char instantiation):
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-gradient-to-t from-gray-900 to-slate-700 border border-gray-300">
          <thead>
            <tr className="bg-gradient-to-t from-gray-900 to-slate-700">
              <th className="px-4 py-2 border">Element</th>
              <th className="px-4 py-2 border">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border"><code>ios_base</code></td>
              <td className="px-4 py-2 border">Base class for streams</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>istream</code></td>
              <td className="px-4 py-2 border">Input stream</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>ostream</code></td>
              <td className="px-4 py-2 border">Output stream</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>fstream</code></td>
              <td className="px-4 py-2 border">Input/output file stream</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>streambuf</code></td>
              <td className="px-4 py-2 border">Base buffer class for streams</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IOLibraryDoc;