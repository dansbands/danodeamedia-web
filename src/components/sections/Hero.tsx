import Link from "next/link";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-label="Intro">
      <div className={styles.inner}>
        <p className={styles.kicker}>Staff Frontend Engineer</p>
        <h1 className={styles.title}>I build clean, accessible, maintainable web UIs.</h1>
        <p className={styles.subtitle}>
          Next.js App Router, TypeScript, CSS Modules, and design tokens — with a focus on long-term velocity.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primary} href="/#contact">
            Contact
          </Link>
          <Link className={styles.secondary} href="/portfolio">
            View work
          </Link>
        </div>
      </div>
    </section>
  );
}
