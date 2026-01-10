// // // "use client";

// // // import type { ReactNode } from "react";
// // // import { motion } from "framer-motion";
// // // import Link from "next/link";
// // // import { NeonCard } from "@/components/ui/neon-card";

// // // // Deterministic particles
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

// // // // Mock blog data - In production, this would come from your database/API
// // // const blogPosts = [
// // //   {
// // //     id: "suca-academic-decision-making",
// // //     title: "How SUCA Changes Academic Decision-Making",
// // //     excerpt:
// // //       "Discover how SUCA transforms scattered institutional data into actionable intelligence, enabling leadership to move from reactive management to proactive, data-driven academic strategy.",
// // //     category: "Product Insights",
// // //     date: "2024-11-15",
// // //     readTime: "6 min read",
// // //   },
// // //   {
// // //     id: "privacy-first-ai-institutions",
// // //     title: "Designing Privacy-First AI for Institutions",
// // //     excerpt:
// // //       "Privacy isn't optional—it's foundational. Learn how Algoarn architects AI systems that deliver powerful insights while maintaining strict data sovereignty and confidentiality for educational institutions.",
// // //     category: "Technical",
// // //     date: "2024-11-10",
// // //     readTime: "8 min read",
// // //   },
// // //   {
// // //     id: "dashboards-to-intelligence",
// // //     title: "From Dashboards to Intelligence: The Algoarn Approach",
// // //     excerpt:
// // //       "Most analytics platforms stop at visualization. We explain why true academic intelligence requires going beyond dashboards to deliver predictive insights, risk scoring, and automated interventions.",
// // //     category: "Thought Leadership",
// // //     date: "2024-11-05",
// // //     readTime: "7 min read",
// // //   },
// // //   {
// // //     id: "ai-educational-analytics-2025",
// // //     title: "The Future of AI in Educational Analytics",
// // //     excerpt:
// // //       "Explore emerging trends in AI-powered education: from real-time learning path optimization to privacy-preserved cross-institutional benchmarking and the rise of intervention recommendation engines.",
// // //     category: "Industry Trends",
// // //     date: "2024-10-28",
// // //     readTime: "9 min read",
// // //   },
// // //   {
// // //     id: "implementing-suca-case-study",
// // //     title: "Implementing SUCA: A Case Study Approach",
// // //     excerpt:
// // //       "Walk through a real-world implementation journey—how one engineering college used SUCA to identify at-risk students early, improve placement outcomes, and streamline NAAC accreditation processes.",
// // //     category: "Case Study",
// // //     date: "2024-10-20",
// // //     readTime: "10 min read",
// // //   },
// // //   {
// // //     id: "predictive-ai-student-success",
// // //     title: "Predictive AI for Student Success",
// // //     excerpt:
// // //       "Learn how machine learning models analyze patterns in attendance, assessment performance, and engagement to predict student outcomes—and how institutions can intervene before it's too late.",
// // //     category: "Technical",
// // //     date: "2024-10-12",
// // //     readTime: "7 min read",
// // //   },
// // // ];

// // // const categories = [
// // //   "All",
// // //   "Product Insights",
// // //   "Technical",
// // //   "Thought Leadership",
// // //   "Industry Trends",
// // //   "Case Study",
// // // ];

// // // export default function BlogPage() {
// // //   return (
// // //     <div className="space-y-20 md:space-y-24">
// // //       {/* HERO SECTION */}
// // //       <SectionReveal className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-b border-algoarnAqua/30 -mx-6 px-6 md:-mx-8 md:px-8 -mt-11">
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
// // //         <div className="relative z-10 w-full max-w-7xl mx-auto py-16 md:py-20 text-center space-y-8">
// // //           <FadeInUp delay={0.1}>
// // //             <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-algoarnAqua/10 border border-algoarnAqua/30 backdrop-blur-sm">
// // //               <div className="w-2 h-2 bg-algoarnAqua rounded-full animate-ping" />
// // //               <span className="text-xs md:text-sm font-medium text-algoarnAqua tracking-[0.2em] uppercase">
// // //                 Insights & Updates
// // //               </span>
// // //             </div>
// // //           </FadeInUp>

