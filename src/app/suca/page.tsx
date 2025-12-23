"use client";
 
import { motion } from "framer-motion";
import Link from "next/link";

import {
  GraduationCap,
  School,
  BookOpen,
  Brain,
  Target,
  TrendingUp,
  BarChart3,
  Users,
  Shield,
  AlertTriangle,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Star,
  BarChart,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
 
const editions = [
  {
    icon: GraduationCap,
    title: "SUCA University Edition",
    target: "Engineering colleges, autonomous institutions, universities",
    features: [
      "NAAC/NBA analytics",
      "CO/PO mapping",
      "Department-level dashboards",
      "AI test generator",
      "Student performance insights",
      "Placement readiness metrics",
      "Attendance + engagement tracking",
      "AI project tracker (coming soon)",
    ],
    gradient: "from-blue-500 to-cyan-500",
    color: "blue",
  },
  {
    icon: School,
    title: "SUCA School Edition",
    target: "CBSE | ICSE | State schools",
    features: [
      "Student performance analysis",
      "Learning level classification",
      "Daily/weekly tests",
      "AI behaviour insights",
      "Parent-friendly scorecards",
      "Personalised learning path",
    ],
    gradient: "from-cyan-500 to-teal-500",
    color: "teal",
  },
  {
    icon: BookOpen,
    title: "SUCA Pre-University Edition",
    target: "PUC / Junior colleges / +2",
    features: [
      "Topic-wise performance",
      "Competitive exam readiness",
      "Time/accuracy insights",
      "AI test generator",
      "Exam score prediction",
      "Structured study planner",
    ],
    gradient: "from-teal-500 to-green-500",
    color: "green",
  },
];
 
const coreFeatures = [
  {
    icon: Brain,
    title: "AI Test Generator",
    description:
      "Auto-generates tests with difficulty balance and topic coverage.",
  },
  {
    icon: Target,
    title: "Learning Recommendation Engine",
    description:
      "Suggests what each student should revise or practise next.",
  },
  {
    icon: TrendingUp,
    title: "Grade Prediction",
    description:
      "Predicts internal and final scores using historical trends.",
  },
  {
    icon: Shield,
    title: "Risk Classifier",
    description:
      "Flags at-risk students early so you can intervene in time.",
  },
  {
    icon: BarChart3,
    title: "Learning Analytics",
    description:
      "Multi-level insights at batch, course, programme and institution level.",
  },
  {
    icon: Users,
    title: "Attendance & Engagement",
    description:
      "Tracks presence, participation and engagement signals over time.",
  },
  {
    icon: AlertTriangle,
    title: "Weak-Topic Detection",
    description:
      "Identifies weak concepts and topics for targeted remediation.",
  },
];
 
const stats = [
  { number: "40%", label: "Early Risk Detection" },
  { number: "85%", label: "Accuracy in Predictions" },
  { number: "60%", label: "Time Saved on Analytics" },
  { number: "95%", label: "Institution Satisfaction" },
];
 
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};
 
