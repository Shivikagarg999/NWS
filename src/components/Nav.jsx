import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='absolute font-semibold top-0 left-0 font-ubuntu-light w-full z-50 bg-gray-200 bg-opacity-10 text-white p-8 flex justify-between items-center'>
      <div className='text-2xl font-bold'>Logo</div>
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='focus:outline-none z-50 relative'>
          {isOpen ? <FaTimes size={28} className="z-50" /> : <FaBars size={28} />}
        </button>
      </div>
      <ul className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-8 text-xl transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:flex-row md:space-y-0 md:space-x-8 md:bg-transparent md:translate-x-0`}>
        <li>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-gray-300 underline" : ""}>
                        Home
       </NavLink>
        </li>
        <li>
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-gray-300 underline" : ""}>
                        About
       </NavLink>
        </li>
        <li>
        <NavLink to="/service" className ={({ isActive }) => isActive ? "text-gray-300 underline" : ""}>
                        Service
       </NavLink>
        </li>
        <li>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-gray-300 underline" : ""}>
                       Contact
       </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
