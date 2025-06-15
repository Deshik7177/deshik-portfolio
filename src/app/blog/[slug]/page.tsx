
// src/app/blog/[slug]/page.tsx
// Blog functionality has been removed.
// This page is kept to provide a fallback message.

// import { blogPosts } from '@/lib/data'; // No longer needed
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
// import { notFound } from 'next/navigation'; // No longer needed

// type BlogPageProps = { // No longer needed
//   params: {
//     slug: string;
//   };
// };

// generateStaticParams removed as blogPosts data is removed
// export async function generateStaticParams() { ... }

// generateMetadata removed as blogPosts data is removed
// export async function generateMetadata({ params }: BlogPageProps) { ... }


export default function BlogPostPage() {
  // const post = blogPosts.find((p) => p.slug === params.slug); // No longer needed

  // if (!post) { // No longer needed
  //   notFound();
  // }

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <Button variant="outline" asChild className="mb-8 animate-fadeIn">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <article className="prose dark:prose-invert lg:prose-xl max-w-none animate-fadeIn" style={{animationDelay: '0.2s'}}>
          <h1 className="text-4xl font-bold mb-4 font-headline text-primary">Blog Not Available</h1>
          <p className="text-lg text-muted-foreground mb-8">The blog functionality has been removed from this website.</p>
        </article>
      </div>
    </div>
  );
}
