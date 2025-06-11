import Link from 'next/link';
import { socialLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function SocialIcons() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <Button key={social.name} variant="outline" size="icon" asChild className="rounded-full hover:border-primary hover:text-primary transition-colors">
            <Link href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
              <Icon className="h-5 w-5" />
            </Link>
          </Button>
        );
      })}
    </div>
  );
}
