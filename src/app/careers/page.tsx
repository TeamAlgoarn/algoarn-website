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
const serviceParticles = Array.from({ length: 12 }, (_, i) => ({
  left: `${(i * 17) % 100}%`,
  top: `${(i * 37) % 100}%`,
  duration: 3 + (i % 3), // 3–5 seconds
  delay: (i % 4) * 0.4,  // 0, 0.4, 0.8, 1.2
}));
  return (
    <main className="pt-20 pb-24">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        {/* HERO */}
        {/* <section className="relative rounded-3xl border border-algoarnAqua/30 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-10 md:p-14 overflow-hidden">
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
        </section> */}
<section className="relative min-h-[60vh] flex justify-center overflow-hidden w-screen -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)] bg-gradient-to-br from-[#f8faff] via-[#f3f4ff] to-[#eef9ff] pt-20 -mt-[31px]" style={{marginTop:'-111px'}}>

  {/* Background Glows */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute top-1/4 -left-40 w-[900px] h-[900px] bg-algoarnAqua/20 blur-3xl rounded-full animate-pulse-slow" />
    <div className="absolute bottom-1/4 -right-40 w-[900px] h-[900px] bg-algoarnBlue/25 blur-3xl rounded-full animate-pulse-slow" />
  </div>

  {/* Floating Particles */}
  <div className="absolute inset-0 opacity-40 pointer-events-none">
    {serviceParticles.map((p, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-algoarnAqua rounded-full"
        style={{ left: p.left, top: p.top }}
        animate={{ y: [0, -30, 0], opacity: [0, 1, 0] }}
        transition={{
          duration: p.duration,
          delay: p.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center space-y-10"
  >
    {/* Badge */}
    {/* <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full 
      bg-algoarnAqua/10 border border-algoarnAqua/30 backdrop-blur-sm"> */}
      {/* <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-algoarnAqua/10 border border-algoarnAqua/30 backdrop-blur-sm"> */}

     
    {/* </div> */}

    {/* Heading */}
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black">
     
       Build AI actually ships to institutions.
                
             
    </h1>

    {/* Subheading */}
     <p className="text-xl leading-7 max-w-2xl mx-auto text-black">
              Join a compact, hands-on team working on SUCA, AI analytics, and
              custom AI solutions for universities, schools and businesses.
            </p>

    {/* CTAs */}
    
   <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 text-white" style={{ marginBottom: "78px" }}>

 {/* <Button
  asChild
  size="lg"
  className="px-10 py-4 text-base md:text-lg font-semibold bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-lg hover:from-indigo-600 hover:to-sky-600 transition-all"
  style={{ borderRadius: "9999px" }}
>
  <Link href="/contact?type=AI+Services " >Contact Us</Link>
</Button> */}



  
  {/* <Button
    asChild
    size="lg"
    className="px-10 py-4 text-base md:text-lg font-semibold
    bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-lg
    hover:from-indigo-600 hover:to-sky-600 transition-all"
    style={{ borderRadius: "9999px" }}
  >
    <Link href="#services" className="flex items-center gap-2">
      Explore Services
    </Link>
  </Button> */}

</div>


  </motion.div>
</section>
        {/* LIST OF OPENINGS */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold">
                Current Openings
              </h2>
              <p className="text-xl leading-7 max-w-2xl mx-auto text-black" style={{marginTop:"18px"}}>
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
                    <h3 className="text-xl leading-7 max-w-2xl mx-auto  font-semibold text-white">
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
