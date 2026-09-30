import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import PageTransition from "../components/PageTransition";
import SiteHeader from "../components/SiteHeader";
import PageMotion from "../components/PageMotion";

export const metadata: Metadata = {
  title: "Contact | Shehab Khalaf",
  description: "Contact Shehab Khalaf about backend engineering, Laravel APIs, integrations, and project opportunities.",
};

export default function ContactPage() {
  return (
    <PageTransition>
    <main className="site contact-page">
      <PageMotion />
      <SiteHeader active="contact" />

      <section className="contact-page-content" aria-labelledby="contact-page-title">
        <div className="contact-page-copy">
          <Link className="back-link" href="/">← BACK TO HOME</Link>
          <p className="work-kicker">CONTACT / SHEHAB KHALAF</p>
          <h1 id="contact-page-title">Let&apos;s build <em>what works.</em></h1>
          <p>Need a backend developer for an API, integration, or growing product? Tell me about your idea and the challenge you&apos;re solving.</p>
          <div className="contact-page-direct">
            <span>OR REACH ME DIRECTLY</span>
            <a href="mailto:shehabkhalaf7474@gmail.com"><small>EMAIL</small><strong>shehabkhalaf7474@gmail.com</strong><b>↗</b></a>
            <a href="tel:+201148173525"><small>PHONE</small><strong>+20 114 817 3525</strong><b>↗</b></a>
          </div>
          <div className="contact-focus">
            <span>GOOD TOPICS TO SEND</span>
            <p>Laravel APIs, payment or third-party integrations, background jobs, and backend work for a growing product.</p>
          </div>
        </div>
        <ContactForm />
      </section>
    </main>
    </PageTransition>
  );
}