// // //           <FadeInUp delay={0.2}>
// // //             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
// // //               Algoarn{" "}
// // //               <span className="text-algoarnAqua">Insights</span>
// // //             </h1>
// // //           </FadeInUp>

// // //           <FadeInUp delay={0.3}>
// // //             <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
// // //               Thought leadership on AI in education, technical deep dives, and
// // //               practical insights from building privacy-first intelligence
// // //               systems.
// // //             </p>
// // //           </FadeInUp>
// // //         </div>
// // //       </SectionReveal>

// // //       {/* CATEGORY FILTER */}
// // //       <SectionReveal>
// // //         <FadeInUp>
// // //           <div className="flex flex-wrap gap-3 justify-center">
// // //             {categories.map((category) => (
// // //               <button
// // //                 key={category}
// // //                 className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
// // //                   category === "All"
// // //                     ? "bg-gradient-to-r from-algoarnAqua to-algoarnBlue text-white shadow-lg shadow-algoarnAqua/30"
// // //                     : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white hover:border-algoarnAqua/30"
// // //                 }`}
// // //               >
// // //                 {category}
// // //               </button>
// // //             ))}
// // //           </div>
// // //         </FadeInUp>
// // //       </SectionReveal>

// // //       {/* BLOG POSTS GRID */}
// // //       <SectionReveal className="space-y-12">
// // //         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
// // //           {blogPosts.map((post, index) => (
// // //             <FadeInUp key={post.id} delay={0.1 * (index % 3)}>
// // //               <Link href={`/blog/${post.id}`}>
// // //                 <NeonCard className="p-8 group hover:scale-[1.03] transition-all duration-500 h-full flex flex-col cursor-pointer">
// // //                   <div className="space-y-6 flex-1 flex flex-col">
// // //                     {/* Category Badge */}
// // //                     <div className="flex items-center justify-between">
// // //                       <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-algoarnAqua/10 text-algoarnAqua border border-algoarnAqua/30">
// // //                         {post.category}
// // //                       </span>
// // //                       <span className="text-xs text-white/50">
// // //                         {post.readTime}
// // //                       </span>
// // //                     </div>

// // //                     {/* Title */}
// // //                     <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-algoarnAqua transition-colors leading-snug flex-1">
// // //                       {post.title}
// // //                     </h3>

// // //                     {/* Excerpt */}
// // //                     <p className="text-sm md:text-base text-white/70 leading-relaxed line-clamp-3">
// // //                       {post.excerpt}
// // //                     </p>

// // //                     {/* Meta Info */}
// // //                     <div className="flex items-center justify-between pt-4 border-t border-white/10">
// // //                       <span className="text-xs text-white/50">
// // //                         {new Date(post.date).toLocaleDateString("en-US", {
// // //                           month: "short",
// // //                           day: "numeric",
// // //                           year: "numeric",
// // //                         })}
// // //                       </span>
// // //                       <span className="text-sm text-algoarnAqua group-hover:translate-x-1 transition-transform">
// // //                         Read more →
// // //                       </span>
// // //                     </div>
// // //                   </div>
// // //                 </NeonCard>
// // //               </Link>
// // //             </FadeInUp>
// // //           ))}
// // //         </div>
// // //       </SectionReveal>

