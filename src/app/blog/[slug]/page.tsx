"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { NeonCard } from "@/components/ui/neon-card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useBlog } from "@/contexts/BlogContext";
import { useParams } from "next/navigation";

// Animation helpers
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

// Simple markdown parser component
const MarkdownContent = ({ content }: { content: string }) => {
  const lines = content.trim().split("\n");
  const elements: ReactNode[] = [];
  let currentParagraph: string[] = [];
  let listItems: string[] = [];
  let inList = false;

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(" ");
      elements.push(
        <p
          key={elements.length}
          className="text-base md:text-lg text-white/80 leading-relaxed mb-6"
          dangerouslySetInnerHTML={{ __html: processInlineFormatting(text) }}
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
            <li key={idx} className="flex items-start gap-3 text-white/80">
              <div className="w-1.5 h-1.5 bg-algoarnAqua rounded-full mt-2.5 flex-shrink-0" />
              <span
                className="text-base md:text-lg leading-relaxed"
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

  const processInlineFormatting = (text: string) => {
    let processed = text;

    // Bold text
    processed = processed.replace(
      /\*\*(.*?)\*\*/g,
      '<strong class="font-bold text-white">$1</strong>'
    );

    // Links
    processed = processed.replace(
      /\[(.*?)\]\((.*?)\)/g,
      '<a href="$2" class="text-algoarnAqua hover:text-algoarnBlue underline transition-colors">$1</a>'
    );

    // Inline code
    processed = processed.replace(
      /`(.*?)`/g,
      '<code class="px-2 py-1 bg-algoarnAqua/10 text-algoarnAqua rounded text-sm">$1</code>'
    );

    return processed;
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    // Empty line
    if (!trimmed) {
      flushParagraph();
      flushList();
      return;
    }

    // H2 heading
    if (trimmed.startsWith("## ")) {
      flushParagraph();
      flushList();
      elements.push(
        <h2
          key={elements.length}
          className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6"
        >
          {trimmed.slice(3)}
        </h2>
      );
      return;
    }

    // H3 heading
    if (trimmed.startsWith("### ")) {
      flushParagraph();
      flushList();
      elements.push(
        <h3
          key={elements.length}
          className="text-xl md:text-2xl font-bold text-algoarnAqua mt-8 mb-4"
        >
          {trimmed.slice(4)}
        </h3>
      );
      return;
    }

    // List item
    if (trimmed.startsWith("- ")) {
      flushParagraph();
      inList = true;
      listItems.push(trimmed.slice(2));
      return;
    }

    // Blockquote
    if (trimmed.startsWith("> ")) {
      flushParagraph();
      flushList();
      elements.push(
        <blockquote
          key={elements.length}
          className="border-l-4 border-algoarnAqua pl-6 py-4 my-6 bg-algoarnAqua/5 rounded-r-lg"
        >
          <p className="text-base md:text-lg text-white/90 italic leading-relaxed">
            {trimmed.slice(2)}
          </p>
        </blockquote>
      );
      return;
    }

    // Horizontal rule
    if (trimmed === "---") {
      flushParagraph();
      flushList();
      elements.push(
        <hr key={elements.length} className="border-t border-white/10 my-12" />
      );
      return;
    }

    // Code block (starts with 4 spaces or tab)
    if (line.startsWith("    ") || line.startsWith("\t")) {
      flushParagraph();
      flushList();
      elements.push(
        <pre
          key={elements.length}
          className="bg-slate-900/80 border border-algoarnAqua/20 rounded-lg p-4 mb-6 overflow-x-auto"
        >
          <code className="text-sm text-algoarnAqua">
            {line.replace(/^    |\t/, "")}
          </code>
        </pre>
      );
      return;
    }

    // Italic text (single asterisk wrapped line)
    if (
      trimmed.startsWith("*") &&
      trimmed.endsWith("*") &&
      !trimmed.startsWith("**")
    ) {
      flushParagraph();
      flushList();
      elements.push(
        <p
          key={elements.length}
          className="text-base md:text-lg text-white/70 italic leading-relaxed mb-6"
        >
          {trimmed.slice(1, -1)}
        </p>
      );
      return;
    }

    // Regular paragraph text
    if (!inList) {
      currentParagraph.push(trimmed);
    }
  });

  // Flush remaining content
  flushParagraph();
  flushList();

  return <div className="prose-custom">{elements}</div>;
};

