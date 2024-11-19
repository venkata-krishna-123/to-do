// Components/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-blue-600 p-4 flex justify-between items-center">
      <h1 className="text-white text-xl font-bold">Todo App</h1>
      <ul className="flex gap-4">
        <li className="text-white cursor-pointer">Home</li>
        <li className="text-white cursor-pointer">About</li>
        <li className="text-white cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
