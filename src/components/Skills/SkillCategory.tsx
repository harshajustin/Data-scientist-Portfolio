import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCategoryProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ icon: Icon, title, skills }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-2 mb-4">
        <Icon className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm border border-gray-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;