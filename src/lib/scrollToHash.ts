type ScrollToHashOptions = {
  offsetPx?: number;
  behavior?: ScrollBehavior;
};

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToHash(hash: string, options: ScrollToHashOptions = {}) {
  if (typeof window === "undefined") return;

  const normalized = hash.startsWith("#") ? hash : `#${hash}`;
  const id = normalized.slice(1);
  if (!id) return;

  const el = document.getElementById(id);
  if (!el) return;

  const offsetPx = options.offsetPx ?? 0;
  const reduced = prefersReducedMotion();

  const top = Math.max(0, window.scrollY + el.getBoundingClientRect().top - offsetPx);

  const behavior: ScrollBehavior = reduced ? "auto" : options.behavior ?? "smooth";

  // Keep URL hash in sync without triggering browser auto-jump.
  if (window.location.hash !== normalized) {
    history.pushState(null, "", normalized);
  }

  window.scrollTo({ top, behavior });
}
