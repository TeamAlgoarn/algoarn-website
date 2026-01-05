
 
"use client";
 
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NeonCard } from "@/components/ui/neon-card";
 import { MdEmail, MdPhone } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
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
      {/* 1. HERO SECTION - LIKE ALGOARN.COM */}
{/* <SectionReveal
  className="relative min-h-[calc(100vh-96px)] flex items-center justify-center overflow-hidden w-screen -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)] bg-black"
> */}
{/* <SectionReveal
  className="relative min-h-[calc(100vh-96px)] flex justify-center overflow-hidden w-screen 
  -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)] bg-gradient-to-br from-[#eef2ff] via-[#f5f3ff] to-[#e0f2fe] pt-20 -mt-[31px]"
> */}
<SectionReveal
  className="relative min-h-[calc(100vh-96px)] flex justify-center overflow-hidden w-screen 
  -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)]
  bg-gradient-to-br from-[#f8faff] via-[#f3f4ff] to-[#eef9ff]
  pt-20 md:-mt-[31px]"
>
  {/* ✅ Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src="/homepage_bg_video.mp4" type="video/mp4" />
  </video>

  {/* ✅ Soft white overlay (keeps text readable) */}
  <div className="absolute inset-0 z-[5] bg-black/45" />


  {/* ✅ Soft Pastel Circles Like SUCA */}
  <div className="absolute inset-0 pointer-events-none z-10">
    <div className="absolute -left-20 top-24 w-64 h-64 bg-[#e8eeff]/50 rounded-full blur-3xl" />
    <div className="absolute right-10 top-40 w-60 h-60 bg-[#f3e8ff]/50 rounded-full blur-3xl" />
    <div className="absolute left-1/2 bottom-10 -translate-x-1/2 w-72 h-72 bg-[#ffeef2]/50 rounded-full blur-3xl" />
  </div>

  {/* Content */}
  <div className="relative z-20 w-full">
    <div className="max-w-3xl mx-auto px-6 pb-16 md:pb-20 text-center space-y-8">
      {/* Heading */}
      <FadeInUp delay={0.1}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
          Smart AI for Smarter{" "}
          <span className="block md:inline text-indigo-500">
            Institutions &amp; Businesses
          </span>
        </h1>
      </FadeInUp>

      {/* Subtitle */}
      <FadeInUp delay={0.2}>
        <p className="text-xl leading-7 max-w-2xl mx-auto text-white">
          At <span className="font-bold text-white">ALGOARN</span>, we drive
          innovation through AI, enabling your businesses to unlock new
          potential and redefine what&apos;s possible. Our AI-driven solutions
          elevate experiences, reduce costs, and accelerate digital transformation.
        </p>
      </FadeInUp>

      {/* CTA */}
      <FadeInUp delay={0.3}>
        <div className="flex justify-center pt-4">
          <Link href="/contact" className="group">
            <Button
              size="lg"
              className="px-10 py-4 text-base md:text-lg font-semibold 
              bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-lg 
              hover:from-indigo-600 hover:to-sky-600 transition-all"
              style={{ borderRadius: "9999px" }}
            >
              <span className="flex items-center gap-2">
                Contact Us
              </span>
            </Button>
          </Link>
        </div>
      </FadeInUp>
    </div>
  </div>
</SectionReveal>



 
      {/* 2. WHY ALGOARN */}
      <SectionReveal className="space-y-12">
    

        <FadeInUp className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Why Algoarn?</h2>
          <p className="text-xl leading-7 max-w-2xl mx-auto text-black">
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
      {/* <SectionReveal className="relative w-screen -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)] overflow-x-hidden bg-gradient-to-br from-slate-800/80 to-slate-900/90 border-y border-algoarnAqua/40"> */}
  {/* Background Glow Effects - Extended beyond edges */}
  {/* <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute top-1/4 -left-40 w-[900px] h-[900px] bg-algoarnAqua/15 blur-3xl rounded-full animate-pulse-slow" />
    <div className="absolute bottom-1/4 -right-40 w-[900px] h-[900px] bg-algoarnBlue/20 blur-3xl rounded-full animate-pulse-slow" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/15 blur-3xl rounded-full animate-pulse-slow" />
  </div> */}
 
  {/* Particles */}
  {/* <div className="absolute inset-0 opacity-30 pointer-events-none">
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
{/* 3. AI INNOVATIONS - SUCA */}
      {/* AI INNOVATION – MATCHES “WHY ALGOARN?” STYLE */}
{/* 2. AI INNOVATION – MATCHES “WHY ALGOARN?” STYLE */}
{/* 3. AI INNOVATIONS - SUCA */}
     <SectionReveal className="relative w-screen -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)] overflow-hidden bg-gradient-to-b from-slate-50 to-white border-y border-slate-200">
  {/* Subtle Accent Circles */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute top-1/4 -left-40 w-[800px] h-[800px] bg-indigo-100/40 blur-3xl rounded-full" />
    <div className="absolute bottom-1/4 -right-40 w-[800px] h-[800px] bg-sky-100/40 blur-3xl rounded-full" />
  </div>

  {/* Main Content Container */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
    {/* Section Title */}
    <div className="text-center mb-16 md:mb-20">
      <FadeInUp>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
          AI Innovation
        </h2>
        <span className="inline-block px-4 py-2 mb-4 bg-indigo-50 border border-indigo-200 rounded-full text-sm font-semibold text-indigo-700">
          Meet Suca
        </span>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          AI-Powered Academic Intelligence Platform
        </p>
      </FadeInUp>
    </div>

    <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-start">
      {/* LEFT COLUMN - Text Content */}
      <FadeInUp className="space-y-8">
        <div className="space-y-6">
          {/* Opening Hook - LEFT SIDE */}
          <div className="space-y-3 text-lg md:text-xl text-slate-600 leading-relaxed italic border-l-4 border-indigo-500 pl-6 bg-indigo-50/50 py-4 rounded-r-lg">
            <p>Behind every mark lies a <span className="font-semibold text-slate-900">pattern</span>.</p>
            <p>Behind every improvement lies <span className="font-semibold text-slate-900">data</span>.</p>
            <p>Behind every success lies <span className="font-semibold text-slate-900">guidance</span>.</p>
          </div>

          {/* Main Heading */}
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Transform Education with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600">
              Intelligent Insights
            </span>
          </h3>

          {/* Body Text */}
          <div className="space-y-4 text-base md:text-lg text-slate-700 leading-relaxed">
            {/* <p>
              Every student learns differently. Every classroom hides untapped potential.
              Every insight you don't see is a <span className="font-semibold text-slate-900">missed opportunity</span>.
            </p> */}
            <p className="text-xl leading-7 max-w-2xl mx-auto text-black">
              SUCA turns invisible patterns into powerful academic intelligence.
            </p>
            <p className="text-xl leading-7 max-w-2xl mx-auto text-black">
              Powered by advanced AI, SUCA <span className="font-semibold">reads between the marks</span>,
              uncovers learning behaviours, predicts outcomes, and helps institutions
              guide every student with <span className="font-semibold text-black">clarity and confidence</span>.
            </p>
          </div>

          {/* Key Value Props */}
          <div className="bg-gradient-to-br from-indigo-50 via-sky-50 to-purple-50 rounded-2xl p-6 border-2 border-indigo-100 shadow-sm">
            <p className="text-base text-slate-700 mb-4 font-medium">
              <span className="font-bold text-slate-900">Not just analytics</span> — it's understanding.{" "}<br/>
              <span className="font-bold text-slate-900">Not just an LMS</span> — it's education reimagined.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                "✓ Nurture growth",
                "✓ Reduce skill gaps",
                "✓ Elevate results",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-indigo-700 font-semibold text-sm">
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <Link href="/suca" className="group">
              <Button
                size="lg"
                className="px-10 py-5 text-base md:text-lg font-semibold bg-gradient-to-r from-indigo-600 to-sky-600 text-white shadow-xl hover:shadow-2xl hover:from-indigo-700 hover:to-sky-700 transform hover:scale-105 transition-all"
                style={{ borderRadius: '9999px' }}
              >
                <span className="flex items-center gap-2">
                  Explore SUCA
                  
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </FadeInUp>

      {/* RIGHT COLUMN - Visual Card with Stats */}
      <FadeInUp delay={0.2} className="space-y-8">
        {/* Opening Hook - RIGHT SIDE */}
        <div className="space-y-3 text-lg md:text-xl text-slate-600 leading-relaxed italic border-l-4 border-indigo-500 pl-6 bg-indigo-50/50 py-4 rounded-r-lg">
          <p>Every student learns  <span className="font-semibold text-slate-900"> differently</span>.</p>
          <p>Every classroom hides untapped . <span className="font-semibold text-slate-900">potential</span>.</p>
          <p>Every insight you don't see is a missed <span className="font-semibold text-slate-900">opportunity</span>.</p>
        </div>

        {/* Visual Card */}
        <div className="relative">
          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-400 to-sky-400 rounded-full blur-2xl opacity-20" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-2xl opacity-20" />

          <div className="relative bg-gradient-to-br from-white to-indigo-50 rounded-3xl border-2 border-indigo-200 p-8 md:p-10 shadow-2xl shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all duration-500">
            <div className="space-y-8 text-center">
              {/* AI Brain Icon */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-sky-500 rounded-full blur-xl opacity-30" />
                <div className="relative text-6xl md:text-7xl">🧠</div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "99%", label: "Accuracy" },
                  { value: "24/7", label: "Insights" },
                  { value: "360°", label: "Coverage" },
                  { value: "Real-time", label: "Analytics" },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 bg-white rounded-xl border border-indigo-100 shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-600 font-medium mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Caption */}
              <div className="space-y-2">
                <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-sky-700">
                  Academic Intelligence at a Glance
                </p>
                <p className="text-sm text-black max-w-xs mx-auto leading-relaxed">
                  Track cohorts, identify at-risk students, and align interventions seamlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInUp>
    </div>
  </div>
</SectionReveal>

  {/* Main Content Container */}
  {/* <div className="relative z-10 w-full max-w-none">
    <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
      <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center"> */}
        {/* Text Content */}
        {/* <FadeInUp className="space-y-8">
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
        </FadeInUp> */}
 
        {/* Visual */}
        {/* <FadeInUp delay={0.2} className="relative">
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
</SectionReveal> */}
 
      {/* 4. SERVICES OVERVIEW */}
      {/* <SectionReveal className="space-y-12">
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
      </SectionReveal> */}
 {/* 4. AI SERVICES — LIKE ALGOARN.COM */}
{/*  */}
<SectionReveal className="pt-20 pb-24 space-y-16">
  {/* Title */}
  <FadeInUp className="text-center space-y-4">
    <h2 className="text-4xl md:text-5xl font-bold">AI Services</h2>
  </FadeInUp>

  {/* 3 big illustrations */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 place-items-center">

    {/* Computer Vision */}
    <FadeInUp delay={0.1}>
      <div className="text-center space-y-6 max-w-xs">
        
        {/* Image Hover Effect */}
        <div className="transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 hover:drop-shadow-xl">
          <img src="/computer vision.avif" alt="Computer Vision" className="w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto" />
        </div>

        <h3 className="text-xl font-bold">Computer Vision</h3>
        <p className="text-xl leading-7 max-w-2xl mx-auto text-black">
          Turning visuals into valuable insights—let AI see, understand,
          and automate.
        </p>
      </div>
    </FadeInUp>

    {/* Generative AI */}
    <FadeInUp delay={0.2}>
      <div className="text-center space-y-6 max-w-xs">

        {/* Image Hover Effect */}
        <div className="transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 hover:drop-shadow-xl">
          <img
            src="/genai.avif"
            alt="Generative AI"
            className="w-72 mx-auto"
          />
        </div>

        <h3 className="text-xl font-bold">Generative AI</h3>
        <p className="text-xl leading-7 max-w-2xl mx-auto text-black">
          Unleashing creativity and efficiency—AI that crafts, creates,
          and innovates for you.
        </p>
      </div>
    </FadeInUp>

    {/* Predictive AI */}
    <FadeInUp delay={0.3}>
      <div className="text-center space-y-6 max-w-xs">

        {/* Image Hover Effect */}
        <div className="transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 hover:drop-shadow-xl">
          <img
            src="/predictive.png"
            alt="Predictive AI"
            className="w-72 mx-auto"
          />
        </div>

        <h3 className="text-xl font-bold">Predictive AI</h3>
        <p className="text-xl leading-7 max-w-2xl mx-auto text-black">
          Stay ahead of the curve—AI that predicts trends and empowers
          smarter decisions.
        </p>
      </div>
    </FadeInUp>

  </div>
</SectionReveal>

      {/* 5. BLOG HIGHLIGHTS – TITLES ONLY */}
      {/* <SectionReveal className="space-y-12">
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
      </SectionReveal> */}
 
      {/* 6. FINAL CTA */}
      {/* <SectionReveal className="relative">
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
      </SectionReveal> */}
      {/* Footer - Updated */}
      
    
    </div>
  );
}