// Mock data - Replace with actual API/database fetch
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

Machine learning models analyze patterns across attendance, assessment performance, engagement metrics, and historical data to identify students who may need intervention—**before they fall behind**.

### 2. Outcome-Based Intelligence

SUCA doesn't just show what happened; it predicts what's likely to happen next. Placement readiness scores, grade predictions, and competitive exam preparedness metrics give leadership a forward-looking view.

### 3. Privacy-First Architecture

Unlike generic analytics platforms, SUCA is built with institutional privacy as a core principle. Your data stays in your infrastructure. Your insights remain yours. No public dashboards, no data leaks.

> Privacy isn't optional—it's foundational. Every architecture decision we make prioritizes data sovereignty.

### 4. Role-Based Dashboards

Different stakeholders need different views:

- **Principals & Directors**: Institution-wide KPIs and accreditation readiness
- **HODs**: Department-level performance and faculty insights
- **TPOs**: Placement analytics and industry readiness metrics
- **Faculty**: Individual student profiles and intervention recommendations

## Real-World Impact

Institutions using SUCA report:

- **30% reduction** in student dropouts through early intervention
- **40% faster** accreditation preparation cycles
- **25% improvement** in placement outcomes
- **50% less time** spent on manual report generation

## The Decision-Making Shift

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

---

