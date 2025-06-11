
import { educationTimelineEvents, experienceTimelineEvents } from '@/lib/data';
import { TimelineItem } from '@/components/ui/TimelineItem';
import { Badge } from '@/components/ui/badge';
import { Code, Cpu, Database, Layers, BookOpen, Briefcase } from 'lucide-react';

const techStack = [
  { name: 'Python', icon: Code },
  { name: 'Django', icon: Layers },
  { name: 'React', icon: Code },
  { name: 'SQLite', icon: Database },
  { name: 'FastAPI', icon: Cpu },
  { name: 'JavaScript', icon: Code },
  { name: 'TypeScript', icon: Code },
  { name: 'Node.js', icon: Layers },
  { name: 'Docker', icon: Layers },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn" style={{animationDelay: '0.2s'}}>
          <h2 className="text-4xl font-bold mb-4 font-headline">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A brief look into my journey, skills, and passions in the world of technology.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2 space-y-8 animate-fadeIn" style={{animationDelay: '0.4s'}}>
            <h3 className="text-2xl font-semibold mb-3 font-headline">Who I Am</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m Paila Dhana Deshik, a Gen Z software engineer driven by a curiosity for technology and a passion for creating impactful digital experiences. I thrive on challenges, continuously learning and exploring new frontiers in software development and artificial intelligence. My goal is to leverage my skills to build innovative solutions that solve real-world problems.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 pt-4 font-headline">My Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <Badge key={tech.name} variant="secondary" className="text-sm py-1.5 px-3 glass-card !bg-primary/10 !border-primary/30 hover:!bg-primary/20 transition-all">
                  <tech.icon className="mr-2 h-4 w-4 text-primary" />
                  {tech.name}
                </Badge>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 space-y-12 animate-fadeIn" style={{animationDelay: '0.6s'}}>
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center md:text-left font-headline flex items-center">
                <BookOpen className="mr-3 h-7 w-7 text-primary" />
                My Education
              </h3>
              {educationTimelineEvents.length > 0 ? (
                <ol className="relative border-l border-primary/50 dark:border-primary/30 ml-1">
                  {educationTimelineEvents.map((event, index) => (
                    <TimelineItem key={index} event={event} />
                  ))}
                </ol>
              ) : (
                <p className="text-muted-foreground text-center md:text-left">Details about my educational background will be updated soon.</p>
              )}
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center md:text-left font-headline flex items-center">
                <Briefcase className="mr-3 h-7 w-7 text-primary" />
                My Experience
              </h3>
              {experienceTimelineEvents.length > 0 ? (
                <ol className="relative border-l border-primary/50 dark:border-primary/30 ml-1">
                  {experienceTimelineEvents.map((event, index) => (
                    <TimelineItem key={index} event={event} />
                  ))}
                </ol>
              ) : (
                <p className="text-muted-foreground text-center md:text-left">Details about my professional experience will be updated soon.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
