import Link from "next/link";
import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { LiveDateTime } from "@/components/layout/live-date-time";
import { organization } from "@/data/organization";

const footerPages = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Our Program", href: "/our-program/" },
  { label: "Event", href: "/event/" },
  { label: "Articles", href: "/articles/" },
  { label: "Contact", href: "/contact/" },
  { label: "Donate", href: "/donate/" },
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid" aria-hidden="true" />
      <div className="page-container site-footer__content">
        <section className="site-footer__cta" aria-labelledby="footer-cta-title">
          <p className="site-footer__eyebrow">{organization.name}</p>
          <h2 id="footer-cta-title">Let&apos;s make space for better mental health.</h2>
          <Link className="site-footer__cta-link" href="/contact/">
            <span>Let&apos;s talk</span>
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </section>

        <nav className="site-footer__pages" aria-label="Footer pages">
          <p className="site-footer__section-title">Pages</p>
          {footerPages.map((page) => (
            <Link className="site-footer__page-link" href={page.href} key={page.href}>
              <span aria-hidden="true">*</span>
              <span>{page.label}</span>
              <ArrowUpRight aria-hidden="true" />
            </Link>
          ))}
        </nav>

        <div className="site-footer__details">
          <section className="site-footer__social" aria-labelledby="footer-social-title">
            <p className="site-footer__section-title" id="footer-social-title">Social</p>
            <a href={organization.instagram} target="_blank" rel="noreferrer"><span className="footer-social-icon">ig</span>Instagram</a>
            <a href={organization.facebook} target="_blank" rel="noreferrer"><span className="footer-social-icon">f</span>Facebook</a>
          </section>

          <section className="site-footer__contact" aria-labelledby="footer-contact-title">
            <p className="site-footer__section-title" id="footer-contact-title">Contact</p>
            <a href={organization.phone.href}><Phone aria-hidden="true" />{organization.phone.label}</a>
            <a href={`mailto:${organization.email}`}><Mail aria-hidden="true" />{organization.email}</a>
            <a href={organization.directions} target="_blank" rel="noreferrer"><MapPin aria-hidden="true" />{organization.address.line}, Denpasar, Bali</a>
            <span><Clock3 aria-hidden="true" />{organization.hours}</span>
            <span className="site-footer__local-time"><span className="footer-live-dot" aria-hidden="true" /><LiveDateTime /></span>
          </section>
        </div>
      </div>
      <div className="page-container site-footer__bottom"><Link className="site-logo site-logo--footer" href="/" aria-label="SIMH home">SIMH</Link><span>© {new Date().getFullYear()} SIMH</span><Link href="/privacy/">Privacy</Link><Link href="/accessibility/">Accessibility</Link></div>
    </footer>
  );
}
