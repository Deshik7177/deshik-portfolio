import { projects } from '@/lib/data';
import { ProjectCard } from '@/components/ui/ProjectCard';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-background/70 dark:bg-background/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn" style={{animationDelay: '0.2s'}}>
          <h2 className="text-4xl font-bold mb-4 font-headline">My Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of projects I&apos;ve worked on, showcasing my skills and passion for development.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="animate-fadeIn" style={{animationDelay: `${(index * 0.1) + 0.4}s`}}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
