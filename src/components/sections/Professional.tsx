"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Professional.module.css";

type Skill = {
  label: string;
  pct: 95 | 85;
  variant: "inner" | "inner2" | "inner3";
};

const skills: Skill[] = [
  { label: "JavaScript", pct: 95, variant: "inner" },
  { label: "HTML5", pct: 95, variant: "inner2" },
  { label: "CSS3", pct: 95, variant: "inner3" },
  { label: "Express", pct: 85, variant: "inner" },
  { label: "React", pct: 95, variant: "inner3" },
  { label: "NextJS", pct: 95, variant: "inner2" },
  { label: "Figma", pct: 85, variant: "inner" },
];

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Professional() {
  const reduced = useMemo(() => prefersReducedMotion(), []);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(() => reduced);

  useEffect(() => {
    if (reduced) return;

    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, [reduced]);

  return (
    <section id="professional" className={styles.professional} aria-label="Professional">
      <div className={styles.anchor} />
      <div className={styles.container} ref={rootRef}>
        <h1 className={styles.title}>
          <span className={styles.gray}>01</span> PROFESSIONAL
        </h1>
        <h2 className={styles.subtitle}>MY KNOWLEDGE LEVEL IN SOFTWARE</h2>

        <div className={visible ? styles.visible : styles.hidden}>
          <div className={styles.skills}>
            <div className={styles.apps}>
              {skills.map((s) => (
                <p key={s.label}>{s.label}</p>
              ))}
            </div>

            <div className={styles.grid}>
              {skills.map((s) => (
                <div
                  key={`${s.label}-${s.pct}`}
                  className={
                    s.pct === 95
                      ? `${styles.bar} ${styles.pct95}`
                      : `${styles.bar} ${styles.pct85}`
                  }
                >
                  <div
                    className={
                      s.variant === "inner"
                        ? styles.inner
                        : s.variant === "inner2"
                          ? styles.inner2
                          : styles.inner3
                    }
                  />
                  <div className={styles.right}>
                    <p>{s.pct}%</p>
                  </div>
                </div>
              ))}

              <div className={`${styles.vDivider} ${styles.one}`} />
              <div className={`${styles.vDivider} ${styles.two}`} />
              <div className={`${styles.vDivider} ${styles.three}`} />

              <div className={styles.scale}>
                <p className={styles.zero}>0%</p>
                <p className={styles.oneText}>25%</p>
                <p className={styles.twoText}>50%</p>
                <p className={styles.threeText}>75%</p>
                <p className={styles.fourText}>100%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
