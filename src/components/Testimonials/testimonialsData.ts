export interface Testimonial {
  name: string;
  position: string;
  company: string;
  image: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Dr. Ramesh Kumar",
    position: "Assistant Professor",
    company: "Anurag University",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    text: "Harsha's work on the EduBot project showcased exceptional problem-solving abilities. His implementation of BERT embeddings for semantic search significantly enhanced information retrieval efficiency for our university website."
  },
  {
    name: "Priya Sharma",
    position: "Hackathon Coordinator",
    company: "AI Days",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    text: "During the AI Days Hackathon, Harsha demonstrated outstanding leadership and technical expertise. His team's solution stood out for its innovative approach to real-time information retrieval and practical implementation."
  },
  {
    name: "Aditya Verma",
    position: "Technical Program Manager",
    company: "ServiceNow",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
    text: "Harsha's certifications in ServiceNow demonstrate his commitment to mastering enterprise platforms. His ability to configure complex workflows and custom applications shows remarkable technical versatility beyond core AI/ML skills."
  },
  {
    name: "Robert Kang",
    position: "Professor",
    company: "Technical University",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    text: "As Harsha's academic advisor, I was consistently impressed by his innovative approaches to solving challenging problems in deep learning. His research contributions show remarkable potential for real-world applications."
  }
];
