import { blogPosts } from '@/lib/data';
import { BlogCard } from '@/components/ui/BlogCard';

export function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn" style={{animationDelay: '0.2s'}}>
          <h2 className="text-4xl font-bold mb-4 font-headline">From My Blog</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Thoughts, tutorials, and insights on technology, development, and AI.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
             <div key={post.id} className="animate-fadeIn" style={{animationDelay: `${(index * 0.1) + 0.4}s`}}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
         <p className="text-center mt-12 text-muted-foreground animate-fadeIn" style={{animationDelay: '0.8s'}}>
          More posts coming soon! The blog section will be powered by a Django backend.
        </p>
      </div>
    </section>
  );
}
