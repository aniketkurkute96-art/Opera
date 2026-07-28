export const brand = {

  name: "Opera",

  byline: "by Nagrik",

  location: "Majiwada, Thane",

  tagline: "The Landmark That Gives Back",

  heroLine:

    "A landmark address in Majiwada—for those who have arrived, and want a home that reflects it.",

  families: 150,

} as const;



export const navigation = [

  { label: "The Home", href: "#residences" },

  { label: "Life", href: "#life" },

  { label: "Architecture", href: "#architecture" },

  { label: "Arrival", href: "#arrival" },

  { label: "Indulgences", href: "#indulgences" },

  { label: "The Crown", href: "#living-crown" },

  { label: "Gives Back", href: "#gives-back" },

  { label: "Proof", href: "#proof" },

  { label: "Thane", href: "#thane" },

  { label: "Legacy", href: "#legacy" },

] as const;



export const heroCta = {

  label: "Experience Opera",

  href: "#residences",

} as const;



/**

 * Every major section: Feel → Product → Difference.

 * Philosophy appears after product attachment (Gives Back chapter).

 */

export const residencesIntro = {

  eyebrow: "The Home",

  title: "Homes designed to be lived in",

  body: "Three compositions. One standard. Light, privacy, and scale shaped for achievement, sanctuary, hospitality, and legacy—not just square footage.",

} as const;



export const residences = [

  {

    id: "3bhk",

    label: "3 BHK",

    name: "The Residence",

    feel: "Morning light without sacrificing privacy. A home that supports your pace—and restores you when the city finally quietens.",

    product:

      "Corner light, private lift lobby, and live-work zones. Generous proportions with configurations shared by appointment.",

    difference:

      "Designed for clarity and ease. Every room earns its place—nothing ornamental, nothing wasted.",

    proof: "Private lift lobby · Corner residences · Live-work integration",

  },

  {

    id: "4bhk",

    label: "4 BHK",

    name: "The Estate Home",

    feel: "A living room designed to host every celebration—and a master suite that feels like a personal retreat after the day is done.",

    product:

      "Expanded living and dining volumes, guest privacy, and deck-ready layouts. Ideal for those who entertain with intention.",

    difference:

      "Space for gathering and solitude in equal measure. Architecture that holds both your public pride and private peace.",

    proof: "Expanded living · Guest privacy · Deck-ready layouts",

  },

  {

    id: "6bhk",

    label: "6 BHK",

    name: "The Signature",

    feel: "An address that announces itself before your name does. For those who require presence, permanence, and room to breathe.",

    product:

      "Statement proportions, multi-generational planning, and the most expansive compositions in the collection.",

    difference:

      "Reserved for buyers who think in decades—whether for legacy, hospitality, or the achievement of finally making it.",

    proof: "Statement scale · Multi-generational planning · Limited availability",

  },

] as const;



export const lifeIntro = {

  eyebrow: "Everyday Life",

  title: "A rhythm, not a project",

  body: "Opera is architecture you move through—morning focus, afternoon calm, evening hospitality, weekend ease. Your life, at your pace.",

} as const;



export const lifeMoments = [

  {

    id: "morning",

    title: "Morning",

    body: "Light arrives first. Coffee before the city asks anything of you. The day begins on your terms—not the commute's.",

  },

  {

    id: "afternoon",

    title: "Afternoon",

    body: "Quiet hours for focus or stillness. A court of green, a room for calls, a home that protects your concentration.",

  },

  {

    id: "evening",

    title: "Evening",

    body: "Every evening can begin above the city. The deck, the skyline, the first hour that actually belongs to you.",

  },

  {

    id: "weekend",

    title: "Weekend",

    body: "Host without booking a venue. Celebrate without leaving home. Hospitality that feels effortless because it was designed in.",

  },

  {

    id: "night",

    title: "Night",

    body: "The skyline softens. Silence returns. Home becomes sanctuary—where achievement finally rests.",

  },

] as const;



export const architectureIntro = {

  eyebrow: "Architecture",

  title: "Design you feel, not just admire",

  body: "Opera is architecture-first. Massing, material, and light translate directly into how you live—privacy, volume, and calm without design jargon.",

} as const;



export const arrivalIntro = {

  eyebrow: "Arrival",

  title: "Coming home should slow your heartbeat",

  body: "From the first glimpse of the gate to your private lift lobby—arrival is ceremony without excess. You feel it before you enter.",

} as const;



