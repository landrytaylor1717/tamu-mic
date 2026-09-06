// Equity Fund members who can log into /members. To add or remove someone,
// edit this list directly — there's no admin UI or database, on purpose,
// since the roster only changes a few times a year.
//
// To add a member: run `node scripts/hash-password.mjs "their-password"`
// and paste the resulting hash below. Passwords are never stored in
// plaintext, including here — only the bcrypt hash.
//
// PLACEHOLDER ACCOUNTS BELOW — for demo/testing only. Replace with real
// members and give each one their own password before this goes live,
// then delete these two.
export const members = [
  {
    username: "demo1",
    name: "[Member Name]",
    passwordHash: "$2b$10$PMMmxWUIFmxFHDoNdBBCtuk.EuTqwFk6Iyet1FrNu1JYFAf0kRlcG", // demo-password-1
  },
  {
    username: "demo2",
    name: "[Member Name]",
    passwordHash: "$2b$10$0F58r7.CdYXeADuzTRms3eqVqDptGEMKuCpkDpExmO6kOYukyK8Pq", // demo-password-2
  },
];

export function findMember(username) {
  return members.find((m) => m.username === username) ?? null;
}
