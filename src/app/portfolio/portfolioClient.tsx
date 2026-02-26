"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./page.module.css";

type PortfolioItem = {
  key: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  date: string;
  summary: string;
  details: {
    paragraph: string;
    bullets?: string[];
    links?: Array<{ label: string; href: string }>;
  };
};

const portfolioItems: PortfolioItem[] = [
  {
    key: "ai-todo-list",
    imageSrc: "/dam/images/ai-todo-list.7b59f569.png",
    imageAlt: "AI Todo List project screenshot",
    title: "AI Todo List",
    subtitle: "MERN + OpenAI-powered task planning",
    date: "May 2024",
    summary:
      "A full-stack to-do app where each task can generate an AI-powered plan, curated resources, and a suggested Google search query.",
    details: {
      paragraph:
        "Built with a React client and an Express API backed by MongoDB. Users can sign up / sign in, manage a personal task list, and expand any task to call an OpenAI Chat Completions endpoint that returns a structured JSON response (plan + links + search string), which is then persisted on the task.",
      bullets: [
        "+ Technologies: React, Node.js, Express, MongoDB, OpenAI API, JWT auth",
        "+ Sign up / sign in with JWT + protected routes",
        "+ Create, complete, edit, and delete tasks with a responsive UI",
        "+ Per-task AI assistant generates a plan + resources + search term",
        "+ Persists AI responses to MongoDB for later review",
        "+ Light/dark mode toggle",
      ],
      links: [
        {
          label: "Live App",
          href: "https://dansbands.github.io/ai-todo-list/#/sign-in",
        },
        {
          label: "GitHub",
          href: "https://github.com/dansbands/ai-todo-list",
        },
        {
          label: "Roadmap",
          href: "https://github.com/users/dansbands/projects/1",
        },
      ],
    },
  },
  {
    key: "danodeamedia",
    imageSrc: "/dam/images/danodeamedia.7a369ed7.png",
    imageAlt: "This Website project screenshot",
    title: "This Website",
    subtitle: "Web Development",
    date: "May 2017, March 2025",
    summary:
      "I built this site as a place to demonstrate my skills with HTML5, CSS3, JavaScript and related libraries like jQuery. The design is based on one I adapted from a template on Wix.com, a drag-and-drop editor.",
    details: {
      paragraph:
        "My initial goal was to rebuild my Wix site using purely the development skills I had at the time. As it has progressed, I have improved the experience by adding a fixed global navigation element, and by repositioning content to prioritize the needs of my users. I hope to continue to demonstrate good User Experience principles through my design as I learn new skills and attempt to incorporate them. Keep in mind, it is a work in progress. Enjoy!",
      bullets: ["+ Technologies: NextJS, EmailJS"],
      links: [
        {
          label: "Original Wix Site",
          href: "https://www.danodeamedia.com",
        },
      ],
    },
  },
];

function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

function PortfolioRow({ item }: { item: PortfolioItem }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const linksInline = useMemo(() => {
    if (!item.details.links?.length) return null;
    return item.details.links.map((l, idx) => {
      const external = isExternal(l.href);
      return (
        <span key={l.href}>
          {idx > 0 ? " | " : null}
          <a
            href={l.href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={styles.viewLink}
          >
            {l.label}
          </a>
        </span>
      );
    });
  }, [item.details.links]);

  return (
    <div className={styles.portfolioRow}>
      <div className={styles.colMedia}>
        <Image
          alt={item.imageAlt}
          src={item.imageSrc}
          width={1315}
          height={856}
          className={styles.portfolioImage}
        />
      </div>
      <div className={styles.colText}>
        <h2>{item.title}</h2>
        <h3>{item.subtitle}</h3>
        <h6 className={styles.silver}>{item.date}</h6>
        <p className={styles.p1}>{item.summary}</p>

        <div className={`${styles.p21} ${!isExpanded ? styles.collapsed : ""}`}>
          <p className={styles.p1}>{item.details.paragraph}</p>
          {item.details.bullets?.length ? (
            <ul>
              {item.details.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          ) : null}
          {linksInline ? <p>{linksInline}</p> : null}
        </div>

        <button
          type="button"
          className={styles.readMore}
          onClick={() => setIsExpanded((v) => !v)}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}

export default function PortfolioClient() {
  return (
    <div className={styles.jumbotron} id="portfolio">
      <div className={styles.main2}>
        <div className={styles.portfolioContainer}>
          {portfolioItems.map((item) => (
            <PortfolioRow key={item.key} item={item} />
          ))}

          <div className={styles.portfolioWorkLink}>
            <Link href="/work">See full case studies →</Link>
          </div>

          <div className={styles.deployedRow}>
            <div className={styles.deployedInner}>
              <h3>Deployed Projects</h3>
              <div>Yet to be documented</div>

              <div className={styles.projectCard}>
                <div>AI Todo List</div>
                <div>
                  {" - "}
                  <a href="https://github.com/dansbands/ai-todo-list">Repo</a>
                </div>
                <div>
                  {" - "}
                  <a href="https://dansbands.github.io/ai-todo-list">Live App</a>
                </div>
              </div>

              <div className={styles.projectCard}>
                <div>LincolnBio</div>
                <div>
                  {" - "}
                  <a href="https://github.com/dansbands/lincolnbio">Repo</a>
                </div>
                <div>
                  {" - "}
                  <a href="https://dansbands.github.io/lincolnbio">Live App</a>
                </div>
              </div>

              <div className={styles.projectCard}>
                <div>Star Wars 2024</div>
                <div>
                  {" - "}
                  <a href="https://github.com/dansbands/star-wars-2024">Repo</a>
                </div>
                <div>
                  {" - "}
                  <a href="https://dansbands.github.io/star-wars-2024">Live App</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
