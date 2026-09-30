import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageTransition from "../../components/PageTransition";
import SiteHeader from "../../components/SiteHeader";
import PageMotion from "../../components/PageMotion";

const projects = {
  hasanat: {
    name: "Hasanat",
    category: "DONATIONS / PAYMENTS",
    period: "2025 — 2026",
    url: "https://hasanat.org/",
    overview: "A multi-country giving platform where donors can discover causes, make one-time or recurring donations, calculate Zakat, and follow the impact of their contributions across web and mobile.",
    role: "I worked on the Laravel backend that connects the donor experience with payments, campaign-specific flows, and the admin team's operations.",
    contributions: [
      "Built donation and cart workflows for guests and signed-in donors, including checkout and receipts.",
      "Integrated one-time and recurring payments, with webhook handling and refund support.",
      "Developed Zakat and Qurban features, including calculation, campaign data, and donor-facing records.",
      "Built admin APIs to review projects and donations, manage public website sections, and control Zakat availability.",
      "Added currency synchronization, reporting exports, localized API responses, and API documentation.",
    ],
    focus: "Keeping donation state consistent from checkout to confirmation, while making project browsing fast and supporting the same workflows across web and mobile.",
    stack: ["Laravel 11", "PHP", "MySQL", "REST API", "Redis", "Queues", "Payments"],
  },
  "laundry-heroes": {
    name: "Laundry Heroes",
    category: "ON-DEMAND SERVICES",
    period: "2025 — 2026",
    url: "https://laundry-heroes.com/",
    overview: "Laundry Heroes connects customers, drivers, and the operations team through mobile apps and an admin dashboard. I focused on the Laravel APIs behind those experiences and a structure that can support new features as the product grows.",
    role: "I built and organized the backend APIs consumed by the customer and driver apps and the admin dashboard, alongside the order, payment, and communication workflows they rely on.",
    contributions: [
      "Organized versioned API routes by feature, with dedicated request validation, response resources, actions, and services to keep responsibilities clear as the platform expands.",
      "Built customer and driver API flows around ordering, pickup, delivery, and role-based status changes.",
      "Provided admin-facing APIs for operational oversight and order analytics.",
      "Integrated payment callbacks, real-time chat, and push notifications across the product.",
    ],
    focus: "Giving each mobile app and the dashboard a consistent API while keeping the order lifecycle predictable and the codebase easy to extend.",
    stack: ["Laravel 12", "PHP 8.2", "MySQL", "Firebase", "Payment Integration"],
  },
  "multiply-dashboard": {
    name: "Multiply Dashboard",
    category: "FINANCIAL ANALYTICS",
    period: "2026 — PRESENT",
    url: "https://dashboard.multiply-wealth.com/",
    overview: "Multiply brings financial activity from different sources into a private wealth management dashboard. The backend organizes accounts, transactions, assets, and reporting across currencies.",
    role: "I worked on the Laravel APIs behind financial reporting, data integrations, scheduled processing, and AI-assisted insights.",
    contributions: [
      "Built APIs for multi-currency views of assets, cash flow, net worth, and other financial activity.",
      "Integrated bank data synchronization with repeat-safe transaction updates and verified webhooks.",
      "Added queued jobs for currency rates and data synchronization, keeping longer-running work outside normal requests.",
      "Developed AI-assisted insights that work within the user's authorized data scope.",
    ],
    focus: "Keeping financial data consistent across currencies and integrations, with appropriate access boundaries and dependable background processing.",
    stack: ["Laravel", "Plaid", "Queues", "FX Data", "AI"],
  },
  "automind-ai": {
    name: "Automind AI",
    category: "OPERATIONS / AI",
    period: "2026",
    url: "https://automindai.ae/",
    overview: "AutoMind connects on-site car service with digital inspections. I built backend workflows that turn technician checklists and photos into structured AI-assisted reports, and add useful narrative insights to operational reporting.",
    role: "I developed Laravel APIs and service logic for inspection reports, AI integrations, operational insights, notifications, and localized client experiences.",
    contributions: [
      "Connected inspection checklists and photos to a two-stage AI analysis that produces structured vehicle findings and a report-ready response.",
      "Moved report generation to a background job so photo analysis does not hold up the order request.",
      "Added AI-generated narrative insights to overview, revenue, service, payroll, and expense reports, with cached results and rule-based fallbacks.",
      "Supported Arabic and English API responses and event-driven customer notifications.",
    ],
    focus: "Making AI output useful inside real workflows: ground inspection reports in recorded evidence, keep longer analysis off the request path, and make reporting available even when the AI service fails.",
    stack: ["Laravel", "REST API", "Gemini", "Groq", "Queues", "Firebase"],
  },
  mountainshoes: {
    name: "Mountainshoes",
    category: "E-COMMERCE",
    period: "2025",
    url: "https://mountainshoes.shop/",
    overview: "Mountainshoes is an online store with product discovery, customer accounts, cart, checkout, and order tracking.",
    role: "I built the Laravel backend and handled data design and deployment.",
    contributions: [
      "Developed catalog, cart, checkout, authentication, and profile workflows.",
      "Designed database structures for products, orders, and users.",
      "Prepared migrations, seeding, server configuration, and deployment.",
    ],
    focus: "Maintaining reliable order data and responsive product and checkout flows.",
    stack: ["Laravel", "MySQL", "E-commerce", "Deployment"],
  },
  "case-prep": {
    name: "Case Prep",
    category: "EDUCATION",
    period: "2025",
    url: "https://caseprep.co/",
    overview: "Case Prep is a learning platform with courses, user accounts, real-time data, and online payments.",
    role: "I delivered the project independently from architecture and integrations to deployment.",
    contributions: [
      "Integrated Firebase for real-time data, authentication, and course management.",
      "Connected PayPal and an additional payment gateway.",
      "Handled backend and frontend workflow integration.",
    ],
    focus: "Joining learning content and payment flows into a dependable user experience.",
    stack: ["Laravel", "Firebase", "PayPal", "Deployment"],
  },
  sable: {
    name: "Sable",
    category: "B2B COMMERCE",
    period: "2024",
    url: "https://sablesweets.com/",
    overview: "Sable supports business operations around accounts, orders, inventory, and reporting.",
    role: "I developed Laravel backend logic and supporting API integrations for the platform.",
    contributions: [
      "Built role-based account and access workflows.",
      "Added order and inventory processes with reporting support.",
      "Improved database queries and resolved backend issues.",
    ],
    focus: "Making day-to-day business workflows dependable and easier to maintain.",
    stack: ["Laravel", "MySQL", "B2B", "RBAC"],
  },
  "zero-lice": {
    name: "Zero Lice",
    category: "SERVICES PLATFORM",
    period: "2025",
    url: "https://zerolice.ae/",
    overview: "Zero Lice is a service platform with a Next.js frontend and Laravel backend for content and package information.",
    role: "I worked on backend APIs, frontend integration, and automated deployment.",
    contributions: [
      "Developed backend features for blogs and package pricing.",
      "Connected the frontend to server-side APIs.",
      "Set up CI/CD workflows and maintained production releases.",
    ],
    focus: "Keeping public content updates and deployments reliable.",
    stack: ["Laravel", "Next.js", "APIs", "CI/CD"],
  },
  "accounting-system": {
    name: "Accounting System",
    category: "INTERNAL OPERATIONS",
    period: "2025",
    url: "https://services.altahadiservices.com/",
    overview: "An internal platform for tracking financial activity and supporting employee operations.",
    role: "I delivered the backend and core business logic independently.",
    contributions: [
      "Built expense, income, invoice, and reporting workflows.",
      "Added employee management and access control.",
      "Handled delivery from implementation through deployment.",
    ],
    focus: "Clear financial records and appropriate access to operational data.",
    stack: ["Laravel", "Accounting", "Reporting", "RBAC"],
  },
  "b2b-sable": {
    name: "B2B Sable",
    category: "WHOLESALE COMMERCE",
    period: "2024",
    url: "https://b2b.sablesweets.com/",
    overview: "A wholesale platform for business customers to manage orders and related inventory workflows.",
    role: "I handled requirements, backend architecture, implementation, and deployment.",
    contributions: [
      "Built authentication, role-based access, and customer management.",
      "Developed order, inventory, and reporting workflows.",
      "Integrated APIs and maintained the platform after launch.",
    ],
    focus: "Supporting repeatable business ordering with reliable backend workflows.",
    stack: ["Laravel", "MySQL", "B2B", "APIs"],
  },
} as const;

