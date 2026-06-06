import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks';
import { skillAPI } from '../services';

const Skills = () => {
  const { isDarkMode } = useTheme();
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    skillAPI.getAll().then((res) => setSkills(res.data.skills));
  }, []);

  const categories = ['frontend', 'backend', 'database', 'tools'];

  return (
    <section
      id="skills"
      className={`py-20 ${isDarkMode ? 'bg-dark-bg-secondary' : 'bg-light-bg-secondary'}`}
    >
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-gradient"
        >
          Skills & Technologies
        </motion.h2>

        {categories.map((category, idx) => {
          const categorySkills = skills.filter((s) => s.category === category);
          return (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 capitalize">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-6 rounded-lg ${
                      isDarkMode ? 'glass-dark' : 'glass'
                    } hover:shadow-lg transition-all`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">{skill.name}</h4>
                      <span className="text-sm text-primary font-bold">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2 dark:bg-gray-700">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
