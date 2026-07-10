export type ProcessStep = {
  id: number;
  title: string;
  summary: string;
  timeframe: string;
  activities: string[];
  deliverables: string[];
};

export type ProcessPage = {
  heroImage: string;
  heroAlt: string;
  introduction: string;
  steps: ProcessStep[];
  deliverables: {
    title: string;
    description: string;
  }[];
  management: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  seo: {
    title: string;
    description: string;
  };
};

export const processPage: ProcessPage = {
  heroImage:
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=90",
  heroAlt: "Architectural model, drawings, and material samples on a studio table",
  introduction:
    "Our process is designed to make interior projects feel clear, collaborative, and controlled. We define decisions early, communicate progress consistently, and connect design intent with the realities of budget, procurement, construction, and handover.",
  steps: [
    {
      id: 1,
      title: "Discovery",
      summary:
        "We understand your goals, site, budget, timeline, decision makers, and the kind of experience the space needs to create.",
      timeframe: "1-2 weeks",
      activities: [
        "Initial consultation",
        "Site visit or plan review",
        "Budget and timeline discussion",
        "Project goals and constraints"
      ],
      deliverables: ["Project brief", "Scope definition", "Initial direction"]
    },
    {
      id: 2,
      title: "Research",
      summary:
        "We study context, users, materials, operational needs, and references before any major design decisions are made.",
      timeframe: "1-2 weeks",
      activities: [
        "User and lifestyle mapping",
        "Brand or context review",
        "Reference research",
        "Site constraint analysis"
      ],
      deliverables: ["Research summary", "Design priorities", "Reference framework"]
    },
    {
      id: 3,
      title: "Concept",
      summary:
        "We define the atmosphere, spatial strategy, layouts, material direction, and early visual language.",
      timeframe: "2-4 weeks",
      activities: [
        "Mood boards",
        "Initial layouts",
        "Material direction",
        "Lighting and furniture intent"
      ],
      deliverables: ["Concept presentation", "Preliminary plans", "Material palette"]
    },
    {
      id: 4,
      title: "Development",
      summary:
        "The approved concept becomes more precise through technical decisions, proportions, furniture, and detailed coordination.",
      timeframe: "3-6 weeks",
      activities: [
        "Design refinement",
        "3D visualization",
        "Furniture selection",
        "Material and fixture coordination"
      ],
      deliverables: ["Developed layouts", "3D visuals", "Furniture and finish direction"]
    },
    {
      id: 5,
      title: "Documentation",
      summary:
        "We prepare the drawings and schedules required to communicate design intent clearly to vendors and site teams.",
      timeframe: "2-5 weeks",
      activities: [
        "Technical drawings",
        "Joinery details",
        "Lighting layouts",
        "Schedules and specifications"
      ],
      deliverables: ["Drawing set", "Material schedule", "Furniture schedule"]
    },
    {
      id: 6,
      title: "Execution",
      summary:
        "We support the site phase through coordination, reviews, approvals, and design clarifications.",
      timeframe: "Project dependent",
      activities: [
        "Site coordination",
        "Progress reviews",
        "Vendor communication",
        "Quality observations"
      ],
      deliverables: ["Site notes", "Approval checkpoints", "Revision support"]
    },
    {
      id: 7,
      title: "Styling",
      summary:
        "Final furniture, accessories, lighting balance, and styling decisions bring the space into its intended atmosphere.",
      timeframe: "1-2 weeks",
      activities: [
        "Furniture placement",
        "Soft furnishing review",
        "Decor and styling",
        "Lighting adjustment"
      ],
      deliverables: ["Styling direction", "Final placement", "Photography readiness"]
    },
    {
      id: 8,
      title: "Handover",
      summary:
        "We complete the final review, support corrections, and prepare the space for use.",
      timeframe: "1 week",
      activities: [
        "Final walkthrough",
        "Correction list",
        "Handover support",
        "Post-completion review"
      ],
      deliverables: ["Final snag list", "Handover notes", "Completion documentation"]
    }
  ],
  deliverables: [
    {
      title: "Floor plans",
      description: "Spatial layouts that clarify circulation, zoning, furniture, and functional relationships."
    },
    {
      title: "3D visuals",
      description: "Atmospheric views that help clients understand scale, mood, materials, and lighting."
    },
    {
      title: "Material boards",
      description: "Curated palettes for finishes, surfaces, fabrics, metals, wood, and accent details."
    },
    {
      title: "Lighting layouts",
      description: "Plans and direction for ambient, task, feature, and decorative lighting."
    },
    {
      title: "Furniture schedules",
      description: "Selections and specifications for loose furniture, built-ins, and key accessories."
    },
    {
      title: "Joinery drawings",
      description: "Detailed drawings for custom storage, counters, panels, wardrobes, and display systems."
    }
  ],
  management: [
    {
      title: "Weekly updates",
      description: "Regular progress communication keeps decisions visible and reduces uncertainty."
    },
    {
      title: "Site visits",
      description: "Scheduled reviews help align execution with the approved design direction."
    },
    {
      title: "Approval checkpoints",
      description: "Key decisions are grouped into clear moments so projects do not drift."
    },
    {
      title: "Shared timelines",
      description: "Milestones, dependencies, and responsibilities are documented early and revisited as needed."
    }
  ],
  faqs: [
    {
      question: "How long does a typical project take?",
      answer:
        "Small renovations may take a few months. Larger homes, offices, restaurants, or showrooms depend on scope, approvals, procurement, and site conditions."
    },
    {
      question: "Can changes be made after design approval?",
      answer:
        "Yes, but we manage changes through clear revisions so cost, timeline, and site impact remain visible."
    },
    {
      question: "Do you work with existing contractors?",
      answer:
        "Yes. We can coordinate with a client's contractor while keeping design intent, details, and approvals organized."
    },
    {
      question: "What happens if timelines change?",
      answer:
        "We identify the reason, update priorities, and communicate the impact clearly before decisions are made."
    },
    {
      question: "Do you handle procurement?",
      answer:
        "We can support selections, specifications, vendor coordination, and procurement guidance depending on project scope."
    },
    {
      question: "How often will we communicate?",
      answer:
        "Communication frequency depends on the project phase, but active projects typically include regular updates and approval checkpoints."
    }
  ],
  seo: {
    title: "Design Process",
    description:
      "A transparent interior design process from first consultation to final handover by Versatile Interior."
  }
};
