"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { DarkModeToggle } from './DarkModeToggle';
import { navItems } from '@/lib/data';
import { Menu, X, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [pathname]);


  const baseClasses = "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out";
  const scrolledClasses = "bg-background/80 backdrop-blur-lg shadow-lg border-b border-border/50";
  const topClasses = "bg-transparent";

  return (
    <header className={`${baseClasses} ${isScrolled || isMenuOpen ? scrolledClasses : topClasses}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 text-xl font-bold hover:text-primary transition-colors">
            <Code2 className="h-7 w-7 text-primary" />
            <span className="font-headline">Paila D. Deshik</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button key={item.label} variant="ghost" asChild className="font-medium hover:text-primary hover:bg-primary/10">
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
            <DarkModeToggle />
          </div>

          <div className="md:hidden flex items-center">
            <DarkModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="ml-2 h-9 w-9 hover:bg-primary/10"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md pb-4 border-t border-border">
          <nav className="flex flex-col space-y-2 px-4 pt-2">
            {navItems.map((item) => (
              <Button key={item.label} variant="ghost" asChild className="justify-start text-lg py-3 hover:text-primary hover:bg-primary/10">
                <Link href={item.href} onClick={() => setIsMenuOpen(false)}>{item.label}</Link>
              </Button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
