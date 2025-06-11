
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection'; // This now refers to the overview section
import { BlogSection } from '@/components/sections/BlogSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection /> {/* This will render the featured projects and a link to /projects */}
      <BlogSection />
    </>
  );
}
