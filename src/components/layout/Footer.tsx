import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.text}>
          © {new Date().getFullYear()} Dan Odea. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
