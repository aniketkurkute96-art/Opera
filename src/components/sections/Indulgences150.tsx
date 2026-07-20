"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { indulgenceChapters, indulgencesIntro } from "@/lib/content";
import { images } from "@/lib/images";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const visualMap = Object.fromEntries(
  images.indulgences.map((img) => [img.id, img]),
) as Record<(typeof indulgenceChapters)[number]["id"], (typeof images.indulgences)[number]>;

/** Soft atmosphere tints — crossfade, never abrupt. */
const atmospheres: Record<(typeof indulgenceChapters)[number]["id"], string> = {
  "begin-well":
    "bg-gradient-to-br from-amber-950/50 via-charcoal/20 to-emerald/30",
  "reflect":
    "bg-gradient-to-br from-indigo-950/35 via-charcoal/25 to-amber-950/30",
  "come-together":
    "bg-gradient-to-r from-charcoal/60 via-amber-950/20 to-transparent",
  "grow-together":
    "bg-gradient-to-br from-emerald/40 via-charcoal/25 to-transparent",
  "find-pace":
    "bg-gradient-to-t from-charcoal/50 via-stone-900/15 to-transparent",
  "work-beautifully":
    "bg-gradient-to-r from-charcoal/55 via-slate-900/20 to-transparent",
  unwind: "bg-gradient-to-t from-indigo-950/40 via-charcoal/30 to-transparent",
  "give-back":
    "bg-gradient-to-br from-emerald/50 via-charcoal/40 to-amber-950/20",
};

const SEGMENT = 2.35;
const INTRO_END = 1.6;

export function Indulgences150() {
  const reduced = useReducedMotion();
  return reduced ? <IndulgencesStatic /> : <IndulgencesCinematic />;
}

