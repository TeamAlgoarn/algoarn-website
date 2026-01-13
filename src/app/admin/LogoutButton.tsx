"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LogoutButton() {
  const router = useRouter();

  async function logout() {
    // sign out supabase session 
    await supabase.auth.signOut();

    // clear admin cookie
    await fetch("/api/admin/logout", { method: "POST" });

    // go to login page
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
      onClick={logout}
      className="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold hover:bg-white/10"
    >
      Logout
    </button>
  );
}
