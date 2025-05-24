import { Briefcase, Award, GraduationCap, Lightbulb, Code } from 'lucide-react';

export interface Experience {
  title: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  icon?: any;
  skills?: string[];
  type?: 'education' | 'work' | 'project' | 'certificate' | 'leadership';
}

export const experiences: Experience[] = [
  {
    title: 'B.Tech, Artificial Intelligence and Machine Learning',
    company: 'Anurag University',
    location: 'Hyderabad, Telangana',
    period: 'September 2022 - Present',
    description: 'CGPA: 8.01. Focused on developing expertise in AI and ML technologies with practical applications.',
    icon: GraduationCap,
    type: 'education',
    skills: ['Artificial Intelligence', 'Machine Learning', 'Data Science']
  },
  {
    title: 'TS Board of Intermediate Education, MPC',
    company: 'Telangana State Residential Junior College',
    location: 'Jagital, Telangana',
    period: 'June 2020 - May 2022',
    description: 'Achieved 96.4% in Mathematics, Physics, and Chemistry specialization.',
    icon: GraduationCap,
    type: 'education',
    skills: ['Mathematics', 'Physics', 'Chemistry']
  },
  {
    title: 'AI Days - Internal Hackathon',
    company: 'Anurag University',
    location: 'Hyderabad, Telangana',
    period: 'March 2025',
    description: 'Achieved 1st place for designing and deploying EduBot, an AI chatbot that streamlined information access for 200+ students.',
    icon: Award,
    type: 'leadership',
    skills: ['ML Engineering', 'AI Development', 'Hackathon', 'Leadership']
  },
  {
    title: 'SIH - Internal Hackathon',
    company: 'Anurag University',
    location: 'Hyderabad, Telangana',
    period: 'February 2025',
    description: 'Organized a technical workshop on Power BI, training 50+ participants in data visualization and business analytics. Led a one-week bootcamp on python programming, enhancing 30+ student\'s skills in data analysis.',
    icon: Briefcase,
    type: 'leadership',
    skills: ['Power BI', 'Technical Workshop', 'Python', 'Leadership']
  },
  {
    title: 'Editor-in-chief, News Letter',
    company: 'Anurag University',
    location: 'Hyderabad, Telangana',
    period: 'January 2025',
    description: 'Led a diverse content team, overseeing editorial strategy, content curation, and timely publication of a high-quality newsletter with a readership of 200+ students.',
    icon: Briefcase,
    type: 'leadership',
    skills: ['Content Management', 'Editorial Leadership', 'Team Management']
  },
  {
    title: 'Generative AI with Langchain and Huggingface',
    company: 'Certification',
    period: 'March 2025',
    description: 'Built advanced Retrieval-Augmented Generation (RAG) pipelines, fine-tuned pre-trained models, and deployed AI applications on the cloud, improving response efficiency by 45%.',
    icon: Award,
    type: 'certificate',
    skills: ['Generative AI', 'Langchain', 'Huggingface', 'RAG']
  },
  {
    title: 'ServiceNow Certified System Administrator (CSA)',
    company: 'ServiceNow',
    period: 'February 2025',
    description: 'Configured ServiceNow instances, and managed incident reports efficiently, reducing resolution time by 35%.',
    icon: Award,
    type: 'certificate',
    skills: ['ServiceNow', 'System Administration', 'Incident Management']
  },
  {
    title: 'ServiceNow Certified Application Developer (CAD)',    company: 'ServiceNow',
    period: 'February 2025',
    description: 'Designed and launched custom applications on the ServiceNow platform, enhancing workflow automation by 50%.',
    icon: Award,
    type: 'certificate',
    skills: ['ServiceNow', 'Application Development', 'Workflow Automation']
  },
  {
    title: 'Hackathon Winner',
    company: 'DataFest 2024',
    period: 'March 2024',
    description: 'Led a team of 3 to develop an AI-powered solution for sustainable agriculture. Won first prize for innovative approach and technical implementation.',
    icon: Lightbulb,
    type: 'project',
    skills: ['Team Leadership', 'AI Development', 'Problem Solving']
  }
];