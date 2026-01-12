 
// // "use client";

// // import type { ReactNode } from "react";
// // import { motion } from "framer-motion";
// // import Link from "next/link";
// // import { Button } from "@/components/ui/button";
// // import { NeonCard } from "@/components/ui/neon-card";

// // // Deterministic particles for consistency
// // const floatingParticles = Array.from({ length: 20 }, (_, i) => ({
// //   left: `${(i * 7) % 100}%`,
// //   top: `${(i * 13) % 100}%`,
// //   delay: `${(i * 0.35) % 5}s`,
// //   duration: `${10 + (i % 6)}s`,
// // }));

// // // Animation helpers
// // const SectionReveal = ({
// //   children,
// //   className = "",
// // }: {
// //   children: ReactNode;
// //   className?: string;
// // }) => (
// //   <motion.section
// //     className={className}
// //     initial={{ opacity: 0, y: 60 }}
// //     whileInView={{ opacity: 1, y: 0 }}
// //     viewport={{ once: true, amount: 0.25 }}
// //     transition={{ duration: 0.7, ease: "easeOut" }}
// //   >
// //     {children}
// //   </motion.section>
// // );

// // const FadeInUp = ({
// //   children,
// //   delay = 0,
// //   className = "",
// // }: {
// //   children: ReactNode;
// //   delay?: number;
// //   className?: string;
// // }) => (
// //   <motion.div
// //     className={className}
// //     initial={{ opacity: 0, y: 40 }}
// //     whileInView={{ opacity: 1, y: 0 }}
// //     viewport={{ once: true, amount: 0.3 }}
// //     transition={{ duration: 0.6, delay, ease: "easeOut" }}
// //   >
// //     {children}
// //   </motion.div>
// // );
// // const SoftCard = ({
// //   children,
// //   className = "",
// // }: {
// //   children: ReactNode;
// //   className?: string;
// // }) => (
// //   <div
// //     className={[
// //       "rounded-[28px] border border-slate-200/70 bg-white/70 backdrop-blur-md",
// //       "shadow-[0_30px_80px_rgba(2,6,23,0.08)]",
// //       "transition-all duration-500 hover:shadow-[0_45px_110px_rgba(2,6,23,0.12)]",
// //       className,
// //     ].join(" ")}
// //   >
// //     {children}
// //   </div>
// // );

// // export default function AboutPage() {
// //   return (
// //     <div className="space-y-20 md:space-y-24">
// //       {/* HERO SECTION - FULL WIDTH */}
// //       {/* <SectionReveal className="relative min-h-[60vh] flex items-center justify-center overflow-x-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-b border-algoarnAqua/30 w-screen -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)] -mt-11"> */}
// //      {/* <SectionReveal className="relative min-h-[calc(60vh)] flex justify-center overflow-hidden w-screen 
// //   -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)]
// //   bg-gradient-to-br from-[#f8faff] via-[#f3f4ff] to-[#eef9ff]
// //   pt-20 -mt-[31px]"> */}
 
// // <SectionReveal className="relative min-h-[60vh] flex justify-center overflow-hidden w-screen -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)] bg-gradient-to-br from-[#f8faff] via-[#f3f4ff] to-[#eef9ff] pt-20 -mt-[79px]">

// //   {/* Background glows */}
// //   <div className="absolute inset-0 pointer-events-none overflow-hidden">
// //     <div className="absolute top-1/4 -left-32 w-[800px] h-[800px] bg-algoarnAqua/20 blur-3xl rounded-full animate-pulse-slow" />
// //     <div className="absolute bottom-1/4 -right-32 w-[800px] h-[800px] bg-algoarnBlue/25 blur-3xl rounded-full animate-pulse-slow" />
// //   </div>

// //   {/* Particles */}
// //   <div className="absolute inset-0 opacity-40 pointer-events-none">
// //     {floatingParticles.map((p, i) => (
// //       <div
// //         key={i}
// //         className="absolute w-1 h-1 bg-algoarnAqua rounded-full animate-float"
// //         style={{
// //           left: p.left,
// //           top: p.top,
// //           animationDelay: p.delay,
// //           animationDuration: p.duration,
// //         }}
// //       />
// //     ))}
// //   </div>

// //   {/* Content */}
// //   <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 md:py-20 text-center space-y-8">
// //     <FadeInUp delay={0.1}>
// //       <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-algoarnAqua/10 border border-algoarnAqua/30 backdrop-blur-sm">
// //         <div className="w-2 h-2 bg-algoarnAqua rounded-full animate-ping" />
// //         <span className="text-xs md:text-sm font-medium text-indigo-500 tracking-[0.2em] uppercase">
// //           About Us
// //         </span>
// //       </div>
// //     </FadeInUp>

// //     <FadeInUp delay={0.2}>
// //       <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black">
// //         Engineering Intelligence for the{" "}
// //         <span className="text-algoarnAqua">Real World</span>
// //       </h1>
// //     </FadeInUp>

// //     <FadeInUp delay={0.3}>
// //       <p className="text-xl leading-7 max-w-3xl mx-auto text-black">
// //         Algoarn is an AI innovation company focused on building intelligent
// //         products that transform how people learn, work, shop, and make
// //         decisions.
// //       </p>
// //     </FadeInUp>
// //   </div>
// // </SectionReveal>
// // {/* WHO WE ARE */}
// //         <SectionReveal className="px-6">
// //           <div className="max-w-6xl mx-auto space-y-10">
// //             <FadeInUp className="text-center space-y-4">
// //               <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
// //                 Who We Are
// //               </h2>
// //               {/* <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 mx-auto rounded-full" /> */}
// //             </FadeInUp>

// //            <FadeInUp delay={0.2}>
// //   <div className="max-w-7xl mx-auto px-6">
// //     {/* Neon glow wrapper (same pattern as Why Algoarn cards) */}
// //     <div className="relative group rounded-[46px]">
// //       {/* glow behind */}
// //       <div className="absolute -inset-6 rounded-[56px] bg-gradient-to-r from-sky-400/20 via-indigo-500/15 to-fuchsia-500/20 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

// //       {/* outer shell (gives depth + border) */}
// //       <div className="relative rounded-[46px] bg-gradient-to-b from-white/10 to-white/0 p-[1.5px] shadow-[0_0_70px_rgba(56,189,248,0.18)] group-hover:shadow-[0_0_100px_rgba(56,189,248,0.28)] transition-all duration-500">
// //         {/* inner card */}
// //         <div className="rounded-[44px] bg-gradient-to-br from-[#0b1c2d] via-[#0f2238] to-[#071423] border border-white/10 px-10 py-12 md:px-16 md:py-16 lg:px-20 lg:py-20 text-center">
// //           <div className="max-w-4xl mx-auto space-y-8">
// //             <p className="text-white text-xl leading-7 max-w-3xl mx-auto ">
// //               Algoarn is an AI innovation company focused on building intelligent
// //               products that transform how people learn, work, shop, and make
// //               decisions.
// //             </p>

// //             <p className="text-white text-xl leading-7 max-w-3xl mx-auto ">
// //               We combine deep research, engineering precision, and creative
// //               problem-solving to build systems powered by computer vision,
// //               generative AI, and predictive analytics.
// //             </p>

// //             <div className="pt-2">
// //             <p className="text-white font-semibold text-xl leading-7 max-w-3xl mx-auto ">
// //               Our goal is simple :
// //             </p>

// //             <p className="mt-3 text-xl leading-7 max-w-3xl mx-auto text-white font-bold">
// //               Create AI that is practical, powerful, and deeply human-centric.
// //             </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   </div>
// // </FadeInUp>

// //           </div>
// //         </SectionReveal>
// //       {/* OUR STORY */}
// //       {/*  */}
// // {/* OUR STORY (Neon style like Who We Are) */}
// // <SectionReveal className="px-6">
// //   <div className="max-w-6xl mx-auto space-y-10">
// //     <FadeInUp className="text-center space-y-4">
// //       <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
// //         Our Story
// //       </h2>
// //     </FadeInUp>

// //     <FadeInUp delay={0.15}>
// //       <div className="max-w-7xl mx-auto">
// //         {/* Neon glow wrapper */}
// //         <div className="relative group rounded-[46px]">
// //           {/* glow behind */}
// //           <div className="absolute -inset-6 rounded-[56px] bg-gradient-to-r from-sky-400/20 via-indigo-500/15 to-fuchsia-500/20 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

// //           {/* outer shell */}
// //           <div className="relative rounded-[46px] bg-gradient-to-b from-white/10 to-white/0 p-[1.5px] shadow-[0_0_70px_rgba(56,189,248,0.18)] group-hover:shadow-[0_0_100px_rgba(56,189,248,0.28)] transition-all duration-500">
// //             {/* inner card */}
// //             <div className="rounded-[44px] bg-gradient-to-br from-[#0b1c2d] via-[#0f2238] to-[#071423] border border-white/10 px-8 py-10 md:px-12 md:py-12 lg:px-14 lg:py-14">
// //               <div className="grid md:grid-cols-12 gap-8 items-start">
// //                 {/* left neon line */}
// //                 {/* <div className="md:col-span-1 hidden md:flex justify-center">
// //                   <div className="w-[3px] h-full min-h-[260px] rounded-full bg-gradient-to-b from-algoarnAqua via-indigo-500 to-algoarnBlue shadow-[0_0_20px_rgba(56,189,248,0.35)]" />
// //                 </div> */}

// //                 {/* content */}
// //                 <div className="md:col-span-11 space-y-6 text-white text-xl leading-7 max-w-3xl mx-auto  md:text-lg">
// //                   <p >
// //                     Algoarn was born from the belief that technology should empower
// //                     people, not overwhelm them.
// //                   </p>

// //                   <p>
// //                     With strong foundations in digital engineering, computer vision
// //                     research, and product development, Algoarn began as a pursuit to
// //                     solve real problems using advanced AI.
// //                   </p>

// //                   <p className="font-semibold text-white">
// //                     From education intelligence to virtual retail experiences to
// //                     enterprise automation, our journey has been defined by one
// //                     principle:
// //                     <span className="block mt-2 text-algoarnAqua font-semibold">
// //                       AI should make life smarter, easier, and more meaningful.
// //                     </span>
// //                   </p>

// //                   <p>
// //                     Today, Algoarn is evolving into a multi-product AI company with
// //                     global ambition, building solutions that bridge the gap between
// //                     imagination and intelligent engineering.
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </FadeInUp>
// //   </div>
// // </SectionReveal>

