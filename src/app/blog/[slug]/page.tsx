"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Share2,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap
} from "lucide-react";
import { ReactNode, useState } from "react";

/* ----------------------------------
   NeonCard Component (from contact page)
----------------------------------- */
// const NeonCard = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
//   <div className={`relative bg-gradient-to-br from-gray-900 to-slate-950 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-cyan-500/10 ${className}`}>
//     <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//     <div className="relative">
//       {children}
//     </div>
//   </div>
// );
const NeonCard = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className="relative group">
    {/* ALWAYS-ON subtle glow + stronger on hover */}
    <div
      className="
        pointer-events-none
        absolute -inset-8
        bg-gradient-to-r from-cyan-500/20 via-blue-500/15 to-indigo-500/20
        blur-[120px]
        opacity-60
        group-hover:opacity-100
        transition-opacity duration-500
      "
    />

    {/* CARD */}
    <div
      className={`
        relative rounded-[40px]
        bg-gradient-to-b from-[#16283F] via-[#0E2036] to-[#081426]
        border border-white/10
        shadow-[0_30px_90px_rgba(2,6,23,0.20)]
        transition-transform duration-500
        group-hover:-translate-y-2
        ${className}
      `}
    >
      {children}
    </div>
  </div>
);


/* ----------------------------------
   Button Component
----------------------------------- */
interface ButtonProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "lg";
  variant?: "default" | "outline";
  [key: string]: any;
}

