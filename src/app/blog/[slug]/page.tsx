// // // "use client";

// // // import { motion } from "framer-motion";
// // // import {
// // //   ArrowRight,
// // //   Share2,
// // //   Sparkles,
// // //   Target,
// // //   TrendingUp,
// // //   Users,
// // //   Zap,
// // // } from "lucide-react";
// // // import { ReactNode, useEffect, useMemo, useState } from "react";
// // // import Link from "next/link";
// // // import { useParams } from "next/navigation";
// // // import { supabase } from "@/lib/supabase"; // ✅ make sure you have supabase client here

// // // /* ----------------------------------
// // //    Types
// // // ----------------------------------- */
// // // type BlogRow = {
// // //   id: string;
// // //   title: string;
// // //   slug: string;
// // //   excerpt: string;
// // //   content: string;
// // //   category: string;
// // //   author: string;
// // //   date: string; // YYYY-MM-DD
// // //   read_time: string; // e.g. "6 min read"
// // //   published: boolean;
// // // };

// // // /* ----------------------------------
// // //    NeonCard
// // // ----------------------------------- */
// // // const NeonCard = ({
// // //   children,
// // //   className = "",
// // // }: {
// // //   children: ReactNode;
// // //   className?: string;
// // // }) => (
// // //   <div className="relative group">
// // //     <div
// // //       className="
// // //         pointer-events-none
// // //         absolute -inset-8
// // //         bg-gradient-to-r from-cyan-500/20 via-blue-500/15 to-indigo-500/20
// // //         blur-[120px]
// // //         opacity-60
// // //         group-hover:opacity-100
// // //         transition-opacity duration-500
// // //       "
// // //     />
// // //     <div
// // //       className={`
// // //         relative rounded-[40px]
// // //         bg-gradient-to-b from-[#16283F] via-[#0E2036] to-[#081426]
// // //         border border-white/10
// // //         shadow-[0_30px_90px_rgba(2,6,23,0.20)]
// // //         transition-transform duration-500
// // //         group-hover:-translate-y-2
// // //         ${className}
// // //       `}
// // //     >
// // //       {children}
// // //     </div>
// // //   </div>
// // // );

// // // /* ----------------------------------
// // //    Markdown Renderer
// // // ----------------------------------- */
// // // const MarkdownContent = ({ content }: { content: string }) => {
// // //   const lines = content.trim().split("\n");
// // //   const elements: ReactNode[] = [];
// // //   let currentParagraph: string[] = [];
// // //   let listItems: string[] = [];
// // //   let inList = false;

// // //   const processInlineFormatting = (text: string) => {
// // //     let processed = text;

// // //     // **bold**
// // //     processed = processed.replace(
// // //       /\*\*(.*?)\*\*/g,
// // //       '<strong class="font-bold text-gray-900">$1</strong>'
// // //     );

// // //     // [link](url)
// // //     processed = processed.replace(
// // //       /\[(.*?)\]\((.*?)\)/g,
// // //       '<a href="$2" class="text-cyan-600 hover:text-cyan-700 underline transition-colors font-medium">$1</a>'
// // //     );

// // //     // `code`
// // //     processed = processed.replace(
// // //       /`(.*?)`/g,
// // //       '<code class="px-2 py-1 bg-cyan-50 text-cyan-700 rounded text-sm font-mono border border-cyan-200">$1</code>'
// // //     );

// // //     return processed;
// // //   };

// // //   const flushParagraph = () => {
// // //     if (currentParagraph.length > 0) {
// // //       elements.push(
// // //         <p
// // //           key={elements.length}
// // //           className="text-xl leading-7 max-w-3xl mx-auto text-black mb-6"
// // //           dangerouslySetInnerHTML={{
// // //             __html: processInlineFormatting(currentParagraph.join(" ")),
// // //           }}
// // //         />
// // //       );
// // //       currentParagraph = [];
// // //     }
// // //   };

// // //   const flushList = () => {
// // //     if (listItems.length > 0) {
// // //       elements.push(
// // //         <ul key={elements.length} className="space-y-3 mb-6 ml-6">
// // //           {listItems.map((item, idx) => (
// // //             <li key={idx} className="flex items-start gap-3 text-black">
// // //               <div className="w-2 h-2 bg-black rounded-full mt-2.5 flex-shrink-0" />
// // //               <span
// // //                 className="text-lg"
// // //                 dangerouslySetInnerHTML={{
// // //                   __html: processInlineFormatting(item),
// // //                 }}
// // //               />
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       );
// // //       listItems = [];
// // //       inList = false;
// // //     }
// // //   };

