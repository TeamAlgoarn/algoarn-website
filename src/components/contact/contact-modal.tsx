// // "use client";

// // import { useState } from "react";
// // import { Button } from "@/components/ui/button";

// // type Props = {
// //   open: boolean;
// //   onClose: () => void;
// //   defaultTopic?: string; // e.g. "demo", "contact", "suca"
// // };
// // const inputBase =
// //   "w-full rounded-xl bg-white border border-slate-300 p-3 outline-none text-black " +
// //   "focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20";

// // export default function ContactModal({
// //   open,
// //   onClose,
// //   defaultTopic = "contact",
// // }: Props) {
// //   const [topic, setTopic] = useState(defaultTopic);
// //   const [organization, setOrganization] = useState("");
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [phone, setPhone] = useState("");
// //   const [message, setMessage] = useState("");
// //   const [saving, setSaving] = useState(false);

// //   if (!open) return null;

// //   async function submit() {
// //     // ✅ Client-side validation (matches backend)
// //     if (!name || !email || !message || !topic) {
// //       alert("Please fill all required fields");
// //       return;
// //     }

// //     setSaving(true);

// //     try {
// //       const res = await fetch("/api/contact", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({
// //           name,
// //           email,
// //           phone: phone || null,
// //           organization: organization || null,
// //           message,
// //           topic, // ✅ REQUIRED
// //         }),
// //       });

// //       const json = await res.json();
// //       setSaving(false);

// //       if (!res.ok) {
// //         alert(json.error || "Submission failed");
// //         return;
// //       }

// //       alert("Thank you! We’ll get back to you shortly.");
// //       onClose();

// //       // reset form
// //       setName("");
// //       setEmail("");
// //       setPhone("");
// //       setOrganization("");
// //       setMessage("");
// //       setTopic(defaultTopic);
// //     } catch (err: any) {
// //       setSaving(false);
// //       alert("Unexpected error. Please try again.");
// //       console.error(err);
// //     }
// //   }

// //   return (
// //     <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
// //       <div className="w-full max-w-xl rounded-2xl bg-slate-900 border border-white/10 p-6 shadow-2xl">
// //         {/* Header */}
// //         <div className="flex justify-between items-center mb-4">
// //           <h2 className="text-xl font-bold text-white">Contact Us</h2>
// //           <button
// //             onClick={onClose}
// //             className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white"
// //           >
// //             Close
// //           </button>
// //         </div>

// //         {/* Form */}
// //         <div className="space-y-4 text-white">
// //           {/* Topic */}
// //           <div>
// //             <label className="text-sm opacity-80">Reason *</label>
// //            <select
// //   value={topic}
// //   onChange={(e) => setTopic(e.target.value)}
// //   className={`${inputBase} bg-white/10 border border-white text-black`}
// // >
// //   <option value="General Contact" className="text-white bg-black border border-white">
// //     General Contact
// //   </option>
// //   <option value="Demo" className="text-black bg-white/10 border border-white">
// //     Demo
// //   </option>
// //   <option value="SUCA Demo" className="text-black bg-white/10 border border-white">
// //     SUCA Demo
// //   </option>
// //   <option value="Institutional Demo" className="text-black bg-white border border-white">
// //     Institutional Demo
// //   </option>
// //   <option value="AI Services" className="text-black bg-white border border-white">
// //     AI Services
// //   </option>
// // </select>

// //           </div>

// //           {/* Organization */}
// //           <div>
// //             <label className="text-sm opacity-80">Organization</label>
// //             <input
// //               value={organization}
// //               onChange={(e) => setOrganization(e.target.value)}
// //               placeholder="College / Company"
// //               className="w-full mt-1 rounded-xl bg-white/10 border border-white/20 p-3"
// //             />
// //           </div>

// //           {/* Name + Email */}
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
// //             <div>
// //               <label className="text-sm opacity-80">Name *</label>
// //               <input
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //                 className="w-full mt-1 rounded-xl bg-white/10 border border-white/20 p-3"
// //               />
// //             </div>

// //             <div>
// //               <label className="text-sm opacity-80">Email *</label>
// //               <input
// //                 type="email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 className="w-full mt-1 rounded-xl bg-white/10 border border-white/20 p-3"
// //               />
// //             </div>
// //           </div>

