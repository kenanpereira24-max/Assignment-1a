import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white py-4 px-8 border-b border-slate-800 flex justify-between items-center sticky top-0 z-50">
      <div className="text-2xl font-extrabold tracking-tight cursor-pointer">
        Karo<span className="text-blue-500">Pitch.</span>
      </div>
      <div className="hidden md:flex space-x-8 font-medium text-slate-300">
        <a href="#about" className="hover:text-white transition">
          About
        </a>
        <a href="#startups" className="hover:text-white transition">
          Startups
        </a>
        <a href="#apply" className="hover:text-white transition">
          Investors
        </a>
      </div>
      <a
        href="#apply"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold transition"
      >
        Apply Now
      </a>
    </nav>
  );
};

export default Navbar;
