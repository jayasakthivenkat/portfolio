import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks';
import { contactAPI } from '../services';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await contactAPI.submit(formData);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setStatus(null), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(null), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className={`py-20 ${isDarkMode ? 'bg-dark-bg' : 'bg-light-bg'}`}
    >
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-gradient"
        >
          Get In Touch
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className={`p-8 rounded-lg ${isDarkMode ? 'glass-dark' : 'glass'}`}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`px-4 py-3 rounded-lg bg-transparent border ${
                  isDarkMode ? 'border-gray-700 focus:border-primary' : 'border-gray-300 focus:border-primary'
                } focus:outline-none transition-colors`}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`px-4 py-3 rounded-lg bg-transparent border ${
                  isDarkMode ? 'border-gray-700 focus:border-primary' : 'border-gray-300 focus:border-primary'
                } focus:outline-none transition-colors`}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone (Optional)"
                value={formData.phone}
                onChange={handleChange}
                className={`px-4 py-3 rounded-lg bg-transparent border ${
                  isDarkMode ? 'border-gray-700 focus:border-primary' : 'border-gray-300 focus:border-primary'
                } focus:outline-none transition-colors`}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={`px-4 py-3 rounded-lg bg-transparent border ${
                  isDarkMode ? 'border-gray-700 focus:border-primary' : 'border-gray-300 focus:border-primary'
                } focus:outline-none transition-colors`}
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 rounded-lg bg-transparent border ${
                isDarkMode ? 'border-gray-700 focus:border-primary' : 'border-gray-300 focus:border-primary'
              } focus:outline-none transition-colors mb-6 resize-none`}
            />

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-success mb-4"
              >
                <FaCheckCircle /> Message sent successfully!
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-error mb-4"
              >
                <FaExclamationCircle /> Failed to send message. Please try again.
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
