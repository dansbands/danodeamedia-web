"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import styles from "./CollapsibleSection.module.css";

type Props = PropsWithChildren<{
  title: string;
}>;

export function CollapsibleSection({ title, children }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 720px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <details className={styles.details} open={!isMobile}>
      <summary className={styles.summary}>{title}</summary>
      <div className={styles.body}>{children}</div>
    </details>
  );
}
