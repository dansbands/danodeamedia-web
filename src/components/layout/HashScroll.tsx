"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToHash } from "@/lib/scrollToHash";

function getHeaderOffsetPx() {
  const header = document.querySelector<HTMLElement>("[data-site-header='true']");
  if (!header) return 12;
  return Math.ceil(header.getBoundingClientRect().height) + 12;
}

function maybeScrollToCurrentHash() {
  const hash = window.location.hash;
  if (!hash) return;

  scrollToHash(hash, { offsetPx: getHeaderOffsetPx() });
}

export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const timer = window.setTimeout(() => {
      maybeScrollToCurrentHash();
    }, 0);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => {
      if (window.location.pathname !== "/") return;
      maybeScrollToCurrentHash();
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}
