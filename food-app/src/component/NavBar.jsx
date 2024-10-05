// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#FFC107] text-[#100F0F]">
      <nav className="container mx-auto flex items-center justify-between p-5">
        <div className="text-3xl font-anton">Cafe Delicia</div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400 text-lg font-bold">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400 text-lg font-bold">
            About
          </a>
          <a href="#services" className="hover:text-gray-400 text-lg font-bold">
            Services
          </a>
          <a href="#contact" className="hover:text-gray-400 text-lg font-bold">
            Contact
          </a>
        </div>
        <div className="md:hidden text-3xl  ">
          <button onClick={() => setIsOpen(!isOpen)}>
            <i className="fa-solid fa-burger"></i>
          </button>
        </div>
        {isOpen && (
          <ul className=" md:hidden list-none flex-col gap-3 absolute top-14 right-3 bg-[#ffc107]  p-4 text-[#100f0f] text-xl   ">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
