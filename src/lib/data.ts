
import type { Project, TimelineEvent, SocialLink } from '@/types';
import { Briefcase, GraduationCap, Github, Linkedin, Twitter, Mail, Code, Cpu, Database, Layers, BookOpen, Wrench } from 'lucide-react';

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Resume', href: '/resume' },
  { label: 'Projects', href: '/projects' },
  // { label: 'Blog', href: '/#blog' }, // Blog link removed
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

// blogPosts array removed as blog functionality is being removed.
// export const blogPosts: Blog[] = [ ... ];

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
