import Stats from './Stats';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 text-lg mb-6">
              I am a recent graduate with a strong foundation in data science, proficient in Python, SQL, and machine learning techniques. 
              I have hands-on experience with data visualization tools like PowerBI and creating predictive models through academic projects.  
            </p>
            <p className="text-gray-600 text-lg mb-8">
              I'm passionate about staying at the forefront of AI advancements and 
              contribute my skills to impactful projects and grow in the field of data science.
            </p>
            <div className="flex gap-4">
              {/* Download CV Button */}
              <a href="/Harsha_ds.pdf" download className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800">
                Download CV
              </a>

              {/* GitHub Button */}
              <a href="https://github.com/harshajustin" target="_blank" rel="noopener noreferrer" className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50">
                Github
              </a>
            </div>
          </div>
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default About;
