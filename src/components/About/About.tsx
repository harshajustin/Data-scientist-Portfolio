import React from 'react';
import { Download, Github, Linkedin, FileText } from 'lucide-react';
import Stats from './Stats';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title-centered md:hidden">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <div className="relative">
              <h2 className="section-title hidden md:block">About Me</h2>
              <span className="absolute -left-4 top-0 w-1 h-20 bg-primary-600 rounded-full hidden lg:block"></span>
            </div>
              <p className="text-secondary-700 dark:text-secondary-300 text-lg mb-6 leading-relaxed">
              I am Harsha Vardhanu Parnandi, a B.Tech student in Artificial Intelligence and Machine Learning at Anurag University with a strong passion for data science and AI-driven solutions. I have expertise in Java, Python, SQL, and various frameworks including Hugging Face Transformers and MLflow.
            </p>
            
            <p className="text-secondary-700 dark:text-secondary-300 text-lg mb-8 leading-relaxed">
              I've successfully developed an educational chatbot that improved information access for 500+ students and an AI-powered ATS Resume Expert that achieved 90% match accuracy. My leadership roles include organizing workshops, bootcamps, and serving as Editor-in-chief for a university newsletter.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {/* Download CV Button */}              <a 
                href="/Harsha_ds.pdf" 
                download 
                className="btn-primary flex items-center gap-2"
                aria-label="Download Resume"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>

              {/* GitHub Button */}
              <a 
                href="https://github.com/harshajustin" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                Github
              </a>
                {/* LinkedIn Button */}
              <a 
                href="https://linkedin.com/in/harshavardhanuparnandi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              
              {/* LeetCode Button */}
              <a 
                href="https://leetcode.com/harshajustin" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                LeetCode
              </a>
            </div>
            
            <div className="flex items-center gap-4 text-secondary-600 dark:text-secondary-400">
              <FileText className="w-5 h-5 text-primary-600" />
              <span>Open to work and collaboration opportunities</span>
            </div>
          </div>
          
          <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <Stats />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
