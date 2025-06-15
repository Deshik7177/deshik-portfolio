
import { blogPosts } from '@/lib/data';
import { BlogCard } from '@/components/ui/BlogCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function BlogSection() {
  const featuredPosts = blogPosts.slice(0, 3); // Show first 3 posts

  if (featuredPosts.length === 0) {
    return null; // Don't render the section if there are no posts
  }

  return (
    <section id="blog" className="py-20 bg-background/70 dark:bg-background/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn" style={{animationDelay: '0.2s'}}>
          <h2 className="text-4xl font-bold mb-4 font-headline">Latest Blog Posts</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, thoughts, and updates from my journey in tech.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <div key={post.id} className="animate-fadeIn" style={{animationDelay: `${(index * 0.1) + 0.4}s`}}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
        {blogPosts.length > 3 && (
          <div className="text-center mt-12 animate-fadeIn" style={{animationDelay: '0.8s'}}>
            <Button size="lg" asChild className="shadow-lg hover:shadow-primary/40 transition-shadow">
              <Link href="/blog">
                View All Posts <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
