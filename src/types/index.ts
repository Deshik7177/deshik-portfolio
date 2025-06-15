
import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
  isExternal?: boolean;
};

export type TimelineEvent = {
  date: string;
  title: string;
  institution: string;
  description: string;
  icon: LucideIcon;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  imageHint: string;
  githubLink?: string;
  demoLink?: string;
};

export type Blog = {
  id: string;
  title: string;
  description: string; // Short description for cards
  slug: string;
  content: string; // Full content for the blog post page
  date: string; // e.g., "October 26, 2023"
  author: string;
  tags?: string[];
  imageUrl?: string;
  imageHint?: string;
};

export type SocialLink = {
  name: string;
  url: string;
  icon: LucideIcon;
};

