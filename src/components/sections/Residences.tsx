"use client";

import Image from "next/image";
import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { StoryBlock } from "@/components/media/StoryBlock";
import { residences, residencesIntro } from "@/lib/content";
import { images } from "@/lib/images";
import { cn } from "@/lib/cn";

export function Residences() {
  const [activeId, setActiveId] = useState<(typeof residences)[number]["id"]>("4bhk");
  const active = residences.find((r) => r.id === activeId) ?? residences[1];
  const visual = images.residences[active.id];

  return (
    <Section id="residences" ariaLabel="The Home">
      <Reveal>
        <StoryBlock
          eyebrow={residencesIntro.eyebrow}
          title={residencesIntro.title}
          body={residencesIntro.body}
        />
      </Reveal>

      <div className="mt-12 flex flex-wrap gap-3" role="tablist" aria-label="Residence types">
        {residences.map((residence) => {
          const selected = residence.id === activeId;
          return (
            <button
              key={residence.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActiveId(residence.id)}
              className={cn(
                "min-w-[7rem] border px-5 py-3 text-[0.68rem] uppercase tracking-[0.22em] transition-colors duration-500",
                selected
                  ? "border-emerald bg-emerald text-ivory"
                  : "border-stone-light text-muted hover:border-stone hover:text-ink",
              )}
            >
              {residence.label}
            </button>
          );
        })}
      </div>

      <Reveal delay={1} className="mt-10">
        <div role="tabpanel" className="grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-stretch">
          <div className="media-frame relative min-h-[22rem] aspect-[16/11] lg:aspect-auto">
            <Image
              key={visual.src}
              src={visual.src}
              alt={visual.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center border border-stone-light/80 bg-surface px-8 py-10 md:px-10">
            <p className="eyebrow">{active.label}</p>
            <h3 className="mt-4 font-serif text-4xl text-ink md:text-5xl">{active.name}</h3>
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-[0.62rem] uppercase tracking-[0.22em] text-gold">Feel</p>
                <p className="mt-2 text-base leading-relaxed text-ink">{active.feel}</p>
              </div>
              <div>
                <p className="text-[0.62rem] uppercase tracking-[0.22em] text-gold">What you get</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{active.product}</p>
              </div>
              <div>
                <p className="text-[0.62rem] uppercase tracking-[0.22em] text-gold">
                  Why Opera
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{active.difference}</p>
              </div>
            </div>
            <p className="mt-10 border-t border-stone-light pt-8 text-xs uppercase tracking-[0.18em] text-muted">
              {active.proof}
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
