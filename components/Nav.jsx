import Link from "next/link";
import Image from "next/image";
import logoIcon from "@/public/logo-icon.png";
import { APPLY_FORM_URL } from "@/lib/links";

const links = [
  { href: "/about", label: "About" },
  { href: "/leadership", label: "Leadership" },
  { href: "/maroon-fund/equities", label: "Equities" },
  { href: "/maroon-fund/quant", label: "Quant" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/travel-series", label: "Travel Series" },
  { href: "/competitions", label: "Competitions" },
  { href: "/calendar", label: "Calendar" },
  { href: "/learn-more", label: "Learn More" },
  { href: "/members", label: "Members" },
];

export default function Nav({ active }) {
  return (
    <nav>
      <div className="nav-left">
        <Link className="brand" href="/">
          <Image
            className="mark"
            src={logoIcon}
            alt="Maroon Investment Club — bull and bear mark"
            height={30}
            style={{ width: "auto" }}
          />
          <span className="brand-text">
            <span className="brand-name">
              Maroon<em>&nbsp;Investment&nbsp;Club</em>
            </span>
            <span className="brand-motto">Built by Aggies, for Aggies.</span>
          </span>
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={active === link.href ? "active" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <a className="btn" href={APPLY_FORM_URL} target="_blank" rel="noopener noreferrer">
        Apply
      </a>
    </nav>
  );
}
