export interface Sponsor {
  id: string;
  name: string;
  tier: "gold" | "silver" | "bronze";
}

export const sponsors: Sponsor[] = [
  { id: "1", name: "Goldman Sachs", tier: "gold" },
  { id: "2", name: "J.P. Morgan", tier: "gold" },
  { id: "3", name: "Morgan Stanley", tier: "silver" },
  { id: "4", name: "Citadel", tier: "silver" },
  { id: "5", name: "Blackstone", tier: "bronze" },
  { id: "6", name: "Two Sigma", tier: "bronze" },
];