// //       {/* MISSION & VISION - FULL WIDTH */}
// //       {/* MISSION & VISION (Match Our Values card style) */}
// // <SectionReveal className="space-y-12">
// //   <FadeInUp className="text-center space-y-4">
// //     <h2 className="text-4xl md:text-5xl font-bold">Our Mission & Vision</h2>
// //     <div className="w-24 h-1 bg-gradient-to-r from-algoarnAqua to-algoarnBlue mx-auto rounded-full" />
// //   </FadeInUp>

// //   <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto px-6 items-stretch">
// //   {/* Mission */}
// //   <FadeInUp>
// //     <div className="relative group rounded-[32px] bg-gradient-to-br from-[#0b1c2d] via-[#0f2238] to-[#0b1c2d] p-[1px] shadow-[0_0_45px_rgba(56,189,248,0.18)] hover:shadow-[0_0_70px_rgba(56,189,248,0.35)] transition-all duration-500 h-full">
// //       {/* <div className="rounded-[31px] bg-gradient-to-br from-[#0b1c2d] to-[#071423] p-8 md:p-10 h-full flex flex-col"> */}
// //         {/* <div className="text-white/90 text-sm font-semibold mb-4">Our Story</div> */}

// //         <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/[0.03] flex-1 flex flex-col">
// //           <div className="bg-white/[0.05] border-b border-white/10 py-4 text-center">
// //             <h3 className="text-lg md:text-xl font-semibold text-white">Our Mission</h3>
// //           </div>

// //           {/* IMPORTANT: flex-col + h-full */}
// //           <div className="p-6 md:p-7 space-y-5 text-white leading-relaxed flex-1 flex flex-col">
// //             <p className="text-xl leading-7 max-w-3xl mx-auto text-base md:text-lg">
// //               To build intelligent, practical, and human-centric AI systems
// //               that transform how the world learns, works, and experiences
// //               technology.
// //             </p>

// //             <ul className="space-y-3">
// //               {[
// //                 "Creating AI products that solve real-world problems across industries.",
// //                 "Advancing computer vision, generative AI, and predictive analytics.",
// //                 "Empowering organizations with clarity, efficiency, and automation.",
// //                 "Making cutting-edge AI accessible, scalable, and dependable.",
// //                 "Cultivating a culture of research and innovation.",
// //               ].map((item) => (
// //                 <li key={item} className="flex items-start gap-3">
// //                   <span className="mt-2 h-1.5 w-1.5 rounded-full bg-algoarnAqua shrink-0" />
// //                   <span className="text-base md:text-lg">{item}</span>
// //                 </li>
// //               ))}
// //             </ul>

// //             {/* Push this to bottom */}
// //             <div className="mt-auto pt-5 border-t border-white/10 text-white">
// //               Our mission is not just to build software,
// //               <br />
// //               <span className="text-algoarnAqua font-semibold">
// //                 but to build intelligence that elevates people.
// //               </span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     {/* </div> */}
// //   </FadeInUp>

// //   {/* Vision */}
// //   <FadeInUp delay={0.15}>
// //     <div className="relative group rounded-[32px] bg-gradient-to-br from-[#0b1c2d] via-[#0f2238] to-[#0b1c2d] p-[1px] shadow-[0_0_45px_rgba(56,189,248,0.18)] hover:shadow-[0_0_70px_rgba(56,189,248,0.35)] transition-all duration-500 h-full">
// //       {/* <div className="rounded-[31px] bg-gradient-to-br from-[#0b1c2d] to-[#071423] p-8 md:p-10 h-full flex flex-col"> */}
// //         {/* <div className="text-white/90 text-sm font-semibold mb-4">Our Vision</div> */}

// //         {/* <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/[0.03] flex-1 flex flex-col"> */}
// //           <div className="bg-white/[0.05] border-b border-white/10 py-4 text-center">
// //             <h3 className="text-lg md:text-xl font-semibold text-white">Our Vision</h3>
// //           </div>

// //           {/* IMPORTANT: flex-col + h-full */}
// //           <div className="p-6 md:p-7 space-y-5 text-white leading-relaxed flex-1 flex flex-col">
// //             <p className=" text-xl leading-7 max-w-3xl mx-auto text-white text-base md:text-lg">
// //               To become a global leader in AI innovation by shaping the future
// //               through intelligent products that enhance human potential and
// //               redefine digital experiences.
// //             </p>

// //             <ul className="space-y-3">
// //               {[
// //                 "AI becomes a trusted partner for learning, creativity, and decision-making.",
// //                 "Retail experiences become immersive and personalized.",
// //                 "Institutions and businesses operate with predictive clarity.",
// //                 "India becomes a global hub for AI excellence with Algoarn leading the movement.",
// //               ].map((item) => (
// //                 <li key={item} className="flex items-start gap-3">
// //                   <span className="mt-2 h-1.5 w-1.5 rounded-full bg-algoarnAqua shrink-0" />
// //                   <span className="text-base md:text-lg">{item}</span>
// //                 </li>
// //               ))}
// //             </ul>

// //             {/* Push this to bottom */}
// //             <div className="mt-auto pt-5 border-t border-white/10 text-white">
// //               We are building a future where technology amplifies talent and
// //               unlocks new possibilities.
// //             </div>
// //           </div>
// //         </div>
// //       {/* </div> */}
// //     {/* </div> */}
// //   </FadeInUp>
// // </div>
// // </SectionReveal>

// //       {/* FOUNDER SECTION */}
// //       <SectionReveal className="space-y-12">
// //         <FadeInUp className="text-center space-y-4">
// //           <h2 className="text-4xl md:text-5xl font-bold">Our Founder</h2>
// //           <p className="text-xl leading-7 max-w-3xl mx-auto text-black">
// //             Built with vision, driven by precision
// //           </p>
// //         </FadeInUp>

// //         <FadeInUp delay={0.2}>
// //           <div className="max-w-4xl mx-auto">
// //             <NeonCard className="p-10 md:p-14 group hover:scale-[1.02] transition-all duration-500">
// //               <div className="space-y-8">
// //                 <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
// //                   <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-algoarnAqua to-algoarnBlue flex items-center justify-center text-4xl">
// //                     👤
// //                   </div>

// //                   <div className="flex-1 space-y-3 text-center md:text-left">
// //                     <div>
// //                       <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-algoarnAqua transition-colors">
// //                         Prajwal Gaddigoudar
// //                       </h3>
// //                       <p className="text-white/90 text-lg font-semibold">
// //                         Founder — Algoarn AI Solutions Pvt Ltd
// //                       </p>
// //                       <p className="text-xl leading-7 max-w-3xl mx-auto text-white  text-base md:text-lg">
// //                         MSc Digital Engineering (Germany), Computer Vision Specialist
// //                       </p>
// //                     </div>

// //                     <p className="text-xl leading-7 max-w-3xl mx-auto text-white pt-2">
// //                       A passionate builder focused on creating meaningful,
// //                       precise and affordable AI products and pushing the
// //                       boundaries of what intelligent systems can do.
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </NeonCard>
// //           </div>
// //         </FadeInUp>
// //       </SectionReveal>

// //       {/* COMPANY VALUES */}
// //       <SectionReveal className="space-y-12">
// //         <FadeInUp className="text-center space-y-4">
// //           <h2 className="text-4xl md:text-5xl font-bold">Our Values</h2>
// //           <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
// //             The principles that guide everything we build
// //           </p>
// //         </FadeInUp>

// //         {/* <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
// //           {[
// //             { icon: "🚀", title: "Innovation", desc: "We push boundaries to create what’s next." },
// //             { icon: "🧭", title: "Integrity", desc: "We build trust through honesty and responsibility." },
// //             { icon: "🎯", title: "Impact-driven Engineering", desc: "We focus on outcomes that matter in the real world." },
// //             { icon: "🔬", title: "Research Excellence", desc: "We turn deep research into usable intelligence." },
// //             { icon: "🧑‍🤝‍🧑", title: "Human-centric Design", desc: "We build for people first—always." },
// //             { icon: "📚", title: "Continuous Learning", desc: "We evolve fast, learn faster, and share knowledge." },
// //             { icon: "🧠", title: "Future-first Thinking", desc: "We build products that stand the test of time." },
// //           ].map((v, idx) => (
// //             <FadeInUp key={v.title} delay={0.08 * idx}>
// //               <NeonCard className="p-8 group hover:scale-[1.03] transition-all duration-500 h-full">
// //                 <div className="space-y-4 text-center">
// //                   <div className="inline-flex p-3 rounded-2xl bg-white/10 border border-white/10 mx-auto">
// //                     <span className="text-3xl">{v.icon}</span>
// //                   </div>

// //                   <h3 className="text-xl font-bold text-white group-hover:text-algoarnAqua transition-colors">
// //                     {v.title}
// //                   </h3>

// //                   <p className="text-sm md:text-base text-white/70 leading-relaxed">
// //                     {v.desc}
// //                   </p>
// //                 </div> */}
// //              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
// //   {[
// //     { icon: "🚀", title: "Innovation", desc: "We push boundaries to create what’s next." },
// //     { icon: "🧭", title: "Integrity", desc: "We build trust through honesty and responsibility." },
// //     { icon: "🎯", title: "Impact-driven Engineering", desc: "We focus on outcomes that matter in the real world." },
// //     { icon: "🔬", title: "Research Excellence", desc: "We turn deep research into usable intelligence." },
// //     { icon: "🧑‍🤝‍🧑", title: "Human-centric Design", desc: "We build for people first—always." },
// //     { icon: "📚", title: "Continuous Learning", desc: "We evolve fast, learn faster, and share knowledge." },
// //     { icon: "🧠", title: "Future-first Thinking", desc: "We build products that stand the test of time." },
// //   ].map((v, idx, arr) => {
// //     const isLast = idx === arr.length - 1;

// //     return (
// //       <FadeInUp key={v.title} delay={0.08 * idx} className={isLast ? "md:col-span-2 lg:col-span-1 lg:col-start-2 flex justify-center" : ""}>
// //         <NeonCard className="p-8 group hover:scale-[1.03] transition-all duration-500 w-full max-w-[420px]">
// //           <div className="space-y-4 text-center">
// //             <div className="inline-flex p-3 rounded-2xl bg-white/10 border border-white/10 mx-auto">
// //               <span className="text-3xl">{v.icon}</span>
// //             </div>

// //             <h3 className="text-xl font-bold text-white group-hover:text-algoarnAqua transition-colors">
// //               {v.title}
// //             </h3>

