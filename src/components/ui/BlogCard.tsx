
import Link from 'next/link';
import Image from 'next/image';
import type { Blog } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarDays } from 'lucide-react';

export function BlogCard({ post }: { post: Blog }) {
  return (
    <Card className="glass-card h-full flex flex-col overflow-hidden group hover:shadow-2xl hover:border-accent hover:rotate-x-[3deg] hover:rotate-y-[3deg] hover:scale-[1.03]">
      {post.imageUrl && (
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            data-ai-hint={post.imageHint || 'blog image'}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </CardTitle>
        <div className="text-xs text-muted-foreground flex items-center pt-1">
          <CalendarDays className="mr-1.5 h-3.5 w-3.5" />
          <span>{post.date}</span>
          <span className="mx-1.5">&bull;</span>
          <span>By {post.author}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-muted-foreground line-clamp-3">{post.description}</CardDescription>
      </CardContent>
      <CardFooter className="mt-auto pt-0">
        <Button variant="link" asChild className="p-0 text-primary hover:text-accent">
          <Link href={`/blog/${post.slug}`}>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
