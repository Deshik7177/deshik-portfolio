
import { blogPosts } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CalendarDays, User } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { Metadata, ResolvingMetadata } from 'next';
import { Badge } from '@/components/ui/badge';

type BlogPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  // Since blogPosts will be empty, this will return an empty array.
  // Next.js will not pre-render any blog post pages at build time.
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  { params }: BlogPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The blog post you are looking for does not exist or is coming soon.",
    }
  }

  // This part will likely not be reached if blogPosts is empty
  return {
    title: `${post.title} | Paila Dhana Deshik`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
    },
  }
}


export default function BlogPostPage({ params }: BlogPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound(); // This will render the 404 page
  }

  // The following code will not be reached if blogPosts is empty.
  // It's kept for potential future use if blogs are re-added.
  return (
    <div className="pt-12 pb-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <Button variant="outline" asChild className="mb-8 animate-fadeIn">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
        
        <article className="animate-fadeIn" style={{animationDelay: '0.2s'}}>
          {post.imageUrl && (
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8 shadow-lg">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                data-ai-hint={post.imageHint || 'blog header'}
                priority
              />
            </div>
          )}
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-headline text-primary">{post.title}</h1>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-8">
            <div className="flex items-center">
              <CalendarDays className="mr-1.5 h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <User className="mr-1.5 h-4 w-4" />
              <span>By {post.author}</span>
            </div>
          </div>
          
          <div 
            className="prose dark:prose-invert lg:prose-xl max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />

          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-4 border-t border-border">
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">TAGS:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="bg-primary/10 border-primary/30 text-primary">{tag}</Badge>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
