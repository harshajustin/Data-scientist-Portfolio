import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
// Update the import path and extension if needed, e.g.:
import Testimonials from './components/Testimonials/Testimonials.tsx';
function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Always initialize in dark mode
  useEffect(() => {
    setDarkMode(true);
  }, []);

  // Apply dark mode class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  return (
    <div className="min-h-screen bg-secondary-950 transition-colors duration-300">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Testimonials />
        <Contact />
      </main>      <footer className="bg-secondary-800 dark:bg-secondary-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">              <h3 className="text-2xl font-bold mb-2">Harsha Vardhanu Parnandi</h3>
              <p className="text-secondary-300">B.Tech, Artificial Intelligence & Machine Learning</p>
              <p className="text-secondary-300 mt-2">harshajustin2@gmail.com | +767-1016609</p>
              <p className="text-secondary-300">Anurag University, Hyderabad, Telangana</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-medium mb-3 text-white">Links</h4>
                <ul className="space-y-2">
                  <li><a href="#about" className="text-secondary-300 hover:text-white transition-colors">About</a></li>
                  <li><a href="#projects" className="text-secondary-300 hover:text-white transition-colors">Projects</a></li>
                  <li><a href="#skills" className="text-secondary-300 hover:text-white transition-colors">Skills</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-3 text-white">Connect</h4>
                <ul className="space-y-2">                  <li><a href="https://linkedin.com/in/harshavardhanuparnandi" target="_blank" rel="noopener noreferrer" className="text-secondary-300 hover:text-white transition-colors">LinkedIn</a></li>
                  <li><a href="https://github.com/harshajustin" target="_blank" rel="noopener noreferrer" className="text-secondary-300 hover:text-white transition-colors">GitHub</a></li>
                  <li><a href="https://leetcode.com/harshajustin" target="_blank" rel="noopener noreferrer" className="text-secondary-300 hover:text-white transition-colors">LeetCode</a></li>
                  <li><a href="#contact" className="text-secondary-300 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>          <div className="border-t border-secondary-700 mt-8 pt-6 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Harsha Vardhanu Parnandi. All rights reserved.</p>
          </div>
        </div>      </footer>
    </div>
  );
}

export default App;