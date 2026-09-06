import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SitePhoto from "@/components/SitePhoto";
import { APPLY_FORM_URL } from "@/lib/links";
import { trips } from "@/lib/travelSeries";

export const metadata = {
  title: "Travel Series | Maroon Investment Club",
};

export default function TravelSeries() {
  const allPhotos = trips.flatMap((trip) =>
    trip.photos.map((photo) => ({ ...photo, city: trip.city }))
  );

  return (
    <>
      <div className="wrap">
        <Nav active="/travel-series" />

        <div className="page-head">
          <div className="page-kicker">Travel Series</div>
          <h1>We take the fund on the road.</h1>
          <p>
            Once a semester, members leave College Station to sit down with
            the people actually running money — asset managers and firms in
            Houston and Austin so far. It&apos;s part networking, part
            reality check on what the industry actually looks like day to
            day.
          </p>
        </div>

        {allPhotos.length > 0 && (
          <section>
            <div className="lede" style={{ marginBottom: 32 }}>
              <div className="lede-kicker">From the road</div>
              <div className="lede-body">
                <h2>A running index of past departures</h2>
              </div>
            </div>
            <div className="photo-index">
              {allPhotos.map((photo) => (
                <div className="ph" key={photo.src}>
                  <SitePhoto src={photo.src} alt={photo.alt} className="ph-photo" height={150} />
                  <span className="ph-cap">{photo.city}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        <section style={{ paddingTop: 0 }}>
          <div className="lede" style={{ marginBottom: 0 }}>
            <div className="lede-kicker">Featured departures</div>
            <div className="lede-body">
              <h2>Longer write-ups from recent trips</h2>
            </div>
          </div>

          {trips.map((trip) => (
            <div className="program" key={trip.id}>
              <figure className="program-figure" style={{ margin: 0 }}>
                <SitePhoto
                  src={trip.photos[0]?.src}
                  alt={trip.photos[0]?.alt ?? `${trip.city}, TX`}
                  height={220}
                  className="program-photo"
                />
                <figcaption>{trip.city}, TX</figcaption>
              </figure>
              <div>
                <div className="program-eyebrow">{trip.eyebrow}</div>
                <h3>{trip.city}</h3>
                <p>{trip.summary}</p>
              </div>
            </div>
          ))}
        </section>
      </div>

      <div className="cta-band">
        <div className="wrap cta-inner">
          <h2>Next departure: applications open this fall.</h2>
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
