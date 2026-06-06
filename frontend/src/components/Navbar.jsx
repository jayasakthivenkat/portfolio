import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../hooks';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { isAuthenticated, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

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
            Portfolio
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`${
                isDarkMode ? 'hover:text-primary' : 'hover:text-primary'
              } transition-colors`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          {isAuthenticated && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-dark"
            >
              Logout
            </motion.button>
          )}
          {!isAuthenticated && (
            <Link to="/admin/login">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-dark"
              >
                Admin
              </motion.button>
            </Link>
          )}
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </motion.button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`md:hidden border-t ${
            isDarkMode ? 'bg-dark-bg-secondary border-gray-800' : 'bg-light-bg-secondary'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-4 py-2 hover:bg-primary/10"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
