import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Timeline } from "@/components/media/Timeline";
import { legacy } from "@/lib/content";
import { images } from "@/lib/images";

export function NagrikLegacy() {
  return (
    <Section id="legacy" tone="dark" ariaLabel="Nagrik legacy">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <div className="media-frame relative aspect-[4/5] w-full max-w-md">
            <Image
              src={images.legacy.src}
              alt={images.legacy.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow text-champagne/65">Nagrik Legacy</p>
            <h2 className="mt-6 font-serif display-lg text-ivory text-balance">
              Built for those who think in decades
            </h2>
            <p className="mt-6 lede text-champagne/70">
              Trust is earned in delivery. Legacy is earned in what remains beautiful after the
              applause fades.
            </p>
          </Reveal>
          <Reveal delay={1} className="mt-14">
            <Timeline items={[...legacy]} light />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
