// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { NeonCard } from "@/components/ui/neon-card";
// import { Button } from "@/components/ui/button";

// type Job = {
//   id: string;
//   title: string;
//   location: string;
//   type: string;
//   team: string;
//   short: string;
//   tags: string[];
// };

// const jobs: Job[] = [
//   {
//     id: "ai-engineer",
//     title: "AI Engineer – Computer Vision & NLP",
//     location: "Bengaluru / Remote (Hybrid)",
//     type: "Full-time",
//     team: "Engineering",
//     short:
//       "Work on real-world AI pipelines across computer vision, OCR and generative models.",
//     tags: ["Python", "PyTorch", "Computer Vision", "LLMs"],
//   },
//   {
//     id: "fullstack-engineer",
//     title: "Full-Stack Engineer – Next.js + Node",
//     location: "Remote (India)",
//     type: "Full-time",
//     team: "Product Engineering",
//     short:
//       "Own end-to-end web platforms, dashboards and integrations for SUCA and AI products.",
//     tags: ["Next.js", "TypeScript", "APIs", "PostgreSQL"],
//   },
//   {
//     id: "data-analyst",
//     title: "Data Analyst – EdTech / Academic Analytics",
//     location: "Bengaluru / Remote",
//     type: "Full-time",
//     team: "Data & Insights",
//     short:
//       "Help institutions make sense of academic and operational data through reporting & insight.",
//     tags: ["SQL", "Dashboards", "Education Data"],
//   },
// ];

// export default function CareersPage() {
//   return (
//     <main className="pt-20 pb-24">
//       <div className="max-w-6xl mx-auto px-4 space-y-16">
//         {/* HERO */}
//         <section className="relative rounded-3xl border border-algoarnAqua/30 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-10 md:p-14 overflow-hidden">
//           <div className="pointer-events-none absolute inset-0">
//             <div className="absolute -top-24 left-0 w-80 h-80 bg-algoarnAqua/20 blur-3xl rounded-full" />
//             <div className="absolute bottom-0 right-10 w-96 h-96 bg-algoarnBlue/20 blur-3xl rounded-full" />
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="relative z-10 space-y-6 text-center md:text-left max-w-3xl"
//           >
//             <p className="text-xs uppercase tracking-[0.25em] text-algoarnAqua/80">
//               Careers at Algoarn
//             </p>
//             <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
//               Build AI that{" "}
//               <span className="text-algoarnAqua">
//                 actually ships to institutions.
//               </span>
//             </h1>
//             <p className="text-sm md:text-base text-white/70 max-w-xl">
//               Join a compact, hands-on team working on SUCA, AI analytics, and
//               custom AI solutions for universities, schools and businesses.
//             </p>
//           </motion.div>
//         </section>

//         {/* LIST OF OPENINGS */}
//         <section className="space-y-8">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
//             <div>
//               <h2 className="text-2xl md:text-3xl font-bold">
//                 Current Openings
//               </h2>
//               <p className="text-sm text-white/60">
//                 Don&apos;t see a perfect fit? You can still reach out via the
//                 contact page.
//               </p>
//             </div>
//           </div>

//           <div className="grid gap-6">
//             {jobs.map((job, index) => (
//               <motion.div
//                 key={job.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ duration: 0.4, delay: index * 0.05 }}
//               >
//                 <NeonCard className="p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
//                   <div className="space-y-2">
//                     <h3 className="text-lg md:text-xl font-semibold">
//                       {job.title}
//                     </h3>
//                     <div className="flex flex-wrap gap-3 text-xs text-white/60">
//                       <span className="px-3 py-1 rounded-full border border-white/15">
//                         {job.location}
//                       </span>
//                       <span className="px-3 py-1 rounded-full border border-white/15">
//                         {job.type}
//                       </span>
//                       <span className="px-3 py-1 rounded-full border border-white/15">
//                         {job.team}
//                       </span>
//                     </div>
//                     <p className="text-sm text-white/70 max-w-xl">
//                       {job.short}
//                     </p>
//                     <div className="flex flex-wrap gap-1.5 text-[11px] text-algoarnAqua/90">
//                       {job.tags.map((tag) => (
//                         <span
//                           key={tag}
//                           className="px-2 py-1 rounded-full bg-algoarnAqua/10 border border-algoarnAqua/30"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="flex flex-col gap-3 md:items-end">
//                     <Link href={`/careers/${job.id}`}>
//                       <Button className="px-6 py-2 text-sm md:text-base">
//                         View role &amp; apply
//                       </Button>
//                     </Link>
//                   </div>
//                 </NeonCard>
//               </motion.div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { NeonCard } from "@/components/ui/neon-card";
import { Button } from "@/components/ui/button";
import { supabase, type Career } from "@/lib/supabase";

export default function CareersPage() {
  const [jobs, setJobs] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      const { data, error } = await supabase
        .from('careers')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching jobs:', error);
      } else {
        setJobs(data || []);
      }
      setLoading(false);
    }

    fetchJobs();
  }, []);

  if (loading) {
    return (
      <main className="pt-20 pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-white/60">Loading positions...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20 pb-24">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        {/* HERO */}
        <section className="relative rounded-3xl border border-algoarnAqua/30 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-10 md:p-14 overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-0 w-80 h-80 bg-algoarnAqua/20 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-10 w-96 h-96 bg-algoarnBlue/20 blur-3xl rounded-full" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 space-y-6 text-center md:text-left max-w-3xl"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-white">
              Careers at Algoarn
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-display font-bold">
              Build AI that{" "}
              <span className="text-algoarnAqua">
                actually ships to institutions.
              </span>
            </h1>
            <p className="text-sm md:text-base text-white/90 max-w-xl">
              Join a compact, hands-on team working on SUCA, AI analytics, and
              custom AI solutions for universities, schools and businesses.
            </p>
          </motion.div>
        </section>

        {/* LIST OF OPENINGS */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Current Openings
              </h2>
              <p className="text-sm text-white/90">
                Don&apos;t see a perfect fit? You can still reach out via the
                contact page.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <NeonCard className="p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-xs text-white">
                      <span className="px-3 py-1 rounded-full border border-white">
                        {job.location}
                      </span>
                      <span className="px-3 py-1 rounded-full border border-white">
                        {job.type}
                      </span>
                      <span className="px-3 py-1 rounded-full border border-white">
                        {job.team}
                      </span>
                    </div>
                    <p className="text-sm text-white max-w-xl">
                      {job.short}
                    </p>
                    <div className="flex flex-wrap gap-1.5 text-[11px] text-white">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded-full bg-algoarnAqua/10 border border-algoarnAqua/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 md:items-end">
                    <Link href={`/careers/${job.job_id}`}>
                      <Button className="px-6 py-2 text-sm md:text-base">
                        View role &amp; apply
                      </Button>
                    </Link>
                  </div>
                </NeonCard>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
