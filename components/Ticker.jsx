import { tickerItems } from "./tickerConfig";
import { getQuote } from "@/lib/marketData";

// Single source of truth for coloring: the sign of the actual number.
// There's no separate "dir" flag to fall out of sync with the value —
// positive is always green, negative is always red, derived right here.
function formatChange(num, { percent = true } = {}) {
  if (num === null || num === undefined) return { text: null, dir: null };
  const dir = num > 0 ? "up" : num < 0 ? "down" : null;
  const arrow = num > 0 ? "▲ " : num < 0 ? "▼ " : "";
  const magnitude = Math.abs(num).toFixed(2);
  const text = percent ? `${arrow}${magnitude}%` : `${arrow}${magnitude}`;
  return { text, dir };
}

async function resolveItem(item) {
  if (item.type === "text") {
    if (item.changePct !== undefined) {
      const { text, dir } = formatChange(item.changePct, { percent: true });
      const value = item.suffix ? `${text} ${item.suffix}` : text;
      return { label: item.label, value, dir };
    }
    if (item.changeValue !== undefined) {
      const { text, dir } = formatChange(item.changeValue, { percent: false });
      return { label: item.label, value: text, dir };
    }
    return { label: item.label, value: null, dir: null };
  }

  // type === "stock": try a live % change first, fall back to the configured one.
  const live = await getQuote(item.symbol);
  const pctChange = live ?? item.fallback ?? null;
  const { text, dir } = formatChange(pctChange, { percent: true });
  return { label: item.label ?? item.symbol, value: text, dir };
}

function TickerItem({ label, value, dir }) {
  return (
    <span>
      {label}
      {value ? <> <span className={dir}>{value}</span></> : null}
    </span>
  );
}

// Server component: quotes are fetched on the server (see lib/marketData.js)
// so no API key is ever exposed to the browser.
export default async function Ticker() {
  const items = await Promise.all(tickerItems.map(resolveItem));
  const doubled = [...items, ...items];
  return (
    <div className="ticker-band">
      <div className="ticker-track" aria-hidden="true">
        {doubled.map((item, i) => (
          <TickerItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
}
