export type ImpactCard = {
  role: string;
  timeframe: string;
  metrics: string;
  impacts: string[];
};

export type ResumeContent = {
  name: string;
  title: string;
  location?: string;
  summary: string;
  details: { label: string; value: string; href?: string }[];
  experience: ImpactCard[];
  projects: { title: string; bullets: string[] }[];
};

export const impactTimeline: ImpactCard[] = [
  {
    role: "Staff Frontend Engineer",
    timeframe: "2024 – Present",
    metrics: "Improved Core Web Vitals and delivery throughput",
    impacts: [
      "Led a maintainable App Router architecture with clear boundaries.",
      "Standardized design tokens and CSS Modules for predictable UI changes.",
      "Shipped accessible, keyboard-friendly UI components by default.",
    ],
  },
  {
    role: "Senior Frontend Engineer",
    timeframe: "2021 – 2024",
    metrics: "Reduced regressions and improved release confidence",
    impacts: [
      "Introduced shared patterns for forms, navigation, and content-driven pages.",
      "Partnered across design and engineering to simplify UI primitives.",
    ],
  },
];

export const resumeContent: ResumeContent = {
  name: "Dan Odea",
  title: "Staff Frontend Engineer",
  location: "",
  summary:
    "Staff-level frontend engineer focused on clean, accessible, maintainable UI and long-term delivery velocity.",
  details: [
    { label: "Portfolio", value: "danodeamedia.com", href: "/portfolio" },
    { label: "Email", value: "Contact via form", href: "/#contact" },
  ],
  experience: impactTimeline,
  projects: [
    {
      title: "Selected work",
      bullets: [
        "Next.js App Router architecture and component boundaries",
        "Design tokens + CSS Modules styling foundation",
        "Accessible navigation and forms by default",
      ],
    },
  ],
};
