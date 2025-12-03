
 
"use client";
 
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NeonCard } from "@/components/ui/neon-card";
 
// deterministic particles so no hydration warning
const floatingParticles = Array.from({ length: 20 }, (_, i) => ({
  left: `${(i * 7) % 100}%`,
  top: `${(i * 13) % 100}%`,
  delay: `${(i * 0.35) % 5}s`,
  duration: `${10 + (i % 6)}s`,
}));
 
// Simple helpers for "coming in" motion
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
 
export default function HomePage() {
  return (
    <div className="space-y-20 md:space-y-24">
      {/* 1. HERO SECTION - FULL WIDTH EDGE TO EDGE */}
      <SectionReveal className="relative min-h-[70vh] flex items-center justify-center  overflow-x-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-b border-algoarnAqua/30 hero-ai-bg w-screen -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)] -mt-11"  >
        {/* Glows - Extended to edges */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-[800px] h-[800px] bg-algoarnAqua/20 blur-3xl rounded-full animate-pulse-slow" />
          <div className="absolute bottom-1/4 -right-32 w-[800px] h-[800px] bg-algoarnBlue/25 blur-3xl rounded-full animate-pulse-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full animate-pulse-slow" />
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
 
        {/* Content - Full width with edge-to-edge background */}
        <div className="relative z-10 w-full max-w-none px-6 space-y-8 py-12 md:py-16">
          <div className="max-w-7xl mx-auto w-full">
            {/* Badge */}
            <FadeInUp delay={0.1}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-algoarnAqua/10 border border-algoarnAqua/30 backdrop-blur-sm">
                <div className="w-2 h-2 bg-algoarnAqua rounded-full animate-ping" />
                <span className="text-xs md:text-sm font-medium text-algoarnAqua tracking-[0.2em] uppercase">
                  Enterprise AI Solutions
                </span>
              </div>
            </FadeInUp>
 
            {/* Main content grid */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mt-8 w-full">
              {/* Left column - Text content */}
              <div className="space-y-8 w-full">
                {/* Heading */}
                <FadeInUp delay={0.2}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                    Smart AI for{" "}
                    <span className="text-algoarnAqua">
                      Smarter Institutions &amp; Businesses
                    </span>
                  </h1>
                </FadeInUp>
 
                {/* Subtitle */}
                <FadeInUp delay={0.3}>
                  <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
                    Algoarn builds{" "}
                    <span className="text-algoarnAqua font-semibold">
                      privacy-first, outcome-driven AI
                    </span>{" "}
                    for universities, schools, PU colleges, and enterprises — unifying
                    analytics, automation, and decision intelligence in one platform.
                  </p>
                </FadeInUp>
 
                {/* CTAs */}
                <FadeInUp delay={0.4}>
                  <div className="flex flex-col sm:flex-row gap-4 items-start pt-2">
                    <Link href="/contact" className="group">
                      <Button
                        size="lg"
                        className="px-8 py-4 text-sm md:text-base font-semibold bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90 transform hover:scale-105 transition-all shadow-xl shadow-algoarnAqua/30" style={{borderRadius:'2.5rem', width:'104%'}}
                      >
                        <span className="flex items-center gap-2">
                          Contact Us
                          <span className="group-hover:translate-x-1 transition-transform">
                            →
                          </span>
                        </span>
                      </Button>
                    </Link>
                     <Link href="/suca" className="group">
                      <Button
                        size="lg"
                        className="px-8 py-4 text-sm md:text-base font-semibold bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90 transform hover:scale-105 transition-all shadow-xl shadow-algoarnAqua/30" style={{borderRadius:'2.5rem', width:'104%'}}
                      >
                        <span className="flex items-center gap-2">
                         Explore Suca
                          <span className="group-hover:translate-x-1 transition-transform">
                            →
                          </span>
                        </span>
                      </Button>
                      </Link>
                     
                  </div>
                </FadeInUp>
              </div>
 
              {/* Right column - Metrics */}
              <FadeInUp delay={0.5}>
                <div className="grid grid-cols-1 gap-6 p-6 md:p-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-algoarnAqua/20 w-full">
                  {[
                    {
                      value: "99%",
                      label: "Client Satisfaction",
                      description: "Exceptional service delivery and support"
                    },
                    {
                      value: "50+",
                      label: "Institutions & Businesses",
                      description: "Trusted by educational and corporate partners"
                    },
                    {
                      value: "24/7",
                      label: "AI-Powered Support",
                      description: "Round-the-clock intelligent assistance"
                    },
                  ].map((metric, i) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.6 + i * 0.1,
                        ease: "easeOut",
                      }}
                      className="text-left p-4 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
                    >
                      <div className="text-2xl md:text-3xl font-bold text-algoarnAqua mb-2">
                        {metric.value}
                      </div>
                      <div className="text-lg font-semibold text-white mb-1">
                        {metric.label}
                      </div>
                      <div className="text-sm text-white/60">
                        {metric.description}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </SectionReveal>
 
      {/* 2. WHY ALGOARN */}
      <SectionReveal className="space-y-12">
        <FadeInUp className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Why Algoarn?</h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            We combine deep AI expertise with practical delivery to help your
            institution move from data to real-world impact.
          </p>
        </FadeInUp>
 
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "AI Expertise Across Multiple Domains",
              description:
                "From education and finance to operations and analytics, we architect AI that fits your context.",
              icon: "🚀",
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              title: "Proven in Educational Analytics",
              description:
                "Trusted by institutions to surface insights on performance, risk, and learner journeys.",
              icon: "📊",
              gradient: "from-green-500 to-emerald-500",
            },
            {
              title: "Fast Delivery & R&D Backed",
              description:
                "Rapid implementation with a strong research backbone and continuous innovation.",
              icon: "⚡",
              gradient: "from-yellow-500 to-orange-500",
            },
            {
              title: "Affordable, Scalable Solutions",
              description:
                "Enterprise-grade AI that grows with you — without enterprise-grade complexity.",
              icon: "💰",
              gradient: "from-purple-500 to-pink-500",
            },
          ].map((item, index) => (
            <FadeInUp
              key={item.title}
              delay={0.1 * index}
              className="flex justify-center"
            >
              <NeonCard
                className="group hover:scale-[1.03] transition-all duration-500
                         h-[280px] w-full max-w-xs mx-auto px-6 py-6 flex flex-col"
              >
                <div className="space-y-4 text-center flex-1 flex flex-col justify-between">
                  <div
                    className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${item.gradient} mx-auto`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                  </div>
 
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-algoarnAqua transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </NeonCard>
            </FadeInUp>
          ))}
        </div>
      </SectionReveal>
 
      {/* 3. PREVIEW OF SUCA */}
      <SectionReveal className="relative w-screen -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)] overflow-x-hidden bg-gradient-to-br from-slate-800/80 to-slate-900/90 border-y border-algoarnAqua/40">
  {/* Background Glow Effects - Extended beyond edges */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute top-1/4 -left-40 w-[900px] h-[900px] bg-algoarnAqua/15 blur-3xl rounded-full animate-pulse-slow" />
    <div className="absolute bottom-1/4 -right-40 w-[900px] h-[900px] bg-algoarnBlue/20 blur-3xl rounded-full animate-pulse-slow" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/15 blur-3xl rounded-full animate-pulse-slow" />
  </div>
 
  {/* Particles */}
  <div className="absolute inset-0 opacity-30 pointer-events-none">
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
 
  {/* Main Content Container */}
  <div className="relative z-10 w-full max-w-none">
    <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
      <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
        {/* Text Content */}
        <FadeInUp className="space-y-8">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-algoarnAqua/10 border border-algoarnAqua/30 text-algoarnAqua text-xs md:text-sm font-semibold">
              🧠 Preview · SUCA Platform
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              SUCA –{" "}
              <span className="text-algoarnAqua">
                AI-Powered Academic Intelligence
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              SUCA gives leadership, faculty, and stakeholders a unified,
              privacy-first view of student performance, risk, and learning
              patterns — turning scattered data into clear academic
              intelligence.
            </p>
          </div>
 
          <div className="grid grid-cols-2 gap-4 text-base md:text-lg">
            {[
              "Real-time performance analytics",
              "Predictive risk scoring",
              "Privacy-first architecture",
              "Role-based dashboards",
            ].map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 text-white/70"
              >
                <div className="w-2 h-2 bg-algoarnAqua rounded-full" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
 
          <div className="pt-4">
            <Link href="/suca">
              <Button className="px-8 py-5 text-base font-semibold bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90 transform hover:scale-105 transition-all" style={{borderRadius:'2.5rem'}}>
                Explore SUCA
              </Button>
            </Link>
          </div>
        </FadeInUp>
 
        {/* Visual */}
        <FadeInUp delay={0.2} className="relative">
          <div className="aspect-square bg-gradient-to-br from-algoarnAqua/15 to-algoarnBlue/25 rounded-2xl border border-algoarnAqua/40 flex items-center justify-center p-8 shadow-xl shadow-algoarnAqua/10">
            <div className="space-y-6 text-center">
              <div className="text-5xl md:text-6xl">📈</div>
              <div className="space-y-2">
                <p className="text-algoarnAqua font-bold text-lg md:text-xl">
                  Academic Intelligence at a Glance
                </p>
                <p className="text-xs md:text-sm text-white/60 max-w-xs mx-auto">
                  Track cohorts, identify at-risk students, and align
                  interventions — all from one intelligent dashboard.
                </p>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </div>
  </div>
</SectionReveal>
 
      {/* 4. SERVICES OVERVIEW */}
      <SectionReveal className="space-y-12">
        <FadeInUp className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our AI Services
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            End-to-end AI and software solutions tailored to educational
            institutions and growth-focused businesses.
          </p>
        </FadeInUp>
 
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Computer Vision",
              icon: "👁️",
              description:
                "Detection, tracking, OCR, and video analytics for campus, security, and operational use cases.",
            },
            {
              title: "Generative AI",
              icon: "✨",
              description:
                "Chatbots, knowledge assistants, content automation, and domain-tuned copilots.",
            },
            {
              title: "Predictive AI",
              icon: "🔮",
              description:
                "Forecasting, early warning systems, and risk prediction using time-series intelligence.",
            },
            {
              title: "LMS / EdTech Development",
              icon: "🎓",
              description:
                "Custom learning platforms with AI-powered assessments, reports, and engagement tools.",
            },
            {
              title: "Custom AI Solutions",
              icon: "⚙️",
              description:
                "Tailored workflows integrated into your SIS, ERP, CRMs, and internal systems.",
            },
            {
              title: "Software Development",
              icon: "💻",
              description:
                "Web apps, dashboards, portals, and APIs designed for performance and scalability.",
            },
          ].map((service, index) => (
            <FadeInUp key={service.title} delay={0.1 * index}>
              <NeonCard className="p-8 group hover:scale-[1.03] transition-all duration-500 h-full flex flex-col text-center">
                <div className="space-y-6 flex-1">
                  <div className="text-4xl">{service.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold text-algoarnAqua">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/70 leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <div className="w-0 group-hover:w-16 h-0.5 bg-gradient-to-r from-algoarnAqua to-algoarnBlue transition-all duration-300 mx-auto" />
                </div>
              </NeonCard>
            </FadeInUp>
          ))}
        </div>
      </SectionReveal>
 
      {/* 5. BLOG HIGHLIGHTS – TITLES ONLY */}
      <SectionReveal className="space-y-12">
        <FadeInUp className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Latest Insights</h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Stay tuned for thought leadership on AI in education and enterprise
            intelligence.
          </p>
        </FadeInUp>
 
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "How SUCA Changes Academic Decision-Making",
            "Designing Privacy-First AI for Institutions",
            "From Dashboards to Intelligence: The Algoarn Approach",
          ].map((title, index) => (
            <FadeInUp key={index} delay={0.1 * index}>
              <NeonCard className="p-8 group hover:scale-[1.03] transition-all duration-500 h-full flex flex-col">
                <div className="flex-1 flex items-center">
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-algoarnAqua transition-colors leading-snug">
                    {title}
                  </h3>
                </div>
              </NeonCard>
            </FadeInUp>
          ))}
        </div>
      </SectionReveal>
 
      {/* 6. FINAL CTA */}
      <SectionReveal className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-algoarnAqua/10 via-purple-500/10 to-algoarnBlue/10 rounded-3xl blur-3xl opacity-40" />
 
        <NeonCard className="p-10 md:p-16 relative bg-gradient-to-br from-slate-800/80 to-slate-900/90 border-algoarnAqua/50 backdrop-blur-sm text-center">
          <FadeInUp className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              Let&apos;s Transform Your Institution  with AI
             
            </h2>
 
            <p className="text-lg md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              Whether you&apos;re exploring SUCA, AI analytics, or bespoke AI
              solutions, Algoarn helps you move from ideas to production-ready
              deployments — safely, securely, and at scale.
            </p>
 
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/contact?type=suca" className="group">
                <Button className="px-10 py-6 text-base md:text-lg font-semibold bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90 transform hover:scale-105 transition-all shadow-2xl shadow-algoarnAqua/30" style={{borderRadius:'2.5rem', width:'104%'}}>
                  <span className="flex items-center gap-2">
                    Book a SUCA Demo
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </span>
                </Button>
              </Link>
 
              <Link href="/contact" className="group">
               <Button className="px-10 py-6 text-base md:text-lg font-semibold bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90 transform hover:scale-105 transition-all shadow-2xl shadow-algoarnAqua/30" style={{borderRadius:'2.5rem', width:'104%'}}>
                  Contact Our AI Experts
                </Button>
              </Link>
            </div>
 
            <div className="pt-6 border-t border-white/10">
              <p className="text-white/60 text-xs md:text-sm">
                🚀 Join 50+ institutions and businesses already transforming
                with Algoarn AI solutions.
              </p>
            </div>
          </FadeInUp>
        </NeonCard>
      </SectionReveal>
    </div>
  );
}