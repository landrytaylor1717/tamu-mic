import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Maroon Fund",
  description:
    "Explore the Maroon Fund — a student-managed investment portfolio at Texas A&M University spanning Equities and Quantitative strategies.",
};

export default function MaroonFundLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