export const arrivalSteps = [

  {

    title: "Gate",

    body: "A composed entrance that sets the tone. Your first impression of Opera is deliberate—and it stays with you.",

  },

  {

    title: "Approach",

    body: "Landscape and light in procession. Private, unhurried, intentional—the drive home becomes part of the experience.",

  },

  {

    title: "Lobby",

    body: "Double-height volume, refined materials, and silence. Architecture experienced at human scale, not from a drone.",

  },

  {

    title: "Private Lift",

    body: "No shared corridors. Your floor, your threshold. Discretion built into the journey—not added as an afterthought.",

  },

] as const;



export const indulgencesIntro = {

  title: "150 Indulgences",

  subtitle: "Moments, not amenity lists.",

  body: [

    "Every space at Opera exists for a reason.",

    "Some restore you. Some elevate a routine into a ritual. Some hold the occasions that define your address.",

    "One hundred and fifty indulgences—curated around how you actually live.",

  ],

  experiencesLabel: "Includes",

} as const;



export const indulgenceChapters = [

  {

    id: "begin-well",

    numeral: "I",

    title: "Begin Well",

    tagline: "Mornings that set the tone before the city asks anything.",

    narrative:

      "Wellness at sunrise. Yoga, fitness, and walking trails woven into the estate—so restoration is part of the day, not a weekend exception.",

    experiences: ["Wellness", "Yoga", "Fitness", "Walking Trails"],

  },

  {

    id: "reflect",

    numeral: "II",

    title: "Reflect",

    tagline: "A landmark should hold space for what endures.",

    narrative:

      "The beautifully crafted Jain Derasar brings spiritual harmony into the heart of Opera—faith and tradition close to home, without leaving the estate.",

    experiences: ["Jain Derasar", "Meditation Pavilion", "Reflection Garden"],

  },

  {

    id: "come-together",

    numeral: "III",

    title: "Come Together",

    tagline: "Host without leaving home. Celebrate without booking a venue.",

    narrative:

      "Banquet halls, private dining, and lawns designed for the occasions that matter—business dinners, festivals, milestones, and quiet gatherings alike.",

    experiences: ["Banquet", "Private Dining", "Party Lawn", "BBQ Pavilion"],

  },

  {

    id: "grow-together",

    numeral: "IV",

    title: "Grow Together",

    tagline: "Room for every generation—together, not separated by floor.",

    narrative:

      "Learning spaces, gardens, and lounges for every age—whether you're raising children, hosting parents, or building a multi-generational address.",

    experiences: ["Kids Play", "Teen Lounge", "Learning Spaces", "Family Gardens"],

  },

  {

    id: "find-pace",

    numeral: "V",

    title: "Find Your Pace",

    tagline: "Movement woven into the day—not reserved for weekends.",

    narrative:

      "Gym, indoor and outdoor sport, jogging tracks—vitality within the estate so staying well never requires leaving home.",

    experiences: ["Gym", "Indoor Sports", "Outdoor Sports", "Jogging Track"],

  },

  {

    id: "work-beautifully",

    numeral: "VI",

    title: "Work Beautifully",

    tagline: "Productivity deserves surroundings that sharpen focus.",

    narrative:

      "Business lounge, library, meeting pods, and co-working—work that feels closer to clarity than to the noise of the city.",

    experiences: ["Business Lounge", "Library", "Meeting Pods", "Co-working"],

  },

  {

    id: "unwind",

    numeral: "VII",

    title: "Unwind",

    tagline: "Stillness, thoughtfully designed.",

    narrative:

      "Reading lounges, courtyards, water features—spaces that ask nothing except that you arrive, and stay a little longer.",

    experiences: ["Reading Lounge", "Courtyards", "Water Features"],

  },

  {

    id: "give-back",

    numeral: "VIII",

    title: "Give Back",

    tagline: "Architecture that works for you—and for what follows.",

    narrative:

      "The Living Crown, solar integration, and considered engineering—so the building carries part of life's weight on your behalf.",

    experiences: ["Living Crown", "Solar", "Water Systems", "Sustainability"],

  },

] as const;



