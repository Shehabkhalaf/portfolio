import type { Metadata } from "next";
import Link from "next/link";
import PageMotion from "../components/PageMotion";
import PageTransition from "../components/PageTransition";
import SiteHeader from "../components/SiteHeader";
import ExperienceTimeline from "../components/ExperienceTimeline";

export const metadata: Metadata = {
  title: "Experience | Shehab Khalaf",
  description: "Shehab Khalaf's backend engineering experience across Borders & Gates, freelance projects, and Softigital.",
};

export default function ExperiencePage() {
  return (
    <PageTransition>
      <main className="site interior-page experience-page">
        <PageMotion />
        <SiteHeader active="experience" />
        <div className="interior-shell">
          <section className="interior-hero experience-hero" aria-labelledby="experience-page-title">
            <div className="experience-hero-copy">
              <p className="work-kicker">EXPERIENCE / BACKEND ENGINEERING</p>
              <h1 id="experience-page-title">Experience built <em>in production.</em></h1>
              <p>I&apos;ve built Laravel APIs and backend workflows across engineering teams and direct client work. Here&apos;s where I contributed and what I delivered.</p>
              <div className="experience-hero-links"><Link className="button" href="/work">See the work <span>↗</span></Link><a className="secondary" href="/Shehab-Khalaf-Resume.pdf" download="Shehab-Khalaf-Resume.pdf">Download resume <span>↓</span></a></div>
            </div>
            <div className="experience-hero-visual" role="img" aria-label="Backend workflow from product requirements through APIs and data to a released product">
              <div className="experience-visual-top"><span><i /> DELIVERY FLOW</span><span>PHP / LARAVEL</span></div>
              <div className="experience-visual-step"><small>01 / INPUT</small><strong>Product requirements</strong><span>features · constraints · users</span></div>
              <div className="experience-visual-line"><i /></div>
              <div className="experience-visual-step is-core"><small>02 / BACKEND</small><strong>APIs + business rules</strong><span>validation · data · integrations</span></div>
              <div className="experience-visual-line"><i /></div>
              <div className="experience-visual-step"><small>03 / DELIVERY</small><strong>Production workflows</strong><span>queues · deployment · maintenance</span></div>
              <div className="experience-visual-foot"><span>STATUS</span><strong>BUILT FOR REAL USE</strong></div>
            </div>
          </section>

          <section className="experience-history" aria-labelledby="experience-history-title">
            <div className="experience-history-head"><div><span>01 / CAREER TIMELINE</span><h2 id="experience-history-title">Teams, clients, and <em>shipped work.</em></h2></div><p>Three settings. One focus: backend systems that make products work. Freelance projects continued alongside team roles.</p></div>
            <ExperienceTimeline />
          </section>

          <div className="experience-bottom-cta"><div><span>BEHIND EVERY PRODUCT IS A SYSTEM</span><h2>See what the work became.</h2><p>Explore case studies showing the API flows, integrations, and decisions behind selected projects.</p></div><Link href="/work">Explore projects <span>↗</span></Link></div>
        </div>
      </main>
    </PageTransition>
  );
}
