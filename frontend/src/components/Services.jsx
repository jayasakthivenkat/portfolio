/**
 * Services component
 */

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks';
import { serviceAPI } from '../services';
import { FaBriefcase } from 'react-icons/fa';

const Services = () => {
  const { isDarkMode } = useTheme();
  const [services, setServices] = useState([]);

  useEffect(() => {
    serviceAPI.getAll().then((res) => setServices(res.data.services));
  }, []);

  return (
    <section
      id="services"
      className={`py-20 ${isDarkMode ? 'bg-dark-bg-secondary' : 'bg-light-bg-secondary'}`}
    >
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-gradient"
        >
          Services I Offer
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ translateY: -10 }}
              className={`p-6 rounded-lg ${
                isDarkMode ? 'glass-dark' : 'glass'
              } hover:shadow-lg transition-all text-center`}
            >
              <div className="flex justify-center mb-4">
                <FaBriefcase className="text-4xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
