import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import { useTheme } from '../hooks';
import { portfolioData } from '../data/portfolioData';

const DownloadResume = ({ className = "" }) => {
  const { isDarkMode } = useTheme();
  const { resumeUrl, resumeFilename } = portfolioData.personalInfo;

  return (
    <a
      href={resumeUrl}
      download={resumeFilename}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block ${className}`}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`px-8 py-3 rounded-lg font-semibold border-2 border-primary flex items-center gap-2 ${
          isDarkMode ? 'text-white hover:bg-primary/20' : 'text-gray-900 hover:bg-primary/10'
        } transition-all`}
      >
        <FaDownload /> Download Resume
      </motion.button>
    </a>
  );
};

export default DownloadResume;
