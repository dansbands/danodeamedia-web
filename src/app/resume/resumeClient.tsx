"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import styles from "./page.module.css";

function Icon({ children, viewBox }: { children: ReactNode; viewBox: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
    >
      {children}
    </svg>
  );
}

function PrintIcon() {
  return (
    <Icon viewBox="0 0 512 512">
      <path
        fill="currentColor"
        d="M128 0C92.7 0 64 28.7 64 64l0 96 64 0 0-96 226.7 0L384 93.3l0 66.7 64 0 0-66.7c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0L128 0zM384 352l0 32 0 64-256 0 0-64 0-16 0-16 256 0zm64 32l32 0c17.7 0 32-14.3 32-32l0-96c0-35.3-28.7-64-64-64L64 192c-35.3 0-64 28.7-64 64l0 96c0 17.7 14.3 32 32 32l32 0 0 64c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-64z"
      />
    </Icon>
  );
}

function AddressCardIcon() {
  return (
    <Icon viewBox="0 0 576 512">
      <path
        fill="currentColor"
        d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 256l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16L80 384c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
      />
    </Icon>
  );
}

function EnvelopeIcon() {
  return (
    <Icon viewBox="0 0 512 512">
      <path
        fill="currentColor"
        d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
      />
    </Icon>
  );
}

function GlobeIcon() {
  return (
    <Icon viewBox="0 0 512 512">
      <path
        fill="currentColor"
        d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"
      />
    </Icon>
  );
}

function PhoneIcon() {
  return (
    <Icon viewBox="0 0 512 512">
      <path
        fill="currentColor"
        d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
      />
    </Icon>
  );
}

function LinkedInIcon() {
  return (
    <Icon viewBox="0 0 448 512">
      <path
        fill="currentColor"
        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
      />
    </Icon>
  );
}

function GitHubIcon() {
  return (
    <Icon viewBox="0 0 496 512">
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"
      />
    </Icon>
  );
}

function HouseIcon() {
  return (
    <Icon viewBox="0 0 576 512">
      <path
        fill="currentColor"
        d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
      />
    </Icon>
  );
}

function BriefcaseIcon() {
  return (
    <Icon viewBox="0 0 512 512">
      <path
        fill="currentColor"
        d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z"
      />
    </Icon>
  );
}

function GraduationCapIcon() {
  return (
    <Icon viewBox="0 0 640 512">
      <path
        fill="currentColor"
        d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"
      />
    </Icon>
  );
}

function GearIcon() {
  return (
    <Icon viewBox="0 0 512 512">
      <path
        fill="currentColor"
        d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
      />
    </Icon>
  );
}

type Experience = {
  company: string;
  title: string;
  dates: string;
  bullets: string[];
  slim?: boolean;
};

