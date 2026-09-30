import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageTransition from "../components/PageTransition";
import SiteHeader from "../components/SiteHeader";
import PageMotion from "../components/PageMotion";

export const metadata: Metadata = {
  title: "Work | Shehab Khalaf",
  description: "Selected backend projects by Shehab Khalaf, including Laravel APIs, payments, real-time platforms, financial analytics, and e-commerce systems.",
};

const projects = [
  {
    slug: "hasanat",
    name: "Hasanat",
    type: "DONATIONS / PAYMENTS",
    date: "2025 — 2026",
    url: "https://hasanat.org/",
    summary: "A multi-country donation platform serving web and mobile clients through a Laravel REST API.",
    highlights: [
      "Built a Laravel REST API with approximately 200 endpoints for web and mobile.",
      "Integrated four payment methods with verified webhooks, refunds, and recurring donation controls.",
      "Added Zakat, Qurban, FX sync, admin exports, localization, and Redis-backed performance improvements.",
    ],
    stack: ["Laravel 11", "REST API", "Redis", "Payments"],
    accent: "mint",
  },
  {
    slug: "laundry-heroes",
    name: "Laundry Heroes",
    type: "ON-DEMAND SERVICES",
    date: "2025 — 2026",
    url: "https://laundry-heroes.com/",
    summary: "A pickup and delivery platform powered by APIs for the mobile apps and admin dashboard.",
    highlights: [
      "Built versioned Laravel APIs for customer and driver mobile apps and the admin dashboard.",
      "Modeled the order lifecycle as a state machine with role-based transition rules.",
      "Built payment integrations, Firebase chat and push notifications, and admin analytics.",
    ],
    stack: ["Laravel 12", "MySQL", "Firebase", "Payment Integration"],
    accent: "blue",
  },
  {
    slug: "multiply-dashboard",
    name: "Multiply Dashboard",
    type: "FINANCIAL ANALYTICS",
    date: "2026 — PRESENT",
    url: "https://dashboard.multiply-wealth.com/",
    summary: "A multi-currency wealth dashboard for bank data, reporting, and financial insights.",
    highlights: [
      "Built five multi-currency analytics suites with scheduled FX conversion.",
      "Integrated Plaid sync with idempotent transaction updates and verified webhooks.",
      "Ran scheduled queue jobs and built an AI insights chat over user-scoped financial data.",
    ],
    stack: ["Laravel", "Plaid", "Queues", "AI"],
    accent: "violet",
  },
  {
    slug: "automind-ai",
    name: "Automind AI",
    type: "OPERATIONS / AI",
    date: "2026",
    url: "https://automindai.ae/",
    summary: "Car service APIs with AI-assisted inspection reports and operational insights.",
    highlights: [
      "Integrated AI analysis of inspection checklists and photos into structured vehicle reports.",
      "Added AI-generated insights to operational reports, with a rule-based fallback.",
      "Supported service workflows, localized APIs, and event notifications.",
    ],
    stack: ["Laravel", "Gemini", "AI Reports", "Queues"],
    accent: "mint",
  },
  {
    slug: "mountainshoes",
    name: "Mountainshoes",
    type: "E-COMMERCE",
    date: "2025",
    url: "https://mountainshoes.shop/",
    summary: "An online store with product, cart, checkout, and customer account workflows.",
    highlights: [
      "Built product catalog, cart, checkout, authentication, and order tracking workflows.",
      "Designed relational schemas for products, orders, and customers.",
      "Handled server setup, migrations, seeding, deployment, and query optimization.",
    ],
    stack: ["Laravel", "MySQL", "Checkout", "Deployment"],
    accent: "blue",
  },
  {
    slug: "case-prep",
    name: "Case Prep",
    type: "EDUCATION",
    date: "2025",
    url: "https://caseprep.co/",
    summary: "A learning platform with course management, authentication, and online payments.",
    highlights: [
      "Delivered architecture, integration, and deployment independently.",
      "Used Firebase for real-time data, authentication, and course management.",
      "Integrated PayPal and an Indian payment gateway.",
    ],
    stack: ["Laravel", "Firebase", "PayPal", "Deployment"],
    accent: "violet",
  },
  {
    slug: "sable",
    name: "Sable",
    type: "B2B COMMERCE",
    date: "2024",
    url: "https://sablesweets.com/",
    summary: "A business platform supporting orders, inventory, reporting, and account management.",
    highlights: [
      "Built Laravel workflows for B2B orders, inventory, and reporting.",
      "Implemented authentication, role-based access, and user management.",
      "Optimized database queries and integrated APIs for business operations.",
    ],
    stack: ["Laravel", "B2B", "RBAC", "MySQL"],
    accent: "mint",
  },
  {
    slug: "zero-lice",
    name: "Zero Lice",
    type: "SERVICES PLATFORM",
    date: "2025",
    url: "https://zerolice.ae/",
    summary: "A Next.js and Laravel service site with content and package pricing managed through the backend.",
    highlights: [
      "Developed Laravel backend services for blogs and package pricing.",
      "Connected the Next.js frontend to backend APIs.",
      "Built CI/CD pipelines and maintained production deployment workflows.",
    ],
    stack: ["Laravel", "Next.js", "CI/CD", "APIs"],
    accent: "blue",
  },
  {
    slug: "accounting-system",
    name: "Accounting System",
    type: "INTERNAL OPERATIONS",
    date: "2025",
    url: "https://services.altahadiservices.com/",
    summary: "An internal system for expenses, income, invoicing, and employee management.",
    highlights: [
      "Built expense, income, and invoice management workflows.",
      "Added employee management, access control, and reporting.",
      "Delivered the system independently from implementation through deployment.",
    ],
    stack: ["Laravel", "Accounting", "Reporting", "RBAC"],
    accent: "violet",
  },
  {
    slug: "b2b-sable",
    name: "B2B Sable",
    type: "WHOLESALE COMMERCE",
    date: "2024",
    url: "https://b2b.sablesweets.com/",
    summary: "A wholesale platform for business orders, inventory workflows, and reporting.",
    highlights: [
      "Led the project from requirements and architecture through deployment.",
      "Built authentication, roles, order processing, inventory, and reports.",
      "Integrated APIs and maintained the platform after release.",
    ],
    stack: ["Laravel", "B2B", "MySQL", "APIs"],
    accent: "mint",
  },
] as const;

