import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks';
import { aboutAPI } from '../services';
import { FaDownload } from 'react-icons/fa';

const Hero = () => {
  const { isDarkMode } = useTheme();
  const [about, setAbout] = useState(null);

  useEffect(() => {
    aboutAPI.get().then((res) => setAbout(res.data.about));
  }, []);

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center pt-20 ${
        isDarkMode ? 'bg-dark-bg' : 'bg-light-bg'
      }`}
    >
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Hey, I'm {about?.headline || 'a Developer'}</span>
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              {about?.bio || 'Full-stack developer passionate about creating amazing web experiences'}
            </p>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark"
              >
                Get In Touch
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-lg font-semibold border-2 border-primary flex items-center gap-2 ${
                  isDarkMode ? 'hover:bg-primary/10' : 'hover:bg-primary/5'
                }`}
              >
                <FaDownload /> Download CV
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className={`glass w-full aspect-square rounded-2xl flex items-center justify-center ${
              isDarkMode ? 'glass-dark' : 'glass'
            }`}>
              <div className="w-64 h-64 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                <span className="text-white text-center text-sm">Profile Image</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
