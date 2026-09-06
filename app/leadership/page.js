import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TeamPhoto from "@/components/TeamPhoto";
import { APPLY_FORM_URL } from "@/lib/links";

export const metadata = {
  title: "Leadership | Maroon Investment Club",
};

// Photo files go in /public/leadership/<photo>.jpg (first name, lowercase)
// — drop each headshot in with the filename below and it shows up
// automatically. Until then this renders a plain circle so the page never
// breaks for a missing file.
const leadership = [
  { photo: "owen", name: "Owen Conkey", meta: "Sophomore, Finance", role: "CIO" },
  { photo: "dhruv", name: "Dhruv Datta", meta: "Senior, MMET", role: "CIO" },
  { photo: "landry", name: "Landry Taylor", meta: "Sophomore, MIS", role: "Quant Director" },
  { photo: "christian", name: "Christian Marquez", meta: "Junior, International Affairs & Master in Finance", role: "COO" },
  { photo: "diego", name: "Diego Cancino", meta: "Sophomore, Economics and Applied Math", role: "Portfolio Manager" },
  { photo: "jeremiel", name: "Jeremiel Fernandez", meta: "Junior, Finance and MSF", role: "Portfolio Manager" },
  { photo: "rishabh", name: "Rishabh Makker", meta: null, role: "Quant PM" },
];

export default function Leadership() {
  return (
    <>
      <div className="wrap">
        <Nav active="/leadership" />

        <div className="page-head">
          <div className="page-kicker">Leadership</div>
          <h1>Who runs the club.</h1>
          <p>
            The fund and every program underneath it is run entirely by
            students — here&apos;s who&apos;s currently in charge of it.
          </p>
        </div>

        <section>
          <div className="lede" style={{ marginBottom: 0 }}>
            <div className="lede-kicker">Officers</div>
            <div className="lede-body">
              <h2>Current leadership</h2>
            </div>
          </div>
          <div className="team-grid">
            {leadership.map((person) => (
              <div className="team-card" key={person.photo}>
                <TeamPhoto src={`/leadership/${person.photo}.jpg`} alt={person.name} />
                <div className="team-name">{person.name}</div>
                {person.meta ? <div className="team-meta">{person.meta}</div> : null}
                <div className="team-role">{person.role}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="cta-band">
        <div className="wrap cta-inner">
          <h2>Want to run this someday?</h2>
          <p className="cta-note">
            Officer positions open up to members every year. Applications
            for the fall cohort are open now.
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
