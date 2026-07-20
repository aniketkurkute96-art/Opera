"use client";

import { track } from "@/lib/analytics";
import { useEffect } from "react";

export function AnalyticsBeacon() {
  useEffect(() => {
    track({ name: "page_view", path: window.location.pathname });

    const id = process.env.NEXT_PUBLIC_GA_ID;
    if (!id || typeof window.gtag === "function") return;

    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args as unknown as Record<string, unknown>);
    };
    window.gtag("js", new Date());
    window.gtag("config", id, { anonymize_ip: true });
  }, []);

  return null;
}
