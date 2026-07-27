import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks';
import { portfolioData } from '../data/portfolioData';
import { FaTrophy, FaUsers, FaUniversity, FaRunning, FaStar } from 'react-icons/fa';
import DownloadResume from '../components/DownloadResume';

const Achievements = () => {
  const { isDarkMode } = useTheme();
  const { achievements } = portfolioData;

  const sections = [
    { title: 'Leadership', icon: <FaUsers />, items: achievements.leadership },
    { title: 'College Activities', icon: <FaUniversity />, items: achievements.college },
    { title: 'Sports & Participation', icon: <FaRunning />, items: achievements.sports },
    { title: 'Other Interests', icon: <FaStar />, items: achievements.interests },
    { title: 'Additional Achievements', icon: <FaTrophy />, items: achievements.additional },
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-12 text-center text-gradient">
          Achievements & Activities
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl ${isDarkMode ? 'glass-dark' : 'glass shadow-lg'} border-t-4 border-primary`}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="text-primary text-3xl">{section.icon}</span>
                {section.title}
              </h3>
              
              <ul className="space-y-4">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                    <span className="text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
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

export default Achievements;
