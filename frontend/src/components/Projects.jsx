import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks';
import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaFolderOpen } from 'react-icons/fa';
import DownloadResume from './DownloadResume';

const Projects = () => {
  const { isDarkMode } = useTheme();
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-12 text-center text-gradient">
          My Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col h-full rounded-2xl overflow-hidden ${isDarkMode ? 'glass-dark' : 'glass shadow-lg'} group hover:-translate-y-2 transition-transform duration-300`}
            >
              <div className="p-6 flex flex-col flex-grow relative">
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  <FaFolderOpen className="text-6xl text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 pr-12">
                  {project.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-semibold transition-colors"
                  >
                    <FaGithub className="text-xl" /> View Repository
                  </a>
                </div>
              </div>
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

export default Projects;
