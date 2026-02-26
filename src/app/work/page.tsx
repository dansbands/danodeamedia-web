import Link from "next/link";
import styles from "./work.module.css";

export const metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <div className={`${styles.jumbotron} ${styles.workPage}`} id="work">
      <div className={styles.main2}>
        <div className={styles.workIndex}>
          <h1 className={styles.workIndexTitle}>Work</h1>
          <p className={styles.workIndexIntro}>
            Case studies that show how I build: constraints, tradeoffs, results, and what I’d
            do next.
          </p>

          <div className={styles.workIndexList}>
            <div className={styles.workIndexCard}>
              <div className={styles.workIndexCardHeader}>
                <h2 className={styles.workIndexCardTitle}>
                  <Link href="/work/payment-form-flow">Multi-step payments form flow</Link>
                </h2>
                <span className={styles.workIndexStatus}>Draft</span>
              </div>
              <p className={styles.workIndexCardBlurb}>
                Refined a nine-step internal payments flow: validation clarity, accessibility, and
                safer state transitions.
              </p>
              <Link className={styles.workIndexCardLink} href="/work/payment-form-flow">
                Read case study →
              </Link>
            </div>

            <div className={styles.workIndexCard}>
              <div className={styles.workIndexCardHeader}>
                <h2 className={styles.workIndexCardTitle}>
                  <Link href="/work/careof-article-builder">
                    Care/of — Article builder &amp; publishing
                  </Link>
                </h2>
                <span className={styles.workIndexStatus}>Draft</span>
              </div>
              <p className={styles.workIndexCardBlurb}>
                Content platform work: authoring UX, performance, and reliability in production
                workflows.
              </p>
              <Link className={styles.workIndexCardLink} href="/work/careof-article-builder">
                Read case study →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
