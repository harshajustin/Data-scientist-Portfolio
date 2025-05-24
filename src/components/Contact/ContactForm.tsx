import React, { useState } from 'react';
import axios from 'axios';
import { Send, AlertCircle, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: 'error' | 'success' | null;
    message: string;
  }>({
    type: null,
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    // Example validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill out all required fields',
      });
      setIsSubmitting(false);
      return;
    }    try {
      // Send data to the backend
      await axios.post('https://data-scientits-portfolio.onrender.com/send-email', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Reset the form after successful submission
      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Error sending email:', err);
      setStatus({
        type: 'error',
        message: 'There was an error sending your message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="p-8 space-y-6">
      <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4">Send me a message</h3>
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
          Your Name <span className="text-rose-500">*</span>
        </label>
        <input
          id="name"
          type="text"
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
          value={formData.subject}
          onChange={handleChange}
          className="block w-full px-4 py-3 border border-secondary-200 dark:border-secondary-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
          placeholder="Project inquiry"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
          Your Message <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="block w-full px-4 py-3 border border-secondary-200 dark:border-secondary-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
          placeholder="How can I help you?"
          required
        />
      </div>
      
      {status.type && (
        <div className={`flex items-center gap-2 p-3 rounded-lg ${
          status.type === 'error' 
            ? 'bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300' 
            : 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'
        }`}>
          {status.type === 'error' 
            ? <AlertCircle className="w-5 h-5" /> 
            : <CheckCircle className="w-5 h-5" />}
          <p className="text-sm">{status.message}</p>
        </div>
      )}
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-all duration-300 flex items-center justify-center gap-2"
      >
        {isSubmitting ? 'Sending...' : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