// //             <p className="text-sm md:text-base text-white/70 leading-relaxed">
// //               {v.desc}
// //             </p>
// //           </div>
// //         </NeonCard>
// //       </FadeInUp>
// //     );
// //   })}
// // </div>


// //       </SectionReveal>

// //       {/* ROAD AHEAD */}
// //       <SectionReveal className="space-y-12"  >
// //         <FadeInUp className="text-center space-y-4" >
// //           <h2 className="text-4xl md:text-5xl font-bold">The Road Ahead</h2>
// //           <p className="text-lg md:text-xl text-xl leading-7 max-w-3xl mx-auto text-black">
// //             Algoarn is building toward a future where AI enhances every touchpoint
// //             of life — from learning and retail to business and creativity.
// //           </p>
// //         </FadeInUp>

// //         <FadeInUp delay={0.15}>
// //           <div className="max-w-4xl mx-auto" style={{marginTop:'-17px'}}>
// //             <NeonCard className="p-10 md:p-12">
// //               <div className="space-y-6 text-lg text-white text-xl leading-7 max-w-3xl mx-auto ">
// //                 <p>
// //                   With SUCA ready for institutions, VTR soon entering the market,
// //                   and new products in development, we’re just getting started.
// //                 </p>
// //                 <p className="text-white font-semibold text-xl" style={{marginTop:'-21px'}}>
// //   The future is intelligent.
// //   <br />
// //   And we’re building it — one breakthrough at a time.
// // </p>
// // </div>
// //             </NeonCard>
// //           </div>
// //         </FadeInUp>
// //       </SectionReveal>

// //       {/* FINAL CTA */}
// //       <SectionReveal className="relative">
// //         <div className="absolute inset-0 bg-gradient-to-r from-algoarnAqua/10 via-purple-500/10 to-algoarnBlue/10 rounded-3xl blur-3xl opacity-40" />

// //         <NeonCard className="p-10 md:p-16 relative bg-gradient-to-br from-slate-800/80 to-slate-900/90 border-algoarnAqua/50 backdrop-blur-sm text-center">
// //           <FadeInUp className="max-w-4xl mx-auto space-y-8">
// //             <h2 className="text-3xl md:text-5xl font-bold text-white">
// //               Let’s Build the  Future Together
             
// //             </h2>

// //             <p className="text-lg md:text-xl text-white text-xl leading-7 max-w-3xl mx-auto text-black">
// //               Whether you’re an institution, a business, or a brand exploring AI
// //               transformation, Algoarn is ready to collaborate.
// //             </p>

// //             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
// //               <Link href="/contact" className="group">
// //                 <Button
// //                   size="lg"
// //                   className="px-10 py-6 text-base md:text-lg font-semibold bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90 transform hover:scale-105 transition-all shadow-2xl shadow-algoarnAqua/30"
// //                   style={{ borderRadius: "2.5rem", width: "104%" }}
// //                 >
// //                   <span className="flex items-center gap-2">
// //                     Work With Us
// //                     {/* <span className="group-hover:translate-x-1 transition-transform">
// //                       →
// //                     </span> */}
// //                   </span>
// //                 </Button>
// //               </Link>

// //               <Link href="/products" className="group">
// //                 {/* <Button
// //                   size="lg"
// //                   variant="outline"
// //                   className="px-10 py-6 text-base md:text-lg font-semibold border-2 border-algoarnAqua/50 hover:bg-algoarnAqua/10 transform hover:scale-105 transition-all"
// //                   style={{ borderRadius: "2.5rem", width: "104%" }}
// //                 >
// //                   Explore Our AI Products
// //                 </Button> */}
// //                 <Button
// //                   size="lg"
// //                   className="px-10 py-6 text-base md:text-lg font-semibold bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90 transform hover:scale-105 transition-all shadow-2xl shadow-algoarnAqua/30"
// //                   style={{ borderRadius: "2.5rem", width: "104%" }}
// //                 >
// //                   <span className="flex items-center gap-2">
                  
// //                   Explore Our AI Products
// //                     {/* <span className="group-hover:translate-x-1 transition-transform">
// //                       →
// //                     </span> */}
// //                   </span>
// //                 </Button>
// //               </Link>
// //             </div>
// //           </FadeInUp>
// //         </NeonCard>
// //       </SectionReveal>
// //     </div>
// //   );
// // }





// // // "use client";
 
// // // import type { ReactNode } from "react";
// // // import { motion } from "framer-motion";
// // // import Link from "next/link";
// // // import { Button } from "@/components/ui/button";
// // // import { NeonCard } from "@/components/ui/neon-card";
 
// // // // Deterministic particles for consistency
// // // const floatingParticles = Array.from({ length: 20 }, (_, i) => ({
// // //   left: `${(i * 7) % 100}%`,
// // //   top: `${(i * 13) % 100}%`,
// // //   delay: `${(i * 0.35) % 5}s`,
// // //   duration: `${10 + (i % 6)}s`,
// // // }));
 
// // // // Animation helpers
// // // const SectionReveal = ({
// // //   children,
// // //   className = "",
// // // }: {
// // //   children: ReactNode;
// // //   className?: string;
// // // }) => (
// // //   <motion.section
// // //     className={className}
// // //     initial={{ opacity: 0, y: 60 }}
// // //     whileInView={{ opacity: 1, y: 0 }}
// // //     viewport={{ once: true, amount: 0.25 }}
// // //     transition={{ duration: 0.7, ease: "easeOut" }}
// // //   >
// // //     {children}
// // //   </motion.section>
// // // );
 
// // // const FadeInUp = ({
// // //   children,
// // //   delay = 0,
// // //   className = "",
// // // }: {
// // //   children: ReactNode;
// // //   delay?: number;
// // //   className?: string;
// // // }) => (
// // //   <motion.div
// // //     className={className}
// // //     initial={{ opacity: 0, y: 40 }}
// // //     whileInView={{ opacity: 1, y: 0 }}
// // //     viewport={{ once: true, amount: 0.3 }}
// // //     transition={{ duration: 0.6, delay, ease: "easeOut" }}
// // //   >
// // //     {children}
// // //   </motion.div>
// // // );
 
// // // export default function AboutPage() {
// // //   return (
// // //     <div className="space-y-20 md:space-y-24">
// // //       {/* HERO SECTION - FULL WIDTH */}
// // //       <SectionReveal className="relative min-h-[60vh] flex items-center justify-center overflow-x-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-b border-algoarnAqua/30 w-screen -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)] -mt-11">
// // //         {/* Background glows */}
// // //         <div className="absolute inset-0 pointer-events-none overflow-hidden">
// // //           <div className="absolute top-1/4 -left-32 w-[800px] h-[800px] bg-algoarnAqua/20 blur-3xl rounded-full animate-pulse-slow" />
// // //           <div className="absolute bottom-1/4 -right-32 w-[800px] h-[800px] bg-algoarnBlue/25 blur-3xl rounded-full animate-pulse-slow" />
// // //         </div>
 
// // //         {/* Particles */}
// // //         <div className="absolute inset-0 opacity-40 pointer-events-none">
// // //           {floatingParticles.map((p, i) => (
// // //             <div
// // //               key={i}
// // //               className="absolute w-1 h-1 bg-algoarnAqua rounded-full animate-float"
// // //               style={{
// // //                 left: p.left,
// // //                 top: p.top,
// // //                 animationDelay: p.delay,
// // //                 animationDuration: p.duration,
// // //               }}
// // //             />
// // //           ))}
// // //         </div>
 
// // //         {/* Content */}
// // //         <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 md:py-20 text-center space-y-8">
// // //           <FadeInUp delay={0.1}>
// // //             <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-algoarnAqua/10 border border-algoarnAqua/30 backdrop-blur-sm">
// // //               <div className="w-2 h-2 bg-algoarnAqua rounded-full animate-ping" />
// // //               <span className="text-xs md:text-sm font-medium text-algoarnAqua tracking-[0.2em] uppercase">
// // //                 About Algoarn
// // //               </span>
// // //             </div>
// // //           </FadeInUp>
 
// // //           <FadeInUp delay={0.2}>
// // //             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
// // //               Building the Future of{" "}
// // //               <span className="text-algoarnAqua">
// // //                 AI-Powered Intelligence
// // //               </span>
// // //             </h1>
// // //           </FadeInUp>
 
// // //           <FadeInUp delay={0.3}>
// // //             <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
// // //               We're on a mission to make advanced AI accessible, practical, and transformative for institutions and businesses across India and beyond.
// // //             </p>
// // //           </FadeInUp>
// // //         </div>
// // //       </SectionReveal>
 
// // //       {/* COMPANY STORY */}
// // //       <SectionReveal className="space-y-12">
// // //         <FadeInUp className="text-center space-y-4">
// // //           <h2 className="text-4xl md:text-5xl font-bold">Our Story</h2>
// // //           <div className="w-24 h-1 bg-gradient-to-r from-algoarnAqua to-algoarnBlue mx-auto rounded-full" />
// // //         </FadeInUp>
 
// // //         <FadeInUp delay={0.2}>
// // //           <div className="max-w-4xl mx-auto space-y-6 text-lg text-black/80 leading-relaxed">
// // //             <p>
// // //               Algoarn AI Solutions was founded with a clear vision: to bridge the gap between cutting-edge artificial intelligence research and real-world institutional needs. We recognized that while AI technology was advancing rapidly, educational institutions and businesses struggled to harness its full potential.
// // //             </p>
// // //             <p>
// // //               What started as a mission to transform academic analytics evolved into a comprehensive AI solutions provider. Our flagship product, SUCA (Smart University & College Analytics), emerged from deep collaboration with educational leaders who needed actionable insights, not just data dashboards.
// // //             </p>
// // //             <p>
// // //               Today, Algoarn stands at the intersection of innovation and practicality—building AI systems that respect privacy, deliver measurable outcomes, and scale with the organizations we serve.
// // //             </p>
// // //           </div>
// // //         </FadeInUp>
// // //       </SectionReveal>
 
// // //       {/* MISSION & VISION */}
// // //       <SectionReveal className="relative w-screen -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)] overflow-x-hidden bg-gradient-to-br from-slate-800/80 to-slate-900/90 border-y border-algoarnAqua/40">
// // //         {/* Background effects */}
// // //         <div className="absolute inset-0 pointer-events-none overflow-hidden">
// // //           <div className="absolute top-1/4 -left-40 w-[900px] h-[900px] bg-algoarnAqua/15 blur-3xl rounded-full animate-pulse-slow" />
// // //           <div className="absolute bottom-1/4 -right-40 w-[900px] h-[900px] bg-algoarnBlue/20 blur-3xl rounded-full animate-pulse-slow" />
// // //         </div>
 
