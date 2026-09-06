import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { APPLY_FORM_URL } from "@/lib/links";

export const metadata = {
  title: "Calendar | Maroon Investment Club",
};

const weekly = [
  { name: "General Meetings", when: "Tuesdays, 7:00 PM — Wehner [Room TBD]" },
  { name: "Foundations Bootcamp", when: "Mondays, 7:00 PM — Wehner [Room TBD]" },
  { name: "Equities Division", when: "Thursdays, 6:00 PM — Wehner [Room TBD]" },
  { name: "Quant Division", when: "Wednesdays, 6:00 PM — Wehner [Room TBD]" },
];

const milestones = [
  { date: "September 1", event: "Recruitment info session" },
  { date: "September 15", event: "Applications close" },
  { date: "September 21", event: "Foundations Bootcamp begins" },
  { date: "[Oct TBD]", event: "Travel Series — in-state circuit" },
  { date: "[Nov TBD]", event: "End-of-semester fund pitch" },
];

export default function Calendar() {
  return (
    <>
      <div className="wrap">
        <Nav active="/calendar" />

        <div className="page-head">
          <div className="page-kicker">Calendar</div>
          <h1>When we meet.</h1>
          <p>
            Weekly meetings run every semester rain or shine, on top of a
            handful of dates that matter more than the rest — recruitment,
            travel departures, and the end-of-semester pitch.
          </p>
        </div>

        <section>
          <div className="lede" style={{ marginBottom: 0 }}>
            <div className="lede-kicker">Every week</div>
            <div className="lede-body">
              <h2>Standing meetings</h2>
              <p>
                Exact rooms get finalized each semester — swap the
                placeholders below once you have them.
              </p>
            </div>
          </div>
          <div className="index-list">
            {weekly.map((w) => (
              <div className="index-row" key={w.name}>
                <div className="index-title">{w.name}</div>
                <div className="index-desc">{w.when}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ paddingTop: 0 }}>
          <div className="lede" style={{ marginBottom: 0 }}>
            <div className="lede-kicker">This semester</div>
            <div className="lede-body">
              <h2>Key dates</h2>
              <p className="note">
                Placeholder dates — replace with the real schedule each
                semester, or eventually pull this from a shared calendar.
              </p>
            </div>
          </div>
          <div className="index-list">
            {milestones.map((m) => (
              <div className="index-row" key={m.event}>
                <div className="index-title">{m.date}</div>
                <div className="index-desc">{m.event}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="cta-band">
        <div className="wrap cta-inner">
          <h2>Next up: applications for the fall cohort.</h2>
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