// // //       {/* PAGINATION (Placeholder) */}
// // //       <SectionReveal>
// // //         <FadeInUp>
// // //           <div className="flex justify-center gap-2">
// // //             {[1, 2, 3].map((page) => (
// // //               <button
// // //                 key={page}
// // //                 className={`w-10 h-10 rounded-lg flex items-center justify-center font-semibold transition-all duration-300 ${
// // //                   page === 1
// // //                     ? "bg-gradient-to-r from-algoarnAqua to-algoarnBlue text-white shadow-lg shadow-algoarnAqua/30"
// // //                     : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:border-algoarnAqua/30"
// // //                 }`}
// // //               >
// // //                 {page}
// // //               </button>
// // //             ))}
// // //           </div>
// // //         </FadeInUp>
// // //       </SectionReveal>

// // //       {/* NEWSLETTER SUBSCRIBE CTA */}
// // //       <SectionReveal className="relative overflow-hidden bg-gradient-to-br from-slate-800/80 to-slate-900/90 border-y border-algoarnAqua/40 -mx-6 px-6 md:-mx-8 md:px-8">
// // //         <div className="absolute inset-0 pointer-events-none overflow-hidden">
// // //           <div className="absolute top-1/4 -left-40 w-[900px] h-[900px] bg-algoarnAqua/15 blur-3xl rounded-full animate-pulse-slow" />
// // //           <div className="absolute bottom-1/4 -right-40 w-[900px] h-[900px] bg-algoarnBlue/20 blur-3xl rounded-full animate-pulse-slow" />
// // //         </div>

// // //         <div className="relative z-10 w-full max-w-4xl mx-auto py-16 md:py-20 text-center space-y-8">
// // //           <FadeInUp>
// // //             <div className="text-4xl md:text-5xl mb-4">📬</div>
// // //             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
// // //               Stay Updated with{" "}
// // //               <span className="text-algoarnAqua">AI Insights</span>
// // //             </h2>
// // //             <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
// // //               Get the latest articles on AI in education, product updates, and
// // //               technical insights delivered to your inbox.
// // //             </p>

// // //             <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
// // //               <input
// // //                 type="email"
// // //                 placeholder="Enter your email"
// // //                 className="flex-1 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-algoarnAqua/50 focus:ring-2 focus:ring-algoarnAqua/20 transition-all"
// // //               />
// // //               <button className="px-8 py-3 rounded-full bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90 font-semibold text-white shadow-lg shadow-algoarnAqua/30 transform hover:scale-105 transition-all">
// // //                 Subscribe
// // //               </button>
// // //             </div>

// // //             <p className="text-xs text-white/50 mt-4">
// // //               No spam. Unsubscribe anytime. Privacy-first commitment.
// // //             </p>
// // //           </FadeInUp>
// // //         </div>
// // //       </SectionReveal>
// // //     </div>
// // //   );
// // // }


// // "use client";

// // import type { ReactNode } from "react";
// // import { motion } from "framer-motion";
// // import Link from "next/link";
// // import { NeonCard } from "@/components/ui/neon-card";

// // // Deterministic particles
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

// // import { useBlog } from "@/contexts/BlogContext";

// // const categories = [
// //   "All",
// //   "Product Insights",
// //   "Technical",
// //   "Thought Leadership",
// //   "Industry Trends",
// //   "Case Study",
// // ];

// // export default function BlogPage() {
// //   const { getPublishedPosts } = useBlog();
// //   const blogPosts = getPublishedPosts();

// //   return (
// //     <div className="space-y-20 md:space-y-24">
// //       {/* HERO SECTION */}
// //       {/*  */}
// // <SectionReveal
// //   className="relative min-h-[50vh] flex justify-center overflow-hidden w-screen
// //   -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)]
// //   bg-gradient-to-br from-[#f8faff] via-[#f3f4ff] to-[#eef9ff]
// //   pt-20 -mt-[31px]"
// // >
// //   {/* Background glows */}
// //   <div className="absolute inset-0 pointer-events-none overflow-hidden">
// //     <div className="absolute top-1/4 -left-32 w-[800px] h-[800px] bg-algoarnAqua/20 blur-3xl rounded-full animate-pulse-slow" />
// //     <div className="absolute bottom-1/4 -right-32 w-[800px] h-[800px] bg-algoarnBlue/20 blur-3xl rounded-full animate-pulse-slow" />
// //   </div>

