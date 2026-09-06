import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { APPLY_FORM_URL } from "@/lib/links";

export const metadata = {
  title: "Quant | Maroon Investment Club",
};

const process = [
  {
    title: "Form a hypothesis",
    desc: "Members identify a market inefficiency or signal worth testing.",
  },
  {
    title: "Backtest it",
    desc: "The strategy gets built and tested against historical data before anyone trusts it.",
  },
  {
    title: "Risk-manage it",
    desc: "Position sizing, drawdown limits, and failure modes get worked out up front.",
  },
  {
    title: "Deploy & pitch",
    desc: "Working strategies get pitched to the desk and, if approved, run live.",
  },
];

export default function Quant() {
  return (
    <>
      <div className="wrap">
        <Nav active="/maroon-fund/quant" />

        <div className="page-head">
          <div className="page-kicker">Maroon Fund</div>
          <h1>Quant</h1>
          <p>
            The Quant division designs, backtests, and deploys data-driven
            trading strategies — pulling in statistics, programming, and
            market microstructure along the way.
          </p>
        </div>

        <section>
          <div className="lede">
            <div className="lede-kicker">How it works</div>
            <div className="lede-body">
              <h2>From hypothesis to live strategy</h2>
            </div>
          </div>
          <div className="index-list">
            {process.map((step) => (
              <div className="index-row" key={step.title}>
                <div className="index-title">{step.title}</div>
                <div className="index-desc">{step.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ paddingTop: 0 }}>
          <div className="lede" style={{ marginBottom: 0 }}>
            <div className="lede-kicker">Get involved</div>
            <div className="lede-body">
              <h2>Joining the desk</h2>
              <p>
                Members with a background in statistics, CS, or engineering
                tend to gravitate here — but the main requirement is
                curiosity about markets as systems, not just companies.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="cta-band">
        <div className="wrap cta-inner">
          <h2>Apply to the Quant division.</h2>
          <p className="cta-note">
            Applications for the fall cohort are open now.
          </p>
          <a className="btn" href={APPLY_FORM_URL} target="_blank" rel="noopener noreferrer">
            Apply now
          </a>
        </div>
      </div>

      <div className="wrap">
        <Footer />
      </div>
    </>
  );
}
