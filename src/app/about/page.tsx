 
"use client";
 
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NeonCard } from "@/components/ui/neon-card";
 
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
  return (
    <div className="space-y-20 md:space-y-24">
      {/* HERO SECTION - FULL WIDTH */}
      <SectionReveal className="relative min-h-[60vh] flex items-center justify-center overflow-x-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-b border-algoarnAqua/30 w-screen -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)] -mt-11">
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
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 md:py-20 text-center space-y-8">
          <FadeInUp delay={0.1}>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-algoarnAqua/10 border border-algoarnAqua/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-algoarnAqua rounded-full animate-ping" />
              <span className="text-xs md:text-sm font-medium text-algoarnAqua tracking-[0.2em] uppercase">
                About Algoarn
              </span>
            </div>
          </FadeInUp>
 
          <FadeInUp delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              Building the Future of{" "}
              <span className="text-algoarnAqua">
                AI-Powered Intelligence
              </span>
            </h1>
          </FadeInUp>
 
          <FadeInUp delay={0.3}>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              We're on a mission to make advanced AI accessible, practical, and transformative for institutions and businesses across India and beyond.
            </p>
          </FadeInUp>
        </div>
      </SectionReveal>
 
      {/* COMPANY STORY */}
      <SectionReveal className="space-y-12">
        <FadeInUp className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Our Story</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-algoarnAqua to-algoarnBlue mx-auto rounded-full" />
        </FadeInUp>
 
        <FadeInUp delay={0.2}>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              Algoarn AI Solutions was founded with a clear vision: to bridge the gap between cutting-edge artificial intelligence research and real-world institutional needs. We recognized that while AI technology was advancing rapidly, educational institutions and businesses struggled to harness its full potential.
            </p>
            <p>
              What started as a mission to transform academic analytics evolved into a comprehensive AI solutions provider. Our flagship product, SUCA (Smart University & College Analytics), emerged from deep collaboration with educational leaders who needed actionable insights, not just data dashboards.
            </p>
            <p>
              Today, Algoarn stands at the intersection of innovation and practicality—building AI systems that respect privacy, deliver measurable outcomes, and scale with the organizations we serve.
            </p>
          </div>
        </FadeInUp>
      </SectionReveal>
 
      {/* MISSION & VISION */}
      <SectionReveal className="relative w-screen -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)] overflow-x-hidden bg-gradient-to-br from-slate-800/80 to-slate-900/90 border-y border-algoarnAqua/40">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-40 w-[900px] h-[900px] bg-algoarnAqua/15 blur-3xl rounded-full animate-pulse-slow" />
          <div className="absolute bottom-1/4 -right-40 w-[900px] h-[900px] bg-algoarnBlue/20 blur-3xl rounded-full animate-pulse-slow" />
        </div>
 
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
            {/* Mission */}
            <FadeInUp>
              <NeonCard className="p-10 md:p-12 h-full group hover:scale-[1.02] transition-all duration-500">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">🎯</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-algoarnAqua">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-lg text-white/80 leading-relaxed">
                    To democratize AI for educational institutions and enterprises by delivering privacy-first, outcome-driven intelligence systems that transform data into strategic advantage—making advanced analytics accessible, affordable, and actionable.
                  </p>
                </div>
              </NeonCard>
            </FadeInUp>
 
            {/* Vision */}
            <FadeInUp delay={0.2}>
              <NeonCard className="p-10 md:p-12 h-full group hover:scale-[1.02] transition-all duration-500">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">🔭</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-algoarnAqua">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-lg text-white/80 leading-relaxed">
                    To become India's most trusted AI partner for educational and enterprise transformation—where every institution, regardless of size, can leverage world-class AI to unlock potential, predict outcomes, and drive meaningful impact.
                  </p>
                </div>
              </NeonCard>
            </FadeInUp>
          </div>
        </div>
      </SectionReveal>
 
      {/* FOUNDER SECTION */}
      <SectionReveal className="space-y-12">
        <FadeInUp className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Leadership</h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Driven by innovation, guided by expertise
          </p>
        </FadeInUp>
 
        <FadeInUp delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <NeonCard className="p-10 md:p-14 group hover:scale-[1.02] transition-all duration-500">
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  {/* Placeholder for founder icon/avatar */}
                  <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-algoarnAqua to-algoarnBlue flex items-center justify-center text-4xl">
                    👤
                  </div>
 
                  <div className="flex-1 space-y-4 text-center md:text-left">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-algoarnAqua transition-colors">
                        Founder & CEO
                      </h3>
                      <p className="text-algoarnAqua/80 text-lg">
                        Algoarn AI Solutions
                      </p>
                    </div>
 
                    <p className="text-lg text-white/80 leading-relaxed">
                      With a background in artificial intelligence, machine learning, and educational technology, our founder envisioned a world where institutions could harness AI without compromising privacy or clarity. This vision birthed SUCA and continues to drive Algoarn's commitment to ethical, impactful AI.
                    </p>
                  </div>
                </div>
              </div>
            </NeonCard>
          </div>
        </FadeInUp>
      </SectionReveal>
 
      {/* COMPANY VALUES */}
      <SectionReveal className="space-y-12">
        <FadeInUp className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Our Values</h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            The principles that guide everything we build
          </p>
        </FadeInUp>
 
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "🔒",
              title: "Privacy First",
              description:
                "We build AI that respects data sovereignty. No public dashboards, no data leaks—your intelligence stays yours.",
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              icon: "🎯",
              title: "Outcome Driven",
              description:
                "We measure success by the decisions you make better, not the features we ship. Impact over implementation.",
              gradient: "from-green-500 to-emerald-500",
            },
            {
              icon: "🚀",
              title: "Innovation at Scale",
              description:
                "From R&D to production-ready systems—we bring cutting-edge AI research into practical, scalable solutions.",
              gradient: "from-purple-500 to-pink-500",
            },
            {
              icon: "🤝",
              title: "Partnership Mindset",
              description:
                "Your success is our success. We collaborate closely, iterate quickly, and stay invested in your journey.",
              gradient: "from-yellow-500 to-orange-500",
            },
            {
              icon: "💡",
              title: "Clarity Over Complexity",
              description:
                "AI should simplify decisions, not complicate them. We deliver intelligence you can actually use and trust.",
              gradient: "from-red-500 to-pink-500",
            },
            {
              icon: "🌱",
              title: "Continuous Evolution",
              description:
                "The AI landscape changes rapidly. We stay ahead through research, experimentation, and adaptive development.",
              gradient: "from-indigo-500 to-purple-500",
            },
          ].map((value, index) => (
            <FadeInUp key={value.title} delay={0.1 * index}>
              <NeonCard className="p-8 group hover:scale-[1.03] transition-all duration-500 h-full">
                <div className="space-y-4 text-center">
                  <div
                    className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${value.gradient} mx-auto`}
                  >
                    <span className="text-3xl">{value.icon}</span>
                  </div>
 
                  <h3 className="text-xl font-bold text-white group-hover:text-algoarnAqua transition-colors">
                    {value.title}
                  </h3>
 
                  <p className="text-sm md:text-base text-white/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </NeonCard>
            </FadeInUp>
          ))}
        </div>
      </SectionReveal>
 
      {/* ROADMAP */}
      <SectionReveal className="space-y-12">
        <FadeInUp className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Our Roadmap</h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Building toward a future where AI empowers every decision
          </p>
        </FadeInUp>
 
        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              phase: "Phase 1: Foundation",
              status: "Completed",
              items: [
                "SUCA platform launched for universities",
                "School and Pre-University editions deployed",
                "Core AI services established",
                "50+ institutional partnerships",
              ],
              color: "from-green-500 to-emerald-500",
            },
            {
              phase: "Phase 2: Expansion",
              status: "In Progress",
              items: [
                "Advanced predictive models for academic risk",
                "AI project tracker integration",
                "Enhanced generative AI capabilities",
                "Multi-language support for SUCA",
              ],
              color: "from-algoarnAqua to-algoarnBlue",
            },
            {
              phase: "Phase 3: Innovation",
              status: "Coming Soon",
              items: [
                "Cross-institutional benchmarking (privacy-preserved)",
                "Real-time intervention recommendation engine",
                "AI-powered career guidance integration",
                "Global expansion into international markets",
              ],
              color: "from-purple-500 to-pink-500",
            },
          ].map((phase, index) => (
            <FadeInUp key={phase.phase} delay={0.1 * index}>
              <NeonCard className="p-8 md:p-10 group hover:scale-[1.02] transition-all duration-500">
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-algoarnAqua transition-colors">
                      {phase.phase}
                    </h3>
                    <span
                      className={`inline-flex px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r ${phase.color} text-white w-fit`}
                    >
                      {phase.status}
                    </span>
                  </div>
 
                  <ul className="space-y-3">
                    {phase.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-white/80"
                      >
                        <div className="w-1.5 h-1.5 bg-algoarnAqua rounded-full mt-2 flex-shrink-0" />
                        <span className="text-base md:text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </NeonCard>
            </FadeInUp>
          ))}
        </div>
      </SectionReveal>
 
      {/* PRIVACY-FIRST COMMITMENT */}
      <SectionReveal className="relative w-screen -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)] overflow-x-hidden bg-gradient-to-br from-slate-800/80 to-slate-900/90 border-y border-algoarnAqua/40">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-40 w-[900px] h-[900px] bg-algoarnAqua/15 blur-3xl rounded-full animate-pulse-slow" />
          <div className="absolute bottom-1/4 -right-40 w-[900px] h-[900px] bg-algoarnBlue/20 blur-3xl rounded-full animate-pulse-slow" />
        </div>
 
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 md:py-28 text-center space-y-8">
          <FadeInUp>
            <div className="text-5xl md:text-6xl mb-6">🔐</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Privacy-First Commitment
            </h2>
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                At Algoarn, privacy isn't an afterthought—it's the foundation of everything we build. We operate on a strict no-screenshot, no-video, no-dashboard-sharing policy because we understand that student data and institutional intelligence are sacred.
              </p>
              <p>
                Your data lives in your infrastructure. Your insights stay with your team. Your competitive advantage remains yours. We provide the intelligence layer without ever compromising confidentiality.
              </p>
              <p className="text-algoarnAqua font-semibold text-xl">
                Demo access is granted only through direct, secure requests—never through public showcases.
              </p>
            </div>
          </FadeInUp>
        </div>
      </SectionReveal>
 
      {/* FINAL CTA */}
      <SectionReveal className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-algoarnAqua/10 via-purple-500/10 to-algoarnBlue/10 rounded-3xl blur-3xl opacity-40" />
 
        <NeonCard className="p-10 md:p-16 relative bg-gradient-to-br from-slate-800/80 to-slate-900/90 border-algoarnAqua/50 backdrop-blur-sm text-center">
          <FadeInUp className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to Transform{" "}
              <span className="bg-gradient-to-r from-algoarnAqua to-algoarnBlue bg-clip-text text-transparent">
                with Algoarn?
              </span>
            </h2>
 
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Whether you're exploring SUCA, need custom AI development, or want to discuss how AI can elevate your institution—we're here to help you move from data to decisions.
            </p>
 
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/contact" className="group">
                <Button
                  size="lg"
                  className="px-10 py-6 text-base md:text-lg font-semibold bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90 transform hover:scale-105 transition-all shadow-2xl shadow-algoarnAqua/30"
                  style={{ borderRadius: "2.5rem", width: "104%" }}
                >
                  <span className="flex items-center gap-2">
                    Get in Touch
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </span>
                </Button>
              </Link>
 
              <Link href="/suca" className="group">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-10 py-6 text-base md:text-lg font-semibold border-2 border-algoarnAqua/50 hover:bg-algoarnAqua/10 transform hover:scale-105 transition-all"
                  style={{ borderRadius: "2.5rem", width: "104%" }}
                >
                  Explore SUCA
                </Button>
              </Link>
            </div>
          </FadeInUp>
        </NeonCard>
      </SectionReveal>
    </div>
  );
}
 