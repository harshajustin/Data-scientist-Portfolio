import React, { useState } from 'react';
import SkillCategory from './SkillCategory';
import { skillsData } from './skillsData';

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-secondary-50 dark:from-secondary-900 dark:to-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title-centered">Skills & Technologies</h2>
        <p className="text-secondary-600 dark:text-secondary-300 text-center text-xl mb-12 max-w-3xl mx-auto">
          A comprehensive overview of my technical expertise and capabilities in data science and machine learning.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div 
              key={category.title} 
              className={`transform transition-all duration-300 ${
                hoveredCategory && hoveredCategory !== category.title 
                  ? 'opacity-75 scale-95' 
                  : 'opacity-100 scale-100'
              }`}
              onMouseEnter={() => setHoveredCategory(category.title)}
              onMouseLeave={() => setHoveredCategory(null)}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <SkillCategory
                icon={category.icon}
                title={category.title}
                skills={category.skills}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-secondary-500 dark:text-secondary-400 mb-4 italic">* Currently learning and developing expertise</p>
          <div className="inline-flex items-center justify-center">
            <div className="h-1 w-16 bg-primary-600 rounded-full"></div>
            <div className="mx-2 text-primary-600">• • •</div>
            <div className="h-1 w-16 bg-primary-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;