// // //         <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 md:py-28">
// // //           <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
// // //             {/* Mission */}
// // //             <FadeInUp>
// // //               <NeonCard className="p-10 md:p-12 h-full group hover:scale-[1.02] transition-all duration-500">
// // //                 <div className="space-y-6">
// // //                   <div className="flex items-center gap-4">
// // //                     <div className="text-4xl">🎯</div>
// // //                     <h3 className="text-2xl md:text-3xl font-bold text-algoarnAqua">
// // //                       Our Mission
// // //                     </h3>
// // //                   </div>
// // //                   <p className="text-lg text-white/80 leading-relaxed">
// // //                     To democratize AI for educational institutions and enterprises by delivering privacy-first, outcome-driven intelligence systems that transform data into strategic advantage—making advanced analytics accessible, affordable, and actionable.
// // //                   </p>
// // //                 </div>
// // //               </NeonCard>
// // //             </FadeInUp>
 
// // //             {/* Vision */}
// // //             <FadeInUp delay={0.2}>
// // //               <NeonCard className="p-10 md:p-12 h-full group hover:scale-[1.02] transition-all duration-500">
// // //                 <div className="space-y-6">
// // //                   <div className="flex items-center gap-4">
// // //                     <div className="text-4xl">🔭</div>
// // //                     <h3 className="text-2xl md:text-3xl font-bold text-algoarnAqua">
// // //                       Our Vision
// // //                     </h3>
// // //                   </div>
// // //                   <p className="text-lg text-white/80 leading-relaxed">
// // //                     To become India's most trusted AI partner for educational and enterprise transformation—where every institution, regardless of size, can leverage world-class AI to unlock potential, predict outcomes, and drive meaningful impact.
// // //                   </p>
// // //                 </div>
// // //               </NeonCard>
// // //             </FadeInUp>
// // //           </div>
// // //         </div>
// // //       </SectionReveal>
 
// // //       {/* FOUNDER SECTION */}
// // //       <SectionReveal className="space-y-12">
// // //         <FadeInUp className="text-center space-y-4">
// // //           <h2 className="text-4xl md:text-5xl font-bold">Leadership</h2>
// // //           <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
// // //             Driven by innovation, guided by expertise
// // //           </p>
// // //         </FadeInUp>
 
// // //         <FadeInUp delay={0.2}>
// // //           <div className="max-w-4xl mx-auto">
// // //             <NeonCard className="p-10 md:p-14 group hover:scale-[1.02] transition-all duration-500">
// // //               <div className="space-y-8">
// // //                 <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
// // //                   {/* Placeholder for founder icon/avatar */}
// // //                   <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-algoarnAqua to-algoarnBlue flex items-center justify-center text-4xl">
// // //                     👤
// // //                   </div>
 
// // //                   <div className="flex-1 space-y-4 text-center md:text-left">
// // //                     <div>
// // //                       <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-algoarnAqua transition-colors">
// // //                         Founder & CEO
// // //                       </h3>
// // //                       <p className="text-algoarnAqua/80 text-lg">
// // //                         Algoarn AI Solutions
// // //                       </p>
// // //                     </div>
 
// // //                     <p className="text-lg text-white/80 leading-relaxed">
// // //                       With a background in artificial intelligence, machine learning, and educational technology, our founder envisioned a world where institutions could harness AI without compromising privacy or clarity. This vision birthed SUCA and continues to drive Algoarn's commitment to ethical, impactful AI.
// // //                     </p>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </NeonCard>
// // //           </div>
// // //         </FadeInUp>
// // //       </SectionReveal>
 
// // //       {/* COMPANY VALUES */}
// // //       <SectionReveal className="space-y-12">
// // //         <FadeInUp className="text-center space-y-4">
// // //           <h2 className="text-4xl md:text-5xl font-bold">Our Values</h2>
// // //           <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
// // //             The principles that guide everything we build
// // //           </p>
// // //         </FadeInUp>
 
// // //         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
// // //           {[
// // //             {
// // //               icon: "🔒",
// // //               title: "Privacy First",
// // //               description:
// // //                 "We build AI that respects data sovereignty. No public dashboards, no data leaks—your intelligence stays yours.",
// // //               gradient: "from-blue-500 to-cyan-500",
// // //             },
// // //             {
// // //               icon: "🎯",
// // //               title: "Outcome Driven",
// // //               description:
// // //                 "We measure success by the decisions you make better, not the features we ship. Impact over implementation.",
// // //               gradient: "from-green-500 to-emerald-500",
// // //             },
// // //             {
// // //               icon: "🚀",
// // //               title: "Innovation at Scale",
// // //               description:
// // //                 "From R&D to production-ready systems—we bring cutting-edge AI research into practical, scalable solutions.",
// // //               gradient: "from-purple-500 to-pink-500",
// // //             },
// // //             {
// // //               icon: "🤝",
// // //               title: "Partnership Mindset",
// // //               description:
// // //                 "Your success is our success. We collaborate closely, iterate quickly, and stay invested in your journey.",
// // //               gradient: "from-yellow-500 to-orange-500",
// // //             },
// // //             {
// // //               icon: "💡",
// // //               title: "Clarity Over Complexity",
// // //               description:
// // //                 "AI should simplify decisions, not complicate them. We deliver intelligence you can actually use and trust.",
// // //               gradient: "from-red-500 to-pink-500",
// // //             },
// // //             {
// // //               icon: "🌱",
// // //               title: "Continuous Evolution",
// // //               description:
// // //                 "The AI landscape changes rapidly. We stay ahead through research, experimentation, and adaptive development.",
// // //               gradient: "from-indigo-500 to-purple-500",
// // //             },
// // //           ].map((value, index) => (
// // //             <FadeInUp key={value.title} delay={0.1 * index}>
// // //               <NeonCard className="p-8 group hover:scale-[1.03] transition-all duration-500 h-full">
// // //                 <div className="space-y-4 text-center">
// // //                   <div
// // //                     className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${value.gradient} mx-auto`}
// // //                   >
// // //                     <span className="text-3xl">{value.icon}</span>
// // //                   </div>
 
// // //                   <h3 className="text-xl font-bold text-white group-hover:text-algoarnAqua transition-colors">
// // //                     {value.title}
// // //                   </h3>
 
// // //                   <p className="text-sm md:text-base text-white/70 leading-relaxed">
// // //                     {value.description}
// // //                   </p>
// // //                 </div>
// // //               </NeonCard>
// // //             </FadeInUp>
// // //           ))}
// // //         </div>
// // //       </SectionReveal>
 
// // //       {/* ROADMAP */}
// // //       <SectionReveal className="space-y-12">
// // //         <FadeInUp className="text-center space-y-4">
// // //           <h2 className="text-4xl md:text-5xl font-bold">Our Roadmap</h2>
// // //           <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
// // //             Building toward a future where AI empowers every decision
// // //           </p>
// // //         </FadeInUp>
 
// // //         <div className="max-w-4xl mx-auto space-y-6">
// // //           {[
// // //             {
// // //               phase: "Phase 1: Foundation",
// // //               status: "Completed",
// // //               items: [
// // //                 "SUCA platform launched for universities",
// // //                 "School and Pre-University editions deployed",
// // //                 "Core AI services established",
// // //                 "50+ institutional partnerships",
// // //               ],
// // //               color: "from-green-500 to-emerald-500",
// // //             },
// // //             {
// // //               phase: "Phase 2: Expansion",
// // //               status: "In Progress",
// // //               items: [
// // //                 "Advanced predictive models for academic risk",
// // //                 "AI project tracker integration",
// // //                 "Enhanced generative AI capabilities",
// // //                 "Multi-language support for SUCA",
// // //               ],
// // //               color: "from-algoarnAqua to-algoarnBlue",
// // //             },
// // //             {
// // //               phase: "Phase 3: Innovation",
// // //               status: "Coming Soon",
// // //               items: [
// // //                 "Cross-institutional benchmarking (privacy-preserved)",
// // //                 "Real-time intervention recommendation engine",
// // //                 "AI-powered career guidance integration",
// // //                 "Global expansion into international markets",
// // //               ],
// // //               color: "from-purple-500 to-pink-500",
// // //             },
// // //           ].map((phase, index) => (
// // //             <FadeInUp key={phase.phase} delay={0.1 * index}>
// // //               <NeonCard className="p-8 md:p-10 group hover:scale-[1.02] transition-all duration-500">
// // //                 <div className="space-y-6">
// // //                   <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
// // //                     <h3 className="text-2xl font-bold text-white group-hover:text-algoarnAqua transition-colors">
// // //                       {phase.phase}
// // //                     </h3>
// // //                     <span
// // //                       className={`inline-flex px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r ${phase.color} text-white w-fit`}
// // //                     >
// // //                       {phase.status}
// // //                     </span>
// // //                   </div>
 
// // //                   <ul className="space-y-3">
// // //                     {phase.items.map((item) => (
// // //                       <li
// // //                         key={item}
// // //                         className="flex items-start gap-3 text-white/80"
// // //                       >
// // //                         <div className="w-1.5 h-1.5 bg-algoarnAqua rounded-full mt-2 flex-shrink-0" />
// // //                         <span className="text-base md:text-lg">{item}</span>
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                 </div>
// // //               </NeonCard>
// // //             </FadeInUp>
// // //           ))}
// // //         </div>
// // //       </SectionReveal>
 
// // //       {/* PRIVACY-FIRST COMMITMENT */}
// // //       <SectionReveal className="relative w-screen -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)] overflow-x-hidden bg-gradient-to-br from-slate-800/80 to-slate-900/90 border-y border-algoarnAqua/40">
// // //         <div className="absolute inset-0 pointer-events-none overflow-hidden">
// // //           <div className="absolute top-1/4 -left-40 w-[900px] h-[900px] bg-algoarnAqua/15 blur-3xl rounded-full animate-pulse-slow" />
// // //           <div className="absolute bottom-1/4 -right-40 w-[900px] h-[900px] bg-algoarnBlue/20 blur-3xl rounded-full animate-pulse-slow" />
// // //         </div>
 
