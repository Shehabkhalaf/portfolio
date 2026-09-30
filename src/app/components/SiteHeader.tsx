"use client";

import Link from "next/link";
import { useState } from "react";
import BrandMark from "./BrandMark";

type Page = "home" | "work" | "experience" | "expertise" | "about" | "contact";

export default function SiteHeader({ active }: { active: Page }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links: { href: string; label: string; page: Page }[] = [
    { href: "/", label: "Home", page: "home" },
    { href: "/work", label: "Work", page: "work" },
    { href: "/experience", label: "Experience", page: "experience" },
    { href: "/expertise", label: "Expertise", page: "expertise" },
    { href: "/about", label: "About", page: "about" },
    { href: "/contact", label: "Contact", page: "contact" },
  ];

  return (
    <header className="header">
      <Link className="logo" href="/" aria-label="Shehab Khalaf, home"><BrandMark /></Link>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-page-nav" onClick={() => setMenuOpen((open) => !open)}><span aria-hidden="true">{menuOpen ? "×" : "☰"}</span><span>Menu</span></button>
      <nav id="site-page-nav" className={`page-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
        {links.map(({ href, label, page }) => (
          <Link key={href} className={active === page ? "active" : undefined} href={href} aria-current={active === page ? "page" : undefined} onClick={() => setMenuOpen(false)}>{label}</Link>
        ))}
      </nav>
      {active === "contact" ? <a className="contact" href="mailto:shehabkhalaf7474@gmail.com">Email directly <span>↗</span></a> : <Link className="contact" href="/contact">Contact me <span>↗</span></Link>}
    </header>
  );
}
