import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const References = () => {
  return (
    <>
      <div className="w-screen h-[10vh]"></div>
      <div className="flex items-center text-white bg-gray-950">
        {/* Sidebar */}
        <div className="sidebar w-[30vw] h-screen bg-gradient-to-t from-gray-900 to-slate-700 border-r-4 border-gray-900">
          <h1 className="text-1xl md:text-2xl lg:text-3xl font-bold my-6 md:my-8 lg:my-10 px-4 md:px-6 ">
            References
          </h1>
          <nav>
            <ul className="space-y-4 px-4 md:px-6 text-xl md:text-2xl lg:text-3xl">
              <li>
                C Library
                <ul className="space-y-1 mt-2 px-4 md:px-6 text-sm md:text-base lg:text-lg">
                  <li>
                    <Link
                      to="refernces/clibrary"
                      className="block hover:bg-gray-950 rounded p-1 md:p-2"
                    >
                      Intro
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                Containers
                <ul className="space-y-1 mt-2 px-4 md:px-6 text-sm md:text-base lg:text-lg">
                  <li>
                    <Link
                      to="refernces/stl"
                      className="block hover:bg-gray-950 rounded p-1 md:p-2"
                    >
                      Intro
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                Input/Output
                <ul className="space-y-1 mt-2 px-4 md:px-6 text-sm md:text-base lg:text-lg">
                  <li>
                    <Link
                      to="refernces/iolibrary"
                      className="block hover:bg-gray-950 rounded p-1 md:p-2"
                    >
                      Intro
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                Multithreading
                <ul className="space-y-1 mt-2 px-4 md:px-6 text-sm md:text-base lg:text-lg">
                  <li>
                    <Link
                      to="refernces/multithreading"
                      className="block hover:bg-gray-950 rounded p-1 md:p-2"
                    >
                      Intro
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                Other
                <ul className="space-y-1 mt-2 px-4 md:px-6 text-sm md:text-base lg:text-lg">
                  <li>
                    <Link
                      to="refernces/std"
                      className="block hover:bg-gray-950 rounded p-1 md:p-2"
                    >
                      Intro
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="w-[80vw] h-screen overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default References;