import { impactTimeline } from "@/content/resume";
import styles from "./page.module.css";

export const metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <main>
      <div className={styles.container}>
        <h1 className={styles.h1}>Resume</h1>
        <p className={styles.lede}>
          Impact-focused highlights.
        </p>

        <section className={styles.section}>
          {impactTimeline.map((card) => (
            <article
              key={`${card.role}-${card.timeframe}`}
              className={styles.card}
            >
              <header>
                <h2 className={styles.h2}>{card.role}</h2>
                <p className={styles.meta}>{card.timeframe}</p>
              </header>
              <p className={styles.body}>{card.metrics}</p>
              <ul className={styles.bullets}>
                {card.impacts.map((impact) => (
                  <li key={impact}>{impact}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
