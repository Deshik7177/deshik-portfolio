
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
    githubLink: 'https://github.com/Deshik7177/your-portfolio-repo-name', // Please update this link
  },
  {
    id: 'flask-crud-api-mongodb-docker',
    title: 'Flask CRUD API with MongoDB & Docker',
    description: 'Type: RESTful Backend API. A fully containerized backend service built using Flask, capable of performing basic CRUD operations — Create, Read (all and by ID), Update, and Delete — on a MongoDB collection. The project follows clean RESTful practices and is structured for ease of testing using tools like Postman. Features: CRUD operations via HTTP endpoints, Search data by ID, JSON-based request and response format, Dockerized setup for simple containerized deployment, Clean project structure for scalability. Note: For full code, architecture, and endpoint usage — Refer to the GitHub repository and follow the README instructions to test all routes and functionalities.',
    techStack: ["Python", "Flask", "MongoDB", "Docker"],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'api backend code',
    githubLink: 'https://github.com/Deshik7177/flask-crud-mongodb-docker', // Please update this link
  },
  {
    id: 'credit-approval-system-django-fastapi',
    title: 'Credit Approval System Backend',
    description: 'Type: Scalable Backend Application. A backend credit management and eligibility system developed using Django and FastAPI. It allows users to create profiles, check loan eligibility, and add loan details to a PostgreSQL database. The system is containerized using Docker and built with scalability and modularity in mind. Features: User account creation and deletion, Add loan information to the PostgreSQL database, Eligibility check logic based on financial input, REST API developed using FastAPI for speed and documentation, Admin and management handled by Django framework, Dockerized for isolated development environments. Note: All technical documentation, routes, and testing instructions are available in the GitHub repository. Please follow the README file for detailed setup and API usage.',
    techStack: ["Python", "Django", "FastAPI", "PostgreSQL", "Docker"],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'financial system architecture',
    githubLink: 'https://github.com/Deshik7177/credit-approval-system-backend', // Please update this link
  },
];

export const blogPosts: Blog[] = []; // Empty array for blog posts - for "Coming Soon" page

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

