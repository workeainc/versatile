export type Service = {
  slug: string;
  title: string;
  pluralTitle: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  overview: string;
  whyItMatters: string;
  approach: string;
  projectCount: string;
  process: {
    step: string;
    description: string;
  }[];
  featuredProjects: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  cta: string;
  seo: {
    title: string;
    description: string;
  };
};

export const serviceIntro =
  "We design homes, workplaces, restaurants, showrooms, and event environments for clients who need more than decoration. Our work connects spatial planning, Bangladeshi climate realities, material durability, documentation, and site coordination so each space feels distinctive, practical, and built to last.";

const sharedProcess = [
  {
    step: "Discover",
    description:
      "We clarify the brief, site conditions, budget, timeline, users, and decision-making process."
  },
  {
    step: "Design",
    description:
      "We develop layouts, atmosphere, material direction, lighting, and the details that define the experience."
  },
  {
    step: "Build",
    description:
      "We coordinate drawings, vendors, site reviews, and revisions so the design remains buildable."
  },
  {
    step: "Deliver",
    description:
      "We refine final details, support handover, and make sure the space is ready for real use."
  }
];

export const services: Service[] = [
  {
    slug: "residential",
    title: "Residential",
    pluralTitle: "Residential interiors",
    subtitle: "Homes designed around comfort, routine, memory, and long-term living.",
    heroImage:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1800&q=90",
    heroAlt: "Layered residential interior with warm natural materials",
    overview:
      "Residential design is deeply personal. We shape homes around how families gather, rest, host, pray, study, store, and move through daily life in Dhaka apartments and larger family houses.",
    whyItMatters:
      "A good home reduces friction. It improves storage, filters harsh daylight, supports family rituals, manages privacy, and makes everyday routines feel considered.",
    approach:
      "We begin with lifestyle mapping, then translate that into planning, material palettes, built-in storage, lighting, furniture direction, and details that local contractors can execute clearly.",
    projectCount: "42 projects",
    process: sharedProcess,
    featuredProjects: ["courtyard-house", "woven-apartment", "knot-residence"],
    faqs: [
      {
        question: "Can you renovate an existing apartment or house?",
        answer:
          "Yes. We handle renovation planning, layout improvement, material direction, furniture, and execution coordination."
      },
      {
        question: "Do you design custom furniture?",
        answer:
          "Yes. We design built-ins and selected furniture pieces when they improve storage, proportion, or daily use."
      },
      {
        question: "How long does a residential project take?",
        answer:
          "Small renovations may take 8-12 weeks. Full homes usually require several months depending on scope and site readiness."
      }
    ],
    cta: "Planning a home? Let's shape it around the way you live.",
    seo: {
      title: "Residential Interior Design Services",
      description:
        "Residential interior design for Dhaka homes, apartments, and renovations by Versatile Interior."
    }
  },
  {
    slug: "commercial",
    title: "Commercial",
    pluralTitle: "Commercial interiors",
    subtitle: "Workplaces designed for productivity, clarity, flexibility, and brand presence.",
    heroImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=90",
    heroAlt: "Warm commercial office interior with shared work tables",
    overview:
      "Commercial interiors need to support teams, clients, operations, growth, power and data planning, and brand perception at the same time.",
    whyItMatters:
      "A well-planned workplace improves focus, collaboration, visitor movement, acoustic comfort, and the way people understand the company they are entering.",
    approach:
      "We study work patterns, visitor flow, privacy needs, lighting, acoustics, maintenance, and future flexibility before shaping the spatial concept.",
    projectCount: "28 projects",
    process: sharedProcess,
    featuredProjects: ["the-quiet-office", "atelier-showroom", "courtyard-house"],
    faqs: [
      {
        question: "Do you provide office layout planning?",
        answer:
          "Yes. We plan team zones, meeting rooms, support spaces, visitor routes, and future flexibility."
      },
      {
        question: "Can you work with brand guidelines?",
        answer:
          "Yes. We translate brand cues into space without making the interior feel overly themed."
      },
      {
        question: "Do you coordinate execution drawings?",
        answer:
          "Yes. We prepare design documentation and coordinate details required for site execution."
      }
    ],
    cta: "Planning a workplace? Let's design one that supports the way your team works.",
    seo: {
      title: "Commercial Interior Design Services",
      description:
        "Commercial workplace and office interior design services by Versatile Interior."
    }
  },
  {
    slug: "restaurant",
    title: "Restaurant",
    pluralTitle: "Restaurant interiors",
    subtitle: "Dining spaces shaped around atmosphere, service flow, lighting, and memory.",
    heroImage:
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1800&q=90",
    heroAlt: "Atmospheric restaurant interior with warm lighting",
    overview:
      "Restaurant design has to balance emotion and operation. The room must feel memorable while allowing the service team to move cleanly during lunch rush, evening service, and delivery pressure.",
    whyItMatters:
      "Lighting, acoustics, seating comfort, table spacing, service routes, washroom placement, and material durability directly influence guest experience and revenue.",
    approach:
      "We design from the guest journey and operational plan together, aligning mood, layout, seating, lighting, menu personality, and back-of-house movement.",
    projectCount: "19 projects",
    process: sharedProcess,
    featuredProjects: ["ember-dining-room", "launch-gallery", "the-quiet-office"],
    faqs: [
      {
        question: "Can you design a restaurant from brand concept to site execution?",
        answer:
          "Yes. We can support concept, space planning, material direction, custom seating, lighting, and execution coordination."
      },
      {
        question: "Do you consider kitchen and service flow?",
        answer:
          "Yes. Guest atmosphere and operational routes are developed together so the space works beyond opening night."
      },
      {
        question: "Can you work with existing brand identity?",
        answer:
          "Yes. We translate brand identity into spatial experience through material, light, furniture, and pacing."
      }
    ],
    cta: "Planning a restaurant? Let's design a dining experience people remember.",
    seo: {
      title: "Restaurant Interior Design Services",
      description:
        "Restaurant and hospitality interior design focused on atmosphere, flow, and guest experience."
    }
  },
  {
    slug: "showroom",
    title: "Showroom",
    pluralTitle: "Showroom interiors",
    subtitle: "Retail spaces that make products easier to understand, compare, and desire.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=90",
    heroAlt: "Curated showroom interior with architectural display zones",
    overview:
      "Showrooms must guide attention. They need to organize product discovery, sample handling, consultation, and storage while making the brand feel confident and premium.",
    whyItMatters:
      "Good showroom design improves browsing, consultation, display hierarchy, inventory clarity, product storytelling, and customer confidence.",
    approach:
      "We design display logic, circulation, sample handling, consultation moments, lighting, storage, and the overall brand environment.",
    projectCount: "16 projects",
    process: sharedProcess,
    featuredProjects: ["atelier-showroom", "the-quiet-office", "ember-dining-room"],
    faqs: [
      {
        question: "Can you design display systems?",
        answer:
          "Yes. We design product walls, sample tables, display modules, and storage integrated into the showroom experience."
      },
      {
        question: "Do you help organize large inventories?",
        answer:
          "Yes. We create display hierarchy so variety feels curated instead of crowded."
      },
      {
        question: "Can the showroom support sales consultations?",
        answer:
          "Yes. We include consultation zones, sample review areas, and circulation that supports the sales process."
      }
    ],
    cta: "Planning a showroom? Let's turn browsing into a premium brand experience.",
    seo: {
      title: "Showroom Interior Design Services",
      description:
        "Showroom and retail interior design for product display, brand experience, and consultation."
    }
  },
  {
    slug: "event-exhibition",
    title: "Event & Exhibition",
    pluralTitle: "Event and exhibition interiors",
    subtitle: "Temporary spaces with the presence and clarity of permanent design.",
    heroImage:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=90",
    heroAlt: "Sculptural event and exhibition installation",
    overview:
      "Event and exhibition environments need speed, impact, and clarity. They must photograph well, move people naturally, survive production pressure, and support a focused message.",
    whyItMatters:
      "A strong temporary environment can make launches, activations, and exhibitions feel more memorable, organized, and brand-defining.",
    approach:
      "We prioritize modular construction, guest journey, lighting, display moments, material efficiency, and production coordination.",
    projectCount: "11 projects",
    process: sharedProcess,
    featuredProjects: ["launch-gallery", "ember-dining-room", "atelier-showroom"],
    faqs: [
      {
        question: "Can you work with short timelines?",
        answer:
          "Yes. We structure event projects around fast decisions, modular details, and production-ready documentation."
      },
      {
        question: "Do you design temporary brand environments?",
        answer:
          "Yes. We translate brand messages into spatial moments, displays, installations, and guest routes."
      },
      {
        question: "Can you coordinate with fabricators?",
        answer:
          "Yes. We prepare concepts and details that can be discussed with production partners and adjusted for site realities."
      }
    ],
    cta: "Planning an event or exhibition? Let's create a temporary space with lasting impact.",
    seo: {
      title: "Event and Exhibition Design Services",
      description:
        "Event, exhibition, and temporary brand environment design by Versatile Interior."
    }
  }
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
