import React from 'react';
import { Award, Code2, Trophy, GraduationCap, Users } from 'lucide-react';

const stats = [
  { icon: GraduationCap, label: 'CGPA', value: '8.01', color: 'from-blue-400 to-blue-600' },
  { icon: Code2, label: 'Projects', value: '2+', color: 'from-emerald-400 to-emerald-600' },
  { icon: Award, label: 'Hackathon Wins', value: '1', color: 'from-purple-400 to-purple-600' },
  { icon: Users, label: 'Leadership Roles', value: '3', color: 'from-amber-400 to-amber-600' },
  { icon: Trophy, label: 'Certifications', value: '3', color: 'from-rose-400 to-rose-600' },
];

const Stats = () => {
  return (
    <div className="relative p-1">
      {/* Visual background element */}
      <div className="absolute -inset-4 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-3xl -z-10 blur-xl opacity-70"></div>
      
      <div className="bg-white dark:bg-secondary-800 rounded-2xl shadow-card border border-secondary-100 dark:border-secondary-700 p-6 stagger-animation">
        <h3 className="text-xl font-semibold mb-6 text-center text-secondary-900 dark:text-white">Professional Overview</h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {stats.map(({ icon: Icon, label, value, color }, index) => (
            <div 
              key={label}
              className="flex flex-col items-center bg-white dark:bg-secondary-700/30 p-4 rounded-xl shadow-smooth border border-secondary-100 dark:border-secondary-700 transition-all duration-300 hover:shadow-card-hover transform hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${color} flex items-center justify-center mb-3`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold mb-1 text-secondary-900 dark:text-white">{value}</div>
              <div className="text-secondary-600 dark:text-secondary-300 text-center text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;