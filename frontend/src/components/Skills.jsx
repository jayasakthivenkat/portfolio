import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks';
import { portfolioData } from '../data/portfolioData';
import { FaCode, FaLaptopCode, FaDatabase, FaTools, FaCheckCircle } from 'react-icons/fa';
import DownloadResume from './DownloadResume';

const Skills = () => {
  const { isDarkMode } = useTheme();
  const { skills } = portfolioData;

  const technicalCategories = [
    { title: 'Programming Languages', icon: <FaCode />, items: skills.technicalSkills.programming },
    { title: 'Web Development', icon: <FaLaptopCode />, items: skills.technicalSkills.webDevelopment },
    { title: 'Databases', icon: <FaDatabase />, items: skills.technicalSkills.databases },
    { title: 'Tools & Platforms', icon: <FaTools />, items: skills.technicalSkills.tools },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-12 text-center text-gradient">
          My Skills
        </h2>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl ${isDarkMode ? 'glass-dark hover:bg-dark-bg-secondary' : 'glass shadow-lg hover:bg-light-bg-secondary'} transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="text-4xl text-primary mb-4 flex justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium">
                      <span className="w-2 h-2 rounded-full bg-accent"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
            Soft Skills
          </h3>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
            {skills.softSkills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center gap-3 p-4 rounded-xl ${isDarkMode ? 'bg-dark-bg-secondary' : 'bg-white shadow-md'} border border-gray-100 dark:border-gray-800`}
              >
                <FaCheckCircle className="text-accent text-xl flex-shrink-0" />
                <span className="text-gray-800 dark:text-gray-200 font-medium text-lg">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <DownloadResume />
        </div>
      </div>
    </section>
  );
};

export default Skills;
