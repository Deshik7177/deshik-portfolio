
import { projects } from '@/lib/data';
import { ProjectCard } from '@/components/ui/ProjectCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects | Paila Dhana Deshik",
  description: "Explore a collection of projects by Paila Dhana Deshik, showcasing skills in web development, AI, and more.",
};

export default function ProjectsPage() {
  return (
    <div className="py-20 bg-background/70 dark:bg-background/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn" style={{animationDelay: '0.1s'}}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-headline">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here is a collection of projects I&apos;ve worked on, demonstrating my skills and passion for development and AI.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="animate-fadeIn" style={{animationDelay: `${(index * 0.1) + 0.3}s`}}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        {projects.length === 0 && (
           <div className="text-center py-12 animate-fadeIn" style={{animationDelay: '0.3s'}}>
            <p className="text-xl text-muted-foreground">No projects to display at the moment. Stay tuned for updates!</p>
          </div>
        )}
      </div>
    </div>
  );
}
