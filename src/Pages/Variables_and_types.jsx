import React from 'react';

const VariablesAndTypesDocPage = () => {
  return (
    <div className="variables-doc-page p-8  bg-gradient-to-t from-gray-900 to-sky-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Variables and Types in C++</h1>
      <p className="mb-4">
        The usefulness of the "Hello World" programs shown in the previous chapter is rather questionable. We had to write several lines of code, compile them, and then execute the resulting program, just to obtain the result of a simple sentence written on the screen. It certainly would have been much faster to type the output sentence ourselves.
      </p>
      <p className="mb-4">
        However, programming is not limited only to printing simple texts on the screen. In order to go a little further and to become able to write programs that perform useful tasks that really save us work, we need to introduce the concept of <strong>variables</strong>.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">What Are Variables?</h2>
      <p className="mb-4">
        A variable is a portion of memory to store a value. Each variable needs a name that identifies it and distinguishes it from the others. For example:
      </p>

      {/* Code Block */}
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
        <code>
          {`a = 5;
b = 2;
a = a + 1;
result = a - b;`}
        </code>
      </pre>

      <p className="mb-4">
        In this example, <code>a</code>, <code>b</code>, and <code>result</code> are variables. They store values that can be used and manipulated in the program.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Identifiers</h2>
      <p className="mb-4">
        A valid identifier is a sequence of one or more letters, digits, or underscore characters (<code>_</code>). Spaces, punctuation marks, and symbols cannot be part of an identifier. Identifiers must always begin with a letter or an underscore.
      </p>
      <p className="mb-4">
        C++ is a <strong>case-sensitive</strong> language. This means that <code>RESULT</code>, <code>result</code>, and <code>Result</code> are considered three different identifiers.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Fundamental Data Types</h2>
      <p className="mb-4">
        C++ provides several fundamental data types to represent different kinds of values. These include:
      </p>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">1. Character Types</h3>
        <p>
          Used to store single characters, such as <code>'A'</code> or <code>'$'</code>. The most common type is <code>char</code>.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">2. Numerical Integer Types</h3>
        <p>
          Used to store whole numbers, such as <code>7</code> or <code>1024</code>. They can be signed (support negative values) or unsigned (only non-negative values).
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">3. Floating-Point Types</h3>
        <p>
          Used to store real numbers, such as <code>3.14</code> or <code>0.01</code>. The most common types are <code>float</code>, <code>double</code>, and <code>long double</code>.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">4. Boolean Type</h3>
        <p>
          Used to store true/false values. The type is <code>bool</code>.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Declaration of Variables</h2>
      <p className="mb-4">
        In C++, variables must be declared before they are used. The syntax is:
      </p>

      {/* Code Block */}
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
        <code>
          {`int a;
float mynumber;`}
        </code>
      </pre>

      <p className="mb-4">
        You can also declare multiple variables of the same type in a single statement:
      </p>

      {/* Code Block */}
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
        <code>
          {`int a, b, c;`}
        </code>
      </pre>

      <h2 className="text-2xl font-bold mt-8 mb-4">Initialization of Variables</h2>
      <p className="mb-4">
        Variables can be initialized at the time of declaration. There are three ways to do this in C++:
      </p>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">1. C-like Initialization</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg mb-4">
          <code>
            {`int x = 0;`}
          </code>
        </pre>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">2. Constructor Initialization</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg mb-4">
          <code>
            {`int x (0);`}
          </code>
        </pre>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">3. Uniform Initialization</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg mb-4">
          <code>
            {`int x {0};`}
          </code>
        </pre>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Type Deduction: <code>auto</code> and <code>decltype</code></h2>
      <p className="mb-4">
        C++ allows the compiler to automatically deduce the type of a variable using <code>auto</code> and <code>decltype</code>:
      </p>

      {/* Code Block */}
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
        <code>
          {`int foo = 0;
auto bar = foo;  // bar is of type int
decltype(foo) baz;  // baz is of type int`}
        </code>
      </pre>

      <h2 className="text-2xl font-bold mt-8 mb-4">Introduction to Strings</h2>
      <p className="mb-4">
        Strings are used to store sequences of characters. In C++, the <code>string</code> class is used for this purpose:
      </p>

      {/* Code Block */}
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
        <code>
          {`#include <iostream>
#include <string>
using namespace std;

int main() {
  string mystring = "This is a string";
  cout << mystring;
  return 0;
}`}
        </code>
      </pre>

      <p className="mb-4">
        Strings can be initialized and manipulated just like fundamental types.
      </p>
    </div>
  );
};

export default VariablesAndTypesDocPage;