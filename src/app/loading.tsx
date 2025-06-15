import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background z-[100]">
      <Loader2 className="h-16 w-16 text-primary animate-spin mb-4" />
      <p className="text-xl text-muted-foreground font-semibold font-headline">
        Loading Deshik&apos;s Portfolio...
      </p>
    </div>
  );
}
