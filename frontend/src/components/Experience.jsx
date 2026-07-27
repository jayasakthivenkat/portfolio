import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks';
import { portfolioData } from '../data/portfolioData';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import DownloadResume from './DownloadResume';

const Experience = () => {
  const { isDarkMode } = useTheme();
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-12 text-center text-gradient">
          My Experience
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 md:p-8 rounded-2xl ${isDarkMode ? 'glass-dark' : 'glass shadow-lg'} border-l-4 border-primary relative overflow-hidden group flex flex-col md:flex-row justify-between items-start md:items-center gap-6`}
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <FaBriefcase className="text-6xl text-primary" />
              </div>
              
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {exp.role}
                </h3>
                <h4 className="text-xl text-primary font-semibold flex items-center gap-2 mb-4">
                  {exp.company}
                </h4>
                <div className="flex flex-wrap gap-3 text-sm">
                  {exp.duration && (
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                      <FaCalendarAlt /> {exp.duration}
                    </span>
                  )}
                  {exp.workMode && (
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold">
                      <FaMapMarkerAlt /> {exp.workMode}
                    </span>
                  )}
                </div>
              </div>
              
              {exp.certificate && (
                <div className="flex-shrink-0 z-10">
                  <a 
                    href={exp.certificate} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition-colors shadow-md"
                  >
                    View Certificate <FaExternalLinkAlt className="text-sm" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <DownloadResume />
        </div>
      </div>
    </section>
  );
};

export default Experience;