// //   {/* Particles (deterministic) */}
// //   <div className="absolute inset-0 opacity-30 pointer-events-none">
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
// //   <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16 md:py-20 text-center space-y-8">
// //     <FadeInUp delay={0.1}>
// //       <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-algoarnAqua/10 border border-algoarnAqua/30 backdrop-blur-sm">
// //         <div className="w-2 h-2 bg-algoarnAqua rounded-full animate-ping" />
// //         <span className="text-xs md:text-sm font-medium text-indigo-500 tracking-[0.2em] uppercase">
// //           Insights & Updates
// //         </span>
// //       </div>
// //     </FadeInUp>

// //     <FadeInUp delay={0.2}>
// //       <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
// //         Algoarn{" "}
// //         <span className="text-algoarnAqua">Insights</span>
// //       </h1>
// //     </FadeInUp>

// //     <FadeInUp delay={0.3}>
// //       <p className="text-xl leading-7 max-w-3xl mx-auto text-black">
// //         Thought leadership on AI in education, technical deep dives, and
// //         practical insights from building privacy-first intelligence systems.
// //       </p>
// //     </FadeInUp>
// //   </div>
// // </SectionReveal>

// //       {/* CATEGORY FILTER */}
// //       {/* <SectionReveal>
// //         <FadeInUp>
// //           <div className="flex flex-wrap gap-3 justify-center text-black">
// //             {categories.map((category) => (
// //               <button
// //                 key={category}
// //                 className={`px-5 py-2.5 rounded-full text-black text-sm font-medium transition-all duration-300 ${
// //                   category === "All"
// //                     ? "bg-gradient-to-r from-algoarnAqua to-algoarnBlue text-black shadow-lg shadow-algoarnAqua/30"
// //                     : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white hover:border-algoarnAqua/30"
// //                 }`}
// //               >
// //                 {category}
// //               </button>
// //             ))}
// //           </div>
// //         </FadeInUp>
// //       </SectionReveal> */}
// // {/* CATEGORY FILTER */}
// // <SectionReveal>
// //   <FadeInUp>
// //     <div className="flex flex-wrap gap-3 justify-center">
// //       {categories.map((category) => (
// //         <button
// //           key={category}
// //           className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
// //             ${
// //               category === "All"
// //                 ? "bg-white text-black shadow-md border border-black/10"
// //                 : "bg-white text-black border border-black/10 hover:bg-black hover:text-white"
// //             }
// //           `}
// //         >
// //           {category}
// //         </button>
// //       ))}
// //     </div>
// //   </FadeInUp>
// // </SectionReveal>

// //       {/* BLOG POSTS GRID */}
// //       <SectionReveal className="space-y-12">
// //         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
// //           {blogPosts.map((post, index) => (
// //             <FadeInUp key={post.id} delay={0.1 * (index % 3)}>
// //               <Link href={`/blog/${post.id}`}>
// //                 <NeonCard className="p-8 group hover:scale-[1.03] transition-all duration-500 h-full flex flex-col cursor-pointer">
// //                   <div className="space-y-6 flex-1 flex flex-col">
// //                     {/* Category Badge */}
// //                     <div className="flex items-center justify-between">
// //                       <span className="inline-flex px-3 py-1 rounded-full  text-xs font-semibold bg-algoarnAqua/10 text-algoarnAqua border border-algoarnAqua/30">
// //                         {post.category}
// //                       </span>
// //                       <span className="text-xs text-white/50">
// //                         {post.readTime}
// //                       </span>
// //                     </div>

// //                     {/* Title */}
// //                     <h3 className="text-xl md:text-3xl font-bold text-white group-hover:text-algoarnAqua transition-colors leading-snug flex-1">
// //                       {post.title}
// //                     </h3>