// // //   lines.forEach((line) => {
// // //     const trimmed = line.trim();

// // //     if (!trimmed) {
// // //       flushParagraph();
// // //       flushList();
// // //       return;
// // //     }

// // //     if (trimmed.startsWith("## ")) {
// // //       flushParagraph();
// // //       flushList();
// // //       elements.push(
// // //         <h2
// // //           key={elements.length}
// // //           className="text-3xl md:text-4xl font-bold text-gray-900 mt-12 mb-6"
// // //         >
// // //           {trimmed.slice(3)}
// // //         </h2>
// // //       );
// // //       return;
// // //     }

// // //     if (trimmed.startsWith("### ")) {
// // //       flushParagraph();
// // //       flushList();
// // //       elements.push(
// // //         <h3
// // //           key={elements.length}
// // //           className="text-2xl md:text-3xl font-bold text-black mt-8 mb-5"
// // //         >
// // //           {trimmed.slice(4)}
// // //         </h3>
// // //       );
// // //       return;
// // //     }

// // //     if (trimmed.startsWith("- ")) {
// // //       flushParagraph();
// // //       inList = true;
// // //       listItems.push(trimmed.slice(2));
// // //       return;
// // //     }

// // //     if (trimmed.startsWith("> ")) {
// // //       flushParagraph();
// // //       flushList();
// // //       elements.push(
// // //         <blockquote
// // //           key={elements.length}
// // //           className="border-l-4 border-indigo-500 pl-6 py-4 my-8 bg-indigo-50 rounded-r-2xl"
// // //         >
// // //           <p className="text-lg text-gray-800 italic leading-relaxed font-medium">
// // //             {trimmed.slice(2)}
// // //           </p>
// // //         </blockquote>
// // //       );
// // //       return;
// // //     }

// // //     if (!inList) currentParagraph.push(trimmed);
// // //   });

// // //   flushParagraph();
// // //   flushList();

// // //   return <div>{elements}</div>;
// // // };

// // // /* ----------------------------------
// // //    Page
// // // ----------------------------------- */
// // // export default function BlogPostPage() {
// // //   const params = useParams();
// // //   const slug = String(params?.slug || "");

// // //   const [post, setPost] = useState<BlogRow | null>(null);
// // //   const [relatedPosts, setRelatedPosts] = useState<BlogRow[]>([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [copySuccess, setCopySuccess] = useState(false);

// // //   const stats = useMemo(
// // //     () => [
// // //       { value: "30%", label: "Reduction in Dropouts", icon: TrendingUp },
// // //       { value: "40%", label: "Faster Accreditation", icon: Target },
// // //       { value: "25%", label: "Better Placements", icon: Users },
// // //       { value: "50%", label: "Time Saved", icon: Zap },
// // //     ],
// // //     []
// // //   );

// // //   useEffect(() => {
// // //     async function fetchPost() {
// // //       setLoading(true);

// // //       // ✅ Get post by slug (only published)
// // //       const { data, error } = await supabase
// // //         .from("blogs")
// // //         .select("*")
// // //         .eq("slug", slug)
// // //         .eq("published", true)
// // //         .single();

// // //       if (error) {
// // //         console.error("BLOG FETCH ERROR:", error);
// // //         setPost(null);
// // //         setLoading(false);
// // //         return;
// // //       }

// // //       setPost(data as BlogRow);

// // //       // ✅ Related posts: same category, not same slug
// // //       const { data: rel } = await supabase
// // //         .from("blogs")
// // //         .select("*")
// // //         .eq("published", true)
// // //         .eq("category", (data as BlogRow).category)
// // //         .neq("slug", slug)
// // //         .order("date", { ascending: false })
// // //         .limit(3);

// // //       setRelatedPosts((rel as BlogRow[]) || []);
// // //       setLoading(false);
// // //     }

// // //     if (slug) fetchPost();
// // //   }, [slug]);

