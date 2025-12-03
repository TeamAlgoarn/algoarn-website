"use client";

import { useState, FormEvent } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { NeonCard } from "@/components/ui/neon-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const jobTitles: Record<string, string> = {
  "ai-engineer": "AI Engineer – Computer Vision & NLP",
  "fullstack-engineer": "Full-Stack Engineer – Next.js + Node",
  "data-analyst": "Data Analyst – EdTech / Academic Analytics",
};

type ApplyForm = {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  portfolio: string;
  message: string;
};

export default function ApplyPage() {
  const params = useParams<{ id: string }>();
  const jobId = typeof params.id === "string" ? params.id : "";
  const jobTitle = jobTitles[jobId] ?? "Open role at Algoarn";

  const [form, setForm] = useState<ApplyForm>({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.name || !form.email) {
      setError("Please fill in Name and Email.");
      return;
    }

    try {
      setStatus("submitting");

      await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobId,
          jobTitle,
          ...form,
        }),
      });

      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        linkedin: "",
        portfolio: "",
        message: "",
      });
    } catch (err) {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="pt-20 pb-24">
      <div className="max-w-4xl mx-auto px-4 space-y-10">
        <div className="space-y-3">
          <Link href={`/careers/${jobId}`} className="text-xs text-algoarnAqua">
            ← Back to role details
          </Link>
          <h1 className="text-2xl md:text-3xl font-display font-bold">
            Apply for: <span className="text-algoarnAqua">{jobTitle}</span>
          </h1>
          <p className="text-sm text-white/60">
            Share a bit about yourself. We&apos;ll review and get back if
            there&apos;s a good match.
          </p>
        </div>

        <NeonCard className="p-6 md:p-8 space-y-5">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-white/80">
                  Name <span className="text-red-400">*</span>
                </label>
                <Input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-white/80">
                  Email <span className="text-red-400">*</span>
                </label>
                <Input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-white/80">
                  Phone
                </label>
                <Input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 ..."
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-white/80">
                  LinkedIn
                </label>
                <Input
                  name="linkedin"
                  value={form.linkedin}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/..."
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-white/80">
                Portfolio / GitHub / Resume link
              </label>
              <Input
                name="portfolio"
                value={form.portfolio}
                onChange={handleChange}
                placeholder="Link to portfolio, GitHub or online CV"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-white/80">
                Short intro / message
              </label>
              <Textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your experience, interests, and why Algoarn."
              />
            </div>

            {error && (
              <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/40 rounded-md px-3 py-2">
                {error}
              </p>
            )}

            {status === "success" && (
              <p className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/40 rounded-md px-3 py-2">
                Application submitted. Thank you!
              </p>
            )}

            <div className="pt-2 flex items-center justify-between gap-4">
              <Button
                type="submit"
                className="px-8 py-3 text-sm md:text-base font-semibold"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Submitting..." : "Submit application"}
              </Button>
              <p className="text-[11px] text-white/40 text-right">
                We review every application manually. If there is a fit, we&apos;ll
                reach out with next steps.
              </p>
            </div>
          </form>
        </NeonCard>
      </div>
    </main>
  );
}