// //                     {/* Excerpt */}
// //                     <p className="text-xl leading-7 max-w-2xl mx-auto text-white line-clamp-3">
// //                       {post.excerpt}
// //                     </p>

// //                     {/* Meta Info */}
// //                     <div className="flex items-center justify-between pt-4 border-t border-white">
// //                       <span className="text-xs text-white">
// //                         {new Date(post.date).toLocaleDateString("en-US", {
// //                           month: "short",
// //                           day: "numeric",
// //                           year: "numeric",
// //                         })}
// //                       </span>
// //                       <span className="text-sm text-algoarnAqua group-hover:translate-x-1 transition-transform">
// //                         Read more →
// //                       </span>
// //                     </div>
// //                   </div>
// //                 </NeonCard>
// //               </Link>
// //             </FadeInUp>
// //           ))}
// //         </div>
// //       </SectionReveal>

// //       {/* PAGINATION (Placeholder) */}
// //       <SectionReveal>
// //         <FadeInUp>
// //           <div className="flex justify-center gap-2">
// //             {[1, 2, 3].map((page) => (
// //               <button
// //                 key={page}
// //                 className={`w-10 h-10 rounded-lg flex items-center justify-center font-semibold transition-all duration-300 ${
// //                   page === 1
// //             ? "bg-white text-black shadow-md border border-black/10"
// //             : "bg-white text-black border border-black/10 hover:bg-black hover:text-white"
// //         }
// //       `}
// //               >
// //                 {page}
// //               </button>
// //             ))}
// //           </div>
// //         </FadeInUp>
// //       </SectionReveal>

// //       {/* NEWSLETTER SUBSCRIBE CTA */}
// //       {/* <SectionReveal className="relative overflow-hidden bg-gradient-to-br from-slate-800/80 to-slate-900/90 border-y border-algoarnAqua/40 -mx-6 px-6 md:-mx-8 md:px-8">
// //         <div className="absolute inset-0 pointer-events-none overflow-hidden">
// //           <div className="absolute top-1/4 -left-40 w-[900px] h-[900px] bg-algoarnAqua/15 blur-3xl rounded-full animate-pulse-slow" />
// //           <div className="absolute bottom-1/4 -right-40 w-[900px] h-[900px] bg-algoarnBlue/20 blur-3xl rounded-full animate-pulse-slow" />
// //         </div>

// //         <div className="relative z-10 w-full max-w-4xl mx-auto py-16 md:py-20 text-center space-y-8">
// //           <FadeInUp>
// //             <div className="text-4xl md:text-5xl mb-4">📬</div>
// //             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
// //               Stay Updated with{" "}
// //               <span className="text-algoarnAqua">AI Insights</span>
// //             </h2>
// //             <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
// //               Get the latest articles on AI in education, product updates, and
// //               technical insights delivered to your inbox.
// //             </p>

// //             <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
// //               <input
// //                 type="email"
// //                 placeholder="Enter your email"
// //                 className="flex-1 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-algoarnAqua/50 focus:ring-2 focus:ring-algoarnAqua/20 transition-all"
// //               />
// //               <button className="px-8 py-3 rounded-full bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90 font-semibold text-white shadow-lg shadow-algoarnAqua/30 transform hover:scale-105 transition-all">
// //                 Subscribe
// //               </button>
// //             </div>

// //             <p className="text-xs text-white/50 mt-4">
// //               No spam. Unsubscribe anytime. Privacy-first commitment.
// //             </p>
// //           </FadeInUp>
// //         </div>
// //       </SectionReveal> */}
// //       <SectionReveal className="relative overflow-hidden rounded-[32px] border border-algoarnAqua/25 bg-[#071226] shadow-[0_0_60px_rgba(56,189,248,0.18)] -mx-6 px-6 md:-mx-8 md:px-8">
// //   {/* Neon glow background */}
// //   <div className="absolute inset-0 pointer-events-none">
// //     {/* vignette + depth */}
// //     <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.10)_0%,rgba(7,18,38,0.9)_45%,rgba(3,8,20,1)_100%)]" />

