import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/maroon-fund", label: "Maroon Fund" },
  { href: "/maroon-fund/equities", label: "Equities Division" },
  { href: "/maroon-fund/quant", label: "Quant Division" },
  { href: "https://docs.google.com/forms/d/e/1FAIpQLSc2zT90dA5bTKp06khD0VKGgikbXmIQ7OmvHvk9PRyUVthzIQ/viewform", label: "Apply Now" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 tracking-wide">
              MAROON INVESTMENT CLUB
            </h3>
            <p className="mt-0.5 text-[10px] tracking-[0.2em] text-gray-400 uppercase">
              Texas A&M University
            </p>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-xs">
              Developing the next generation of investment professionals through
              real-world portfolio management and rigorous research.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  {link.href.includes("docs.google.com") ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-500 hover:text-maroon transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-maroon transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2.5 text-sm text-gray-500">
                <Mail className="h-4 w-4 text-gray-400 shrink-0" />
                <span>marooninvestmentclub@gmail.com</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-500">
                <MapPin className="h-4 w-4 text-gray-400 shrink-0 mt-0.5" />
                <span>
                  Mays Business School
                  <br />
                  College Station, TX 77843
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Maroon Investment Club. All rights
            reserved.
          </p>
          <p className="text-xs text-gray-400">
            Built by Aggies, for Aggies.
          </p>
        </div>
      </div>
    </footer>
  );
}
