
import Image from 'next/image';
import { AnimatedHeadline } from '@/components/ui/AnimatedHeadline';
import { ScrollDownArrow } from '@/components/ui/ScrollDownArrow';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-background via-background to-primary/5 dark:to-primary/20">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fadeIn">
          <Image
            src="https://placehold.co/200x200.png"
            alt="Paila Dhana Deshik"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-8 border-4 border-primary shadow-2xl animate-pulse-neon"
            data-ai-hint="profile person"
            priority
          />
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-headline">
            Paila Dhana Deshik
          </h1>
          <p className="text-2xl md:text-3xl text-primary mb-8 font-headline">
            <AnimatedHeadline />
          </p>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10">
            Welcome to my digital space! I build innovative solutions with cutting-edge technologies. Passionate about software development and artificial intelligence.
          </p>
          <div className="space-x-4">
            <Button size="lg" asChild className="shadow-lg hover:shadow-primary/40 transition-shadow">
              <Link href="/projects">
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="shadow-lg hover:shadow-accent/40 transition-shadow">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
      <ScrollDownArrow targetId="about" />
    </section>
  );
}