type ProjectSlug = keyof typeof projects;

const extendedStudies = {
  mountainshoes: {
    title: "From product discovery to a placed order.",
    intro: "The store needed more than a catalog: customer accounts, checkout, and order data had to work together in one Laravel backend.",
    steps: [
      { title: "Catalog and accounts", detail: "Structured product data and customer profiles for browsing and repeat visits." },
      { title: "Cart and checkout", detail: "Connected selected products to checkout and order records with consistent database relationships." },
      { title: "Deployment", detail: "Prepared the server environment, migrations, seeding, and release steps for the live store." },
    ],
    flow: ["BROWSE PRODUCTS", "CHECKOUT", "TRACK ORDER"],
  },
  "case-prep": {
    title: "Keeping learning and payment flows connected.",
    intro: "I delivered Case Prep independently, joining course data, authentication, and payment integrations into a working platform.",
    steps: [
      { title: "Course data", detail: "Used Firebase for real-time data storage, authentication, and course management." },
      { title: "Payment options", detail: "Connected PayPal and a second gateway to support the platform's checkout requirements." },
      { title: "End-to-end delivery", detail: "Handled the architecture, integration work, performance fixes, and deployment." },
    ],
    flow: ["EXPLORE COURSES", "SIGN IN", "COMPLETE PAYMENT"],
  },
  sable: {
    title: "Backend workflows for business operations.",
    intro: "Sable's Laravel backend supports the work behind the storefront: account access, orders, inventory, and reporting.",
    steps: [
      { title: "Controlled access", detail: "Built authentication, user management, and role-based access for different responsibilities." },
      { title: "Operational flows", detail: "Connected order processing with inventory and reporting workflows." },
      { title: "Maintenance", detail: "Improved database queries and resolved backend issues as the platform evolved." },
    ],
    flow: ["BUSINESS ACCOUNT", "PROCESS ORDER", "UPDATE INVENTORY"],
  },
  "zero-lice": {
    title: "A maintainable service website pipeline.",
    intro: "The project combines a Next.js frontend with Laravel services for public content and package pricing.",
    steps: [
      { title: "Content APIs", detail: "Built backend functionality for blogs and package pricing sections." },
      { title: "Frontend connection", detail: "Worked across the frontend and backend boundary to keep published content in sync." },
      { title: "Release workflow", detail: "Set up CI/CD for backend deployment and maintained production updates." },
    ],
    flow: ["MANAGE CONTENT", "SERVE API", "PUBLISH WEBSITE"],
  },
  "accounting-system": {
    title: "One place for financial and employee operations.",
    intro: "I delivered the Laravel backend independently for an internal system covering financial records and team access.",
    steps: [
      { title: "Financial records", detail: "Built workflows for expenses, income, invoices, and reporting." },
      { title: "Team access", detail: "Added employee management and access control around operational data." },
      { title: "Delivery", detail: "Handled the core business logic through deployment of the internal platform." },
    ],
    flow: ["RECORD ACTIVITY", "GENERATE INVOICE", "REVIEW REPORTS"],
  },
  "b2b-sable": {
    title: "A dedicated wholesale ordering experience.",
    intro: "This B2B Sable platform focused on the workflows business customers and the operations team need to manage wholesale orders.",
    steps: [
      { title: "Business access", detail: "Implemented authentication, role-based access, and customer management." },
      { title: "Ordering operations", detail: "Built order processing, inventory management, and reporting logic." },
      { title: "Full delivery", detail: "Worked from requirements and architecture through deployment and maintenance." },
    ],
    flow: ["BUSINESS CUSTOMER", "PLACE ORDER", "MANAGE STOCK"],
  },
} as const;

