import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks';
import { portfolioData } from '../data/portfolioData';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaBookOpen } from 'react-icons/fa';
import DownloadResume from '../components/DownloadResume';

const Education = () => {
  const { isDarkMode } = useTheme();
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient">
            Education
          </h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={edu.id} className={`relative p-8 rounded-2xl ${isDarkMode ? 'glass-dark' : 'glass shadow-lg'} border-l-4 border-l-primary`}>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                      <FaGraduationCap className="text-primary text-3xl" />
                      {edu.degree}
                    </h3>
                    <h4 className="text-xl text-primary font-medium mt-2 flex items-center gap-2">
                      <FaUniversity /> {edu.institution}
                    </h4>
                  </div>
                  {edu.year && (
                    <div className="mt-4 md:mt-0 text-right">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold">
                        <FaCalendarAlt /> {edu.year}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-lg text-gray-700 dark:text-gray-300 flex items-center gap-2 font-medium">
                    <FaBookOpen className="text-accent" />
                    {edu.status}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <DownloadResume />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
