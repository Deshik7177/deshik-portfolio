
import { blogPosts } from '@/lib/data';
import { BlogCard } from '@/components/ui/BlogCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog | Paila Dhana Deshik",
  description: "Read articles and insights from Paila Dhana Deshik on technology, software development, AI, and personal journey.",
};

export default function BlogListPage() {
  return (
    <div className="py-20 bg-background/70 dark:bg-background/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn" style={{animationDelay: '0.1s'}}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-headline">My Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Welcome to my blog. Here I share insights, experiences, and thoughts on my journey through technology, AI, and software development.
          </p>
        </div>
        {blogPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={post.id} className="animate-fadeIn" style={{animationDelay: `${(index * 0.1) + 0.3}s`}}>
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        ) : (
           <div className="text-center py-12 animate-fadeIn" style={{animationDelay: '0.3s'}}>
            <p className="text-xl text-muted-foreground">No blog posts available at the moment. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