// //           {/* Phone */}
// //           <div>
// //             <label className="text-sm opacity-80">Phone</label>
// //             <input
// //               value={phone}
// //               onChange={(e) => setPhone(e.target.value)}
// //               className="w-full mt-1 rounded-xl bg-white/10 border border-white/20 p-3"
// //             />
// //           </div>

// //           {/* Message */}
// //           <div>
// //             <label className="text-sm opacity-80">Message *</label>
// //             <textarea
// //               value={message}
// //               onChange={(e) => setMessage(e.target.value)}
// //               className="w-full mt-1 rounded-xl bg-white/10 border border-white/20 p-3 min-h-[120px]"
// //             />
// //           </div>

// //           {/* Actions */}
// //           <div className="flex justify-end gap-2 pt-2">
// //             <Button
// //               variant="outline"
// //               onClick={onClose}
// //               className="border-white/20 text-white"
// //             >
// //               Cancel
// //             </Button>
// //             <Button
// //               onClick={submit}
// //               disabled={saving}
// //               className="bg-gradient-to-r from-algoarnAqua to-algoarnBlue text-white"
// //             >
// //               {saving ? "Submitting..." : "Submit"}
// //             </Button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import { Button } from "@/components/ui/button";

// type Props = {
//   open: boolean;
//   onClose: () => void;
//   defaultTopic?: string; // e.g. "Demo", "AI Services", "SUCA Demo"
// };

// const inputBase =
//   "w-full rounded-xl bg-white/8 border border-white/15 p-3 outline-none text-white " +
//   "placeholder:text-white/40 focus:border-algoarnAqua/40 focus:ring-2 focus:ring-algoarnAqua/20 caret-white";

// const textareaBase =
//   "w-full rounded-xl bg-white/8 border border-white/15 p-3 outline-none text-white " +
//   "placeholder:text-white/40 focus:border-algoarnAqua/40 focus:ring-2 focus:ring-algoarnAqua/20";

// const selectBase =
//   "w-full rounded-xl bg-white/8 border border-white/15 p-3 outline-none text-white " +
//   "focus:border-algoarnAqua/40 focus:ring-2 focus:ring-algoarnAqua/20";

// export default function ContactModal({ open, onClose, defaultTopic }: Props) {
//  const topics = useMemo(
//   () => [
//     "SUCA Platform Demo",
//     "AI Strategy Consulting",
//     "Predictive Analytics",
//     "Custom AI Solutions",
//     "System Integration",
//     "Partnership Opportunity",
//   ],
//   []
// );


//   const [topic, setTopic] = useState("General Contact");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [organization, setOrganization] = useState("");
//   const [message, setMessage] = useState("");

//   const [saving, setSaving] = useState(false);

//   // When modal opens, set default topic + reset fields
//   useEffect(() => {
//     if (!open) return;
//     const pick = (defaultTopic || "General Contact").trim();
//     setTopic(topics.includes(pick) ? pick : "SUCA Platform Demo");


//     setName("");
//     setEmail("");
//     setPhone("");
//     setOrganization("");
//     setMessage("");
//     setSaving(false);
//   }, [open, defaultTopic, topics]);

//   async function submit() {
//     // must match backend validation: name, email, message, topic
//     if (!name.trim() || !email.trim() || !message.trim() || !topic.trim()) {
//       alert("Missing required fields");
//       return;
//     }

//     setSaving(true);
//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name: name.trim(),
//           email: email.trim(),
//           phone: phone.trim() || null,
//           organization: organization.trim() || null,
//           message: message.trim(),
//           topic: topic.trim(),
//         }),
//       });

//       const json = await res.json();

//       if (!res.ok) {
//         alert(json?.error || "Submit failed");
//         setSaving(false);
//         return;
//       }

//       alert("Submitted successfully ✅");
//       setSaving(false);
//       onClose();
//     } catch (e: any) {
//       alert(e?.message || "Network error");
//       setSaving(false);
//     }
//   }

//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
//       <div className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-gradient-to-br from-slate-900/95 to-slate-950/95 border border-algoarnAqua/20 shadow-2xl shadow-algoarnAqua/10 p-6">
//         <div className="flex items-center justify-between mb-4">
//           <div className="text-2xl text-white font-semibold">Contact Us</div>
//           <button
//             onClick={onClose}
//             className="px-3 py-1 rounded-lg bg-white/10 border border-white/15 hover:bg-white/15 text-white"
//           >
//             Close
//           </button>
//         </div>

