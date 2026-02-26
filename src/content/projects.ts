export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  imageSrc?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "migration",
    title: "Next.js Migration",
    description:
      "Modernized routing and component architecture for long-term maintainability.",
    tags: ["Next.js", "TypeScript", "App Router"],
    featured: true,
  },
  {
    slug: "design-system",
    title: "Design Tokens + CSS Modules",
    description:
      "Introduced a token-based styling system with minimal global CSS and strong component boundaries.",
    tags: ["CSS Variables", "CSS Modules", "Accessibility"],
    featured: true,
  },
  {
    slug: "contact",
    title: "Contact Flow",
    description:
      "Implemented a secure contact form with server-side validation and transactional email.",
    tags: ["API Routes", "Validation", "Resend"],
    featured: true,
  },
];
