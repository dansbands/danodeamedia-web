"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { projects } from "@/content/projects";
import styles from "./WorkCarousel.module.css";

function clampIndex(index: number, max: number) {
  if (max <= 0) return 0;
  return (index % max + max) % max;
}

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function WorkCarousel() {
  const carouselId = useId();
  const reduced = useMemo(() => prefersReducedMotion(), []);
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const total = projects.length;
  const active = projects[activeIndex];

  const goPrev = useCallback(() => {
    setActiveIndex((i) => clampIndex(i - 1, total));
  }, [total]);

  const goNext = useCallback(() => {
    setActiveIndex((i) => clampIndex(i + 1, total));
  }, [total]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };

    root.addEventListener("keydown", onKeyDown);
    return () => root.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev]);

  return (
    <section id="work" className={styles.section} aria-label="Work">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title}>Work</h2>
          <p className={styles.subtitle}>Keyboard-friendly carousel driven by content.</p>
        </header>

        <div
          ref={rootRef}
          className={styles.carousel}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Projects"
          aria-describedby={`${carouselId}-hint`}
        >
          <p id={`${carouselId}-hint`} className={styles.hint}>
            Use Left/Right arrow keys to switch slides.
          </p>

          <div className={styles.controls}>
            <button type="button" className={styles.button} onClick={goPrev} aria-label="Previous project">
              Prev
            </button>
            <div className={styles.status} aria-live="polite">
              {activeIndex + 1} / {total}
            </div>
            <button type="button" className={styles.button} onClick={goNext} aria-label="Next project">
              Next
            </button>
          </div>

          <div
            className={reduced ? styles.trackReduced : styles.track}
            style={{ transform: `translateX(${-activeIndex * 100}%)` }}
          >
            {projects.map((p, i) => (
              <article
                key={p.slug}
                className={styles.slide}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${total}: ${p.title}`}
              >
                <h3 className={styles.slideTitle}>{p.title}</h3>
                <p className={styles.slideBody}>{p.description}</p>
                <p className={styles.tags}>{p.tags.join(" · ")}</p>
              </article>
            ))}
          </div>

          <div className={styles.srOnly} aria-live="polite">
            {active ? `Showing ${active.title}` : ""}
          </div>
        </div>
      </div>
    </section>
  );
}
