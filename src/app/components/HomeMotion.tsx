"use client";

import { useEffect } from "react";

export default function HomeMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".site");
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = root.querySelectorAll<HTMLElement>(
      ".work-heading, .project-card, .show-all-wrap, .experience-section .home-section-intro, .experience-item, .expertise-section .home-section-intro, .expertise-card, .about-copy, .about-system, .home-contact-panel",
    );

    if (!("IntersectionObserver" in window)) return;

    targets.forEach((target) => target.classList.add("reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -35px 0px" },
    );

    root.classList.add("motion-ready");
    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => targets.forEach((target) => observer.observe(target)));
    });

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(firstFrame);
      if (secondFrame) window.cancelAnimationFrame(secondFrame);
      root.classList.remove("motion-ready");
      targets.forEach((target) => target.classList.remove("reveal", "is-visible"));
    };
  }, []);

  return null;
}
