"use client";



import Image from "next/image";

import { useEffect, useRef } from "react";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { architectureIntro } from "@/lib/content";

import { images } from "@/lib/images";



gsap.registerPlugin(ScrollTrigger);



/**

 * Scroll-controlled horizontal sequence on large screens —

 * architecture experienced at human height, not from a helicopter.

 */

export function Architecture() {

  const sectionRef = useRef<HTMLElement>(null);

  const trackRef = useRef<HTMLDivElement>(null);



  useEffect(() => {

    const section = sectionRef.current;

    const track = trackRef.current;

    if (!section || !track) return;



    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {

      const distance = () => track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {

        x: () => -distance(),

        ease: "none",

        scrollTrigger: {

          trigger: section,

          start: "top top",

          end: () => `+=${distance()}`,

          scrub: true,

          pin: true,

          invalidateOnRefresh: true,

        },

      });

      return () => {

        tween.scrollTrigger?.kill();

        tween.kill();

      };

    });



    return () => mm.revert();

  }, []);



  return (

    <section

      id="architecture"

      ref={sectionRef}

      aria-label="Architecture"

      className="relative overflow-hidden bg-ivory text-ink"

    >

      <div

        ref={trackRef}

        className="flex flex-col gap-16 px-[var(--section-pad-x)] py-[var(--section-pad-y)] lg:h-svh lg:w-max lg:flex-row lg:items-center lg:gap-[6vw] lg:py-0 lg:pr-[10vw]"

      >

        <div className="flex max-w-md flex-col gap-6 lg:w-[32vw] lg:shrink-0">

          <p className="eyebrow">{architectureIntro.eyebrow}</p>

          <div className="divider-gold" />

          <h2 className="font-serif display-lg text-balance">{architectureIntro.title}</h2>

          <p className="lede">{architectureIntro.body}</p>

        </div>



        {images.architecture.map((image, index) => (

          <figure

            key={image.src}

            className={

              index % 2 === 0

                ? "lg:w-[46vw] lg:shrink-0"

                : "lg:w-[34vw] lg:shrink-0 lg:self-end lg:pb-[8vh]"

            }

          >

            <div

              className={

                "media-frame relative " + (index % 2 === 0 ? "aspect-[16/11]" : "aspect-[4/5]")

              }

            >

              <Image

                src={image.src}

                alt={image.alt}

                fill

                sizes="(max-width: 1024px) 100vw, 46vw"

                className="object-cover"

              />

            </div>

            <figcaption className="mt-5 flex items-baseline gap-4">

              <span className="eyebrow">0{index + 1}</span>

              <span className="font-serif text-2xl text-ink">{image.caption}</span>

            </figcaption>

          </figure>

        ))}

      </div>

    </section>

  );

}

