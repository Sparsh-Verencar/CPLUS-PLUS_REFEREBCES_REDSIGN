import React from 'react';

const Program_Structure = () => {
  return (
    <div className=" p-8 bg-gradient-to-t from-gray-900 to-sky-900 text-white ">
      <h1 className="text-4xl font-bold mb-6">Structure of a C++ Program</h1>
      <p className="mb-4">
        The best way to learn a programming language is by writing programs. Typically, the first program beginners write is a program called "Hello World", which simply prints "Hello World" to your computer screen. Although it is very simple, it contains all the fundamental components C++ programs have:
      </p>

      {/* Code Block */}
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
        <code>
          {`// my first program in C++
                #include <iostream>

                int main()
                {
                std::cout << "Hello World!";
                }`}
        </code>
      </pre>

      <p className="mb-4">
        The left panel above shows the C++ code for this program. The right panel shows the result when the program is executed by a computer. The grey numbers to the left of the panels are line numbers to make discussing programs and researching errors easier. They are not part of the program.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Line-by-Line Explanation</h2>

      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">Line 1: <code>// my first program in C++</code></h3>
          <p>
            Two slash signs indicate that the rest of the line is a comment inserted by the programmer but which has no effect on the behavior of the program. Programmers use them to include short explanations or observations concerning the code or program. In this case, it is a brief introductory description of the program.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Line 2: <code>#include &lt;iostream&gt;</code></h3>
          <p>
            Lines beginning with a hash sign (<code>#</code>) are directives read and interpreted by what is known as the preprocessor. They are special lines interpreted before the compilation of the program itself begins. In this case, the directive <code>#include &lt;iostream&gt;</code>, instructs the preprocessor to include a section of standard C++ code, known as header <code>iostream</code>, that allows performing standard input and output operations, such as writing the output of this program (<code>Hello World</code>) to the screen.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Line 3: A blank line.</h3>
          <p>
            Blank lines have no effect on a program. They simply improve the readability of the code.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Line 4: <code>int main ()</code></h3>
          <p>
            This line initiates the declaration of a function. Essentially, a function is a group of code statements which are given a name: in this case, this gives the name <code>main</code> to the group of code statements that follow. Functions will be discussed in detail in a later chapter, but essentially, their definition is introduced with a succession of a type (<code>int</code>), a name (<code>main</code>), and a pair of parentheses (<code>()</code>), optionally including parameters.
          </p>
          <p>
            The function named <code>main</code> is a special function in all C++ programs; it is the function called when the program is run. The execution of all C++ programs begins with the <code>main</code> function, regardless of where the function is actually located within the code.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Lines 5 and 7: <code>{`{`}</code> and <code>{`}`}</code></h3>
          <p>
            The open brace (<code>{`{`}</code>) at line 5 indicates the beginning of <code>main</code>'s function definition, and the closing brace (<code>{`}`}</code>) at line 7, indicates its end. Everything between these braces is the function's body that defines what happens when <code>main</code> is called. All functions use braces to indicate the beginning and end of their definitions.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Line 6: <code>std::cout &lt;&lt; "Hello World!";</code></h3>
          <p>
            This line is a C++ statement. A statement is an expression that can actually produce some effect. It is the meat of a program, specifying its actual behavior. Statements are executed in the same order that they appear within a function's body.
          </p>
          <p>
            This statement has three parts: First, <code>std::cout</code>, which identifies the standard character output device (usually, this is the computer screen). Second, the insertion operator (<code>&lt;&lt;</code>), which indicates that what follows is inserted into <code>std::cout</code>. Finally, a sentence within quotes (<code>"Hello world!"</code>), is the content inserted into the standard output.
          </p>
          <p>
            Notice that the statement ends with a semicolon (<code>;</code>). This character marks the end of the statement, just as the period ends a sentence in English. All C++ statements must end with a semicolon character. One of the most common syntax errors in C++ is forgetting to end a statement with a semicolon.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Adding More Statements</h2>
      <p className="mb-4">
        Now, let's add an additional statement to our first program:
      </p>

      {/* Code Block */}
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
        <code>
          {`// my second program in C++
#include <iostream>

int main ()
{
  std::cout << "Hello World! ";
  std::cout << "I'm a C++ program";
}`}
        </code>
      </pre>

      <p className="mb-4">
        In this case, the program performed two insertions into <code>std::cout</code> in two different statements. Once again, the separation in different lines of code simply gives greater readability to the program.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Comments</h2>
      <p className="mb-4">
        Comments do not affect the operation of the program; however, they provide an important tool to document directly within the source code what the program does and how it operates.
      </p>
      <p className="mb-4">
        C++ supports two ways of commenting code:
      </p>

      {/* Code Block */}
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
        <code>
          {`// line comment
/* block comment */`}
        </code>
      </pre>


    </div>
  );
};

export default Program_Structure;