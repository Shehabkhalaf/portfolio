import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import PageTransition from "../components/PageTransition";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact | Shehab Khalaf",
  description: "Contact Shehab Khalaf about backend engineering, Laravel APIs, integrations, and project opportunities.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <main className="site contact-page contact-refresh">
        <SiteHeader active="contact" />
        <section className="contact-refresh-content" aria-labelledby="contact-page-title">
          <div className="contact-refresh-copy">
            <Link className="contact-refresh-back" href="/">← BACK TO HOME</Link>
            <p className="work-kicker">CONTACT / START A CONVERSATION</p>
            <h1 id="contact-page-title">Let&apos;s build <em>something useful.</em></h1>
            <p className="contact-refresh-lead">Have an API to design, a product to grow, or an integration to make reliable? Tell me what you&apos;re working on.</p>
            <div className="contact-refresh-topics"><span>GOOD STARTING POINTS</span><div><span>Backend APIs</span><span>Integrations</span><span>Product workflows</span><span>Engineering roles</span></div></div>
            <div className="contact-refresh-direct">
              <span>REACH ME DIRECTLY</span>
              <a href="mailto:shehabkhalaf7474@gmail.com"><span className="contact-direct-icon" aria-hidden="true">@</span><span><small>EMAIL</small><strong>shehabkhalaf7474@gmail.com</strong></span><b aria-hidden="true">↗</b></a>
              <a href="tel:+201148173525"><span className="contact-direct-icon" aria-hidden="true">✆</span><span><small>PHONE</small><strong>+20 114 817 3525</strong></span><b aria-hidden="true">↗</b></a>
            </div>
            <div className="contact-refresh-signal" aria-hidden="true"><span><i /> CONNECTION READY</span><div><b>YOUR IDEA</b><em>→</em><b>LET&apos;S TALK</b></div><small>API / PRODUCT / COLLABORATION</small></div>
          </div>
          <ContactForm />
        </section>
      </main>
    </PageTransition>
  );
}
