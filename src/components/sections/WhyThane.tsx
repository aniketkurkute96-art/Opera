import Image from "next/image";

import { Reveal } from "@/components/ui/Reveal";

import { thaneIntro, thanePillars } from "@/lib/content";

import { images } from "@/lib/images";



export function WhyThane() {

  return (

    <section id="thane" aria-label="Location — Thane" className="bg-ivory">

      <div className="relative left-1/2 w-screen -translate-x-1/2">

        <div className="relative h-[min(92vh,56rem)] w-full">

          <Image

            src={images.thane.src}

            alt={images.thane.alt}

            fill

            sizes="100vw"

            className="object-cover object-center"

          />

          <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />



          <div className="absolute inset-x-0 bottom-0 px-[var(--section-pad-x)] pb-14 md:pb-20">

            <Reveal>

              <p className="eyebrow text-champagne/70">{thaneIntro.eyebrow}</p>

              <h2 className="mt-5 font-serif display-lg text-ivory text-balance max-w-2xl">

                {thaneIntro.title}

              </h2>

              <p className="mt-6 max-w-lg text-lg leading-relaxed text-champagne/85">

                {thaneIntro.body}

              </p>

            </Reveal>

          </div>

        </div>

      </div>



      <div className="section-shell">

        <div className="grid gap-12 md:grid-cols-3 md:gap-10">

          {thanePillars.map((pillar, index) => (

            <Reveal key={pillar.title} delay={(index % 3) as 0 | 1 | 2}>

              <article className="border-t border-stone-light pt-8">

                <p className="eyebrow">0{index + 1}</p>

                <h3 className="mt-4 font-serif text-3xl text-ink">{pillar.title}</h3>

                <p className="mt-4 lede text-base">{pillar.body}</p>

              </article>

            </Reveal>

          ))}

        </div>

      </div>

    </section>

  );

}

