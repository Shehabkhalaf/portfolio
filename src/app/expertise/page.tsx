import type { Metadata } from "next";
import Link from "next/link";
import PageMotion from "../components/PageMotion";
import PageTransition from "../components/PageTransition";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Expertise | Shehab Khalaf",
  description: "Laravel API development, business workflows, integrations, data processing, and deployment experience by Shehab Khalaf.",
};

const capabilities = [
  { number: "01", title: "API architecture", body: "Laravel REST APIs for websites, mobile apps, and admin dashboards, with validation, authentication, authorization, and documented contracts.", tools: "PHP · Laravel · Sanctum · Swagger", project: "Hasanat", href: "/work/hasanat" },
  { number: "02", title: "Product workflows", body: "Order lifecycles, donations, checkout, reporting, and access rules designed around the business process each product needs.", tools: "MySQL · SQL · State machines · RBAC", project: "Laundry Heroes", href: "/work/laundry-heroes" },
  { number: "03", title: "External integrations", body: "Connecting payment services, bank data, Firebase messaging, and AI providers to reliable product workflows.", tools: "Payments · Webhooks · Firebase · AI", project: "Multiply Dashboard", href: "/work/multiply-dashboard" },
  { number: "04", title: "Background processing", body: "Queues, scheduled jobs, caching, and synchronization for work that should run reliably outside a user request.", tools: "Horizon · Redis · Queues · Scheduling", project: "AutoMind AI", href: "/work/automind-ai" },
  { number: "05", title: "Delivery and maintenance", body: "Database tuning, deployment workflows, CI/CD, and Docker to help teams release and maintain backend services.", tools: "CI/CD · Docker · Git · MySQL", project: "Zero Lice", href: "/work/zero-lice" },
] as const;

export default function ExpertisePage() {
  return (
    <PageTransition>
      <main className="site interior-page expertise-page">
        <PageMotion />
        <SiteHeader active="expertise" />
        <div className="interior-shell">
          <section className="interior-hero" aria-labelledby="expertise-page-title"><div><p className="work-kicker">EXPERTISE / BACKEND ENGINEERING</p><h1 id="expertise-page-title">What I bring <em>to the backend.</em></h1><p>My work sits where product requirements meet APIs, data, and services. These are the areas I&apos;ve used across real projects.</p></div></section>
          <section className="interior-section" aria-labelledby="expertise-list-title">
            <div className="interior-section-head"><span>01 / CAPABILITIES</span><h2 id="expertise-list-title">Built for real product flows.</h2></div>
            <div className="expertise-list">
              {capabilities.map((item) => (
                <article className="expertise-row" key={item.number}>
                  <span className="expertise-row-number">{item.number}</span>
                  <div><h3>{item.title}</h3><p>{item.body}</p><small>{item.tools}</small></div>
                  <Link href={item.href}>See {item.project} <span aria-hidden="true">↗</span></Link>
                </article>
              ))}
            </div>
          </section>
          <div className="interior-cta"><span>HAVE A BACKEND CHALLENGE?</span><p>Let&apos;s talk about the API, integration, or system you&apos;re building.</p><Link href="/contact">Contact me <span>↗</span></Link></div>
        </div>
      </main>
    </PageTransition>
  );
}
