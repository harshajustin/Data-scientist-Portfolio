import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { projects } from './projectsData';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [animateCards, setAnimateCards] = useState(false);
  const categories = ['All', 'Machine Learning', 'Deep Learning', 'Generative AI', 'NLP', 'Data Visualization'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  useEffect(() => {
    setAnimateCards(false);
    const timer = setTimeout(() => {
      setAnimateCards(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [filter]);

  return (
    <section id="projects" className="py-20 bg-secondary-50 dark:bg-secondary-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title-centered">Featured Projects</h2>
        <p className="text-secondary-600 dark:text-secondary-300 text-center text-xl mb-12 max-w-3xl mx-auto">
          Explore my latest data science projects and technical implementations.
        </p>

        {/* Filter tabs */}
        <div className="flex justify-start md:justify-center gap-3 mb-12 overflow-x-auto pb-4 px-4 -mx-4 no-scrollbar">
          <div className="inline-flex items-center gap-2 md:px-3 py-1.5 md:py-2 border border-secondary-200 dark:border-secondary-700 rounded-md bg-white dark:bg-secondary-800 mr-2">
            <Filter size={16} className="text-secondary-500 hidden md:block" />
            <span className="text-secondary-700 dark:text-secondary-300 text-sm">Filter:</span>
          </div>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                filter === category
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white dark:bg-secondary-800 text-secondary-600 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-700 border border-secondary-200 dark:border-secondary-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`card overflow-hidden transform transition-all duration-500 ${animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-bold px-3 py-1 m-2 rounded-md">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-secondary-600 dark:text-secondary-300 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map(tool => (
                    <span
                      key={tool}
                      className="bg-secondary-100 dark:bg-secondary-700/70 px-3 py-1 rounded-md text-sm text-secondary-700 dark:text-secondary-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 pt-4 border-t border-secondary-100 dark:border-secondary-700">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-secondary-500 dark:text-secondary-400">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
