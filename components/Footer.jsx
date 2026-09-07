import Image from "next/image";
import logoIcon from "@/public/logo-icon.png";
import { APPLY_FORM_URL } from "@/lib/links";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 14,
            }}
          >
            <Image
              className="mark"
              style={{ height: 26, width: "auto" }}
              src={logoIcon}
              alt="Maroon Investment Club — bull and bear mark"
              height={26}
            />
            <span className="footer-brand" style={{ marginBottom: 0 }}>
              Maroon Investment Club
            </span>
          </div>
          <p className="footer-tag">
            Developing the next generation of investment professionals
            through real-world portfolio management and rigorous research.
            Built by Aggies, for Aggies.
          </p>
        </div>
        <div className="footer-col">
          <h4>Club</h4>
          <a href="/about">About</a>
          <a href="/leadership">Leadership</a>
          <a href="/maroon-fund/equities">Equities</a>
          <a href="/maroon-fund/quant">Quant</a>
          <a href="/portfolio">Portfolio</a>
        </div>
        <div className="footer-col">
          <h4>More</h4>
          <a href="/travel-series">Travel Series</a>
          <a href="/competitions">Competitions</a>
          <a href="/calendar">Calendar</a>
          <a href="/learn-more">Learn More</a>
          <a href="/members">Members</a>
          <a href={APPLY_FORM_URL} target="_blank" rel="noopener noreferrer">Apply now</a>
        </div>
        <div className="footer-contact">
          <h4
            style={{
              fontSize: 12,
              color: "var(--ink-faint)",
              margin: "0 0 12px",
              fontWeight: 600,
            }}
          >
            Contact
          </h4>
          <p>marooninvestmentclub@gmail.com</p>
          <p>
            Mays Business School
            <br />
            College Station, TX 77843
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Maroon Investment Club. All rights reserved.</span>
      </div>
    </footer>
  );
}