export const livingCrown = {

  eyebrow: "Signature Identity",

  title: "The Living Crown",

  feel: "Your address should be recognised before your name.",

  product:

    "A signature rooftop silhouette, integrated sustainability systems, and a skyline-defining presence visible across Thane.",

  difference:

    "Not a flourish—a presence. Opera's crown makes the building unmistakable from every approach, and every memory.",

} as const;



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

    feel: "Success shouldn't cost you the moments that matter.",

    product:

      "Walkable estate, live-work integration, and one of Thane's most connected addresses—less commuting, more evenings that belong to you.",

    difference:

      "Opera gives back hours the city quietly takes. The rarest luxury is getting more from the time you already have.",

  },

  {

    id: "energy",

    title: "Energy",

    feel: "The day shouldn't take everything from you.",

    product:

      "Natural light, landscaped open spaces, wellness experiences, and the Living Crown—designed to restore balance, not drain it.",

    difference:

      "When your home carries part of the burden, you have more of yourself left—for work, for family, for peace.",

  },

  {

    id: "value",

    title: "Value",

    feel: "Some homes are bought. The rare ones become landmarks.",

    product:

      "Just 150 residences, enduring architecture, a Jain Derasar, and 150 curated indulgences—value that compounds beyond today's price.",

    difference:

      "Opera was conceived as a timeless address—one future generations, NRIs returning home, and achievers building legacy will be proud to hold.",

  },

] as const;



export const proofIntro = {

  eyebrow: "Proof",

  title: "Confidence before commitment",

  body: "Emotion creates desire. Proof creates bookings. Here is what Opera delivers—in specification, not suggestion.",

} as const;



export const proofCategories = [

  {

    title: "The Collection",

    items: [

      "150 residences only",

      "3, 4 & 6 BHK configurations",

      "Private lift lobbies",

      "Corner light residences",

    ],

  },

  {

    title: "Signature Features",

    items: [

      "Living Crown with integrated sustainability",

      "Jain Derasar within the estate",

      "150 curated indulgences",

      "Double-height arrival lobby",

    ],

  },

  {

    title: "Construction & Quality",

    items: [

      "Enduring materials and proportions",

      "Smart-home ready infrastructure",

      "Integrated water and energy systems",

      "Specifications shared by appointment",

    ],

  },

  {

    title: "Developer Trust",

    items: [

      "Nagrik — delivery as a record, not a claim",

      "Craft held to one standard",

      "Long-view construction philosophy",

      "Floor plans and details on private presentation",

    ],

  },

] as const;



export const thaneIntro = {

  eyebrow: "Location",

  title: "Majiwada, Thane",

  body: "Close enough to Mumbai's business corridors. Calm enough that your evenings belong to you again. Connectivity first—then the philosophy of time returned.",

} as const;



export const thanePillars = [

  {

    title: "Connected",

    body: "Eastern Express Highway, Ghodbunder Road, and upcoming metro links—office, airport, and city access without the daily grind of distance.",

  },

  {

    title: "Complete",

    body: "Schools, healthcare, retail, and dining within reach. Thane offers daily convenience without surrendering the calm that drew you here.",

  },

  {

    title: "Compounding",

    body: "Infrastructure arriving on schedule. A skyline finding its permanent addresses. An investment in both lifestyle and long-term value.",

  },

] as const;



export const legacyIntro = {

  eyebrow: "Nagrik Legacy",

  title: "Built for those who think in decades",

  body: "Trust is earned in delivery. Legacy is earned in what remains beautiful after the applause fades.",

} as const;



export const legacy = [

  {

    year: "Foundation",

    title: "History",

    body: "Nagrik builds with a long view—places meant to outlast trends and temporary taste.",

  },

  {

    year: "Promise",

    title: "Trust",

    body: "Delivery is not a claim. It is a record. Buyers choose us because we finish what we begin.",

  },

  {

    year: "Craft",

    title: "Execution",

    body: "Every detail is a decision. Materials, proportions, and service—held to one standard.",

  },

] as const;



export const closing = {

  eyebrow: "An exclusive address",

  title: "Only 150 residences.",

  body: "Opera is finite by design. Experience it before you decide—walk through your future home, see the Living Crown, and understand why this address gives back.",

  cta: "Book a private presentation",

  footnote: "By appointment",

} as const;



/** @deprecated Amenities grid — superseded by Indulgences chapter. Kept for reference. */

export const amenities = [

  { title: "Wellness", caption: "Restore what the day takes." },

  { title: "Sky Lounge", caption: "Every evening begins above the city." },

  { title: "Private Dining", caption: "Host without leaving home." },

  { title: "Landscape Courts", caption: "Green woven into daily life." },

  { title: "Pool Deck", caption: "Water, light, and horizon." },

  { title: "Work Atelier", caption: "Focus, when you need it." },

] as const;

