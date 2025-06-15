
import type { Project, TimelineEvent, SocialLink, Blog } from '@/types';
import { Briefcase, GraduationCap, Github, Linkedin, Twitter, Mail, Code, Cpu, Database, Layers, BookOpen, Wrench } from 'lucide-react';

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Resume', href: '/resume' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const techStack = [
  { name: 'Python', icon: Code },
  { name: 'Django', icon: Layers },
  { name: 'React', icon: Code },
  { name: 'SQLite', icon: Database },
  { name: 'FastAPI', icon: Cpu },
  { name: 'JavaScript', icon: Code },
  { name: 'TypeScript', icon: Code },
  { name: 'Node.js', icon: Layers },
  { name: 'Docker', icon: Layers },
];

export const educationTimelineEvents: TimelineEvent[] = [
  {
    date: '2023 - Present',
    title: 'B.Tech in CSE (Artificial Intelligence & Machine Learning)',
    institution: 'Kakinada Institute of Engineering and Technology',
    description: 'Currently pursuing a Bachelor of Technology in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning.',
    icon: GraduationCap,
  },
  {
    date: '2011 - 2023',
    title: 'Higher Secondary Education (CBSE 10th & 12th)',
    institution: 'Kendriya Vidyalaya Steelplant',
    description: 'Completed Senior School Certificate Examination (CBSE 12th) and Secondary School Examination (CBSE 10th).',
    icon: GraduationCap,
  },
];

export const experienceTimelineEvents: TimelineEvent[] = [
  {
    date: 'April 2025 - Present',
    title: 'AI & ML Intern',
    institution: 'LSI Labs @ IIIT Hyderabad',
    description: 'Working on computer vision, machine learning, hardware (Raspberry Pi), and automation.',
    icon: Briefcase,
  },
];


export const projects: Project[] = [
  {
    id: '1',
    title: 'Ecoleta - Recycling Marketplace',
    description: 'A platform connecting waste collectors with recycling points. Built with Node.js, React, and React Native.',
    techStack: ['React', 'Node.js', 'SQLite', 'TypeScript'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'app interface',
    githubLink: 'https://github.com/pailadhanadeshik/ecoleta',
    demoLink: '#',
  },
  {
    id: '2',
    title: 'AI Powered Resume Analyzer',
    description: 'A tool that uses NLP to analyze resumes and provide feedback. Developed using Python, FastAPI, and spaCy.',
    techStack: ['Python', 'FastAPI', 'spaCy', 'Docker'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'dashboard analytics',
    githubLink: 'https://github.com/pailadhanadeshik/resume-analyzer',
  },
  {
    id: '3',
    title: 'Portfolio Website v1',
    description: 'My first personal portfolio website, showcasing early projects and skills. Built with HTML, CSS, and JavaScript.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'website design',
    githubLink: 'https://github.com/pailadhanadeshik/portfolio-v1',
    demoLink: '#',
  },
  {
    id: '4',
    title: 'Django Blog Platform',
    description: 'A full-featured blogging platform with user authentication, post creation, and comments. Built with Django and PostgreSQL.',
    techStack: ['Django', 'Python', 'PostgreSQL', 'Bootstrap'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'blog layout',
    githubLink: 'https://github.com/pailadhanadeshik/django-blog',
  },
];

export const blogPosts: Blog[] = [
  {
    id: '1',
    title: 'My Journey into Tech: The Spark',
    slug: 'journey-into-tech-spark',
    description: 'Exploring the initial curiosity and experiences that led me towards a path in technology and software engineering.',
    content: '<p>My fascination with technology began early on, not with complex algorithms or sophisticated hardware, but with the simple magic of making things happen on a screen. Video games were an early portal, but it was the underlying question of "How does this work?" that truly captivated me. This curiosity led me to explore basic programming, tinker with websites, and gradually understand the power of code to transform ideas into reality.</p><p>The journey wasn\'t always linear. There were moments of frustration, bugs that seemed insurmountable, and concepts that took time to click. But each small victory, each successfully executed line of code, fueled my passion further. This initial spark has grown into a dedicated pursuit of knowledge in computer science, particularly in the exciting fields of AI and Machine Learning.</p>',
    date: 'October 15, 2023',
    author: 'Paila Dhana Deshik',
    tags: ['Beginnings', 'Tech Journey', 'Inspiration'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'abstract technology',
  },
  {
    id: '2',
    title: 'Diving into AI/ML: Challenges and Discoveries',
    slug: 'diving-into-ai-ml',
    description: 'A reflection on the learning curve, challenges, and exciting discoveries encountered while studying Artificial Intelligence and Machine Learning.',
    content: '<p>Embarking on my B.Tech in CSE with a specialization in Artificial Intelligence & Machine Learning has been an incredible adventure. The field is vast, constantly evolving, and presents a steep learning curve. Concepts like neural networks, deep learning, and natural language processing initially seemed daunting, but breaking them down and working through practical examples has been key.</p><p>One of the biggest challenges is keeping up with the rapid pace of innovation. New research papers, models, and tools emerge almost daily. However, this dynamism is also what makes AI/ML so exciting. The potential to solve complex real-world problems, from healthcare to environmental sustainability, is immense. My internship experiences have further solidified my interest, allowing me to apply theoretical knowledge to practical projects in computer vision and automation. The journey is ongoing, and I\'m eager to continue learning and contributing to this transformative field.</p>',
    date: 'November 5, 2023',
    author: 'Paila Dhana Deshik',
    tags: ['AI', 'Machine Learning', 'Education', 'Challenges'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'artificial intelligence',
  },
  {
    id: '3',
    title: 'Building My Digital Space: This Portfolio',
    slug: 'building-this-portfolio',
    description: 'The process, technologies, and design choices behind creating this personal portfolio website.',
    content: '<p>Creating this portfolio has been a project in itself! As a software engineer, I believe it\'s important to have a space to showcase my skills, projects, and journey. I chose Next.js for its performance benefits and React for building a dynamic user interface. Tailwind CSS was my go-to for styling, allowing for rapid development with utility-first classes, and ShadCN UI components provided a fantastic set of pre-built, accessible elements to accelerate the process.</p><p>The design goal was to create something modern, clean, and reflective of my personality as a tech enthusiast. I focused on ensuring responsiveness across devices and a smooth user experience. Integrating sections for my resume, projects, and now this blog, involved careful planning of data structures and component design. This project wasn\'t just about showcasing past work; it was also an opportunity to learn and apply best practices in web development. I hope you enjoy exploring it as much as I enjoyed building it!</p>',
    date: 'December 1, 2023',
    author: 'Paila Dhana Deshik',
    tags: ['Web Development', 'Next.js', 'React', 'Portfolio'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'coding screen',
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/pailadhanadeshik', 
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/pailadhanadeshik', 
    icon: Github,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/pailadhana', 
    icon: Twitter,
  },
];

export const contactEmail = "paila.dhana.deshik@example.com";
