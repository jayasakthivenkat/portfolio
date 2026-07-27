import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks';
import { portfolioData } from '../data/portfolioData';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import DownloadResume from './DownloadResume';

const Contact = () => {
  const { isDarkMode } = useTheme();
  const { email, linkedin, github } = portfolioData.personalInfo;

  return (
    <section id="contact" className="py-20">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-12 text-center text-gradient">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Contact Information
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              I am currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${email}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Email</h4>
                  <p className="text-gray-900 dark:text-white font-semibold">{email}</p>
                </div>
              </a>
              
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <FaLinkedin size={20} />
                </div>
                <div>
                  <h4 className="text-gray-500 dark:text-gray-400 text-sm font-medium">LinkedIn</h4>
                  <p className="text-gray-900 dark:text-white font-semibold">Jaya Sakthi</p>
                </div>
              </a>
              
              <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <FaGithub size={20} />
                </div>
                <div>
                  <h4 className="text-gray-500 dark:text-gray-400 text-sm font-medium">GitHub</h4>
                  <p className="text-gray-900 dark:text-white font-semibold">jayasakthivenkat</p>
                </div>
              </a>
            </div>
          </motion.div>
          
          {/* Contact Form (UI only as per instructions) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`p-8 rounded-2xl ${isDarkMode ? 'glass-dark' : 'glass shadow-lg'}`}
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all ${
                    isDarkMode ? 'bg-dark-bg border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-900 border'
                  }`}
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all ${
                    isDarkMode ? 'bg-dark-bg border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-900 border'
                  }`}
                  placeholder="Your Email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all resize-none ${
                    isDarkMode ? 'bg-dark-bg border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-900 border'
                  }`}
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                onClick={() => alert('Thanks for reaching out! (This is a demo form)')}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
        
        <div className="mt-16 flex justify-center">
          <DownloadResume />
        </div>
      </div>
    </section>
  );
};

export default Contact;
