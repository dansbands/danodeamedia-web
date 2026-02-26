import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="home" className={styles.smooth} aria-label="Home">
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.container}>
            <h1>
              I<span className={styles.green}>&apos;</span>M
            </h1>
            <h1>DAN</h1>
            <h1>
              O<span className={styles.green}>&apos;</span>DEA<span className={styles.green}>.</span>
            </h1>
            <h2 id="top">SENIOR SOFTWARE ENGINEER</h2>
          </div>
        </div>

        <div className={styles.welcomeOuter}>
          <div className={styles.welcome}>
            <div className={styles.welcomeContainer} id="welcome">
              <Image
                src="/dam/images/favicon2.bb490f79.png"
                alt="favicon"
                width={140}
                height={140}
                priority
              />
              <p>Welcome to my site.</p>
              <p>
                I strive to create beautiful interfaces that are intuitive and enjoyable to use.
              </p>
              <p>Feel free to have a look around.</p>
              <Link className={styles.btn} href="/#recent-work">
                Recent Work
              </Link>
              <Link className={styles.btn} href="/resume">
                Résumé
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
