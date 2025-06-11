import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="glass-card h-full flex flex-col overflow-hidden group hover:shadow-2xl hover:border-accent">
      <CardHeader>
        <div className="aspect-[3/2] relative overflow-hidden rounded-md mb-4">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            data-ai-hint={project.imageHint}
          />
        </div>
        <CardTitle className="text-2xl font-semibold group-hover:text-primary transition-colors">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="mb-4 text-muted-foreground">{project.description}</CardDescription>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-primary/10 border-primary/30 text-primary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="mt-auto pt-0">
        <div className="flex space-x-2 w-full">
          {project.githubLink && (
            <Button variant="outline" asChild className="flex-1 hover:border-primary hover:text-primary">
              <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
          )}
          {project.demoLink && (
            <Button variant="default" asChild className="flex-1">
              <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Demo
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
