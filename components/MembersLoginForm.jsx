"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// useSearchParams needs a Suspense boundary above it or Next.js can't
// statically prerender the rest of the page.
function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const res = await fetch("/api/members/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Something went wrong.");
      setSubmitting(false);
      return;
    }

    router.push(searchParams.get("next") || "/members");
    router.refresh();
  }

  return (
    <>
      <div className="wrap">
        <Nav active="/members" />

        <div className="page-head">
          <div className="page-kicker">Equity Fund</div>
          <h1>Members sign-in.</h1>
          <p>For current Equity Fund members only.</p>
        </div>

        <section style={{ paddingTop: 0, maxWidth: 380 }}>
          <form className="login-form" onSubmit={handleSubmit}>
            <label className="login-label">
              Username
              <input
                className="login-input"
                type="text"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
            <label className="login-label">
              Password
              <input
                className="login-input"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            {error ? <p className="login-error">{error}</p> : null}
            <button className="btn" type="submit" disabled={submitting}>
              {submitting ? "Signing in…" : "Sign in"}
            </button>
          </form>
        </section>
      </div>

      <div className="wrap">
        <Footer />
      </div>
    </>
  );
}

export default function MembersLoginForm() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
