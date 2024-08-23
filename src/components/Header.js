/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-1">
          <a href="/" className="text-white text-[26px]">
            What happened
          </a>
        </div>
        <div className="flex-2 flex items-center">
          <button
            className="text-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:items-center md:space-x-8 absolute md:static top-12 right-4 bg-black md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none`}
          >
            <a href="#" className="text-white block md:inline-block">
              INTRODUCTION
            </a>
            <a href="#" className="text-white block md:inline-block">
              SOLUTION
            </a>
            <a href="#" className="text-white block md:inline-block">
              RATE PLAN
            </a>
            <span className="text-white hidden md:inline-block">|</span>
            <a href="../login" className="text-white block md:inline-block">
              LOGIN
            </a>
            <a href="#" className="text-white block md:inline-block">
              APPLY FOR FREE USE
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
