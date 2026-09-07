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

export const metadata = {
  title: "Maroon Investment Club | Texas A&M University",
  description:
    "The Maroon Investment Club is Texas A&M University's premier student-run investment organization, managing the Maroon Fund across Equities and Quantitative divisions.",
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