// // //   const handleShare = (platform: string) => {
// // //     const url = typeof window !== "undefined" ? window.location.href : "";
// // //     const text = post?.title || "Algoarn Blog";

// // //     switch (platform) {
// // //       case "twitter":
// // //         window.open(
// // //           `https://twitter.com/intent/tweet?text=${encodeURIComponent(
// // //             text
// // //           )}&url=${encodeURIComponent(url)}`,
// // //           "_blank"
// // //         );
// // //         break;
// // //       case "linkedin":
// // //         window.open(
// // //           `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
// // //             url
// // //           )}`,
// // //           "_blank"
// // //         );
// // //         break;
// // //       case "copy":
// // //         navigator.clipboard.writeText(url);
// // //         setCopySuccess(true);
// // //         setTimeout(() => setCopySuccess(false), 2000);
// // //         break;
// // //     }
// // //   };

// // //   if (loading) {
// // //     return (
// // //       <main className="pt-28 pb-24 bg-white">
// // //         <div className="max-w-4xl mx-auto px-6 text-center text-black">
// // //           Loading…
// // //         </div>
// // //       </main>
// // //     );
// // //   }

// // //   if (!post) {
// // //     return (
// // //       <main className="pt-28 pb-24 bg-white">
// // //         <div className="max-w-4xl mx-auto px-6 text-center text-black space-y-4">
// // //           <h1 className="text-3xl font-bold">Post not found</h1>
// // //           <p className="text-lg">
// // //             This post may be unpublished or the slug is wrong.
// // //           </p>
// // //           <Link className="text-cyan-700 underline" href="/blog">
// // //             Back to blog
// // //           </Link>
// // //         </div>
// // //       </main>
// // //     );
// // //   }

// // //   return (
// // //     <main className="pt-20 pb-15 bg-white">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //         {/* Hero */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 20 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.6 }}
// // //           className="text-center max-w-4xl mx-auto mb-16"
// // //         >
// // //           <motion.div
// // //             initial={{ opacity: 0, scale: 0.9 }}
// // //             animate={{ opacity: 1, scale: 1 }}
// // //             transition={{ delay: 0.1 }}
// // //             className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black text-indigo-500 text-sm font-semibold mb-8"
// // //           >
// // //             <Sparkles className="w-4 h-4" />
// // //             {post.category}
// // //           </motion.div>

// // //           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
// // //             {post.title}
// // //           </h1>

// // //           <p className="text-xl leading-7 max-w-3xl mx-auto text-black mb-8 pb-15">
// // //             {post.excerpt}
// // //           </p>

// // //           {/* Share */}
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 10 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ delay: 0.3 }}
// // //             className="flex items-center gap-3 justify-center pt-6 border-t border-gray-200"
// // //           >
// // //             <span className="text-sm text-black font-semibold flex items-center gap-2">
// // //               <Share2 className="w-4 h-4" />
// // //               Share:
// // //             </span>

// // //             <button
// // //               onClick={() => handleShare("twitter")}
// // //               className="p-2.5 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 hover:border-cyan-300 transition-all duration-300 shadow-sm"
// // //               aria-label="Share on Twitter"
// // //             >
// // //               <svg
// // //                 className="w-5 h-5 text-black"
// // //                 fill="currentColor"
// // //                 viewBox="0 0 24 24"
// // //               >
// // //                 <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
// // //               </svg>
// // //             </button>

// // //             <button
// // //               onClick={() => handleShare("linkedin")}
// // //               className="p-2.5 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 hover:border-cyan-300 transition-all duration-300 shadow-sm"
// // //               aria-label="Share on LinkedIn"
// // //             >
// // //               <svg
// // //                 className="w-5 h-5 text-black"
// // //                 fill="currentColor"
// // //                 viewBox="0 0 24 24"
// // //               >
// // //                 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
// // //               </svg>
// // //             </button>

// // //             <button
// // //               onClick={() => handleShare("copy")}
// // //               className="p-2.5 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 hover:border-cyan-300 transition-all duration-300 shadow-sm relative"
// // //               aria-label="Copy link"
// // //             >
// // //               <svg
// // //                 className="w-5 h-5 text-black"
// // //                 fill="none"
// // //                 stroke="currentColor"
// // //                 viewBox="0 0 24 24"
// // //               >
// // //                 <path
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                   strokeWidth={2}
// // //                   d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
// // //                 />
// // //               </svg>

