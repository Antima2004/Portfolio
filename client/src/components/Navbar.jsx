import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: '/about', label: 'ABOUT ME' },
    { path: '/resume', label: 'RESUME' },
    { path: '/projects', label: 'PROJECTS' },
    { path: '/contact', label: 'CONTACT' },
  ];

  const linkClasses = ({ isActive }) =>
    `relative group font-medium text-sm ${
      isActive ? 'text-cyan-400' : 'text-white'
    }`;

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-lg font-bold flex items-center space-x-2">
        <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
        <span>PORTFOLIO</span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-8">
        {navLinks.map((link) => (
          <NavLink key={link.path} to={link.path} className={linkClasses}>
            <span className="group relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 group-hover:after:w-full">
              {link.label}
            </span>
          </NavLink>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black px-6 py-4 flex flex-col space-y-4 md:hidden z-50">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-medium ${
                  isActive ? 'text-cyan-400' : 'text-white'
                } transition-colors`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
