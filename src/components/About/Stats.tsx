import React from 'react';
import { Award, BookOpen, Code2, Globe } from 'lucide-react';

const stats = [
  { icon: Award, label: 'Student', value: 'Fresher' },
  { icon: Code2, label: 'Projects Completed', value: '2' },
  { icon: BookOpen, label: 'Publications', value: '12' },
  { icon: Globe, label: 'Projects Ongoing', value: '5' },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {stats.map(({ icon: Icon, label, value }) => (
        <div 
          key={label} 
          className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-100"
        >
          <Icon className="w-8 h-8 text-blue-600 mb-3" />
          <div className="text-3xl font-bold mb-1">{value}</div>
          <div className="text-gray-600">{label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;