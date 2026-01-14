// "use client";

// import { useParams } from "next/navigation";
// import Link from "next/link";
// import { NeonCard } from "@/components/ui/neon-card";
// import { Button } from "@/components/ui/button";

// type JobDetail = {
//   id: string;
//   title: string;
//   location: string;
//   type: string;
//   team: string;
//   intro: string;
//   responsibilities: string[];
//   requirements: string[];
// };

// const jobs: JobDetail[] = [
//   {
//     id: "ai-engineer",
//     title: "AI Engineer – Computer Vision & NLP",
//     location: "Bengaluru / Remote (Hybrid)",
//     type: "Full-time",
//     team: "Engineering",
//     intro:
//       "You will work closely with the founders and product team to design, build and deploy AI pipelines for computer vision, OCR, and generative AI use-cases powering SUCA and custom projects.",
//     responsibilities: [
//       "Design and implement computer vision and OCR pipelines for real-world datasets.",
//       "Experiment with LLMs and generative models to power chatbots and internal tools.",
//       "Collaborate with product and frontend teams to turn models into usable features.",
//       "Participate in code reviews, architecture discussions and technical planning.",
//     ],
//     requirements: [
//       "Strong Python skills with experience in PyTorch / TensorFlow.",
//       "Hands-on experience with at least one CV problem (detection, classification, OCR, tracking).",
//       "Good understanding of model training, evaluation and deployment best practices.",
//       "Comfortable working in a fast-moving, product-centric environment.",
//     ],
//   },
//   {
//     id: "fullstack-engineer",
//     title: "Full-Stack Engineer – Next.js + Node",
//     location: "Remote (India)",
//     type: "Full-time",
//     team: "Product Engineering",
//     intro:
//       "You will own core parts of our web platforms and dashboards, working across Next.js, APIs, and databases to bring AI-driven experiences to life.",
//     responsibilities: [
//       "Build performant, accessible UIs in Next.js + Tailwind.",
//       "Design and implement secure backend APIs and integrations.",
//       "Work closely with AI engineers to surface model outputs into the product.",
//       "Improve developer experience, tooling and code quality across projects.",
//     ],
//     requirements: [
//       "Production experience with React / Next.js and TypeScript.",
//       "Solid understanding of REST APIs, authentication and basic security.",
//       "Experience with relational databases (Postgres/MySQL) or MongoDB.",
//       "Ability to own features end-to-end from spec to deployment.",
//     ],
//   },
//   {
//     id: "data-analyst",
//     title: "Data Analyst – EdTech / Academic Analytics",
//     location: "Bengaluru / Remote",
//     type: "Full-time",
//     team: "Data & Insights",
//     intro:
//       "You’ll help institutions and internal teams understand their academic and operational data through dashboards, reports and insight.",
//     responsibilities: [
//       "Work with academic and business stakeholders to define metrics and KPIs.",
//       "Clean, transform and analyse data from multiple institutional systems.",
//       "Build clear dashboards and reports for non-technical users.",
//       "Support pilot rollouts with analysis and insight generation.",
//     ],
//     requirements: [
//       "Strong SQL and comfort working with messy, real-world datasets.",
//       "Experience with at least one BI tool or dashboard stack.",
//       "Good communication skills with non-technical stakeholders.",
//       "Interest in education, learning or EdTech is a plus.",
//     ],
//   },
// ];

// export default function JobDetailPage() {
//   const params = useParams<{ id: string }>();
//   const jobId = typeof params.id === "string" ? params.id : "";
//   const job = jobs.find((j) => j.id === jobId);

//   if (!job) {
//     return (
//       <main className="pt-20 pb-24">
//         <div className="max-w-3xl mx-auto px-4 space-y-3">
//           <p className="text-sm text-white/70">Role not found.</p>
//           <Link href="/careers" className="text-algoarnAqua text-sm">
//             ← Back to careers
//           </Link>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="pt-20 pb-24">
//       <div className="max-w-4xl mx-auto px-4 space-y-10">
//         <div className="space-y-3">
//           {/* <Link href="/careers" className="text-xs text-black">
//             ← Back to all openings
//           </Link> */}
//          <Link
//   href="/careers"
//   className="text-xs !text-black hover:!text-blue transition-colors"
// >
//   ← Back to all openings
// </Link>


//           <h1 className="text-3xl md:text-4xl font-display font-bold">
//             {job.title}
//           </h1>
//           <div className="flex flex-wrap gap-3 text-xs text-white">
//             <span className="px-3 py-1 rounded-full border border-white">
//               {job.location}
//             </span>
//             <span className="px-3 py-1 rounded-full border border-white">
//               {job.type}
//             </span>
//             <span className="px-3 py-1 rounded-full border border-white">
//               {job.team}
//             </span>
//           </div>
//         </div>