function IndulgencesCinematic() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const q = gsap.utils.selector(section);
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const intro = q("[data-intro]");
      const ids = indulgenceChapters.map((c) => c.id);

      const bg = Object.fromEntries(ids.map((id) => [id, q(`[data-bg='${id}']`)]));
      const copy = Object.fromEntries(ids.map((id) => [id, q(`[data-copy='${id}']`)]));
      const atmosphere = Object.fromEntries(
        ids.map((id) => [id, q(`[data-atmosphere='${id}']`)]),
      );
      const progress = indulgenceChapters.map((c) => q(`[data-progress-num='${c.numeral}']`));

      gsap.set(intro, { opacity: 1 });
      gsap.set(ids.flatMap((id) => [bg[id], atmosphere[id]]), { opacity: 0 });
      gsap.set(copy[ids[0]], { opacity: 0 });
      ids.slice(1).forEach((id) => gsap.set(copy[id], { opacity: 0 }));

      indulgenceChapters.forEach((ch, i) => {
        gsap.set(progress[i], { opacity: i === 0 ? 0.2 : 0.12 });
      });

      // Ambient drift on inner layer only — scroll timeline never touches scale (prevents shake).
      const drift = q("[data-bg-drift]");
      gsap.set(drift, { scale: 1.04 });
      const breathe = gsap.to(drift, {
        scale: 1.07,
        duration: 24,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.4,
        },
      });

      tl.to(intro, { opacity: 0, duration: 1.3 }, INTRO_END - 0.4);

      ids.forEach((id, i) => {
        const start = INTRO_END + i * SEGMENT;
        const prev = ids[i - 1];

        tl.to(bg[id], { opacity: 1, duration: 2.1 }, start)
          .to(atmosphere[id], { opacity: 1, duration: 2.1 }, start)
          .to(copy[id], { opacity: 1, duration: 1.7 }, start + 0.45);

        if (prev) {
          tl.to(copy[prev], { opacity: 0, duration: 1.2 }, start)
            .to(bg[prev], { opacity: 0, duration: 2.1 }, start)
            .to(atmosphere[prev], { opacity: 0, duration: 2.1 }, start);
        }

        indulgenceChapters.forEach((_, j) => {
          const opacity = j < i ? 0.32 : j === i ? 1 : j === i + 1 ? 0.2 : 0.12;
          tl.to(progress[j], { opacity, duration: 1.1 }, start + 0.15);
        });
      });

      tl.to({}, { duration: 2.2 });

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
      id="indulgences"
      ref={sectionRef}
      aria-label="150 Indulgences — curated for every rhythm of life"
      className="relative bg-charcoal text-ivory"
      style={{ height: `${Math.round((INTRO_END + indulgenceChapters.length * SEGMENT + 2.5) * 46)}vh` }}
    >
      <div className="sticky top-0 h-svh overflow-hidden">
        {/* Full-bleed cinematic renders — drift isolated on inner layer */}
        <div data-bg-wrap className="absolute inset-0 overflow-hidden">
          <div
            data-bg-drift
            className="absolute inset-0 origin-center will-change-transform"
          >
            {indulgenceChapters.map((chapter, i) => {
              const visual = visualMap[chapter.id];
              return (
                <Image
                  key={chapter.id}
                  data-bg={chapter.id}
                  src={visual.src}
                  alt={visual.alt}
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="object-cover object-center"
                />
              );
            })}
          </div>
        </div>

        {indulgenceChapters.map((chapter) => (
          <div
            key={chapter.id}
            data-atmosphere={chapter.id}
            className={cn(
              "pointer-events-none absolute inset-0 opacity-0",
              atmospheres[chapter.id],
            )}
            aria-hidden
          />
        ))}

        {/* Soft left scrim — fades into the image, no hard vertical cut */}
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(23,22,20,0.94)_0%,rgba(23,22,20,0.88)_22%,rgba(23,22,20,0.55)_38%,rgba(23,22,20,0.18)_52%,transparent_68%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/75 via-transparent to-charcoal/35"
          aria-hidden
        />
        <div className="grain pointer-events-none opacity-[0.04]" aria-hidden />

        {/* Intro — belief before chapters */}
        <div
          data-intro
          className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center px-[var(--section-pad-x)] text-center"
        >
          <p className="eyebrow text-champagne/65">Gives Back</p>
          <h2 className="mt-5 font-serif display-xl text-balance text-ivory">
            {indulgencesIntro.title}
          </h2>
          <p className="mt-4 font-serif text-xl text-champagne/85 md:text-2xl">
            {indulgencesIntro.subtitle}
          </p>
          <div className="mt-8 max-w-lg space-y-3 text-sm leading-relaxed text-champagne/70 md:text-base">
            {indulgencesIntro.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        {/* Editorial stage — copy left, chapter numerals right */}
        <div className="relative z-20 grid h-svh grid-cols-[minmax(0,1fr)_auto] items-end gap-5 px-[var(--section-pad-x)] pb-10 pt-[calc(var(--nav-height)+1.25rem)] md:gap-8 md:pb-14 lg:gap-12 lg:pb-[var(--section-pad-y)] lg:pt-[var(--section-pad-y)]">
          <div className="relative min-h-[56vh] w-full max-w-xl lg:max-w-[34%] xl:max-w-[32%]">
            {indulgenceChapters.map((chapter) => (
              <article
                key={chapter.id}
                data-copy={chapter.id}
                className="absolute inset-x-0 bottom-0 opacity-0"
              >
                <p className="eyebrow text-champagne/55">
                  Chapter {chapter.numeral} — {chapter.title}
                </p>
                <h3 className="mt-3 font-serif text-[1.6rem] leading-[1.12] text-ivory md:text-[1.85rem] lg:text-[2rem]">
                  {chapter.tagline}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-champagne/82 md:text-[0.95rem]">
                  {chapter.narrative}
                </p>
                <div className="mt-5 border-t border-champagne/15 pt-4 md:mt-6 md:pt-5">
                  <p className="eyebrow text-champagne/45">
                    {indulgencesIntro.experiencesLabel}
                  </p>
                  <ul className="mt-2.5 space-y-1.5 font-serif text-[0.95rem] text-champagne/80 md:text-base">
                    {chapter.experiences.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {/* Chapter progress — right of copy, full breathing room for text */}
          <nav
            aria-label="Chapter progress"
            className="mb-1 flex shrink-0 flex-col items-end gap-2.5 pb-1 font-serif text-sm tracking-[0.22em] text-ivory/20 md:gap-3 md:text-base lg:mr-[2%] lg:gap-3.5"
          >
            {indulgenceChapters.map((chapter) => (
              <span
                key={chapter.numeral}
                data-progress-num={chapter.numeral}
                className="block min-h-[1.1em] leading-none"
              >
                {chapter.numeral}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}

function IndulgencesStatic() {
  return (
    <section
      id="indulgences"
      aria-label="150 Indulgences — curated for every rhythm of life"
      className="bg-charcoal text-ivory"
    >
      <div className="px-[var(--section-pad-x)] py-[var(--section-pad-y)]">
        <p className="eyebrow text-champagne/65">Gives Back</p>
        <h2 className="mt-5 font-serif display-xl text-balance">{indulgencesIntro.title}</h2>
        <p className="mt-4 font-serif text-xl text-champagne/85">{indulgencesIntro.subtitle}</p>
        <div className="mt-6 max-w-lg space-y-3 text-champagne/75">
          {indulgencesIntro.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className="mt-20 space-y-24">
          {indulgenceChapters.map((chapter) => {
            const visual = visualMap[chapter.id];
            return (
              <article
                key={chapter.id}
                className="grid gap-8 border-t border-champagne/15 pt-16 lg:grid-cols-2 lg:items-center"
              >
                <div>
                  <p className="eyebrow text-champagne/55">
                    Chapter {chapter.numeral} — {chapter.title}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl text-balance md:text-4xl">
                    {chapter.tagline}
                  </h3>
                  <p className="mt-4 leading-relaxed text-champagne/82">{chapter.narrative}</p>
                  <p className="mt-6 eyebrow text-champagne/45">
                    {indulgencesIntro.experiencesLabel}
                  </p>
                  <ul className="mt-3 space-y-1 font-serif text-lg text-champagne/75">
                    {chapter.experiences.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="media-frame relative aspect-[4/5] lg:aspect-[3/4]">
                  <Image
                    src={visual.src}
                    alt={visual.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
