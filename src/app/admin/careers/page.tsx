"use client";

import { useEffect, useState } from "react";

type Career = {
  id: string;
  job_id: string | null;
  title: string | null;
  location: string | null;
  type: string | null;
  description: string | null;
  requirements: string[] | null;
  tags: string[] | null;
  published: boolean;
  created_at: string | null;
  updated_at: string | null;
};

function csvToArray(v: string) {
  return v
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function linesToArray(v: string) {
  return v
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

const inputBase =
  "w-full rounded-xl bg-white/8 border border-white/15 p-3 outline-none text-white placeholder:text-white/50 " +
  "focus:border-algoarnAqua/40 focus:ring-2 focus:ring-algoarnAqua/20 caret-white";


const textareaBase =
  "w-full rounded-xl bg-white/8 border border-white/15 p-3 outline-none text-white placeholder:text-white/40 " +
  "focus:border-algoarnAqua/40 focus:ring-2 focus:ring-algoarnAqua/20";

const btnBase =
  "px-4 py-2 rounded-xl border transition-colors disabled:opacity-60 disabled:cursor-not-allowed";

export default function AdminCareersPage() {
  const [jobs, setJobs] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editing, setEditing] = useState<Career | null>(null);

  const [jobId, setJobId] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("Full-time");
  const [description, setDescription] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [reqInput, setReqInput] = useState("");
  const [published, setPublished] = useState(true);

  async function load() {
    setLoading(true);
    const res = await fetch("/api/admin/careers", { cache: "no-store" });
    const json = await res.json();
    setJobs(json.data || []);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  function resetForm() {
    setEditing(null);
    setJobId("");
    setTitle("");
    setLocation("");
    setType("Full-time");
    setDescription("");
    setTagsInput("");
    setReqInput("");
    setPublished(true);
  }

  function openCreate() {
    resetForm();
    setOpen(true);
  }

  function openEdit(j: Career) {
    setEditing(j);
    setJobId(j.job_id ?? "");
    setTitle(j.title ?? "");
    setLocation(j.location ?? "");
    setType(j.type ?? "Full-time");
    setDescription(j.description ?? "");
    setTagsInput((j.tags ?? []).join(", "));
    setReqInput((j.requirements ?? []).join("\n"));
    setPublished(!!j.published);
    setOpen(true);
  }

  async function save() {
   if (editing && !editing.id) {
  alert("Invalid job record: missing id");
  return;
}

    

    setSaving(true);

    const payload = {
      job_id: jobId.trim(),
      title: title.trim(),
      location: location.trim(),
      type: type.trim(),
      description,
      tags: csvToArray(tagsInput),
      requirements: linesToArray(reqInput),
      published,
    };

    const url = editing ? `/api/admin/careers/${editing.id}` : "/api/admin/careers";
    const method = editing ? "PATCH" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const json = await res.json();
    setSaving(false);

    if (!res.ok) {
      alert(json.error || "Save failed");
      return;
    }

    setOpen(false);
    await load();
  }

  async function remove(id: string) {
    if (!confirm("Delete this job?")) return;

    const res = await fetch(`/api/admin/careers/${id}`, { method: "DELETE" });
    const json = await res.json();

    if (!res.ok) {
      alert(json.error || "Delete failed");
      return;
    }

    await load();
  }

  async function togglePublish(j: Career) {
    const res = await fetch(`/api/admin/careers/${j.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        job_id: j.job_id,
        title: j.title,
        location: j.location,
        type: j.type,
        description: j.description,
        requirements: j.requirements ?? [],
        tags: j.tags ?? [],
        published: !j.published,
      }),
    });

    const json = await res.json();
    if (!res.ok) {
      alert(json.error || "Update failed");
      return;
    }

    await load();
  }

  return (
    <main className="pt-20 pb-24 px-4 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Career Postings</h1>

        <button
          onClick={openCreate}
          className={`${btnBase} bg-white/10 border-white/15 hover:bg-white/15`}
        >
          + Add Job
        </button>
      </div>

      {loading ? (
        <div className="opacity-70">Loading…</div>
      ) : (
        <div className="space-y-3">
          {jobs.map((j) => (
            <div
              key={j.id}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-4"
            >
              <div className="min-w-0">
                <div className="font-semibold truncate">{j.title || "(No title)"}</div>
                <div className="text-sm opacity-70">
                  {j.job_id || "—"} • {j.location || "—"} • {j.type || "—"}
                </div>

                {!!(j.tags?.length) && (
                  <div className="text-xs opacity-70 mt-1 truncate">
                    Tags: {j.tags?.join(", ")}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => togglePublish(j)}
                  className={`px-3 py-1 rounded-lg border transition-colors ${
                    j.published
                      ? "border-green-400/30 bg-green-400/10 hover:bg-green-400/15"
                      : "border-yellow-400/30 bg-yellow-400/10 hover:bg-yellow-400/15"
                  }`}
                >
                  {j.published ? "Published" : "Draft"}
                </button>

                <button
  onClick={() => openEdit(j)}
  className="px-3 py-1 rounded-lg bg-white-500/10 border border-grey-500/30 hover:bg-grey-500/15 text-black-200"
>
  Edit
</button>


                <button
                  onClick={() => remove(j.id)}
                  className="px-3 py-1 rounded-lg bg-red-500/10 border border-red-500/30 hover:bg-red-500/15"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {jobs.length === 0 && <div className="opacity-70">No jobs yet.</div>}
        </div>
      )}

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl bg-gradient-to-br from-slate-900/95 to-slate-950/95 border border-algoarnAqua/20 shadow-2xl shadow-algoarnAqua/10 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-xl  text-white font-semibold">
                {editing ? "Edit Job" : "Add Job"}
              </div>
              <button
                onClick={() => setOpen(false)}
                className="px-3 py-1 rounded-lg bg-white/10 border border-white/15 hover:bg-white/15 text-white"
              >
                Close
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-white">
              <Field label="Job ID (slug) *">
                <input
                  className={inputBase}
                  value={jobId}
                  onChange={(e) => setJobId(e.target.value)}
                  placeholder="fullstack-engineer"
                />
              </Field>

              <Field label="Title *">
                <input
                  className={inputBase}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Full-Stack Engineer — Next.js + Node"
                />
              </Field>

              <Field label="Location">
                <input
                  className={inputBase}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Remote (India)"
                />
              </Field>

              <Field label="Type">
                <input
                  className={inputBase}
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  placeholder="Full-time"
                />
              </Field>

              <Field label="Tags (comma separated)">
                <input
                  className={inputBase}
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  placeholder="Next.js, TypeScript, APIs, PostgreSQL"
                />
              </Field>

              <Field label="Published">
                <label className="flex items-center gap-2 mt-2">
                  <input
                    type="checkbox"
                    checked={published}
                    onChange={(e) => setPublished(e.target.checked)}
                  />
                  <span className="text-sm opacity-80">Show on Careers page</span>
                </label>
              </Field>
            </div>

            <div className="mt-3 text-white" >
              <Field label="Description">
                <textarea
                  className={`${textareaBase} min-h-[120px]`}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Write a short description of the role..."
                />
              </Field>
            </div>

            <div className="mt-3 text-white">
              <Field label="Requirements (one per line)">
                <textarea
                  className={`${textareaBase} min-h-[140px]`}
                  value={reqInput}
                  onChange={(e) => setReqInput(e.target.value)}
                  placeholder={`Strong JS/TS\nNext.js experience\nAPI development`}
                />
              </Field>
            </div>

            <div className="mt-5 flex justify-end gap-2 text-white">
              <button
                onClick={() => setOpen(false)}
                className={`${btnBase} bg-white/10 border-white/15 hover:bg-white/15`}
              >
                Cancel
              </button>
           
              <button
                onClick={save}
                disabled={saving}
                className={`${btnBase}  bg-white/10 border-white/15 hover:bg-white/15`}
              >
                {saving ? "Saving…" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-sm opacity-80 mb-1">{label}</div>
      {children}
    </div>
  );
}
