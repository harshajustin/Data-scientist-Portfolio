import { Mail, Linkedin, Github, Code2 } from 'lucide-react';

const contactLinks = [
  { icon: Mail, text: 'harshajustin2@gmail.com', href: 'mailto:harshajustin2@gmail.com' },
  { icon: Linkedin, text: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/harsha-vardhan-027413304/' },
  { icon: Github, text: 'GitHub Profile', href: 'https://github.com/harshajustin/ATS-Resume-Expert' },
  { icon: Code2, text: 'LeetCode Profile', href: 'https://leetcode.com/u/22eg107a47/' },
];

const ContactInfo = () => {
  return (
    <div className="flex flex-col justify-center space-y-8">
      {contactLinks.map(({ icon: Icon, text, href }) => (
        <div key={text} className="flex items-center space-x-4">
          <Icon className="w-6 h-6 text-blue-600" />
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            {text}
          </a>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
