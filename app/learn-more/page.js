import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookFinder from "@/components/BookFinder";

export const metadata = {
  title: "Learn More | Maroon Investment Club",
};

// `domain` drives the small logo via Google's public favicon service —
// a lightweight way to show a source's mark without hotlinking a brand's
// own logo assets (which are often protected and not meant for reuse).
const letters = [
  {
    title: "Berkshire Hathaway Shareholder Letters",
    desc: "Warren Buffett — free, archived back to 1977; still the best writing on business quality and capital allocation.",
    url: "https://www.berkshirehathaway.com/letters/letters.html",
    domain: "berkshirehathaway.com",
  },
  {
    title: "Oaktree Memos",
    desc: "Howard Marks — risk, market cycles, and second-level thinking, published irregularly.",
    url: "https://www.oaktreecapital.com/insights/memos",
    domain: "oaktreecapital.com",
  },
  {
    title: "Pershing Square Reports",
    desc: "Bill Ackman — concentrated, activist positions with the reasoning laid out in full.",
    url: "https://pershingsquareholdings.com/performance/reports-and-statements/",
    domain: "pershingsquareholdings.com",
  },
  {
    title: "Greenlight Capital",
    desc: "David Einhorn — short-selling case studies alongside the long book.",
    url: "https://greenlightcapital.com",
    domain: "greenlightcapital.com",
  },
];

const podcasts = [
  {
    title: "Invest Like the Best",
    desc: "Patrick O'Shaughnessy — long-form interviews across investing, business, and decision-making.",
    url: "https://colossus.com/series/invest-like-the-best/",
    domain: "colossus.com",
  },
  {
    title: "Capital Allocators",
    desc: "Ted Seides — how institutional allocators actually pick managers and size positions.",
    url: "https://capitalallocators.com",
    domain: "capitalallocators.com",
  },
  {
    title: "The Investor's Podcast",
    desc: "Formerly \"We Study Billionaires\" — value investing and macro, aimed at students building a framework.",
    url: "https://www.theinvestorspodcast.com",
    domain: "theinvestorspodcast.com",
  },
  {
    title: "Odd Lots",
    desc: "Bloomberg — Tracy Alloway & Joe Weisenthal on markets, commodities, and financial plumbing.",
    url: "https://www.bloomberg.com/oddlots",
    domain: "bloomberg.com",
  },
  {
    title: "Masters in Business",
    desc: "Barry Ritholtz — Bloomberg's long-running interview series with investors and economists.",
    url: "https://www.bloomberg.com/podcasts/masters_in_business",
    domain: "bloomberg.com",
  },
];

const opinion = [
  { title: "Money Stuff", desc: "Matt Levine, Bloomberg Opinion — daily, sharp, and the closest thing to required reading in finance media." },
  { title: "FT Alphaville", desc: "Financial Times — irreverent coverage of market structure and financial esoterica." },
  { title: "Axios Markets", desc: "A fast daily read on what actually moved markets that day." },
];

const substacks = [
  { title: "The Diff", desc: "Byrne Hobart — business strategy and financial history, one company or mechanism at a time." },
  { title: "Net Interest", desc: "Marc Rubinstein — how financial institutions actually make money, from a former hedge fund analyst." },
  { title: "Noahpinion", desc: "Noah Smith — macro and economics commentary, written for a general but literate audience." },
  { title: "Kyla's Newsletter", desc: "Kyla Scanlon — macro concepts explained for people without an econ background." },
];

function TextGroup({ kicker, title, note, items }) {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="lede" style={{ marginBottom: 0 }}>
        <div className="lede-kicker">{kicker}</div>
        <div className="lede-body">
          <h2>{title}</h2>
          {note ? <p className="note">{note}</p> : null}
        </div>
      </div>
      <div className="index-list">
        {items.map((item) => (
          <div className="index-row" key={item.title}>
            <div className="index-title">{item.title}</div>
            <div className="index-desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Hedge fund letters & podcasts: same row shape, but with a source logo
// and the title linking straight out to the official page.
function LinkedResourceGroup({ kicker, title, items }) {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="lede" style={{ marginBottom: 0 }}>
        <div className="lede-kicker">{kicker}</div>
        <div className="lede-body">
          <h2>{title}</h2>
        </div>
      </div>
      <div className="index-list">
        {items.map((item) => (
          <div className="index-row resource-row" key={item.title}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="resource-logo"
              src={`https://www.google.com/s2/favicons?domain=${item.domain}&sz=64`}
              alt=""
              aria-hidden="true"
            />
            <div className="index-title">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </div>
            <div className="index-desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function LearnMore() {
  return (
    <>
      <div className="wrap">
        <Nav active="/learn-more" />

        <div className="page-head">
          <div className="page-kicker">Learn More</div>
          <h1>Find your own reading list.</h1>
          <p>
            Rather than one long undifferentiated shelf, tell us what you're
            curious about and where you're starting from — you'll get three
            specific books per area, picked for that level, not just a
            beginner-to-expert dump. Click any title for a real summary,
            what it's actually organized like, and what you'll walk away
            knowing.
          </p>
        </div>

        <section>
          <BookFinder />
        </section>

        <LinkedResourceGroup
          kicker="Straight from the source"
          title="Hedge fund letters"
          items={letters}
        />
        <LinkedResourceGroup kicker="For the commute" title="Podcasts" items={podcasts} />
        <TextGroup
          kicker="Daily habit"
          title="Opinion & newsletters"
          items={opinion}
        />
        <TextGroup
          kicker="Independent writers"
          title="Substacks"
          note="This list is a starting point, not gospel — edit it directly in app/learn-more/page.js as the club's taste changes."
          items={substacks}
        />
      </div>

      <div className="wrap">
        <Footer />
      </div>
    </>
  );
}
