import { spyDailyCloses, SPY_INCEPTION_PRICE } from "@/lib/spyHistory";
import { fundIndexDaily } from "@/lib/fundHistory";

// Real Maroon Fund portfolio data, as of 01/01/2026 (source: the fund's
// tracking spreadsheet). To update: edit the numbers below — everything
// on the members portfolio page (weights, bars, sector mix, performance
// vs. SPY) is derived from this file, not hand-maintained separately.
//
// Five names the fund was in the process of adding at the time of this
// snapshot (Intuit, NRG Energy, AeroVironment, DraftKings, S&P Global)
// aren't included below — they had no share count or cost basis yet, so
// there was nothing real to report. Add them here the same way once
// they're actually purchased.

export const fundStats = {
  aum: 71608.07,
  investedValue: 71112.07,
  cash: 496.0,
  investedWeightPct: 99.31,
  cashWeightPct: 0.69,
  // The sheet never states an explicit "as of" date for the current
  // AUM/holdings snapshot — only two return figures anchored to "today,"
  // whenever that is. Don't invent a date for it; say "current" instead.
  inceptionDate: "2025-01-02",
  ytdStartDate: "2026-01-01",
  inceptionReturnPct: 31.27,
  ytdReturnPct: 7.3,
  benchmarkInceptionReturnPct: 30.69,
  benchmarkYtdReturnPct: 12.74,
  overUnderInceptionPct: 0.58,
  overUnderYtdPct: -5.44,
};

// The S&P 500 line is real daily closing prices (see lib/spyHistory.js).
// The Maroon Fund line is a real, price-driven blend of the fund's own
// holdings (see lib/fundHistory.js for the full methodology and its
// documented limits) — calibrated to land on the fund's two disclosed
// return figures, not a straight line invented between them.
function daysBetween(a, b) {
  return (new Date(b) - new Date(a)) / 86400000;
}

export function buildPerformanceSeries(stats) {
  const t0 = stats.inceptionDate;
  const lastClose = spyDailyCloses[spyDailyCloses.length - 1];
  const lastDate = lastClose[0];

  // spyDailyCloses already starts exactly at inception (t=0, value=100 by
  // construction), so no synthetic leading point is needed here.
  const spyPoints = spyDailyCloses.map(([date, close]) => ({
    t: daysBetween(t0, date),
    value: (close / SPY_INCEPTION_PRICE) * 100,
  }));

  const fundPoints = fundIndexDaily.map(([date, value]) => ({
    t: daysBetween(t0, date),
    date,
    value,
  }));

  const fundMarkers = [
    { t: 0, date: stats.inceptionDate, label: "Inception", value: 100 },
    {
      t: daysBetween(t0, stats.ytdStartDate),
      date: stats.ytdStartDate,
      label: "YTD start",
      value:
        fundIndexDaily.find(([d]) => d >= stats.ytdStartDate)?.[1] ??
        fundIndexDaily[fundIndexDaily.length - 1][1],
    },
    { t: daysBetween(t0, lastDate), date: lastDate, label: "Today", value: 100 + stats.inceptionReturnPct },
  ];

  return { spyPoints, fundPoints, fundMarkers, totalDays: daysBetween(t0, lastDate) };
}

