import { motion } from "framer-motion";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import Logo from "../assets/C++_Logo.svg";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  const linkVariants = {
    hover: { scale: 1.1, color: "#ffffff", transition: { duration: 0.2 } },
  };

  return (
    <>
      <div className="fixed flex justify-between items-center w-screen h-[10vh] bg-[#060606] shadow-2xl shadow-blue-950 z-50">
        <Link to={"/"}>
          <motion.img 
            className="w-14 h-14 mx-[1vw]"
            src={Logo} 
            alt="logo"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </Link>

        <motion.input
          className="bg-gray-900 rounded-full w-[40vw] md:w-[30vw] text-amber-50 px-5 py-2 mx-2"
          type="search"
          placeholder="Search"
          whileFocus={{ scale: 1.05, transition: { duration: 0.2 } }}
        />

        <motion.button 
          className="text-white mx-[1vw] md:hidden"
          onClick={toggleMenu}
          whileHover={{ scale: 1.2 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </motion.button>

        <div className="callToAction hidden md:flex justify-between items-center text-gray-500 w-[35vw]">
          {["/", "/references", "/tutorial", "/articles", "/forum"].map((path, index) => (
            <motion.div key={index} variants={linkVariants} whileHover="hover">
              <NavLink to={path} className={({ isActive }) => (isActive ? "text-white" : "")}>
                {path.replace("/", "") || "Home"}
              </NavLink>
            </motion.div>
          ))}
        </div>

        <div className="mx-[1vw]">
          <SignedOut>
            <motion.button 
              className="rounded-2xl bg-gray-900 border-2 border-yellow-50 p-3 text-white"
              whileHover={{ scale: 1.1 }}
            >
              <SignInButton />
            </motion.button>
          </SignedOut>
          <SignedIn>
            <motion.button 
              className="text-amber-50"
              whileHover={{ scale: 1.1 }}
            >
              <UserButton />
            </motion.button>
          </SignedIn>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div 
          className="fixed top-[10vh] left-0 w-screen bg-[#060606] shadow-2xl shadow-blue-950 z-40 md:hidden"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
        >
          <div className="flex flex-col items-center space-y-4 py-4">
            {["/", "/references", "/tutorial", "/articles", "/forum"].map((path, index) => (
              <motion.div key={index} variants={linkVariants} whileHover="hover">
                <NavLink 
                  to={path}
                  className={({ isActive }) => (isActive ? "text-white" : "text-gray-500")}
                  onClick={toggleMenu}
                >
                  {path.replace("/", "") || "Home"}
                </NavLink>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
