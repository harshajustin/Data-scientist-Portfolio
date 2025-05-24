import React, { useState } from 'react';
import TimelineItem from './TimelineItem';
import { experiences, Experience as ExperienceType } from './experienceData';
import { Award, GraduationCap, Lightbulb, Users } from 'lucide-react';

const Experience = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const filterTypes = [
    { value: null, label: 'All', icon: null },
    { value: 'education', label: 'Education', icon: GraduationCap },
    { value: 'leadership', label: 'Leadership', icon: Users },
    { value: 'certificate', label: 'Certificates', icon: Award },
    { value: 'project', label: 'Projects', icon: Lightbulb },
  ];
  
  const filteredExperiences = filter 
    ? experiences.filter(exp => exp.type === filter)
    : experiences;
  
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-secondary-50 to-white dark:from-secondary-900/50 dark:to-secondary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title-centered">Experience & Education</h2>
        <p className="text-secondary-600 dark:text-secondary-300 text-center text-xl mb-12 max-w-3xl mx-auto">
          My academic and professional journey in data science and machine learning.
        </p>
        
        {/* Filter controls */}
        <div className="flex justify-center mb-12 space-x-2 flex-wrap gap-y-2">
          {filterTypes.map((type) => (
            <button 
              key={type.label}
              onClick={() => setFilter(type.value)}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 ${
                filter === type.value 
                  ? 'bg-primary-600 text-white shadow-md' 
                  : 'bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-700 border border-secondary-200 dark:border-secondary-700'
              }`}
            >
              {type.icon && <type.icon size={16} />}
              {type.label}
            </button>
          ))}
        </div>
        
        <div className="relative">
          <div className="absolute left-12 sm:left-1/2 transform sm:-translate-x-1/2 w-1 h-full bg-primary-200 dark:bg-primary-900/30 rounded-full" />
          
          <div className="space-y-12">
            {filteredExperiences.map((exp, index) => (
              <TimelineItem
                key={index}
                {...exp}
                isEven={index % 2 === 0}
              />
            ))}
            
            {filteredExperiences.length === 0 && (
              <div className="text-center py-12 text-secondary-500 dark:text-secondary-400">
                No items match the selected filter.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;