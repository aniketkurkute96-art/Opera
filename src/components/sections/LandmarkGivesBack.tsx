"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { brand, givesBack, givesBackManifesto } from "@/lib/content";
import { images } from "@/lib/images";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const visualMap = {
  time: images.time,
  energy: images.energy,
  value: images.value,
} as const;

const order = ["time", "energy", "value"] as const;

export function LandmarkGivesBack() {
  const reduced = useReducedMotion();
  return reduced ? <ManifestoStatic /> : <ManifestoCinematic />;
}

/**
 * The philosophical heart of Opera.
 *
 * The section pins for several viewport heights. As the visitor scrolls, the
 * page does not move — the philosophy does. Time gives way to Energy, Energy
 * to Value, each with its own light, image, and words. Nothing hurries. It is
 * closer to a museum installation than a feature list.
 */
function ManifestoCinematic() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const q = gsap.utils.selector(section);
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const bg = {
        time: q("[data-bg='time']"),
        energy: q("[data-bg='energy']"),
        value: q("[data-bg='value']"),
      };
      const copy = {
        time: q("[data-copy='time']"),
        energy: q("[data-copy='energy']"),
        value: q("[data-copy='value']"),
      };
      const word = {
        time: q("[data-word='time']"),
        energy: q("[data-word='energy']"),
        value: q("[data-word='value']"),
      };
      const intro = q("[data-intro]");
      const closing = q("[data-closing]");
      const index = q("[data-index]");

      const dim = 0.16;

      gsap.set([bg.time, bg.energy, bg.value], { opacity: 0 });
      gsap.set([copy.time, copy.energy, copy.value], { opacity: 0 });
      gsap.set(index, { opacity: 0 });
      gsap.set(word.time, { opacity: 1 });
      gsap.set([word.energy, word.value], { opacity: dim });
      gsap.set(closing, { opacity: 0 });
      gsap.set(intro, { opacity: 1 });

      // The camera breathes — a slow, ambient drift independent of scroll.
      const breathe = gsap.to("[data-bg-wrap]", {
        scale: 1.06,
        duration: 18,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Coffee-table page turns: only opacity. No slides. No aggressive motion.
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.35,
        },
      });

      // Intro dissolves into Time
      tl.to(intro, { opacity: 0, duration: 1.4 }, 1)
        .to(bg.time, { opacity: 1, duration: 2 }, 1)
        .to(index, { opacity: 1, duration: 1.4 }, 1.3)
        .to(copy.time, { opacity: 1, duration: 1.8 }, 1.8);

      // Time → Energy
      tl.to(copy.time, { opacity: 0, duration: 1.4 }, 4.4)
        .to(bg.time, { opacity: 0, duration: 2.2 }, 4.4)
        .to(bg.energy, { opacity: 1, duration: 2.2 }, 4.4)
        .to(word.time, { opacity: dim, duration: 1.6 }, 4.4)
        .to(word.energy, { opacity: 1, duration: 1.6 }, 4.4)
        .to(copy.energy, { opacity: 1, duration: 1.8 }, 5.2);

      // Energy → Value
      tl.to(copy.energy, { opacity: 0, duration: 1.4 }, 7.8)
        .to(bg.energy, { opacity: 0, duration: 2.2 }, 7.8)
        .to(bg.value, { opacity: 1, duration: 2.2 }, 7.8)
        .to(word.energy, { opacity: dim, duration: 1.6 }, 7.8)
        .to(word.value, { opacity: 1, duration: 1.6 }, 7.8)
        .to(copy.value, { opacity: 1, duration: 1.8 }, 8.6);

      // Value → Closing imprint
      tl.to(copy.value, { opacity: 0, duration: 1.4 }, 11.2)
        .to(index, { opacity: 0, duration: 1.4 }, 11.2)
        .to(bg.value, { opacity: 0.18, duration: 2 }, 11.2)
        .to(closing, { opacity: 1, duration: 2 }, 11.8);

      // A held breath before the site continues.
      tl.to({}, { duration: 2.4 });

      return () => {
        breathe.kill();
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="gives-back"
      ref={sectionRef}
      aria-label="Why Opera exists — the philosophy"
      className="relative bg-emerald text-ivory"
      style={{ height: "720vh" }}
    >
      <div className="sticky top-0 h-svh overflow-hidden">
        {/* Cinematic backdrops — one philosophy at a time */}
        <div data-bg-wrap className="absolute inset-0">
          {order.map((id) => (
            <Image
              key={id}
              data-bg={id}
              src={visualMap[id].src}
              alt={visualMap[id].alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          ))}
        </div>

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/45 to-charcoal/25"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald/70 via-emerald/10 to-transparent"
          aria-hidden
        />
        <div className="grain pointer-events-none opacity-[0.05]" aria-hidden />

        {/* Chapter stage — four layers: truth → philosophy → product → close */}
        <div className="relative z-10 flex h-svh flex-col px-[var(--section-pad-x)] pb-10 pt-[calc(var(--nav-height)+1.25rem)] md:pb-14 lg:pb-[var(--section-pad-y)]">
          <div data-index>
            <p className="eyebrow text-champagne/55">{givesBackManifesto.eyebrow}</p>
            <div className="mt-3 flex gap-5 font-serif text-2xl md:gap-8 md:text-3xl lg:mt-5 lg:flex-col lg:gap-1 lg:text-5xl xl:text-6xl">
              {givesBack.map((item) => (
                <p key={item.id} data-word={item.id} className="leading-[1.05]">
                  {item.title}
                </p>
              ))}
            </div>
          </div>

          <div className="relative mt-auto min-h-[48vh] w-full max-w-2xl lg:ml-auto lg:min-h-[52vh]">
            {givesBack.map((item) => (
              <article
                key={item.id}
                data-copy={item.id}
                className="absolute inset-x-0 bottom-0 flex flex-col justify-end"
              >
                {/* 1. Human truth */}
                <p className="font-serif text-[1.65rem] leading-[1.15] text-balance text-ivory md:text-3xl lg:text-[2.35rem]">
                  {item.truth}
                </p>
                {/* 2. Opera philosophy */}
                <div className="mt-4 max-w-xl space-y-1.5 text-[0.95rem] leading-relaxed text-champagne/90 md:text-base">
                  {item.philosophy.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                {/* 3. Product translation — evidence right after emotion */}
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-champagne/68 md:text-[0.95rem]">
                  {item.product}
                </p>
                {/* 4. Closing */}
                <p className="mt-5 font-serif text-lg text-ivory md:text-xl">{item.close}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Opening — belief before the three pillars */}
        <div
          data-intro
          className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center gap-5 px-[var(--section-pad-x)] text-center"
        >
          <p className="eyebrow text-champagne/70">{givesBackManifesto.eyebrow}</p>
          <div className="max-w-3xl space-y-3">
            {givesBackManifesto.lines.map((line) => (
              <p key={line} className="font-serif display-lg text-balance text-ivory">
                {line}
              </p>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-5 font-serif text-xl text-ivory/30 md:text-2xl">
            {givesBack.map((item, i) => (
              <span key={item.id} className="flex items-center gap-5">
                <span className={i === 0 ? "text-ivory" : undefined}>{item.title}</span>
                {i < givesBack.length - 1 ? <span aria-hidden>·</span> : null}
              </span>
            ))}
          </div>
        </div>

        {/* Closing — tagline sealed by the three promises */}
        <div
          data-closing
          className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center gap-5 px-[var(--section-pad-x)] text-center"
        >
          <p className="eyebrow text-champagne/55">{givesBackManifesto.closingLead}</p>
          <p className="font-serif display-xl text-balance text-ivory">{brand.tagline}.</p>
        </div>
      </div>
    </section>
  );
}

/**
 * Reduced-motion / no-scroll fallback — the same philosophy, read plainly.
 */
function ManifestoStatic() {
  return (
    <section
      id="gives-back"
      aria-label="Why Opera exists — the philosophy"
      className="bg-emerald text-ivory"
    >
      <div className="px-[var(--section-pad-x)] py-[var(--section-pad-y)]">
        <p className="eyebrow text-champagne/70">{givesBackManifesto.eyebrow}</p>
        <div className="mt-6 max-w-3xl space-y-3">
          {givesBackManifesto.lines.map((line) => (
            <h2 key={line} className="font-serif display-lg text-balance">
              {line}
            </h2>
          ))}
        </div>

        <div className="mt-16 space-y-24">
          {givesBack.map((item) => (
            <article key={item.id} className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-16">
              <div className="media-frame relative aspect-[4/3]">
                <Image
                  src={visualMap[item.id].src}
                  alt={visualMap[item.id].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="eyebrow text-champagne/55">{givesBackManifesto.eyebrow}</p>
                <p className="mt-3 font-serif text-5xl">{item.title}</p>
                <p className="mt-5 font-serif text-2xl text-balance md:text-3xl">{item.truth}</p>
                <div className="mt-5 space-y-2 leading-relaxed text-champagne/90">
                  {item.philosophy.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                <p className="mt-5 leading-relaxed text-champagne/70">{item.product}</p>
                <p className="mt-7 font-serif text-xl text-ivory">{item.close}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-24 text-center font-serif display-lg text-balance">
          {givesBackManifesto.closingLead} {brand.tagline}.
        </p>
      </div>
    </section>
  );
}
