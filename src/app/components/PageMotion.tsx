"use client";

import { useEffect } from "react";

export default function PageMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".site");
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const targets = root.querySelectorAll<HTMLElement>(
      ".archive-intro, .archive-card, .contact-page-copy, .contact-form, .detail-heading, .detail-panel, .case-section-heading, .case-capabilities > div, .case-flow, .decision-list article, .case-gallery-grid figure, .detail-next, .interior-hero, .interior-section-head, .interior-card, .interior-note, .interior-role, .expertise-row, .interior-cta, .experience-history-head, .experience-timeline, .experience-bottom-cta",
    );
    targets.forEach((target) => target.classList.add("reveal"));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.06, rootMargin: "0px 0px -30px 0px" });

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