// // //         <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 md:py-28 text-center space-y-8">
// // //           <FadeInUp>
// // //             <div className="text-5xl md:text-6xl mb-6">🔐</div>
// // //             <h2 className="text-4xl md:text-5xl font-bold mb-6">
// // //               Our Privacy-First Commitment
// // //             </h2>
// // //             <div className="max-w-3xl mx-auto space-y-6 text-lg text-white/80 leading-relaxed">
// // //               <p>
// // //                 At Algoarn, privacy isn't an afterthought—it's the foundation of everything we build. We operate on a strict no-screenshot, no-video, no-dashboard-sharing policy because we understand that student data and institutional intelligence are sacred.
// // //               </p>
// // //               <p>
// // //                 Your data lives in your infrastructure. Your insights stay with your team. Your competitive advantage remains yours. We provide the intelligence layer without ever compromising confidentiality.
// // //               </p>
// // //               <p className="text-algoarnAqua font-semibold text-xl">
// // //                 Demo access is granted only through direct, secure requests—never through public showcases.
// // //               </p>
// // //             </div>
// // //           </FadeInUp>
// // //         </div>
// // //       </SectionReveal>
 
// // //       {/* FINAL CTA */}
// // //       <SectionReveal className="relative">
// // //         <div className="absolute inset-0 bg-gradient-to-r from-algoarnAqua/10 via-purple-500/10 to-algoarnBlue/10 rounded-3xl blur-3xl opacity-40" />
 
// // //         <NeonCard className="p-10 md:p-16 relative bg-gradient-to-br from-slate-800/80 to-slate-900/90 border-algoarnAqua/50 backdrop-blur-sm text-center">
// // //           <FadeInUp className="max-w-4xl mx-auto space-y-8">
// // //             <h2 className="text-3xl md:text-5xl font-bold">
// // //               Ready to Transform{" "}
// // //               <span className="bg-gradient-to-r from-algoarnAqua to-algoarnBlue bg-clip-text text-transparent">
// // //                 with Algoarn?
// // //               </span>
// // //             </h2>
 
// // //             <p className="text-lg md:text-xl text-white/80 leading-relaxed">
// // //               Whether you're exploring SUCA, need custom AI development, or want to discuss how AI can elevate your institution—we're here to help you move from data to decisions.
// // //             </p>
 
// // //             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
// // //               <Link href="/contact" className="group">
// // //                 <Button
// // //                   size="lg"
// // //                   className="px-10 py-6 text-base md:text-lg font-semibold bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90 transform hover:scale-105 transition-all shadow-2xl shadow-algoarnAqua/30"
// // //                   style={{ borderRadius: "2.5rem", width: "104%" }}
// // //                 >
// // //                   <span className="flex items-center gap-2">
// // //                     Get in Touch
// // //                     <span className="group-hover:translate-x-1 transition-transform">
// // //                       →
// // //                     </span>
// // //                   </span>
// // //                 </Button>
// // //               </Link>
 
// // //               <Link href="/suca" className="group">
// // //                 <Button
// // //                   size="lg"
// // //                   variant="outline"
// // //                   className="px-10 py-6 text-base md:text-lg font-semibold border-2 border-algoarnAqua/50 hover:bg-algoarnAqua/10 transform hover:scale-105 transition-all"
// // //                   style={{ borderRadius: "2.5rem", width: "104%" }}
// // //                 >
// // //                   Explore SUCA
// // //                 </Button>
// // //               </Link>
// // //             </div>
// // //           </FadeInUp>
// // //         </NeonCard>
// // //       </SectionReveal>
// // //     </div>
// // //   );
// // // }
 
// "use client";

// import type { ReactNode } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { NeonCard } from "@/components/ui/neon-card";

// // Deterministic particles for consistency
// const floatingParticles = Array.from({ length: 20 }, (_, i) => ({
//   left: `${(i * 7) % 100}%`,
//   top: `${(i * 13) % 100}%`,
//   delay: `${(i * 0.35) % 5}s`,
//   duration: `${10 + (i % 6)}s`,
// }));

// // Animation helpers
// const SectionReveal = ({
//   children,
//   className = "",
// }: {
//   children: ReactNode;
//   className?: string;
// }) => (
//   <motion.section
//     className={className}
//     initial={{ opacity: 0, y: 60 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true, amount: 0.25 }}
//     transition={{ duration: 0.7, ease: "easeOut" }}
//   >
//     {children}
//   </motion.section>
// );

// const FadeInUp = ({
//   children,
//   delay = 0,
//   className = "",
// }: {
//   children: ReactNode;
//   delay?: number;
//   className?: string;
// }) => (
//   <motion.div
//     className={className}
//     initial={{ opacity: 0, y: 40 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true, amount: 0.3 }}
//     transition={{ duration: 0.6, delay, ease: "easeOut" }}
//   >
//     {children}
//   </motion.div>
// );

// export default function AboutPage() {
//   return (
//     <div className="space-y-20 md:space-y-24 pb-16">
//       {/* HERO SECTION */}
//       <SectionReveal
//         className="relative min-h-[60vh] flex justify-center overflow-hidden w-screen
//         -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)]
//         bg-gradient-to-br from-[#f8faff] via-[#f3f4ff] to-[#eef9ff] pt-24 pb-16  -mt-[28px]"
//       >
//         {/* Background glows */}
//         <div className="absolute inset-0 pointer-events-none overflow-hidden">
//           <div className="absolute top-1/4 -left-32 w-[800px] h-[800px] bg-algoarnAqua/20 blur-3xl rounded-full animate-pulse-slow" />
//           <div className="absolute bottom-1/4 -right-32 w-[800px] h-[800px] bg-algoarnBlue/25 blur-3xl rounded-full animate-pulse-slow" />
//         </div>

//         {/* Particles */}
//         <div className="absolute inset-0 opacity-40 pointer-events-none">
//           {floatingParticles.map((p, i) => (
//             <div
//               key={i}
//               className="absolute w-1 h-1 bg-algoarnAqua rounded-full animate-float"
//               style={{
//                 left: p.left,
//                 top: p.top,
//                 animationDelay: p.delay,
//                 animationDuration: p.duration,
//               }}
//             />
//           ))}
//         </div>

//         {/* Content */}
//         <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center space-y-8">
//           {/* ✅ Removed the "About Us" pill/badge */}

//           <FadeInUp delay={0.15}>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black">
//               Engineering Intelligence for the{" "}
//               <span className="text-algoarnAqua">Real World</span>
//             </h1>
//           </FadeInUp>

//           <FadeInUp delay={0.25}>
//             <p className="text-lg md:text-xl leading-7 max-w-3xl mx-auto text-black">
//               Algoarn is an AI innovation company focused on building intelligent
//               products that transform how people learn, work, shop, and make
//               decisions.
//             </p>
//           </FadeInUp>
//         </div>
//       </SectionReveal>

//       {/* WHO WE ARE */}
//       <SectionReveal className="px-6">
//         <div className="max-w-6xl mx-auto space-y-10">
//           <FadeInUp className="text-center space-y-4">
//             {/* ✅ Added question mark */}
//             <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
//               Who We Are?
//             </h2>
//           </FadeInUp>

//           <FadeInUp delay={0.15}>
//             <div className="max-w-7xl mx-auto">
//               <div className="relative group rounded-[46px]">
//                 <div className="absolute -inset-6 rounded-[56px] bg-gradient-to-r from-sky-400/20 via-indigo-500/15 to-fuchsia-500/20 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

//                 <div className="relative rounded-[46px] bg-gradient-to-b from-white/10 to-white/0 p-[1.5px] shadow-[0_0_70px_rgba(56,189,248,0.18)] group-hover:shadow-[0_0_100px_rgba(56,189,248,0.28)] transition-all duration-500">
//                   <div className="rounded-[44px] bg-gradient-to-br from-[#0b1c2d] via-[#0f2238] to-[#071423] border border-white/10 px-10 py-12 md:px-16 md:py-16 lg:px-20 lg:py-20 text-center">
//                     <div className="max-w-4xl mx-auto space-y-8">
//                       <p className="text-lg md:text-xl leading-7 max-w-3xl mx-auto text-white">
//                         Algoarn is an AI innovation company focused on building intelligent
//                         products that transform how people learn, work, shop, and make
//                         decisions.
//                       </p>

//                       <p className="text-lg md:text-xl leading-7 max-w-3xl mx-auto text-white">
//                         We combine deep research, engineering precision, and creative
//                         problem-solving to build systems powered by computer vision,
//                         generative AI, and predictive analytics.
//                       </p>

//                       <div className="pt-2">
//                         <p className="text-lg md:text-xl leading-7 max-w-3xl mx-auto text-white font-semibold">
//                           Our goal is simple:
//                         </p>

//                         <p className="mt-3 text-lg md:text-xl leading-7 max-w-3xl mx-auto text-white font-bold">
//                           Create AI that is practical, powerful, and deeply human-centric.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </FadeInUp>
//         </div>
//       </SectionReveal>

//       {/* OUR STORY */}
//       <SectionReveal className="px-6">
//         <div className="max-w-6xl mx-auto space-y-10">
//           <FadeInUp className="text-center space-y-4">
//             <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
//               Our Story
//             </h2>
//           </FadeInUp>

//           <FadeInUp delay={0.15}>
//             <div className="max-w-7xl mx-auto">
//               <div className="relative group rounded-[46px]">
//                 <div className="absolute -inset-6 rounded-[56px] bg-gradient-to-r from-sky-400/20 via-indigo-500/15 to-fuchsia-500/20 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

//                 <div className="relative rounded-[46px] bg-gradient-to-b from-white/10 to-white/0 p-[1.5px] shadow-[0_0_70px_rgba(56,189,248,0.18)] group-hover:shadow-[0_0_100px_rgba(56,189,248,0.28)] transition-all duration-500">
//                   <div className="rounded-[44px] bg-gradient-to-br from-[#0b1c2d] via-[#0f2238] to-[#071423] border border-white/10 px-8 py-10 md:px-12 md:py-12 lg:px-14 lg:py-14">
//                     <div className="space-y-6 text-white text-lg md:text-xl leading-7 max-w-4xl mx-auto">
//                       <p>
//                         Algoarn was born from the belief that technology should empower
//                         people, not overwhelm them.
//                       </p>

//                       <p>
//                         With strong foundations in digital engineering, computer vision
//                         research, and product development, Algoarn began as a pursuit to
//                         solve real problems using advanced AI.
//                       </p>

//                       <p className="font-semibold text-white">
//                         From education intelligence to virtual retail experiences to
//                         enterprise automation, our journey has been defined by one
//                         principle:
//                         <span className="block mt-2 text-algoarnAqua font-semibold">
//                           AI should make life smarter, easier, and more meaningful.
//                         </span>
//                       </p>

