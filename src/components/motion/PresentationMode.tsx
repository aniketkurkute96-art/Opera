"use client";

import { track } from "@/lib/analytics";
import { useEffect, useState } from "react";

/** Press P for cinematic presentation. Esc exits. */
export function PresentationMode() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      if (e.key === "p" || e.key === "P") setActive((v) => !v);
      if (e.key === "Escape") setActive(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("presentation-mode", active);
    track({ name: "presentation_mode", active });
  }, [active]);

  if (!active) return null;

  return (
    <div
      className="fixed bottom-6 left-1/2 z-[120] -translate-x-1/2 border border-champagne/20 bg-emerald/90 px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-champagne/85 backdrop-blur-sm pointer-events-none"
      role="status"
      aria-live="polite"
    >
      Presentation mode · Esc to exit
    </div>
  );
}