const workExperience: Experience[] = [
  {
    company: "TD Bank / TD Securities",
    title: "Senior Software Engineer",
    dates: "February 2025 - present",
    bullets: [
      "Architecting enterprise-scale multi-step financial flows, implementing complex state management and API-driven account validation for high-security environments",
      "Engineered a modular, reusable form-filler utility to automate edit workflows, significantly reducing technical debt and streamlining state transitions",
      "Leading the transition to Vitest/Testing Library, establishing rigorous code coverage standards and resolving long-standing legacy architecture issues",
      "Orchestrating cross-functional delivery between product analysts and backend teams to ensure high-fidelity mock data and robust API contracts",
      "Mentoring developers on repository architecture and scalable Git strategies to maintain enterprise-grade code quality",
    ],
  },
  {
    company: "Care/of",
    title: "Software Engineer (Full Stack / CMS)",
    dates: "June 2022 - July 2024",
    bullets: [
      "Owned the end-to-end technical lifecycle of a 350+ page Article ecosystem, driving organic growth for a major eCommerce platform",
      "Developed a custom Markdown-based 'Article Builder' tool, empowering non-technical stakeholders to deploy complex HTML modules with zero-code overhead",
      "Architected React Portals to inject interactive, stateful components into static CMS-rendered content, bridging the gap between performance and interactivity",
      "Contributed to high-traffic eCommerce infrastructure focused on conversion optimization and seamless user journeys",
    ],
  },
  {
    company: "Comcast Business",
    title: "Technical Lead / Senior Software Engineer",
    dates: "June 2021 - June 2022",
    bullets: [
      "Technical Lead for the Internet Dashboard launch, successfully scaling the platform to General Availability for 1.8M enterprise users",
      "Directed a front-end team of three, overseeing the implementation of high-stakes features including the integrated Internet Speed Test",
      "Implemented XState for finite state machine management, modeling complex asynchronous transitions (idle, loading, success, error) to ensure system reliability",
      "Synthesized business requirements with technical constraints to deliver a high-performance, resilient user experience",
    ],
  },
  {
    company: "American Express",
    title: "Software Engineer",
    dates: "June 2020 - June 2021",
    bullets: [
      "Developed the architectural Proof of Concept (PoC) to successfully bridge and migrate legacy Angular modules into a modern React ecosystem",
      "Maintained and optimized financial applications within a Redux/React architecture, ensuring 99.9% uptime for critical banking tools",
      "Mastered legacy frameworks rapidly to ensure zero-interruption service during massive platform migrations",
    ],
  },
  {
    company: "AllSocial",
    title: "Senior Software Engineer",
    dates: "Dec 2019 - Apr 2020",
    slim: true,
    bullets: [
      "Architected a greenfield social media platform featuring complex real-time interactions and high-concurrency data flows",
      "Collaborated directly with the Head of UX to translate high-fidelity designs into a responsive, performant web application",
      "Operated autonomously in a high-speed, distributed team environment to meet aggressive market-entry deadlines",
    ],
  },
  {
    company: "Attck / TimeRepublik",
    title: "Front End Developer",
    dates: "May 2019 - Dec 2019",
    slim: true,
    bullets: [
      "Rapidly developed high-fidelity interactive applications for diverse agency clients, prioritizing pixel-perfect UI and performance",
      "Managed the full front-end lifecycle from design handoff to QA and deployment within a fast-paced agency setting",
    ],
  },
  {
    company: "Crane.ai",
    title: "React Developer",
    dates: "April 2018 - Feb 2019",
    slim: true,
    bullets: [
      "Engineered a MERN-stack AI Website Builder that secured multiple 'Product of the Month' accolades on ProductHunt",
      "Designed and deployed the administrative dashboard, converting visual specs into a functional full-stack management tool",
    ],
  },
];

const education: Experience[] = [
  {
    company: "Rutgers University",
    title: "Bachelor of Arts in Music (Violin Performance)",
    dates: "2007",
    bullets: [
      "Dual focus on technical mastery and pedagogical theory (K-12 Teaching Certificate)",
      "Leadership roles in various ensembles, emphasizing multi-instrumental proficiency and cross-functional coordination",
    ],
  },
  {
    company: "General Assembly / Flatiron School",
    title: "UX Design & Software Engineering Immersives",
    dates: "2017-2018",
    bullets: [
      "Accelerated pivot into technology, bridging the gap between human-centric design and technical implementation",
    ],
  },
];

const otherWork: Experience[] = [
  {
    company: "Entrepreneurship: Dan's Music Studio",
    title: "Founder / CEO / Lead Instructor",
    dates: "2006 - Present",
    bullets: [
      "Founded and scaled a non-tech enterprise to 7-figure ARR, managing all aspects of P&L, operations, and growth",
      "Led a team of 20+ instructors and support staff, scaling student enrollment by 660% within a 24-month period",
      "Leveraged polymathic background to deliver instruction across 10 instruments, maintaining high retention through personalized learning paths",
    ],
  },
  {
    company: "Professional Musical Performance & Production",
    title: "Band Leader / Principal Performer",
    dates: "2010 - 2020",
    bullets: [
      "Directed high-stakes musical productions across 1,000+ paid professional engagements, managing up to 3 simultaneous venue residencies",
      "Performed and collaborated with Grammy winners and Rock & Roll Hall of Fame inductees, demonstrating elite-level performance under pressure",
      "Managed end-to-end logistics, contract negotiation, and personnel for a locally touring ensemble, ensuring consistent delivery in high-pressure environments",
    ],
  },
  {
    company: "Professional Musical Performance & Production",
    title: "Band Leader / Principal Performer",
    dates: "2010 - 2020",
    bullets: [
      "Directed 1,000+ professional engagements, managing up to 3 simultaneous venue residencies and end-to-end logistics for a touring ensemble",
      "Collaborated on-stage with Grammy winners and Rock & Roll Hall of Fame inductees, maintaining elite performance standards under extreme pressure",
    ],
  },
  {
    company: "Edison Middle School",
    title: "Director of String Orchestra",
    dates: "2008-2015",
    bullets: [
      "Managed 160 students across 4 ensembles, overseeing complex logistical and educational workflows",
      "Pioneered the integration of digital curriculum tools (SmartMusic, Sibelius) to modernize traditional music education",
    ],
  },
];

