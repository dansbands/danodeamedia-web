"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import styles from "./Header.module.css";
import { scrollToHash } from "@/lib/scrollToHash";
import { usePathname, useRouter } from "next/navigation";

const sectionButtons = [
  { name: "home", label: "HOME" },
  { name: "professional", label: "PROFESSIONAL" },
  { name: "recent-work", label: "RECENT WORK" },
  { name: "contact", label: "CONTACT" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelId = useId();
  const pathname = usePathname();
  const router = useRouter();
  const headerRef = useRef<HTMLElement | null>(null);

  const headerOffset = () => {
    const el = headerRef.current;
    if (!el) return 0;
    return Math.ceil(el.getBoundingClientRect().height);
  };

  const goToSection = (id: (typeof sectionButtons)[number]["name"]) => {
    setOpen(false);

    // If we're not on the homepage, navigate there and let the browser jump.
    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }

    scrollToHash(`#${id}`, { offsetPx: headerOffset() + 12 });
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={(node) => {
        headerRef.current = node;
      }}
      className={scrolled ? styles.footer2Scrolled : styles.footer2}
      data-site-header="true"
    >
      <Link className={styles.logo} href="/" aria-label="Home">
        <Image
          className={styles.icon}
          src="/dam/images/favicon2.bb490f79.png"
          alt="favicon"
          width={40}
          height={40}
          priority
        />
      </Link>

      <div className={styles.footer2Container}>
        <nav id={panelId} className={styles.footer2Center} aria-label="Primary">
          <ul className={styles.green} role="tablist">
            {sectionButtons.map((b) => (
              <li key={b.name}>
                <button type="button" name={b.name} onClick={() => goToSection(b.name)}>
                  {b.label}
                </button>
              </li>
            ))}
            <li>
              <Link href="/portfolio">PORTFOLIO</Link>
            </li>
            <li>
              <Link href="/resume">RESUME</Link>
            </li>
          </ul>
        </nav>
      </div>

      <button
        className={open ? styles.hamburgerOpen : styles.hamburger}
        type="button"
        aria-label="Toggle navigation menu"
        aria-controls={`${panelId}-drawer`}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={open ? styles.overlayOpen : styles.overlay}
        role="button"
        tabIndex={0}
        aria-label="Close navigation"
        onClick={() => setOpen(false)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setOpen(false);
        }}
      />

      <div
        id={`${panelId}-drawer`}
        className={open ? styles.drawerOpen : styles.drawer}
        role="menu"
      >
        <ul className={styles.green} role="tablist">
          {sectionButtons.map((b) => (
            <li key={`drawer-${b.name}`}>
              <button type="button" name={b.name} onClick={() => goToSection(b.name)}>
                {b.label}
              </button>
            </li>
          ))}
          <li>
            <Link href="/portfolio" onClick={() => setOpen(false)}>
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link href="/resume" onClick={() => setOpen(false)}>
              RESUME
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
