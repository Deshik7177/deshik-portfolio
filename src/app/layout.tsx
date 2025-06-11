import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Paila Dhana Deshik | Software Engineer",
  description: "Portfolio of Paila Dhana Deshik, a Fullstack Developer, Techie, and AI Enthusiast. Explore projects, skills, and experience.",
  keywords: "Paila Dhana Deshik, Paila, Deshik, Software Engineer, Fullstack Developer, AI Enthusiast, Portfolio, React, Python, Django, FastAPI",
  authors: [{ name: "Paila Dhana Deshik" }],
  creator: "Paila Dhana Deshik",
  openGraph: {
    title: "Paila Dhana Deshik | Software Engineer",
    description: "Portfolio of Paila Dhana Deshik, showcasing projects and skills in web development and AI.",
    type: "website",
    locale: "en_US",
    // url: "https://yourdomain.com", // Replace with actual domain
    // siteName: "Paila Dhana Deshik's Portfolio",
    // images: [ // Add a profile image or site banner for social sharing
    //   {
    //     url: "https://yourdomain.com/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Paila Dhana Deshik",
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <Navbar />
        <main className="min-h-screen pt-16"> {/* pt-16 for sticky navbar height */}
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
