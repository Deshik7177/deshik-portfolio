
import type { Project, TimelineEvent, Blog, SocialLink } from '@/types';
import { Briefcase, GraduationCap, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/projects' }, // Updated link
  { label: 'Blog', href: '/#blog' },
  { label: 'Contact', href: '/contact' },
];

export const timelineEvents: TimelineEvent[] = [
  {
    date: '2020 - 2024',
    title: 'Bachelor of Technology in Computer Science',
    institution: 'Awesome University Name',
    description: 'Graduated with honors, focusing on software development, AI, and data structures. Actively participated in coding clubs and hackathons.',
    icon: GraduationCap,
  },
  {
    date: '2023 - Present',
    title: 'Software Development Intern',
    institution: 'Tech Solutions Inc.',
    description: 'Contributed to developing and maintaining web applications using Python, Django, and React. Gained experience in agile methodologies and version control.',
    icon: Briefcase,
  },
  {
    date: 'Summer 2022',
    title: 'AI Research Assistant (Intern)',
    institution: 'University Research Lab',
    description: 'Assisted in research on machine learning models, data preprocessing, and result analysis. Worked with Python and TensorFlow.',
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
    title: 'Getting Started with FastAPI for Backend Development',
    description: 'A comprehensive guide to building robust APIs with FastAPI, Python\'s modern web framework.',
    slug: 'getting-started-with-fastapi',
  },
  {
    id: '2',
    title: 'The Power of React Hooks for State Management',
    description: 'Exploring how React Hooks simplify state logic and improve code reusability in functional components.',
    slug: 'react-hooks-state-management',
  },
  {
    id: '3',
    title: 'My Journey into AI and Machine Learning',
    description: 'Sharing my experiences, challenges, and learnings as I delve into the fascinating world of Artificial Intelligence.',
    slug: 'my-journey-into-ai',
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/pailadhanadeshik', // Replace with actual link
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/pailadhanadeshik', // Replace with actual link
    icon: Github,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/pailadhana', // Replace with actual link
    icon: Twitter,
  },
];

export const contactEmail = "paila.dhana.deshik@example.com"; // Replace with actual email
