import React from 'react';

const experiences = [
  {
    title: 'Senior Data Scientist',
    company: 'Tech Corp',
    period: '2021 - Present',
    description: 'Led a team of data scientists in developing ML models for fraud detection, resulting in 40% reduction in fraudulent transactions.',
  },
  {
    title: 'Data Scientist',
    company: 'AI Solutions Inc',
    period: '2019 - 2021',
    description: 'Developed and deployed NLP models for sentiment analysis and text classification with 92% accuracy.',
  },
  {
    title: 'Machine Learning Engineer',
    company: 'Data Analytics Co',
    period: '2017 - 2019',
    description: 'Built and optimized recommendation systems using collaborative filtering and deep learning approaches.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200" />
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}>
                {/* Content */}
                <div className="w-1/2 pr-8 pl-8">
                  <div className={`bg-white p-6 rounded-xl shadow-lg ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow" />
                
                {/* Empty space for alignment */}
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;