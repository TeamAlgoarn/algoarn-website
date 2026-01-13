"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

type Mode = "login" | "reset";

export default function AdminLoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

 async function onLogin() {
  setLoading(true);
  setMsg(null);

  const { error } = await supabase.auth.signInWithPassword({
    email: email.trim(),
    password,
  });

  if (error) {
    setLoading(false);
    return setMsg(error.message);
  }

  // ✅ set admin_token cookie for middleware/api protection
  const r = await fetch("/api/admin/session", { method: "POST" });
  if (!r.ok) {
    setLoading(false);
    return setMsg("Login succeeded but session cookie failed.");
  }

  setLoading(false);

  // ✅ redirect to where user wanted to go, default /admin
  const params = new URLSearchParams(window.location.search);
  const next = params.get("next");
  router.push(next || "/admin");
  router.refresh();
}



  async function onReset() {
    setLoading(true);
    setMsg(null);

    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: "http://localhost:3000/admin/update-password",
    });

    setLoading(false);

    if (error) return setMsg(error.message);

    setMsg("Reset link sent. Check your email.");
  }

  return (
   <main className="admin-auth min-h-[80vh] flex items-center justify-center px-6 py-16 bg-white">

      <div className="w-full max-w-md border border-black/10 rounded-2xl p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-black mb-6">Admin Login</h1>

        <div className="flex gap-2 mb-6">
          <button
            className={`px-4 py-2 rounded-lg text-sm font-semibold border ${
              mode === "login" ? "bg-black text-white" : "bg-white text-black"
            }`}
            onClick={() => setMode("login")}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-semibold border ${
              mode === "reset" ? "bg-black text-white" : "bg-white text-black"
            }`}
            onClick={() => setMode("reset")}
          >
            Reset Password
          </button>
        </div>

        <div className="mb-4">
          <label className="text-sm font-medium text-black">Email</label>
          <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="admin@email.com"
  className="
    w-full mt-1 px-4 py-3 rounded-xl
    !bg-white !text-black
    border border-black/20
    placeholder:text-gray-500
    focus:outline-none focus:ring-2 focus:ring-black focus:border-black
    appearance-none
  "
  style={{ backgroundColor: "#fff", color: "#000" }}
/>


        </div>

        {mode === "login" && (
          <div className="mb-6">
            <label className="text-sm font-medium text-black">Password</label>
         <input
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  placeholder="••••••••"
  className="
    w-full mt-1 px-4 py-3 rounded-xl
    !bg-white !text-black
    border border-black/20
    placeholder:text-gray-500
    focus:outline-none focus:ring-2 focus:ring-black focus:border-black
    appearance-none
  "
  style={{ backgroundColor: "#fff", color: "#000" }}
/>


          </div>
        )}

        {msg && <p className="text-sm mb-4 text-black/70">{msg}</p>}

        {mode === "login" ? (
          <button
            disabled={loading}
            onClick={onLogin}
            className="w-full rounded-xl bg-black text-white py-3 font-semibold disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        ) : (
          <button
            disabled={loading}
            onClick={onReset}
            className="w-full rounded-xl bg-black text-white py-3 font-semibold disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send reset link"}
          </button>
        )}
      </div>
    </main>
  );
}
