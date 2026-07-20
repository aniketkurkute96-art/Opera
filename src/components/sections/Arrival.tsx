import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { StoryBlock } from "@/components/media/StoryBlock";
import { Gallery } from "@/components/media/Gallery";
import { arrivalSteps } from "@/lib/content";
import { images } from "@/lib/images";

export function Arrival() {
  return (
    <Section id="arrival" tone="champagne" ariaLabel="Arrival experience">
      <Reveal>
        <StoryBlock
          eyebrow="Arrival"
          title="The procession home"
          body="From gate to concierge, every threshold is composed. Arrival is not logistics. It is the first chapter of living here."
        />
      </Reveal>

      <Reveal delay={1} className="mt-14">
        <Gallery items={[...images.arrival]} />
      </Reveal>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {arrivalSteps.map((step, index) => (
          <Reveal key={step.title} delay={(index % 3) as 0 | 1 | 2}>
            <article>
              <p className="eyebrow">0{index + 1}</p>
              <h3 className="mt-4 font-serif text-2xl text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
