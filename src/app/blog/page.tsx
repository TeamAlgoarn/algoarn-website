// "use client";

// import type { ReactNode } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { NeonCard } from "@/components/ui/neon-card";

// // Deterministic particles
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

// // Mock blog data - In production, this would come from your database/API
// const blogPosts = [
//   {
//     id: "suca-academic-decision-making",
//     title: "How SUCA Changes Academic Decision-Making",
//     excerpt:
//       "Discover how SUCA transforms scattered institutional data into actionable intelligence, enabling leadership to move from reactive management to proactive, data-driven academic strategy.",
//     category: "Product Insights",
//     date: "2024-11-15",
//     readTime: "6 min read",
//   },
//   {
//     id: "privacy-first-ai-institutions",
//     title: "Designing Privacy-First AI for Institutions",
//     excerpt:
//       "Privacy isn't optional—it's foundational. Learn how Algoarn architects AI systems that deliver powerful insights while maintaining strict data sovereignty and confidentiality for educational institutions.",
//     category: "Technical",
//     date: "2024-11-10",
//     readTime: "8 min read",
//   },
//   {
//     id: "dashboards-to-intelligence",
//     title: "From Dashboards to Intelligence: The Algoarn Approach",
//     excerpt:
//       "Most analytics platforms stop at visualization. We explain why true academic intelligence requires going beyond dashboards to deliver predictive insights, risk scoring, and automated interventions.",
//     category: "Thought Leadership",
//     date: "2024-11-05",
//     readTime: "7 min read",
//   },
//   {
//     id: "ai-educational-analytics-2025",
//     title: "The Future of AI in Educational Analytics",
//     excerpt:
//       "Explore emerging trends in AI-powered education: from real-time learning path optimization to privacy-preserved cross-institutional benchmarking and the rise of intervention recommendation engines.",
//     category: "Industry Trends",
//     date: "2024-10-28",
//     readTime: "9 min read",
//   },
//   {
//     id: "implementing-suca-case-study",
//     title: "Implementing SUCA: A Case Study Approach",
//     excerpt:
//       "Walk through a real-world implementation journey—how one engineering college used SUCA to identify at-risk students early, improve placement outcomes, and streamline NAAC accreditation processes.",
//     category: "Case Study",
//     date: "2024-10-20",
//     readTime: "10 min read",
//   },
//   {
//     id: "predictive-ai-student-success",
//     title: "Predictive AI for Student Success",
//     excerpt:
//       "Learn how machine learning models analyze patterns in attendance, assessment performance, and engagement to predict student outcomes—and how institutions can intervene before it's too late.",
//     category: "Technical",
//     date: "2024-10-12",
//     readTime: "7 min read",
//   },
// ];

// const categories = [
//   "All",
//   "Product Insights",
//   "Technical",
//   "Thought Leadership",
//   "Industry Trends",
//   "Case Study",
// ];

// export default function BlogPage() {
//   return (
//     <div className="space-y-20 md:space-y-24">
//       {/* HERO SECTION */}
//       <SectionReveal className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-b border-algoarnAqua/30 -mx-6 px-6 md:-mx-8 md:px-8 -mt-11">
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
//         <div className="relative z-10 w-full max-w-7xl mx-auto py-16 md:py-20 text-center space-y-8">
//           <FadeInUp delay={0.1}>
//             <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-algoarnAqua/10 border border-algoarnAqua/30 backdrop-blur-sm">
//               <div className="w-2 h-2 bg-algoarnAqua rounded-full animate-ping" />
//               <span className="text-xs md:text-sm font-medium text-algoarnAqua tracking-[0.2em] uppercase">
//                 Insights & Updates
//               </span>
//             </div>
//           </FadeInUp>

//           <FadeInUp delay={0.2}>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
//               Algoarn{" "}
//               <span className="text-algoarnAqua">Insights</span>
//             </h1>
//           </FadeInUp>

//           <FadeInUp delay={0.3}>
//             <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
//               Thought leadership on AI in education, technical deep dives, and
//               practical insights from building privacy-first intelligence
//               systems.
//             </p>
//           </FadeInUp>
//         </div>
//       </SectionReveal>

//       {/* CATEGORY FILTER */}
//       <SectionReveal>
//         <FadeInUp>
//           <div className="flex flex-wrap gap-3 justify-center">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
//                   category === "All"
//                     ? "bg-gradient-to-r from-algoarnAqua to-algoarnBlue text-white shadow-lg shadow-algoarnAqua/30"
//                     : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white hover:border-algoarnAqua/30"
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </FadeInUp>
//       </SectionReveal>

