"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function UpdatePasswordPage() {
  const router = useRouter();
  const [pw, setPw] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function update() {
    setLoading(true);
    setMsg(null);

    const { error } = await supabase.auth.updateUser({ password: pw });

    setLoading(false);

    if (error) return setMsg(error.message);

    setMsg("Password updated. Redirecting...");
    setTimeout(() => router.push("/admin"), 800);
  }

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-16 bg-white">
      <div className="w-full max-w-md border border-black/10 rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-black mb-4">Set new password</h1>

        <label className="text-sm font-medium text-black">New password</label>
        <input
          className="w-full mt-1 px-4 py-3 rounded-xl border border-black/10 mb-4"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          type="password"
          placeholder="New password"
        />

        {msg && <p className="text-sm mb-4 text-black/70">{msg}</p>}

        <button
          onClick={update}
          disabled={loading}
          className="w-full rounded-xl bg-black text-white py-3 font-semibold disabled:opacity-60"
        >
          {loading ? "Updating..." : "Update password"}
        </button>
      </div>
    </main>
  );
}
