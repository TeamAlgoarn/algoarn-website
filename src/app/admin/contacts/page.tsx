"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { NeonCard } from "@/components/ui/neon-card";

type ContactMessage = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone?: string | null;
  organization?: string | null;
  topic?: string | null;
  message?: string | null;
};

export default function AdminContactsPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [q, setQ] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setLoading(true);
        setErr(null);

        const res = await fetch("/api/admin/contacts", { cache: "no-store" });

        // ✅ if API missing or returns HTML, handle cleanly
        if (!res.ok) {
          const text = await res.text();
          throw new Error(
            `API Error ${res.status}: ${text?.slice(0, 120) || "No response"}`
          );
        }

        const json = await res.json();
        setMessages(json?.messages ?? []);
      } catch (e: any) {
        setErr(e?.message ?? "Failed to load messages");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return messages;
    return messages.filter((m) =>
      [
        m.name,
        m.email,
        m.phone,
        m.organization,
        m.topic,
        m.message,
        m.created_at,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(s)
    );
  }, [messages, q]);

  return (
    <main className="min-h-screen bg-slate-950 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold">Contact Submissions</h1>
            <p className="text-white/60">
              All messages submitted from the Contact page.
            </p>

            <div className="text-sm text-white/70">
              <Link href="/admin" className="hover:text-white underline underline-offset-4">
                ← Back to Admin
              </Link>
            </div>
          </div>

          <div className="w-full md:w-[360px]">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search name / email / topic..."
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm outline-none focus:border-algoarnAqua/60"
            />
          </div>
        </div>

        <NeonCard className="p-0 overflow-hidden rounded-2xl border border-white/10">
          <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="text-sm text-white/70">
              {loading ? "Loading..." : `${filtered.length} messages`}
            </div>

            <Link
              href="/api/admin/contacts"
              target="_blank"
              className="text-sm text-white/70 hover:text-white underline underline-offset-4"
            >
              Open JSON
            </Link>
          </div>

          {err && (
            <div className="px-5 py-4 text-sm text-red-300 border-b border-white/10">
              {err}
            </div>
          )}

          <div className="w-full overflow-x-auto">
            <table className="min-w-[1000px] w-full text-sm">
              <thead className="text-white/70">
                <tr className="border-b border-white/10">
                  <th className="text-left font-semibold px-4 py-3">Date</th>
                  <th className="text-left font-semibold px-4 py-3">Name</th>
                  <th className="text-left font-semibold px-4 py-3">Email</th>
                  <th className="text-left font-semibold px-4 py-3">Phone</th>
                  <th className="text-left font-semibold px-4 py-3">Org</th>
                  <th className="text-left font-semibold px-4 py-3">Topic</th>
                  <th className="text-left font-semibold px-4 py-3">Message</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td className="px-4 py-6 text-white/60" colSpan={7}>
                      Loading messages...
                    </td>
                  </tr>
                ) : filtered.length === 0 ? (
                  <tr>
                    <td className="px-4 py-6 text-white/60" colSpan={7}>
                      No messages found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((m) => (
                    <tr key={m.id} className="border-b border-white/10 hover:bg-white/[0.03]">
                      <td className="px-4 py-3 text-white/70 whitespace-nowrap">
                        {new Date(m.created_at).toLocaleString()}
                      </td>
                      <td className="px-4 py-3 font-medium">{m.name}</td>
                      <td className="px-4 py-3 text-white/80">{m.email}</td>
                      <td className="px-4 py-3 text-white/70">{m.phone ?? "-"}</td>
                      <td className="px-4 py-3 text-white/70">{m.organization ?? "-"}</td>
                      <td className="px-4 py-3 text-white/70">{m.topic ?? "-"}</td>
                      <td className="px-4 py-3 text-white/80 max-w-[420px]">
                        <div className="line-clamp-2">{m.message ?? "-"}</div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </NeonCard>
      </div>
    </main>
  );
}