//                       <p>
//                         Today, Algoarn is evolving into a multi-product AI company with
//                         global ambition, building solutions that bridge the gap between
//                         imagination and intelligent engineering.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </FadeInUp>
//         </div>
//       </SectionReveal>

//       {/* MISSION & VISION */}
//       <SectionReveal className="space-y-12 px-6">
//         <FadeInUp className="text-center space-y-4">
//           <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
//             Our Mission & Vision
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-algoarnAqua to-algoarnBlue mx-auto rounded-full" />
//         </FadeInUp>

//         <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-stretch">
//           {/* Mission */}
//           <FadeInUp>
//             <div className="relative group rounded-[32px] bg-gradient-to-br from-[#0b1c2d] via-[#0f2238] to-[#0b1c2d] p-[1px] shadow-[0_0_45px_rgba(56,189,248,0.18)] hover:shadow-[0_0_70px_rgba(56,189,248,0.35)] transition-all duration-500 h-full">
//               <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/[0.03] flex-1 flex flex-col h-full">
//                 <div className="bg-white/[0.05] border-b border-white/10 py-4 text-center">
//                   <h3 className="text-lg md:text-xl font-semibold text-white">
//                     Our Mission
//                   </h3>
//                 </div>

//                 <div className="p-6 md:p-7 space-y-5 text-white leading-relaxed flex-1 flex flex-col">
//                   <p className="text-lg md:text-xl leading-7">
//                     To build intelligent, practical, and human-centric AI systems
//                     that transform how the world learns, works, and experiences
//                     technology.
//                   </p>

//                   <ul className="space-y-3">
//                     {[
//                       "Creating AI products that solve real-world problems across industries.",
//                       "Advancing computer vision, generative AI, and predictive analytics.",
//                       "Empowering organizations with clarity, efficiency, and automation.",
//                       "Making cutting-edge AI accessible, scalable, and dependable.",
//                       "Cultivating a culture of research and innovation.",
//                     ].map((item) => (
//                       <li key={item} className="flex items-start gap-3">
//                         <span className="mt-2 h-1.5 w-1.5 rounded-full bg-algoarnAqua shrink-0" />
//                         <span className="text-base md:text-lg">{item}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   <div className="mt-auto pt-5 border-t border-white/10 text-white">
//                     Our mission is not just to build software,
//                     <br />
//                     <span className="text-algoarnAqua font-semibold">
//                       but to build intelligence that elevates people.
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </FadeInUp>

//           {/* Vision */}
//           <FadeInUp delay={0.1}>
//             <div className="relative group rounded-[32px] bg-gradient-to-br from-[#0b1c2d] via-[#0f2238] to-[#0b1c2d] p-[1px] shadow-[0_0_45px_rgba(56,189,248,0.18)] hover:shadow-[0_0_70px_rgba(56,189,248,0.35)] transition-all duration-500 h-full">
//               <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/[0.03] flex-1 flex flex-col h-full">
//                 <div className="bg-white/[0.05] border-b border-white/10 py-4 text-center">
//                   <h3 className="text-lg md:text-xl font-semibold text-white">
//                     Our Vision
//                   </h3>
//                 </div>

//                 <div className="p-6 md:p-7 space-y-5 text-white leading-relaxed flex-1 flex flex-col">
//                   <p className="text-lg md:text-xl leading-7">
//                     To become a global leader in AI innovation by shaping the future
//                     through intelligent products that enhance human potential and
//                     redefine digital experiences.
//                   </p>

//                   <ul className="space-y-3">
//                     {[
//                       "AI becomes a trusted partner for learning, creativity, and decision-making.",
//                       "Retail experiences become immersive and personalized.",
//                       "Institutions and businesses operate with predictive clarity.",
//                       "India becomes a global hub for AI excellence with Algoarn leading the movement.",
//                     ].map((item) => (
//                       <li key={item} className="flex items-start gap-3">
//                         <span className="mt-2 h-1.5 w-1.5 rounded-full bg-algoarnAqua shrink-0" />
//                         <span className="text-base md:text-lg">{item}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   <div className="mt-auto pt-5 border-t border-white/10 text-white">
//                     We are building a future where technology amplifies talent and
//                     unlocks new possibilities.
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </FadeInUp>
//         </div>
//       </SectionReveal>

//       {/* FOUNDER */}
//       <SectionReveal className="space-y-12 px-6">
//         <FadeInUp className="text-center space-y-4">
//           <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
//             Our Founder
//           </h2>
//           <p className="text-lg md:text-xl leading-7 max-w-3xl mx-auto text-black">
//             Built with vision, driven by precision
//           </p>
//         </FadeInUp>

//         <FadeInUp delay={0.15}>
//           <div className="max-w-4xl mx-auto">
//             <NeonCard className="p-10 md:p-14 group hover:scale-[1.02] transition-all duration-500">
//               <div className="space-y-8">
//                 <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
//                   <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-algoarnAqua to-algoarnBlue flex items-center justify-center text-4xl">
//                     👤
//                   </div>

//                   <div className="flex-1 space-y-3 text-center md:text-left">
//                     <div>
//                       <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-algoarnAqua transition-colors">
//                         Prajwal Gaddigoudar
//                       </h3>
//                       <p className="text-white/90 text-lg font-semibold">
//                         Founder — Algoarn AI Solutions Pvt Ltd
//                       </p>
//                       <p className="text-base md:text-lg text-white">
//                         MSc Digital Engineering (Germany), Computer Vision Specialist
//                       </p>
//                     </div>

//                     <p className="text-lg md:text-xl leading-7 text-white pt-2">
//                       A passionate builder focused on creating meaningful, precise and
//                       affordable AI products and pushing the boundaries of what
//                       intelligent systems can do.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </NeonCard>
//           </div>
//         </FadeInUp>
//       </SectionReveal>

//       {/* VALUES */}
//       <SectionReveal className="space-y-12 px-6">
//         <FadeInUp className="text-center space-y-4">
//           <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
//             Our Values
//           </h2>
//           <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
//             The principles that guide everything we build
//           </p>
//         </FadeInUp>

//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
//           {[
//             { icon: "🚀", title: "Innovation", desc: "We push boundaries to create what’s next." },
//             { icon: "🧭", title: "Integrity", desc: "We build trust through honesty and responsibility." },
//             { icon: "🎯", title: "Impact-driven Engineering", desc: "We focus on outcomes that matter in the real world." },
//             { icon: "🔬", title: "Research Excellence", desc: "We turn deep research into usable intelligence." },
//             { icon: "🧑‍🤝‍🧑", title: "Human-centric Design", desc: "We build for people first—always." },
//             { icon: "📚", title: "Continuous Learning", desc: "We evolve fast, learn faster, and share knowledge." },
//             { icon: "🧠", title: "Future-first Thinking", desc: "We build products that stand the test of time." },
//           ].map((v, idx, arr) => {
//             const isLast = idx === arr.length - 1;

//             return (
//               <FadeInUp
//                 key={v.title}
//                 delay={0.06 * idx}
//                 className={
//                   isLast
//                     ? "md:col-span-2 lg:col-span-1 lg:col-start-2 flex"
//                     : ""
//                 }
//               >
//                 {/* ✅ Same card height for ALL (fixes Human-centric sizing issue too) */}
//                 <NeonCard className="p-8 w-full h-full min-h-[220px] flex flex-col justify-center">
//                   <div className="space-y-4 text-center">
//                     <div className="inline-flex p-3 rounded-2xl bg-white/10 border border-white/10 mx-auto">
//                       <span className="text-3xl">{v.icon}</span>
//                     </div>

//                     <h3 className="text-xl font-bold text-white">
//                       {v.title}
//                     </h3>

//                     <p className="text-sm md:text-base text-white/70 leading-relaxed">
//                       {v.desc}
//                     </p>
//                   </div>
//                 </NeonCard>
//               </FadeInUp>
//             );
//           })}
//         </div>
//       </SectionReveal>

//       {/* ROAD AHEAD */}
//       <SectionReveal className="space-y-12 px-6">
//         <FadeInUp className="text-center space-y-4">
//           <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
//             The Road Ahead
//           </h2>
//           <p className="text-lg md:text-xl leading-7 max-w-3xl mx-auto text-black">
//             Algoarn is building toward a future where AI enhances every touchpoint
//             of life — from learning and retail to business and creativity.
//           </p>
//         </FadeInUp>

//         <FadeInUp delay={0.15}>
//           <div className="max-w-4xl mx-auto">
//             <NeonCard className="p-10 md:p-12">
//               <div className="space-y-6 text-lg md:text-xl text-white leading-7 max-w-3xl mx-auto">
//                 <p>
//                   With SUCA ready for institutions, VTR soon entering the market,
//                   and new products in development, we’re just getting started.
//                 </p>
//                 <p className="text-white font-semibold text-lg md:text-xl">
//                   The future is intelligent.
//                   <br />
//                   And we’re building it — one breakthrough at a time.
//                 </p>
//               </div>
//             </NeonCard>
//           </div>
//         </FadeInUp>
//       </SectionReveal>

//       {/* FINAL CTA */}
//       <SectionReveal className="relative px-6">
//         <div className="absolute inset-0 bg-gradient-to-r from-algoarnAqua/10 via-purple-500/10 to-algoarnBlue/10 rounded-3xl blur-3xl opacity-40" />

//         <NeonCard className="p-10 md:p-16 relative bg-gradient-to-br from-slate-800/80 to-slate-900/90 border-algoarnAqua/50 backdrop-blur-sm text-center">
//           <FadeInUp className="max-w-4xl mx-auto space-y-8">
//             <h2 className="text-3xl md:text-5xl font-bold text-white">
//               Let’s Build the Future Together
//             </h2>

//             <p className="text-lg md:text-xl text-white leading-7 max-w-3xl mx-auto">
//               Whether you’re an institution, a business, or a brand exploring AI
//               transformation, Algoarn is ready to collaborate.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
//               <Link href="/contact" className="group">
//                 <Button
//                   size="lg"
//                   className="px-10 py-6 text-base md:text-lg font-semibold bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90 transform hover:scale-105 transition-all shadow-2xl shadow-algoarnAqua/30"
//                   style={{ borderRadius: "2.5rem" }}
//                 >
//                   Work With Us
//                 </Button>
//               </Link>

