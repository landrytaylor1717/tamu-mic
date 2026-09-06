// This is the one file to edit to control what shows up in the ticker.
// Reorder, delete, or add entries freely — order here is the order on screen.
//
// Colors are never set by hand here — green/red is always derived in
// Ticker.jsx from whichever number you give it, so a value and its color
// can't ever disagree.
//
// Three kinds of entries:
//   { type: "text", label, changePct, suffix }
//     A static percentage, e.g. fund performance. `changePct` is a plain
//     number (12.4, -3.1, ...) — positive renders ▲ green, negative
//     renders ▼ red. `suffix` is optional trailing text (e.g. "YTD").
//
//   { type: "text", label, changeValue }
//     A static plain number with no "%" (e.g. a Sharpe ratio). Same
//     sign-based coloring, no percent sign or arrow.
//
//   { type: "text", label }
//     Plain label, no figure — for announcements.
//
//   { type: "stock", symbol, label, fallback }
//     Tracks a real ticker symbol. If a Finnhub API key is configured
//     (see .env.local.example), this shows the live daily % change.
//     Otherwise (or if the fetch fails), it shows `fallback` — a plain
//     number, same rules as changePct above — so the site never breaks
//     for lack of a key.
//     `label` is what's shown on screen (defaults to `symbol` if omitted) —
//     use it for names like "Google" instead of the raw ticker "GOOGL".

export const tickerItems = [
  { type: "text", label: "MAROON FUND EQUITIES", changePct: 12.4, suffix: "YTD" },
  { type: "text", label: "QUANT DESK SHARPE", changeValue: 1.8 },

  // Major indexes (tracked via their most-liquid ETF proxy)
  { type: "stock", symbol: "SPY", label: "S&P 500", fallback: 0.42 },
  { type: "stock", symbol: "QQQ", label: "Nasdaq 100", fallback: 0.61 },

  // Fund positions
  { type: "stock", symbol: "AMZN", label: "Amazon", fallback: 1.05 },
  { type: "stock", symbol: "MA", label: "Mastercard", fallback: -0.22 },
  { type: "stock", symbol: "UBER", label: "Uber Technologies", fallback: 2.31 },
  { type: "stock", symbol: "ASML", label: "ASML Holding", fallback: -0.87 },
  { type: "stock", symbol: "UNH", label: "UnitedHealth Group", fallback: 0.55 },
  { type: "stock", symbol: "GOOGL", label: "Google", fallback: 0.76 },
  { type: "stock", symbol: "ADBE", label: "Adobe", fallback: -1.12 },
  { type: "stock", symbol: "META", label: "Meta", fallback: 1.44 },
  { type: "stock", symbol: "BKNG", label: "Booking Holdings", fallback: -0.33 },
  { type: "stock", symbol: "NFLX", label: "Netflix", fallback: 0.98 },
  { type: "stock", symbol: "AAAU", label: "Goldman Sachs Physical Gold ETF", fallback: 0.18 },
  { type: "stock", symbol: "INTU", label: "Intuit", fallback: -0.41 },
  { type: "stock", symbol: "NRG", label: "NRG Energy", fallback: 1.76 },
  { type: "stock", symbol: "AVAV", label: "AeroVironment", fallback: -2.05 },
  { type: "stock", symbol: "DKNG", label: "DraftKings", fallback: 3.12 },
  { type: "stock", symbol: "SPGI", label: "S&P Global", fallback: 0.29 },

  { type: "text", label: "APPLICATIONS OPEN — FALL COHORT" },
  { type: "text", label: "MAYS BUSINESS SCHOOL, COLLEGE STATION" },
];
