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
 
export default function SUCAPage() {
  return (
    <main className="min-h-screen pt-20 overflow-hidden">
      {/* 1. ENHANCED HERO SECTION */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-algoarn-black via-algoarn-black to-slate-900">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-algoarnBlue rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-algoarnAqua rounded-full blur-3xl animate-pulse-slower" />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse-slow" />
        </div>
 
        {/* Floating elements */}
        <motion.div
          className="absolute top-1/4 left-1/6"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Sparkles className="w-8 h-8 text-algoarnAqua/40" />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/5"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          <BarChart className="w-6 h-6 text-algoarnBlue/40" />
        </motion.div>
 
        {/* <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="max-w-6xl mx-auto text-center space-y-8"
        > */}
        <motion.div
  initial="initial"
  animate="animate"
  variants={staggerChildren}
  className="max-w-6xl mx-auto text-center space-y-8 pb-16 md:pb-24"
>
 
          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-algoarnAqua/10 border border-algoarnAqua/20 mb-6">
              <Sparkles className="w-4 h-4 text-algoarnAqua" />
              <span className="text-[13px] uppercase tracking-[0.2em] text-algoarnAqua font-semibold">
                Flagship AI Product
              </span>
            </div>
          </motion.div>
 
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
          >
            Transform Education  With AI Intelligence
           
          </motion.h1>
 
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            SUCA turns academic data into <span className="text-algoarnAqua font-semibold">actionable intelligence</span> — helping institutions predict outcomes, personalize learning, and drive excellence at every level.
          </motion.p>
 
          <motion.div
            variants={fadeInUp}
            className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact?type=SUCA+Demo">
              <Button size="lg" className="px-8 py-4 text-lg bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90" style={{borderRadius:'2.5rem', width:'104%'}}>
                <Sparkles className="w-5 h-5 mr-2" />
                Book a Demo
              </Button>
            </Link>
            <Link href="/contact?type=SUCA+Pricing">
              <Button size="lg" className="px-8 py-4 text-lg bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90" style={{borderRadius:'2.5rem', width:'104%'}}>
                View Pricing Plans
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
 
          {/* Stats preview */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>
 
      {/* 2. ENHANCED PROBLEM SECTION */}
      {/* <section className="section-padding bg-gradient-to-br from-slate-900 to-algoarn-black relative" style={{marginTop:'50px'}}> */}
      {/* <section
  className="section-padding bg-gradient-to-br from-slate-900 to-algoarn-black relative pb-20"
  style={{ marginTop: "50px" }}
>
 
        <div className="max-w-7xl mx-auto"> */}
        <section className="section-padding bg-gradient-to-br from-slate-900 to-algoarn-black relative" style={{marginTop:'50px'}}>
  <div className="max-w-7xl mx-auto pt-12">
 
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20"> */}
              {/* <AlertTriangle className="w-4 h-4 text-red-400" /> */}
              {/* <span className="text-[13px] uppercase tracking-[0.2em] text-red-400 font-semibold">
                The Challenge
              </span> */}
            {/* </div> */}
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Data-Rich But <span className="text-red-400">Insight-Poor</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Institutions are drowning in data but starving for actionable insights that actually improve student outcomes.
            </p>
          </motion.div>
 
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                problem: "Reactive, Not Proactive",
                description: "Issues are identified after exams, when it's too late for meaningful intervention.",
                icon: AlertTriangle,
                color: "red"
              },
              {
                problem: "Siloed Information",
                description: "Data lives in separate systems, preventing a holistic view of student progress.",
                icon: BarChart,
                color: "yellow"
              },
              {
                problem: "One-Size-Fits-All Approach",
                description: "Traditional methods can't provide the personalized insights each student needs.",
                icon: Users,
                color: "blue"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass-card p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105"
              >
                <div className={`w-14 h-14 rounded-2xl bg-${item.color}-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-7 h-7 text-${item.color}-400`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.problem}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Meet SUCA: Your <span className="text-algoarnAqua">AI Academic Partner</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              SUCA (Smart Unified Cognitive Analytics) is the intelligent layer that transforms raw academic data into meaningful, actionable insights for every stakeholder.
            </p>
           
            <div className="space-y-4">
              {[
                "Predict student performance before exams",
                "Identify at-risk students 6-8 weeks earlier",
                "Personalize learning paths for each student",
                "Automate administrative analytics tasks"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-algoarnAqua flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
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
            <div className="glass-card rounded-3xl border border-white/10 p-8 space-y-6 bg-gradient-to-br from-algoarn-black/50 to-slate-900/50">
              <div className="grid grid-cols-2 gap-4">
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
                    <div className="text-xs text-gray-400 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
             
              <div className="bg-algoarnAqua/10 border border-algoarnAqua/20 rounded-2xl p-4">
                <div className="flex items-center gap-2 text-algoarnAqua text-sm font-semibold">
                  <Star className="w-4 h-4 fill-algoarnAqua" />
                  Trusted by 50+ Institutions
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Universities, schools, and colleges across India
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
 
      {/* 4. ENHANCED EDITIONS SECTION */}
      <section className="section-padding bg-gradient-to-br from-algoarn-black to-slate-900 relative" style={{marginTop:'50px'}}>
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
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Choose Your <span className="text-algoarnBlue">SUCA Edition</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
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
              <Sparkles className="w-4 h-4 text-algoarnAqua" />
              <span className="text-[13px] uppercase tracking-[0.2em] text-algoarnAqua font-semibold">
                Powerful Features
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Intelligent Tools for <span className="text-algoarnAqua">Modern Education</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
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
                  <feature.icon className="w-7 h-7 text-algoarnAqua" />
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
                  <div className="text-sm text-gray-400">{item.desc}</div>
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-algoarnAqua/10 border border-algoarnAqua/20 mb-6">
                <Sparkles className="w-4 h-4 text-algoarnAqua" />
                <span className="text-[13px] uppercase tracking-[0.2em] text-algoarnAqua font-semibold">
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
             
              <p className="text-gray-400 text-sm mt-6">
                No credit card required • Personalized demo in 24 hours
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
 