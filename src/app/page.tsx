
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
// import { BlogSection } from '@/components/sections/BlogSection'; // BlogSection removed

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      {/* <BlogSection /> */} {/* BlogSection removed */}
    </>
  );
}
