import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { APPLY_FORM_URL } from "@/lib/links";

export const metadata = {
  title: "Competitions | Maroon Investment Club",
};

// Sourced from the club's own stock-pitch tracking sheet (last updated
// 12/1/2025). Most of these run on roughly the same annual cycle, but
// organizers move exact dates year to year — the "when" fields below are
// last cycle's timing, not a guarantee. Always confirm on the competition's
// own site (linked on the title) before a team commits.
const fall = [
  {
    when: "Fall — mid-September",
    title: "Indiana State SMIFC Portfolio Building Competition",
    tag: "Portfolio Challenge",
    url: "https://indianastate.edu/academics/colleges/business/smifc/smifc-2025-conference#project-2-smifc-portfolio-building-competition",
    desc: "Build and defend a $100,000, five-year paper portfolio in a 6–10 page write-up. Teams of 1–3; cash prizes of $1,000 / $800 / $700 for the top three. Paper due mid-September, winners present at the SMIFC conference in October.",
  },
  {
    when: "Fall — late September",
    title: "StockTrak Student Investment Challenge",
    tag: "Portfolio Challenge",
    url: "https://www.fma.org/stocktrak",
    desc: "A virtual portfolio simulation run through the Financial Management Association — good reps for members who want live trading experience before committing to a written pitch.",
  },
  {
    when: "Fall — October 1",
    title: "Point72 Academy National Case Competition",
    tag: "Case Competition",
    url: "https://careers.point72.com/CSJobDetail?jobName=2025-point72-academy-national-case-competition-us&jobCode=CPC-0013646&location=New%20York&locale=English&retURL=/CSCareerSearch",
    desc: "Point72's own recruiting case competition — open to freshmen and sophomores only, with the written pitch due about two weeks after the initial deadline. A real pipeline into the Point72 Academy program.",
  },
  {
    when: "Fall — November 1",
    title: "University of Michigan — UIC Case Competition",
    tag: "Case Competition",
    url: "https://www.umichuic.com/",
    desc: "Hosted by Michigan's undergraduate investment case competition — check their site each fall for that year's case and eligibility.",
  },
  {
    when: "Fall — mid-November",
    title: "Women's Stock Pitch — William & Mary",
    tag: "Stock Pitch",
    url: "https://boehlycenter.mason.wm.edu/events/womens-stock-pitch/",
    desc: "A stock-pitch competition open to women in finance, hosted by W&M's Boehly Center for Business Ethics.",
  },
  {
    when: "Fall — mid-November",
    title: "HFAC x Citadel Pitch Competition",
    tag: "Stock Pitch",
    url: "https://www.harvardfac.org/pitch-competition",
    desc: "Harvard Financial Analysts Club's pitch competition, judged by Citadel investment professionals. Teams of 2–4 submit a two-page investment memo and model; finalists present in person at Harvard (travel subsidized) for a $6,000 prize pool, and underclassman finalists get a first-round interview for the Citadel Associate Program.",
  },
  {
    when: "Fall — mid-December",
    title: "Dodge & Cox Stock Pitch Competition",
    tag: "Stock Pitch",
    url: "https://www.dodgeandcox.com/content/dam/dc/us/en/pdf/events/Investment-Case-Competition-Rules-Guidelines.pdf",
    desc: "Open to freshmen and sophomores only; pitches must cover a company with a market cap above $1B.",
  },
  {
    when: "Fall — mid-December",
    title: "St. John's University Private Equity Pitch Competition",
    tag: "PE Case Competition",
    url: "https://www.stjohns.edu/academics/schools/peter-j-tobin-college-business/tobins-experiential-opportunities/private-equity-pitch-competition",
    desc: "Registration due mid-December for a late-February final; teams of 3–4 build and present a private-equity investment case.",
  },
  {
    when: "Fall — [Dec TBD]",
    title: "MIC Stock Pitch Showdown",
    tag: "Internal",
    internal: true,
    desc: "Our own end-of-semester pitch, open to every member — and the way we pick who represents the fund at the competitions on this page.",
  },
  {
    when: "Fall season — date TBD",
    title: "ETF Global Portfolio Challenge",
    tag: "Portfolio Challenge",
    url: "https://etfportfoliochallenge.com/",
    desc: "A virtual, ETF-only portfolio competition that runs each fall.",
  },
  {
    when: "Fall — date TBD",
    title: "Varsity Pitch Competition — Oxford Alpha Fund",
    tag: "Stock Pitch",
    url: "https://www.oxfordalphafund.com/comp-overview",
    desc: "A public stock-pitch competition run by Oxford's Alpha Fund.",
  },
];

