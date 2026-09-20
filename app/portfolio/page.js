import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PerformanceChart from "@/components/PerformanceChart";
import { fundStats, holdings, buildPerformanceSeries } from "@/lib/portfolioData";

export const metadata = {
  title: "Portfolio | Maroon Investment Club",
};

const usd = (n) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const pct = (n, digits = 2) => `${n >= 0 ? "+" : ""}${n.toFixed(digits)}%`;
const dir = (n) => (n > 0 ? "up" : n < 0 ? "down" : undefined);

function AllocationTable({ rows, maxWeight, barClass }) {
  return (
    <table className="alloc-table">
      <colgroup>
        <col style={{ width: "22%" }} />
        <col style={{ width: "39%" }} />
        <col style={{ width: "21%" }} />
        <col style={{ width: "18%" }} />
      </colgroup>
      <thead>
        <tr>
          <th scope="col">Holding</th>
          <th scope="col">Allocation</th>
          <th scope="col">Market value</th>
          <th scope="col">Return</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.key}>
            <th scope="row" className="alloc-id">
              {row.ticker ? <span className="alloc-ticker">{row.ticker}</span> : null}
              <span className="alloc-name">{row.name}</span>
            </th>
            <td>
              <div className="alloc-bar-track">
                <div
                  className={`alloc-bar-fill${barClass ? ` ${barClass}` : ""}`}
                  style={{ width: `${Math.max((row.weightPct / maxWeight) * 100, 2)}%` }}
                />
              </div>
            </td>
            <td className="alloc-value">{usd(row.marketValue)}</td>
            {row.totalReturnPct !== undefined ? (
              <td className={`alloc-return ${dir(row.totalReturnPct)}`}>
                {pct(row.totalReturnPct)}
              </td>
            ) : (
              <td className="alloc-weight">{row.weightPct.toFixed(2)}%</td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function Portfolio() {
  const { spyPoints, fundPoints, fundMarkers, totalDays } = buildPerformanceSeries(fundStats);
  const sortedHoldings = [...holdings].sort((a, b) => b.weightPct - a.weightPct);
  const maxHoldingWeight = sortedHoldings[0].weightPct;

  const sectorMap = new Map();
  for (const h of holdings) {
    const prev = sectorMap.get(h.sector) ?? { weightPct: 0, marketValue: 0 };
    sectorMap.set(h.sector, {
      weightPct: prev.weightPct + h.weightPct,
      marketValue: prev.marketValue + h.marketValue,
    });
  }
  const sectors = Array.from(sectorMap.entries())
    .map(([sector, v]) => ({ key: sector, name: sector, ...v }))
    .concat([{ key: "cash", name: "Cash", weightPct: fundStats.cashWeightPct, marketValue: fundStats.cash }])
    .sort((a, b) => b.weightPct - a.weightPct);
  const maxSectorWeight = sectors[0].weightPct;

  return (
    <>
      <div className="wrap">
        <Nav active="/portfolio" />

        <div className="page-head">
          <div className="page-kicker">Maroon Fund</div>
          <h1>What we&apos;re actually holding.</h1>
          <p>
            The real book, real performance against the S&amp;P 500, and
            where the fund&apos;s exposure sits — updated as the desk
            trades, not a demo. Capital is provided by the Adam C. Sinn
            &apos;00 Center for Investment Management at Mays Business
            School.
          </p>
        </div>

        <section>
          <div className="lede" style={{ marginBottom: 24 }}>
            <div className="lede-kicker">Current</div>
            <div className="lede-body">
              <h2>Fund performance</h2>
              <p className="note">Since inception is {fundStats.inceptionDate}.</p>
            </div>
          </div>
          <div className="facts">
            <div className="facts-inner">
              <div className="fact">
                <span className="fact-num">{usd(fundStats.aum)}</span>
                <span className="fact-label">
                  Assets under
                  <br />
                  management
                </span>
              </div>
              <div className="fact">
                <span className="fact-num">{pct(fundStats.inceptionReturnPct, 1)}</span>
                <span className="fact-label">
                  Since inception, vs {pct(fundStats.benchmarkInceptionReturnPct, 1)} SPY
                  <br />
                  ({pct(fundStats.overUnderInceptionPct, 2)} alpha)
                </span>
              </div>
              <div className="fact">
                <span className="fact-num">{pct(fundStats.ytdReturnPct, 1)}</span>
                <span className="fact-label">
                  Year to date, vs {pct(fundStats.benchmarkYtdReturnPct, 1)} SPY
                  <br />
                  ({pct(fundStats.overUnderYtdPct, 2)} alpha)
                </span>
              </div>
            </div>
          </div>
        </section>

        <section style={{ paddingTop: 0 }}>
          <div className="lede" style={{ marginBottom: 24 }}>
            <div className="lede-kicker">Fund vs. benchmark</div>
            <div className="lede-body">
              <h2>Performance timeline</h2>
              <p className="note">
                Indexed to 100 at inception. S&amp;P 500 is real daily
                closing prices. The Maroon Fund line is built from the
                fund&apos;s actual holdings — each position&apos;s own real
                return since its purchase date, blended by its current
                portfolio weight — then calibrated to the two return
                figures the fund discloses (since-inception and
                year-to-date). The three markers show those anchor points;
                the line between them reflects real market moves in real
                holdings, not a smoothed guess.
              </p>
            </div>
          </div>
          <PerformanceChart
            spyPoints={spyPoints}
            fundPoints={fundPoints}
            fundMarkers={fundMarkers}
            totalDays={totalDays}
          />
        </section>

        <section style={{ paddingTop: 0 }}>
          <div className="lede" style={{ marginBottom: 0 }}>
            <div className="lede-kicker">The book</div>
            <div className="lede-body">
              <h2>Holdings by weight</h2>
              <p className="note">
                {holdings.length} positions, {fundStats.investedWeightPct.toFixed(2)}% invested /{" "}
                {fundStats.cashWeightPct.toFixed(2)}% cash.
              </p>
            </div>
          </div>
          <div className="table-scroll">
            <AllocationTable
              rows={sortedHoldings.map((h) => ({
                key: h.ticker,
                ticker: h.ticker,
                name: h.name,
                weightPct: h.weightPct,
                marketValue: h.marketValue,
                totalReturnPct: h.totalReturnPct,
              }))}
              maxWeight={maxHoldingWeight}
            />
          </div>
          <div className="alloc-foot">
            <span>Total invested value</span>
            <span>{usd(fundStats.investedValue)}</span>
          </div>
        </section>

        <section style={{ paddingTop: 0, paddingBottom: 56 }}>
          <div className="lede" style={{ marginBottom: 0 }}>
            <div className="lede-kicker">Exposure</div>
            <div className="lede-body">
              <h2>Sector allocation</h2>
              <p className="note">
                Sector tags are our own classification, not part of the
                source data.
              </p>
            </div>
          </div>
          <div className="table-scroll">
            <AllocationTable rows={sectors} maxWeight={maxSectorWeight} barClass="sector" />
          </div>
        </section>
      </div>

      <div className="wrap">
        <Footer />
      </div>
    </>
  );
}
