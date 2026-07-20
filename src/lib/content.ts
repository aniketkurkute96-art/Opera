export const brand = {
  name: "Opera",
  byline: "by Nagrik",
  location: "Majiwada, Thane",
  tagline: "The Landmark That Gives Back",
  families: 150,
} as const;

export const navigation = [
  { label: "Purpose", href: "#purpose" },
  { label: "Gives Back", href: "#gives-back" },
  { label: "Thane", href: "#thane" },
  { label: "The Crown", href: "#living-crown" },
  { label: "Residences", href: "#residences" },
  { label: "Indulgences", href: "#indulgences" },
  { label: "Legacy", href: "#legacy" },
] as const;

/**
 * Brand philosophy → product.
 * Each pillar: Human Truth → Opera Philosophy → Product Translation → Closing.
 * Emotion first. Evidence immediately after.
 */
export const givesBackManifesto = {
  eyebrow: "Gives Back",
  lines: [
    "Every home gives you a place to live.",
    "Opera was designed to give something back.",
  ],
  closingLead: "This is what we mean by",
} as const;

export const givesBack = [
  {
    id: "time",
    title: "Time",
    truth: "Success shouldn't cost you the moments that matter.",
    philosophy: [
      "Opera is planned around a different rhythm of living.",
      "One where less time is spent getting through the day, and more time is spent enjoying it.",
    ],
    product:
      "With a walkable estate, thoughtfully planned residences, seamless live-work integration and one of Thane's most connected addresses, Opera reduces the small frictions that quietly consume every day. Because the rarest luxury isn't having more hours—it's getting more from the ones you already have.",
    close: "More time for life.",
  },
  {
    id: "energy",
    title: "Energy",
    truth: "The day shouldn't take everything from you.",
    philosophy: [
      "A home should do more than welcome you.",
      "It should restore you.",
    ],
    product:
      "From the Living Crown that helps power the building, to landscaped open spaces, wellness experiences, natural light, thoughtful planning and quieter surroundings—every element is designed to reduce effort and restore balance. Because when your home carries part of the burden, you have more of yourself left for the people who matter.",
    close: "More energy for what matters most.",
  },
  {
    id: "value",
    title: "Value",
    truth: "Some homes are bought. The rare ones become family landmarks.",
    philosophy: [
      "Opera was never envisioned as another residential tower.",
      "It was conceived as a timeless address—one that future generations would be proud to call home.",
    ],
    product:
      "A limited collection of just 150 residences, enduring architecture, carefully curated amenities and a community designed for generations together create value that extends far beyond ownership. Because true value isn't measured only by today's price—it's measured by tomorrow's pride.",
    close: "A legacy that grows with every generation.",
  },
] as const;

export const thanePillars = [
  {
    title: "Closer",
    body: "The office at minutes, not moods. The airport before the city fully wakes. Distance, quietly retired.",
  },
  {
    title: "Calmer",
    body: "Thane keeps its lakes, its tree-lined air, its lower register. The city hums—here, it never shouts.",
  },
  {
    title: "Certain",
    body: "Infrastructure arriving on schedule. Value compounding without noise. A skyline finding its permanent addresses.",
  },
] as const;

export const arrivalSteps = [
  {
    title: "Gate",
    body: "Arrival begins before the threshold. A composed entrance that sets the tone.",
  },
  {
    title: "Driveway",
    body: "A procession of landscape and light. Private. Unhurried. Intentional.",
  },
  {
    title: "Lobby",
    body: "Volume, material, and silence. The first interior impression is lasting.",
  },
  {
    title: "Concierge",
    body: "Anticipation, not interruption. Service that understands discretion.",
  },
] as const;

export const residences = [
  {
    id: "3bhk",
    label: "3 BHK",
    name: "The Residence",
    area: "Generous proportions",
    body: "Composed for those who value clarity—rooms that open with intention, light that travels freely.",
  },
  {
    id: "4bhk",
    label: "4 BHK",
    name: "The Estate Home",
    area: "Expanded living",
    body: "Space for gathering and retreat in equal measure. A home that holds both celebration and quiet.",
  },
  {
    id: "6bhk",
    label: "6 BHK",
    name: "The Signature",
    area: "Statement living",
    body: "Reserved for those who require more than a residence—an address of presence and permanence.",
  },
] as const;

export const indulgencesIntro = {
  title: "150 Indulgences",
  subtitle: "Curated for every rhythm of life.",
  body: [
    "Every space at Opera exists for a reason.",
    "Some restore your body. Some bring families together. Some elevate everyday routines into memorable moments.",
    "Together, they form a collection of 150 thoughtfully curated indulgences designed around the many rhythms of life.",
  ],
  experiencesLabel: "Experience Includes",
} as const;

