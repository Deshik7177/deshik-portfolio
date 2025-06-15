
import type { Project, TimelineEvent, SocialLink, Blog, NavItem } from '@/types';
import { Briefcase, GraduationCap, Github, Linkedin, Twitter, Mail, Code, Cpu, Database, Layers, BookOpen, Wrench } from 'lucide-react';

export const navItems: NavItem[] = [
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
  { name: 'Next.js', icon: Code },
  { name: 'Tailwind CSS', icon: Layers },
  { name: 'ShadCN UI', icon: Layers },
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
    id: 'portfolio-v2',
    title: 'Personal Portfolio Website (This Site)',
    description: 'My dynamic personal portfolio built with Next.js and Tailwind CSS, showcasing my projects, skills, and journey. Features responsive design, interactive elements, and a dark mode.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'ShadCN UI', 'Framer Motion'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'website homepage abstract',
    githubLink: 'https://github.com/Deshik7177/your-portfolio-repo-name',
  },
  {
    id: 'flask-crud-api-mongodb-docker',
    title: 'Flask CRUD API with MongoDB & Docker',
    description: "Flask & MongoDB CRUD API, fully Dockerized. Offers RESTful endpoints, ID search, JSON support. Project details and testing guide on GitHub.",
    techStack: ["Python", "Flask", "MongoDB", "Docker", "REST API"],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'api backend code',
    githubLink: 'https://github.com/Deshik7177/flask-crud-mongodb-docker',
  },
  {
    id: 'credit-approval-system-django-fastapi',
    title: 'Credit Approval System Backend',
    description: "A scalable backend credit management system using Django and FastAPI. Features user profiles, loan eligibility checks, and PostgreSQL integration. Dockerized for deployment. See GitHub for full docs and API usage.",
    techStack: ["Python", "Django", "FastAPI", "PostgreSQL", "Docker"],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'financial system architecture',
    githubLink: 'https://github.com/Deshik7177/Alemeno_Credit_Approval_System',
  },
  {
    id: 'college-chatbot-llm-flask',
    title: 'College Chatbot with LLM + Flask',
    description: 'A smart chatbot fine-tuned on my college syllabus that can answer both syllabus-based and general queries. Built using Python, Flask, Ollama LLM, and a local JSON knowledge base. It combines local context + real-world responses. The app is live and accessible at: https://kiet-chatbot.netlify.app/',
    techStack: ['Python', 'Flask', 'Ollama', 'LLM', 'JSON', 'Netlify'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'chatbot interface ai',
    githubLink: 'https://github.com/Deshik7177/college-chatbot-llm-flask',
    demoLink: 'https://kiet-chatbot.netlify.app/',
  },
];

export const blogPosts: Blog[] = [];

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/paila-dhana-deshik',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Deshik7177',
    icon: Github,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/pailadhana',
    icon: Twitter,
  },
];

export const contactEmail = "pdhanadeshik7177@gmail.com";

