
import { educationTimelineEvents, experienceTimelineEvents, techStack } from '@/lib/data';
import { TimelineItem } from '@/components/ui/TimelineItem';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Briefcase, Wrench, DownloadCloud } from 'lucide-react';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Resume | Paila Dhana Deshik",
  description: "Explore Paila Dhana Deshik's skills, professional experience, and educational background.",
};

export default function ResumePage() {
  const resumeUrl = "https://drive.google.com/file/d/1RJRsbu3zPmxrsovJENJEeYyQ-0LVJ1LZ/view?usp=drive_link";
  return (
    <div className="pt-12 pb-20 bg-gradient-to-br from-background via-background to-primary/5 dark:to-primary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-headline">My Professional Journey</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A detailed overview of my skills, experience, and education.
          </p>
        </div>

        {/* Experience and Skills in two columns */}
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <section id="experience" className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-3xl font-bold mb-8 font-headline flex items-center">
              <Briefcase className="mr-3 h-8 w-8 text-primary" />
              Experience
            </h2>
            <div className="p-0 md:p-8 rounded-xl md:glass-card">
              {experienceTimelineEvents.length > 0 ? (
                <ol className="relative border-l border-primary/50 dark:border-primary/30 ml-4">
                  {experienceTimelineEvents.map((event, index) => (
                    <TimelineItem key={index} event={event} />
                  ))}
                </ol>
              ) : (
                <p className="text-muted-foreground text-center">Details about my professional experience will be updated soon.</p>
              )}
            </div>
          </section>
          
          <section id="skills" className="animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-3xl font-bold mb-8 font-headline flex items-center">
              <Wrench className="mr-3 h-8 w-8 text-primary" />
              Skills & Technologies
            </h2>
            <div className="p-8 rounded-xl glass-card">
              {techStack.length > 0 ? (
                <div className="flex flex-wrap gap-4 justify-center">
                  {techStack.map((tech) => (
                    <Badge key={tech.name} variant="secondary" className="text-md py-2 px-4 glass-card !bg-primary/10 !border-primary/30 hover:!bg-primary/20 transition-all">
                      <tech.icon className="mr-2 h-5 w-5 text-primary" />
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-center">Skills will be listed here soon.</p>
              )}
            </div>
          </section>
        </div>

        {/* Education section below, full width */}
        <section id="education" className="mb-16 animate-fadeIn" style={{ animationDelay: '0.7s' }}>
          <h2 className="text-3xl font-bold mb-8 font-headline flex items-center justify-center md:justify-start">
            <BookOpen className="mr-3 h-8 w-8 text-primary" />
            Education
          </h2>
          <div className="p-0 md:p-8 rounded-xl md:glass-card">
            {educationTimelineEvents.length > 0 ? (
              <ol className="relative border-l border-primary/50 dark:border-primary/30 ml-4">
                {educationTimelineEvents.map((event, index) => (
                  <TimelineItem key={index} event={event} />
                ))}
              </ol>
            ) : (
              <p className="text-muted-foreground text-center">Details about my educational background will be updated soon.</p>
            )}
          </div>
        </section>

        {/* Download Resume Button */}
        <div className="text-center mt-12 animate-fadeIn" style={{ animationDelay: '0.9s' }}>
          <Button size="lg" asChild className="shadow-lg hover:shadow-primary/40 transition-shadow">
            <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
              <DownloadCloud className="mr-2 h-5 w-5" />
              Download Resume
            </Link>
          </Button>
        </div>

      </div>
    </div>
  );
}