import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import { SendHorizontal } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-primary-50 to-transparent dark:from-primary-900/20 dark:to-transparent"></div>
        <div className="absolute top-1/4 left-1/6 w-32 h-32 border-4 border-primary-200 dark:border-primary-800 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/6 w-24 h-24 border-4 border-secondary-200 dark:border-secondary-800 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
            <SendHorizontal className="w-5 h-5 text-primary-600 dark:text-primary-400" />
          </div>
        </div>
        
        <h2 className="section-title-centered">Get in Touch</h2>
        <p className="text-secondary-600 dark:text-secondary-300 text-center text-xl mb-12 max-w-2xl mx-auto">
          Feel free to reach out for collaborations, opportunities, or just to say hello!
        </p>
        
        <div className="bg-white dark:bg-secondary-800 rounded-2xl shadow-card overflow-hidden border border-secondary-100 dark:border-secondary-700">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;