import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Quote } from "@/components/ui/Quote";
import { images } from "@/lib/images";

export function WhyOperaExists() {
  return (
    <Section id="purpose" ariaLabel="Why Opera exists" className="atmosphere">
      <div className="grain" />
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow">Why Opera exists</p>
          <div className="divider-gold mt-6" />
          <Quote className="mt-8">
            Cities take. A landmark should give something back.
          </Quote>
          <p className="lede mt-10">
            Opera was conceived for those who have already arrived—and now seek a home that returns
            time, restores energy, and holds value with quiet certainty.
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div className="media-frame relative aspect-[4/5] w-full max-w-xl lg:ml-auto">
            <Image
              src={images.purpose.src}
              alt={images.purpose.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
