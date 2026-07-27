import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../hooks';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Education', href: '/education' },
    { label: 'Skills', href: '/skills' },
    { label: 'Experience', href: '/experience' },
    { label: 'Projects', href: '/projects' },
    { label: 'Certificates', href: '/certificates' },
    { label: 'Achievements', href: '/achievements' },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 ${
        isDarkMode ? 'bg-dark-bg/95' : 'bg-light-bg/95'
      } backdrop-blur-md border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}
    >
      <div className="container-custom flex justify-between items-center py-4">
        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-gradient"
          >
            Jayasakthi
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`${
                location.pathname === link.href ? 'text-primary font-semibold' : ''
              } ${isDarkMode ? 'hover:text-primary' : 'hover:text-primary'} transition-colors`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-5 py-2 rounded-lg bg-primary text-white text-sm font-semibold shadow-md hover:bg-primary-dark transition-colors"
            >
              Contact Me
            </motion.button>
          </Link>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </motion.button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden overflow-hidden border-t ${
              isDarkMode ? 'bg-dark-bg-secondary border-gray-800' : 'bg-light-bg-secondary border-gray-200'
            }`}
          >
            <div className="flex flex-col px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`block px-4 py-3 rounded-md ${
                    location.pathname === link.href ? 'bg-primary/20 text-primary font-semibold' : 'hover:bg-primary/10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block px-4 py-3 rounded-md bg-primary text-white text-center font-semibold mt-2"
                onClick={() => setIsOpen(false)}
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
