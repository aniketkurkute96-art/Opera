"use client";

import Image from "next/image";
import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { lifeMoments } from "@/lib/content";
import { images } from "@/lib/images";
import { cn } from "@/lib/cn";

export function LifeAtOpera() {
  const [active, setActive] = useState<(typeof lifeMoments)[number]["id"]>("morning");
  const moment = lifeMoments.find((m) => m.id === active) ?? lifeMoments[0];

  return (
    <Section id="life" ariaLabel="Life at Opera" className="!px-0 !py-0">
      <div className="relative min-h-svh">
        <div className="absolute inset-0">
          {lifeMoments.map((item) => {
            const visual = images.life[item.id];
            return (
              <Image
                key={item.id}
                src={visual.src}
                alt={visual.alt}
                fill
                sizes="100vw"
                className={cn(
                  "object-cover transition-opacity duration-[1800ms] ease-[var(--ease-in-out-soft)]",
                  item.id === active ? "opacity-100" : "opacity-0",
                )}
              />
            );
          })}
          <div className="absolute inset-0 bg-charcoal/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/45 to-transparent" />
        </div>

        <div className="relative z-10 flex min-h-svh flex-col justify-between px-[var(--section-pad-x)] py-24">
          <Reveal>
            <p className="eyebrow text-champagne/70">Life at Opera</p>
            <h2 className="mt-6 max-w-xl font-serif display-lg text-ivory text-balance">
              A day, beautifully paced
            </h2>
          </Reveal>

          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
            <Reveal delay={1}>
              <div
                role="tablist"
                aria-label="Times of day"
                className="flex flex-wrap gap-2 lg:flex-col lg:items-start"
              >
                {lifeMoments.map((item) => {
                  const selected = item.id === active;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActive(item.id)}
                      className={cn(
                        "px-1 py-2 font-serif text-3xl md:text-4xl transition-colors duration-700",
                        selected ? "text-ivory" : "text-champagne/35 hover:text-champagne/60",
                      )}
                    >
                      {item.title}
                    </button>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={2}>
              <article role="tabpanel" className="max-w-md border-l border-gold/60 pl-8">
                <p className="eyebrow text-gold-soft">{moment.title}</p>
                <p className="mt-5 text-lg leading-relaxed text-champagne/85">{moment.body}</p>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