const systemVisuals: Record<string, { label: string; nodes: [string, string, string] }> = {
  "multiply-dashboard": { label: "FINANCIAL DATA FLOW", nodes: ["BANK DATA", "WEALTH API", "INSIGHTS"] },
  mountainshoes: { label: "COMMERCE FLOW", nodes: ["CATALOG", "CHECKOUT", "ORDER"] },
  "case-prep": { label: "LEARNING FLOW", nodes: ["COURSES", "ENROLLMENT", "PAYMENT"] },
  sable: { label: "BUSINESS FLOW", nodes: ["ACCOUNTS", "INVENTORY", "REPORTS"] },
  "zero-lice": { label: "CONTENT FLOW", nodes: ["CMS", "API", "WEBSITE"] },
  "accounting-system": { label: "OPERATIONS FLOW", nodes: ["INCOME", "LEDGER", "REPORTS"] },
  "b2b-sable": { label: "WHOLESALE FLOW", nodes: ["BUSINESS", "ORDERS", "STOCK"] },
};

export default function WorkPage() {
  return (
    <PageTransition>
    <main className="site work-page">
      <PageMotion />
      <SiteHeader active="work" />

      <section className="archive">
        <div className="archive-intro">
          <Link className="back-link" href="/#work">← BACK TO HOME</Link>
          <p className="work-kicker">PROJECT ARCHIVE / 10 SYSTEMS</p>
          <h1>Work behind <em>the product.</em></h1>
          <p>APIs, payments, background jobs, and data models across products I&apos;ve helped build. Each project below highlights the backend work I contributed.</p>
          <p className="archive-disclosure">Public products include product screens. Private dashboards are illustrated with system flows to respect client data.</p>
          <div className="archive-rule"><span>ALL PROJECTS</span><span>01 — 10</span></div>
        </div>

        <div className="archive-grid">
          {projects.map((project, index) => (
            <article className={`archive-card archive-featured accent-${project.accent}${index > 1 ? " archive-system" : ""}`} key={project.name}>
              <Link className="card-overlay-link" href={`/work/${project.slug}`} aria-label={`Read about ${project.name}`} />
              <div className="archive-card-top">
                <span>{String(index + 1).padStart(2, "0")} / {project.type}</span>
                <span>{project.date}</span>
              </div>
              <div className="archive-card-main">
                <h2>{project.name}</h2>
                <p>{project.summary}</p>
                {index < 2 && (
                  <div className="showcase-facts">
                    <div><small>MY ROLE</small><strong>{index === 0 ? "Backend Developer · Borders & Gates" : "Backend Developer"}</strong></div>
                    <div><small>ENGINEERING FOCUS</small><strong>{index === 0 ? "One API for web and mobile giving" : "Mobile and dashboard APIs built to grow"}</strong></div>
                  </div>
                )}
                {index > 1 && <p className="archive-teaser">{project.highlights[0]}</p>}
              </div>
              <div className="archive-card-bottom">
                <ul className="project-tags">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
                <div className="archive-card-actions"><span>{index < 2 ? "Read the case study →" : "Read overview →"}</span><a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name} website`}>Visit website <span aria-hidden="true">↗</span></a></div>
              </div>
              {index === 0 && (
                <div className="archive-featured-media showcase-visual">
                  <span className="visual-index">01</span>
                  <div className="archive-featured-image"><Image src="/projects/hasanat.png" alt="Hasanat public website and quick donation form" fill sizes="(max-width: 850px) 90vw, 42vw" /></div>
                </div>
              )}
              {index === 1 && (
                <div className="archive-featured-media showcase-visual">
                  <span className="visual-index">02</span>
                  <div className="archive-featured-image"><Image src="/projects/laundry-heroes.png" alt="Laundry Heroes public website and mobile app preview" fill sizes="(max-width: 850px) 90vw, 42vw" /></div>
                </div>
              )}
              {project.slug === "automind-ai" && (
                <div className="archive-featured-media showcase-visual">
                  <div className="archive-featured-image"><Image src="/projects/automind-home.png" alt="AutoMind public homepage with car service booking" fill sizes="(max-width: 850px) 90vw, 42vw" /></div>
                </div>
              )}
              {index > 1 && project.slug !== "automind-ai" && (
                <div className="archive-featured-media system-visual" role="img" aria-label={`${project.name} conceptual ${systemVisuals[project.slug].label.toLowerCase()} diagram`}>
                  <span className="system-visual-top"><i /> {systemVisuals[project.slug].label} <span>API / SYSTEMS</span></span>
                  <div className="system-visual-pipeline">
                    {systemVisuals[project.slug].nodes.map((node, nodeIndex) => (
                      <div className="system-visual-step" key={node}>
                        <small>0{nodeIndex + 1}</small>
                        <strong>{node}</strong>
                      </div>
                    ))}
                  </div>
                  <span className="system-visual-bottom"><i /> CONNECTED WORKFLOWS <span>● ● ●</span></span>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
    </PageTransition>
  );
}
