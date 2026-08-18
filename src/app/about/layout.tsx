import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the Maroon Investment Club's history, leadership team, and mission to develop the next generation of investment professionals at Texas A&M University.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
