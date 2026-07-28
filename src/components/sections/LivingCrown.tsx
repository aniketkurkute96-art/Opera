"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { livingCrown } from "@/lib/content";
import { images } from "@/lib/images";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export function LivingCrown() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current || reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".crown-media",
        { scale: 1.15, y: 40 },
        {
          scale: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      gsap.fromTo(
        ".crown-copy > *",
        { y: 48, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.18,
          duration: 1.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        },
      );

      gsap.fromTo(
        ".crown-title",
        { letterSpacing: "-0.02em" },
        {
          letterSpacing: "0.04em",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="living-crown"
      ref={sectionRef}
      aria-label="The Living Crown"
      className="relative min-h-svh flex flex-col justify-end overflow-hidden bg-charcoal text-ivory"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="crown-media absolute inset-0">
          <Image
            src={images.crown.src}
            alt={images.crown.alt}
            fill
            sizes="100vw"
            className="object-cover object-[center_14%]"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(23,22,20,0.55)_70%,rgba(10,47,36,0.75)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
      </div>

      <div className="crown-copy relative z-10 mx-auto w-full max-w-3xl px-[var(--section-pad-x)] pb-20 pt-40 text-center md:pb-28">
        <p className="eyebrow text-champagne/70">{livingCrown.eyebrow}</p>
        <div className="divider-gold mx-auto mt-6" />
        <h2 className="crown-title mt-8 font-serif display-xl text-ivory text-balance">
          {livingCrown.title}
        </h2>
        <div className="mx-auto mt-10 max-w-xl space-y-6 text-left md:text-center">
          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.22em] text-champagne/55">Feel</p>
            <p className="mt-2 text-lg leading-relaxed text-champagne/85">{livingCrown.feel}</p>
          </div>
          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.22em] text-champagne/55">
              What you get
            </p>
            <p className="mt-2 text-base leading-relaxed text-champagne/75">{livingCrown.product}</p>
          </div>
          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.22em] text-champagne/55">
              Why Opera
            </p>
            <p className="mt-2 text-base leading-relaxed text-champagne/75">
              {livingCrown.difference}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
