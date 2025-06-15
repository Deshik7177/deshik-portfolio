
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { BlogSection } from '@/components/sections/BlogSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
    </>
  );
}
