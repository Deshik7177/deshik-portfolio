export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 border-t border-border/50 bg-background">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p>&copy; {currentYear} Paila Dhana Deshik. All rights reserved.</p>
        <p className="text-sm mt-1">
          Built with <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">Next.js</a> and <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">Tailwind CSS</a>.
        </p>
      </div>
    </footer>
  );
}
