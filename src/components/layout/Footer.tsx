import Link from "next/link";
import { brand, navigation } from "@/lib/content";

export function Footer() {
  return (
    <footer className="site-footer border-t border-stone-light/70 bg-ivory-warm">
      <div className="section-shell !py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-4xl text-ink">{brand.name}</p>
          <p className="mt-2 eyebrow">{brand.byline}</p>
          <p className="mt-8 lede text-base">{brand.tagline}</p>
          <p className="mt-4 text-sm text-muted">{brand.location}</p>
        </div>

        <div>
          <p className="eyebrow mb-6">Explore</p>
          <ul className="space-y-3">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-muted transition-colors hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-6">Private Office</p>
          <p className="text-sm leading-relaxed text-muted">
            Enquiries are received by appointment.
            <br />
            For residents who value discretion.
          </p>
          <Link
            href="#closing"
            className="mt-6 inline-block text-sm tracking-[0.18em] uppercase text-forest border-b border-gold pb-1"
          >
            Begin a conversation
          </Link>
        </div>
      </div>

      <div className="border-t border-stone-light/70 px-[var(--section-pad-x)] py-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-xs tracking-[0.16em] uppercase text-muted">
          © {new Date().getFullYear()} Nagrik. All rights reserved.
        </p>
        <p className="text-xs tracking-[0.16em] uppercase text-muted">
          Only {brand.families} families
        </p>
      </div>
    </footer>
  );
}
