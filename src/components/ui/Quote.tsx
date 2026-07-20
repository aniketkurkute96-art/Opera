import { cn } from "@/lib/cn";

type QuoteProps = {
  children: React.ReactNode;
  attribution?: string;
  className?: string;
};

export function Quote({ children, attribution, className }: QuoteProps) {
  return (
    <blockquote className={cn("relative max-w-3xl", className)}>
      <p className="font-serif display-md text-balance">{children}</p>
      {attribution ? (
        <footer className="mt-8">
          <cite className="eyebrow not-italic">{attribution}</cite>
        </footer>
      ) : null}
    </blockquote>
  );
}
