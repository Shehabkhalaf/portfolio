import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageMotion from "../components/PageMotion";
import PageTransition from "../components/PageTransition";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "About | Shehab Khalaf",
  description: "Get to know Shehab Khalaf, a Cairo-based backend engineer building Laravel APIs and product systems.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="site interior-page about-page">
        <PageMotion />
        <SiteHeader active="about" />
        <div className="interior-shell">
          <section className="interior-hero about-hero" aria-labelledby="about-page-title">
            <div>
              <p className="work-kicker">ABOUT / THE ENGINEER</p>
              <h1 id="about-page-title">The person behind <em>the backend.</em></h1>
              <p>I&apos;m Shehab Khalaf, a backend engineer in Cairo. I build Laravel APIs and the workflows behind products used by customers, operations teams, and administrators.</p>
              <div className="interior-actions"><Link className="button" href="/contact">Get in touch <span>↗</span></Link><a className="secondary" href="/Shehab-Khalaf-Resume.pdf" download="Shehab-Khalaf-Resume.pdf">Download resume <span>↓</span></a></div>
            </div>
            <div className="about-portrait"><Image src="/shehab-khalaf.png" alt="Shehab Khalaf" fill priority sizes="(max-width: 800px) 80vw, 390px" /></div>
          </section>
          <section className="interior-section" aria-labelledby="about-approach-title">
            <div className="interior-section-head"><span>01 / APPROACH</span><h2 id="about-approach-title">How I think about the work.</h2></div>
            <div className="interior-grid">
              <article className="interior-card"><span>01 / PRODUCT FIRST</span><h3>Start with the real flow.</h3><p>I translate requirements into clear API contracts and business rules so mobile apps, websites, and dashboards can use one dependable backend.</p></article>
              <article className="interior-card"><span>02 / KEEP IT CLEAR</span><h3>Make change manageable.</h3><p>I organize Laravel code around responsibilities and document the API for the teams building the client experience.</p></article>
              <article className="interior-card"><span>03 / STAY RELIABLE</span><h3>Handle work beyond the request.</h3><p>I use queues, validation, and consistent data handling for payment events, notifications, reporting, and external integrations.</p></article>
            </div>
          </section>
          <section className="interior-note" aria-labelledby="about-background-title">
            <div><span>02 / BACKGROUND</span><h2 id="about-background-title">Computer science, applied to real products.</h2><p>I graduated from Helwan University in 2025 with a degree in Computer Science. Since 2023, I&apos;ve worked across freelance projects and engineering teams on commerce, donations, on-demand services, and financial tools.</p></div>
            <Link href="/experience">Explore experience <span>↗</span></Link>
          </section>
        </div>
      </main>
    </PageTransition>
  );
}