const spring = [
  {
    when: "Spring — January 4",
    title: "Florida Stock Pitch",
    tag: "Stock Pitch",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSflws6_g9KhVii9Psp_g_jpCkw19XEGIvHcH6k72bK5eK_V1Q/viewform",
    desc: "Public stock-pitch competition — submit through the competition's Google Form each cycle.",
  },
  {
    when: "Spring — January 5",
    title: "Dartmouth DIPP Stock Pitch Competition",
    tag: "Stock Pitch",
    url: "https://dippnh.org/competition",
    desc: "A virtual public stock pitch — a full long thesis and slide deck, run by Dartmouth's investment philanthropy program.",
  },
  {
    when: "Spring — January 5",
    title: "JPMorgan Innovate for Impact Case Study Competition",
    tag: "Case Competition",
    url: "https://jpmc.recsolu.com/app/collect/event/B5Vx2DYX4b-TbNx6FCPpJQ",
    desc: "JPMorgan Chase's case competition, run through their own recruiting platform.",
  },
  {
    when: "Spring — [Jan TBD]",
    title: "Columbia — Applied Value Investing Pitch Challenge",
    tag: "Stock Pitch",
    url: "https://business.columbia.edu/heilbrunn/events/applied--value-investing-stock-pitch-challenge",
    desc: "Columbia's Heilbrunn Center value-investing pitch challenge — exact date announced each year.",
  },
  {
    when: "Spring — [Jan TBD]",
    title: "Fordham — Roger F. Murray Stock Pitch Competition",
    tag: "Stock Pitch",
    url: "https://www.fordhamgabellicenter.org/programs/the-first-annual-roger-f-murray-stock-pitch-competition",
    desc: "Fordham's Gabelli Center public stock-pitch competition.",
  },
  {
    when: "Spring — mid-January",
    title: "McGill Global Stock Pitch",
    tag: "Stock Pitch",
    url: "https://www.mcgillinvestmentclub.ca/stock-pitch",
    desc: "McGill Investment Club's public stock-pitch competition — opens mid-January most years.",
  },
  {
    when: "Spring — January 17",
    title: "University of Georgia — Terry SMIF Stock Pitch",
    tag: "Stock Pitch",
    url: "https://www.terry.uga.edu/current-students/student-orgs/smif/stock-pitch-competition/",
    desc: "Public stock pitch on a company above $1B market cap, hosted by Terry's Student Managed Investment Fund.",
  },
  {
    when: "Spring — mid-to-late January",
    title: "Texas Stock Pitch",
    tag: "Stock Pitch",
    url: "https://stockpitch.texasusit.org/page-about",
    desc: "Run by Texas USIT — a public stock-pitch competition, and one of the closer ones to travel to.",
  },
  {
    when: "Spring — January 31",
    title: "Alta Fox Capital Small-Cap Stock Pitch Competition",
    tag: "Stock Pitch",
    url: "https://www.altafoxcapital.com/event",
    desc: "A small-cap-focused pitch competition run by Alta Fox Capital; teams of 1–5.",
  },
  {
    when: "Spring — February 6",
    title: "Southeastern Hedge Fund Competition",
    tag: "Hedge Fund Competition",
    url: "https://drive.google.com/file/d/1op1IQJcxAj2qtvkOQcwCUbYfvQg_JkLR/view",
    desc: "A hedge-fund-style pitch competition; each school may enter up to two teams, and a faculty coordinator must be declared.",
  },
  {
    when: "Spring — [Feb TBD]",
    title: "Rotman International Trading Competition",
    tag: "Trading Competition",
    url: "https://inside.rotman.utoronto.ca/financelab/competition/rotman-international-trading-competition-duplicate-30761/",
    desc: "University of Toronto's flagship trading competition — our tracking notes also flag a virtual stock-pitch track alongside its algorithmic trading cases.",
  },
  {
    when: "Spring — [Feb TBD]",
    title: "USF Stock Pitch Competition",
    tag: "Stock Pitch",
    url: "https://www.investmentclubatusf.com/stock-pitch-competition",
    desc: "Tentatively February — no further details published as of last check.",
  },
  {
    when: "Spring — [Mar TBD]",
    title: "CFA Institute Research Challenge",
    tag: "Research Challenge",
    url: "https://www.cfainstitute.org/insights/events/research-challenge",
    desc: "The flagship equity research competition — winners advance from the local round through regional and Americas finals to the global final. Register through your faculty advisor.",
  },
  {
    when: "Spring — March 6",
    title: "Miami Stock Pitch",
    tag: "Stock Pitch",
    url: "https://miamioh.edu/fsb/departments/finance/stock-pitch.html",
    desc: "Public stock-pitch competition hosted by Miami University's Farmer School of Business.",
  },
  {
    when: "Spring — March 13",
    title: "App State — Bowden Investment Group Stock Pitch",
    tag: "Stock Pitch",
    url: "https://finance.appstate.edu/bowden-investment-group/stock-pitch-competition",
    desc: "Public stock-pitch competition hosted by Appalachian State's Bowden Investment Group.",
  },
  {
    when: "Spring — [Mar TBD]",
    title: "Cornell Stock Pitch",
    tag: "Stock Pitch",
    url: "https://business.cornell.edu/centers/parker/sample-stock-pitches/",
    desc: "Public stock-pitch competition run through Cornell's Parker Center.",
  },
  {
    when: "Spring — date TBD",
    title: "Isenberg Stock Pitch Competition",
    tag: "Stock Pitch",
    url: "https://www.minutemenequityfund.com/isenbergstockpitchcompetition",
    desc: "UMass Isenberg's public stock-pitch competition, run by the Minutemen Equity Fund.",
  },
  {
    when: "Spring — date TBD",
    title: "ASU x Fundamental Edge Stock Pitch",
    tag: "Stock Pitch",
    url: "https://www.avicasu.com/stock-pitch-competition",
    desc: "Public stock-pitch competition run jointly by Arizona State and Fundamental Edge.",
  },
  {
    when: "Spring — date TBD",
    title: "USC Stock Pitch Conference",
    tag: "Stock Pitch",
    url: "https://www.uscvig.org/spring-stock-pitch-conference",
    desc: "Long/short pitch on a company with at least a $100M market cap, hosted by USC's Value Investing Group.",
  },
];

