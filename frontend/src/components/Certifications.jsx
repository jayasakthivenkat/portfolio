/**
 * Certifications component
 */

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks';
import { certificationAPI } from '../services';
import { FaAward, FaCalendar } from 'react-icons/fa';

const Certifications = () => {
  const { isDarkMode } = useTheme();
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    certificationAPI.getAll().then((res) => setCertifications(res.data.certifications));
  }, []);

  return (
    <section
      id="certifications"
      className={`py-20 ${isDarkMode ? 'bg-dark-bg' : 'bg-light-bg'}`}
    >
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-gradient"
        >
          Certifications & Achievements
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert._id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-lg ${isDarkMode ? 'glass-dark' : 'glass'} hover:shadow-lg transition-all`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <FaAward className="text-2xl text-primary" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                  <p className="text-primary mb-3">{cert.issuer}</p>
                  <div className="flex items-center gap-2 text-sm mb-3">
                    <FaCalendar /> {new Date(cert.issueDate).toLocaleDateString()}
                  </div>
                  {cert.description && (
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {cert.description}
                    </p>
                  )}
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-accent text-sm mt-3 inline-block"
                    >
                      View Credential →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
