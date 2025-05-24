import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle smooth scroll to top (home page)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Home Page Link with smooth scroll */}          <span
            className="text-2xl font-bold font-display text-secondary-900 dark:text-white cursor-pointer"
            onClick={scrollToTop}
          >
            Harsha<span className="text-primary-600">VP</span>
          </span>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['About', 'Projects', 'Skills', 'Experience', 'Testimonials', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-base font-medium text-secondary-700 hover:text-primary-600 dark:text-secondary-200 dark:hover:text-primary-400 transition-colors"
              >
                {item}
              </a>
            ))}
            
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="text-secondary-200 w-5 h-5" /> : <Moon className="text-secondary-700 w-5 h-5" />}
            </button>
          </nav>

          {/* Mobile Navigation Controls (Dark Mode + Menu) */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="text-secondary-200 w-5 h-5" /> : <Moon className="text-secondary-700 w-5 h-5" />}
            </button>
            
            <button
              className="p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="text-secondary-700 dark:text-secondary-200 w-6 h-6" /> : <Menu className="text-secondary-700 dark:text-secondary-200 w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass-effect animate-fadeIn">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {['About', 'Projects', 'Skills', 'Experience', 'Testimonials', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-3 text-lg font-medium text-secondary-800 dark:text-secondary-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors border-b border-secondary-100 dark:border-secondary-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
