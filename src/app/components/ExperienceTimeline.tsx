"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";

const roles = [
  {
    period: "JAN 2026 — AUG 2026",
    company: "Borders & Gates",
    title: "Software Engineer",
    setting: "FINANCIAL PRODUCTS",
    summary: "I worked on Laravel services for financial reporting and operations, connecting data sources and keeping background work dependable.",
    contributions: [
      { label: "BACKGROUND WORK", detail: "Built job queue workflows with Laravel Horizon to process longer-running tasks outside the main request." },
      { label: "INTEGRATIONS", detail: "Connected third-party APIs and internal services to automate financial reporting data collection." },
      { label: "DATA QUALITY", detail: "Added validation middleware and error handling to make incoming data more consistent." },
    ],
    projects: [{ href: "/work/multiply-dashboard", label: "Multiply Dashboard" }, { href: "/work/hasanat", label: "Hasanat" }],
  },
  {
    period: "AUG 2023 — PRESENT",
    company: "Freelance · Upwork",
    title: "Backend Developer",
    setting: "CLIENT DELIVERY",
    summary: "I take client requirements into working Laravel products, covering API design, data, integrations, and release work.",
    contributions: [
      { label: "API DEVELOPMENT", detail: "Built REST APIs and third-party integrations for commerce, learning, and service products." },
      { label: "DATA & ACCESS", detail: "Designed relational schemas and implemented authentication and role-based access with Laravel tools." },
      { label: "DELIVERY", detail: "Worked directly with clients on technical scope, then handled implementation and deployment." },
    ],
    projects: [{ href: "/work/mountainshoes", label: "Mountainshoes" }, { href: "/work/case-prep", label: "Case Prep" }, { href: "/work/accounting-system", label: "Accounting System" }],
  },
  {
    period: "MAY 2024 — JAN 2025",
    company: "Softigital",
    title: "Backend Developer",
    setting: "TEAM ENGINEERING",
    summary: "I developed and maintained Laravel services with frontend developers, from new product features to production fixes.",
    contributions: [
      { label: "PRODUCT APIS", detail: "Created REST APIs and connected external services to frontend features." },
      { label: "RELIABILITY", detail: "Improved database queries, fixed backend issues, and applied authentication and authorization practices." },
      { label: "RELEASES", detail: "Contributed to cloud integrations and automated deployment workflows." },
    ],
    projects: [{ href: "/work/sable", label: "Sable" }, { href: "/work/b2b-sable", label: "B2B Sable" }],
  },
] as const;

export default function ExperienceTimeline() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const role = roles[active];

  useEffect(() => {
    const element = timelineRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.15 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % roles.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index - 1 + roles.length) % roles.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = roles.length - 1;
    else return;
    event.preventDefault();
    setPaused(true);
    setActive(next);
    document.getElementById(`experience-tab-${next}`)?.focus();
  }

  return (
    <div
      className={`experience-timeline${paused || !inView ? " is-paused" : ""}`}
      ref={timelineRef}
      onFocusCapture={(event) => { if (event.target instanceof HTMLElement && event.target.matches(":focus-visible")) setPaused(true); }}
      onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}
    >
      <div className="experience-timeline-nav" role="tablist" aria-label="Career roles">
        {roles.map((item, index) => (
          <button
            className={`experience-timeline-tab${active === index ? " is-active" : ""}`}
            type="button"
            role="tab"
            id={`experience-tab-${index}`}
            aria-selected={active === index}
            aria-controls="experience-timeline-panel"
            tabIndex={active === index ? 0 : -1}
            key={item.company}
            onClick={() => setActive(index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            <span className="experience-tab-index">0{index + 1} <i aria-hidden="true" /></span>
            <span className="experience-tab-copy"><strong>{item.company}</strong><small>{item.period}</small></span>
            <span className="experience-tab-arrow" aria-hidden="true">↗</span>
            <span
              className="experience-tab-progress"
              aria-hidden="true"
              onAnimationEnd={(event) => {
                if (event.animationName === "experience-tab-progress" && active === index) {
                  setActive((index + 1) % roles.length);
                }
              }}
            />
          </button>
        ))}
        <p className="experience-timeline-hint">SELECT A ROLE <span>→</span> EXPLORE THE WORK</p>
      </div>

      <article
        className="experience-timeline-panel"
        id="experience-timeline-panel"
        role="tabpanel"
        aria-labelledby={`experience-tab-${active}`}
        tabIndex={0}
        key={active}
      >
        <div className="experience-panel-top"><span><i aria-hidden="true" /> {role.setting}</span><span>0{active + 1} / 03</span></div>
        <div className="experience-panel-intro"><p>{role.company}</p><h3>{role.title}</h3><span>{role.period}</span></div>
        <p className="experience-panel-summary">{role.summary}</p>
        <div className="experience-panel-work">
          <span className="experience-panel-eyebrow">WHAT I WORKED ON</span>
          <div className="experience-panel-contributions">
            {role.contributions.map((item, index) => (
              <div key={item.label}><span>0{index + 1} / {item.label}</span><p>{item.detail}</p></div>
            ))}
          </div>
        </div>
        <div className="experience-panel-projects"><span>RELATED PROJECTS</span><div>{role.projects.map((project) => <Link href={project.href} key={project.href}>{project.label} <span aria-hidden="true">↗</span></Link>)}</div></div>
      </article>
    </div>
  );
}
