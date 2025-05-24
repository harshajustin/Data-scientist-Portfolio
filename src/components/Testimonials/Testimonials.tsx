import React from 'react';
import { testimonials } from './testimonialsData';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary-50 dark:bg-secondary-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title-centered">Testimonials</h2>
        <p className="text-secondary-600 dark:text-secondary-300 text-center text-xl mb-12 max-w-3xl mx-auto">
          What colleagues and mentors have to say about my work and collaboration.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card p-6 relative animate-scaleIn"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-white" />
              </div>
              
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white dark:border-secondary-700 shadow-sm"
                />
                <div className="ml-4">
                  <h4 className="font-bold text-secondary-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">{testimonial.position}</p>
                  <p className="text-sm text-secondary-500 dark:text-secondary-500">{testimonial.company}</p>
                </div>
              </div>
              
              <blockquote className="text-secondary-600 dark:text-secondary-300 italic">
                "{testimonial.text}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
