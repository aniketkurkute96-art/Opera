"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/cn";

gsap.registerPlugin(ScrollTrigger);

type Tone = "ivory" | "emerald" | "charcoal";

const tones: Record<Tone, { section: string; line: string; eyebrow: string }> = {
  ivory: { section: "bg-ivory", line: "text-ink", eyebrow: "text-muted" },
  emerald: { section: "bg-emerald", line: "text-ivory", eyebrow: "text-champagne/60" },
  charcoal: { section: "bg-charcoal", line: "text-ivory", eyebrow: "text-champagne/60" },
};

type InterludeProps = {
  lines: readonly string[];
  eyebrow?: string;
  tone?: Tone;
};

/**
 * A pinned typographic pause between chapters.
 * The line surfaces slowly as the visitor scrolls through it —
 * a moment of stillness, not a section of information.
 */
export function Interlude({ lines, eyebrow, tone = "ivory" }: InterludeProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const items = section.querySelectorAll("[data-interlude-line]");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
      tl.fromTo(
        items,
        { opacity: 0.06, y: 28 },
        { opacity: 1, y: 0, stagger: 0.4, ease: "none" },
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className={cn("relative h-[150vh]", tones[tone].section)}>
      <div className="sticky top-0 flex h-svh flex-col items-center justify-center gap-4 px-[var(--section-pad-x)] text-center">
        {eyebrow ? <p className={cn("eyebrow mb-6", tones[tone].eyebrow)}>{eyebrow}</p> : null}
        {lines.map((line) => (
          <p
            key={line}
            data-interlude-line
            className={cn("font-serif display-lg text-balance", tones[tone].line)}
          >
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}
