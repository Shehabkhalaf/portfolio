import Link from "next/link";
import SocialIcon from "./SocialIcon";
import BrandMark from "./BrandMark";

const email = "mailto:shehabkhalaf7474@gmail.com";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-main">
          <div className="site-footer-brand">
            <Link className="site-footer-logo" href="/" aria-label="Shehab Khalaf, home">
              <BrandMark />
            </Link>
            <p>Backend systems for products people use every day.</p>
            <span className="site-footer-location"><i /> BASED IN CAIRO, EGYPT</span>
            <div className="site-footer-direct">
              <a href={email}>shehabkhalaf7474@gmail.com</a>
              <a href="tel:+201148173525">+20 114 817 3525</a>
            </div>
          </div>

          <nav className="site-footer-links" aria-label="Footer navigation">
            <span>EXPLORE</span>
            <Link href="/">Home</Link>
            <Link href="/work">Work</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/expertise">Expertise</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="site-footer-links site-footer-social">
            <span>CONNECT</span>
            <div className="social-icon-list">
              <a href="https://www.linkedin.com/in/Shehab-khalaf" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><SocialIcon platform="linkedin" /></a>
              <span className="social-icon-pending" role="img" aria-label="Instagram profile link pending" title="Instagram link needed"><SocialIcon platform="instagram" /></span>
              <span className="social-icon-pending" role="img" aria-label="Facebook profile link pending" title="Facebook link needed"><SocialIcon platform="facebook" /></span>
              <a href="https://github.com/Shehabkhalaf" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"><SocialIcon platform="github" /></a>
            </div>
            <Link href="/contact">Contact ↗</Link>
            <a href="/Shehab-Khalaf-Resume.pdf" download="Shehab-Khalaf-Resume.pdf">Resume ↓</a>
          </div>

          <div className="site-footer-cta">
            <span>OPEN TO BACKEND OPPORTUNITIES</span>
            <p>Have a project in mind?</p>
            <Link href="/contact">Send a message <b>↗</b></Link>
          </div>
        </div>

        <div className="site-footer-bottom">
          <span>© {new Date().getFullYear()} Shehab Khalaf</span>
          <span>DESIGNED AROUND THE WORK BEHIND THE PRODUCT</span>
        </div>
      </div>
    </footer>
  );
}
