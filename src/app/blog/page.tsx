"use client";

import { Sparkles } from 'lucide-react';

export default function BlogComingSoonPage() {
  return (
    <div className="pt-12 pb-20 bg-background/70 dark:bg-background/90 flex items-center justify-center min-h-[calc(100vh-128px)]"> {/* Adjust min-h to account for navbar/footer */}
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
          <Sparkles className="mx-auto h-24 w-24 text-primary mb-8 animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-gradient-xy">
            Coming Soon!
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            My blog is currently under construction.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m working hard to bring you exciting content, insights, and updates on my journey through technology, AI, and software development. Please check back later!
          </p>
        </div>
      </div>
      <style jsx global>{`
        @keyframes gradient-xy {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient-xy {
          animation: gradient-xy 6s ease infinite;
        }
      `}</style>
    </div>
  );
}