//         <div className="space-y-4 text-white">
//           {/* Topic */}
//           <div>
//             <label className="text-sm opacity-80">Reason *</label>
//             <select
//               value={topic}
//               onChange={(e) => setTopic(e.target.value)}
//               className={selectBase}
//               // helps some browsers render dark dropdown
//               style={{ colorScheme: "dark" }}
//             >
//               {topics.map((t) => (
//                 <option key={t} value={t} className="bg-slate-900 text-white">
//                   {t}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Name + Email */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//             <div>
//               <label className="text-sm opacity-80">Name *</label>
//               <input
//                 className={inputBase}
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Your full name"
//               />
//             </div>

//             <div>
//               <label className="text-sm opacity-80">Email *</label>
//               <input
//                 className={inputBase}
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="you@email.com"
//               />
//             </div>
//           </div>

//           {/* Phone + Organization */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//             <div>
//               <label className="text-sm opacity-80">Phone</label>
//               <input
//                 className={inputBase}
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 placeholder="Optional"
//               />
//             </div>

//             <div>
//               <label className="text-sm opacity-80">Organization</label>
//               <input
//                 className={inputBase}
//                 value={organization}
//                 onChange={(e) => setOrganization(e.target.value)}
//                 placeholder="Company / Institution"
//               />
//             </div>
//           </div>

//           {/* Message */}
//           <div>
//             <label className="text-sm opacity-80">Message *</label>
//             <textarea
//               className={`${textareaBase} min-h-[160px]`}
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Tell us what you need..."
//             />
//           </div>

//           {/* Actions */}
//           <div className="flex justify-end gap-2 pt-2">
//             <Button
//               variant="outline"
//               onClick={onClose}
//               className="border-white/20 text-white hover:bg-white/10"
//             >
//               Cancel
//             </Button>
//             <Button
//               onClick={submit}
//               disabled={saving}
//               className="bg-gradient-to-r from-algoarnAqua to-algoarnBlue text-white"
//             >
//               {saving ? "Submitting..." : "Submit"}
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

type Props = {
  open: boolean;
  onClose: () => void;
  // optional: if you want to prefill from buttons like "SUCA Platform Demo"
  defaultTopic?: string;
};

const inputBase =
  "w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 outline-none text-white placeholder:text-white/40 " +
  "focus:border-algoarnAqua/40 focus:ring-2 focus:ring-algoarnAqua/20 caret-white";

const textareaBase =
  "w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 outline-none text-white placeholder:text-white/40 " +
  "focus:border-algoarnAqua/40 focus:ring-2 focus:ring-algoarnAqua/20";

const selectBase =
  "w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 outline-none text-white " +
  "focus:border-algoarnAqua/40 focus:ring-2 focus:ring-algoarnAqua/20";

