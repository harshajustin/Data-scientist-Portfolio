import React from 'react';
import { Mail, Linkedin, Github, Code2, MapPin, Calendar, Clock } from 'lucide-react';

const contactLinks = [
  { 
    icon: Mail, 
    text: 'harshajustin2@gmail.com', 
    href: 'mailto:harshajustin2@gmail.com',
    label: 'Email'
  },
  {
    icon: MapPin,
    text: 'Hyderabad, Telangana',
    href: '#',
    label: 'Location'
  },
  { 
    icon: Linkedin, 
    text: 'Harsha Vardhanu Parnandi', 
    href: 'https://www.linkedin.com/in/harshavardhanuparnandi',
    label: 'LinkedIn'
  },
  { 
    icon: Github, 
    text: 'harshajustin', 
    href: 'https://github.com/harshajustin',
    label: 'GitHub'
  },
];

const ContactInfo = () => {
  return (
    <div className="p-8 bg-secondary-50 dark:bg-secondary-900/30 h-full flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-6">Contact Information</h3>
        
        <div className="space-y-6">
          {contactLinks.map(({ icon: Icon, text, href, label }) => (
            <div key={label} className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-4">
                <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <p className="text-xs text-secondary-500 dark:text-secondary-400 mb-0.5">{label}</p>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {text}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-secondary-200 dark:border-secondary-700">
        <div className="space-y-4">
          <div className="flex items-start">
            <MapPin className="w-5 h-5 text-primary-500 mt-0.5 mr-3" />
            <p className="text-secondary-600 dark:text-secondary-300">
              India
            </p>
          </div>
          
          <div className="flex items-start">
            <Calendar className="w-5 h-5 text-primary-500 mt-0.5 mr-3" />
            <p className="text-secondary-600 dark:text-secondary-300">
              Available from June 2025
            </p>
          </div>
          
          <div className="flex items-start">
            <Clock className="w-5 h-5 text-primary-500 mt-0.5 mr-3" />
            <p className="text-secondary-600 dark:text-secondary-300">
              Response time: &lt; 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
