import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export function ScrollDownArrow({ targetId }: { targetId: string }) {
  return (
    <Link href={`#${targetId}`} aria-label="Scroll to next section">
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-scroll-down cursor-pointer">
        <ArrowDown className="h-8 w-8 text-primary hover:text-accent transition-colors" />
      </div>
    </Link>
  );
}
