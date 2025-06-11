import type { TimelineEvent } from '@/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export function TimelineItem({ event }: { event: TimelineEvent }) {
  const Icon = event.icon;
  return (
    <li className="mb-10 ml-8 group">
      <span className="absolute flex items-center justify-center w-10 h-10 bg-primary rounded-full -left-5 ring-4 ring-background text-primary-foreground group-hover:animate-pulse-neon transition-all duration-300">
        <Icon className="w-5 h-5" />
      </span>
      <Card className="glass-card hover:border-accent transition-all duration-300 ease-in-out transform hover:scale-[1.02]">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-foreground">{event.title}</CardTitle>
            <time className="block mb-2 text-sm font-normal leading-none text-muted-foreground">{event.date}</time>
          </div>
          <CardDescription className="text-md font-medium text-accent">{event.institution}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-base font-normal text-muted-foreground">{event.description}</p>
        </CardContent>
      </Card>
    </li>
  );
}