//               {/* ✅ Redirect to SUCA page */}
//               <Link href="/suca" className="group">
//                 <Button
//                   size="lg"
//                   className="px-10 py-6 text-base md:text-lg font-semibold bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90 transform hover:scale-105 transition-all shadow-2xl shadow-algoarnAqua/30"
//                   style={{ borderRadius: "2.5rem" }}
//                 >
//                   Explore Our AI Products
//                 </Button>
//               </Link>
//             </div>
//           </FadeInUp>
//         </NeonCard>
//       </SectionReveal>
//     </div>
//   );
// }

"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NeonCard } from "@/components/ui/neon-card";
import { style } from "framer-motion/client";
import { useContactModal } from "@/components/contact/contact-modal-provider";
const SECTION = "relative py-20 md:py-24 -mt-[115px]" ;
const WRAP = "max-w-7xl mx-auto px-6";

const H2 = "text-4xl md:text-5xl font-extrabold text-black";
const P_LEAD = "text-lg md:text-xl leading-7 max-w-3xl mx-auto text-black";
const P_BODY = "text-lg md:text-xl leading-7 text-black";

// Deterministic particles for consistency
const floatingParticles = Array.from({ length: 20 }, (_, i) => ({
  left: `${(i * 7) % 100}%`,
  top: `${(i * 13) % 100}%`,
  delay: `${(i * 0.35) % 5}s`,
  duration: `${10 + (i % 6)}s`,
}));

