import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LogoutButton from "@/components/LogoutButton";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/session";
import { findMember } from "@/lib/members";
import { ideas } from "@/lib/portfolioData";

export const metadata = {
  title: "Members | Maroon Investment Club",
};

export default async function MembersDashboard() {
  // middleware.js already gates this route, but the page verifies the
  // session again itself rather than trusting that alone — cheap, and it's
  // also how we get the signed-in member's name to display.
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  const session = token ? await verifySessionToken(token) : null;
  if (!session) redirect("/members/login");

  const member = findMember(session.username);

  return (
    <>
      <div className="wrap">
        <Nav active="/members" />

        <div className="page-head">
          <div className="page-kicker">Equity Fund</div>
          <h1>Welcome back{member ? `, ${member.name}` : ""}.</h1>
          <p>
            What the desk is currently working on — visible to Equity Fund
            members only. Fund performance and holdings are public now —
            see the{" "}
            <Link className="link-cta" href="/portfolio" style={{ fontSize: "inherit" }}>
              Portfolio page
            </Link>
            .
          </p>
          <p style={{ marginTop: 16 }}>
            <LogoutButton />
          </p>
        </div>

        <section style={{ paddingBottom: 56 }}>
          <div className="lede" style={{ marginBottom: 0 }}>
            <div className="lede-kicker">In the pipeline</div>
            <div className="lede-body">
              <h2>Open ideas</h2>
              <p className="note">
                Placeholder pitches — replace with the fund&apos;s real
                ones in lib/portfolioData.js.
              </p>
            </div>
          </div>
          <div className="index-list">
            {ideas.map((idea, i) => (
              <div className="index-row" key={i}>
                <div className="index-title">
                  {idea.title}
                  <div className="note" style={{ marginTop: 4 }}>
                    {idea.author} — {idea.status}
                  </div>
                </div>
                <div className="index-desc">{idea.summary}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="wrap">
        <Footer />
      </div>
    </>
  );
}
