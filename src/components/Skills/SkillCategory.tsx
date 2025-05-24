import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCategoryProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ icon: Icon, title, skills }) => {
  return (
    <div className="card hover:border-primary-400 dark:hover:border-primary-500 animate-scaleIn p-6 group">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
          <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-bold text-secondary-900 dark:text-white">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2 min-h-20">
        {skills.map((skill, index) => (
          <span
            key={skill}
            className={`px-3 py-1.5 bg-secondary-50 dark:bg-secondary-700/50 text-secondary-700 dark:text-secondary-300 
              rounded-md text-sm border border-secondary-200 dark:border-secondary-700 transition-all duration-300
              hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-300 
              hover:border-primary-300 dark:hover:border-primary-700`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;