// // //               {copySuccess && (
// // //                 <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-cyan-500 text-white text-xs rounded-lg whitespace-nowrap shadow-lg">
// // //                   Copied!
// // //                 </span>
// // //               )}
// // //             </button>
// // //           </motion.div>
// // //         </motion.div>

// // //         {/* Stats */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 30 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 0.4, duration: 0.6 }}
// // //           className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
// // //         >
// // //           {stats.map((stat, index) => (
// // //             <motion.div
// // //               key={stat.label}
// // //               initial={{ opacity: 0, scale: 0.9 }}
// // //               animate={{ opacity: 1, scale: 1 }}
// // //               transition={{ delay: 0.5 + index * 0.1 }}
// // //               whileHover={{ scale: 1.05 }}
// // //               className="group"
// // //             >
// // //               <NeonCard className="text-center p-8 rounded-2xl">
// // //                 <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/20">
// // //                   <stat.icon className="w-7 h-7 text-white" />
// // //                 </div>
// // //                 <div className="text-4xl font-bold text-white mb-2">
// // //                   {stat.value}
// // //                 </div>
// // //                 <div className="text-white text-sm font-medium">
// // //                   {stat.label}
// // //                 </div>
// // //               </NeonCard>
// // //             </motion.div>
// // //           ))}
// // //         </motion.div>

// // //         {/* Content */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 30 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 0.6, duration: 0.6 }}
// // //           className="max-w-4xl mx-auto mb-16"
// // //         >
// // //           <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200">
// // //             <MarkdownContent content={post.content} />
// // //           </div>
// // //         </motion.div>

// // //         {/* Author */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 30 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 0.7, duration: 0.6 }}
// // //           className="max-w-4xl mx-auto mb-16"
// // //         >
// // //           <NeonCard className="rounded-2xl p-8 group">
// // //             <div className="flex flex-col md:flex-row gap-6 items-start">
// // //               <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-3xl text-white shadow-lg shadow-cyan-500/30">
// // //                 👥
// // //               </div>
// // //               <div className="flex-1 space-y-3">
// // //                 <h3 className="text-2xl font-bold text-white">{post.author}</h3>
// // //                 <p className="text-base text-white leading-relaxed">
// // //                   The Algoarn team brings together expertise in AI, machine
// // //                   learning, and educational technology to build privacy-first
// // //                   intelligence systems for institutions worldwide.
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           </NeonCard>
// // //         </motion.div>

// // //         {/* Related */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 30 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 0.8, duration: 0.6 }}
// // //           className="text-center mb-12"
// // //         >
// // //           <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
// // //             Related Articles
// // //           </h2>
// // //           <p className="text-xl text-black max-w-2xl mx-auto">
// // //             Explore more insights on AI-powered education solutions
// // //           </p>
// // //         </motion.div>

// // //         <div className="grid gap-8 md:grid-cols-3 mb-16">
// // //           {relatedPosts.map((p, index) => (
// // //             <motion.div
// // //               key={p.id}
// // //               initial={{ opacity: 0, y: 30 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
// // //               whileHover={{ y: -8, scale: 1.02 }}
// // //               className="group cursor-pointer"
// // //             >
// // //               <Link href={`/blog/${p.slug}`}>
// // //                 <NeonCard className="p-8 h-full rounded-2xl">
// // //                   <span className="inline-flex px-3 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
// // //                     {p.category}
// // //                   </span>
// // //                   <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug mb-4">
// // //                     {p.title}
// // //                   </h3>
// // //                   <div className="flex items-center justify-between text-sm text-white/50">
// // //                     <span className="font-medium">
// // //                       {new Date(p.date).toLocaleDateString("en-US", {
// // //                         month: "short",
// // //                         day: "numeric",
// // //                         year: "numeric",
// // //                       })}
// // //                     </span>
// // //                     <span className="text-cyan-400 font-semibold group-hover:translate-x-2 transition-transform flex items-center gap-1">
// // //                       Read <ArrowRight className="w-4 h-4" />
// // //                     </span>
// // //                   </div>
// // //                 </NeonCard>
// // //               </Link>
// // //             </motion.div>
// // //           ))}
// // //         </div>

