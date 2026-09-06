import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { findMember } from "@/lib/members";
import { createSessionToken, SESSION_COOKIE, SESSION_MAX_AGE_SECONDS } from "@/lib/session";

export async function POST(request) {
  const { username, password } = await request.json().catch(() => ({}));

  if (typeof username !== "string" || typeof password !== "string") {
    return NextResponse.json({ error: "Missing username or password." }, { status: 400 });
  }

  const member = findMember(username.trim().toLowerCase());
  // Always compare against something, even for an unknown username, so
  // response timing doesn't reveal which usernames exist.
  const hash = member?.passwordHash ?? "$2b$10$invalidsaltinvalidsaltinuseonlyifusernameisntfound";
  const ok = await bcrypt.compare(password, hash);

  if (!member || !ok) {
    return NextResponse.json({ error: "Incorrect username or password." }, { status: 401 });
  }

  const token = await createSessionToken(member.username);
  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });
  return response;
}
