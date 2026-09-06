// Node-runtime only (API routes + the members page, never middleware — see
// middleware.js for why that needs its own copy of the verify logic).
//
// Session tokens are a plain HMAC-SHA256-signed payload: base64url(payload)
// + "." + base64url(signature). No external JWT library — this is the
// entire spec, and it's easy to audit. The signature makes the payload
// tamper-proof (a client can read `exp`/username but can't forge a token
// without SESSION_SECRET), which is what actually matters for gating a
// members page — this isn't encrypting anything secret.
import { webcrypto as crypto } from "node:crypto";

const encoder = new TextEncoder();
const SESSION_SECRET = process.env.SESSION_SECRET;
const DEFAULT_MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 days

async function hmacKey(secret) {
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

export async function createSessionToken(username, maxAgeSeconds = DEFAULT_MAX_AGE_SECONDS) {
  if (!SESSION_SECRET) {
    throw new Error("SESSION_SECRET is not set — see .env.local.example");
  }
  const payload = JSON.stringify({ u: username, exp: Date.now() + maxAgeSeconds * 1000 });
  const payloadB64 = Buffer.from(payload).toString("base64url");
  const key = await hmacKey(SESSION_SECRET);
  const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(payloadB64));
  const sigB64 = Buffer.from(sig).toString("base64url");
  return `${payloadB64}.${sigB64}`;
}

export async function verifySessionToken(token) {
  if (!SESSION_SECRET || !token) return null;
  const [payloadB64, sigB64] = token.split(".");
  if (!payloadB64 || !sigB64) return null;

  const key = await hmacKey(SESSION_SECRET);
  const valid = await crypto.subtle.verify(
    "HMAC",
    key,
    Buffer.from(sigB64, "base64url"),
    encoder.encode(payloadB64)
  );
  if (!valid) return null;

  try {
    const payload = JSON.parse(Buffer.from(payloadB64, "base64url").toString("utf8"));
    if (typeof payload.exp !== "number" || payload.exp < Date.now()) return null;
    return { username: payload.u };
  } catch {
    return null;
  }
}

export const SESSION_COOKIE = "mic_session";
export const SESSION_MAX_AGE_SECONDS = DEFAULT_MAX_AGE_SECONDS;
