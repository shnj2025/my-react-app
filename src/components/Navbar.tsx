import { useState } from "react";
import logo from "../assets/logo-text.png"

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
       <div className="sticky top-0 z-50 bg-white border-b border-gray-300">
      <nav className="flex justify-between gap-4 container mx-auto py-4 px-4 items-center">
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" d="M2 5h18M2 11h18M2 17h18" />
          </svg>
        </button>

        <img src={logo} className="h-9 w-auto" alt="" />

        <ul className="hidden md:flex gap-5 items-center">
          <li><a href="/" className="text-pink-600 font-medium">Home</a></li>
          <li><a href="/">Technologies</a></li>
          <li><a href="/">Projects</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
        </ul>

        <div className="flex gap-4 items-center">
          <button className="text-sm font-medium text-gray-700">Sign In</button>
          <button className="bg-pink-600 text-white text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 hover:scale-110 transition-transform duration-300">
            Sign Up
          </button>
        </div>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-3 px-4 pb-4">
          <li><a href="/" className="text-pink-600 font-medium">Home</a></li>
          <li><a href="/" className="text-gray-700 font-medium">Technologies</a></li>
          <li><a href="/" className="text-gray-700 font-medium">Projects</a></li>
          <li><a href="/" className="text-gray-700 font-medium">About</a></li>
          <li><a href="/" className="text-gray-700 font-medium">Contact</a></li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;