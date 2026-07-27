import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();
  const { name, email, linkedin, github } = portfolioData.personalInfo;

  const socialLinks = [
    { icon: FaLinkedin, href: linkedin, label: 'LinkedIn' },
    { icon: FaGithub, href: github, label: 'GitHub' },
    { icon: FaEnvelope, href: `mailto:${email}`, label: 'Email' },
  ];

  return (
    <footer
      className={`py-12 ${
        isDarkMode ? 'bg-dark-bg-secondary border-gray-800' : 'bg-light-bg-secondary border-gray-200'
      } border-t`}
    >
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gradient">{name}</h3>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Aspiring Software Developer crafting beautiful digital experiences
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Education', 'Skills', 'Projects'].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className="hover:text-primary transition-colors text-gray-700 dark:text-gray-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-primary hover:text-accent transition-colors"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-300'} pt-8 text-center`}
        >
          <p className={`${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
            © {currentYear} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
