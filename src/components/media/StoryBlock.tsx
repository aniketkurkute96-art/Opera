import { cn } from "@/lib/cn";

type StoryBlockProps = {
  eyebrow?: string;
  title: string;
  body: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  light?: boolean;
};

export function StoryBlock({
  eyebrow,
  title,
  body,
  align = "left",
  className,
  titleClassName,
  light = false,
}: StoryBlockProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center" && "items-center text-center mx-auto",
        className,
      )}
    >
      {eyebrow ? (
        <p className={cn("eyebrow", light && "text-champagne/70")}>{eyebrow}</p>
      ) : null}
      <div className={cn("divider-gold", align === "center" && "mx-auto")} />
      <h2
        className={cn(
          "font-serif display-lg text-balance",
          light ? "text-ivory" : "text-ink",
          titleClassName,
        )}
      >
        {title}
      </h2>
      <p className={cn("lede", light && "text-champagne/75", align === "center" && "mx-auto")}>
        {body}
      </p>
    </div>
  );
}
