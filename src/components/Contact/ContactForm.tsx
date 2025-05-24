import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <form 
      action="https://formsubmit.co/harshajustin2@gmail.com" 
      method="POST" 
      className="p-8 space-y-6"
    >
      <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4">Send me a message</h3>
      
      {/* Honeypot */}
      <input type="text" name="_honey" style={{display: "none"}} />

      {/* Disable Captcha */}
      <input type="hidden" name="_captcha" value="false" />

      {/* Optional: Subject for the email */}
      {/* <input type="hidden" name="_subject" value="New submission from your portfolio!" /> */}

      {/* Optional: Redirect URL after submission */}
      {/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html" /> */}
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
          Your Name <span className="text-rose-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          name="name" // Added name attribute
          value={formData.name}
          onChange={handleChange}
          className="block w-full px-4 py-3 border border-secondary-200 dark:border-secondary-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
          placeholder="John Doe"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
          Your Email <span className="text-rose-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          name="email" // Added name attribute
          value={formData.email}
          onChange={handleChange}
          className="block w-full px-4 py-3 border border-secondary-200 dark:border-secondary-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
          placeholder="john@example.com"
          required
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          name="subject" // Added name attribute
          value={formData.subject}
          onChange={handleChange}
          className="block w-full px-4 py-3 border border-secondary-200 dark:border-secondary-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
          placeholder="Regarding a project"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
          Your Message <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="message"
          name="message" // Added name attribute
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="block w-full px-4 py-3 border border-secondary-200 dark:border-secondary-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
          placeholder="Your message here..."
          required
        ></textarea>
      </div>
      
      <div className="flex justify-end">
        <button
          type="submit"
          className="btn-primary flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
