export type ImpactCard = {
  role: string;
  timeframe: string;
  metrics: string;
  impacts: string[];
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