*Ready to see how SUCA can transform your institution's decision-making? [Contact us](/contact) for a personalized demo.*
  `,
};

// Related posts
const relatedPosts = [
  {
    id: "privacy-first-ai-institutions",
    title: "Designing Privacy-First AI for Institutions",
    category: "Technical",
    date: "2024-11-10",
  },
  {
    id: "dashboards-to-intelligence",
    title: "From Dashboards to Intelligence: The Algoarn Approach",
    category: "Thought Leadership",
    date: "2024-11-05",
  },
  {
    id: "predictive-ai-student-success",
    title: "Predictive AI for Student Success",
    category: "Technical",
    date: "2024-10-12",
  },
];

export default function BlogPostPage() {
  const [copySuccess, setCopySuccess] = useState(false);

  const params = useParams();
  const { getPostBySlug } = useBlog();
  // const blogPost = getPostBySlug(params.slug as string);

  // if (!blogPost) {
  //   return <div className="text-white text-center py-20">Post not found</div>;
  // }


  const handleShare = (platform: string) => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = blogPost.title;
    
    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            text
          )}&url=${encodeURIComponent(url)}`,
          "_blank"
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`,
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
    <div className="space-y-12 md:space-y-16 max-w-4xl mx-auto">
      {/* BREADCRUMB */}
      <FadeInUp>
        <div className="flex items-center gap-2 text-sm text-white/60">
          <Link
            href="/blog"
            className="hover:text-algoarnAqua transition-colors"
          >
            Blog
          </Link>
          <span>→</span>
          <span className="text-white/40 truncate">{blogPost.category}</span>
        </div>
      </FadeInUp>

      {/* ARTICLE HEADER */}
      <FadeInUp delay={0.1}>
        <div className="space-y-6">
          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-algoarnAqua/10 text-algoarnAqua border border-algoarnAqua/30">
              {blogPost.category}
            </span>
            <span className="text-sm text-white/50">
              {new Date(blogPost.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="text-sm text-white/50">·</span>
            <span className="text-sm text-white/50">{blogPost.readTime}</span>
            <span className="text-sm text-white/50">·</span>
            <span className="text-sm text-white/50">By {blogPost.author}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            {blogPost.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            {blogPost.excerpt}
          </p>

          {/* Share Buttons */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/10">
            <span className="text-sm text-white/60 font-medium">Share:</span>
            <button
              onClick={() => handleShare("twitter")}
              className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-algoarnAqua/30 transition-all"
              aria-label="Share on Twitter"
            >
              <svg
                className="w-5 h-5 text-white/70"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </button>
            <button
              onClick={() => handleShare("linkedin")}
              className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-algoarnAqua/30 transition-all"
              aria-label="Share on LinkedIn"
            >
              <svg
                className="w-5 h-5 text-white/70"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </button>
            <button
              onClick={() => handleShare("copy")}
              className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-algoarnAqua/30 transition-all relative"
              aria-label="Copy link"
            >
              <svg
                className="w-5 h-5 text-white/70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              {copySuccess && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-algoarnAqua text-white text-xs rounded whitespace-nowrap">
                  Copied!
                </span>
              )}
            </button>
          </div>
        </div>
      </FadeInUp>

      {/* ARTICLE CONTENT */}
      <FadeInUp delay={0.2}>
        <article className="prose prose-invert prose-lg max-w-none">
          <MarkdownContent content={blogPost.content} />
        </article>
      </FadeInUp>

      {/* AUTHOR BIO */}
      <FadeInUp delay={0.3}>
        <NeonCard className="p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-algoarnAqua to-algoarnBlue flex items-center justify-center text-2xl">
              👥
            </div>
            <div className="flex-1 space-y-3">
              <h3 className="text-xl font-bold text-white">
                {blogPost.author}
              </h3>
              <p className="text-base text-white/70 leading-relaxed">
                The Algoarn team brings together expertise in AI, machine
                learning, and educational technology to build privacy-first
                intelligence systems for institutions worldwide.
              </p>
            </div>
          </div>
        </NeonCard>
      </FadeInUp>

      {/* RELATED POSTS */}
      <FadeInUp delay={0.4} className="space-y-8">
        <div className="border-t border-white/10 pt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Related Articles
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {relatedPosts.map((post, index) => (
            <FadeInUp key={post.id} delay={0.5 + index * 0.1}>
              <Link href={`/blog/${post.id}`}>
                <NeonCard className="p-6 group hover:scale-[1.03] transition-all duration-500 h-full cursor-pointer">
                  <div className="space-y-4">
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-algoarnAqua/10 text-algoarnAqua border border-algoarnAqua/30">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-algoarnAqua transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-white/50">
                      <span>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="text-algoarnAqua group-hover:translate-x-1 transition-transform">
                        Read →
                      </span>
                    </div>
                  </div>
                </NeonCard>
              </Link>
            </FadeInUp>
          ))}
        </div>
      </FadeInUp>

      {/* CTA SECTION */}
      <FadeInUp delay={0.7}>
        <NeonCard className="p-10 md:p-14 text-center bg-gradient-to-br from-slate-800/80 to-slate-900/90 border-algoarnAqua/50">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Want to Learn More About{" "}
              <span className="text-algoarnAqua">SUCA?</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              See how SUCA can transform your institution's decision-making with
              AI-powered academic intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact?type=suca">
                <Button
                  size="lg"
                  className="px-8 py-4 text-base font-semibold bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90 transform hover:scale-105 transition-all shadow-xl shadow-algoarnAqua/30"
                  style={{ borderRadius: "2.5rem" }}
                >
                  Book a Demo
                </Button>
              </Link>
              <Link href="/suca">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-base font-semibold border-2 border-algoarnAqua/50 hover:bg-algoarnAqua/10 transform hover:scale-105 transition-all"
                  style={{ borderRadius: "2.5rem" }}
                >
                  Explore SUCA
                </Button>
              </Link>
            </div>
          </div>
        </NeonCard>
      </FadeInUp>

      {/* BACK TO BLOG */}
      <FadeInUp delay={0.8}>
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-algoarnAqua hover:text-algoarnBlue transition-colors font-medium"
          >
            <span>←</span>
            <span>Back to all articles</span>
          </Link>
        </div>
      </FadeInUp>
    </div>
  );
}