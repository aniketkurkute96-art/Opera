import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { StoryBlock } from "@/components/media/StoryBlock";
import { amenities } from "@/lib/content";
import { images } from "@/lib/images";
import { cn } from "@/lib/cn";

/** The three moments worth a full frame. The rest are named once, quietly. */
const featured = [0, 1, 4] as const;

export function Amenities() {
  return (
    <Section id="amenities" tone="forest" ariaLabel="Amenities">
      <div className="grain opacity-[0.04]" />
      <Reveal>
        <StoryBlock
          light
          eyebrow="Amenities"
          title="Spaces that serve the day"
          body="Not a checklist. A collection of rooms and landscapes that restore rhythm—quietly, repeatedly."
        />
      </Reveal>

      <div className="mt-20 flex flex-col gap-20 lg:gap-28">
        {featured.map((index, order) => {
          const item = amenities[index];
          const image = images.amenities[index];
          const reversed = order % 2 === 1;
          return (
            <Reveal key={item.title}>
              <article
                className={cn(
                  "grid items-end gap-8 lg:grid-cols-12",
                )}
              >
                <figure
                  className={cn(
                    "media-frame relative aspect-[16/10] lg:col-span-8",
                    reversed && "lg:col-start-5 lg:order-2",
                  )}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                  />
                </figure>
                <div
                  className={cn(
                    "lg:col-span-4 lg:pb-2",
                    reversed && "lg:order-1 lg:text-right",
                  )}
                >
                  <p className="eyebrow text-champagne/55">0{order + 1}</p>
                  <h3 className="mt-4 font-serif text-4xl text-ivory md:text-5xl">{item.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-champagne/70">
                    {item.caption}
                  </p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-20 border-t border-champagne/15 pt-8">
        <p className="max-w-xl text-sm leading-relaxed text-champagne/55">
          Private dining. Landscape courts. A quiet work atelier. Some rooms are best discovered in
          person.
        </p>
      </Reveal>
    </Section>
  );
}
