import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { brand } from "@/lib/content";
import { images } from "@/lib/images";

export function Closing() {
  return (
    <Section id="closing" ariaLabel="Private enquiry" className="!px-0 !py-0">
      <div className="relative min-h-[90svh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={images.closing.src}
            alt={images.closing.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-emerald/40" />
        </div>

        <div className="relative z-10 w-full px-[var(--section-pad-x)] pb-20 pt-32">
          <Reveal>
            <p className="eyebrow text-champagne/70">An exclusive address</p>
            <h2 className="mt-6 max-w-3xl font-serif display-lg text-ivory text-balance">
              Only {brand.families} families.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-champagne/75">
              Opera is not open-ended. It is finite by design—reserved for those who recognise a
              landmark when they stand before one.
            </p>
          </Reveal>

          <Reveal delay={1} className="mt-14">
            <Button href="mailto:enquiries@operabynagrik.com" variant="light">
              Request a private viewing
            </Button>
            <p className="mt-8 text-xs uppercase tracking-[0.22em] text-champagne/50">
              By appointment · {brand.location}
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
