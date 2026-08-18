export interface ClubStat {
  label: string;
  value: string;
  numericValue: number;
  prefix?: string;
  suffix?: string;
  icon: string;
}

export const clubStats: ClubStat[] = [
  {
    label: "Assets Under Management",
    value: "$1.2M",
    numericValue: 1.2,
    prefix: "$",
    suffix: "M",
    icon: "DollarSign",
  },
  {
    label: "Active Members",
    value: "45+",
    numericValue: 45,
    suffix: "+",
    icon: "Users",
  },
  {
    label: "Placement Rate",
    value: "92%",
    numericValue: 92,
    suffix: "%",
    icon: "TrendingUp",
  },
  {
    label: "Years Active",
    value: "7",
    numericValue: 7,
    icon: "Calendar",
  },
];

export interface PerformanceDataPoint {
  month: string;
  maroonFund: number;
  spx: number;
}

export const performanceData: PerformanceDataPoint[] = [
  { month: "Jan '24", maroonFund: 100, spx: 100 },
  { month: "Feb '24", maroonFund: 102.3, spx: 101.5 },
  { month: "Mar '24", maroonFund: 101.8, spx: 103.2 },
  { month: "Apr '24", maroonFund: 105.1, spx: 102.8 },
  { month: "May '24", maroonFund: 108.4, spx: 104.9 },
  { month: "Jun '24", maroonFund: 107.2, spx: 106.1 },
  { month: "Jul '24", maroonFund: 110.6, spx: 107.3 },
  { month: "Aug '24", maroonFund: 109.3, spx: 105.8 },
  { month: "Sep '24", maroonFund: 112.7, spx: 108.4 },
  { month: "Oct '24", maroonFund: 115.2, spx: 110.2 },
  { month: "Nov '24", maroonFund: 118.9, spx: 112.6 },
  { month: "Dec '24", maroonFund: 121.4, spx: 114.1 },
  { month: "Jan '25", maroonFund: 119.8, spx: 113.5 },
  { month: "Feb '25", maroonFund: 122.3, spx: 115.8 },
  { month: "Mar '25", maroonFund: 125.7, spx: 117.2 },
  { month: "Apr '25", maroonFund: 124.1, spx: 116.9 },
  { month: "May '25", maroonFund: 128.6, spx: 119.4 },
  { month: "Jun '25", maroonFund: 131.2, spx: 121.7 },
  { month: "Jul '25", maroonFund: 134.8, spx: 123.1 },
  { month: "Aug '25", maroonFund: 133.1, spx: 122.4 },
  { month: "Sep '25", maroonFund: 136.5, spx: 124.8 },
  { month: "Oct '25", maroonFund: 139.2, spx: 126.3 },
  { month: "Nov '25", maroonFund: 142.7, spx: 128.9 },
  { month: "Dec '25", maroonFund: 145.3, spx: 130.2 },
];

export interface SectorAllocation {
  name: string;
  value: number;
  fill: string;
}

export const sectorAllocation: SectorAllocation[] = [
  { name: "Technology", value: 32, fill: "#500000" },
  { name: "Healthcare", value: 22, fill: "#6B0000" },
  { name: "Energy", value: 18, fill: "#D4A843" },
  { name: "Financials", value: 12, fill: "#334155" },
  { name: "Industrials", value: 9, fill: "#475569" },
  { name: "Cash", value: 7, fill: "#64748B" },
];

export const fundOverview = {
  name: "The Maroon Fund",
  inception: "2018",
  aum: "$1.2M",
  benchmark: "S&P 500",
  ytdReturn: "+12.4%",
  sinceInception: "+45.3%",
  sharpeRatio: "1.42",
  maxDrawdown: "-8.7%",
  philosophy:
    "The Maroon Fund employs a research-intensive, bottom-up approach to equity selection, combining rigorous fundamental analysis with quantitative factor models. Our investment philosophy centers on identifying mispriced securities with strong catalysts, sustainable competitive advantages, and attractive risk-reward profiles.",
};
