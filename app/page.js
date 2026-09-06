import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroScene from "@/components/HeroScene";
import SitePhoto from "@/components/SitePhoto";
import { APPLY_FORM_URL } from "@/lib/links";

export default function Home() {
  return (
    <>
    <div className="wrap">
      <Nav active="/" />
    </div>

    <div className="hero-3d">
      <HeroScene />
      <div className="hero-scrim" />
      <div className="hero-3d-copy">
        <div className="hero-kicker">Maroon Fund — est. 2025</div>
        <h1>We manage real money, not a class project.</h1>
        <p>
          The Maroon Fund is run entirely by Texas A&amp;M students, split
          across an Equities team doing fundamental research and a Quant
          team building trading strategies.
        </p>
        <div className="hero-ctas">
          <a className="btn" href={APPLY_FORM_URL} target="_blank" rel="noopener noreferrer">
            Apply now
          </a>
          <a className="link-cta-white" href="#funds">
            See the fund
          </a>
        </div>
      </div>
    </div>

    <div className="alert-band">
      <div className="wrap alert-inner">
        <span className="alert-label">Important</span>
        <p className="alert-text">
          Applications for the Fall cohort close <strong>September 15</strong>.
        </p>
        <a className="alert-cta" href={APPLY_FORM_URL} target="_blank" rel="noopener noreferrer">
          Apply now →
        </a>
      </div>
    </div>

    <div className="wrap">
      <div className="facts">
        <div className="facts-inner">
          <div className="fact">
            <span className="fact-num">02</span>
            <span className="fact-label">
              Divisions —<br />
              Equities &amp; Quant
            </span>
          </div>
          <div className="fact">
            <span className="fact-num">100%</span>
            <span className="fact-label">
              Student-managed,
              <br />
              start to finish
            </span>
          </div>
          <div className="fact">
            <span className="fact-num">Fall</span>
            <span className="fact-label">
              Applications
              <br />
              open now
            </span>
          </div>
        </div>
      </div>

      <section id="about">
        <div className="lede">
          <div className="lede-kicker">Where we come from</div>
          <div className="lede-body">
            <h2>History &amp; mission</h2>
          </div>
        </div>
        <div className="split-two">
          <div>
            <h3>Our history</h3>
            <p className="dropcap">
              Founded by students who wanted hands-on experience the
              classroom couldn&apos;t offer
              <span className="note"> [add founding year]</span>, the Maroon
              Investment Club has grown into one of the more selective
              finance organizations on campus, with an alumni network across
              banking, asset management, and technology.
            </p>
          </div>
          <div>
            <h3>Our mission</h3>
            <p>
              We exist to help members think independently and rigorously
              about investing, and to make sure that thinking translates
              into practical skill — through the fund itself, our
              workshops, and direct exposure to the industry.
            </p>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="lede">
          <div className="lede-kicker">Who we are</div>
          <div className="lede-body">
            <h2>Two divisions, one fund</h2>
            <p>
              We&apos;re a group of Aggies who wanted more than a finance
              club that just talks about markets — so we built one that
              trades in them.
            </p>
          </div>
        </div>
        <div className="divisions" id="funds">
          <div className="division">
            <div className="division-name">Equities</div>
            <p>
              Members research individual companies, build models, and pitch
              positions to the fund. It&apos;s the closest thing on campus to
              working a buy-side analyst seat.
            </p>
            <Link className="link-cta" href="/maroon-fund/equities">
              See the Equities division
            </Link>
          </div>
          <div className="division">
            <div className="division-name">Quant</div>
            <p>
              Members design, backtest, and deploy data-driven trading
              strategies, pulling in statistics, programming, and market
              microstructure.
            </p>
            <Link className="link-cta" href="/maroon-fund/quant">
              See the Quant division
            </Link>
          </div>
        </div>
      </section>

      <section id="programs" style={{ paddingTop: 0 }}>
        <div className="lede" style={{ marginBottom: 0 }}>
          <div className="lede-kicker">Get involved</div>
          <div className="lede-body">
            <h2>Our programs</h2>
            <p>Beyond the fund itself, membership runs through a few core programs.</p>
          </div>
        </div>

        <div className="program">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <figure className="program-figure" style={{ margin: 0 }}>
            <img
              src="/images/general-meeting.jpg"
              alt="A member presenting on integrity to the club during a general meeting"
              style={{ height: 220, objectFit: "cover" }}
            />
            <figcaption>General meetings</figcaption>
          </figure>
          <div>
            <div className="program-eyebrow">WEEKLY</div>
            <h3>General &amp; speaker meetings</h3>
            <p>
              Weekly meetings alternate between an industry speaker and a
              hands-on workshop covering valuation, market structure, and
              portfolio strategy.
            </p>
          </div>
        </div>

        <div className="program">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <figure className="program-figure" style={{ margin: 0 }}>
            <img
              src="/images/bootcamp-copart.jpg"
              alt="New members presenting a stock pitch on Copart during Foundations Bootcamp"
              style={{ height: 220, objectFit: "cover" }}
            />
            <figcaption>New member bootcamp — a Copart pitch</figcaption>
          </figure>
          <div>
            <div className="program-eyebrow">SEMESTER-LONG — NEW MEMBERS</div>
            <h3>Foundations bootcamp</h3>
            <p>
              A semester-long bootcamp for new members covering investing
              fundamentals, valuation, and financial modeling before they
              join a division.
            </p>
          </div>
        </div>

        <div className="program">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <figure className="program-figure" style={{ margin: 0 }}>
            <img
              src="/images/travel-series/austin-1.jpg"
              alt="Members with a Dimensional Fund Advisors host on their Austin office terrace"
              style={{ height: 220, objectFit: "cover" }}
            />
            <figcaption>Houston · Austin</figcaption>
          </figure>
          <div>
            <div className="program-eyebrow">EACH SEMESTER</div>
            <h3>Travel series</h3>
            <p>
              Select members travel to visit financial institutions in
              cities like Houston and Austin — part networking, part
              reality check on how the industry actually runs.
            </p>
            <Link className="link-cta" href="/travel-series">
              See the Travel Series
            </Link>
          </div>
        </div>
      </section>

      <section id="socials" style={{ paddingTop: 0 }}>
        <div className="lede">
          <div className="lede-kicker">Beyond the fund</div>
          <div className="lede-body">
            <h2>Socials</h2>
            <p>
              We think the best investing ideas get better when they&apos;re
              shared, not kept to yourself — so socials matter as much as
              the workshops. Recent events have ranged from a Big Event
              service day to casual meetups around town.
            </p>
          </div>
        </div>
        <div className="photo-index">
          {[
            { src: "/images/socials/field-football.jpg", alt: "Members tossing a football on a campus field", cap: "Flag football" },
            { src: "/images/socials/ice-cream.jpg", alt: "Members hanging out at an ice cream shop", cap: "Ice cream run" },
            { src: "/images/socials/patio-hangout.jpg", alt: "Members hanging out at an outdoor pavilion", cap: "Patio hangout" },
            { src: "/images/socials/big-event-1.jpg", alt: "Members in Big Event volunteer shirts outdoors", cap: "The Big Event" },
            { src: "/images/socials/big-event-2.jpg", alt: "Members eating lunch after volunteering for the Big Event", cap: "The Big Event" },
          ].map((photo) => (
            <div className="ph" key={photo.src}>
              <SitePhoto src={photo.src} alt={photo.alt} className="ph-photo" height={150} />
              <span className="ph-cap">{photo.cap}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ paddingTop: 0, paddingBottom: 56 }}>
        <div className="lede" style={{ marginBottom: 24 }}>
          <div className="lede-kicker">With thanks to</div>
          <div className="lede-body">
            <h2>The Adam C. Sinn &apos;00 Center for Investment Management</h2>
          </div>
        </div>
        <a
          className="sponsor-mark"
          href="https://mays.tamu.edu/centers-and-institutes/center-for-investment-management/adam-c-sinn-00-center-for-investment-management-programs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/tamu-box-logo.svg" alt="Texas A&M University logo" />
          <span>Mays Business School</span>
        </a>
      </section>

    </div>

      <div className="cta-band">
        <div className="wrap cta-inner">
          <h2>Ready to manage real capital?</h2>
          <p className="cta-note">
            Applications for the fall cohort are open now. No finance
            background required — just curiosity.
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
