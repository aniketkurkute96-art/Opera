import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { PresentationMode } from "@/components/motion/PresentationMode";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { OfflineRegister } from "@/components/OfflineRegister";
import { AnalyticsBeacon } from "@/components/AnalyticsBeacon";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const sans = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://opera.nagrik.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Opera by Nagrik | The Landmark That Gives Back",
    template: "%s | Opera by Nagrik",
  },
  description:
    "Ultra luxury residences in Majiwada, Thane. Opera by Nagrik — the landmark that gives back time, energy, and value. Only 150 families.",
  keywords: [
    "Opera by Nagrik",
    "ultra luxury residences Thane",
    "Majiwada luxury homes",
    "Nagrik",
  ],
  authors: [{ name: "Nagrik" }],
  openGraph: {
    title: "Opera by Nagrik | The Landmark That Gives Back",
    description:
      "An immersive introduction to Opera — ultra luxury residences in Majiwada, Thane.",
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Opera by Nagrik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Opera by Nagrik | The Landmark That Gives Back",
    description:
      "Ultra luxury residences in Majiwada, Thane. The landmark that gives back.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Opera by Nagrik",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a2f24",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <SmoothScrollProvider>
          <MotionProvider>
            <a
              href="#main"
              className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:m-0 focus:h-auto focus:w-auto focus:overflow-visible focus:whitespace-normal focus:bg-ivory focus:px-4 focus:py-3 focus:text-ink focus:[clip:auto]"
            >
              Skip to content
            </a>
            <Navigation />
            <main id="main" className="flex-1">
              {children}
            </main>
            <Footer />
            <PresentationMode />
            <OfflineRegister />
            <AnalyticsBeacon />
          </MotionProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
