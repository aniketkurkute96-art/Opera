"use client";

import { cn } from "@/lib/cn";
import { useReveal } from "@/hooks/useReveal";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
  as?: "div" | "header" | "article" | "li";
};

export function Reveal({ children, className, delay = 0, as: Tag = "div" }: RevealProps) {
  const ref = useReveal<HTMLDivElement>();
  const delayClass =
    delay === 1
      ? "reveal-delay-1"
      : delay === 2
        ? "reveal-delay-2"
        : delay === 3
          ? "reveal-delay-3"
          : "";

  return (
    <Tag ref={ref as never} className={cn("reveal", delayClass, className)}>
      {children}
    </Tag>
  );
}
