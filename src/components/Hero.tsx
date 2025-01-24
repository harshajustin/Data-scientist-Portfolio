import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string): void => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Section with id "${id}" not found.`);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
          Data Science
          <span className="block text-blue-600">Reimagined</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
          Transforming complex data into actionable insights through innovative machine learning solutions.
        </p>
        <div className="flex justify-center space-x-4">
          {/* View Projects Button */}
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            View Projects
          </button>
          {/* Contact Me Button */}
          <button
            onClick={() => scrollToSection('contact')}
            className="border border-gray-300 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors"
          >
            Contact Me
          </button>
        </div>
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <button
            onClick={() => {
              const section = document.getElementById('about');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              } else {
                console.warn('Section with id "about" not found.');
              }
            }}
            className="focus:outline-none"
          >
            <ChevronDown className="w-10 h-10 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
