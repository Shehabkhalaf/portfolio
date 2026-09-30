import type { Metadata } from "next";
import Link from "next/link";
import PageTransition from "../components/PageTransition";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Expertise | Shehab Khalaf",
  description: "Explore Shehab Khalaf's backend work across Laravel APIs, product workflows, payments, data integrations, queues, AI, and deployment.",
};

const capabilities = [
  {
    number: "01", area: "API FOUNDATION", title: "APIs built for every client.",
    summary: "One backend can serve a website, mobile apps, and an operations dashboard without turning every new feature into a separate system.",
    details: ["Versioned REST endpoints, request validation, and clear response contracts.", "Authentication and role-based permissions for customers, staff, and admins."],
    tools: ["Laravel", "REST", "Sanctum", "Swagger"], project: "Hasanat", href: "/work/hasanat", example: "Web + mobile donation API",
  },
  {
    number: "02", area: "BUSINESS LOGIC", title: "Workflows that match real operations.",
    summary: "I turn complex product rules into predictable states and data models that teams can work with.",
    details: ["Order status and role-based transitions for pickup and delivery.", "Donation, Zakat, checkout, and admin control flows."],
    tools: ["MySQL", "State machines", "RBAC"], project: "Laundry Heroes", href: "/work/laundry-heroes", example: "Customer → order → driver",
  },
  {
    number: "03", area: "CONNECTED SYSTEMS", title: "Integrations that stay dependable.",
    summary: "External services become part of a useful product flow, with attention to data arriving late, twice, or with errors.",
    details: ["Payment methods, recurring donations, refunds, and verified webhooks.", "Plaid transaction sync, currency conversion, and Firebase notifications."],
    tools: ["Payments", "Plaid", "Webhooks", "Firebase"], project: "Multiply Dashboard", href: "/work/multiply-dashboard", example: "Bank data → insights",
  },
  {
    number: "04", area: "ASYNCHRONOUS WORK", title: "Heavy work off the request path.",
    summary: "Long-running tasks belong in background workflows so the product stays responsive while processing continues.",
    details: ["Laravel Horizon queues for financial reporting and service tasks.", "Scheduled sync jobs, Redis caching, and status-aware report generation."],
    tools: ["Queues", "Horizon", "Redis", "Scheduling"], project: "Multiply Dashboard", href: "/work/multiply-dashboard", example: "Request → queue → result",
  },
  {
    number: "05", area: "AI IN PRODUCTS", title: "AI connected to useful outcomes.",
    summary: "I connect AI services to structured backend workflows so their output supports a clear product action.",
    details: ["Vehicle inspection evidence turned into structured reports.", "Queued analysis, report status, and a rule-based fallback for insights."],
    tools: ["Gemini", "Laravel", "Queues"], project: "AutoMind AI", href: "/work/automind-ai", example: "Inspection → AI report",
  },
  {
    number: "06", area: "DELIVERY", title: "From implementation to release.",
    summary: "Backend work continues through data migrations, deployment, maintenance, and the fixes that production brings.",
    details: ["Database schemas, query improvements, migrations, and seeding.", "CI/CD pipelines, Docker workflows, and production deployment."],
    tools: ["SQL", "Docker", "CI/CD", "Git"], project: "Zero Lice", href: "/work/zero-lice", example: "Build → deploy → maintain",
  },
] as const;

export default function ExpertisePage() {
  return (
    <PageTransition>
      <main className="site interior-page expertise-page">
        <SiteHeader active="expertise" />
        <div className="interior-shell">
          <section className="expertise-hero" aria-labelledby="expertise-page-title">
            <div className="expertise-hero-copy">
              <p className="work-kicker">EXPERTISE / BACKEND ENGINEERING</p>
              <h1 id="expertise-page-title">The work behind <em>the product.</em></h1>
              <p>I build the APIs, workflows, and integrations that connect a product&apos;s moving parts. Here&apos;s how that work shows up in systems I&apos;ve shipped.</p>
              <div className="expertise-hero-actions"><a href="#capabilities">Explore capabilities <span aria-hidden="true">↓</span></a><Link href="/work">See projects <span aria-hidden="true">↗</span></Link></div>
              <div className="expertise-hero-tags" aria-label="Core technologies"><span>PHP / LARAVEL</span><span>MYSQL / REDIS</span><span>REST APIS</span></div>
            </div>
            <div className="expertise-system" role="img" aria-label="A client request moves through the API, business logic, data and integrations, then returns a response">
              <div className="expertise-system-header"><span><i /> SYSTEM FLOW</span><span>REQUEST / RESPONSE</span></div>
              <div className="expertise-system-client"><span>01 / CLIENTS</span><strong>Web · Mobile · Dashboard</strong><small>GET /api/v1/resource</small></div>
              <div className="expertise-system-path"><i /><i /><i /></div>
              <div className="expertise-system-core"><span>02 / APPLICATION</span><strong>Laravel API</strong><small>Auth → Validate → Business rules</small></div>
              <div className="expertise-system-branches"><div><span>03 / DATA</span><strong>MySQL + Redis</strong></div><div><span>04 / SERVICES</span><strong>Payments + AI</strong></div></div>
              <div className="expertise-system-footer"><span>200 OK</span><span>STRUCTURED RESPONSE ↗</span></div>
            </div>
          </section>

          <section className="expertise-capabilities" id="capabilities" aria-labelledby="expertise-list-title">
            <div className="expertise-section-head"><div><span>01 / CAPABILITIES</span><h2 id="expertise-list-title">What I build, <em>and where it matters.</em></h2></div><p>From the first API contract to background processing and release, each area is tied to work in a real project.</p></div>
            <div className="expertise-capability-grid">
              {capabilities.map((item) => (
                <article className="expertise-capability" key={item.number}>
                  <div className="expertise-capability-top"><span>{item.number} / {item.area}</span><span aria-hidden="true">↗</span></div>
                  <h3>{item.title}</h3>
                  <p className="expertise-capability-summary">{item.summary}</p>
                  <ul className="expertise-capability-details">{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                  <div className="expertise-capability-bottom">
                    <div className="expertise-capability-tools">{item.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
                    <Link href={item.href}><span>IN PRACTICE / {item.example}</span><strong>{item.project} <span aria-hidden="true">↗</span></strong></Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="expertise-approach" aria-labelledby="expertise-approach-title">
            <div><span>02 / HOW I APPROACH THE WORK</span><h2 id="expertise-approach-title">Build the flow.<br /><em>Make it reliable.</em></h2><p>Start with the people and systems involved, define the API and data rules, then make the important paths maintainable as the product grows.</p></div>
            <ol><li><span>01</span><strong>Understand the flow</strong><p>Map the user action, business rules, and systems that need to respond.</p></li><li><span>02</span><strong>Shape the contract</strong><p>Design data, endpoints, access rules, and integration boundaries.</p></li><li><span>03</span><strong>Ship and improve</strong><p>Handle failure paths, background work, deployment, and production fixes.</p></li></ol>
          </section>

          <div className="interior-cta"><span>HAVE A BACKEND CHALLENGE?</span><p>Let&apos;s talk about the API, integration, or system you&apos;re building.</p><Link href="/contact">Contact me <span aria-hidden="true">↗</span></Link></div>
        </div>
      </main>
    </PageTransition>
  );
}
