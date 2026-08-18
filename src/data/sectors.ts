export interface Sector {
  id: string;
  name: string;
  shortName: string;
  description: string;
  keyMetrics: string[];
  holdings: string[];
  icon: string;
}

export const sectors: Sector[] = [
  {
    id: "tmt",
    name: "Technology, Media & Telecommunications",
    shortName: "TMT",
    description:
      "Our TMT coverage focuses on high-growth software companies, semiconductor manufacturers, and emerging digital infrastructure plays. We evaluate companies through a lens of recurring revenue quality, TAM expansion, and competitive positioning in rapidly evolving markets.",
    keyMetrics: ["EV/Revenue", "Rule of 40", "Net Dollar Retention", "FCF Margin"],
    holdings: ["NVDA", "MSFT", "CRM", "AVGO"],
    icon: "Monitor",
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    shortName: "Healthcare",
    description:
      "Our Healthcare team specializes in pharma, biotech, and medtech companies. We combine deep scientific due diligence with financial modeling to identify undervalued clinical-stage opportunities and established pharma companies with robust pipelines.",
    keyMetrics: ["P/E Growth", "Pipeline Value", "Patent Cliff Risk", "R&D Efficiency"],
    holdings: ["LLY", "UNH", "ISRG", "VRTX"],
    icon: "Heart",
  },
  {
    id: "energy",
    name: "Energy & Natural Resources",
    shortName: "Energy",
    description:
      "Leveraging Texas A&M's deep energy expertise, our team covers upstream E&P, midstream infrastructure, and the energy transition. We model commodity cycles, evaluate reserve economics, and identify catalysts in the evolving energy landscape.",
    keyMetrics: ["EV/EBITDA", "FCF Yield", "Reserve Replacement", "Breakeven Price"],
    holdings: ["XOM", "CVX", "SLB", "EOG"],
    icon: "Zap",
  },
];

export const investmentProcess = [
  {
    step: 1,
    title: "Idea Generation",
    description: "Source ideas from screens, industry events, and macro themes.",
    icon: "Lightbulb",
  },
  {
    step: 2,
    title: "Preliminary Screening",
    description: "Evaluate market cap, liquidity, and basic valuation metrics.",
    icon: "Filter",
  },
  {
    step: 3,
    title: "Deep Dive Research",
    description: "Build detailed financial models and conduct industry analysis.",
    icon: "Search",
  },
  {
    step: 4,
    title: "Investment Committee Pitch",
    description: "Present thesis, catalysts, risks, and valuation to the full team.",
    icon: "Presentation",
  },
  {
    step: 5,
    title: "Portfolio Execution",
    description: "Execute approved positions with defined sizing and stop-loss levels.",
    icon: "CheckCircle",
  },
];

export const dummyPitch = {
  company: "CrowdStrike Holdings (CRWD)",
  sector: "TMT — Cybersecurity",
  thesis:
    "CrowdStrike is the market leader in cloud-native endpoint security, benefiting from secular tailwinds in cybersecurity spending. The company's Falcon platform demonstrates best-in-class net dollar retention and expanding module adoption, driving durable 30%+ revenue growth with improving margins.",
  targetPrice: "$420",
  currentPrice: "$345",
  upside: "+21.7%",
  catalysts: [
    "Module adoption driving ARPU expansion",
    "Federal government contract wins accelerating",
    "AI-powered threat detection creating competitive moat",
    "Path to Rule of 60 by FY2027",
  ],
  risks: [
    "Elevated valuation premium vs. peers",
    "Customer concentration in enterprise segment",
    "Macro-driven budget cuts in IT spending",
  ],
  rating: "BUY",
};