export const indulgenceChapters = [
  {
    id: "begin-well",
    numeral: "I",
    title: "Begin Well",
    tagline: "Every extraordinary day begins with how you feel.",
    narrative:
      "Mornings that set the tone for the day. Spaces devoted to restoration—where the body wakes gently and the mind finds its pace before the city asks anything of you.",
    experiences: ["Wellness", "Yoga", "Meditation", "Fitness", "Walking Trails"],
  },
  {
    id: "reflect",
    numeral: "II",
    title: "Reflect",
    tagline: "Every landmark should have a place for the soul.",
    narrative:
      "Beyond architecture and amenities lies something more enduring—a quiet space to pause, pray and reconnect. The beautifully crafted Jain Derasar brings spiritual harmony into the heart of Opera, allowing faith and family traditions to remain close to home.",
    experiences: ["Jain Derasar", "Meditation Pavilion", "Reflection Garden", "Spiritual Courtyard"],
  },
  {
    id: "come-together",
    numeral: "III",
    title: "Come Together",
    tagline: "Spaces where memories are made and traditions continue.",
    narrative:
      "Celebrations that become annual rituals. Gatherings that need no venue beyond home. Opera holds room for the occasions that define a family across decades.",
    experiences: ["Banquet", "Private Dining", "Party Lawn", "BBQ Pavilion"],
  },
  {
    id: "grow-together",
    numeral: "IV",
    title: "Grow Together",
    tagline: "Designed for every generation under one roof.",
    narrative:
      "Thoughtfully designed for every generation. Places where children discover, teenagers retreat, and grandparents remain close—not separated by floor, but connected by landscape.",
    experiences: ["Kids Play", "Teen Lounge", "Learning Spaces", "Family Gardens"],
  },
  {
    id: "find-pace",
    numeral: "V",
    title: "Find Your Pace",
    tagline: "Movement that becomes part of everyday living.",
    narrative:
      "Vitality woven into the day—not reserved for weekends. Movement, sport and everyday energy find their place within the estate, so staying well never requires leaving home.",
    experiences: ["Gym", "Indoor Sports", "Outdoor Sports", "Jogging Track"],
  },
  {
    id: "work-beautifully",
    numeral: "VI",
    title: "Work Beautifully",
    tagline: "Where productivity meets peace of mind.",
    narrative:
      "Because productivity deserves inspiring surroundings. Quiet rooms for focus, generous spaces for collaboration—work that feels closer to clarity than to noise.",
    experiences: ["Business Lounge", "Library", "Meeting Pods", "Co-working"],
  },
  {
    id: "unwind",
    numeral: "VII",
    title: "Unwind",
    tagline: "Moments of stillness, thoughtfully designed.",
    narrative:
      "Quiet moments that belong entirely to you. Courtyards, water and soft light—spaces that ask nothing in return except that you arrive, and stay a little longer.",
    experiences: ["Reading Lounge", "Courtyards", "Water Features", "Reflection Gardens"],
  },
  {
    id: "give-back",
    numeral: "VIII",
    title: "Give Back",
    tagline: "Architecture that quietly gives back to people and the planet.",
    narrative:
      "Where architecture quietly works for the future. The Living Crown, integrated systems and considered engineering—so the building carries part of life's weight on your behalf.",
    experiences: ["Living Crown", "Solar", "Water Systems", "Sustainability Systems"],
  },
] as const;

export const amenities = [
  { title: "Wellness", caption: "Restore what the day takes." },
  { title: "Sky Lounge", caption: "Elevation as a daily ritual." },
  { title: "Private Dining", caption: "Host without leaving home." },
  { title: "Landscape Courts", caption: "Green as architecture." },
  { title: "Pool Deck", caption: "Water, light, horizon." },
  { title: "Work Atelier", caption: "Focus, when you need it." },
] as const;

export const lifeMoments = [
  {
    id: "morning",
    title: "Morning",
    body: "Light arrives first. Coffee overlooking a city still waking. The day begins on your terms.",
  },
  {
    id: "afternoon",
    title: "Afternoon",
    body: "Quiet hours. A court of green. Work that feels closer to clarity than to noise.",
  },
  {
    id: "evening",
    title: "Evening",
    body: "Gold hour settles across stone and glass. Gathering becomes effortless.",
  },
  {
    id: "night",
    title: "Night",
    body: "The skyline softens. Silence returns. Home becomes sanctuary.",
  },
] as const;

export const legacy = [
  {
    year: "Foundation",
    title: "History",
    body: "Nagrik builds with a long view—places meant to outlast trends and temporary taste.",
  },
  {
    year: "Promise",
    title: "Trust",
    body: "Delivery is not a claim. It is a record. Families choose us because we finish what we begin.",
  },
  {
    year: "Craft",
    title: "Execution",
    body: "Every detail is a decision. Materials, proportions, and service—held to one standard.",
  },
] as const;