// Animation helpers
const SectionReveal = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.section
    className={className}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    {children}
  </motion.section>
);
const serviceParticles = Array.from({ length: 12 }, (_, i) => ({
  left: `${(i * 17) % 100}%`,
  top: `${(i * 37) % 100}%`,
  duration: 3 + (i % 3),
  delay: (i % 4) * 0.4,
}));
const FadeInUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function AboutPage() {
  const { openModal } = useContactModal();
  return (
    
    <>
      <section
  className={[
    "relative",
    "min-h-screen",
    "flex items-center justify-center",
    "overflow-hidden",
    "w-screen",
    "-mx-[calc((100vw-100%)/2)]",
    "px-[calc((100vw-100%)/2)]",
    "bg-gradient-to-br from-[#f8faff] via-[#f3f4ff] to-[#eef9ff]",
    "pt-20",
    "pb-24",
    "-mt-[32px]",
  ].join(" ")}
>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-40 w-[900px] h-[900px] bg-algoarnAqua/20 blur-3xl rounded-full animate-pulse-slow" />
          <div className="absolute bottom-1/4 -right-40 w-[900px] h-[900px] bg-algoarnBlue/25 blur-3xl rounded-full animate-pulse-slow" />
        </div>

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

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center space-y-10"
        >
         
            
      

          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black">
             
           Engineering Intelligence for the{" "}
              <span className="text-algoarnAqua">Real World</span>
            </h1>
            
          </div>

          <p className="text-xl leading-7 max-w-2xl mx-auto text-black">
          Algoarn is an AI innovation company focused on building intelligent
              products that transform how people learn, work, shop, and make
              decisions.
          </p>

          

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6 pb-20">
            {/* <Button
              asChild
              size="lg"
              className="px-10 py-4 text-base md:text-lg font-semibold bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-lg hover:from-indigo-600 hover:to-sky-600 transition-all"
              style={{ borderRadius: "9999px" }}
            >
              <Link href="/contact?type=SUCA+Institutional+Demo">
                <span className="text-white">Book an Institutional Demo</span>
              </Link>
            </Button> */}
            {/* <Button
  size="lg"
  type="button"
  onClick={() => openContact("Institutional Demo")}
  className="px-10 py-6 text-lg 
    bg-gradient-to-r from-algoarnAqua to-algoarnBlue 
    hover:from-algoarnAqua/90 hover:to-algoarnBlue/90"
  style={{ borderRadius: "2.5rem" }}
>
  Book an  Institutional Demo
</Button> */}
<Button
  size="lg"
  className="px-10 py-6 text-lg bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90"
  style={{ borderRadius: "2.5rem" }}
  onClick={() => openModal("Institutional Demo")}
>
 Contact Us
</Button>
    </div>
        </motion.div>
      </section>

      {/* HERO SECTION */}
      {/* <SectionReveal
        className="relative min-h-[60vh] flex justify-center overflow-hidden w-screen
        -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)]
        bg-gradient-to-br from-[#f8faff] via-[#f3f4ff] to-[#eef9ff] pt-24 pb-16 -mt-[79px]"
      > */}
        {/* Background glows */}
        {/* <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-[800px] h-[800px] bg-algoarnAqua/20 blur-3xl rounded-full animate-pulse-slow" />
          <div className="absolute bottom-1/4 -right-32 w-[800px] h-[800px] bg-algoarnBlue/25 blur-3xl rounded-full animate-pulse-slow" />
        </div> */}

        {/* Particles */}
        {/* <div className="absolute inset-0 opacity-40 pointer-events-none">
          {floatingParticles.map((p, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-algoarnAqua rounded-full animate-float"
              style={{
                left: p.left,
                top: p.top,
                animationDelay: p.delay,
                animationDuration: p.duration,
              }}
            />
          ))}
        </div> */}

        {/* Content */}
        {/* <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center space-y-8"> */}
          

          {/* <FadeInUp delay={0.15}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black">
              Engineering Intelligence for the{" "}
              <span className="text-algoarnAqua">Real World</span>
            </h1>
          </FadeInUp> */}

          {/* <FadeInUp delay={0.25}>
            <p className={P_LEAD}>
              Algoarn is an AI innovation company focused on building intelligent
              products that transform how people learn, work, shop, and make
              decisions.
            </p>
          </FadeInUp>
        </div>
     </SectionReveal> */}
 <SectionReveal className={`${SECTION} mt-1`}> 


        <div className={WRAP}>
          <div className="max-w-6xl mx-auto space-y-10">
            <FadeInUp className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">Who We Are?</h2>
            </FadeInUp>

            <FadeInUp delay={0.15}>
              <div className="max-w-7xl mx-auto">
                <div className="relative group rounded-[46px]">
                  <div className="absolute -inset-6 rounded-[56px] bg-gradient-to-r from-sky-400/20 via-indigo-500/15 to-fuchsia-500/20 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative rounded-[46px] bg-gradient-to-b from-white/10 to-white/0 p-[1.5px] shadow-[0_0_70px_rgba(56,189,248,0.18)] group-hover:shadow-[0_0_100px_rgba(56,189,248,0.28)] transition-all duration-500">
                    <div className="rounded-[44px] bg-gradient-to-br from-[#0b1c2d] via-[#0f2238] to-[#071423] border border-white/10 px-8 py-10 md:px-12 md:py-12 lg:px-14 lg:py-14">
                      <div className="space-y-6 text-white text-lg md:text-xl leading-7 max-w-2xl mx-auto">
                        <p className="text-lg md:text-xl leading-7 max-w-2xl mx-auto text-white">
                          Algoarn is an AI innovation company focused on building intelligent
                          products that transform how people learn, work, shop, and make
                          decisions.
                        </p>

                      <p className="text-lg md:text-xl leading-7 max-w-3xl mx-auto text-white">
                          We combine deep research, engineering precision, and creative
                          problem-solving to build systems powered by computer vision,
                          generative AI, and predictive analytics.
                        </p>

                         <p className="text-lg md:text-xl leading-7 max-w-3xl mx-auto text-white font-semibold">
                            Our goal is simple:
                          </p>

                          <p className="mt-3 text-lg md:text-xl leading-7 max-w-3xl mx-auto text-white font-bold">
                            Create AI that is practical, powerful, and deeply human-centric.
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </SectionReveal>
      {/* WHO WE ARE */}
      {/* <SectionReveal className={SECTION}> */}
      {/* <SectionReveal className={`${SECTION} mt-1`}>

        <div className={WRAP}>
          <div className="max-w-6xl mx-auto space-y-10">
            <FadeInUp className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">Who We Are?</h2>
            </FadeInUp>

            <FadeInUp delay={0.15}>
              <div className="max-w-7xl mx-auto">
                <div className="relative group rounded-[46px]">
                  <div className="absolute -inset-6 rounded-[56px] bg-gradient-to-r from-sky-400/20 via-indigo-500/15 to-fuchsia-500/20 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative rounded-[46px] bg-gradient-to-b from-white/10 to-white/0 p-[1.5px] shadow-[0_0_70px_rgba(56,189,248,0.18)] group-hover:shadow-[0_0_100px_rgba(56,189,248,0.28)] transition-all duration-500">
                    <div className="rounded-[44px] bg-gradient-to-br from-[#0b1c2d] via-[#0f2238] to-[#071423] border border-white/10 px-10 py-12 md:px-16 md:py-16 lg:px-20 lg:py-20 text-center">
                      <div className="max-w-4xl mx-auto space-y-8">
                        <p className="text-lg md:text-xl leading-7 max-w-2xl mx-auto text-white">
                          Algoarn is an AI innovation company focused on building intelligent
                          products that transform how people learn, work, shop, and make
                          decisions.
                        </p>

                        <p className="text-lg md:text-xl leading-7 max-w-3xl mx-auto text-white">
                          We combine deep research, engineering precision, and creative
                          problem-solving to build systems powered by computer vision,
                          generative AI, and predictive analytics.
                        </p>

                        <div className="pt-2">
                          <p className="text-lg md:text-xl leading-7 max-w-3xl mx-auto text-white font-semibold">
                            Our goal is simple:
                          </p>

                          <p className="mt-3 text-lg md:text-xl leading-7 max-w-3xl mx-auto text-white font-bold">
                            Create AI that is practical, powerful, and deeply human-centric.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </SectionReveal> */}

      {/* OUR STORY */}
      {/* <SectionReveal className={SECTION} > */}
      <SectionReveal className={`${SECTION} -mt-1`}>

        <div className={WRAP}>
          <div className="max-w-6xl mx-auto space-y-10">
            <FadeInUp className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">Our Story</h2>
            </FadeInUp>

            <FadeInUp delay={0.15}>
              <div className="max-w-7xl mx-auto">
                <div className="relative group rounded-[46px]">
                  <div className="absolute -inset-6 rounded-[56px] bg-gradient-to-r from-sky-400/20 via-indigo-500/15 to-fuchsia-500/20 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative rounded-[46px] bg-gradient-to-b from-white/10 to-white/0 p-[1.5px] shadow-[0_0_70px_rgba(56,189,248,0.18)] group-hover:shadow-[0_0_100px_rgba(56,189,248,0.28)] transition-all duration-500">
                    <div className="rounded-[44px] bg-gradient-to-br from-[#0b1c2d] via-[#0f2238] to-[#071423] border border-white/10 px-8 py-10 md:px-12 md:py-12 lg:px-14 lg:py-14">
                      <div className="space-y-6 text-white text-lg md:text-xl leading-7 max-w-2xl mx-auto">
                        <p>
                          Algoarn was born from the belief that technology should empower
                          people, not overwhelm them.
                        </p>

                        <p>
                          With strong foundations in digital engineering, computer vision
                          research, and product development, Algoarn began as a pursuit to
                          solve real problems using advanced AI.
                        </p>

                        <p className="font-semibold text-white">
                          From education intelligence to virtual retail experiences to
                          enterprise automation, our journey has been defined by one
                          principle:
                          <span className="block mt-2 text-algoarnAqua font-semibold">
                            AI should make life smarter, easier, and more meaningful.
                          </span>
                        </p>

                        <p>
                          Today, Algoarn is evolving into a multi-product AI company with
                          global ambition, building solutions that bridge the gap between
                          imagination and intelligent engineering.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </SectionReveal>

      {/* MISSION & VISION */}
 <SectionReveal className={`${SECTION} -mt-1`}>
        <div className={WRAP}>
          <div className="space-y-12">
            <FadeInUp className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">Our Mission & Vision</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-algoarnAqua to-algoarnBlue mx-auto rounded-full" />
            </FadeInUp>

            <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-stretch">
              {/* Mission */}
              <FadeInUp>
                <div className="relative group rounded-[32px] bg-gradient-to-br from-[#0b1c2d] via-[#0f2238] to-[#0b1c2d] p-[1px] shadow-[0_0_45px_rgba(56,189,248,0.18)] hover:shadow-[0_0_70px_rgba(56,189,248,0.35)] transition-all duration-500 h-full">
                  <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/[0.03] flex-1 flex flex-col h-full">
                    <div className="bg-white/[0.05] border-b border-white/10 py-4 text-center">
                      <h3 className="text-lg md:text-xl font-semibold text-white">
                        Our Mission
                      </h3>
                    </div>

                    <div className="p-6 md:p-7 space-y-5 text-white leading-relaxed flex-1 flex flex-col">
                      <p className="text-xl leading-7 max-w-2xl mx-auto">
                        To build intelligent, practical, and human-centric AI systems
                        that transform how the world learns, works, and experiences
                        technology.
                      </p>

                      <ul className="space-y-3">
                        {[
                          "Creating AI products that solve real-world problems across industries.",
                          "Advancing computer vision, generative AI, and predictive analytics.",
                          "Empowering organizations with clarity, efficiency, and automation.",
                          "Making cutting-edge AI accessible, scalable, and dependable.",
                          "Cultivating a culture of research and innovation.",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-algoarnAqua shrink-0" />
                            <span className="text-base md:text-lg">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto pt-5 border-t border-white/10 text-white">
                        Our mission is not just to build software,
                        <br />
                        <span className="text-algoarnAqua font-semibold">
                          but to build intelligence that elevates people.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInUp>

              {/* Vision */}
              <FadeInUp delay={0.1}>
                <div className="relative group rounded-[32px] bg-gradient-to-br from-[#0b1c2d] via-[#0f2238] to-[#0b1c2d] p-[1px] shadow-[0_0_45px_rgba(56,189,248,0.18)] hover:shadow-[0_0_70px_rgba(56,189,248,0.35)] transition-all duration-500 h-full">
                  <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/[0.03] flex-1 flex flex-col h-full">
                    <div className="bg-white/[0.05] border-b border-white/10 py-4 text-center">
                      <h3 className="text-lg md:text-xl font-semibold text-white">
                        Our Vision
                      </h3>
                    </div>

                    <div className="p-6 md:p-7 space-y-5 text-white leading-relaxed flex-1 flex flex-col">
                      <p className="text-lg md:text-xl leading-7">
                        To become a global leader in AI innovation by shaping the future
                        through intelligent products that enhance human potential and
                        redefine digital experiences.
                      </p>

                      <ul className="space-y-3">
                        {[
                          "AI becomes a trusted partner for learning, creativity, and decision-making.",
                          "Retail experiences become immersive and personalized.",
                          "Institutions and businesses operate with predictive clarity.",
                          "India becomes a global hub for AI excellence with Algoarn leading the movement.",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-algoarnAqua shrink-0" />
                            <span className="text-base md:text-lg">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto pt-5 border-t border-white/10 text-white">
                        We are building a future where technology amplifies talent and
                        unlocks new possibilities.
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* FOUNDER */}
      <SectionReveal className={`${SECTION} -mt-1`}>
        <div className={WRAP}>
          <div className="space-y-12">
            <FadeInUp className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">Our Founder</h2>
              <p className="text-xl leading-7 max-w-2xl mx-auto text-black">Built with vision, driven by precision</p>
            </FadeInUp>

            <FadeInUp delay={0.15}>
              <div className="max-w-4xl mx-auto">
                <NeonCard className="p-10 md:p-14 group hover:scale-[1.02] transition-all duration-500">
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                      <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-algoarnAqua to-algoarnBlue flex items-center justify-center text-4xl">
                        👤
                      </div>

                      <div className="flex-1 space-y-3 text-center md:text-left">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-algoarnAqua transition-colors">
                            Prajwal Gaddigoudar
                          </h3>
                          <p className="text-white/90 text-lg font-semibold">
                            Founder — Algoarn AI Solutions Pvt Ltd
                          </p>
                          <p className="text-xl leading-7 max-w-2xl mx-auto  text-white">
                            MSc Digital Engineering (Germany), Computer Vision Specialist
                          </p>
                        </div>

                        <p className="text-xl leading-7 max-w-2xl mx-auto text-white pt-2">
                          A passionate builder focused on creating meaningful, precise and
                          affordable AI products and pushing the boundaries of what
                          intelligent systems can do.
                        </p>
                      </div>
                    </div>
                  </div>
                </NeonCard>
              </div>
            </FadeInUp>
          </div>
        </div>
      </SectionReveal>

      {/* VALUES */}
       <SectionReveal className={`${SECTION} -mt-1`}>
        <div className={WRAP}>
          <div className="space-y-12">
            <FadeInUp className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">Our Values</h2>
              <p className="text-xl leading-7 max-w-2xl mx-auto text-black">The principles that guide everything we build</p>
            </FadeInUp>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
              {[
                { icon: "🚀", title: "Innovation", desc: "We push boundaries to create what’s next." },
                { icon: "🧭", title: "Integrity", desc: "We build trust through honesty and responsibility." },
                { icon: "🎯", title: "Impact-driven Engineering", desc: "We focus on outcomes that matter in the real world." },
                { icon: "🔬", title: "Research Excellence", desc: "We turn deep research into usable intelligence." },
                { icon: "🧑‍🤝‍🧑", title: "Human-centric Design", desc: "We build for people first—always." },
                { icon: "📚", title: "Continuous Learning", desc: "We evolve fast, learn faster, and share knowledge." },
                { icon: "🧠", title: "Future-first Thinking", desc: "We build products that stand the test of time." },
              ].map((v, idx, arr) => {
                const isLast = idx === arr.length - 1;

                return (
                  <FadeInUp
                    key={v.title}
                    delay={0.06 * idx}
                    className={
                      isLast
                        ? "md:col-span-2 lg:col-span-1 lg:col-start-2 flex"
                        : ""
                    }
                  >
                    <NeonCard className="p-8 w-full h-full min-h-[220px] flex flex-col justify-center">
                      <div className="space-y-4 text-center">
                        <div className="inline-flex p-3 rounded-2xl bg-white/10 border border-white/10 mx-auto">
                          <span className="text-3xl">{v.icon}</span>
                        </div>

                        <h3 className="text-xl font-bold text-white">{v.title}</h3>

                        <p className="text-sm md:text-base text-white leading-relaxed">
                          {v.desc}
                        </p>
                      </div>
                    </NeonCard>
                  </FadeInUp>
                );
              })}
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* ROAD AHEAD */}
      <SectionReveal className={`${SECTION} -mt-1`}>
        <div className={WRAP}>
          <div className="space-y-12">
            <FadeInUp className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">The Road Ahead</h2>
              <p className="text-xl leading-7 max-w-2xl mx-auto text-black">
                Algoarn is building toward a future where AI enhances every touchpoint
                of life — from learning and retail to business and creativity.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.15}>
              <div className="max-w-4xl mx-auto">
                <NeonCard className="p-10 md:p-12">
                  <div className="space-y-6 text-xl leading-7 max-w-2xl mx-auto text-white">
                    <p>
                      With SUCA ready for institutions, VTR soon entering the market,
                      and new products in development, we’re just getting started.
                    </p>
                    <p className="text-xl leading-7 max-w-2xl mx-auto font-bold text-white">
                      The future is intelligent.
                      <br />
                      And we’re building it — one breakthrough at a time.
                    </p>
                  </div>
                </NeonCard>
              </div>
            </FadeInUp>
          </div>
        </div>
      </SectionReveal>

      {/* FINAL CTA */}
    <SectionReveal className={`${SECTION} -mt-1`}>
        <div className={WRAP}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-algoarnAqua/10 via-purple-500/10 to-algoarnBlue/10 rounded-3xl blur-3xl opacity-40" />

            <NeonCard className="p-10 md:p-16 relative bg-gradient-to-br from-slate-800/80 to-slate-900/90 border-algoarnAqua/50 backdrop-blur-sm text-center">
              <FadeInUp className="max-w-4xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white">
                  Let’s Build the Future Together
                </h2>

                <p className="text-xl leading-7 max-w-2xl mx-auto text-white">
                  Whether you’re an institution, a business, or a brand exploring AI
                  transformation, Algoarn is ready to collaborate.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  <Link href="/contact" className="group">
                   
                    <Button
                      size="lg"
                      className="px-10 py-6 text-lg bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90"
                      style={{ borderRadius: "2.5rem" }}
                    >
                     Work With Us
                    </Button>
                  </Link>

                  <Link href="/suca" className="group">
                
                    <Button
                      size="lg"
                      className="px-10 py-6 text-lg bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90"
                      style={{ borderRadius: "2.5rem" }}
                    >
                     Explore Our AI Products
                    </Button>
                  </Link>
                </div>
              </FadeInUp>
            </NeonCard>
          </div>
        </div>
      </SectionReveal>
      
    
    </>
  );
}
