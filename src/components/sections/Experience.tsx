"use client";

import { useEffect, useMemo, useRef } from "react";
import { impactTimeline } from "@/content/resume";
import styles from "./Experience.module.css";

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Experience() {
  const reduced = useMemo(() => prefersReducedMotion(), []);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (reduced) return;
    const root = rootRef.current;
    if (!root) return;

    const cards = Array.from(root.querySelectorAll<HTMLElement>(`[data-impact-card="true"]`));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.inview = "true";
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 }
    );

    for (const card of cards) observer.observe(card);
    return () => observer.disconnect();
  }, [reduced]);

  return (
    <section id="experience" className={styles.section} aria-label="Experience">
      <div className={styles.inner} ref={rootRef}>
        <header className={styles.header}>
          <h2 className={styles.title}>Impact Timeline</h2>
          <p className={styles.subtitle}>Roles and outcomes, optimized for signal.</p>
        </header>

        <div className={styles.grid}>
          {impactTimeline.map((card) => (
            <article
              key={`${card.role}-${card.timeframe}`}
              className={styles.card}
              data-impact-card="true"
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.role}>{card.role}</h3>
                <p className={styles.timeframe}>{card.timeframe}</p>
              </div>
              <p className={styles.metrics}>{card.metrics}</p>
              <ul className={styles.list}>
                {card.impacts.map((impact) => (
                  <li key={impact}>{impact}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
