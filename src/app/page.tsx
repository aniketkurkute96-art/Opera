import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";

const Residences = dynamic(() =>
  import("@/components/sections/Residences").then((m) => m.Residences),
);
const LifeAtOpera = dynamic(() =>
  import("@/components/sections/LifeAtOpera").then((m) => m.LifeAtOpera),
);
const Architecture = dynamic(() =>
  import("@/components/sections/Architecture").then((m) => m.Architecture),
);
const Arrival = dynamic(() =>
  import("@/components/sections/Arrival").then((m) => m.Arrival),
);
const Indulgences150 = dynamic(() =>
  import("@/components/sections/Indulgences150").then((m) => m.Indulgences150),
);
const LivingCrown = dynamic(() =>
  import("@/components/sections/LivingCrown").then((m) => m.LivingCrown),
);
const LandmarkGivesBack = dynamic(() =>
  import("@/components/sections/LandmarkGivesBack").then((m) => m.LandmarkGivesBack),
);
const Proof = dynamic(() => import("@/components/sections/Proof").then((m) => m.Proof));
const WhyThane = dynamic(() =>
  import("@/components/sections/WhyThane").then((m) => m.WhyThane),
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
      <Residences />
      <LifeAtOpera />
      <Architecture />
      <Arrival />
      <Indulgences150 />
      <LivingCrown />
      <LandmarkGivesBack />
      <Proof />
      <WhyThane />
      <NagrikLegacy />
      <Closing />
    </>
  );
}
