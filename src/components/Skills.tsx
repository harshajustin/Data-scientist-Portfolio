import React from 'react';

const skills = {
  'Machine Learning': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost'],
  'Data Processing': ['Pandas', 'NumPy', 'PySpark', 'SQL'],
  'Visualization': ['Matplotlib', 'Seaborn', 'Plotly', 'D3.js'],
  'Cloud & DevOps': ['AWS', 'Docker', 'Git', 'CI/CD'],
};

const SkillBar = ({ skill, level }: { skill: string; level: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-gray-700">{skill}</span>
      <span className="text-gray-500">{level}%</span>
    </div>
    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className="h-full bg-blue-600 rounded-full transition-all duration-1000"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6">{category}</h3>
              {items.map((skill, index) => (
                <SkillBar 
                  key={skill} 
                  skill={skill} 
                  level={90 - (index * 5)} 
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;