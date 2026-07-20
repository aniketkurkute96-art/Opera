import { cn } from "@/lib/cn";

type TimelineItem = {
  year: string;
  title: string;
  body: string;
};

type TimelineProps = {
  items: TimelineItem[];
  className?: string;
  light?: boolean;
};

export function Timeline({ items, className, light = false }: TimelineProps) {
  return (
    <ol className={cn("relative grid gap-10 md:grid-cols-3 md:gap-8", className)}>
      {items.map((item, index) => (
        <li key={item.title} className="relative flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <span
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full border text-xs tracking-[0.2em]",
                light ? "border-champagne/40 text-champagne" : "border-stone text-muted",
              )}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className={cn("eyebrow", light && "text-champagne/65")}>{item.year}</span>
          </div>
          <h3 className={cn("font-serif text-3xl", light ? "text-ivory" : "text-ink")}>
            {item.title}
          </h3>
          <p className={cn("lede text-base", light && "text-champagne/70")}>{item.body}</p>
        </li>
      ))}
    </ol>
  );
}
