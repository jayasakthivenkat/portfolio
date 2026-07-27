import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks';
import { portfolioData } from '../data/portfolioData';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import DownloadResume from './DownloadResume';

const Certifications = () => {
  const { isDarkMode } = useTheme();
  const { certificates } = portfolioData;

  return (
    <section id="certifications" className="py-20">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-12 text-center text-gradient">
          Certifications
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl ${isDarkMode ? 'glass-dark' : 'glass shadow-lg'} flex flex-col justify-between group hover:border-primary transition-all duration-300`}
            >
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <FaCertificate size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {cert.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 font-medium mb-6">
                  {cert.issuer}
                </p>
              </div>
              
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors mt-auto w-max"
              >
                View Credential <FaExternalLinkAlt size={12} />
              </a>
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

export default Certifications;
