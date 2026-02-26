import Image from "next/image";
import styles from "./Footer.module.css";

const COPYRIGHT_YEAR = 2025;

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <Image
          className={styles.icon}
          src="/dam/images/favicon2.bb490f79.png"
          alt="favicon"
          width={40}
          height={40}
        />
      </div>
      <div className={styles.center}>
        <p className={styles.text}>© {COPYRIGHT_YEAR} by Dan O&apos;Dea</p>
      </div>
    </footer>
  );
}
