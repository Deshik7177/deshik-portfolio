// src/app/blog/[slug]/page.tsx
import { blogPosts } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type BlogPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return {
      title: "Blog Post Not Found",
    }
  }
  return {
    title: `${post.title} | Paila D. Deshik's Blog`,
    description: post.description,
  };
}


export default function BlogPostPage({ params }: BlogPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <Button variant="outline" asChild className="mb-8 animate-fadeIn">
          <Link href="/#blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
        <article className="prose dark:prose-invert lg:prose-xl max-w-none animate-fadeIn" style={{animationDelay: '0.2s'}}>
          <h1 className="text-4xl font-bold mb-4 font-headline text-primary">{post.title}</h1>
          <p className="text-lg text-muted-foreground mb-8">{post.description}</p>
          
          <div className="p-8 my-8 border-l-4 border-primary bg-primary/10 rounded-md">
            <p className="text-lg font-semibold">Note from Paila:</p>
            <p>This is a placeholder for the actual blog content. The full blog functionality, including fetching posts from a Django backend, will be implemented soon. Stay tuned for more exciting articles!</p>
          </div>

          <p>Imagine rich, insightful content here related to: <strong>{post.title}</strong>.</p>
          <p>This could include code snippets, images, and detailed explanations. The current setup is ready to be connected to a dynamic backend to fetch and display full blog posts.</p>
          
          <h2 className="mt-12">Key Takeaways (Example)</h2>
          <ul>
            <li>Placeholder point one about the topic.</li>
            <li>Another interesting insight that would be in the full post.</li>
            <li>Conclusion or further reading suggestion.</li>
          </ul>
          
        </article>
      </div>
    </div>
  );
}
