import styles from "./RecentWork.module.css";
import Image from "next/image";
import Link from "next/link";

export function RecentWork() {
  return (
    <section id="recent-work" className={styles.smooth} aria-label="Recent work">
      <div className={styles.portfolio}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            <span className={styles.gray}>02</span> RECENT WORK
          </h1>
          <h2 className={styles.subtitle}>
            MY LATEST PROJECTS. <Link href="/portfolio">SEE MORE &gt;</Link>
          </h2>

          <div className={styles.row}>
            <Image
              alt="Album"
              src="/dam/images/Fox%20Album%20Cover%20Alt2.41933d7d.jpg"
              width={300}
              height={300}
            />
            <Image
              alt="Ript"
              src="/dam/images/Ript%20Portfolio%20Icon.6d5a6da8.png"
              width={300}
              height={300}
            />
            <Image
              alt="Dansbands"
              src="/dam/images/dansbands%20icon.f822027f.png"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