//         <NeonCard className="p-6 md:p-8 space-y-6">
//           <p className="text-xl leading-7 max-w-3xl mx-auto text-white">{job.intro}</p>

//           <div className="grid gap-6 md:grid-cols-2">
//             <div className="space-y-3">
//               <h2 className="text-base md:text-lg font-semibold text-white">
//                 Responsibilities
//               </h2>
//               <ul className="space-y-2 text-sm text-white">
//                 {job.responsibilities.map((r) => (
//                   <li key={r}>• {r}</li>
//                 ))}
//               </ul>
//             </div>
//             <div className="space-y-3">
//               <h2 className="text-base md:text-lg font-semibold text-white">
//                 Requirements
//               </h2>
//               <ul className="space-y-2 text-sm text-white">
//                 {job.requirements.map((r) => (
//                   <li key={r}>• {r}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </NeonCard>

//         <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
//           <p className="text-sm text-white/60">
//             Even if you don&apos;t meet every single requirement, we&apos;d
//             still love to hear from you.
//           </p>
//           <Link href={`/careers/apply/${job.id}`}>
//             <Button className="px-8 py-3 text-sm md:text-base">
//               Apply for this role
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </main>
//   );
// }





"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { NeonCard } from "@/components/ui/neon-card";
import { Button } from "@/components/ui/button";
import { supabase, type Career } from "@/lib/supabase";

export default function JobDetailPage() {
  const params = useParams<{ id: string }>();
  const jobSlug = typeof params.id === "string" ? params.id : "";

  const [job, setJob] = useState<Career | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJob() {
      setLoading(true);

      const { data, error } = await supabase
        .from("careers")
        .select("*")
        .eq("job_id", jobSlug)
        .eq("published", true)
        .single();

      if (error) {
        console.error("Error fetching job:", error);
        setJob(null);
      } else {
        setJob(data);
      }

      setLoading(false);
    }

    if (jobSlug) fetchJob();
  }, [jobSlug]);

  if (loading) {
    return (
      <main className="pt-20 pb-24">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-center text-white/60">Loading role…</p>
        </div>
      </main>
    );
  }

  if (!job) {
    return (
      <main className="pt-20 pb-24">
        <div className="max-w-3xl mx-auto px-4 space-y-3">
          <p className="text-sm text-white/70">Role not found.</p>
          <Link href="/careers" className="text-algoarnAqua text-sm">
            ← Back to careers
          </Link>
        </div>
      </main>
    );
  }

  // Your table fields:
  // title, location, type, description, requirements[], tags[]
  // You currently show "team" and "responsibilities" too, but those don't exist in DB.
  // We'll render: description + requirements + tags.
  // If you want responsibilities/team later, add columns in Supabase.

  return (
    <main className="pt-20 pb-24">
      <div className="max-w-4xl mx-auto px-4 space-y-10">
        <div className="space-y-3">
          <Link
            href="/careers"
            className="text-xs !text-black hover:!text-blue transition-colors"
          >
            ← Back to all openings
          </Link>

          <h1 className="text-3xl md:text-4xl font-display font-bold">
            {job.title}
          </h1>

          <div className="flex flex-wrap gap-3 text-xs text-white">
            {job.location && (
              <span className="px-3 py-1 rounded-full border border-white">
                {job.location}
              </span>
            )}
            {job.type && (
              <span className="px-3 py-1 rounded-full border border-white">
                {job.type}
              </span>
            )}
          </div>

          {!!job.tags?.length && (
            <div className="flex flex-wrap gap-2 pt-1">
              {job.tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 rounded-full bg-algoarnAqua/10 border border-algoarnAqua/30 text-[11px] text-white"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        <NeonCard className="p-6 md:p-8 space-y-6">
          {!!job.description && (
            <p className="text-xl leading-7 max-w-3xl mx-auto text-white">
              {job.description}
            </p>
          )}

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <h2 className="text-base md:text-lg font-semibold text-white">
                Requirements
              </h2>

              {job.requirements?.length ? (
                <ul className="space-y-2 text-sm text-white">
                  {job.requirements.map((r: string) => (
                    <li key={r}>• {r}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-white/70">No requirements listed.</p>
              )}
            </div>

            <div className="space-y-3">
              <h2 className="text-base md:text-lg font-semibold text-white">
                skills
              </h2>

              {job.tags?.length ? (
                <ul className="space-y-2 text-sm text-white">
                  {job.tags.map((t: string) => (
                    <li key={t}>• {t}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-white/70">No tags.</p>
              )}
            </div>
          </div>
        </NeonCard>

        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p className="text-sm text-white/60">
            Even if you don&apos;t meet every single requirement, we&apos;d still
            love to hear from you.
          </p>

          {/* Apply uses job.job_id */}
          <Link href={`/careers/apply/${job.job_id}`}>
            <Button className="px-8 py-3 text-sm md:text-base">
              Apply for this role
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
