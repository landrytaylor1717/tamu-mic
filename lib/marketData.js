// Server-only: fetches a live daily quote for one symbol from Finnhub.
// Swapping data providers later means changing only this file — nothing
// in tickerConfig.js or Ticker.jsx needs to know where the numbers came from.

const FINNHUB_BASE = "https://finnhub.io/api/v1";

// How often a stale quote is allowed to be re-served before Next refetches.
// Raise this if you're worried about hitting the free-tier rate limit;
// lower it if you want the ticker to feel more "live". 60s is a sane floor —
// this only matters under `npm start` / a real deploy, since `next dev`
// always refetches.
const REVALIDATE_SECONDS = 60;

// Returns the raw % change (a plain number, positive or negative) for a
// symbol, or null if there's no key / the fetch failed. Formatting and
// up/down coloring both happen in Ticker.jsx, derived from this number's
// sign — so there's exactly one place that decides "is this a gain or a
// loss," not two that could disagree.
export async function getQuote(symbol) {
  const key = process.env.FINNHUB_API_KEY;
  if (!key) return null;

  try {
    const res = await fetch(
      `${FINNHUB_BASE}/quote?symbol=${encodeURIComponent(symbol)}&token=${key}`,
      { next: { revalidate: REVALIDATE_SECONDS } }
    );
    if (!res.ok) return null;

    const data = await res.json();
    // Finnhub returns c: current price, pc: previous close.
    if (typeof data.c !== "number" || typeof data.pc !== "number" || data.pc === 0) {
      return null;
    }

    return ((data.c - data.pc) / data.pc) * 100;
  } catch {
    // Network hiccup, bad key, rate limit — any of these fall back silently.
    return null;
  }
}
