"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import styles from "./Header.module.css";

const navItems = [
  { href: "/#experience", label: "Experience" },
  { href: "/#work", label: "Work" },
  { href: "/#contact", label: "Contact" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/resume", label: "Resume" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} href="/" aria-label="Home">
          Dan Odea
        </Link>

        <button
          type="button"
          className={styles.toggle}
          aria-controls={panelId}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.toggleText}>{open ? "Close" : "Menu"}</span>
        </button>

        <nav
          id={panelId}
          className={open ? styles.navOpen : styles.nav}
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.link}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
