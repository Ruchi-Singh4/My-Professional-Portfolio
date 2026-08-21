import { useEffect } from "react";

/** Toggles `.in` on `[data-pop]` as items enter and leave the viewport. */
export function useScrollToggle(): void {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-pop]");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((node) => node.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("in", entry.isIntersecting);
        });
      },
      { threshold: 0.12, rootMargin: "-8% 0px -10% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}
