import { forwardRef } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  className?: string;
  tone?: "light" | "dark" | "forest" | "champagne";
  fullHeight?: boolean;
  children: React.ReactNode;
  as?: "section" | "div" | "footer" | "header";
  ariaLabel?: string;
};

const tones = {
  light: "bg-ivory text-ink",
  dark: "bg-charcoal text-ivory",
  forest: "bg-emerald text-ivory",
  champagne: "bg-champagne/40 text-ink",
} as const;

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  {
    id,
    className,
    tone = "light",
    fullHeight = false,
    children,
    as: Tag = "section",
    ariaLabel,
  },
  ref,
) {
  return (
    <Tag
      id={id}
      ref={ref as never}
      aria-label={ariaLabel}
      className={cn(
        "section-shell relative overflow-hidden",
        tones[tone],
        fullHeight && "min-h-svh flex flex-col justify-center",
        className,
      )}
    >
      {children}
    </Tag>
  );
});