const unscheduled = [
  {
    when: "Status unclear",
    title: "SEC Student Pitch Competition",
    tag: "Stock Pitch",
    url: "https://www.thesecu.com/programs/sec-student-pitch-competition/archive/",
    desc: "Has run most years, but sat out 2025 — worth checking each fall to see whether it's back.",
  },
  {
    when: "No details yet",
    title: "NYU Stern Stock Pitch",
    tag: "Stock Pitch",
    url: "https://nyustern.campusgroups.com/simr/events/",
    desc: "Nothing published as of last check — watch their events page.",
  },
  {
    when: "No details yet",
    title: "Invest Like a Champion Today — Notre Dame",
    tag: "Stock Pitch",
    url: "https://ndigi.nd.edu/engage-with-us",
    desc: "Details TBD on Notre Dame's investment group site.",
  },
];

function TimelineSection({ items }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <div className={`timeline-item${item.internal ? " is-internal" : ""}`} key={item.title}>
          <div className="timeline-when">{item.when}</div>
          <div className="timeline-head">
            <span className="timeline-title">
              {item.url ? (
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              ) : (
                item.title
              )}
            </span>
            <span className="timeline-tag">{item.tag}</span>
          </div>
          <p className="timeline-desc">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default function Competitions() {
  return (
    <>
      <div className="wrap">
        <Nav active="/competitions" />

        <div className="page-head">
          <div className="page-kicker">Competitions</div>
          <h1>Where the research and the pitches get tested.</h1>
          <p>
            Every member is encouraged to compete — from the CFA Institute
            Research Challenge to national stock-pitch invitationals to
            trading and portfolio competitions run out of other
            universities. It's the fastest way to find out whether a thesis
            actually holds up in front of people who didn't write it. Below
            is our running database of external competitions, alongside the
            internal pitch we run to pick who represents the fund.
          </p>
        </div>

        <section>
          <div className="lede" style={{ marginBottom: 0 }}>
            <div className="lede-kicker">Fall semester</div>
            <div className="lede-body">
              <h2>Research season</h2>
              <p className="note">
                Timing reflects last cycle's dates — most of these recur
                annually around the same window, but confirm the current
                year's deadline on the competition's own site (linked on the
                title) before a team commits.
              </p>
            </div>
          </div>
          <div style={{ marginTop: 40 }}>
            <TimelineSection items={fall} />
          </div>
        </section>

        <section style={{ paddingTop: 0 }}>
          <div className="lede" style={{ marginBottom: 0 }}>
            <div className="lede-kicker">Spring semester</div>
            <div className="lede-body">
              <h2>The competition ladder</h2>
              <p className="note">
                Same caveat — dates below are last cycle's, confirm before
                committing.
              </p>
            </div>
          </div>
          <div style={{ marginTop: 40 }}>
            <TimelineSection items={spring} />
          </div>
        </section>

        <section style={{ paddingTop: 0 }}>
          <div className="lede" style={{ marginBottom: 0 }}>
            <div className="lede-kicker">Keep an eye on</div>
            <div className="lede-body">
              <h2>Not yet announced</h2>
              <p className="note">
                No confirmed date or details as of our last check — still
                worth watching.
              </p>
            </div>
          </div>
          <div style={{ marginTop: 40 }}>
            <TimelineSection items={unscheduled} />
          </div>
        </section>
      </div>

      <div className="cta-band">
        <div className="wrap cta-inner">
          <h2>Want to compete? Join a team.</h2>
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
