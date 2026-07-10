export const contactInfo = {
  email: "hello@versatileinterior.com",
  phone: "+880 1700 000000",
  address: "House 12, Road 8, Gulshan, Dhaka, Bangladesh",
  hours: [
    ["Sunday - Thursday", "10:00 AM - 6:00 PM"],
    ["Friday", "By appointment"],
    ["Saturday", "Closed"]
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Behance", href: "https://behance.net" }
  ],
  faqs: [
    {
      question: "What is the best way to start a project?",
      answer:
        "Use the consultation form so we can understand project type, location, timeline, and budget before the first conversation."
    },
    {
      question: "Do you take projects outside Dhaka?",
      answer:
        "Yes. We evaluate location, scope, site access, and travel requirements before confirming the engagement."
    },
    {
      question: "Can we visit the studio?",
      answer:
        "Studio visits are available by appointment after an initial call or project brief review."
    }
  ]
};

export type ConsultationRequest = {
  projectType: "Residential" | "Commercial" | "Restaurant" | "Showroom" | "Event";
  location: string;
  area: string;
  timeline: "Immediately" | "1 Month" | "3 Months" | "6+ Months";
  budget: "<$20k" | "$20k-50k" | "$50k-100k" | "$100k+";
  name: string;
  company?: string;
  email: string;
  phone: string;
  message: string;
};

export const projectTypes = [
  "Residential",
  "Commercial",
  "Restaurant",
  "Showroom",
  "Event"
] as const;

export const budgetOptions = ["<$20k", "$20k-50k", "$50k-100k", "$100k+"] as const;

export const timelineOptions = [
  "Immediately",
  "1 Month",
  "3 Months",
  "6+ Months"
] as const;
