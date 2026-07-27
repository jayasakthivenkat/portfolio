import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

// Layout & Common
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Education from './pages/Education';
import Achievements from './pages/Achievements';

import './styles/globals.css';

// A layout component to wrap the pages with Navbar and Footer
const PageLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-12">
        {children}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<PageLayout><About /></PageLayout>} />
          <Route path="/education" element={<PageLayout><Education /></PageLayout>} />
          <Route path="/skills" element={<PageLayout><Skills /></PageLayout>} />
          <Route path="/experience" element={<PageLayout><Experience /></PageLayout>} />
          <Route path="/projects" element={<PageLayout><Projects /></PageLayout>} />
          <Route path="/certificates" element={<PageLayout><Certifications /></PageLayout>} />
          <Route path="/achievements" element={<PageLayout><Achievements /></PageLayout>} />
          <Route path="/contact" element={<PageLayout><Contact /></PageLayout>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