const skillIcons = [
  "/dam/icons/Express.d0b756c0.svg",
  "/dam/icons/MongoDB.ebddca79.svg",
  "/dam/icons/MUI.f519b238.svg",
  "/dam/icons/Next.92390f75.svg",
  "/dam/icons/Node.ed3d651c.svg",
  "/dam/icons/Postgres.053788d5.svg",
  "/dam/icons/Rails.00e35818.svg",
  "/dam/icons/React.0e664552.svg",
  "/dam/icons/Redux.2aca4c41.svg",
  "/dam/icons/StyledComponents.3f5d0a6b.svg",
  "/dam/icons/TypeScript.fe3543ba.svg",
  "/dam/icons/xState.fbc442d0.svg",
];

function ExperienceBlock({ exp }: { exp: Experience }) {
  return (
    <div className={exp.slim ? styles.bodySectionSlim : styles.bodySection}>
      <div className={styles.sectionHeader}>
        <div className={exp.slim ? styles.sectionHeaderLeftColumn : styles.sectionHeaderLeft}>
          <div className={styles.companyName}>{exp.company}</div>
          <div className={styles.jobTitle}>{exp.title}</div>
        </div>
        <div className={exp.slim ? styles.dates : undefined}>{exp.dates}</div>
      </div>
      <ul className={styles.jobResponsibilities}>
        {exp.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ResumeClient() {
  const [isContactCollapsed, setIsContactCollapsed] = useState(false);
  const [isWorkCollapsed, setIsWorkCollapsed] = useState(false);
  const [isEducationCollapsed, setIsEducationCollapsed] = useState(false);
  const [isOtherWorkCollapsed, setIsOtherWorkCollapsed] = useState(false);
  const [isSkillsCollapsed, setIsSkillsCollapsed] = useState(false);

  const contactToggleText = useMemo(() => (isContactCollapsed ? "+" : "−"), [isContactCollapsed]);
  const workToggleText = useMemo(() => (isWorkCollapsed ? "+" : "−"), [isWorkCollapsed]);
  const educationToggleText = useMemo(
    () => (isEducationCollapsed ? "+" : "−"),
    [isEducationCollapsed],
  );
  const otherWorkToggleText = useMemo(
    () => (isOtherWorkCollapsed ? "+" : "−"),
    [isOtherWorkCollapsed],
  );
  const skillsToggleText = useMemo(() => (isSkillsCollapsed ? "+" : "−"), [isSkillsCollapsed]);

  return (
    <>
      <div className={styles.printContainer}>
        <button className={styles.printButton} type="button" onClick={() => window.print()}>
          Print Resume
          <span className={styles.iconMarginLeft}>
            <PrintIcon />
          </span>
        </button>
      </div>

      <div className={styles.resume}>
        <div className={styles.resumeFrame}>
          <div className={styles.resumeHeader}>
            <div className={styles.resumeHeaderLeft}>
              <Image
                alt="dan pic"
                src="/dam/images/Santorini%20Circle.9e6f1273.png"
                width={114}
                height={120}
              />
              <div className={styles.resumeHeaderLeftText}>
                <h1>Dan</h1>
                <h1>O&apos;Dea</h1>
              </div>
            </div>
            <div className={styles.resumeHeaderRight}>
              <h2>Senior Front End Engineer</h2>
              <h3>My Unique Experience is Exactly What You Need</h3>
            </div>
          </div>

          <div className={styles.resumeSubheader}>
            <div
              className={styles.contactHeader}
              role="button"
              tabIndex={0}
              onClick={() => setIsContactCollapsed((v) => !v)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setIsContactCollapsed((v) => !v);
              }}
            >
              <div className={styles.iconCircleLg}>
                <AddressCardIcon />
              </div>
              <span>CONTACT</span>
              <span className={styles.toggleButton}>{contactToggleText}</span>
            </div>

            <div
              className={`${styles.subheaderLinks} ${isContactCollapsed ? styles.collapsed : ""}`}
            >
              <div className={styles.subheaderSection}>
                <div className={styles.subheaderSectionContent}>
                  <div className={styles.iconCircle}>
                    <EnvelopeIcon />
                  </div>
                  <a href="mailto:danodeawebdev@gmail.com">danodeawebdev@gmail.com</a>
                </div>
              </div>

              <div className={styles.subheaderSection}>
                <div className={styles.subheaderSectionContent}>
                  <div className={styles.iconCircle}>
                    <GlobeIcon />
                  </div>
                  <a href="https://danodeamedia.com">danodeamedia.com</a>
                </div>
              </div>

              <div className={styles.subheaderSection}>
                <div className={styles.subheaderSectionContent}>
                  <div className={styles.iconCircle}>
                    <PhoneIcon />
                  </div>
                  <a href="tel:+19734864884">973-486-4884</a>
                </div>
              </div>

              <div className={styles.subheaderSection}>
                <div className={styles.subheaderSectionContent}>
                  <div className={styles.iconCircle}>
                    <LinkedInIcon />
                  </div>
                  <a href="https://linkedin.com/in/dan-odea">linkedin.com/in/dan-odea</a>
                </div>
              </div>

              <div className={styles.subheaderSection}>
                <div className={styles.subheaderSectionContent}>
                  <div className={styles.iconCircle}>
                    <GitHubIcon />
                  </div>
                  <a href="https://www.github.com/dansbands">github.com/dansbands</a>
                </div>
              </div>

              <div className={styles.subheaderSection}>
                <div className={styles.subheaderSectionContent}>
                  <div className={styles.iconCircle}>
                    <HouseIcon />
                  </div>
                  <span>Jersey City, NJ</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.resumeBody}>
            <div
              className={styles.bodyHeader}
              role="button"
              tabIndex={0}
              onClick={() => setIsWorkCollapsed((v) => !v)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setIsWorkCollapsed((v) => !v);
              }}
            >
              <div className={styles.iconCircleLg}>
                <BriefcaseIcon />
              </div>
              <span>WORK EXPERIENCE</span>
              <span className={styles.toggleButton}>{workToggleText}</span>
            </div>

            <div
              className={`${styles.workExperienceList} ${isWorkCollapsed ? styles.collapsed : ""}`}
            >
              {workExperience.map((exp) => (
                <ExperienceBlock key={`${exp.company}-${exp.dates}`} exp={exp} />
              ))}
            </div>

            <div className={styles.footerSection}>
              <div className={styles.footerSubSection}>
                <div
                  className={styles.subsectionHeader}
                  role="button"
                  tabIndex={0}
                  onClick={() => setIsEducationCollapsed((v) => !v)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      setIsEducationCollapsed((v) => !v);
                  }}
                >
                  <div className={styles.iconCircleMd}>
                    <GraduationCapIcon />
                  </div>
                  <div className={styles.subsectionTitle}>Education</div>
                  <span className={styles.toggleButton}>{educationToggleText}</span>
                </div>

                <div
                  className={`${styles.subsectionBody} ${
                    isEducationCollapsed ? styles.collapsed : ""
                  }`}
                >
                  {education.map((exp) => (
                    <ExperienceBlock key={`${exp.company}-${exp.dates}`} exp={exp} />
                  ))}
                </div>
              </div>

              <div className={styles.footerSubSection}>
                <div
                  className={styles.subsectionHeader}
                  role="button"
                  tabIndex={0}
                  onClick={() => setIsOtherWorkCollapsed((v) => !v)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setIsOtherWorkCollapsed((v) => !v);
                  }}
                >
                  <div className={styles.iconCircleMd}>
                    <BriefcaseIcon />
                  </div>
                  <div className={styles.subsectionTitle}>Other Work</div>
                  <span className={styles.toggleButton}>{otherWorkToggleText}</span>
                </div>

                <div
                  className={`${styles.subsectionBody} ${
                    isOtherWorkCollapsed ? styles.collapsed : ""
                  }`}
                >
                  {otherWork.map((exp) => (
                    <ExperienceBlock key={`${exp.company}-${exp.dates}-${exp.title}`} exp={exp} />
                  ))}
                </div>
              </div>

              <div className={styles.footerSubSection}>
                <div
                  className={styles.subsectionHeader}
                  role="button"
                  tabIndex={0}
                  onClick={() => setIsSkillsCollapsed((v) => !v)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setIsSkillsCollapsed((v) => !v);
                  }}
                >
                  <div className={styles.iconCircleMd}>
                    <GearIcon />
                  </div>
                  <div className={styles.subsectionTitle}>Skills</div>
                  <span className={styles.toggleButton}>{skillsToggleText}</span>
                </div>

                <div
                  className={`${styles.subsectionBody} ${isSkillsCollapsed ? styles.collapsed : ""}`}
                >
                  <div className={styles.iconGrid}>
                    {skillIcons.map((src, idx) => (
                      <div key={src} className={styles.iconContainer}>
                        <Image alt={`icon-${idx}`} src={src} width={40} height={40} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