//       {/* BLOG POSTS GRID */}
//       <SectionReveal className="space-y-12">
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {blogPosts.map((post, index) => (
//             <FadeInUp key={post.id} delay={0.1 * (index % 3)}>
//               <Link href={`/blog/${post.id}`}>
//                 <NeonCard className="p-8 group hover:scale-[1.03] transition-all duration-500 h-full flex flex-col cursor-pointer">
//                   <div className="space-y-6 flex-1 flex flex-col">
//                     {/* Category Badge */}
//                     <div className="flex items-center justify-between">
//                       <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-algoarnAqua/10 text-algoarnAqua border border-algoarnAqua/30">
//                         {post.category}
//                       </span>
//                       <span className="text-xs text-white/50">
//                         {post.readTime}
//                       </span>
//                     </div>

//                     {/* Title */}
//                     <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-algoarnAqua transition-colors leading-snug flex-1">
//                       {post.title}
//                     </h3>

//                     {/* Excerpt */}
//                     <p className="text-sm md:text-base text-white/70 leading-relaxed line-clamp-3">
//                       {post.excerpt}
//                     </p>

//                     {/* Meta Info */}
//                     <div className="flex items-center justify-between pt-4 border-t border-white/10">
//                       <span className="text-xs text-white/50">
//                         {new Date(post.date).toLocaleDateString("en-US", {
//                           month: "short",
//                           day: "numeric",
//                           year: "numeric",
//                         })}
//                       </span>
//                       <span className="text-sm text-algoarnAqua group-hover:translate-x-1 transition-transform">
//                         Read more →
//                       </span>
//                     </div>
//                   </div>
//                 </NeonCard>
//               </Link>
//             </FadeInUp>
//           ))}
//         </div>
//       </SectionReveal>

//       {/* PAGINATION (Placeholder) */}
//       <SectionReveal>
//         <FadeInUp>
//           <div className="flex justify-center gap-2">
//             {[1, 2, 3].map((page) => (
//               <button
//                 key={page}
//                 className={`w-10 h-10 rounded-lg flex items-center justify-center font-semibold transition-all duration-300 ${
//                   page === 1
//                     ? "bg-gradient-to-r from-algoarnAqua to-algoarnBlue text-white shadow-lg shadow-algoarnAqua/30"
//                     : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:border-algoarnAqua/30"
//                 }`}
//               >
//                 {page}
//               </button>
//             ))}
//           </div>
//         </FadeInUp>
//       </SectionReveal>

//       {/* NEWSLETTER SUBSCRIBE CTA */}
//       <SectionReveal className="relative overflow-hidden bg-gradient-to-br from-slate-800/80 to-slate-900/90 border-y border-algoarnAqua/40 -mx-6 px-6 md:-mx-8 md:px-8">
//         <div className="absolute inset-0 pointer-events-none overflow-hidden">
//           <div className="absolute top-1/4 -left-40 w-[900px] h-[900px] bg-algoarnAqua/15 blur-3xl rounded-full animate-pulse-slow" />
//           <div className="absolute bottom-1/4 -right-40 w-[900px] h-[900px] bg-algoarnBlue/20 blur-3xl rounded-full animate-pulse-slow" />
//         </div>

//         <div className="relative z-10 w-full max-w-4xl mx-auto py-16 md:py-20 text-center space-y-8">
//           <FadeInUp>
//             <div className="text-4xl md:text-5xl mb-4">📬</div>
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//               Stay Updated with{" "}
//               <span className="text-algoarnAqua">AI Insights</span>
//             </h2>
//             <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
//               Get the latest articles on AI in education, product updates, and
//               technical insights delivered to your inbox.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-algoarnAqua/50 focus:ring-2 focus:ring-algoarnAqua/20 transition-all"
//               />
//               <button className="px-8 py-3 rounded-full bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90 font-semibold text-white shadow-lg shadow-algoarnAqua/30 transform hover:scale-105 transition-all">
//                 Subscribe
//               </button>
//             </div>

//             <p className="text-xs text-white/50 mt-4">
//               No spam. Unsubscribe anytime. Privacy-first commitment.
//             </p>
//           </FadeInUp>
//         </div>
//       </SectionReveal>
//     </div>
//   );
// }


"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { NeonCard } from "@/components/ui/neon-card";

// Deterministic particles
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

import { useBlog } from "@/contexts/BlogContext";

const categories = [
  "All",
  "Product Insights",
  "Technical",
  "Thought Leadership",
  "Industry Trends",
  "Case Study",
];

export default function BlogPage() {
  const { getPublishedPosts } = useBlog();
  const blogPosts = getPublishedPosts();

  return (
    <div className="space-y-20 md:space-y-24">
      {/* HERO SECTION */}
      <SectionReveal className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-b border-algoarnAqua/30 -mx-6 px-6 md:-mx-8 md:px-8 -mt-11">
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
        <div className="relative z-10 w-full max-w-7xl mx-auto py-16 md:py-20 text-center space-y-8">
          <FadeInUp delay={0.1}>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-algoarnAqua/10 border border-algoarnAqua/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-algoarnAqua rounded-full animate-ping" />
              <span className="text-xs md:text-sm font-medium text-algoarnAqua tracking-[0.2em] uppercase">
                Insights & Updates
              </span>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              Algoarn{" "}
              <span className="text-algoarnAqua">Insights</span>
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              Thought leadership on AI in education, technical deep dives, and
              practical insights from building privacy-first intelligence
              systems.
            </p>
          </FadeInUp>
        </div>
      </SectionReveal>

      {/* CATEGORY FILTER */}
      <SectionReveal>
        <FadeInUp>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === "All"
                    ? "bg-gradient-to-r from-algoarnAqua to-algoarnBlue text-white shadow-lg shadow-algoarnAqua/30"
                    : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white hover:border-algoarnAqua/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeInUp>
      </SectionReveal>

      {/* BLOG POSTS GRID */}
      <SectionReveal className="space-y-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <FadeInUp key={post.id} delay={0.1 * (index % 3)}>
              <Link href={`/blog/${post.id}`}>
                <NeonCard className="p-8 group hover:scale-[1.03] transition-all duration-500 h-full flex flex-col cursor-pointer">
                  <div className="space-y-6 flex-1 flex flex-col">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-algoarnAqua/10 text-algoarnAqua border border-algoarnAqua/30">
                        {post.category}
                      </span>
                      <span className="text-xs text-white/50">
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-algoarnAqua transition-colors leading-snug flex-1">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm md:text-base text-white/70 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <span className="text-xs text-white/50">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="text-sm text-algoarnAqua group-hover:translate-x-1 transition-transform">
                        Read more →
                      </span>
                    </div>
                  </div>
                </NeonCard>
              </Link>
            </FadeInUp>
          ))}
        </div>
      </SectionReveal>

      {/* PAGINATION (Placeholder) */}
      <SectionReveal>
        <FadeInUp>
          <div className="flex justify-center gap-2">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 rounded-lg flex items-center justify-center font-semibold transition-all duration-300 ${
                  page === 1
                    ? "bg-gradient-to-r from-algoarnAqua to-algoarnBlue text-white shadow-lg shadow-algoarnAqua/30"
                    : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:border-algoarnAqua/30"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </FadeInUp>
      </SectionReveal>

      {/* NEWSLETTER SUBSCRIBE CTA */}
      <SectionReveal className="relative overflow-hidden bg-gradient-to-br from-slate-800/80 to-slate-900/90 border-y border-algoarnAqua/40 -mx-6 px-6 md:-mx-8 md:px-8">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-40 w-[900px] h-[900px] bg-algoarnAqua/15 blur-3xl rounded-full animate-pulse-slow" />
          <div className="absolute bottom-1/4 -right-40 w-[900px] h-[900px] bg-algoarnBlue/20 blur-3xl rounded-full animate-pulse-slow" />
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto py-16 md:py-20 text-center space-y-8">
          <FadeInUp>
            <div className="text-4xl md:text-5xl mb-4">📬</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with{" "}
              <span className="text-algoarnAqua">AI Insights</span>
            </h2>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
              Get the latest articles on AI in education, product updates, and
              technical insights delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-algoarnAqua/50 focus:ring-2 focus:ring-algoarnAqua/20 transition-all"
              />
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90 font-semibold text-white shadow-lg shadow-algoarnAqua/30 transform hover:scale-105 transition-all">
                Subscribe
              </button>
            </div>

            <p className="text-xs text-white/50 mt-4">
              No spam. Unsubscribe anytime. Privacy-first commitment.
            </p>
          </FadeInUp>
        </div>
      </SectionReveal>
    </div>
  );
}