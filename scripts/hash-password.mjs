#!/usr/bin/env node
// Generates a bcrypt hash to paste into lib/members.js when adding or
// resetting a member's password. Run:
//
//   node scripts/hash-password.mjs "their-password"
//
// The plaintext password is never written anywhere — only the hash below
// goes into lib/members.js.
import bcrypt from "bcryptjs";

const password = process.argv[2];
if (!password) {
  console.error('Usage: node scripts/hash-password.mjs "their-password"');
  process.exit(1);
}

console.log(bcrypt.hashSync(password, 10));
