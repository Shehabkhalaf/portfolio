import Image from "next/image";
import Link from "next/link";
import HomeMotion from "./components/HomeMotion";
import PageTransition from "./components/PageTransition";
import SiteHeader from "./components/SiteHeader";

const github = "https://github.com/Shehabkhalaf";

export default function Home() {
  return (
    <PageTransition>
    <main className="site" id="home">
      <HomeMotion />
      <SiteHeader active="home" />

      <section className="hero" aria-labelledby="hero-title">
        <div className="copy">
          <div className="availability"><i /> AVAILABLE FOR BACKEND OPPORTUNITIES</div>
          <p className="index">01 / THE ENGINEER</p>
          <h1 id="hero-title">Building the logic<br />behind <em>what works.</em></h1>
          <p className="description">I&apos;m <strong>Shehab Khalaf</strong>, a backend engineer focused on Laravel, APIs, and the systems that keep products running reliably at scale.</p>
          <div className="actions">
            <Link className="button" href="/contact">Send a message <span>↗</span></Link>
            <a className="secondary" href="/Shehab-Khalaf-Resume.pdf" download="Shehab-Khalaf-Resume.pdf">Download Resume <span aria-hidden="true">↓</span></a>
          </div>
          <div className="facts">
            <div><small>FOCUS</small><strong>APIs · Laravel · Systems</strong></div>
            <div><small>BASED IN</small><strong>Cairo, Egypt</strong></div>
          </div>
        </div>

        <div className="diagram" aria-label="API requests moving between backend services">
          <div className="grid" aria-hidden="true" />
          <div className="orbit orbit-a" aria-hidden="true" />
          <div className="orbit orbit-b" aria-hidden="true" />
          <div className="wire wire-a" aria-hidden="true"><i /></div>
          <div className="wire wire-b" aria-hidden="true"><i /></div>
          <div className="wire wire-c" aria-hidden="true"><i /></div>
          <div className="wire wire-d" aria-hidden="true"><i /></div>
          <div className="service request"><b>↗</b><span><small>CLIENT REQUEST</small><strong>GET /api/v1/data</strong></span><mark>200</mark></div>
          <div className="service database"><b>▤</b><span><small>DATA LAYER</small><strong>MySQL + Redis</strong></span><i /></div>
          <div className="halo" aria-hidden="true" />
          <div className="portrait"><Image src="/shehab-khalaf.png" alt="Shehab Khalaf" fill priority sizes="(max-width: 700px) 250px, 336px" /></div>
          <div className="core"><i /> THE BACKEND ENGINEER</div>
          <div className="service queue"><b>≋</b><span><small>BACKGROUND JOBS</small><strong>Queue processing</strong></span><div className="bars"><i /><i /><i /></div></div>
          <div className="service auth"><b>⌘</b><span><small>ACCESS CONTROL</small><strong>Auth / RBAC</strong></span><i /></div>
          <div className="webhook"><i /> WEBHOOK RECEIVED <strong>✓</strong></div>
          <div className="status">● SYSTEM STATUS <strong>ALL SERVICES ONLINE</strong></div>
        </div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="work-heading">
          <div>
            <p className="work-kicker">02 / SELECTED WORK</p>
            <h2 id="work-title">Systems built for <span>real use.</span></h2>
          </div>
          <p>From payments and order flows to financial data pipelines, here is a closer look at the backend systems I&apos;ve worked on.</p>
        </div>

        <div className="project-grid">
          <article className="project-card featured-project">
            <Link className="card-overlay-link" href="/work/hasanat" aria-label="Read about Hasanat" />
            <div className="project-details">
              <div className="project-topline"><span>01 / FINTECH & DONATIONS</span><span className="project-live"><i /> LIVE PROJECT</span></div>
              <div className="project-main">
                <h3>Hasanat</h3>
                <p>A multi-country donation platform with a Laravel API for web and mobile, recurring giving, payments, and Zakat.</p>
                <ul className="project-tags"><li>Laravel 11</li><li>REST API</li><li>Payments</li><li>Redis</li></ul>
              </div>
              <div className="home-card-footer"><span>Read case study →</span><a className="project-link" href="https://hasanat.org/" target="_blank" rel="noopener noreferrer">Visit site ↗</a></div>
            </div>
            <div className="project-preview hasanat-preview">
              <div className="screenshot-window">
                <Image src="/projects/hasanat.png" alt="Hasanat website showing the quick donation experience" fill sizes="(max-width: 850px) 90vw, 45vw" />
              </div>
            </div>
          </article>

          <article className="project-card compact-project">
            <Link className="card-overlay-link" href="/work/laundry-heroes" aria-label="Read about Laundry Heroes" />
            <div className="project-topline"><span>02 / ON-DEMAND SERVICES</span><span className="project-live"><i /> LIVE PROJECT</span></div>
            <div className="compact-art laundry-art laundry-screenshot">
              <Image src="/projects/laundry-heroes.png" alt="Laundry Heroes public website showing its mobile app" fill sizes="(max-width: 850px) 90vw, 30vw" />
            </div>
            <div className="compact-body">
              <h3>Laundry Heroes</h3>
              <p>APIs for the customer and driver mobile apps and the admin dashboard, structured to support future growth.</p>
              <ul className="project-tags"><li>Laravel 12</li><li>State machine</li><li>Firebase</li></ul>
              <div className="home-card-footer"><span>Read case study →</span><a className="project-link" href="https://laundry-heroes.com/" target="_blank" rel="noopener noreferrer">Visit site ↗</a></div>
            </div>
          </article>

          <article className="project-card compact-project">
            <Link className="card-overlay-link" href="/work/multiply-dashboard" aria-label="Read about Multiply Dashboard" />
            <div className="project-topline"><span>03 / FINANCIAL ANALYTICS</span><span className="project-live"><i /> LIVE PROJECT</span></div>
            <div className="compact-art finance-art" aria-hidden="true">
              <div className="chart-bars"><i /><i /><i /><i /><i /><i /><i /></div>
              <span className="chart-label">FX SYNC <b>●</b> PLAID</span>
            </div>
            <div className="compact-body">
              <h3>Multiply Dashboard</h3>
              <p>Multi-currency wealth analytics with scheduled bank sync, reporting, and AI-powered financial insights.</p>
              <ul className="project-tags"><li>Laravel</li><li>Plaid</li><li>Queues</li><li>AI</li></ul>
              <div className="home-card-footer"><span>Read case study →</span><a className="project-link" href="https://dashboard.multiply-wealth.com/" target="_blank" rel="noopener noreferrer">Visit site ↗</a></div>
            </div>
          </article>
        </div>
        <div className="show-all-wrap">
          <Link className="show-all-button" href="/work">View All Projects <span aria-hidden="true">↗</span></Link>
          <span>Explore the complete project archive</span>
        </div>
      </section>

      <section className="experience-section home-shell" id="experience" aria-labelledby="experience-title">
        <div className="home-section-intro">
          <p className="work-kicker">03 / EXPERIENCE</p>
          <h2 id="experience-title">Built with teams. <span>Shipped for users.</span></h2>
          <p>From client projects to financial platforms, I turn product requirements into dependable backend systems.</p>
        </div>
        <div className="experience-list">
          <article className="experience-item">
            <div className="experience-marker" aria-hidden="true"><span>01</span></div>
            <div className="experience-date">JAN 2026 — AUG 2026</div>
            <div className="experience-body"><div className="experience-body-top"><span className="experience-company">Borders &amp; Gates</span><span className="experience-focus">FINANCIAL SYSTEMS</span></div><h3>Software Engineer</h3><p>Built Laravel queue workflows and integrations that support financial reporting, with validation and error handling across services.</p></div>
          </article>
          <article className="experience-item">
            <div className="experience-marker" aria-hidden="true"><span>02</span></div>
            <div className="experience-date">AUG 2023 — PRESENT</div>
            <div className="experience-body"><div className="experience-body-top"><span className="experience-company">Freelance · Upwork</span><span className="experience-focus">CLIENT PRODUCTS</span></div><h3>Backend Developer</h3><p>Delivered Laravel applications and REST APIs for clients, covering database design, authentication, third-party integrations, and deployment.</p></div>
          </article>
          <article className="experience-item">
            <div className="experience-marker" aria-hidden="true"><span>03</span></div>
            <div className="experience-date">MAY 2024 — JAN 2025</div>
            <div className="experience-body"><div className="experience-body-top"><span className="experience-company">Softigital</span><span className="experience-focus">PRODUCT DEVELOPMENT</span></div><h3>Backend Developer</h3><p>Developed Laravel APIs, improved database queries, and collaborated with frontend developers on production features and integrations.</p></div>
          </article>
        </div>
      </section>

      <section className="expertise-section home-shell" id="expertise" aria-labelledby="expertise-title">
        <div className="home-section-intro">
          <p className="work-kicker">04 / WHAT I BUILD</p>
          <h2 id="expertise-title">The work behind <span>every interaction.</span></h2>
          <p>I build the server-side foundations that connect product features, data, and the teams using them.</p>
        </div>
        <div className="expertise-grid">
          <article className="expertise-card"><span>01 / PRODUCT APIS</span><h3>One clear contract for every client.</h3><p>REST APIs for web, mobile, and admin dashboards, with validation, authentication, role-based access, and documented contracts.</p><small>Laravel · REST · Sanctum · Swagger</small></article>
          <article className="expertise-card"><span>02 / BUSINESS LOGIC</span><h3>Flows that hold together.</h3><p>Orders, payments, donations, and reporting shaped around business rules, relational data, and consistent state changes.</p><small>Workflows · Webhooks · MySQL · SQL</small></article>
          <article className="expertise-card"><span>03 / INTEGRATIONS</span><h3>Systems that work together.</h3><p>Connecting payment providers, bank data, notifications, and AI services to useful product experiences.</p><small>Payments · Firebase · AI</small></article>
          <article className="expertise-card"><span>04 / BACKGROUND WORK</span><h3>Reliable work beyond the request.</h3><p>Queues, scheduled jobs, caching, and data synchronization, supported by deployment workflows and Docker.</p><small>Horizon · Redis · CI/CD · Docker</small></article>
        </div>
      </section>

      <section className="about-section home-shell" id="about" aria-labelledby="about-title">
        <div className="about-copy">
          <p className="work-kicker">05 / ABOUT ME</p>
          <h2 id="about-title">I care about what happens <span>after the request.</span></h2>
          <p>I&apos;m Shehab, a backend developer based in Cairo. I work mostly with Laravel and PHP, building APIs that support real products across customer apps, dashboards, and operations teams.</p>
          <p>My focus is making the logic understandable and the system dependable as new features, integrations, and users are added.</p>
          <div className="about-links"><a href="/Shehab-Khalaf-Resume.pdf" download="Shehab-Khalaf-Resume.pdf">Download Resume <span>↓</span></a><a href={github} target="_blank" rel="noopener noreferrer">Explore GitHub <span>↗</span></a></div>
        </div>
        <div className="about-system" role="img" aria-label="Diagram of an API request passing through authentication, application logic, and a response">
          <div className="about-system-header"><span><i /> REQUEST FLOW</span><span>BACKEND / LARAVEL</span></div>
          <div className="about-system-request"><small>INCOMING REQUEST</small><strong>POST /api/v1/orders</strong><b>→</b></div>
          <div className="about-system-pipeline"><div><span>01</span><strong>Authenticate</strong><small>Who is making the request?</small></div><div><span>02</span><strong>Apply rules</strong><small>What should happen next?</small></div><div><span>03</span><strong>Persist &amp; notify</strong><small>Keep the system in sync.</small></div></div>
          <div className="about-system-response"><i /> <span>RESPONSE READY</span><strong>200 OK</strong></div>
        </div>
      </section>

      <section className="home-contact-section home-shell" id="contact" aria-labelledby="contact-title">
        <div className="home-contact-panel">
          <div><p className="work-kicker">06 / LET&apos;S CONNECT</p><h2 id="contact-title">Have a backend challenge <span>worth solving?</span></h2><p>Let&apos;s talk about APIs, integrations, or the next product you&apos;re building.</p></div>
          <Link className="home-contact-button" href="/contact">Contact <span>↗</span></Link>
        </div>
      </section>
    </main>
    </PageTransition>
  );
}