type ExtendedSlug = keyof typeof extendedStudies;

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug as ProjectSlug];
  if (!project) return { title: "Project not found" };
  return { title: `${project.name} | Shehab Khalaf`, description: project.overview };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug as ProjectSlug];
  if (!project) notFound();
  const extendedStudy = slug in extendedStudies ? extendedStudies[slug as ExtendedSlug] : null;
  const projectSlugs = Object.keys(projects) as ProjectSlug[];
  const nextSlug = projectSlugs[(projectSlugs.indexOf(slug as ProjectSlug) + 1) % projectSlugs.length];
  const nextProject = projects[nextSlug];

  return (
    <PageTransition>
    <main className="site project-page">
      <PageMotion />
      <SiteHeader active="work" />

      <article className="project-detail">
        <Link className="back-link" href="/work">← ALL PROJECTS</Link>
        <div className="detail-heading">
          <p className="work-kicker">{project.category} <span>/</span> {project.period}</p>
          <h1>{slug === "hasanat" ? <Image className="detail-project-logo" src="/projects/hasanat-logo.svg" alt="Hasanat" width={500} height={160} priority /> : slug === "laundry-heroes" ? <span className="detail-laundry-logo"><Image src="/projects/laundry-heroes-logo.png" alt="Laundry Heroes" width={112} height={112} priority /></span> : slug === "automind-ai" ? <span className="detail-automind-logo"><Image src="/projects/automind-logo.png" alt="AutoMind AI" width={430} height={132} priority /></span> : <>{project.name}<em>.</em></>}</h1>
          <p>{project.overview}</p>
          <div className="detail-actions">
            <a className="button" href={project.url} target="_blank" rel="noopener noreferrer">Visit project <span>↗</span></a>
            <Link className="secondary" href="/work">Browse all work <span>→</span></Link>
          </div>
        </div>

        <div className="detail-grid">
          <section className="detail-panel">
            <span className="detail-number">01 / MY ROLE</span>
            <h2>What I worked on</h2>
            <p>{project.role}</p>
            <ul>{project.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul>
          </section>
          <div className="detail-side">
            <section className="detail-panel">
              <span className="detail-number">02 / ENGINEERING FOCUS</span>
              <h2>The important part</h2>
              <p>{project.focus}</p>
            </section>
            <section className="detail-panel">
              <span className="detail-number">03 / TECHNOLOGIES</span>
              <h2>Stack used</h2>
              <ul className="project-tags">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
          </div>
        </div>
        {extendedStudy && (
          <section className="hasanat-case extended-case" aria-labelledby="extended-case-title">
            <div className="case-section-heading">
              <span className="detail-number">04 / HOW THE SYSTEM WORKS</span>
              <h2 id="extended-case-title">{extendedStudy.title}</h2>
              <p>{extendedStudy.intro}</p>
            </div>
            <div className="case-capabilities">
              {extendedStudy.steps.map((step, index) => (
                <div key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.detail}</p></div>
              ))}
            </div>
            <div className="case-flow" aria-label="High-level product flow">
              {extendedStudy.flow.map((step, index) => (
                <span className="case-flow-step" key={step}>{index > 0 && <i aria-hidden="true">→</i>}<span>{step}</span></span>
              ))}
            </div>
          </section>
        )}
        {slug === "hasanat" && (
          <>
            <section className="hasanat-case" aria-labelledby="hasanat-case-title">
              <div className="case-section-heading">
                <span className="detail-number">04 / PROJECT OVERVIEW</span>
                <h2 id="hasanat-case-title">Making the donation journey work end to end.</h2>
                <p>Hasanat combines several ways to give in one product. My backend work joined the public experience, payment lifecycle, and operational tools so those flows could be managed consistently.</p>
              </div>
              <div className="case-capabilities">
                <div><span>01</span><h3>Donor journey</h3><p>Project discovery, donation cart, checkout, donor history, and receipts across web and mobile.</p></div>
                <div><span>02</span><h3>Payments</h3><p>One-time and recurring donations, payment status updates, webhook verification, and refund workflows.</p></div>
                <div><span>03</span><h3>Specialized giving</h3><p>Zakat calculation and Qurban flows with data that can be maintained by the team.</p></div>
                <div><span>04</span><h3>Admin control</h3><p>Review projects and donations, update public content, and show or hide sections such as Zakat.</p></div>
              </div>
              <div className="case-flow" aria-label="High-level donation flow">
                <span>DISCOVER A CAUSE</span><i>→</i><span>CHOOSE A DONATION</span><i>→</i><span>CONFIRM PAYMENT</span><i>→</i><span>RECEIPT & RECORD</span>
              </div>
            </section>

            <section className="case-decisions" aria-labelledby="case-decisions-title">
              <div className="case-section-heading">
                <span className="detail-number">05 / BEHIND THE EXPERIENCE</span>
                <h2 id="case-decisions-title">The backend decisions that mattered.</h2>
                <p>A few examples of how I connected the visible donor journey to reliable backend behavior.</p>
              </div>
              <div className="decision-list">
                <article><span>01 / CONTINUITY</span><div><h3>Let people start giving immediately.</h3><p>Donors can build a cart as guests. If they sign in later, their selected donations can move with them, so they do not need to restart the checkout journey.</p></div></article>
                <article><span>02 / PAYMENT STATE</span><div><h3>Keep the donation record in sync.</h3><p>The payment flow connects gateway events to donation status, receipts, and recurring giving controls. This gives the donor and operations team a consistent view after checkout.</p></div></article>
                <article><span>03 / FRESH DATA</span><div><h3>Update prices without slowing discovery.</h3><p>Scheduled jobs refresh exchange and Nisab prices. Project browsing uses caching, with invalidation when project data changes, so the public experience stays responsive.</p></div></article>
                <article><span>04 / SITE CONTROL</span><div><h3>Give the team control without code changes.</h3><p>Admin tools let the team review donation activity and projects, manage what appears on the website, and control the availability of Zakat-related sections and settings.</p></div></article>
              </div>
            </section>

            <section className="case-gallery" aria-labelledby="case-gallery-title">
              <div className="case-section-heading">
                <span className="detail-number">06 / PUBLIC PRODUCT SCREENS</span>
                <h2 id="case-gallery-title">What the donor sees.</h2>
                <p>These images show public pages only. They illustrate the experience supported by the backend without exposing internal dashboards or client data.</p>
              </div>
              <div className="case-gallery-grid">
                <figure className="gallery-main"><div><Image src="/projects/hasanat.png" alt="Hasanat homepage with quick donation form" fill sizes="(max-width: 800px) 90vw, 70vw" /></div><figcaption><strong>Quick donation</strong><span>Public homepage</span></figcaption></figure>
                <figure><div><Image src="/projects/hasanat-projects.png" alt="Hasanat public projects listing" fill sizes="(max-width: 800px) 90vw, 45vw" /></div><figcaption><strong>Explore causes</strong><span>Project discovery</span></figcaption></figure>
                <figure><div><Image src="/projects/hasanat-zakat.png" alt="Hasanat public Zakat calculator introduction" fill sizes="(max-width: 800px) 90vw, 45vw" /></div><figcaption><strong>Zakat journey</strong><span>Calculator introduction</span></figcaption></figure>
              </div>
            </section>
          </>
        )}
        {slug === "laundry-heroes" && (
          <>
            <section className="hasanat-case" aria-labelledby="laundry-case-title">
              <div className="case-section-heading">
                <span className="detail-number">04 / SYSTEM OVERVIEW</span>
                <h2 id="laundry-case-title">One backend, several product experiences.</h2>
                <p>The main work was delivering APIs for the customer and driver mobile apps and the operations dashboard. Shared business rules keep order and payment data consistent across those clients.</p>
              </div>
              <div className="case-capabilities">
                <div><span>01</span><h3>Customer app</h3><p>Services, order placement, status updates, payment, and communication.</p></div>
                <div><span>02</span><h3>Driver app</h3><p>Assigned work, pickup and delivery progress, and status updates.</p></div>
                <div><span>03</span><h3>Admin dashboard</h3><p>APIs for monitoring orders and managing daily operations.</p></div>
                <div><span>04</span><h3>Room to grow</h3><p>Versioned routes and separate validation, resources, actions, and services make features easier to extend.</p></div>
              </div>
              <div className="case-flow" aria-label="High-level Laundry Heroes API structure">
                <span>MOBILE APPS</span><i>→</i><span>VERSIONED API</span><i>←</i><span>ADMIN DASHBOARD</span>
              </div>
            </section>
            <section className="case-gallery" aria-labelledby="laundry-gallery-title">
              <div className="case-section-heading">
                <span className="detail-number">05 / PUBLIC PRODUCT SCREEN</span>
                <h2 id="laundry-gallery-title">The experience the APIs support.</h2>
                <p>A screenshot of the public Laundry Heroes website and its mobile app preview.</p>
              </div>
              <div className="case-gallery-grid">
                <figure className="gallery-main"><div><Image src="/projects/laundry-heroes.png" alt="Laundry Heroes homepage with mobile app preview" fill sizes="(max-width: 800px) 90vw, 70vw" /></div><figcaption><strong>Laundry Heroes</strong><span>Public homepage</span></figcaption></figure>
              </div>
            </section>
          </>
        )}
        {slug === "multiply-dashboard" && (
          <section className="hasanat-case" aria-labelledby="multiply-case-title">
            <div className="case-section-heading">
              <span className="detail-number">04 / SYSTEM OVERVIEW</span>
              <h2 id="multiply-case-title">Turning financial data into useful context.</h2>
              <p>The backend connects several financial workflows while keeping user data scoped and reporting consistent. This overview describes the engineering work without showing private dashboard screens or financial records.</p>
            </div>
            <div className="case-capabilities">
              <div><span>01</span><h3>Financial APIs</h3><p>Endpoints for assets, transactions, cash reports, and net worth views.</p></div>
              <div><span>02</span><h3>Bank sync</h3><p>Integration and webhook flows that update linked financial activity reliably.</p></div>
              <div><span>03</span><h3>Currency data</h3><p>Scheduled exchange-rate updates support consistent multi-currency reporting.</p></div>
              <div><span>04</span><h3>Insights</h3><p>Reporting and AI-assisted analysis operate within each user&apos;s authorized data scope.</p></div>
            </div>
          </section>
        )}
        {slug === "automind-ai" && (
          <>
            <section className="hasanat-case" aria-labelledby="automind-case-title">
              <div className="case-section-heading">
                <span className="detail-number">04 / PROJECT OVERVIEW</span>
                <h2 id="automind-case-title">AI that supports the inspection workflow.</h2>
                <p>AutoMind combines service booking with vehicle inspections and business operations. My backend work connects the recorded inspection evidence to an AI-generated report, while keeping the service and reporting APIs usable for the rest of the product.</p>
              </div>
              <div className="case-capabilities">
                <div><span>01</span><h3>Recorded evidence</h3><p>Technician checklist items, measurements, notes, and photos form the input to the inspection report.</p></div>
                <div><span>02</span><h3>AI analysis</h3><p>Photo analysis feeds a second pass that produces structured findings and a report-ready response.</p></div>
                <div><span>03</span><h3>Background work</h3><p>Queued report generation lets the order flow finish while longer AI analysis continues.</p></div>
                <div><span>04</span><h3>Business insights</h3><p>AI adds narrative context to operational reports, with a rule-based fallback when needed.</p></div>
              </div>
              <div className="case-flow" aria-label="High-level AI inspection report flow">
                <span>INSPECTION</span><i>→</i><span>PHOTO &amp; CHECKLIST ANALYSIS</span><i>→</i><span>STRUCTURED REPORT</span>
              </div>
            </section>
            <section className="case-decisions" aria-labelledby="automind-decisions-title">
              <div className="case-section-heading">
                <span className="detail-number">05 / BACKEND APPROACH</span>
                <h2 id="automind-decisions-title">How the AI fits the product.</h2>
                <p>The integration turns recorded inputs into usable reports while keeping long-running work and service failures under control.</p>
              </div>
              <div className="decision-list">
                <article><span>01 / EVIDENCE</span><div><h3>Ground the report in the inspection.</h3><p>The AI reads technician findings and related photos before producing the final structured response, so the report is tied to recorded vehicle evidence.</p></div></article>
                <article><span>02 / ASYNC WORK</span><div><h3>Keep the order API responsive.</h3><p>Report generation runs in a background job. The app can check its status while image analysis and report writing finish.</p></div></article>
                <article><span>03 / OPERATIONS</span><div><h3>Explain the numbers.</h3><p>Smart Insights adds short narrative findings to overview, revenue, service, payroll, and expense reports, based on each report&apos;s data and date range.</p></div></article>
                <article><span>04 / RESILIENCE</span><div><h3>Keep reporting useful when AI is unavailable.</h3><p>Operational insights use caching and can fall back to rule-based summaries if the AI provider is unavailable or returns an unusable response.</p></div></article>
              </div>
            </section>
            <section className="case-gallery" aria-labelledby="automind-gallery-title">
              <div className="case-section-heading">
                <span className="detail-number">06 / PUBLIC PRODUCT SCREENS</span>
                <h2 id="automind-gallery-title">The public-facing product.</h2>
                <p>These screenshots come from AutoMind&apos;s public website. They show the service and AI inspection offering without exposing customer reports or internal dashboards.</p>
              </div>
              <div className="case-gallery-grid">
                <figure className="gallery-main"><div><Image src="/projects/automind-home.png" alt="AutoMind public homepage featuring car services" fill sizes="(max-width: 800px) 90vw, 70vw" /></div><figcaption><strong>Car service</strong><span>Public homepage</span></figcaption></figure>
                <figure className="gallery-main"><div><Image src="/projects/automind-ai-service.png" alt="AutoMind public AI inspection service page" fill sizes="(max-width: 800px) 90vw, 70vw" /></div><figcaption><strong>AI inspection</strong><span>Public service page</span></figcaption></figure>
              </div>
            </section>
          </>
        )}
        <nav className="detail-next" aria-label="More projects">
          <div><span>KEEP EXPLORING</span><strong>Next project</strong></div>
          <Link href={`/work/${nextSlug}`}>{nextProject.name} <span aria-hidden="true">↗</span></Link>
        </nav>
        <div className="detail-footer"><span>HIGH-LEVEL PROJECT OVERVIEW</span><Link href="/work">← BACK TO WORK</Link></div>
      </article>
    </main>
    </PageTransition>
  );
}
