import Link from "next/link";
import styles from "../work.module.css";

export const metadata = {
  title: "Multi-step payments form flow",
};

export default function PaymentFormFlowCaseStudyPage() {
  return (
    <div className={`${styles.jumbotron} ${styles.workPage}`} id="work">
      <div className={styles.main2}>
        <div className={styles.caseStudy}>
          <div className={styles.caseStudyBreadcrumbs}>
            <Link href="/work">← All case studies</Link>
          </div>

          <h1 className={styles.caseStudyTitle}>Multi-step payments form flow</h1>
          <h2 className={styles.caseStudySubtitle}>
            Confidential financial institution (internal app)
          </h2>
          <div className={styles.caseStudyMeta}>
            Timeframe: Apr 25 – May 26 • Role: Senior Frontend Engineer (Contract) • Users:
            Hundreds across ~40 branches
          </div>
          <p className={styles.caseStudySummary}>
            Refined and stabilized a nine-step internal payments flow, improving validation
            clarity, accessibility, and error visibility in a compliance-sensitive environment.
          </p>

          <section className={styles.caseStudyBlock}>
            <h3>Checklist (gather these items)</h3>
            <ul className={styles.caseStudyChecklist}>
              <li>
                <input type="checkbox" readOnly checked />
                <span>Problem statement in 1–2 sentences</span>
              </li>
              <li>
                <input type="checkbox" readOnly checked />
                <span>Constraints (security, compliance, timelines, dependencies)</span>
              </li>
              <li>
                <input type="checkbox" readOnly />
                <span>Flow diagram or step list</span>
              </li>
              <li>
                <input type="checkbox" readOnly checked />
                <span>Validation rules + tricky edge cases</span>
              </li>
              <li>
                <input type="checkbox" readOnly checked />
                <span>Accessibility notes (keyboard, labels, errors)</span>
              </li>
              <li>
                <input type="checkbox" readOnly />
                <span>Analytics events + what decisions they enabled</span>
              </li>
              <li>
                <input type="checkbox" readOnly />
                <span>Performance metrics (before/after)</span>
              </li>
              <li>
                <input type="checkbox" readOnly checked />
                <span>Testing strategy (unit/integration/e2e)</span>
              </li>
              <li>
                <input type="checkbox" readOnly checked />
                <span>Outcome + learnings</span>
              </li>
            </ul>
          </section>

          <section className={styles.caseStudyBlock}>
            <h3>Highlights</h3>
            <ul className={styles.caseStudyBullets}>
              <li>Standardized validation behavior and error presentation across 9 steps.</li>
              <li>
                Prevented stale/invalid combinations by explicitly clearing dependent fields when
                upstream selections changed.
              </li>
              <li>
                Improved keyboard and assistive-technology usability with consistent semantics
                and error announcements.
              </li>
            </ul>
          </section>

          <section className={styles.caseStudyBlock}>
            <h3>The problem</h3>
            <div className={styles.caseStudyBody}>
              <ul>
                <li>
                  A 9-step, full-page payments flow layered on top of an MVP had accumulated
                  validation inconsistencies.
                </li>
                <li>
                  Errors were often opaque or surfaced late, increasing cognitive load and rework.
                </li>
                <li>
                  Conditional business rules made it easy for stale or invalid data to persist
                  across steps.
                </li>
                <li>
                  Accessibility needed review to ensure the flow worked with keyboard and
                  assistive technologies.
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.caseStudyBlock}>
            <h3>Users &amp; jobs-to-be-done</h3>
            <div className={styles.caseStudyBody}>
              <ul>
                <li>Internal bank employees (hundreds of users across ~40 branches)</li>
                <li>Enter and submit payment details accurately</li>
                <li>Understand validation issues immediately and correct them in place</li>
                <li>Complete submissions confidently without hidden errors</li>
              </ul>
            </div>
          </section>

          <section className={styles.caseStudyBlock}>
            <h3>Constraints</h3>
            <div className={styles.caseStudyBody}>
              <ul>
                <li>Compliance: financial data, PII, audit expectations</li>
                <li>Scope: refinement on top of MVP v1</li>
                <li>Backend: Java multi-service backend owned by another team</li>
                <li>Design system: MUI components</li>
                <li>Internationalization required (localized strings + validation)</li>
                <li>CI/CD: Jenkins on bare metal with limited access</li>
              </ul>
            </div>
          </section>

          <section className={styles.caseStudyBlock}>
            <h3>Baseline</h3>
            <div className={styles.caseStudyBody}>
              <ul>
                <li>Validation rules varied by step and were not always clearly surfaced</li>
                <li>
                  Some dependent fields could retain invalid values after upstream changes
                </li>
                <li>Accessibility had not yet been reviewed end-to-end</li>
                <li>
                  Error rates were not instrumented, making improvements qualitative rather than
                  quantitative
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.caseStudyBlock}>
            <h3>My responsibilities</h3>
            <div className={styles.caseStudyBody}>
              <ul>
                <li>Owned frontend refinement of the 9-step form flow</li>
                <li>Standardized validation behavior and error presentation</li>
                <li>Implemented conditional rendering and requiredness based on business rules</li>
                <li>
                  Coordinated async backend validation with clear UI feedback and recoverable
                  states
                </li>
                <li>Led an accessibility review and applied recommendations</li>
                <li>Ensured all changes were i18n-safe and compliant</li>
              </ul>
            </div>
          </section>

          <section className={styles.caseStudyBlock}>
            <h3>The solution</h3>
            <div className={styles.caseStudyBody}>
              <h4>UX</h4>
              <ul>
                <li>Full-page, step-based flow with clear progression</li>
                <li>Validation errors surfaced immediately at the field/step level</li>
                <li>Review step before final submission</li>
              </ul>

              <h4>STATE MODEL</h4>
              <ul>
                <li>Centralized form state using React Hook Form</li>
                <li>Forward navigation gated by validation; backward navigation allowed</li>
                <li>No autosave (explicitly deferred due to compliance considerations)</li>
              </ul>

              <h4>VALIDATION</h4>
              <ul>
                <li>
                  Charge Account-driven rules:
                  <ul>
                    <li>
                      Customer Account: Account Number required; Transit Number required and
                      rendered
                    </li>
                    <li>
                      Other Account: Account Number required; Transit Number not required and
                      not rendered
                    </li>
                  </ul>
                </li>
                <li>
                  Dependent values (Transit/Account) cleared when Charge Account changes to
                  prevent stale data
                </li>
                <li>
                  Numeric normalization on blur:
                  <ul>
                    <li>Transit Number padded to 4 digits</li>
                    <li>Account Number padded to 7 digits</li>
                  </ul>
                </li>
                <li>
                  Async backend validation for account existence/correctness, with recoverable
                  error states
                </li>
              </ul>

              <h4>ERROR DESIGN</h4>
              <ul>
                <li>Differentiated formatting errors vs backend validation failures</li>
                <li>Explicit, user-actionable error messages</li>
                <li>Graceful fallback paths when backend validation fails</li>
              </ul>

              <h4>ACCESSIBILITY</h4>
              <ul>
                <li>ARIA attributes used consistently (labeling + descriptions)</li>
                <li>Semantic HTML and heading hierarchy applied</li>
                <li>Keyboard navigation verified across steps and dialogs</li>
                <li>Dialogs announce correctly to screen readers and trap focus</li>
                <li>Validation errors associated with inputs and announced</li>
              </ul>

              <h4>INTERNATIONALIZATION</h4>
              <ul>
                <li>All labels and validation/error copy localized</li>
                <li>Validation logic designed to be locale-agnostic</li>
              </ul>
            </div>
          </section>

          <section className={styles.caseStudyBlock}>
            <h3>Analytics &amp; instrumentation</h3>
            <div className={styles.caseStudyBody}>
              <p>
                No formal KPIs were tracked during this refinement phase. Improvements were
                assessed via:
              </p>
              <ul>
                <li>Manual QA</li>
                <li>Reduced ambiguity during error handling</li>
                <li>Qualitative UX feedback from internal users</li>
              </ul>
            </div>
          </section>

          <section className={styles.caseStudyBlock}>
            <h3>Testing strategy</h3>
            <div className={styles.caseStudyBody}>
              <ul>
                <li>Unit/integration: Vitest for form and validation logic</li>
                <li>Static analysis: ESLint with strict expectations</li>
                <li>Quality gates: SonarQube (~80% coverage requirement)</li>
                <li>Manual testing: step navigation, validation edge cases, keyboard flows</li>
              </ul>
            </div>
          </section>

          <section className={styles.caseStudyBlock}>
            <h3>Results</h3>
            <div className={styles.caseStudyBody}>
              <ul>
                <li>Validation errors surfaced earlier and more clearly</li>
                <li>Reduced likelihood of submitting stale or invalid data</li>
                <li>Improved usability for keyboard and assistive-technology users</li>
                <li>Strong qualitative UX improvement reported by stakeholders</li>
              </ul>
            </div>
          </section>

          <section className={styles.caseStudyBlock}>
            <h3>Tradeoffs &amp; decisions</h3>
            <div className={styles.caseStudyBody}>
              <ul>
                <li>Deferred autosave to avoid unintended persistence of financial data</li>
                <li>
                  Chose explicit clearing of dependent fields over implicit state retention
                </li>
                <li>
                  Accepted qualitative UX validation due to lack of analytics instrumentation
                </li>
                <li>
                  Focused on refinement/correctness rather than expanding scope beyond MVP
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.caseStudyBlock}>
            <h3>Edge cases handled</h3>
            <div className={styles.caseStudyBody}>
              <ul>
                <li>Charge Account changes invalidating downstream fields</li>
                <li>Partial numeric input with automatic normalization</li>
                <li>Backend validation failures with manual-review fallback</li>
                <li>Localization of validation messages</li>
                <li>Keyboard-only navigation across all steps and dialogs</li>
              </ul>
            </div>
          </section>

          <section className={styles.caseStudyBlock}>
            <h3>What I’d do next</h3>
            <div className={styles.caseStudyBody}>
              <ul>
                <li>Add step-level analytics to quantify drop-off and error frequency</li>
                <li>Implement session-scoped autosave with compliance review</li>
                <li>Perform formal assistive-technology testing (NVDA, VoiceOver)</li>
                <li>Add targeted e2e tests for critical payment paths</li>
              </ul>
            </div>
          </section>

          <section className={styles.caseStudyBlock}>
            <h3>Notes on redaction</h3>
            <div className={styles.caseStudyBody}>
              <p>
                Company names, internal tools, and screenshots are anonymized. Validation rules
                and flow behavior are preserved without exposing sensitive details.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
