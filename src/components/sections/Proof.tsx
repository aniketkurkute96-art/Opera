import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { StoryBlock } from "@/components/media/StoryBlock";
import { proofCategories, proofIntro } from "@/lib/content";

export function Proof() {
  return (
    <Section id="proof" tone="champagne" ariaLabel="Proof and specifications">
      <Reveal>
        <StoryBlock
          eyebrow={proofIntro.eyebrow}
          title={proofIntro.title}
          body={proofIntro.body}
        />
      </Reveal>

      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {proofCategories.map((category, index) => (
          <Reveal key={category.title} delay={(index % 3) as 0 | 1 | 2}>
            <article className="border-t border-stone-light pt-8">
              <h3 className="font-serif text-2xl text-ink">{category.title}</h3>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted">
                {category.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 block h-px w-3 shrink-0 bg-gold/70" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
