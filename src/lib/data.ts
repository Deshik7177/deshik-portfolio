
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
    description: 'Type: RESTful Backend API. A fully containerized backend service built using Flask, capable of performing basic CRUD operations — Create, Read (all and by ID), Update, and Delete — on a MongoDB collection. The project follows clean RESTful practices and is structured for ease of testing using tools like Postman. Features: CRUD operations via HTTP endpoints, Search data by ID, JSON-based request and response format, Dockerized setup for simple containerized deployment, Clean project structure for scalability. Note: For full code, architecture, and endpoint usage — Refer to the GitHub repository and follow the README instructions to test all routes and functionalities.',
    techStack: ["Python", "Flask", "MongoDB", "Docker"],
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
    githubLink: 'https://github.com/Deshik7177/credit-approval-system-backend',
  },
  {
    id: 'ecoleta-recycling-marketplace',
    title: 'Ecoleta - Recycling Marketplace',
    description: 'A platform connecting waste collectors with entities needing to dispose of recyclable materials. Built during Next Level Week by Rocketseat.',
    techStack: ['React', 'Node.js', 'Express', 'SQLite', 'TypeScript'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'eco friendly app',
    githubLink: '#',
    demoLink: '#',
  },
  {
    id: 'ai-resume-analyzer',
    title: 'AI Powered Resume Analyzer',
    description: 'A tool that uses AI to analyze resumes, provide feedback, and match candidates with job descriptions. (Conceptual Project)',
    techStack: ['Python', 'Flask', 'NLP', 'Machine Learning', 'React'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ai resume analysis',
    githubLink: '#',
  },
  {
    id: 'portfolio-v1',
    title: 'Portfolio Website v1',
    description: 'My first portfolio website built with basic HTML, CSS, and JavaScript. A great learning experience in foundational web technologies.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'simple website design',
    githubLink: '#',
  },
  {
    id: 'django-blog-platform',
    title: 'Django Blog Platform',
    description: 'A full-featured blogging platform built with Django, including user authentication, post creation, comments, and an admin panel.',
    techStack: ['Python', 'Django', 'PostgreSQL', 'HTML', 'CSS'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'blog interface',
    githubLink: '#',
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