// // //         {/* Back */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 30 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 1.1, duration: 0.6 }}
// // //           className="text-center"
// // //         >
// // //           <Link
// // //             href="/blog"
// // //             className="inline-flex items-center gap-2 hover:text-cyan-600 transition-colors font-semibold text-lg group"
// // //           >
// // //             <span className="group-hover:-translate-x-1 transition-transform">
// // //               ←
// // //             </span>
// // //             <span className="text-black">Back to all articles</span>
// // //           </Link>
// // //         </motion.div>
// // //       </div>
// // //     </main>
// // //   );
// // // }

// // "use client";

// // import { useEffect, useState } from "react";
// // import Link from "next/link";
// // import { supabase } from "@/lib/supabase";

// // type BlogRow = {
// //   id: string;
// //   title: string;
// //   slug: string;
// //   excerpt: string;
// //   category: string | null;
// //   date: string | null;
// //   read_time: string | null;
// // };

// // export default function BlogListPage() {
// //   const [posts, setPosts] = useState<BlogRow[]>([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     async function fetchPosts() {
// //       setLoading(true);
// //       const { data, error } = await supabase
// //         .from("blogs")
// //         .select("id,title,slug,excerpt,category,date,read_time,published")
// //         .eq("published", true)
// //         .order("date", { ascending: false });

// //       if (error) console.error("BLOG LIST ERROR:", error);
// //       setPosts((data as any) || []);
// //       setLoading(false);
// //     }

// //     fetchPosts();
// //   }, []);

// //   if (loading) return <div className="pt-24 text-center">Loading…</div>;

// //   return (
// //     <main className="pt-24 pb-24 bg-white">
// //       <div className="max-w-6xl mx-auto px-6">
// //         <h1 className="text-4xl font-bold text-black mb-8">Blog</h1>

// //         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
// //           {posts.map((p) => (
// //             <Link
// //               key={p.id}
// //               href={`/blog/${p.slug}`}   // ✅ IMPORTANT
// //               className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition"
// //             >
// //               <div className="text-sm text-black/60 mb-2">
// //                 {p.category || "General"} {p.read_time ? `• ${p.read_time}` : ""}
// //               </div>
// //               <h2 className="text-2xl font-bold text-black mb-2">{p.title}</h2>
// //               <p className="text-black/70 line-clamp-3">{p.excerpt}</p>
// //             </Link>
// //           ))}
// //         </div>
// //       </div>
// //     </main>
// //   );
// // }

// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { useParams } from "next/navigation";
// import { supabase } from "@/lib/supabase";

// type BlogRow = {
//   id: string;
//   title: string;
//   slug: string;
//   excerpt: string;
//   content: string;
//   category: string | null;
//   author: string | null;
//   date: string | null;
//   read_time: string | null;
//   published: boolean;
// };

// export default function BlogPostPage() {
//   const params = useParams();
//   const slug = String(params?.slug || "");

//   const [post, setPost] = useState<BlogRow | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchPost() {
//       setLoading(true);

//       const { data, error } = await supabase
//         .from("blogs")
//         .select("*")
//         .eq("slug", slug)
//         .eq("published", true)
//         .maybeSingle();

//       if (error) {
//         console.error("BLOG FETCH ERROR:", error);
//         setPost(null);
//         setLoading(false);
//         return;
//       }

//       setPost((data as BlogRow) || null);
//       setLoading(false);
//     }

//     if (slug) fetchPost();
//   }, [slug]);

//   if (loading) {
//     return (
//       <main className="pt-28 pb-24 bg-white">
//         <div className="max-w-4xl mx-auto px-6 text-black">Loading…</div>
//       </main>
//     );
//   }

//   if (!post) {
//     return (
//       <main className="pt-28 pb-24 bg-white">
//         <div className="max-w-4xl mx-auto px-6 text-center text-black space-y-4">
//           <h1 className="text-3xl font-bold">Post not found</h1>
//           <p>This post may be unpublished or the slug is wrong.</p>
//           <Link href="/blog" className="text-cyan-700 underline">
//             Back to blog
//           </Link>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="pt-24 pb-24 bg-white">
//       <div className="max-w-4xl mx-auto px-6">
//         <Link href="/blog" className="text-cyan-700 underline">
//           ← Back
//         </Link>

