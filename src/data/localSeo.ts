export type LocalSeoPage = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  location: string;
  serviceType: string;
  heroImage: string;
  heroAlt: string;
  seo: {
    title: string;
    description: string;
  };
  proof: {
    value: string;
    label: string;
  }[];
  sections: {
    title: string;
    body: string;
  }[];
  serviceLinks: {
    label: string;
    href: string;
    description: string;
  }[];
  featuredProjectSlugs: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

const sharedDhakaServices = [
  {
    label: "Residential interiors",
    href: "/services/residential",
    description:
      "Planning, storage, lighting, furniture direction, and execution-ready details for homes and apartments."
  },
  {
    label: "Commercial interiors",
    href: "/services/commercial",
    description:
      "Workplaces and client-facing environments shaped around flow, brand clarity, and day-to-day operation."
  },
  {
    label: "Restaurant interiors",
    href: "/services/restaurant",
    description:
      "Dining spaces designed around guest experience, service movement, lighting, seating, and durability."
  }
];

export const localSeoPages: LocalSeoPage[] = [
  {
    slug: "interior-design-dhaka",
    eyebrow: "Local interior design",
    title: "Interior design in Dhaka for homes, workplaces, restaurants, and showrooms.",
    intro:
      "Versatile Interior designs practical, refined interiors across Dhaka with attention to climate, storage, materials, lighting, and site execution.",
    location: "Dhaka",
    serviceType: "Interior design",
    heroImage:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=90",
    heroAlt: "Refined Dhaka interior design concept with warm materials",
    seo: {
      title: "Interior Design Dhaka",
      description:
        "Interior design in Dhaka for residences, offices, restaurants, showrooms, and events by Versatile Interior."
    },
    proof: [
      { value: "150", label: "Homes, workplaces, restaurants, and retail spaces delivered" },
      { value: "12", label: "Cities served across Bangladesh through design and execution" },
      { value: "20+", label: "Years of combined studio and site experience" }
    ],
    sections: [
      {
        title: "Designed for the way Dhaka spaces are actually used.",
        body:
          "A strong Dhaka interior has to do more than look polished. It must manage heat, light, humidity, dust, storage, family routines, business flow, vendor coordination, and long-term maintenance."
      },
      {
        title: "Local decisions make the work stronger.",
        body:
          "We consider material availability, service access, site constraints, building rules, and the realities of local construction so the design can move from concept to completion with fewer surprises."
      }
    ],
    serviceLinks: sharedDhakaServices,
    featuredProjectSlugs: ["courtyard-house", "the-quiet-office", "ember-dining-room"],
    faqs: [
      {
        question: "Do you handle full interior design projects in Dhaka?",
        answer:
          "Yes. We support planning, design direction, material selection, drawings, furniture guidance, and site coordination depending on the project scope."
      },
      {
        question: "Can you work with existing contractors?",
        answer:
          "Yes. We can coordinate with appointed contractors when roles, timelines, documentation, and decision responsibilities are clear."
      },
      {
        question: "What types of spaces do you design?",
        answer:
          "We design residences, offices, restaurants, showrooms, event environments, and selected renovations."
      }
    ]
  },
  {
    slug: "interior-design-gulshan",
    eyebrow: "Local interior design",
    title: "Interior design in Gulshan for refined residences and client-facing spaces.",
    intro:
      "We design Gulshan homes, apartments, offices, and hospitality spaces with calm planning, premium material direction, and disciplined execution.",
    location: "Gulshan",
    serviceType: "Interior design",
    heroImage:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1800&q=90",
    heroAlt: "Layered living room suited to a Gulshan residence",
    seo: {
      title: "Interior Design Gulshan",
      description:
        "Interior design in Gulshan for residences, apartments, offices, and hospitality spaces by Versatile Interior."
    },
    proof: [
      { value: "4,800", label: "Sq ft featured Gulshan residential project" },
      { value: "18", label: "Custom elements planned for the featured residence" },
      { value: "8", label: "Months from design development to completion" }
    ],
    sections: [
      {
        title: "Gulshan interiors need restraint and precision.",
        body:
          "Premium residential and commercial spaces in Gulshan benefit from quieter decisions: proportion, joinery, storage, lighting, and material quality instead of visual noise."
      },
      {
        title: "We plan for hosting, privacy, and everyday comfort.",
        body:
          "Many Gulshan projects need to support family life, guests, staff movement, and private routines. We map these requirements before finalizing the spatial language."
      }
    ],
    serviceLinks: sharedDhakaServices,
    featuredProjectSlugs: ["courtyard-house", "woven-apartment", "the-quiet-office"],
    faqs: [
      {
        question: "Do you design luxury apartments and houses in Gulshan?",
        answer:
          "Yes. We work on residences where planning, storage, materials, and custom details need to feel considered and long-lasting."
      },
      {
        question: "Can you support renovation projects?",
        answer:
          "Yes. We can improve layouts, storage, lighting, finishes, furniture, and execution details for existing homes or apartments."
      },
      {
        question: "Do you visit the site before design starts?",
        answer:
          "A site review is strongly recommended so we can understand constraints, light, services, access, and existing conditions."
      }
    ]
  },
  {
    slug: "interior-design-banani",
    eyebrow: "Local interior design",
    title: "Interior design in Banani for workplaces, apartments, and hospitality brands.",
    intro:
      "Versatile Interior designs Banani spaces that balance brand presence, practical circulation, acoustic comfort, and material durability.",
    location: "Banani",
    serviceType: "Interior design",
    heroImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=90",
    heroAlt: "Warm Banani workplace interior with shared tables",
    seo: {
      title: "Interior Design Banani",
      description:
        "Interior design in Banani for offices, apartments, restaurants, and commercial spaces by Versatile Interior."
    },
    proof: [
      { value: "9,200", label: "Sq ft featured Banani workplace project" },
      { value: "74", label: "Work points planned around focus and collaboration" },
      { value: "6", label: "Months from concept to completion" }
    ],
    sections: [
      {
        title: "Banani projects often need operational clarity.",
        body:
          "Offices, restaurants, studios, and apartments in Banani benefit from layouts that manage daily movement, visitor flow, privacy, storage, and maintenance."
      },
      {
        title: "We design for both brand and routine.",
        body:
          "A commercial interior should make the brand easier to understand, but it also needs to support how teams, guests, and service staff use the space every day."
      }
    ],
    serviceLinks: sharedDhakaServices,
    featuredProjectSlugs: ["the-quiet-office", "ember-dining-room", "atelier-showroom"],
    faqs: [
      {
        question: "Do you design office interiors in Banani?",
        answer:
          "Yes. We plan workplaces around team structure, meeting needs, focus work, reception, acoustics, and long-term flexibility."
      },
      {
        question: "Can you design a brand-led commercial space?",
        answer:
          "Yes. We translate brand cues into material, lighting, furniture, and circulation without making the space feel overly themed."
      },
      {
        question: "Do you prepare execution drawings?",
        answer:
          "Yes. Documentation can be included depending on the agreed scope and contractor coordination needs."
      }
    ]
  },
  {
    slug: "interior-design-dhanmondi",
    eyebrow: "Local interior design",
    title: "Interior design in Dhanmondi for restaurants, apartments, and thoughtful renovations.",
    intro:
      "We design Dhanmondi interiors around compact planning, atmosphere, material performance, and the everyday realities of busy urban spaces.",
    location: "Dhanmondi",
    serviceType: "Interior design",
    heroImage:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1800&q=90",
    heroAlt: "Atmospheric restaurant interior suited to Dhanmondi dining",
    seo: {
      title: "Interior Design Dhanmondi",
      description:
        "Interior design in Dhanmondi for apartments, restaurants, renovations, and commercial spaces by Versatile Interior."
    },
    proof: [
      { value: "86", label: "Seats planned for featured Dhanmondi restaurant" },
      { value: "5", label: "Months from design direction to completion" },
      { value: "3,600", label: "Sq ft hospitality interior project" }
    ],
    sections: [
      {
        title: "Dhanmondi interiors need smart use of space.",
        body:
          "Apartments, restaurants, and commercial spaces in Dhanmondi often need efficient layouts, clear circulation, and durable finishes that can handle frequent use."
      },
      {
        title: "Atmosphere should not compromise function.",
        body:
          "For restaurants and busy commercial interiors, we plan lighting, seating, service movement, acoustics, and maintenance before the space is dressed visually."
      }
    ],
    serviceLinks: sharedDhakaServices,
    featuredProjectSlugs: ["ember-dining-room", "woven-apartment", "courtyard-house"],
    faqs: [
      {
        question: "Do you design restaurants in Dhanmondi?",
        answer:
          "Yes. We plan dining spaces around guest experience, table spacing, service routes, lighting, acoustics, and durable materials."
      },
      {
        question: "Can you work on compact apartments?",
        answer:
          "Yes. We focus on storage, circulation, multifunctional furniture, and material choices that make smaller homes feel calmer."
      },
      {
        question: "Can you phase a renovation?",
        answer:
          "Yes. Phasing can be discussed when the project needs to remain partly usable or when budgets are staged."
      }
    ]
  },
  {
    slug: "restaurant-interior-design-dhaka",
    eyebrow: "Hospitality design",
    title: "Restaurant interior design in Dhaka shaped around atmosphere and service flow.",
    intro:
      "We design Dhaka restaurants where guest comfort, lighting, seating, acoustics, material durability, and operational movement work together.",
    location: "Dhaka",
    serviceType: "Restaurant interior design",
    heroImage:
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1800&q=90",
    heroAlt: "Warm restaurant interior with atmospheric lighting in Dhaka",
    seo: {
      title: "Restaurant Interior Design Dhaka",
      description:
        "Restaurant interior design in Dhaka focused on guest experience, service flow, seating, lighting, and durable hospitality materials."
    },
    proof: [
      { value: "19", label: "Restaurant and hospitality projects completed" },
      { value: "86", label: "Seats planned in a featured dining room" },
      { value: "5", label: "Months for a featured restaurant delivery" }
    ],
    sections: [
      {
        title: "The dining room has to support the business.",
        body:
          "A restaurant interior should make guests want to stay, return, and share the experience. It should also help staff move cleanly and support efficient table turnover."
      },
      {
        title: "We design the guest journey and the service route together.",
        body:
          "Entry, waiting, seating, lighting, washroom access, billing, delivery pressure, and cleaning routines are part of the design brief, not afterthoughts."
      }
    ],
    serviceLinks: [
      {
        label: "Restaurant interiors",
        href: "/services/restaurant",
        description: "Atmosphere, service flow, seating, lighting, materials, and guest experience."
      },
      {
        label: "Commercial interiors",
        href: "/services/commercial",
        description: "Client-facing interiors that balance brand presence and daily operation."
      },
      {
        label: "Event and exhibition interiors",
        href: "/services/event-exhibition",
        description: "Temporary brand environments, activations, launches, and exhibition spaces."
      }
    ],
    featuredProjectSlugs: ["ember-dining-room", "launch-gallery", "the-quiet-office"],
    faqs: [
      {
        question: "What should restaurant owners prepare before design starts?",
        answer:
          "Menu type, target guest profile, seating goals, kitchen/service plan, brand references, budget range, and timeline are the most useful starting points."
      },
      {
        question: "Do you design custom seating?",
        answer:
          "Yes. Custom banquettes, booths, and selected furniture can be designed when they improve comfort, capacity, or atmosphere."
      },
      {
        question: "Can you work with kitchen consultants?",
        answer:
          "Yes. Hospitality projects often require coordination between interior design, kitchen planning, MEP, and operations."
      }
    ]
  },
  {
    slug: "showroom-interior-design-bangladesh",
    eyebrow: "Retail design",
    title: "Showroom interior design in Bangladesh for premium product display and consultation.",
    intro:
      "We design showrooms that make products easier to understand, compare, handle, and remember while supporting sales consultation and storage.",
    location: "Bangladesh",
    serviceType: "Showroom interior design",
    heroImage:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=90",
    heroAlt: "Curated showroom interior with display walls and consultation zones",
    seo: {
      title: "Showroom Interior Design Bangladesh",
      description:
        "Showroom interior design in Bangladesh for product display, retail experience, customer consultation, and premium brand environments."
    },
    proof: [
      { value: "32", label: "Display bays planned for a featured showroom" },
      { value: "5,100", label: "Sq ft featured retail showroom" },
      { value: "16", label: "Showroom and retail-focused projects" }
    ],
    sections: [
      {
        title: "Showrooms need hierarchy, not just display.",
        body:
          "A strong showroom helps customers browse, compare, ask questions, and make decisions. Product variety should feel curated instead of crowded."
      },
      {
        title: "The back-of-house matters too.",
        body:
          "Sample storage, staff access, consultation areas, lighting quality, and replacement flexibility all affect how well the showroom performs after opening."
      }
    ],
    serviceLinks: [
      {
        label: "Showroom interiors",
        href: "/services/showroom",
        description: "Retail planning, display systems, consultation zones, lighting, and brand environment."
      },
      {
        label: "Commercial interiors",
        href: "/services/commercial",
        description: "Client-facing interiors for businesses that need clarity, flow, and trust."
      },
      {
        label: "Event and exhibition interiors",
        href: "/services/event-exhibition",
        description: "Temporary display environments, product launches, and branded installations."
      }
    ],
    featuredProjectSlugs: ["atelier-showroom", "launch-gallery", "the-quiet-office"],
    faqs: [
      {
        question: "Can you organize a large product catalogue?",
        answer:
          "Yes. We plan display hierarchy, sample handling, storage, and consultation routes so variety stays easy to understand."
      },
      {
        question: "Do you design display systems?",
        answer:
          "Yes. Display walls, tables, modular bays, and sample storage can be designed as part of the project."
      },
      {
        question: "Can you design showrooms outside Dhaka?",
        answer:
          "Yes. We evaluate travel, site access, local contractor capacity, and documentation needs before confirming scope."
      }
    ]
  },
  {
    slug: "office-interior-design-dhaka",
    eyebrow: "Workplace design",
    title: "Office interior design in Dhaka for focused, flexible, and client-ready workplaces.",
    intro:
      "We design Dhaka offices around team structure, visitor experience, acoustic comfort, meeting needs, brand presence, and future flexibility.",
    location: "Dhaka",
    serviceType: "Office interior design",
    heroImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=90",
    heroAlt: "Warm office interior in Dhaka with shared work tables",
    seo: {
      title: "Office Interior Design Dhaka",
      description:
        "Office interior design in Dhaka for workplaces, studios, commercial offices, reception areas, meeting rooms, and team environments."
    },
    proof: [
      { value: "74", label: "Work points planned in a featured office" },
      { value: "9,200", label: "Sq ft featured workplace project" },
      { value: "28", label: "Commercial and workplace projects completed" }
    ],
    sections: [
      {
        title: "A better office reduces daily friction.",
        body:
          "Good workplace design clarifies circulation, supports focus, improves meeting habits, manages sound, and gives visitors a stronger first impression."
      },
      {
        title: "We plan for how teams actually work.",
        body:
          "Before choosing materials, we study work modes, storage needs, meeting frequency, privacy, power and data routes, and future team growth."
      }
    ],
    serviceLinks: [
      {
        label: "Commercial interiors",
        href: "/services/commercial",
        description: "Workplace planning, reception, meeting rooms, team zones, brand presence, and site-ready documentation."
      },
      {
        label: "Showroom interiors",
        href: "/services/showroom",
        description: "Client-facing spaces with strong display logic and consultation flow."
      },
      {
        label: "Residential interiors",
        href: "/services/residential",
        description: "Private offices, study rooms, home workplaces, and refined residential planning."
      }
    ],
    featuredProjectSlugs: ["the-quiet-office", "atelier-showroom", "courtyard-house"],
    faqs: [
      {
        question: "Do you design startup and corporate offices?",
        answer:
          "Yes. We can plan flexible workplaces for small teams, growing companies, client-facing offices, and established corporate environments."
      },
      {
        question: "Can you improve an existing office without relocating?",
        answer:
          "Yes. Renovation and phased improvement can be planned around operational needs and site limitations."
      },
      {
        question: "Do you handle acoustic planning?",
        answer:
          "We consider acoustic comfort through layout, material selection, ceiling treatment, and furniture planning."
      }
    ]
  }
];

export function getLocalSeoPage(slug: string) {
  return localSeoPages.find((page) => page.slug === slug);
}