export default function ContactModal({ open, onClose, defaultTopic }: Props) {
  const primaryInterestOptions = useMemo(
    () => [
      "SUCA Platform Demo",
      "AI Strategy Consulting",
      "Predictive Analytics",
      "Custom AI Solutions",
      "System Integration",
      "Partnership Opportunity",
    ],
    []
  );

  const institutionTypes = useMemo(
    () => ["University", "College", "School", "Company", "Other"],
    []
  );

  const teamSizes = useMemo(
    () => ["1-50 employees", "51-200 employees", "201-500 employees", "500+ employees"],
    []
  );

  const timelines = useMemo(
    () => ["Short-term (1 month)", "1-3 months", "3-6 months", "6+ months"],
    []
  );

  const [saving, setSaving] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");

  const [institutionType, setInstitutionType] = useState("University");
  const [teamSize, setTeamSize] = useState("1-50 employees");

  const [primaryInterest, setPrimaryInterest] = useState("SUCA Platform Demo");
  const [implementationTimeline, setImplementationTimeline] = useState("Short-term (1 month)");

  const [goals, setGoals] = useState("");

  // Prefill Primary Interest when modal opens (from button click)
  useEffect(() => {
    if (!open) return;

    if (defaultTopic && primaryInterestOptions.includes(defaultTopic)) {
      setPrimaryInterest(defaultTopic);
    }
  }, [open, defaultTopic, primaryInterestOptions]);

  function resetForm() {
    setName("");
    setEmail("");
    setPhone("");
    setOrganization("");
    setInstitutionType("University");
    setTeamSize("1-50 employees");
    setPrimaryInterest("SUCA Platform Demo");
    setImplementationTimeline("Short-term (1 month)");
    setGoals("");
  }

  async function submit() {
    // required fields (like screenshot)
    if (!name.trim() || !email.trim() || !goals.trim() || !primaryInterest.trim()) {
      alert("Missing required fields");
      return;
    }

    setSaving(true);

    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || null,
      organization: organization.trim() || null,

      institution_type: institutionType,
      team_size: teamSize,
      primary_interest: primaryInterest,
      implementation_timeline: implementationTimeline,

      message: goals.trim(), // keep backend compatibility
      topic: primaryInterest, // keep backend compatibility
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const json = await res.json();
    setSaving(false);

    if (!res.ok) {
      alert(json.error || "Submit failed");
      return;
    }

    resetForm();
    onClose();
    alert("Submitted successfully!");
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl border border-white/10 bg-gradient-to-b from-[#0b1b2d] to-[#071224] shadow-2xl p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white">Start Your AI Transformation</h2>
            <p className="text-white/70 text-sm mt-1">
              Get a personalized consultation and demo tailored to your institution
            </p>
          </div>

          <Button
  type="button"
  className="bg-white/10 text-white border border-white/15 hover:bg-white/15"
  onClick={onClose}
>
  Close
</Button>

        </div>

        {/* FORM GRID like screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-white">
          <Field label="Full Name *">
            <input
              className={inputBase}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Dr. John Smith"
            />
          </Field>

          <Field label="Work Email *">
            <input
              className={inputBase}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john.smith@university.edu"
              type="email"
            />
          </Field>

          <Field label="Direct Phone">
            <input
              className={inputBase}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 9XXXXXXXXX"
            />
          </Field>

          <Field label="Organization">
            <input
              className={inputBase}
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              placeholder="Stanford University"
            />
          </Field>

          <Field label="Institution Type">
            <select
              className={selectBase}
              value={institutionType}
              onChange={(e) => setInstitutionType(e.target.value)}
            >
              {institutionTypes.map((x) => (
                <option key={x} value={x} className="bg-[#0b1b2d] text-white">
                  {x}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Team Size">
            <select className={selectBase} value={teamSize} onChange={(e) => setTeamSize(e.target.value)}>
              {teamSizes.map((x) => (
                <option key={x} value={x} className="bg-[#0b1b2d] text-white">
                  {x}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Primary Interest">
            <select
              className={selectBase}
              value={primaryInterest}
              onChange={(e) => setPrimaryInterest(e.target.value)}
            >
              {primaryInterestOptions.map((x) => (
                <option key={x} value={x} className="bg-[#0b1b2d] text-white">
                  {x}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Implementation Timeline">
            <select
              className={selectBase}
              value={implementationTimeline}
              onChange={(e) => setImplementationTimeline(e.target.value)}
            >
              {timelines.map((x) => (
                <option key={x} value={x} className="bg-[#0b1b2d] text-white">
                  {x}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div className="mt-6 text-white">
          <Field label="Tell Us About Your Goals *">
            <textarea
              className={`${textareaBase} min-h-[140px]`}
              value={goals}
              onChange={(e) => setGoals(e.target.value)}
              placeholder="Describe your institution's current challenges, specific goals you want to achieve with AI, and any particular use cases you're interested in..."
            />
          </Field>
        </div>

        <div className="mt-6 flex justify-end gap-3">
         <Button
  type="button"
  className="bg-white/10 text-white border border-white/15 hover:bg-white/15"
  onClick={onClose}
  disabled={saving}
>
  Cancel
</Button>

          <Button
            type="button"
            onClick={submit}
            disabled={saving}
            className="bg-gradient-to-r from-algoarnAqua to-algoarnBlue text-white"
            style={{ borderRadius: "9999px" }}
          >
            {saving ? "Submitting..." : "Request Personalized Demo"}
          </Button>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-sm font-semibold text-white/90 mb-2">{label}</div>
      {children}
    </div>
  );
}
