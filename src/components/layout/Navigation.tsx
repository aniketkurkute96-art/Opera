"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { brand, navigation } from "@/lib/content";
import { cn } from "@/lib/cn";
import { useActiveSection } from "@/hooks/useActiveSection";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onHero = !scrolled && !open;

  return (
    <header
      className={cn(
        "site-nav fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color,box-shadow] duration-500",
        onHero
          ? "border-b border-transparent bg-transparent backdrop-blur-none"
          : "border-b border-stone-light/60 bg-ivory/92 backdrop-blur-md shadow-[0_8px_30px_rgba(10,47,36,0.06)]",
      )}
    >
      <div className="mx-auto flex h-[var(--nav-height)] items-center justify-between px-[var(--section-pad-x)]">
        <Link href="#top" className="group flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span
            className={cn(
              "font-serif text-xl tracking-tight transition-colors duration-500",
              onHero
                ? "text-ivory group-hover:text-champagne [text-shadow:0_1px_16px_rgba(0,0,0,0.55)]"
                : "text-ink group-hover:text-forest",
            )}
          >
            {brand.name}
          </span>
          <span
            className={cn(
              "mt-1 text-[0.58rem] uppercase tracking-[0.28em] transition-colors duration-500",
              onHero
                ? "text-champagne/80 [text-shadow:0_1px_12px_rgba(0,0,0,0.45)]"
                : "text-muted",
            )}
          >
            {brand.byline}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
          {navigation.map((item) => {
            const sectionId = item.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "nav-link transition-opacity duration-500",
                  onHero && "text-ivory/90 hover:text-ivory [text-shadow:0_1px_12px_rgba(0,0,0,0.45)]",
                  isActive && "opacity-100",
                  !isActive && scrolled && "opacity-55 hover:opacity-100",
                  !isActive && onHero && "opacity-70 hover:opacity-100",
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center xl:flex">
          <Link
            href="#closing"
            className={cn(
              "text-[0.65rem] uppercase tracking-[0.22em] transition-all duration-500",
              onHero
                ? "text-champagne/85 hover:text-ivory [text-shadow:0_1px_12px_rgba(0,0,0,0.45)]"
                : "text-muted hover:text-ink",
              activeSection === "closing" && "text-forest",
            )}
          >
            Enquire
          </Link>
        </div>

        <button
          type="button"
          className={cn(
            "xl:hidden flex h-11 w-11 items-center justify-center border transition-colors duration-500",
            onHero ? "border-ivory/30" : "border-stone-light",
          )}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-3 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-px w-full transition-transform duration-500",
                onHero ? "bg-ivory" : "bg-ink",
                open && "translate-y-[6px] rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[6px] h-px w-full transition-opacity duration-300",
                onHero ? "bg-ivory" : "bg-ink",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[12px] h-px w-full transition-transform duration-500",
                onHero ? "bg-ivory" : "bg-ink",
                open && "-translate-y-[6px] -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "xl:hidden overflow-hidden border-t border-stone-light/50 bg-ivory transition-[max-height,opacity] duration-500",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-[var(--section-pad-x)] py-6" aria-label="Mobile">
          {navigation.map((item) => {
            const sectionId = item.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "border-b border-stone-light/50 py-4 font-serif text-3xl transition-colors",
                  isActive ? "text-forest" : "text-ink",
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            );
          })}
          <div className="pt-6">
            <Link
              href="#closing"
              onClick={() => setOpen(false)}
              className="btn-primary inline-flex"
            >
              Private Enquiry
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
