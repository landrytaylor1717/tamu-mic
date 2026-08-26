export interface LeadershipMember {
  name: string;
  role: string;
  detail: string;
  image?: string;
}

export const leadership: LeadershipMember[] = [
  { name: "Owen Conkey", role: "CIO", detail: "Sophomore, Finance", image: "/leadership/landry.jpg" },
  { name: "Dhruv Datta", role: "CIO", detail: "Senior, MMET", image: "/leadership/dhruv.png" },
  { name: "Landry Taylor", role: "Quant Director", detail: "Sophomore, MIS", image: "/leadership/owen.jpg" },
  { name: "Christian Marquez", role: "COO", detail: "Junior, International Affairs", image: "/leadership/christian.png" },
  { name: "Diego Cancino", role: "Portfolio Manager", detail: "", image: "/leadership/diego.jpg" },
  { name: "Jeremiel Fernandez", role: "Portfolio Manager", detail: "", image: "/leadership/jeremiel.jpg" },
  { name: "Rishabh Makker", role: "Quant PM", detail: "" },
];
