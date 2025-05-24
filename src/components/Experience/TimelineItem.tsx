import React from 'react';
import { Briefcase } from 'lucide-react';
import { Experience } from './experienceData';

interface TimelineItemProps extends Experience {
  isEven: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  company,
  location,
  period,
  description,
  icon: Icon = Briefcase,
  skills = [],
  type,
  isEven
}) => {
  return (
    <div className={`flex flex-col sm:flex-row items-start`}>
      {/* Timeline dot and icon */}
      <div className="flex items-center relative min-w-[96px]">
        <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center z-10 border-4 border-white dark:border-secondary-900 shadow-md">
          <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
        </div>
        <div className="absolute top-5 left-5 h-full w-1 bg-primary-200 dark:bg-primary-900/30 -z-10" />
      </div>
      
      {/* Content card */}
      <div className="ml-4 sm:ml-0 flex-grow">
        <div className="card p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover animate-scaleIn">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-secondary-900 dark:text-white">{title}</h3>
            <span className="text-sm font-medium bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-300 px-3 py-1 rounded-full mt-2 sm:mt-0">
              {period}
            </span>
          </div>
          
          <div className="flex items-center text-secondary-600 dark:text-secondary-400 mb-4">
            <p className="font-medium">{company}</p>
            {location && (
              <>
                <span className="mx-2">•</span>
                <p>{location}</p>
              </>
            )}
          </div>
          
          <p className="text-secondary-600 dark:text-secondary-300 mb-4">
            {description}
          </p>
          
          {skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {skills.map(skill => (
                <span 
                  key={skill}
                  className="text-xs bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-2 py-1 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;