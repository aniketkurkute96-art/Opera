/**
 * Curated luxury amenity & lifestyle imagery.
 * All Unsplash IDs verified (HTTP 200) — invalid IDs cause Next.js upstream 404s.
 * Replace with Opera-specific renders and photography when available.
 */
import operaHero from "@/Img/opera-nagrik-hero.png";

const u = (id: string, w = 1800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

export const images = {
  hero: {
    src: operaHero,
    alt: "Opera by Nagrik — landmark residences with signature crown, Majiwada Thane",
  },
  purpose: {
    src: u("1600210492486-724fe5c67fb0"),
    alt: "Warm luxury living — natural light and refined comfort",
  },
  time: {
    src: u("1414235077428-338989a2e8c0"),
    alt: "Private dining — evenings returned to hospitality and conversation",
  },
  energy: {
    src: u("1571902943202-507ec2618e8f"),
    alt: "World-class wellness pool — restoration after the day",
  },
  value: {
    src: operaHero,
    alt: "Opera landmark silhouette — an address built to endure",
  },
  thane: {
    src: u("1514565131-fce0801e5785", 2000),
    alt: "Thane skyline at night — connected, compounding, alive",
  },
  crown: {
    src: operaHero,
    alt: "Opera Living Crown — signature skyline identity across Thane",
  },
  architecture: [
    {
      src: u("1600210492486-724fe5c67fb0", 1600),
      alt: "Living room positioned for morning light without sacrificing privacy",
      caption: "Light",
    },
    {
      src: u("1600566753190-17f0baa2a6c3", 1400),
      alt: "Stone, bronze, and timber — materials felt at close range",
      caption: "Material",
    },
    {
      src: u("1600607687644-c7171b42498f", 1600),
      alt: "Facade presence — architecture experienced on arrival",
      caption: "Presence",
    },
    {
      src: u("1600585154340-be6161a56a0c", 1400),
      alt: "Landscape courts and pool — green woven into daily life",
      caption: "Landscape",
    },
  ],
  arrival: [
    {
      src: u("1613977257363-707ba9348227", 1600),
      alt: "Grand gated arrival — first impression of Opera",
      label: "Gate",
    },
    {
      src: u("1600596542815-ffad4c1539a9", 1600),
      alt: "Tree-lined approach — unhurried procession home",
      label: "Approach",
    },
    {
      src: u("1600607687920-4e2a09cf159d", 1600),
      alt: "Double-height lobby — volume, warmth, and welcome",
      label: "Lobby",
    },
    {
      src: u("1600585154526-990dced4db0d", 1600),
      alt: "Private threshold — lift lobby to residence entrance",
      label: "Private Lift",
    },
  ],
  residences: {
    "3bhk": {
      src: u("1600210491892-03d54c0aaf87"),
      alt: "Three-bedroom residence — warm light and everyday ease",
    },
    "4bhk": {
      src: u("1600585154526-990dced4db0d"),
      alt: "Four-bedroom estate — living room designed for hosting",
    },
    "6bhk": {
      src: u("1600607687939-ce8a6c25118c"),
      alt: "Signature six-bedroom — statement scale and presence",
    },
  },
  indulgences: [
    {
      id: "begin-well",
      src: u("1506126613408-eca07ce68773"),
      alt: "Sunrise wellness — yoga and restoration before the city wakes",
    },
    {
      id: "reflect",
      src: "https://plus.unsplash.com/premium_photo-1697730326674-74b6c70509f4?auto=format&fit=crop&w=1800&q=85",
      alt: "Jain Derasar — sacred space for pause and tradition",
    },
    {
      id: "come-together",
      src: u("1414235077428-338989a2e8c0"),
      alt: "Private dining — hospitality, celebration, and conversation",
    },
    {
      id: "grow-together",
      src: u("1600585154340-be6161a56a0c", 1800),
      alt: "Family gardens and courts — room for every generation",
    },
    {
      id: "find-pace",
      src: u("1534438327276-14e5300c3a48"),
      alt: "World-class fitness centre — movement woven into the day",
    },
    {
      id: "work-beautifully",
      src: u("1497366216548-37526070297c"),
      alt: "Business lounge — focus in inspiring surroundings",
    },
    {
      id: "unwind",
      src: u("1576013551627-0cc20b96c2a7"),
      alt: "Infinity pool at golden hour — unwind above the city",
    },
    {
      id: "give-back",
      src: operaHero,
      alt: "The Living Crown — architecture that gives back",
    },
  ],
  life: {
    morning: {
      src: u("1600210492486-724fe5c67fb0"),
      alt: "Morning light — the day begins in calm, refined surroundings",
    },
    afternoon: {
      src: u("1497366216548-37526070297c"),
      alt: "Afternoon focus — quiet work in a home that protects concentration",
    },
    evening: {
      src: u("1600210491369-e753d80a41f3"),
      alt: "Rooftop lounge at dusk — every evening above the city",
    },
    weekend: {
      src: u("1414235077428-338989a2e8c0"),
      alt: "Weekend hospitality — dining and celebration at home",
    },
    night: {
      src: u("1616594039964-ae9021a400a0"),
      alt: "Master suite at night — sanctuary where achievement rests",
    },
  },
  legacy: {
    src: u("1487958449943-2429e8be8625", 2000),
    alt: "Enduring architectural craftsmanship — Nagrik legacy",
  },
  closing: {
    src: operaHero,
    alt: "Opera at twilight — experience your future address",
  },
  amenities: [
    {
      src: u("1571902943202-507ec2618e8f", 1400),
      alt: "Wellness pool — world-class restoration",
      caption: "Wellness",
    },
    {
      src: u("1600210491369-e753d80a41f3", 1400),
      alt: "Sky lounge — every evening above the city",
      caption: "Sky Lounge",
    },
    {
      src: u("1414235077428-338989a2e8c0", 1400),
      alt: "Private dining — host without leaving home",
      caption: "Private Dining",
    },
    {
      src: u("1600585154340-be6161a56a0c", 1400),
      alt: "Landscape courts — green, pool, and open air",
      caption: "Landscape Courts",
    },
    {
      src: u("1576013551627-0cc20b96c2a7", 1400),
      alt: "Infinity pool deck — water, light, and horizon",
      caption: "Pool Deck",
    },
    {
      src: u("1497366216548-37526070297c", 1400),
      alt: "Work atelier — clarity in a considered workspace",
      caption: "Work Atelier",
    },
  ],
} as const;
