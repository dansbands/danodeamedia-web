import { projects } from "@/content/projects";
import styles from "./page.module.css";

export const metadata = {
  title: "Portfolio",
};

export default function PortfolioPage() {
  return (
    <main>
      <div className={styles.container}>
        <h1 className={styles.h1}>Portfolio</h1>
        <p className={styles.lede}>
          Selected work and projects.
        </p>

        <ul className={styles.list}>
          {projects.map((p) => (
            <li
              key={p.slug}
              className={styles.card}
            >
              <h2 className={styles.h2}>{p.title}</h2>
              <p className={styles.body}>{p.description}</p>
              <p className={styles.meta}>
                {p.tags.join(" · ")}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
