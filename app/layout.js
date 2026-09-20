import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Ticker from "@/components/Ticker";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

const title = "Maroon Investment Club | Texas A&M University";
const description =
  "The Maroon Investment Club is Texas A&M University's premier student-run investment organization, managing the Maroon Fund across Equities and Quantitative divisions.";

export const metadata = {
  // Every route sets its own full title (e.g. "Equities | Maroon
  // Investment Club") rather than relying on a template, so this is
  // just the homepage/fallback default — no "%s" template here, or
  // every sub-page's already-complete title would get the suffix
  // appended a second time.
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "Maroon Investment Club",
    images: ["/logo-full.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/logo-full.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}
    >
      <body>
        <Ticker />
        {children}
      </body>
    </html>
  );
}
