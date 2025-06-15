
import { projects } from '@/lib/data';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function ProjectsSection() {
  const featuredProjects = projects.slice(0, 3); // Show first 3 projects as featured

  return (
    <section id="projects-overview" className="pt-12 pb-16 bg-background/70 dark:bg-background/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn" style={{animationDelay: '0.2s'}}>
          <h2 className="text-4xl font-bold mb-4 font-headline">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A glimpse into some of the projects I&apos;ve worked on. Explore more to see the full range of my work.
          </p>
        </div>
        {featuredProjects.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <div key={project.id} className="animate-fadeIn" style={{animationDelay: `${(index * 0.1) + 0.4}s`}}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
            <div className="text-center mt-12 animate-fadeIn" style={{animationDelay: '0.8s'}}>
              <Button size="lg" asChild className="shadow-lg hover:shadow-primary/40 transition-shadow">
                <Link href="/projects">
                  View All Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center py-12 animate-fadeIn" style={{animationDelay: '0.4s'}}>
            <p className="text-xl text-muted-foreground mb-6">No featured projects at the moment. Check out all projects!</p>
             <Button size="lg" asChild className="shadow-lg hover:shadow-primary/40 transition-shadow">
                <Link href="/projects">
                  View All Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
          </div>
        )}
      </div>
    </section>
  );
}
