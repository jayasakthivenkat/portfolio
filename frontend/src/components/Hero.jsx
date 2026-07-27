import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import DownloadResume from './DownloadResume';

const Hero = () => {
  const { isDarkMode } = useTheme();
  const { name, headline, degree, heroDescription } = portfolioData.personalInfo;

  return (
    <section
      id="hero"
      className={`min-h-[90vh] flex items-center justify-center pt-20 ${
        isDarkMode ? 'bg-dark-bg' : 'bg-light-bg'
      }`}
    >
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl md:text-2xl font-medium mb-2 text-primary">
              {degree}
            </h3>
            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 whitespace-normal md:whitespace-nowrap">
              <span className="text-gradient leading-tight">
                {name}'s <br /> Portfolio
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
              {headline}
            </h2>
            <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-600 dark:text-gray-400">
              {heroDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-primary text-white rounded-lg font-semibold shadow-lg hover:bg-primary-dark transition-all flex items-center gap-2"
                >
                  View Projects <FaArrowRight />
                </motion.button>
              </Link>
              <DownloadResume />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Decorative background elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full opacity-20 blur-2xl animate-pulse"></div>
              <div className="absolute inset-4 border-2 border-primary/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-8 border-2 border-dashed border-accent/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              {/* Profile Image Container */}
              <div className={`absolute inset-0 rounded-full overflow-hidden border-4 border-white dark:border-dark-bg shadow-2xl flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 z-10`}>
                {/* Placeholder for Profile Photo */}
                <div className="text-center p-6">
                  <span className="text-primary text-lg font-semibold block mb-2">Profile Photo</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Replace src="/profile.jpg"</span>
                </div>
                {/* 
                  To use actual image:
                  <img src="/profile.jpg" alt={name} className="w-full h-full object-cover" />
                */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
