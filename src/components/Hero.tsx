import React, { useEffect, useRef } from 'react';
import { Database, Code, LineChart, Cpu, ChevronDown } from 'lucide-react';
import Typed from 'typed.js';

const Hero = () => {
  const typedElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current!, {
      strings: [
        'Artificial Intelligence',
        'Generative AI',
        'Machine Learning',
        'NLP and Transformers',
        'RAG Applications'
      ],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 2000,
      startDelay: 300,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const scrollToSection = (id: string): void => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Section with id "${id}" not found.`);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-secondary-950 to-secondary-900">
      {/* Background animated shapes */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-25">
        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 w-72 h-72 bg-blue-700 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 translate-x-1/3 w-96 h-96 bg-blue-800 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/3 right-1/2 translate-x-1/2 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
      </div>

      <div className="relative z-10 w-full flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center w-full">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
            <span className="block">Harsha Vardhanu</span>
            <span className="block text-blue-400">
              <span ref={typedElement}></span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-secondary-300 max-w-3xl mx-auto mb-12">
            AI & ML Engineering Student | Creating intelligent solutions with Hugging Face Transformers, Generative AI, and advanced RAG applications.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:space-x-6 mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md flex items-center justify-center gap-2 transition-colors"
            >
              <Code className="w-5 h-5" />
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-secondary-800 hover:bg-secondary-700 text-white border border-secondary-700 px-8 py-3 rounded-md flex items-center justify-center gap-2 transition-colors"
            >
              <LineChart className="w-5 h-5" />
              Contact Me
            </button>
          </div>

          {/* Tech Icons */}
          <div className="hidden md:flex items-center justify-center gap-10">
            <div className="p-4 rounded-full bg-secondary-800/50 border border-secondary-700/50">
              <Cpu className="w-8 h-8 text-blue-400" />
            </div>
            <div className="p-4 rounded-full bg-secondary-800/50 border border-secondary-700/50">
              <Database className="w-8 h-8 text-blue-400" />
            </div>
            <div className="p-4 rounded-full bg-secondary-800/50 border border-secondary-700/50">
              <LineChart className="w-8 h-8 text-blue-400" />
            </div>
            <div className="p-4 rounded-full bg-secondary-800/50 border border-secondary-700/50">
              <Code className="w-8 h-8 text-blue-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={() => scrollToSection('about')}
          className="text-white opacity-75 hover:opacity-100 transition-all duration-300 animate-bounce-slow"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
