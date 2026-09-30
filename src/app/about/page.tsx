import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageTransition from "../components/PageTransition";
import SiteHeader from "../components/SiteHeader";
import AboutMotion from "../components/AboutMotion";

export const metadata: Metadata = {
  title: "About | Shehab Khalaf",
  description: "Meet Shehab Khalaf, a Cairo-based backend engineer building Laravel APIs and product systems for teams and clients.",
};

const projects = [
  { number: "01", type: "DONATIONS / PAYMENTS", name: "Hasanat", detail: "One API serving web and mobile giving flows.", href: "/work/hasanat" },
  { number: "02", type: "ON-DEMAND SERVICES", name: "Laundry Heroes", detail: "Customer, driver, and admin workflows connected.", href: "/work/laundry-heroes" },
  { number: "03", type: "FINANCIAL DATA", name: "Multiply Dashboard", detail: "Bank data, queues, reporting, and insights.", href: "/work/multiply-dashboard" },
] as const;

const approach = [
  { number: "01", title: "Understand the product", detail: "I start with the people using it, the decisions they need to make, and the full path a request takes." },
  { number: "02", title: "Design for change", detail: "I shape API contracts, data models, and business rules so new clients and features fit the same system." },
  { number: "03", title: "Own the delivery", detail: "I work through integrations, background jobs, deployment, and production fixes with the team." },
] as const;

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="site interior-page about-page">
        <AboutMotion />
        <SiteHeader active="about" />
        <div className="interior-shell">
          <section className="about-new-hero" aria-labelledby="about-page-title">
            <div className="about-new-hero-copy">
              <p className="work-kicker">ABOUT / SHEHAB KHALAF</p>
              <h1 id="about-page-title">Backend engineer.<br /><em>Product thinker.</em></h1>
              <p className="about-new-lead">I&apos;m Shehab, a backend developer based in Cairo. I build Laravel APIs and the systems behind products that people use every day.</p>
              <p className="about-new-support">I like the part of engineering where a complicated requirement becomes a clear flow: a request reaches the right service, data stays consistent, and the team can keep building on it.</p>
              <div className="about-new-actions"><Link href="/work">Explore my work <span aria-hidden="true">↗</span></Link><a href="/Shehab-Khalaf-Resume.pdf" download="Shehab-Khalaf-Resume.pdf">Download resume <span aria-hidden="true">↓</span></a></div>
              <div className="about-new-meta"><span><i aria-hidden="true" /> CAIRO, EGYPT</span><span>PHP / LARAVEL / APIs</span></div>
            </div>
            <div className="about-new-portrait">
              <div className="about-new-portrait-image"><Image src="/shehab-khalaf-portrait-2026.png" alt="Portrait of Shehab Khalaf" fill priority sizes="(max-width: 800px) 90vw, 470px" /></div>
              <div className="about-portrait-signal is-request" aria-hidden="true"><i /> <span>GET /api/profile</span><strong>200 OK</strong></div>
              <div className="about-portrait-signal is-response" aria-hidden="true"><i /> <span>QUEUE</span><strong>PROCESSED ✓</strong></div>
              <div className="about-new-portrait-note"><span>WHAT I WORK ON</span><strong>Systems that make the product work.</strong><small>APIs · Data · Integrations</small></div>
            </div>
          </section>

          <section className="about-proof" aria-labelledby="about-proof-title">
            <div className="about-new-section-head"><span>01 / IN PRACTICE</span><h2 id="about-proof-title">Different products.<br /><em>The same backend mindset.</em></h2><p>My work spans donation platforms, on-demand services, and financial tools. Each one needs its own business rules, but all need clear APIs and dependable data.</p></div>
            <div className="about-proof-list">
              {projects.map((project) => <Link href={project.href} key={project.name}><span className="about-proof-number">{project.number}</span><div><small>{project.type}</small><strong>{project.name}</strong><p>{project.detail}</p></div><span className="about-proof-arrow" aria-hidden="true">↗</span></Link>)}
            </div>
          </section>

          <section className="about-method" aria-labelledby="about-method-title">
            <div className="about-new-section-head"><span>02 / HOW I WORK</span><h2 id="about-method-title">Start with the flow.<br /><em>Stay for the details.</em></h2><p>I work with designers, frontend developers, and clients to turn product requirements into backend behavior that can be built, tested, and maintained.</p></div>
            <div className="about-method-grid">{approach.map((item) => <article key={item.number}><span>{item.number} / 03</span><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div>
          </section>

          <section className="about-background" aria-labelledby="about-background-title">
            <div className="about-background-copy"><span>03 / THE PATH SO FAR</span><h2 id="about-background-title">Built through teams, clients, <em>and real releases.</em></h2><p>I graduated in Computer Science from Helwan University in 2025. Since 2023, I&apos;ve delivered client projects alongside engineering roles, from commerce and education to donations and financial products.</p><Link href="/experience">Explore my experience <span aria-hidden="true">↗</span></Link></div>
            <div className="about-background-timeline" aria-label="Career highlights">
              <div><span>2023 — NOW</span><strong>Freelance · Upwork</strong><p>Direct client delivery across Laravel products and APIs.</p></div>
              <div><span>2024 — 2025</span><strong>Softigital</strong><p>Backend development with a product team.</p></div>
              <div><span>2026</span><strong>Borders &amp; Gates</strong><p>Financial reporting services and integrations.</p></div>
            </div>
          </section>

          <div className="about-new-cta"><div><span>LET&apos;S BUILD SOMETHING USEFUL</span><h2>Have a product in mind?</h2><p>Tell me about the workflow, API, or integration you&apos;re planning.</p></div><Link href="/contact">Get in touch <span aria-hidden="true">↗</span></Link></div>
        </div>
      </main>
    </PageTransition>
  );
}
