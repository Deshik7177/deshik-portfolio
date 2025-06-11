import Link from 'next/link';
import type { Blog } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function BlogCard({ post }: { post: Blog }) {
  return (
    <Card className="glass-card h-full flex flex-col group hover:shadow-2xl hover:border-accent">
      <CardHeader>
        <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">{post.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{post.description}</p>
      </CardContent>
      <CardFooter className="mt-auto pt-0">
        <Button variant="link" asChild className="p-0 text-primary hover:text-accent">
          {/* For now, links to #blog, will be dynamic later */}
          <Link href={`/blog/${post.slug}`}> 
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