// //     {/* top glow */}
// //     <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-algoarnAqua/25 blur-[90px] rounded-full" />

// //     {/* side glows */}
// //     <div className="absolute top-1/3 -left-56 w-[700px] h-[700px] bg-algoarnBlue/20 blur-[110px] rounded-full" />
// //     <div className="absolute bottom-1/3 -right-56 w-[700px] h-[700px] bg-algoarnAqua/18 blur-[110px] rounded-full" />

// //     {/* subtle animated shimmer */}
// //     <div className="absolute inset-0 opacity-40 animate-pulse">
// //       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.18),transparent_55%)]" />
// //       <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(99,102,241,0.16),transparent_55%)]" />
// //     </div>
// //   </div>

// //   {/* Content */}
// //   <div className="relative z-10 w-full max-w-4xl mx-auto py-16 md:py-20 text-center space-y-8">
// //     <FadeInUp>
// //       <div className="text-4xl md:text-5xl mb-4">📬</div>

// //       <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
// //         Stay Updated with <span className="text-algoarnAqua">AI Insights</span>
// //       </h2>

// //       <p className="text-lg text-white  text-xl leading-7 max-w-3xl mx-auto  mb-8">
// //         Get the latest articles on AI in education, product updates, and
// //         technical insights delivered to your inbox.
// //       </p>

// //       <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
// //         <input
// //           type="email"
// //           placeholder="Enter your email"
// //           className="flex-1 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-algoarnAqua/50 focus:ring-2 focus:ring-algoarnAqua/20 transition-all"
// //         />

// //         <button
// //           className="px-8 py-3 rounded-full bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90 font-semibold text-white
// //           shadow-[0_0_22px_rgba(56,189,248,0.35)] hover:shadow-[0_0_34px_rgba(56,189,248,0.55)]
// //           transform hover:scale-105 transition-all"
// //         >
// //           Subscribe
// //         </button>
// //       </div>

// //       <p className="text-xs text-white/50 mt-4">
// //         No spam. Unsubscribe anytime. Privacy-first commitment.
// //       </p>
// //     </FadeInUp>
// //   </div>
// // </SectionReveal>

// //     </div>
// //   );
// // }

// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { supabase } from "@/lib/supabase";
// import { NeonCard } from "@/components/ui/neon-card";

// type BlogRow = {
//   id: string;
//   title: string;
//   slug: string;
//   excerpt: string;
//   category: string | null;
//   author: string | null;
//   date: string | null;
//   read_time: string | null;
//   published: boolean;
// };

// export default function BlogPage() {
//   const [posts, setPosts] = useState<BlogRow[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchPosts() {
//       setLoading(true);

//       const { data, error } = await supabase
//         .from("blogs")
//         .select("*")
//         .eq("published", true)
//         .order("date", { ascending: false });

//       if (error) {
//         console.error("BLOG LIST ERROR:", error);
//         setPosts([]);
//       } else {
//         setPosts((data as BlogRow[]) || []);
//       }

//       setLoading(false);
//     }

//     fetchPosts();
//   }, []);

//   if (loading) {
//     return (
//       <main className="pt-28 pb-24 bg-white">
//         <div className="max-w-6xl mx-auto px-6 text-black">Loading…</div>
//       </main>
//     );
//   }

//   return (
//     <main className="pt-24 pb-24 bg-white">
//       <div className="max-w-6xl mx-auto px-6">
//         <h1 className="text-4xl font-bold text-black mb-8">Blog</h1>

