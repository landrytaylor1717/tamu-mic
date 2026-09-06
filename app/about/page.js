import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About | Maroon Investment Club",
};

export default function About() {
  return (
    <>
      <div className="wrap">
        <Nav active="/about" />

        <div className="page-head">
          <div className="page-kicker">About</div>
          <h1>Run by students, held to a real standard.</h1>
          <p>
            The Maroon Investment Club exists to make investing something
            students actually practice, not just discuss — through the fund,
            through our workshops, and through direct time with the
            industry.
          </p>
        </div>

        <section>
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
                classroom couldn&apos;t offer, the
                Maroon Investment Club has grown into one of the more
                selective finance organizations on campus, with an alumni
                network across banking, asset management, and technology.
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
          <div className="lede" style={{ marginBottom: 0 }}>
            <div className="lede-kicker">Who runs it</div>
            <div className="lede-body">
              <h2>Leadership</h2>
              <p>
                The club is run entirely by students, officer positions
                included.
              </p>
              <Link className="link-cta" href="/leadership">
                See current leadership
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className="wrap">
        <Footer />
      </div>
    </>
  );
}
