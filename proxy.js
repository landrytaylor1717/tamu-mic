import { NextResponse } from "next/server";

// This file runs on the Edge runtime, which has no `node:crypto` — only
// the standard Web Crypto global. lib/session.js (used by the login route
// and the members page) targets Node instead, so the verify logic is
// duplicated here rather than shared. Both implement the same HMAC-SHA256
// token format, so a token created by one verifies correctly in the other.
const SESSION_COOKIE = "mic_session";
const encoder = new TextEncoder();

function base64urlToBytes(str) {
  const padded = str + "=".repeat((4 - (str.length % 4)) % 4);
  const binary = atob(padded.replace(/-/g, "+").replace(/_/g, "/"));
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function verifySessionToken(token) {
  const secret = process.env.SESSION_SECRET;
  if (!secret || !token) return null;
  const [payloadB64, sigB64] = token.split(".");
  if (!payloadB64 || !sigB64) return null;

  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["verify"]
  );
  const valid = await crypto.subtle.verify(
    "HMAC",
    key,
    base64urlToBytes(sigB64),
    encoder.encode(payloadB64)
  );
  if (!valid) return null;

  try {
    const payload = JSON.parse(new TextDecoder().decode(base64urlToBytes(payloadB64)));
    if (typeof payload.exp !== "number" || payload.exp < Date.now()) return null;
    return { username: payload.u };
  } catch {
    return null;
  }
}
export async function proxy(request) {
  // The login page itself must stay reachable, or an unauthenticated visit
  // would bounce here and redirect right back in a loop.
  if (request.nextUrl.pathname === "/members/login") {
    return NextResponse.next();
  }

  const token = request.cookies.get(SESSION_COOKIE)?.value;
  const session = await verifySessionToken(token);

  if (!session) {
    const loginUrl = new URL("/members/login", request.url);
    loginUrl.searchParams.set("next", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/members/:path*"],
};
