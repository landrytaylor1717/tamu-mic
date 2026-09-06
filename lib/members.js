// Equity Fund members who can log into /members. To add or remove someone,
// edit this list directly — there's no admin UI or database, on purpose,
// since the roster only changes a few times a year.
//
// To add a member: run `node scripts/hash-password.mjs "their-password"`
// and paste the resulting hash below. Passwords are never stored in
// plaintext, including here — only the bcrypt hash.
//
// Add real Equity Fund members here — no accounts exist until you do.
export const members = [];

export function findMember(username) {
  return members.find((m) => m.username === username) ?? null;
}