//         {posts.length === 0 ? (
//           <p className="text-black">No published posts yet.</p>
//         ) : (
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {posts.map((post) => (
//               <Link key={post.id} href={`/blog/${post.slug}`}>
//                 <NeonCard className="p-8 h-full cursor-pointer">
//                   <div className="space-y-4">
//                     <div className="flex items-center justify-between">
//                       <span className="text-xs font-semibold text-cyan-400">
//                         {post.category || "General"}
//                       </span>
//                       <span className="text-xs text-white/60">
//                         {post.read_time || ""}
//                       </span>
//                     </div>

//                     <h2 className="text-xl font-bold text-white">
//                       {post.title}
//                     </h2>

//                     <p className="text-sm text-white/70 line-clamp-3">
//                       {post.excerpt}
//                     </p>

//                     <div className="text-xs text-white/50">
//                       {post.date
//                         ? new Date(post.date).toLocaleDateString("en-US", {
//                             month: "short",
//                             day: "numeric",
//                             year: "numeric",
//                           })
//                         : ""}
//                     </div>
//                   </div>
//                 </NeonCard>
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }

"use client";

import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { NeonCard } from "@/components/ui/neon-card";
import { motion } from "framer-motion";
type BlogRow = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string | null;
  author: string | null;
  date: string | null;
  read_time: string | null;
  published: boolean;
};
const floatingParticles = Array.from({ length: 20 }, (_, i) => ({
  left: `${(i * 7) % 100}%`,
  top: `${(i * 13) % 100}%`,
  delay: `${(i * 0.35) % 5}s`,
  duration: `${10 + (i % 6)}s`,
}));

function formatDate(date: string | null) {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogRow[]>([]);
  const [loading, setLoading] = useState(true);

  // keep your search + filters
  const [q, setQ] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);

      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("published", true)
        .order("date", { ascending: false });

      if (error) {
        console.error("BLOG LIST ERROR:", error);
        setPosts([]);
      } else {
        setPosts((data as BlogRow[]) || []);
      }

      setLoading(false);
    }

    fetchPosts();
  }, []);

  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => set.add(p.category || "General"));
    return ["All", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, [posts]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();

    return posts.filter((p) => {
      const cat = p.category || "General";
      const matchesCategory = activeCategory === "All" || cat === activeCategory;

      const matchesQuery =
        !query ||
        p.title.toLowerCase().includes(query) ||
        (p.excerpt || "").toLowerCase().includes(query) ||
        (p.author || "").toLowerCase().includes(query) ||
        cat.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [posts, q, activeCategory]);
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
  // Loading skeleton (unchanged)
  if (loading) {
    return (
      <main className="bg-white">
        {/* HERO skeleton to match new layout */}
        <section className="pt-24">
          <div className="bg-gradient-to-b from-indigo-50 via-slate-50 to-sky-50 border-b border-black/5">
            <div className="max-w-6xl mx-auto px-6 py-20">
              <div className="animate-pulse space-y-6">
                <div className="h-12 w-[520px] max-w-full rounded bg-neutral-200/60 mx-auto" />
                <div className="h-5 w-[720px] max-w-full rounded bg-neutral-200/50 mx-auto" />
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="animate-pulse space-y-6">
            <div className="h-10 w-48 rounded bg-neutral-100" />
            <div className="h-12 w-full rounded-xl bg-neutral-100" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-56 rounded-2xl bg-neutral-100" />
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-white">
      {/* ✅ HERO SECTION like your About page screenshot */}
      <SectionReveal
              className="relative min-h-[60vh] flex justify-center overflow-hidden w-screen
              -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)]
              bg-gradient-to-br from-[#f8faff] via-[#f3f4ff] to-[#eef9ff] pt-24 pb-16 -mt-[79px]"
            >
              {/* Background glows */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 -left-32 w-[800px] h-[800px] bg-algoarnAqua/20 blur-3xl rounded-full animate-pulse-slow" />
                <div className="absolute bottom-1/4 -right-32 w-[800px] h-[800px] bg-algoarnBlue/25 blur-3xl rounded-full animate-pulse-slow" />
              </div>
      
              {/* Particles */}
              <div className="absolute inset-0 opacity-40 pointer-events-none">
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
              </div>
      
              {/* Content */}
              <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center space-y-8">
                {/* ✅ Removed the "About Us" pill/badge */}
      
                <FadeInUp delay={0.15}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black">
                    Algoarn Blog
                  </h1>
                </FadeInUp>
      
                <FadeInUp delay={0.25}>
                  <p className="text-lg md:text-xl leading-7 max-w-2xl mx-auto text-black">
                    Expert insights, company updates, and in-depth articles from the Algoarn team.
                  </p>
                </FadeInUp>
              </div>
            </SectionReveal>
      
    

      {/*  BLOG CONTENT SECTION */}
     <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl font-bold text-black" style={{marginTop:'40px'}}>
              Blog
            </h1>
            <p className="text-xl leading-7 max-w-2xl mx-auto text-black">
              Insights, updates, and guides—written to be useful.
            </p>
          </div>

          {/* Search */}
          <div className="w-full md:w-[360px]">
            <label className="sr-only" htmlFor="blog-search">
              Search posts
            </label>
            <div className="relative">
              <input
                id="blog-search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search by title, author, category…"
                className="w-full rounded-xl border border-black bg-white px-4 py-3 pr-10 text-sm text-black outline-none transition focus:border-neutral-300 focus:ring-4 focus:ring-neutral-100"
              />
              <button
                type="button"
                onClick={() => setQ("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs text-neutral-500 hover:bg-neutral-100"
                aria-label="Clear search"
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {categories.map((c) => {
            const active = c === activeCategory;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setActiveCategory(c)}
                className={[
                  "rounded-full px-3 py-1 text-xs font-medium transition",
                  active
                    ? "bg-black text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200",
                ].join(" ")}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Results meta */}
        <div className="mt-4 flex items-center justify-between text-xs text-neutral-500">
          <div>
            {filtered.length} post{filtered.length === 1 ? "" : "s"}
            {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
            {q.trim() ? ` matching “${q.trim()}”` : ""}
          </div>
          {(q.trim() || activeCategory !== "All") && (
            <button
              type="button"
              onClick={() => {
                setQ("");
                setActiveCategory("All");
              }}
              className="rounded-lg px-2 py-1 hover:bg-neutral-100"
            >
              Reset
            </button>
          )}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-neutral-200 p-8">
            <p className="text-sm text-neutral-700">
              No published posts found.
            </p>
            <p className="mt-2 text-xs text-neutral-500">
              Try a different search or category.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => {
              const cat = post.category || "General";
              const dateLabel = formatDate(post.date);
              const metaLeft = [dateLabel, post.author].filter(Boolean).join(" • ");

              return (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group block focus:outline-none"
                >
                  {/* Keep your neon vibe, but make layout + hierarchy cleaner */}
                  <NeonCard className="relative h-full p-7 transition-transform duration-200 group-hover:-translate-y-0.5 group-focus-visible:ring-4 group-focus-visible:ring-neutral-200">
                    {/* Top meta */}
                    <div className="flex items-center justify-between gap-4">
                      <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/90">
                        {cat}
                      </span>

                      {!!post.read_time && (
                        <span className="text-[11px] text-white/60">
                          {post.read_time}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h2 className="mt-4 text-lg font-semibold leading-snug text-white transition-colors group-hover:text-white">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="mt-3 text-sm leading-relaxed text-white line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Bottom meta */}
                    <div className="mt-6 flex items-center justify-between text-[11px] text-white/55">
                      <span className="truncate">{metaLeft}</span>
                      <span className="inline-flex items-center gap-1 font-medium text-white/70">
                        Read
                        <span
                          aria-hidden="true"
                          className="transition-transform group-hover:translate-x-0.5"
                        >
                          →
                        </span>
                      </span>
                    </div>
                  </NeonCard>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
