
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export function AboutSection() {
  return (
    <section id="about" className="pt-12 pb-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fadeIn" style={{animationDelay: '0.2s'}}>
          <h2 className="text-4xl font-bold mb-4 font-headline">About Me</h2>
        </div>

        <div className="max-w-3xl mx-auto animate-fadeIn" style={{animationDelay: '0.4s'}}>
          <div className="p-8 rounded-xl glass-card space-y-6">
            <h3 className="text-2xl font-semibold font-headline text-center md:text-left">Who I Am</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m Paila Dhana Deshik, a Gen Z software engineer driven by a curiosity for technology and a passion for creating impactful digital experiences. I thrive on challenges, continuously learning and exploring new frontiers in software development and artificial intelligence. My goal is to leverage my skills to build innovative solutions that solve real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For a detailed look at my skills, educational background, and professional experience, please visit my{' '}
              <Link href="/resume" className="text-primary hover:underline font-medium">
                Resume page
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
