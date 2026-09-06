"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/members/logout", { method: "POST" });
    router.push("/");
    router.refresh();
  }

  return (
    <button
      className="link-cta"
      onClick={handleLogout}
      style={{ font: "inherit", background: "none", border: "none", borderBottom: "1px solid var(--ink-faint)", cursor: "pointer", padding: 0 }}
    >
      Sign out
    </button>
  );
}
