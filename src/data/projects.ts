export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Restaurant"
  | "Showroom"
  | "Events";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: number;
  client: string;
  status: "Completed" | "Current" | "Concept";
  area: string;
  duration: string;
  heroImage: string;
  gallery: string[];
  coverImage: string;
  shortDescription: string;
  fullDescription: string;
  overview: string;
  challenge: string;
  solution: string;
  concept: string;
  materials: string[];
  services: string[];
  statistics: {
    label: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  relatedProjects: string[];
  featured: boolean;
  completionDate: string;
  seo: {
    title: string;
    description: string;
  };
};

export const projectCategories: Array<"All" | ProjectCategory> = [
  "All",
  "Residential",
  "Commercial",
  "Restaurant",
  "Showroom",
  "Events"
];

export const projects: Project[] = [
  {
    slug: "courtyard-house",
    title: "Courtyard House",
    category: "Residential",
    location: "Gulshan",
    year: 2026,
    client: "Private Residence",
    status: "Completed",
    area: "4,800 sq ft",
    duration: "8 months",
    heroImage:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1800&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=90"
    ],
    coverImage:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1600&q=90",
    shortDescription:
      "A composed family residence shaped by filtered daylight, warm stone, and quiet custom storage.",
    fullDescription:
      "The residence balances generous hosting spaces with private family rituals, using natural materials, shaded daylight, and soft thresholds to create a calm Gulshan home.",
    overview:
      "The client wanted a residence that could host extended family without losing the quiet rhythm of everyday life. We approached the brief as a sequence of warm thresholds: open when guests arrive, intimate when the house settles.",
    challenge:
      "The client wanted openness without losing intimacy across a large footprint.",
    solution:
      "We built a sequence of layered rooms around daylight, concealed storage, and tactile material transitions.",
    concept:
      "A courtyard-like living core anchors the plan. Circulation wraps around this shared volume, while built-in cabinetry, lowered lighting, and textured wall finishes soften the transition into bedrooms and private lounges.",
    materials: ["Oak veneer", "Travertine", "Lime plaster", "Linen"],
    services: ["Interior architecture", "Furniture design", "Site supervision"],
    statistics: [
      { label: "Floor area", value: "4,800 sq ft" },
      { label: "Duration", value: "8 months" },
      { label: "Custom elements", value: "18" },
      { label: "Completion", value: "2026" }
    ],
    testimonial: {
      quote:
        "The home feels refined but never formal. Every room supports the way our family actually lives.",
      author: "Farhana Rahman",
      role: "Client"
    },
    relatedProjects: ["woven-apartment", "the-quiet-office", "atelier-showroom"],
    featured: true,
    completionDate: "2026-02-18",
    seo: {
      title: "Courtyard House Interior Design",
      description: "A refined residential interior in Gulshan shaped around family hosting, filtered daylight, and custom storage."
    }
  },
  {
    slug: "the-quiet-office",
    title: "The Quiet Office",
    category: "Commercial",
    location: "Banani",
    year: 2025,
    client: "Technology Studio",
    status: "Completed",
    area: "9,200 sq ft",
    duration: "6 months",
    heroImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1600&q=90"
    ],
    coverImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=90",
    shortDescription:
      "A workplace concept with long sightlines, acoustic softness, and a restrained material palette.",
    fullDescription:
      "Designed for focus and collaboration, this Banani office uses calm circulation, acoustic softness, and warm shared zones to reduce visual noise.",
    overview:
      "The brief called for a workplace that could support concentrated product work, informal critique, and client presentations without feeling corporate. The design translates that balance through clear zones, softened acoustics, and carefully placed meeting rooms.",
    challenge:
      "The team needed flexibility without the cold feeling of a conventional open office.",
    solution:
      "We zoned the workplace through furniture, ceiling rhythm, acoustic surfaces, and warm lighting.",
    concept:
      "The office is organized as a quiet landscape: shared work areas sit along daylight, enclosed rooms sit deeper in the plan, and material shifts mark changes in pace without hard visual breaks.",
    materials: ["Ash wood", "Acoustic felt", "Microcement", "Bronze"],
    services: ["Workplace design", "Lighting direction", "Execution drawings"],
    statistics: [
      { label: "Floor area", value: "9,200 sq ft" },
      { label: "Duration", value: "6 months" },
      { label: "Work points", value: "74" },
      { label: "Completion", value: "2025" }
    ],
    testimonial: {
      quote:
        "The new office changed how the team uses the day. It feels calmer, clearer, and more intentional.",
      author: "Nadia Chowdhury",
      role: "Studio Director"
    },
    relatedProjects: ["atelier-showroom", "ember-dining-room", "courtyard-house"],
    featured: true,
    completionDate: "2025-11-04",
    seo: {
      title: "The Quiet Office Commercial Interior",
      description: "A warm commercial workplace interior in Banani designed for focus, acoustic comfort, and client-facing clarity."
    }
  },
  {
    slug: "ember-dining-room",
    title: "Ember Dining Room",
    category: "Restaurant",
    location: "Dhanmondi",
    year: 2025,
    client: "Ember Group",
    status: "Completed",
    area: "3,600 sq ft",
    duration: "5 months",
    heroImage:
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1800&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1600&q=90"
    ],
    coverImage:
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1600&q=90",
    shortDescription:
      "An intimate restaurant interior built around amber lighting, textured walls, and generous banquette seating.",
    fullDescription:
      "The dining room creates a slow evening atmosphere while keeping service flow, table spacing, and turnover practical.",
    overview:
      "The restaurant needed to feel intimate in the evening and operationally precise during rush hours. We shaped the room through warm light, curved seating, durable finishes, and a service route that stays mostly invisible to guests.",
    challenge:
      "The compact footprint needed to feel atmospheric without becoming visually heavy.",
    solution:
      "We used layered lighting, curved seating, and restrained surfaces to create depth without clutter.",
    concept:
      "The space borrows from the feeling of ember light: low, warm, and concentrated. Darker edges frame the dining area while brighter table surfaces create comfort and clarity.",
    materials: ["Walnut", "Leather", "Fluted glass", "Clay plaster"],
    services: ["Restaurant design", "Custom seating", "Lighting strategy"],
    statistics: [
      { label: "Floor area", value: "3,600 sq ft" },
      { label: "Duration", value: "5 months" },
      { label: "Seats", value: "86" },
      { label: "Completion", value: "2025" }
    ],
    relatedProjects: ["atelier-showroom", "launch-gallery", "the-quiet-office"],
    featured: false,
    completionDate: "2025-07-22",
    seo: {
      title: "Ember Dining Room Restaurant Interior",
      description: "A Dhanmondi restaurant interior focused on atmosphere, lighting, guest flow, and service efficiency."
    }
  },
  {
    slug: "atelier-showroom",
    title: "Atelier Showroom",
    category: "Showroom",
    location: "Uttara",
    year: 2024,
    client: "Atelier Ceramics",
    status: "Completed",
    area: "5,100 sq ft",
    duration: "7 months",
    heroImage:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1600566752734-2a0a8e01fbe3?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1600&q=90"
    ],
    coverImage:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=90",
    shortDescription:
      "A tactile retail showroom designed to make material browsing feel calm, legible, and curated.",
    fullDescription:
      "The showroom organizes product discovery through display walls, sample tables, concealed stock, and quieter consultation zones.",
    overview:
      "The client needed a showroom that could hold significant product variety while still feeling edited. We treated the space as a material gallery with clear product stories, sample handling, and consultation moments.",
    challenge:
      "Large inventory needed to feel premium instead of crowded.",
    solution:
      "We created a gallery-like route with clear display hierarchies and concealed storage.",
    concept:
      "A neutral architectural shell allows product texture to lead. Display walls, sample tables, and private consultation corners build a slower, more deliberate buying experience.",
    materials: ["Porcelain", "Powder-coated steel", "Oak", "Concrete"],
    services: ["Retail design", "Display systems", "Brand environment"],
    statistics: [
      { label: "Floor area", value: "5,100 sq ft" },
      { label: "Duration", value: "7 months" },
      { label: "Display bays", value: "32" },
      { label: "Completion", value: "2024" }
    ],
    relatedProjects: ["the-quiet-office", "ember-dining-room", "launch-gallery"],
    featured: false,
    completionDate: "2024-10-10",
    seo: {
      title: "Atelier Showroom Interior Design",
      description: "A premium Uttara showroom interior for curated material display, sample review, and customer consultation."
    }
  },
  {
    slug: "woven-apartment",
    title: "Woven Apartment",
    category: "Residential",
    location: "Bashundhara",
    year: 2024,
    client: "Private Apartment",
    status: "Completed",
    area: "2,350 sq ft",
    duration: "4 months",
    heroImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1600&q=90"
    ],
    coverImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=90",
    shortDescription:
      "A soft apartment renovation using woven texture, compact planning, and integrated furniture.",
    fullDescription:
      "The renovation brings warmth and storage discipline into a compact apartment for a young family.",
    overview:
      "The apartment had to become calmer without feeling sparse. The work focused on daily practicality: storage, light, family movement, ventilation, and materials that age softly.",
    challenge:
      "The existing layout felt visually busy and short on storage.",
    solution:
      "We simplified the circulation and integrated storage into wall planes and furniture pieces.",
    concept:
      "Woven texture became the quiet thread of the home. It appears in panels, furniture details, and soft furnishings, giving a compact apartment a tactile identity.",
    materials: ["Rattan", "Oak", "Terrazzo", "Cotton"],
    services: ["Renovation planning", "Furniture direction", "Material selection"],
    statistics: [
      { label: "Floor area", value: "2,350 sq ft" },
      { label: "Duration", value: "4 months" },
      { label: "Rooms", value: "5" },
      { label: "Completion", value: "2024" }
    ],
    relatedProjects: ["courtyard-house", "the-quiet-office", "atelier-showroom"],
    featured: false,
    completionDate: "2024-05-02",
    seo: {
      title: "Woven Apartment Residential Interior",
      description: "A soft residential apartment renovation in Bashundhara with compact storage, natural texture, and family-friendly planning."
    }
  },
  {
    slug: "launch-gallery",
    title: "Launch Gallery",
    category: "Events",
    location: "Tejgaon",
    year: 2023,
    client: "Lifestyle Brand",
    status: "Completed",
    area: "7,000 sq ft",
    duration: "10 weeks",
    heroImage:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=90"
    ],
    coverImage:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=90",
    shortDescription:
      "A temporary brand environment with gallery pacing, sculptural displays, and flexible guest circulation.",
    fullDescription:
      "The launch environment translated brand cues into a temporary interior that could host press, buyers, and guests without feeling temporary.",
    overview:
      "The brand needed a temporary environment that could carry the weight of a permanent space. We designed a flexible gallery route that made the Tejgaon launch feel composed, tactile, and highly photographed.",
    challenge:
      "The space needed to feel permanent and refined despite a short production timeline.",
    solution:
      "We prioritized modular construction, controlled lighting, and a simple route through the installation.",
    concept:
      "The installation unfolds as a sequence of framed moments. Each display point supports photography, movement, and product storytelling without overwhelming the guest.",
    materials: ["Fabric panels", "Painted timber", "Acrylic", "Aluminum"],
    services: ["Event design", "Spatial branding", "Production supervision"],
    statistics: [
      { label: "Floor area", value: "7,000 sq ft" },
      { label: "Duration", value: "10 weeks" },
      { label: "Install days", value: "12" },
      { label: "Completion", value: "2023" }
    ],
    relatedProjects: ["ember-dining-room", "atelier-showroom", "the-quiet-office"],
    featured: false,
    completionDate: "2023-12-14",
    seo: {
      title: "Launch Gallery Event Interior",
      description: "A temporary event and exhibition design project."
    }
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slugs: string[]) {
  return slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is Project => Boolean(project));
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);

  if (index < 0) {
    return { previous: undefined, next: undefined };
  }

  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length]
  };
}
