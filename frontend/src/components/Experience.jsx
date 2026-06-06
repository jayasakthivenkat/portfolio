import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks';
import { experienceAPI } from '../services';

const Experience = () => {
  const { isDarkMode } = useTheme();
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    experienceAPI.getAll().then((res) => setExperiences(res.data.experiences));
  }, []);

  return (
    <section
      id="experience"
      className={`py-20 ${isDarkMode ? 'bg-dark-bg-secondary' : 'bg-light-bg-secondary'}`}
    >
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-gradient"
        >
          Professional Experience
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp._id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`mb-8 p-6 rounded-lg ${
                isDarkMode ? 'glass-dark' : 'glass'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{exp.jobTitle}</h3>
                <span className="text-sm text-primary font-semibold">
                  {new Date(exp.startDate).getFullYear()} -{' '}
                  {exp.currentlyWorking ? 'Present' : new Date(exp.endDate).getFullYear()}
                </span>
              </div>
              <p className="text-primary mb-2">{exp.company}</p>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {exp.description}
              </p>
              {exp.location && (
                <span className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  📍 {exp.location}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
