import Image from "next/image";
import { cn } from "@/lib/cn";

export type GridImage = {
  src: string;
  alt: string;
  caption?: string;
};

type ImageGridProps = {
  images: GridImage[];
  className?: string;
};

export function ImageGrid({ images, className }: ImageGridProps) {
  return (
    <div className={cn("grid gap-4 md:gap-6 md:grid-cols-12", className)}>
      {images.map((image, index) => {
        const wide = index % 3 === 0;
        return (
          <figure
            key={image.src + index}
            className={cn(
              "media-frame group",
              wide ? "md:col-span-7 aspect-[16/11]" : "md:col-span-5 aspect-[4/5]",
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={wide ? "(max-width: 768px) 100vw, 58vw" : "(max-width: 768px) 100vw, 42vw"}
              className="object-cover"
            />
            {image.caption ? (
              <figcaption className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-charcoal/70 to-transparent">
                <span className="eyebrow text-champagne/90">{image.caption}</span>
              </figcaption>
            ) : null}
          </figure>
        );
      })}
    </div>
  );
}