//         <div className="mt-6 text-sm text-black/60">
//           {(post.category || "General") + (post.read_time ? ` • ${post.read_time}` : "")}
//         </div>

//         <h1 className="text-4xl font-bold text-black mt-2">{post.title}</h1>

//         <div className="text-sm text-black/60 mt-2">
//           {post.author ? `By ${post.author}` : ""}
//           {post.date ? ` • ${new Date(post.date).toDateString()}` : ""}
//         </div>

//         <p className="text-xl text-black mt-6">{post.excerpt}</p>

//         <div className="mt-10 whitespace-pre-wrap text-black leading-7">
//           {post.content}
//         </div>
//       </div>
//     </main>
//   );
// }



"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

type BlogRow = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string | null;
  author: string | null;
  date: string | null;
  read_time: string | null;
  published: boolean;
};

function formatDateLong(date: string | null) {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = String(params?.slug || "");

  const [post, setPost] = useState<BlogRow | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      setLoading(true);

      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();

      if (error) {
        console.error("BLOG FETCH ERROR:", error);
        setPost(null);
        setLoading(false);
        return;
      }

      setPost((data as BlogRow) || null);
      setLoading(false);
    }

    if (slug) fetchPost();
  }, [slug]);

  const meta = useMemo(() => {
    if (!post) return { pill: "", byline: "" };

    const pillParts = [
      post.category || "General",
      post.read_time ? post.read_time : null,
    ].filter(Boolean) as string[];

    const bylineParts = [
      post.author ? `By ${post.author}` : null,
      post.date ? formatDateLong(post.date) : null,
    ].filter(Boolean) as string[];

    return {
      pill: pillParts.join(" • "),
      byline: bylineParts.join(" • "),
    };
  }, [post]);

  if (loading) {
    return (
      <main className="bg-white pt-24 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="animate-pulse space-y-6">
            <div className="h-5 w-28 rounded bg-neutral-100" />
            <div className="h-6 w-64 rounded bg-neutral-100" />
            <div className="h-12 w-full rounded bg-neutral-100" />
            <div className="h-5 w-2/3 rounded bg-neutral-100" />
            <div className="space-y-3 pt-6">
              <div className="h-4 w-full rounded bg-neutral-100" />
              <div className="h-4 w-11/12 rounded bg-neutral-100" />
              <div className="h-4 w-10/12 rounded bg-neutral-100" />
              <div className="h-4 w-9/12 rounded bg-neutral-100" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="bg-white pt-24 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-2xl border border-neutral-200 p-10 text-center">
            <h1 className="text-3xl font-bold text-black">Post not found</h1>
            <p className="mt-3 text-sm text-neutral-600">
              This post may be unpublished, deleted, or the URL slug is wrong.
            </p>
            <Link
              href="/blog"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90"
            >
              ← Back to blog
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white pt-24 pb-24">
      <article className="max-w-4xl mx-auto px-6">
        {/* Back link */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-black"
          >
            <span aria-hidden="true">←</span> Back to blog
          </Link>
        </div>

        {/* Meta */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-800">
            {post.category || "General"}
          </span>

          {post.read_time && (
            <span className="text-xs text-neutral-500">{post.read_time}</span>
          )}
        </div>

        {/* Title */}
        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-black leading-tight">
          {post.title}
        </h1>

        {/* Byline */}
        {(post.author || post.date) && (
          <div className="mt-4 text-sm text-neutral-600">{meta.byline}</div>
        )}

        {/* Excerpt */}
        {post.excerpt && (
          <p className="mt-8 text-lg md:text-xl leading-relaxed text-neutral-800">
            {post.excerpt}
          </p>
        )}

        {/* Divider */}
        <div className="mt-10 h-px w-full bg-neutral-200" />

        {/* Content */}
        <div className="prose prose-neutral max-w-none mt-10">
          {/* If your content is plain text, this will render cleanly */}
          <div className="whitespace-pre-wrap leading-7 text-neutral-900">
            {post.content}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-14 rounded-2xl border border-neutral-200 p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-semibold text-black">
                Want more like this?
              </div>
              <div className="mt-1 text-sm text-neutral-600">
                Browse our latest articles and product updates.
              </div>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90"
            >
              Explore the blog →
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
