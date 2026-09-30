"use client";

import { useState, type FormEvent } from "react";

const recipient = "shehabkhalaf7474@gmail.com";

export default function ContactForm() {
  const [emailAppOpened, setEmailAppOpened] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !subject || !message) return;

    const body = [
      `Hi Shehab,`,
      "",
      message,
      "",
      `From: ${name}`,
      `Email: ${email}`,
    ].join("\n");

    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setEmailAppOpened(true);
    window.location.href = mailto;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-top"><span><i /> NEW MESSAGE</span><span>CONTACT / 01</span></div>
      <h2>Tell me about it.</h2>
      <p>Share a little context and I&apos;ll get back to you.</p>

      <div className="contact-form-fields">
        <label htmlFor="contact-name">Your name <span>*</span><input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your name" maxLength={100} required /></label>
        <label htmlFor="contact-email">Email address <span>*</span><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" maxLength={200} required /></label>
        <label className="contact-form-wide" htmlFor="contact-subject">What&apos;s this about? <span>*</span><select id="contact-subject" name="subject" defaultValue="" required><option value="" disabled>Choose a topic</option><option value="Backend project inquiry">Backend project</option><option value="Job opportunity">Job opportunity</option><option value="Collaboration">Collaboration</option><option value="General question">General question</option></select></label>
        <label className="contact-form-wide" htmlFor="contact-message">Your message <span>*</span><textarea id="contact-message" name="message" rows={6} placeholder="Tell me what you're building or what you need help with..." minLength={10} maxLength={4000} required /></label>
      </div>

      <div className="contact-form-submit"><button type="submit">Continue to email <span>↗</span></button><p>Your email app will open with the message ready to send.</p></div>
      {emailAppOpened && <p className="contact-form-feedback" role="status">Check your email app and press Send to finish.</p>}
    </form>
  );
}
