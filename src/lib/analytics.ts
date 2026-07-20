type AnalyticsEvent =
  | { name: "page_view"; path: string }
  | { name: "section_view"; section: string }
  | { name: "cta_click"; label: string }
  | { name: "presentation_mode"; active: boolean };

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: AnalyticsEvent) {
  if (typeof window === "undefined") return;

  const payload = {
    event: event.name,
    ...event,
    timestamp: Date.now(),
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  if (typeof window.gtag === "function") {
    window.gtag("event", event.name, payload);
  }

  if (process.env.NODE_ENV === "development") {
    console.info("[analytics]", payload);
  }
}