const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
 const serviceParticles = Array.from({ length: 12 }, (_, i) => ({
  left: `${(i * 17) % 100}%`,
  top: `${(i * 37) % 100}%`,
  duration: 3 + (i % 3), // 3–5 seconds
  delay: (i % 4) * 0.4,  // 0, 0.4, 0.8, 1.2
}));
export default function SUCAPage() {
  return (
    <>
 <section className="relative min-h-[60vh] flex justify-center overflow-hidden w-screen -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)] bg-gradient-to-br from-[#f8faff] via-[#f3f4ff] to-[#eef9ff] pt-20 -mt-[31px]" style={{marginTop:'-25px'}}>

  {/* Background Glows */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute top-1/4 -left-40 w-[900px] h-[900px] bg-algoarnAqua/20 blur-3xl rounded-full animate-pulse-slow" />
    <div className="absolute bottom-1/4 -right-40 w-[900px] h-[900px] bg-algoarnBlue/25 blur-3xl rounded-full animate-pulse-slow" />
  </div>

  {/* Floating Particles */}
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

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center space-y-10"
  >
    {/* Badge */}
    {/* <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full 
      bg-algoarnAqua/10 border border-algoarnAqua/30 backdrop-blur-sm"> */}
      <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-algoarnAqua/10 border border-algoarnAqua/30 backdrop-blur-sm">

      <Sparkles className="w-4 h-4 text-algoarnAqua" />
      <span className="text-xs md:text-sm font-medium text-indigo-500 tracking-[0.25em] uppercase">
       Flagship AI Product
      </span>
    </div>

    {/* Heading */}
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black">
      Transform Education With AI Intelligence 
    </h1>

    {/* Subheading */}
    <p className="text-lg md:text-xl text-black leading-relaxed max-w-4xl mx-auto">
       SUCA turns academic data into{" "}
          <span className="text-algoarnAqua font-semibold">actionable intelligence</span> — helping
          institutions predict outcomes, personalize learning, and drive excellence at every level.
    </p>

    {/* CTAs */}
    
   <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 text-white" style={{ marginBottom: "78px" }}>

 {/* <Button
  asChild
  size="lg"
  className="px-10 py-4 text-base md:text-lg font-semibold bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-lg hover:from-indigo-600 hover:to-sky-600 transition-all"
  style={{ borderRadius: "9999px" }}
>
  <Link href="/contact?type=AI+Services " >Contact Us</Link>
</Button> */}
<Button
  asChild
  size="lg"
  className="px-10 py-4 text-base md:text-lg font-semibold bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-lg hover:from-indigo-600 hover:to-sky-600 transition-all"
  style={{ borderRadius: "9999px" }}
>
  <Link href="/contact?type=AI+Services">
    <span className="text-white">Book a Demo</span>
  </Link>
</Button>

<Button
  asChild
  size="lg"
  className="px-10 py-4 text-base md:text-lg font-semibold bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-lg hover:from-indigo-600 hover:to-sky-600 transition-all"
  style={{ borderRadius: "9999px" }}
>
  <Link href="/services?type=AI+Services">
    <span className="text-white">View Pricing Plans</span>
  </Link>
</Button>
  {/* <Button
    asChild
    size="lg"
    className="px-10 py-4 text-base md:text-lg font-semibold
    bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-lg
    hover:from-indigo-600 hover:to-sky-600 transition-all"
    style={{ borderRadius: "9999px" }}
  >
    <Link href="#services" className="flex items-center gap-2">
      Explore Services
    </Link>
  </Button> */}

</div>


  </motion.div>
</section>
      {/* 1. ENHANCED HERO SECTION */}
    {/* 1. ENHANCED HERO SECTION (FULL WIDTH FIX) */}

{/* 1. HERO SECTION (Transform box styled like "Your Data is 100% Secure") */}
{/* <section className="relative overflow-hidden"> */}
  {/* FULL-BLEED WRAPPER (breaks out of any max-w container / page padding) */}
  {/* <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden"> */}
    {/* Gradient Background */}
    {/* <div className="absolute inset-0 bg-gradient-to-br from-[#0B1324] via-[#0B1B33] to-[#07101E]" /> */}

    {/* Optional border + rounding (remove rounded if you want sharp edges) */}
    {/* <div className="relative"> */}
      {/* Subtle glow */}
      {/* <div className="absolute -top-24 -left-24 w-80 h-80 bg-algoarnAqua/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-algoarnBlue/20 blur-3xl rounded-full" /> */}

      {/* Content */}
      {/* <motion.div
        initial="initial"
        animate="animate"
        variants={staggerChildren}
        className="relative z-10 max-w-6xl mx-auto text-center space-y-8 py-20 md:py-28 px-6"
      >
        <motion.div variants={fadeInUp}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 mb-6">
            <Sparkles className="w-4 h-4 text-algoarnAqua" />
            <span className="text-[13px] uppercase tracking-[0.2em] text-white/80 font-semibold">
              Flagship AI Product
            </span>
          </div>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
        >
          Transform Education With AI Intelligence
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed"
        >
          SUCA turns academic data into{" "}
          <span className="text-algoarnAqua font-semibold">actionable intelligence</span> — helping
          institutions predict outcomes, personalize learning, and drive excellence at every level.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contact?type=SUCA+Demo">
            <Button
              size="lg"
              className="px-10 py-6 text-lg bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90"
              style={{ borderRadius: "2.5rem" }}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Book a Demo
            </Button>
          </Link>

          <Link href="/contact?type=SUCA+Pricing">
            <Button
              size="lg"
              className="px-10 py-6 text-lg bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90"
              style={{ borderRadius: "2.5rem" }}
            >
              View Pricing Plans
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </div>
</section> */}



 
      {/* 2. ENHANCED PROBLEM SECTION */}
      {/* <section className="section-padding bg-gradient-to-br from-slate-900 to-algoarn-black relative" style={{marginTop:'50px'}}> */}
      {/* <section
  className="section-padding bg-gradient-to-br from-slate-900 to-algoarn-black relative pb-20"
  style={{ marginTop: "50px" }}
>
 
        <div className="max-w-7xl mx-auto"> */}
        
 <section className="relative py-24 overflow-hidden" style={{marginTop:'35px'}}>
  {/* Base dark navy (same style as hero) */}
  {/* <div className="absolute inset-0 bg-gradient-to-br from-[#070F1F] via-[#081A33] to-[#040A16]" /> */}

    <div >
      {/* Gradient Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#0B1324] via-[#0B1B33] to-[#07101E]" /> */}
      </div>

  {/* Soft hero-like glows */}
  <div className="absolute -top-44 -left-44 w-[700px] h-[700px] bg-algoarnAqua/16 blur-[140px] rounded-full" />
  <div className="absolute -bottom-44 -right-44 w-[700px] h-[700px] bg-algoarnBlue/16 blur-[140px] rounded-full" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6">
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-black">
         <span className="text-red"> Data-Rich But Insight-Poor</span>
      </h2>
      <p className="mt-4 text-lg text-black/ max-w-3xl mx-auto">
        Institutions are drowning in data but starving for actionable insights
        that actually improve student outcomes.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="bg-[#071428] rounded-[36px] p-10 shadow-2xl">
        <div className="w-12 h-12 rounded-2xl bg-red-500/15 border border-red-400/30 flex items-center justify-center mb-6">
          <AlertTriangle className="w-6 h-6 text-red-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Reactive, Not Proactive</h3>
        <p className="text-white/70 leading-relaxed">
          Issues are identified after exams, when it’s too late for meaningful intervention.
        </p>
      </div>

      <div className="bg-[#071428] rounded-[36px] p-10 shadow-2xl">
        <div className="w-12 h-12 rounded-2xl bg-yellow-400/15 border border-yellow-300/30 flex items-center justify-center mb-6">
          <BarChart className="w-6 h-6 text-yellow-300" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Siloed Information</h3>
        <p className="text-white/70 leading-relaxed">
          Data lives in separate systems, preventing a holistic view of student progress.
        </p>
      </div>

      <div className="bg-[#071428] rounded-[36px] p-10 shadow-2xl">
        <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center mb-6">
          <Users className="w-6 h-6 text-blue-300" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">One-Size-Fits-All Approach</h3>
        <p className="text-white/70 leading-relaxed">
          Traditional methods can’t provide the personalized insights each student needs.
        </p>
      </div>
    </div>
  </div>
</section>


{/* 3. ENHANCED PRODUCT OVERVIEW */}
      <section className="section-padding relative" style={{marginTop:'50px'}}>
        <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-algoarnAqua/10 border border-algoarnAqua/20">
              <Lightbulb className="w-4 h-4 text-algoarnAqua" />
              <span className="text-[13px] uppercase tracking-[0.2em] text-algoarnAqua font-semibold">
                The Solution
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-black">
              Meet SUCA: Your <span className="text-algoarnAqua">AI Academic Partner</span>
            </h2>
            <p className="text-lg text-black-300 leading-relaxed">
              SUCA (Smart Unified Cognitive Analytics) is the intelligent layer that transforms raw academic data into meaningful, actionable insights for every stakeholder.
            </p>
           
            <div className="space-y-4 " >
              {[
                "Predict student performance before exams",
                "Identify at-risk students 6-8 weeks earlier",
                "Personalize learning paths for each student",
                "Automate administrative analytics tasks"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-algoarnAqua flex-shrink-0" />
                  <span className="text-black-300">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
 
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card rounded-3xl border border-white p-8 space-y-6 bg-gradient-to-br from-algoarn-black/50 to-slate-900/50">
              <div className="grid grid-cols-2 gap-4 text-white">
                {[
                  { label: "Predictive Analytics", value: "94%", color: "from-green-500 to-emerald-500" },
                  { label: "Risk Detection", value: "89%", color: "from-blue-500 to-cyan-500" },
                  { label: "Time Saved", value: "12hrs/wk", color: "from-purple-500 to-pink-500" },
                  { label: "Accuracy", value: "96%", color: "from-orange-500 to-red-500" }
                ].map((item, index) => (
                  <div key={index} className="text-center p-4 rounded-2xl bg-white/5">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.value}
                    </div>
                    <div className="text-xs text-white mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
             
              <div className="bg-algoarnAqua/10 border border-white rounded-2xl p-4">
                <div className="flex items-center gap-2 text-white text-sm font-semibold">
                  <Star className="w-4 h-4 fill-algoarnAqua" />
                  Trusted by 50+ Institutions
                </div>
                <p className="text-xs text-white mt-1">
                  Universities, schools, and colleges across India
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
 
      {/* 4. ENHANCED EDITIONS SECTION */}
      <section className="section-padding " style={{marginTop:'50px'}}>
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-algoarnBlue/10 border border-algoarnBlue/20">
              <School className="w-4 h-4 text-algoarnBlue" />
              <span className="text-[13px] uppercase tracking-[0.2em] text-algoarnBlue font-semibold">
                Tailored Solutions
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-black">
              Choose Your <span className="text-algoarnBlue">SUCA Edition</span>
            </h2>
            <p className="text-black-400 text-lg max-w-3xl mx-auto">
              One powerful AI engine, perfectly adapted for your specific educational context and challenges.
            </p>
          </motion.div>
 
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {editions.map((edition, index) => (
              <motion.div
                key={edition.title}
                variants={fadeInUp}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="glass-card rounded-3xl border border-white/10 p-8 flex flex-col h-full relative group-hover:border-white/20 transition-all duration-300">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${edition.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <edition.icon className="w-8 h-8 text-white" />
                  </div>
                 
                  <h3 className="text-2xl font-bold text-white mb-2">{edition.title}</h3>
                  <p className="text-algoarnAqua font-semibold mb-6">{edition.target}</p>
                 
                  <ul className="text-gray-300 space-y-3 mb-8 flex-1">
                    {edition.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-algoarnAqua flex-shrink-0" />
                        <span className="text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                 
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs text-gray-500">
                      Customized implementation for your institution
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
 
      {/* 5. ENHANCED FEATURES SECTION */}
      <section className="section-padding relative" style={{marginTop:'50px'}}>
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-algoarnAqua/10 border border-algoarnAqua/20">
              {/* <Sparkles className="w-4 h-4 text-algoarnAqua" /> */}
              <Sparkles className="w-8 h-8 text-white/60" />

              <span className="text-[13px] uppercase tracking-[0.2em] text-black font-semibold">
               The Powerful Features
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Intelligent Tools for <span className="text-algoarnAqua">Modern Education</span>
            </h2>
            <p className="text-black text-lg max-w-3xl mx-auto">
              SUCA combines cutting-edge AI with deep educational expertise to deliver insights that matter.
            </p>
          </motion.div>
 
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="glass-card p-8 rounded-3xl border border-white/10 hover:border-algoarnAqua/30 transition-all duration-300 group hover:scale-105"
              >
                <div className="p-4 rounded-2xl bg-algoarnAqua/10 inline-flex mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
 
      {/* 6. ENHANCED PRIVACY SECTION */}
     <section className="section-padding bg-gradient-to-br from-slate-900 to-algoarn-black relative" style={{marginTop:'50px'}}>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="max-w-6xl mx-auto"
  >
    <div className="glass-card rounded-3xl border border-white/10 p-12 text-center space-y-8 bg-gradient-to-br from-algoarn-black/80 to-slate-900/80">
            <div className="inline-flex p-4 rounded-2xl bg-green-500/10 border border-green-500/20">
              <Shield className="w-12 h-12 text-green-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Your Data is <span className="text-green-400">100% Secure</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              We understand the sensitivity of academic data. SUCA operates with the highest standards of privacy and security, ensuring your institution's and students' data remains protected.
            </p>
           
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              {[
                { title: "Private Demos", desc: "Custom demonstrations with sample data" },
                { title: "Data Encryption", desc: "End-to-end encryption for all data" },
                { title: "Compliance Ready", desc: "GDPR and local regulation compliant" }
              ].map((item, index) => (
                <div key={index} className="text-center p-4">
                  <div className="text-green-400 font-semibold mb-2">{item.title}</div>
                  <div className="text-sm text-white">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
 
      {/* 7. ENHANCED FINAL CTA */}
      <section className="section-padding" style={{marginTop:'50px'}}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="glass-card rounded-3xl border border-white/10 p-12 text-center space-y-8 bg-gradient-to-br from-algoarnAqua/5 to-algoarnBlue/5 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-algoarnAqua/10 rounded-full blur-3xl -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-algoarnBlue/10 rounded-full blur-3xl translate-y-32 -translate-x-32" />
           
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-algoarnAqua/10 border border-black mb-6">
                <Sparkles className="w-4 h-4 text-algoarnAqua" />
                <span className="text-[13px] uppercase tracking-[0.2em] text-white font-semibold">
                  Ready to Transform?
                </span>
              </div>
             
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Start Your AI-Powered Education Journey
              </h2>
             
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
                Join 50+ institutions already using SUCA to drive better outcomes, save time, and make data-driven decisions.
              </p>
 
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact?type=SUCA+Demo">
                  <Button size="lg" className="px-10 py-6 text-lg bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90" style={{borderRadius:'2.5rem'}}>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Book a Personalized Demo
                  </Button>
                </Link>
                <Link href="/contact?type=SUCA+Pricing">
                     <Button size="lg" className="px-10 py-6 text-lg bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90" style={{borderRadius:'2.5rem'}}>
                    View Custom Pricing
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
             
              <p className="text-white text-sm mt-6">
                No credit card required • Personalized demo in 24 hours
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
 