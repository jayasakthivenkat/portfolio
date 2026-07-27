import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks';
import { portfolioData } from '../data/portfolioData';
import DownloadResume from './DownloadResume';

const About = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="about" className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient">
            About Me
          </h2>
          
          <div className={`p-8 rounded-2xl ${isDarkMode ? 'glass-dark' : 'glass shadow-lg'} `}>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
                I am a B.Sc. Computer Systems and Design student at PSG College of Technology with a strong interest in software development, frontend development, and web development. I enjoy building creative and practical digital solutions using technologies such as HTML, CSS, JavaScript, Python, SQL, and Git/GitHub.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Through my academic projects and internships, I have gained hands-on experience in developing websites, applications, and software solutions while continuously improving my problem-solving and technical skills. My journey has also allowed me to explore my creative side through photography, video editing, painting, crafting, dancing, and playing chess. I believe in continuous learning, building meaningful projects, and constantly exploring new technologies as I work towards growing as a Software Developer.
              </p>
            </div>
            <div className="mt-8 flex justify-center md:justify-start">
              <DownloadResume />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
