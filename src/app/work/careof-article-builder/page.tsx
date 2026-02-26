import Link from "next/link";
import styles from "../work.module.css";

export const metadata = {
  title: "Care/of — Article builder & publishing",
};

export default function CareofArticleBuilderCaseStudyPage() {
  return (
    <div className={`${styles.jumbotron} ${styles.workPage}`} id="work">
      <div className={styles.main2}>
        <div className={styles.caseStudy}>
          <div className={styles.caseStudyBreadcrumbs}>
            <Link href="/work">← All case studies</Link>
          </div>

          <h1 className={styles.caseStudyTitle}>Care/of — Article builder &amp; publishing</h1>
          <h2 className={styles.caseStudySubtitle}>
            Anonymized case study (selected details redacted)
          </h2>
          <div className={styles.caseStudyMeta}>
            Role: Frontend Engineer • Stack: React/TypeScript • Scope: authoring UX + reliability
          </div>
          <p className={styles.caseStudySummary}>
            Internal tools and publishing flows tend to have outsized ROI: they’re used daily,
            and small improvements compound. This page is scaffolded; we’ll fill it with
            specific problems, tradeoffs, and outcomes.
          </p>

          <section className={styles.caseStudyBlock}>
            <h3>Checklist (gather these items)</h3>
            <ul className={styles.caseStudyChecklist}>
              <li>
                <input type="checkbox" readOnly />
                <span>Who used it + how often</span>
              </li>
              <li>
                <input type="checkbox" readOnly />
                <span>Pain points before (time-to-publish, errors, brittleness)</span>
              </li>
              <li>
                <input type="checkbox" readOnly />
                <span>Key workflows (draft, preview, publish, rollback)</span>
              </li>
              <li>
                <input type="checkbox" readOnly />
                <span>Data model + content validation</span>
              </li>
              <li>
                <input type="checkbox" readOnly />
                <span>Reliability plan (autosave, conflict handling, retries)</span>
              </li>
              <li>
                <input type="checkbox" readOnly />
                <span>Performance considerations (editor perf, bundle size)</span>
              </li>
              <li>
                <input type="checkbox" readOnly />
                <span>Observability (logs/metrics, error reporting)</span>
              </li>
              <li>
                <input type="checkbox" readOnly />
                <span>Testing strategy and release process</span>
              </li>
              <li>
                <input type="checkbox" readOnly />
                <span>Outcome + measurable impact</span>
              </li>
            </ul>
          </section>

          <section className={styles.caseStudyBlock}>
            <h3>Highlights</h3>
            <ul className={styles.caseStudyBullets}>
              <li>Improved author confidence with better previews and validation.</li>
              <li>Reduced publishing friction by tightening core workflows.</li>
              <li>Built guardrails to prevent common content issues.</li>
            </ul>
          </section>

          <section className={styles.caseStudyBlock}>
            <h3>The problem</h3>
            <div className={styles.caseStudyBody}>
              <p>
                Describe the publishing workflow, why it was painful, and what constraints
                mattered most.
              </p>
            </div>
          </section>

          <section className={styles.caseStudyBlock}>
            <h3>Users &amp; workflows</h3>
            <div className={styles.caseStudyBody}>
              <ul>
                <li>Authors and editors</li>
                <li>Drafting, previewing, publishing</li>
                <li>Failure modes and recovery</li>
              </ul>
            </div>
          </section>

          <section className={styles.caseStudyBlock}>
            <h3>Approach</h3>
            <div className={styles.caseStudyBody}>
              <ul>
                <li>Make the happy path fast and obvious</li>
                <li>Add guardrails where mistakes are common</li>
                <li>Design for reliability (autosave, retries, conflict handling)</li>
              </ul>
            </div>
          </section>

          <section className={styles.caseStudyBlock}>
            <h3>What I’d do next</h3>
            <div className={styles.caseStudyBody}>
              <ul>
                <li>Add richer analytics around publishing latency and failures</li>
                <li>Audit accessibility in the editor UI</li>
                <li>Document operational runbooks for common issues</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
