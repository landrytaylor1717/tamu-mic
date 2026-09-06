import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { APPLY_FORM_URL } from "@/lib/links";

export const metadata = {
  title: "Equities | Maroon Investment Club",
};

const process = [
  {
    title: "Source an idea",
    desc: "Members screen for companies worth digging into and bring a candidate to the team.",
  },
  {
    title: "Build the model",
    desc: "A full financial model and valuation — the same work a junior analyst would do.",
  },
  {
    title: "Pitch it",
    desc: "Members defend the thesis to the rest of the division, including the bear case.",
  },
  {
    title: "Manage the position",
    desc: "If it's added to the fund, the original analyst tracks it going forward.",
  },
];

export default function Equities() {
  return (
    <>
      <div className="wrap">
        <Nav active="/maroon-fund/equities" />

        <div className="page-head">
          <div className="page-kicker">Maroon Fund</div>
          <h1>Equities</h1>
          <p>
            The Equities division runs fundamental research the way a
            buy-side analyst would — sourcing ideas, building models, and
            defending a thesis to the team before it becomes a real
            position in the fund.
          </p>
        </div>

        <section>
          <div className="lede">
            <div className="lede-kicker">How it works</div>
            <div className="lede-body">
              <h2>From idea to position</h2>
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
                New members typically join Equities after the Finance
                Development Program. No prior modeling experience is
                required — just the willingness to build one.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="cta-band">
        <div className="wrap cta-inner">
          <h2>Apply to the Equities division.</h2>
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
