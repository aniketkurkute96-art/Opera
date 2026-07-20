"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { brand } from "@/lib/content";
import { images } from "@/lib/images";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!rootRef.current || reducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".hero-media", { scale: 1.05 }, { scale: 1, duration: 2.8 })
        .fromTo(
          ".hero-reveal",
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.4, stagger: 0.14 },
          0.55,
        );
    }, rootRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="top"
      ref={rootRef}
      aria-label="Opera by Nagrik introduction"
      className="relative min-h-svh overflow-hidden bg-charcoal"
    >
      {/* Full-bleed image — transparent nav overlays without clipping the crown */}
      <div className="hero-media absolute inset-0">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_14%] md:object-[center_18%]"
        />
      </div>

      {/* Bottom scrim — text legibility only */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[42vh] bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-svh flex-col justify-end px-[var(--section-pad-x)] pb-12 pt-[calc(var(--nav-height)+1.5rem)] md:pb-16">
        <div className="w-full max-w-6xl">
          <p className="hero-reveal eyebrow text-champagne/80">{brand.location}</p>
          <h1 className="hero-reveal mt-4 font-serif display-xl text-ivory text-balance">
            {brand.name}
            <span className="mt-2 block text-[0.28em] tracking-[0.42em] uppercase font-sans font-normal text-champagne/80">
              {brand.byline}
            </span>
          </h1>
          <p className="hero-reveal mt-6 max-w-md text-lg leading-relaxed text-champagne/85 md:text-xl">
            {brand.tagline}
          </p>
          <Link
            href="#purpose"
            className="hero-reveal mt-8 inline-flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.24em] text-champagne/80 transition-colors duration-500 hover:text-ivory"
          >
            Discover Opera
            <span className="block h-px w-8 bg-gold/70" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
