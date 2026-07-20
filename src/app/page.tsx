import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { WhyOperaExists } from "@/components/sections/WhyOperaExists";
import { LandmarkGivesBack } from "@/components/sections/LandmarkGivesBack";
import { WhyThane } from "@/components/sections/WhyThane";
import { Interlude } from "@/components/ui/Interlude";

const LivingCrown = dynamic(() =>
  import("@/components/sections/LivingCrown").then((m) => m.LivingCrown),
);
const Architecture = dynamic(() =>
  import("@/components/sections/Architecture").then((m) => m.Architecture),
);
const Arrival = dynamic(() =>
  import("@/components/sections/Arrival").then((m) => m.Arrival),
);
const Residences = dynamic(() =>
  import("@/components/sections/Residences").then((m) => m.Residences),
);
const Indulgences150 = dynamic(() =>
  import("@/components/sections/Indulgences150").then((m) => m.Indulgences150),
);
const NagrikLegacy = dynamic(() =>
  import("@/components/sections/NagrikLegacy").then((m) => m.NagrikLegacy),
);
const Closing = dynamic(() =>
  import("@/components/sections/Closing").then((m) => m.Closing),
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyOperaExists />
      <Interlude eyebrow="The Idea" lines={["A different rhythm of living."]} tone="ivory" />
      <LandmarkGivesBack />
      <WhyThane />
      <Interlude
        eyebrow="The Landmark"
        lines={["Then, the skyline changes."]}
        tone="charcoal"
      />
      <LivingCrown />
      <Architecture />
      <Arrival />
      <Residences />
      <Indulgences150 />
      <NagrikLegacy />
      <Interlude
        eyebrow="Legacy"
        lines={["Some addresses are chosen.", "Few are kept for generations."]}
        tone="emerald"
      />
      <Closing />
    </>
  );
}
