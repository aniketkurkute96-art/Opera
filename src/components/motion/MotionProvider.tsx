"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { track } from "@/lib/analytics";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, type ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll choreography — Apple restraint.
 * expo/power easing only. Subtle parallax. Section analytics.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      return;
    }

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = Number(el.dataset.parallax) || 10;
        gsap.to(el, {
          yPercent: speed,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement || el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-fade-up]").forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 32 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.15,
            ease: "expo.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("section[id]").forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top 55%",
          end: "bottom 45%",
          onEnter: () =>
            track({ name: "section_view", section: section.id || "unknown" }),
          onEnterBack: () =>
            track({ name: "section_view", section: section.id || "unknown" }),
        });
      });
    });

    return () => ctx.revert();
  }, [reduced]);

  return <>{children}</>;
}