// `sector` is a standard GICS-style bucket assigned by us for the
// breakdown below, not part of the source spreadsheet.
export const holdings = [
  {
    ticker: "AMZN",
    name: "Amazon",
    sector: "Consumer Discretionary",
    purchaseDate: "2025-01-06",
    shares: 39,
    avgPrice: 224.23,
    costBasis: 8744.97,
    currentPrice: 258.51,
    marketValue: 10081.89,
    weightPct: 14.08,
    totalReturnPct: 15.29,
    totalReturnDollar: 1336.92,
  },
  {
    ticker: "MA",
    name: "Mastercard",
    sector: "Financials",
    purchaseDate: "2025-12-02",
    shares: 17,
    avgPrice: 543.09,
    costBasis: 9232.5,
    currentPrice: 579.21,
    marketValue: 9846.57,
    weightPct: 13.75,
    totalReturnPct: 6.65,
    totalReturnDollar: 614.07,
  },
  {
    ticker: "UBER",
    name: "Uber Technologies",
    sector: "Technology",
    purchaseDate: "2025-01-06",
    shares: 115,
    avgPrice: 70.85,
    costBasis: 8147.98,
    currentPrice: 75.76,
    marketValue: 8712.4,
    weightPct: 12.17,
    totalReturnPct: 6.93,
    totalReturnDollar: 564.42,
  },
  {
    ticker: "ASML",
    name: "ASML Holding",
    sector: "Technology",
    purchaseDate: "2025-01-06",
    shares: 4,
    avgPrice: 727.34,
    costBasis: 2909.34,
    currentPrice: 1714.88,
    marketValue: 6859.52,
    weightPct: 9.58,
    totalReturnPct: 135.78,
    totalReturnDollar: 3950.18,
  },
  {
    ticker: "UNH",
    name: "UnitedHealth Group",
    sector: "Healthcare",
    purchaseDate: "2025-05-27",
    shares: 16,
    avgPrice: 306.52,
    costBasis: 4904.32,
    currentPrice: 397.14,
    marketValue: 6354.24,
    weightPct: 8.87,
    totalReturnPct: 29.56,
    totalReturnDollar: 1449.92,
  },
  {
    ticker: "GOOG",
    name: "Alphabet (Google)",
    sector: "Communication Services",
    purchaseDate: "2025-02-07",
    shares: 18,
    avgPrice: 175.29,
    costBasis: 3155.15,
    currentPrice: 335.31,
    marketValue: 6035.58,
    weightPct: 8.43,
    totalReturnPct: 91.29,
    totalReturnDollar: 2880.43,
  },
  {
    ticker: "ADBE",
    name: "Adobe",
    sector: "Technology",
    purchaseDate: "2025-12-02",
    shares: 27,
    avgPrice: 302.41,
    costBasis: 8165.07,
    currentPrice: 266.51,
    marketValue: 7195.77,
    weightPct: 10.05,
    totalReturnPct: -11.87,
    totalReturnDollar: -969.3,
  },
  {
    ticker: "META",
    name: "Meta",
    sector: "Communication Services",
    purchaseDate: "2025-12-02",
    shares: 9,
    avgPrice: 631.8,
    costBasis: 5686.16,
    currentPrice: 616.77,
    marketValue: 5550.93,
    weightPct: 7.75,
    totalReturnPct: -2.38,
    totalReturnDollar: -135.22,
  },
  {
    ticker: "BKNG",
    name: "Booking Holdings",
    sector: "Consumer Discretionary",
    purchaseDate: "2025-01-13",
    shares: 25,
    avgPrice: 185.92,
    costBasis: 4647.94,
    currentPrice: 193.29,
    marketValue: 4832.25,
    weightPct: 6.75,
    totalReturnPct: 3.97,
    totalReturnDollar: 184.31,
  },
  {
    ticker: "NFLX",
    name: "Netflix",
    sector: "Communication Services",
    purchaseDate: "2026-02-12",
    shares: 52,
    avgPrice: 76.89,
    costBasis: 3998.23,
    currentPrice: 78.25,
    marketValue: 4069.0,
    weightPct: 5.68,
    totalReturnPct: 1.77,
    totalReturnDollar: 70.77,
  },
  {
    ticker: "AAAU",
    name: "Goldman Sachs Physical Gold ETF",
    sector: "Commodities",
    purchaseDate: "2025-01-31",
    shares: 36,
    avgPrice: 30.25,
    costBasis: 1089.0,
    currentPrice: 43.72,
    marketValue: 1573.92,
    weightPct: 2.2,
    totalReturnPct: 44.53,
    totalReturnDollar: 484.92,
  },
];

// Add the fund's actual open ideas here as they enter the pipeline —
// { title, author, status, summary }.
export const ideas = [];
