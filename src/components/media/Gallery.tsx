"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";

type GalleryItem = {
  src: string;
  alt: string;
  label: string;
};

type GalleryProps = {
  items: GalleryItem[];
  className?: string;
};

export function Gallery({ items, className }: GalleryProps) {
  const [active, setActive] = useState(0);

  if (!items.length) return null;

  return (
    <div className={cn("grid gap-8 lg:grid-cols-[1fr_280px] lg:gap-12", className)}>
      <div className="media-frame relative aspect-[16/11] w-full">
        {items.map((item, index) => (
          <Image
            key={item.src}
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 70vw"
            priority={index === 0}
            className={cn(
              "object-cover transition-opacity duration-[900ms] ease-[var(--ease-in-out-soft)]",
              index === active ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
      </div>
      <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActive(index)}
            aria-pressed={active === index}
            className={cn(
              "shrink-0 text-left border px-4 py-4 transition-colors duration-500",
              active === index
                ? "border-gold bg-champagne/30"
                : "border-stone-light/80 hover:border-stone",
            )}
          >
            <span className="eyebrow">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
