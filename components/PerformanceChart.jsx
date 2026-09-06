"use client";

import { useRef, useState } from "react";

function shortDate(iso) {
  const d = new Date(`${iso}T00:00:00`);
  return `${d.toLocaleDateString("en-US", { month: "short" })} '${String(d.getFullYear()).slice(2)}`;
}

function longDate(iso) {
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

const pct = (n) => `${n >= 0 ? "+" : ""}${n.toFixed(2)}%`;

// S&P 500: real daily closes (see lib/spyHistory.js). Maroon Fund: a real,
// price-driven blend of the fund's own holdings, calibrated to its two
// disclosed return figures (see lib/fundHistory.js for the full
// methodology). Both series share the exact same trading-day calendar, so
// the slider below indexes them together — no interpolation, every value
// shown is a real data point for that date.
export default function PerformanceChart({ spyPoints, fundPoints, fundMarkers, totalDays }) {
  const width = 720;
  const height = 340;
  const padL = 44;
  const padR = 16;
  const top = 20;
  const bottom = 264;

  const lastIndex = spyPoints.length - 1;
  const [index, setIndex] = useState(lastIndex);
  const [dragging, setDragging] = useState(false);
  const svgRef = useRef(null);

  const allValues = [...spyPoints.map((p) => p.value), ...fundPoints.map((p) => p.value)];
  const dataMin = Math.min(...allValues);
  const dataMax = Math.max(...allValues);
  const pad = (dataMax - dataMin) * 0.12 || 5;
  const min = Math.floor((dataMin - pad) / 10) * 10;
  const max = Math.ceil((dataMax + pad) / 10) * 10;

  const xFor = (t) => padL + (t / totalDays) * (width - padL - padR);
  const yFor = (v) => bottom - ((v - min) / (max - min)) * (bottom - top);

  const spyPath = spyPoints
    .map((p, i) => `${i === 0 ? "M" : "L"}${xFor(p.t).toFixed(1)},${yFor(p.value).toFixed(1)}`)
    .join(" ");
  const fundPath = fundPoints
    .map((p, i) => `${i === 0 ? "M" : "L"}${xFor(p.t).toFixed(1)},${yFor(p.value).toFixed(1)}`)
    .join(" ");

  const gridStart = Math.ceil(min / 10) * 10;
  const gridValues = [];
  for (let v = gridStart; v <= max; v += 10) gridValues.push(v);

  const spyEnd = spyPoints[lastIndex];
  const selectedSpy = spyPoints[index];
  const selectedFund = fundPoints[index];
  const guideX = xFor(selectedSpy.t);

  // Converts a pointer position (click or drag, anywhere on the chart —
  // not just precisely on a line or dot) to the nearest real trading day,
  // via a binary search since points aren't evenly spaced (weekends/
  // holidays are skipped).
  function indexFromClientX(clientX) {
    const rect = svgRef.current.getBoundingClientRect();
    const svgX = ((clientX - rect.left) / rect.width) * width;
    const t = ((svgX - padL) / (width - padL - padR)) * totalDays;
    let lo = 0;
    let hi = lastIndex;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (spyPoints[mid].t < t) lo = mid + 1;
      else hi = mid;
    }
    if (lo > 0 && Math.abs(spyPoints[lo - 1].t - t) < Math.abs(spyPoints[lo].t - t)) {
      return lo - 1;
    }
    return lo;
  }

  function handlePointerDown(e) {
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    setIndex(indexFromClientX(e.clientX));
  }
  function handlePointerMove(e) {
    if (!dragging) return;
    setIndex(indexFromClientX(e.clientX));
  }
  function handlePointerUp(e) {
    e.currentTarget.releasePointerCapture(e.pointerId);
    setDragging(false);
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          marginBottom: 16,
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          color: "var(--ink-soft)",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <svg width="20" height="8" aria-hidden="true">
            <line x1="0" y1="4" x2="20" y2="4" stroke="var(--maroon)" strokeWidth="2" />
          </svg>
          Maroon Fund — real holdings, calibrated to disclosed returns
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <svg width="20" height="8" aria-hidden="true">
            <line x1="0" y1="4" x2="20" y2="4" stroke="var(--brass)" strokeWidth="2" />
          </svg>
          S&amp;P 500 — real daily closes
        </span>
      </div>

      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        style={{ width: "100%", height: "auto" }}
        role="img"
        aria-label={`Line chart comparing the Maroon Fund and the S&P 500, indexed to 100 at inception. Maroon Fund checkpoints: ${fundMarkers
          .map((p) => `${p.label} ${p.value.toFixed(1)}`)
          .join(", ")}. S&P 500 real daily closes through today, ending at ${spyEnd.value.toFixed(1)}. Selected date ${selectedFund.date}: Maroon Fund ${selectedFund.value.toFixed(1)}, S&P 500 ${selectedSpy.value.toFixed(1)}.`}
      >
        {gridValues.map((v) => (
          <g key={v}>
            <line x1={padL} x2={width - padR} y1={yFor(v)} y2={yFor(v)} stroke="var(--rule)" strokeWidth="1" />
            <text x={padL - 8} y={yFor(v) + 4} textAnchor="end" className="chart-axis-label">
              {v}
            </text>
          </g>
        ))}

        <path d={spyPath} fill="none" stroke="var(--brass)" strokeWidth="2" />
        <path d={fundPath} fill="none" stroke="var(--maroon)" strokeWidth="2" />

        {fundMarkers.map((p) => (
          <g key={p.label}>
            <circle cx={xFor(p.t)} cy={yFor(p.value)} r="4" fill="var(--maroon)" stroke="var(--paper)" strokeWidth="1.5" />
            <text x={xFor(p.t)} y={bottom + 26} textAnchor="middle" className="chart-axis-label">
              {shortDate(p.date)}
            </text>
          </g>
        ))}

        {/* scrub guide: moves with the slider, drag, or click — always
            snapped to a real trading day, never an interpolated value */}
        <line x1={guideX} x2={guideX} y1={top} y2={bottom} stroke="var(--ink-soft)" strokeWidth="1" strokeDasharray="3 3" />
        <circle
          cx={guideX}
          cy={yFor(selectedFund.value)}
          r={dragging ? 7 : 5.5}
          fill="var(--maroon)"
          stroke="var(--paper)"
          strokeWidth="2"
          style={{ cursor: "grab" }}
          onPointerDown={handlePointerDown}
        />
        <circle
          cx={guideX}
          cy={yFor(selectedSpy.value)}
          r={dragging ? 7 : 5.5}
          fill="var(--brass)"
          stroke="var(--paper)"
          strokeWidth="2"
          style={{ cursor: "grab" }}
          onPointerDown={handlePointerDown}
        />

        {/* transparent overlay, on top so a click/drag anywhere in the
            plot area (not just precisely on a line or dot) scrubs too */}
        <rect
          x={padL}
          y={top}
          width={width - padL - padR}
          height={bottom - top}
          fill="transparent"
          style={{ cursor: dragging ? "grabbing" : "crosshair", touchAction: "none" }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        />
      </svg>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 16,
          marginTop: 4,
          marginBottom: 10,
          fontFamily: "var(--font-mono)",
        }}
      >
        <span style={{ fontSize: 13, color: "var(--ink-soft)" }}>{longDate(selectedFund.date)}</span>
        <span style={{ display: "flex", gap: 20, fontSize: 13 }}>
          <span>
            <span style={{ color: "var(--maroon)" }}>Maroon Fund </span>
            {selectedFund.value.toFixed(2)}
            <span style={{ color: "var(--ink-soft)" }}> ({pct(selectedFund.value - 100)})</span>
          </span>
          <span>
            <span style={{ color: "var(--brass)" }}>S&amp;P 500 </span>
            {selectedSpy.value.toFixed(2)}
            <span style={{ color: "var(--ink-soft)" }}> ({pct(selectedSpy.value - 100)})</span>
          </span>
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={lastIndex}
        step={1}
        value={index}
        onChange={(e) => setIndex(Number(e.target.value))}
        aria-label="Scrub to a date to see the Maroon Fund and S&P 500 values on that day"
        style={{ width: "100%", accentColor: "var(--maroon)" }}
      />
    </div>
  );
}
