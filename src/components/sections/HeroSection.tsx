
import Image from 'next/image';
import { AnimatedHeadline } from '@/components/ui/AnimatedHeadline';
import { ScrollDownArrow } from '@/components/ui/ScrollDownArrow';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-12 pb-20 bg-gradient-to-br from-background via-background to-primary/5 dark:to-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 animate-fadeIn">
          <div className="flex-shrink-0">
            <Image
              src="https://placehold.co/200x200.png"
              alt="Paila Dhana Deshik"
              width={200}
              height={200}
              className="rounded-full border-4 border-primary shadow-2xl animate-pulse-neon hover:scale-110 hover:-rotate-y-[8deg] transition-transform duration-700 ease-in-out"
              data-ai-hint="profile person"
              priority
            />
          </div>
          <div className="w-full md:max-w-2xl text-center md:text-left flex flex-col items-center md:items-start">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-headline">
              Deshik
            </h1>
            <p className="text-2xl md:text-3xl text-primary mb-8 font-headline">
              <AnimatedHeadline />
            </p>
            <p className="max-w-xl mx-auto md:mx-0 text-lg text-muted-foreground mb-10">
              Welcome to my digital space! I build innovative solutions with cutting-edge technologies. Passionate about software development and artificial intelligence.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center md:justify-start">
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
      </div>
      <ScrollDownArrow targetId="about" />
    </section>
  );
}