const Button = ({ 
  children, 
  className = "", 
  size = "default",
  variant = "default",
  ...props 
}: ButtonProps) => {
  const sizeClasses = {
    default: "px-6 py-3",
    lg: "px-8 py-4"
  };
  
  const variantClasses = {
    default: "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600",
    outline: "border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
  };
  
  return (
    <button 
      className={`font-semibold rounded-full transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

/* ----------------------------------
   Markdown Renderer
----------------------------------- */
const MarkdownContent = ({ content }: { content: string }) => {
  const lines = content.trim().split("\n");
  const elements: ReactNode[] = [];
  let currentParagraph: string[] = [];
  let listItems: string[] = [];
  let inList = false;

  const processInlineFormatting = (text: string) => {
    let processed = text;
    processed = processed.replace(
      /\*\*(.*?)\*\*/g,
      '<strong class="font-bold text-gray-900">$1</strong>'
    );
    processed = processed.replace(
      /\[(.*?)\]\((.*?)\)/g,
      '<a href="$2" class="text-cyan-600 hover:text-cyan-700 underline transition-colors font-medium">$1</a>'
    );
    processed = processed.replace(
      /`(.*?)`/g,
      '<code class="px-2 py-1 bg-cyan-50 text-cyan-700 rounded text-sm font-mono border border-cyan-200">$1</code>'
    );
    return processed;
  };

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      elements.push(
        <p
          key={elements.length}
          className="text-xl leading-7 max-w-3xl mx-auto text-black mb-6"
          dangerouslySetInnerHTML={{
            __html: processInlineFormatting(currentParagraph.join(" ")),
          }}
        />
      );
      currentParagraph = [];
    }
  };

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={elements.length} className="space-y-3 mb-6 ml-6">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-black">
              <div className="w-2 h-2 bg-black rounded-full mt-2.5 flex-shrink-0" />
              <span
                className="text-lg"
                dangerouslySetInnerHTML={{
                  __html: processInlineFormatting(item),
                }}
              />
            </li>
          ))}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      return;
    }

    if (trimmed.startsWith("## ")) {
      flushParagraph();
      flushList();
      elements.push(
        <h2
          key={elements.length}
          className="text-3xl md:text-4xl font-bold text-gray-900 mt-12 mb-6"
        >
          {trimmed.slice(3)}
        </h2>
      );
      return;
    }

    if (trimmed.startsWith("### ")) {
      flushParagraph();
      flushList();
      elements.push(
        <h3
          key={elements.length}
          className="text-2xl md:text-3xl font-bold text-black mt-8 mb-5"
        >
          {trimmed.slice(4)}
        </h3>
      );
      return;
    }

    if (trimmed.startsWith("- ")) {
      flushParagraph();
      inList = true;
      listItems.push(trimmed.slice(2));
      return;
    }

    if (trimmed.startsWith("> ")) {
      flushParagraph();
      flushList();
      elements.push(
        <blockquote
          key={elements.length}
          className="border-l-4 border-indigo-500 pl-6 py-4 my-8 bg-indigo-50 rounded-r-2xl"
        >
          <p className="text-lg text-gray-800 italic leading-relaxed font-medium">
            {trimmed.slice(2)}
          </p>
        </blockquote>
      );
      return;
    }

    if (!inList) currentParagraph.push(trimmed);
  });

  flushParagraph();
  flushList();

  return <div>{elements}</div>;
};

/* ----------------------------------
   BLOG DATA
----------------------------------- */
const blogPost = {
  id: "suca-academic-decision-making",
  title: "How SUCA Changes Academic Decision-Making",
  excerpt:
    "Discover how SUCA transforms scattered institutional data into actionable intelligence, enabling leadership to move from reactive management to proactive, data-driven academic strategy.",
  category: "Product Insights",
  date: "2024-11-15",
  readTime: "6 min read",
  author: "Algoarn Team",
  content: `
Academic institutions generate vast amounts of data—attendance records, assessment scores, faculty feedback, placement statistics, and engagement metrics. Yet most institutions struggle to convert this data deluge into clear, actionable intelligence.

## The Problem with Traditional Analytics
Traditional academic dashboards present numbers and charts, but they don't answer the critical questions:

- Which students are at risk of underperforming?
- What interventions will have the highest impact?
- How do we optimize resource allocation across departments?
- Are we on track for accreditation milestones like NAAC and NBA?

Leadership teams are left to manually interpret disparate reports, often making decisions based on incomplete or outdated information.

## From Data to Intelligence: The SUCA Approach
SUCA (Smart University & College Analytics) fundamentally reimagines how institutions work with their academic data. Instead of just visualizing information, SUCA provides:

### 1. Predictive Risk Scoring
Machine learning models analyze patterns across attendance, assessment performance, engagement metrics, and historical data to identify students who may need intervention—before they fall behind.

### 2. Outcome-Based Intelligence
SUCA doesn't just show what happened; it predicts what's likely to happen next.

### 3. Privacy-First Architecture
Unlike generic analytics platforms, SUCA is built with institutional privacy as a core principle.

> Privacy isn't optional—it's foundational. Every architecture decision we make prioritizes data sovereignty.

## Real-World Impact
Institutions using SUCA report:

- 30% reduction in student dropouts
- 40% faster accreditation preparation
- 25% improvement in placement outcomes
- 50% less time spent on manual report generation

With SUCA, academic decision-making transforms from:
 
**Reactive → Proactive**  
Instead of responding to failures, institutions anticipate challenges.
 
**Gut-Feel → Data-Driven**  
Decisions backed by predictive models and evidence, not assumptions.
 
**Fragmented → Unified**  
One intelligence layer across academics, administration, and outcomes.
 
**Complex → Clear**  
AI surfaces insights in plain language, no technical expertise required.
 
## Looking Ahead
 
As AI continues to evolve, the gap between institutions that leverage intelligence systems and those that don't will only widen. SUCA represents the future of academic operations—where data serves decision-makers, not the other way around.
 

Ready to see how SUCA can transform your institution's decision-making? [Contact us](/contact)
`,
};

/* ----------------------------------
   RELATED POSTS
----------------------------------- */
const relatedPosts = [
  {
    id: "privacy-first-ai-institutions",
    title: "Designing Privacy-First AI for Institutions",
    category: "Technical",
    date: "2024-11-10",
    icon: "🔒"
  },
  {
    id: "dashboards-to-intelligence",
    title: "From Dashboards to Intelligence: The Algoarn Approach",
    category: "Thought Leadership",
    date: "2024-11-05",
    icon: "📊"
  },
  {
    id: "predictive-ai-student-success",
    title: "Predictive AI for Student Success",
    category: "Technical",
    date: "2024-10-12",
    icon: "🎓"
  },
];

const stats = [
  { value: "30%", label: "Reduction in Dropouts", icon: TrendingUp },
  { value: "40%", label: "Faster Accreditation", icon: Target },
  { value: "25%", label: "Better Placements", icon: Users },
  { value: "50%", label: "Time Saved", icon: Zap },
];

/* ----------------------------------
   PAGE
----------------------------------- */
export default function BlogPostPage() {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleShare = (platform: string) => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = blogPost.title;
   
    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
          "_blank"
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
          "_blank"
        );
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
        break;
    }
  };

  return (
    <main className="pt-20 pb-15 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section - LIGHT THEME */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black text-indigo-500 text-sm font-semibold mb-8"
          >
            <Sparkles className="w-4 h-4" />
            {blogPost.category}
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
            {blogPost.title}
          </h1>

          <p className="text-xl leading-7 max-w-3xl mx-auto text-black mb-8 pb-15">
            {blogPost.excerpt}
          </p>

          {/* Share Buttons - LIGHT THEME */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 justify-center pt-6 border-t border-gray-200"
          >
            <span className="text-sm text-black font-semibold flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Share:
            </span>
            <button
              onClick={() => handleShare("twitter")}
              className="p-2.5 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 hover:border-cyan-300 transition-all duration-300 shadow-sm"
              aria-label="Share on Twitter"
            >
              <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </button>
            <button
              onClick={() => handleShare("linkedin")}
              className="p-2.5 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 hover:border-cyan-300 transition-all duration-300 shadow-sm"
              aria-label="Share on LinkedIn"
            >
              <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </button>
            <button
              onClick={() => handleShare("copy")}
              className="p-2.5 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 hover:border-cyan-300 transition-all duration-300 shadow-sm relative"
              aria-label="Copy link"
            >
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              {copySuccess && (
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-cyan-500 text-white text-xs rounded-lg whitespace-nowrap shadow-lg">
                  Copied!
                </span>
              )}
            </button>
          </motion.div>
        </motion.div>

        {/* Stats Section - NEON CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <NeonCard className="text-center p-8 rounded-2xl">
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/20">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white text-sm font-medium">
                  {stat.label}
                </div>
              </NeonCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Blog Content - LIGHT THEME */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200">
            <MarkdownContent content={blogPost.content} />
          </div>
        </motion.div>

        {/* Author - NEON CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <NeonCard className="rounded-2xl p-8 group">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-3xl text-white shadow-lg shadow-cyan-500/30">
                👥
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-2xl font-bold text-white">
                  {blogPost.author}
                </h3>
                <p className="text-base text-white leading-relaxed">
                  The Algoarn team brings together expertise in AI, machine
                  learning, and educational technology to build privacy-first
                  intelligence systems for institutions worldwide.
                </p>
              </div>
            </div>
          </NeonCard>
        </motion.div>

        {/* Related Posts Header - LIGHT THEME */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Related Articles
          </h2>
          <p className="text-xl text-black max-w-2xl mx-auto">
            Explore more insights on AI-powered education solutions
          </p>
        </motion.div>

        {/* Related Posts - NEON CARDS */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {relatedPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <NeonCard className="p-8 h-full rounded-2xl">
                <div className="text-4xl mb-4">{post.icon}</div>
                <span className="inline-flex px-3 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug mb-4">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-white/50">
                  <span className="font-medium">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric"
                    })}
                  </span>
                  <span className="text-cyan-400 font-semibold group-hover:translate-x-2 transition-transform flex items-center gap-1">
                    Read <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </NeonCard>
            </motion.div>
          ))}
        </div>

        {/* CTA - NEON CARD */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <NeonCard className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl shadow-cyan-500/20 group">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Want to Learn More About SUCA?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              See how SUCA can transform your institution's decision-making with
              AI-powered academic intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
               <Button
                size="lg"
                variant="outline"
                className="px-10 py-5 text-lg font-bold border-2 border-white text-white hover:bg-white/20 transform hover:scale-105 transition-all"
              >
                  Book a Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-10 py-5 text-lg font-bold border-2 border-white text-white hover:bg-white/20 transform hover:scale-105 transition-all"
              >
                Explore SUCA
              </Button>
            </div>
          </NeonCard>
        </motion.div> */}

        {/* Back to Blog - LIGHT THEME */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="text-center"
        >
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-cyan-550 hover:text-cyan-600 transition-colors font-semibold text-lg group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span className="text-black">Back to all articles</span>
          </a>
        </motion.div>

      </div>
    </main>
  );
}