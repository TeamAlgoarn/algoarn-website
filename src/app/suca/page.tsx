"use client";
import { useContactModal } from "@/components/contact/contact-modal-provider";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  GraduationCap,
  School,
  BookOpen,
  Target,
  BarChart3,
  Users,
  Shield,
  Sparkles,
  CheckCircle,
  Download,
  CalendarClock,
  Zap,
  Workflow,
  Layers,
  Gauge,
  ClipboardCheck,
  Building2,
  UserRound,
  User,
  Play,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const editions = [
 
  {
    title: "SUCA School Edition",
    icon: School,
    target: "CBSE | ICSE | State Boards",
    brochureHref: "/brochures/SUCA-School-Brochure.pdf",
    features: [
      "Student performance analysis",
      "Learning level classification",
      "Daily & weekly assessments",
      "Parent-friendly scorecards",
      "Personalized learning paths",
      "Early risk alerts",
    ],
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "SUCA Pre-University Edition",
    icon: BookOpen,
    target: "PUC | Junior Colleges | +2",
    brochureHref: "/brochures/SUCA-PU-Brochure.pdf",
    features: [
      "Topic-wise performance analytics",
      "Competitive exam readiness tracking",
      "Time & accuracy insights",
      "AI test generator",
      "Exam score prediction",
      "Structured study planning",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
   {
    title: "SUCA University Edition",
    icon: GraduationCap,
    target: "Engineering colleges | autonomous institutions | universities",
    brochureHref: "/brochures/SUCA-University-Brochure.pdf",
    features: [
      "Department-level dashboards",
      "Student performance intelligence",
      "Placement readiness metrics",
      "Attendance & engagement tracking",
      "AI-powered test generation",
      "CO–PO mapping & outcome analysis",
    ],
    gradient: "from-blue-500 to-indigo-500",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerChildren = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const serviceParticles = Array.from({ length: 15 }, (_, i) => ({
  left: `${(i * 13) % 100}%`,
  top: `${(i * 27) % 100}%`,
  duration: 4 + (i % 4),
  delay: (i % 5) * 0.3,
}));

const outcomes = [
  "Early identification of struggling students",
  "Improved exam performance & pass rates",
  "AI oriented future ready campus",
  "Reduced faculty workload through automation",
  "Data-driven academic decision-making",
  "Improved student engagement & accountability",
];

const demoVideos = [
  {
    title: "University Edition Demo",
    description: "See how SUCA helps universities track department-level performance",
    thumbnail: "from-blue-500/20 to-indigo-500/20",
    duration: "2:34",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual demo link
  },
  {
    title: "School Edition Demo",
    description: "Discover personalized learning paths for K-12 students",
    thumbnail: "from-indigo-500/20 to-purple-500/20",
    duration: "3:12",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Pre-University Demo",
    description: "Prepare students for competitive exams with AI insights",
    thumbnail: "from-purple-500/20 to-pink-500/20",
    duration: "2:58",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

export default function SUCAPage() {
  const { openModal } = useContactModal();

  return (
    <>
      {/* HERO - compact height, blue-purple gradient, darker overlay */}
      <section className="relative py-30 flex items-center justify-center overflow-hidden w-screen -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)] pt-20 -mt-[29px]">
        {/* Background image with darker overlay */}
        <div className="absolute inset-0">
          <img
            src="/suca.webp"
            alt="Campus background"
            className="w-full h-full object-cover"
          />
          {/* Dark blue-purple gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-indigo-900/70 to-purple-900/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(79,70,229,0.4)_0%,_transparent_20%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(139,92,246,0.3)_0%,_transparent_20%)]" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {serviceParticles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-white rounded-full"
              style={{ left: p.left, top: p.top }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Main content - centered, fully visible */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 50 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-300" />
            <span className="text-xs md:text-sm font-medium text-white tracking-[0.25em] uppercase">
              Flagship AI Product
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 50 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
          >
            <span className="bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              SUCA – Student Understanding & Cognitive Analysis
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-blue-100 font-medium mb-6"
          >
            Predict. Personalize. Perform Better.
          </motion.p>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-6"
          >
            Intervention, personalized learning, and measurable academic improvement.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="flex flex-wrap gap-3 justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <span>🎓</span>
              <span className="font-medium text-white">Trusted by premium institutions</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <span>⚙️</span>
              <span className="font-medium text-white">Designed for Indian education</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="px-10 py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-2xl shadow-blue-500/30"
              style={{ borderRadius: "2.5rem" }}
              onClick={() => openModal("Institutional Demo")}
            >
              Book a Personalized Demo
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <div className="space-y-20 md:space-y-24">
        {/* THE PROBLEM */}
        <section className="relative py-24">
          <div className="absolute -top-44 -left-44 w-[700px] h-[700px] bg-blue-500/10 blur-[140px] rounded-full" />
          <div className="absolute -bottom-44 -right-44 w-[700px] h-[700px] bg-purple-500/10 blur-[140px] rounded-full" />

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  The Problem Institutions Face Today
                </span>
              </h2>
              <p className="mt-5 text-xl max-w-2xl mx-auto text-gray-700">
                Educational institutions generate massive amounts of data every day.
              </p>
              <div className="mt-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-center gap-12">
                <div className="w-full max-w-[420px] border-l-4 border-blue-500 bg-blue-50/50 py-4 rounded-r-lg pl-6">
                  <div className="space-y-3 text-left">
                    <p className="text-xl text-gray-800">Exam <span className="font-bold">scores</span></p>
                    <p className="text-xl text-gray-800">Attendance <span className="font-bold">records</span></p>
                  </div>
                </div>
                <div className="w-full max-w-[420px] border-l-4 border-purple-500 bg-purple-50/50 py-4 rounded-r-lg pl-6">
                  <div className="space-y-3 text-left">
                    <p className="text-xl text-gray-800">Internal <span className="font-bold">assessments</span></p>
                    <p className="text-xl text-gray-800">LMS and <span className="font-bold">activity data</span></p>
                  </div>
                </div>
              </div>
              <p className="mt-8 text-xl text-gray-700 max-w-2xl mx-auto">
                Yet most institutions still struggle with the core challenges below.
              </p>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="flex justify-center"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-14 place-items-center">
                {[
                  {
                    title: "Reactive Decision-Making",
                    desc: "Problems are identified after exams, when it’s already too late.",
                    gradient: "from-blue-600 to-blue-400",
                  },
                  {
                    title: "Siloed Information",
                    desc: "Academic, attendance, and engagement data live in disconnected systems.",
                    gradient: "from-indigo-600 to-indigo-400",
                  },
                  {
                    title: "One-Size-Fits-All Approach",
                    desc: "Traditional methods fail to address individual student needs.",
                    gradient: "from-purple-600 to-pink-500",
                  },
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -10, transition: { duration: 0.3, type: "spring" } }}
                    className="relative group w-full max-w-[320px]"
                  >
                    <div className="absolute -inset-6 rounded-[44px] bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative aspect-square rounded-[40px] bg-gradient-to-b from-slate-800 via-slate-900 to-black border border-white/10 shadow-2xl px-8 py-8 flex flex-col items-center text-center">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white text-3xl font-bold`}>
                        {i + 1}
                      </div>
                      <h3 className="mt-6 text-lg font-bold text-white group-hover:text-blue-300 transition-colors min-h-[56px] flex items-center justify-center">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-sm text-gray-300 leading-relaxed">{card.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* DEMO VIDEOS SECTION */}
        <section className="relative py-24">
          <div className="absolute -top-44 -left-44 w-[700px] h-[700px] bg-blue-500/10 blur-[140px] rounded-full" />
          <div className="absolute -bottom-44 -right-44 w-[700px] h-[700px] bg-purple-500/10 blur-[140px] rounded-full" />

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-4 mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  See SUCA in Action
                </span>
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Watch how SUCA transforms raw data into actionable intelligence across different editions.
              </p>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {demoVideos.map((video, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03, transition: { duration: 0.3, type: "spring" } }}
                  className="relative group cursor-pointer"
                  onClick={() => window.open(video.link, "_blank")}
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[44px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                    <div className={`aspect-video bg-gradient-to-br ${video.thumbnail} flex items-center justify-center relative`}>
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                      <div className="relative z-10 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{video.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{video.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* MEET SUCA */}
        <section className="relative">
          <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-2 items-center px-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring" }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                <span className="text-xs uppercase tracking-wider text-blue-600 font-semibold">
                  Meet SUCA
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Your AI Academic Partner
                </span>
              </h2>
              <p className="text-xl text-gray-700">
                SUCA sits on top of your existing academic data and converts it into meaningful,
                actionable intelligence.{" "}
                <span className="font-semibold text-gray-900">
                  SUCA doesn’t replace your systems — it makes them intelligent.
                </span>
              </p>
              <ul className="space-y-4">
                {[
                  "Predict student performance before exams",
                  "Identify at-risk students early",
                  "Detect weak topics and learning gaps",
                  "Personalize learning paths at scale",
                  "Automate academic analytics and reporting",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-blue-500" />
                    <span className="text-lg text-gray-800">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative"
            >
              <div className="absolute -inset-8 rounded-[44px] bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-3xl opacity-70" />
              <div className="relative rounded-[40px] border border-white/20 p-8 space-y-6 bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl">
                <div className="flex items-center justify-between">
                  <div className="text-white font-semibold">
                    Intelligence → Action → Measurable Improvement
                  </div>
                  <div className="inline-flex items-center gap-2 text-xs text-blue-300">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                    Explainable Insights
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-white">
                  {[
                    { label: "Risk Scores", value: "Early", color: "from-emerald-400 to-green-400" },
                    { label: "Outcome Prediction", value: "High", color: "from-blue-400 to-cyan-400" },
                    { label: "Workload Reduction", value: "Big", color: "from-purple-400 to-pink-400" },
                    { label: "Dashboards", value: "Multi", color: "from-orange-400 to-red-400" },
                  ].map((item, index) => (
                    <div key={index} className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {item.value}
                      </div>
                      <div className="text-xs text-gray-300 mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-500/10 border border-white/10 rounded-2xl p-4">
                  <div className="flex items-center gap-2 text-white text-sm font-semibold">
                    Built for Indian Education Systems
                  </div>
                  <p className="text-xs text-gray-300 mt-1">
                    Schools • Colleges • Universities • Autonomous Institutions
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* OUTCOMES */}
        <section className="relative">
          <div className="absolute -top-44 -left-44 w-[700px] h-[700px] bg-blue-500/10 blur-[140px] rounded-full" />
          <div className="absolute -bottom-44 -right-44 w-[700px] h-[700px] bg-purple-500/10 blur-[140px] rounded-full" />

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-4 mb-14"
            >
              <h2 className="text-3xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Outcomes That Actually Matter
                </span>
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Institutions using SUCA achieve measurable improvements across performance, efficiency, and engagement.
              </p>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center"
            >
              {outcomes.map((o) => (
                <motion.div
                  key={o}
                  variants={fadeInUp}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="relative w-full max-w-[360px]"
                >
                  <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-3xl opacity-40" />
                  <div className="relative rounded-[36px] min-h-[105px] bg-gradient-to-br from-slate-800 to-slate-900 border border-white/20 shadow-2xl p-7">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <p className="text-white leading-relaxed">{o}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* EDITIONS */}
        <section className="relative">
          <div className="absolute -top-44 -left-44 w-[700px] h-[700px] bg-blue-500/10 blur-[140px] rounded-full" />
          <div className="absolute -bottom-44 -right-44 w-[700px] h-[700px] bg-purple-500/10 blur-[140px] rounded-full" />

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-4 mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold">
                Choose Your{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SUCA Edition
                </span>
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                One powerful AI engine, adapted for your institution type and academic structure.
              </p>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
            >
              {editions.map((edition) => (
                <motion.div
                  key={edition.title}
                  variants={fadeInUp}
                  whileHover={{ y: -8, transition: { duration: 0.3, type: "spring" } }}
                  className="relative group w-full max-w-[420px] mx-auto h-full"
                >
                  <div className="relative h-full rounded-[40px] bg-gradient-to-br from-slate-800 to-slate-900 border border-white/20 shadow-2xl p-8 flex flex-col">
                    <div className={`w-full h-16 rounded-2xl bg-gradient-to-r ${edition.gradient} flex items-center gap-3 px-6 border border-white/20 mb-6`}>
                      <edition.icon className="w-7 h-7 text-white" />
                      <span className="text-white font-bold text-sm md:text-base">{edition.title}</span>
                    </div>
                    <p className="text-gray-300 font-medium mb-6 text-sm md:text-base">{edition.target}</p>
                    <ul className="text-gray-200 space-y-3 flex-1">
                      {edition.features.map((f) => (
                        <li key={f} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300 leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-6 mt-8 border-t border-white/20">
                      <a
                        href={edition.brochureHref}
                        download
                        className="inline-flex items-center justify-center w-full px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
                      >
                        <Download className="w-5 h-5 mr-2 text-white" />
                        Download Brochure
                      </a>
                      <p className="text-xs text-gray-400 text-center mt-3">
                        Customized implementation for your institution
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECURITY */}
       <section className="relative">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className="max-w-6xl mx-auto rounded-3xl overflow-hidden px-6"
  >
    <div className="glass-card rounded-3xl border border-white/20 p-10 md:p-12 text-center space-y-6 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm">
      <div className="inline-flex p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 mx-auto">
        <Shield className="w-12 h-12 text-purple-400" />
      </div>
      <h2 className="text-3xl md:text-5xl font-bold">
        <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
          Security, Privacy & Compliance
        </span>
      </h2>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Your data is safe with SUCA. Security is not a feature — it’s a foundation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-1">
        {[
          { title: "End-to-end Encryption", desc: "Protected data flows across ingestion, storage, and analytics." },
          { title: "GDPR + Local Ready", desc: "Compliant by design for institutional deployments." },
          { title: "Private + Controlled AI", desc: "No student data is used for AI model training." },
        ].map((item) => (
          <div key={item.title} className="text-center p-3">
            <div className="text-purple-400 font-bold mb-2">{item.title}</div>
            <div className="text-sm text-gray-300 leading-relaxed">{item.desc}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
        {[
          { title: "Private demos with sample data", desc: "See SUCA in action before integrating real data." },
          { title: "On-premise / private cloud options", desc: "Deploy the way your institution prefers." },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl bg-white/5 border border-white/10 p-4 text-left">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5" />
              <div>
                <div className="text-white font-semibold">{item.title}</div>
                <div className="text-gray-300 text-sm mt-1 leading-relaxed">{item.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
</section>
        {/* WHY SUCA */}
        <section className="relative">
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-4 mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Why SUCA by Algoarn?
                </span>
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Research-driven, practical, and built for real institutional outcomes.
              </p>
            </motion.div>
            <div className="max-w-4xl mx-auto mt-10 flex flex-col items-center">
              <ul className="space-y-6">
                {[
                  "Built by AI engineers & researchers",
                  "Strong foundation in predictive analytics & computer vision",
                  "Research-driven, not hype-driven",
                  "Designed specifically for Indian education challenges",
                  "Part of Algoarn’s mission to build practical, human-centric AI",
                ].map((line, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-blue-500" />
                    <p className="text-lg text-gray-800">{line}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto rounded-3xl overflow-hidden px-6"
          >
            <div className="glass-card rounded-3xl overflow-hidden border border-white/20 p-12 text-center space-y-10 bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-32 translate-x-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl translate-y-32 -translate-x-32" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white/10 border border-white/20 mb-10">
                  <span className="text-xl text-white">Ready to Transform Academic Outcomes?</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
                  <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                    SUCA is Academic Intelligence Infrastructure
                  </span>
                </h2>
                <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8 mt-12">
                  Not just another edtech platform — SUCA helps institutions predict outcomes,
                  personalize learning, and intervene early with clarity and confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6 pb-12">
                  <Button
                    size="lg"
                    className="px-10 py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-2xl"
                    style={{ borderRadius: "2.5rem" }}
                    onClick={() => openModal("Institutional Demo")}
                  >
                    Book a Personalized Institutional Demo
                  </Button>
                </div>
                <p className="text-gray-400 text-xs mt-6">· Personalized demo in 24 hours</p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}