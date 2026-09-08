import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { APPLY_FORM_URL } from "@/lib/links";

export const metadata = {
  title: "Calendar | Maroon Investment Club",
};

const weekly = [
  { name: "General Meetings", when: "Mondays, 8:00 PM — Wehner [Room TBD]" },
  { name: "Equities Division", when: "Wednesdays, 7:00 PM — Wehner [Room TBD]" },
  { name: "Quant Division", when: "Tuesdays 7:00 - 8:00 PM, Fridays 6:00 - 8:00 PM — Wehner [Room TBD]" },
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
          <div className="lede-center">
            <div className="lede-kicker">Every week</div>
            <h2>Standing meetings</h2>
            <p>Room assignments are finalized at the start of each semester.</p>
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
          <div className="lede-center">
            <div className="lede-kicker">This semester</div>
            <h2>Key dates</h2>
            <p className="note">Dates are added as they&apos;re confirmed each semester.</p>
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
