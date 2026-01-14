// // // "use client";
 
// // // import { motion } from "framer-motion";
// // // import Link from "next/link";

// // // import {
// // //   GraduationCap,
// // //   School,
// // //   BookOpen,
// // //   Brain,
// // //   Target,
// // //   TrendingUp,
// // //   BarChart3,
// // //   Users,
// // //   Shield,
// // //   AlertTriangle,
// // //   Sparkles,
// // //   CheckCircle,
// // //   ArrowRight,
// // //   Star,
// // //   BarChart,
// // //   Lightbulb,
// // // } from "lucide-react";
// // // import { Button } from "@/components/ui/button";
 
// // // const editions = [
// // //   {
// // //     icon: GraduationCap,
// // //     title: "SUCA University Edition",
// // //     target: "Engineering colleges, autonomous institutions, universities",
// // //     features: [
// // //       "NAAC/NBA analytics",
// // //       "CO/PO mapping",
// // //       "Department-level dashboards",
// // //       "AI test generator",
// // //       "Student performance insights",
// // //       "Placement readiness metrics",
// // //       "Attendance + engagement tracking",
// // //       "AI project tracker (coming soon)",
// // //     ],
// // //     gradient: "from-blue-500 to-cyan-500",
// // //     color: "blue",
// // //   },
// // //   {
// // //     icon: School,
// // //     title: "SUCA School Edition",
// // //     target: "CBSE | ICSE | State schools",
// // //     features: [
// // //       "Student performance analysis",
// // //       "Learning level classification",
// // //       "Daily/weekly tests",
// // //       "AI behaviour insights",
// // //       "Parent-friendly scorecards",
// // //       "Personalised learning path",
// // //     ],
// // //     gradient: "from-cyan-500 to-teal-500",
// // //     color: "teal",
// // //   },
// // //   {
// // //     icon: BookOpen,
// // //     title: "SUCA Pre-University Edition",
// // //     target: "PUC / Junior colleges / +2",
// // //     features: [
// // //       "Topic-wise performance",
// // //       "Competitive exam readiness",
// // //       "Time/accuracy insights",
// // //       "AI test generator",
// // //       "Exam score prediction",
// // //       "Structured study planner",
// // //     ],
// // //     gradient: "from-teal-500 to-green-500",
// // //     color: "green",
// // //   },
// // // ];
 
// // // const coreFeatures = [
// // //   {
// // //     icon: Brain,
// // //     title: "AI Test Generator",
// // //     description:
// // //       "Auto-generates tests with difficulty balance and topic coverage.",
// // //   },
// // //   {
// // //     icon: Target,
// // //     title: "Learning Recommendation Engine",
// // //     description:
// // //       "Suggests what each student should revise or practise next.",
// // //   },
// // //   {
// // //     icon: TrendingUp,
// // //     title: "Grade Prediction",
// // //     description:
// // //       "Predicts internal and final scores using historical trends.",
// // //   },
// // //   {
// // //     icon: Shield,
// // //     title: "Risk Classifier",
// // //     description:
// // //       "Flags at-risk students early so you can intervene in time.",
// // //   },
// // //   {
// // //     icon: BarChart3,
// // //     title: "Learning Analytics",
// // //     description:
// // //       "Multi-level insights at batch, course, programme and institution level.",
// // //   },
// // //   {
// // //     icon: Users,
// // //     title: "Attendance & Engagement",
// // //     description:
// // //       "Tracks presence, participation and engagement signals over time.",
// // //   },
// // //   {
// // //     icon: AlertTriangle,
// // //     title: "Weak-Topic Detection",
// // //     description:
// // //       "Identifies weak concepts and topics for targeted remediation.",
// // //   },
// // // ];
 
// // // const stats = [
// // //   { number: "40%", label: "Early Risk Detection" },
// // //   { number: "85%", label: "Accuracy in Predictions" },
// // //   { number: "60%", label: "Time Saved on Analytics" },
// // //   { number: "95%", label: "Institution Satisfaction" },
// // // ];
 
// // // const fadeInUp = {
// // //   initial: { opacity: 0, y: 30 },
// // //   animate: { opacity: 1, y: 0 },
// // // };
 
// // // const staggerChildren = {
// // //   animate: {
// // //     transition: {
// // //       staggerChildren: 0.1,
// // //     },
// // //   },
// // // };
// // //  const serviceParticles = Array.from({ length: 12 }, (_, i) => ({
// // //   left: `${(i * 17) % 100}%`,
// // //   top: `${(i * 37) % 100}%`,
// // //   duration: 3 + (i % 3), // 3–5 seconds
// // //   delay: (i % 4) * 0.4,  // 0, 0.4, 0.8, 1.2
// // // }));
// // // export default function SUCAPage() {
// // //   return (
// // //     <>
// // //  <section className="relative min-h-[60vh] flex justify-center overflow-hidden w-screen -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)] bg-gradient-to-br from-[#f8faff] via-[#f3f4ff] to-[#eef9ff] pt-20 -mt-[31px]" style={{marginTop:'-25px'}}>

// // //   {/* Background Glows */}
// // //   <div className="absolute inset-0 pointer-events-none overflow-hidden">
// // //     <div className="absolute top-1/4 -left-40 w-[900px] h-[900px] bg-algoarnAqua/20 blur-3xl rounded-full animate-pulse-slow" />
// // //     <div className="absolute bottom-1/4 -right-40 w-[900px] h-[900px] bg-algoarnBlue/25 blur-3xl rounded-full animate-pulse-slow" />
// // //   </div>

// // //   {/* Floating Particles */}
// // //   <div className="absolute inset-0 opacity-40 pointer-events-none">
// // //     {serviceParticles.map((p, i) => (
// // //       <motion.div
// // //         key={i}
// // //         className="absolute w-1 h-1 bg-algoarnAqua rounded-full"
// // //         style={{ left: p.left, top: p.top }}
// // //         animate={{ y: [0, -30, 0], opacity: [0, 1, 0] }}
// // //         transition={{
// // //           duration: p.duration,
// // //           delay: p.delay,
// // //           repeat: Infinity,
// // //           ease: "easeInOut",
// // //         }}
// // //       />
// // //     ))}
// // //   </div>

// // //   {/* Content */}
// // //   <motion.div
// // //     initial={{ opacity: 0, y: 60 }}
// // //     animate={{ opacity: 1, y: 0 }}
// // //     transition={{ duration: 0.8, ease: "easeOut" }}
// // //     className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center space-y-10"
// // //   >
// // //     {/* Badge */}
// // //     {/* <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full 
// // //       bg-algoarnAqua/10 border border-algoarnAqua/30 backdrop-blur-sm"> */}
// // //       <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-algoarnAqua/10 border border-algoarnAqua/30 backdrop-blur-sm">

// // //       <Sparkles className="w-4 h-4 text-algoarnAqua" />
// // //       <span className="text-xs md:text-sm font-medium text-indigo-500 tracking-[0.25em] uppercase">
// // //        Flagship AI Product
// // //       </span>
// // //     </div>

// // //     {/* Heading */}
// // //     <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black">
// // //       Transform Education With AI Intelligence 
// // //     </h1>

// // //     {/* Subheading */}
// // //     <p className="text-xl leading-7 max-w-3xl mx-auto text-black">
// // //        SUCA turns academic data into{" "}
// // //           <span className="text-xl leading-relaxed max-w-3xl mx-auto text-black font-semibold">actionable intelligence</span> — helping
// // //           institutions predict outcomes, personalize learning, and drive excellence at every level.
// // //     </p>

// // //     {/* CTAs */}
    
// // //    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 text-white" style={{ marginBottom: "78px" }}>

// // //  {/* <Button
// // //   asChild
// // //   size="lg"
// // //   className="px-10 py-4 text-base md:text-lg font-semibold bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-lg hover:from-indigo-600 hover:to-sky-600 transition-all"
// // //   style={{ borderRadius: "9999px" }}
// // // >
// // //   <Link href="/contact?type=AI+Services " >Contact Us</Link>
// // // </Button> */}
// // // <Button
// // //   asChild
// // //   size="lg"
// // //   className="px-10 py-4 text-base md:text-lg font-semibold bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-lg hover:from-indigo-600 hover:to-sky-600 transition-all"
// // //   style={{ borderRadius: "9999px" }}
// // // >
// // //   <Link href="/contact?type=AI+Services">
// // //     <span className="text-white">Book a Demo</span>
// // //   </Link>
// // // </Button>

// // // <Button
// // //   asChild
// // //   size="lg"
// // //   className="px-10 py-4 text-base md:text-lg font-semibold bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-lg hover:from-indigo-600 hover:to-sky-600 transition-all"
// // //   style={{ borderRadius: "9999px" }}
// // // >
// // //   <Link href="/services?type=AI+Services">
// // //     <span className="text-white">View Pricing Plans</span>
// // //   </Link>
// // // </Button>
// // //   {/* <Button
// // //     asChild
// // //     size="lg"
// // //     className="px-10 py-4 text-base md:text-lg font-semibold
// // //     bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-lg
// // //     hover:from-indigo-600 hover:to-sky-600 transition-all"
// // //     style={{ borderRadius: "9999px" }}
// // //   >
// // //     <Link href="#services" className="flex items-center gap-2">
// // //       Explore Services
// // //     </Link>
// // //   </Button> */}

// // // </div>


// // //   </motion.div>
// // // </section>
// // //       {/* 1. ENHANCED HERO SECTION */}
// // //     {/* 1. ENHANCED HERO SECTION (FULL WIDTH FIX) */}

// // // {/* 1. HERO SECTION (Transform box styled like "Your Data is 100% Secure") */}
// // // {/* <section className="relative overflow-hidden"> */}
// // //   {/* FULL-BLEED WRAPPER (breaks out of any max-w container / page padding) */}
// // //   {/* <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden"> */}
// // //     {/* Gradient Background */}
// // //     {/* <div className="absolute inset-0 bg-gradient-to-br from-[#0B1324] via-[#0B1B33] to-[#07101E]" /> */}

// // //     {/* Optional border + rounding (remove rounded if you want sharp edges) */}
// // //     {/* <div className="relative"> */}
// // //       {/* Subtle glow */}
// // //       {/* <div className="absolute -top-24 -left-24 w-80 h-80 bg-algoarnAqua/20 blur-3xl rounded-full" />
// // //       <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-algoarnBlue/20 blur-3xl rounded-full" /> */}

// // //       {/* Content */}
// // //       {/* <motion.div
// // //         initial="initial"
// // //         animate="animate"
// // //         variants={staggerChildren}
// // //         className="relative z-10 max-w-6xl mx-auto text-center space-y-8 py-20 md:py-28 px-6"
// // //       >
// // //         <motion.div variants={fadeInUp}>
// // //           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 mb-6">
// // //             <Sparkles className="w-4 h-4 text-algoarnAqua" />
// // //             <span className="text-[13px] uppercase tracking-[0.2em] text-white/80 font-semibold">
// // //               Flagship AI Product
// // //             </span>
// // //           </div>
// // //         </motion.div>

// // //         <motion.h1
// // //           variants={fadeInUp}
// // //           className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
// // //         >
// // //           Transform Education With AI Intelligence
// // //         </motion.h1>

// // //         <motion.p
// // //           variants={fadeInUp}
// // //           className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed"
// // //         >
// // //           SUCA turns academic data into{" "}
// // //           <span className="text-algoarnAqua font-semibold">actionable intelligence</span> — helping
// // //           institutions predict outcomes, personalize learning, and drive excellence at every level.
// // //         </motion.p>

// // //         <motion.div
// // //           variants={fadeInUp}
// // //           className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
// // //         >
// // //           <Link href="/contact?type=SUCA+Demo">
// // //             <Button
// // //               size="lg"
// // //               className="px-10 py-6 text-lg bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90"
// // //               style={{ borderRadius: "2.5rem" }}
// // //             >
// // //               <Sparkles className="w-5 h-5 mr-2" />
// // //               Book a Demo
// // //             </Button>
// // //           </Link>

// // //           <Link href="/contact?type=SUCA+Pricing">
// // //             <Button
// // //               size="lg"
// // //               className="px-10 py-6 text-lg bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90"
// // //               style={{ borderRadius: "2.5rem" }}
// // //             >
// // //               View Pricing Plans
// // //               <ArrowRight className="w-4 h-4 ml-2" />
// // //             </Button>
// // //           </Link>
// // //         </motion.div>
// // //       </motion.div>
// // //     </div>
// // //   </div>
// // // </section> */}



 
// // //       {/* 2. ENHANCED PROBLEM SECTION */}
// // //       {/* <section className="section-padding bg-gradient-to-br from-slate-900 to-algoarn-black relative" style={{marginTop:'50px'}}> */}
// // //       {/* <section
// // //   className="section-padding bg-gradient-to-br from-slate-900 to-algoarn-black relative pb-20"
// // //   style={{ marginTop: "50px" }}
// // // >
 
// // //         <div className="max-w-7xl mx-auto"> */}
        
// // // <section className="relative py-24 " style={{ marginTop: "35px" }}>
// // //   {/* Soft hero-like glows */}
// // //   <div className="absolute -top-44 -left-44 w-[700px] h-[700px] bg-algoarnAqua/16 blur-[140px] rounded-full" />
// // //   <div className="absolute -bottom-44 -right-44 w-[700px] h-[700px] bg-algoarnBlue/16 blur-[140px] rounded-full" />

// // //   <div className="relative z-10 max-w-7xl mx-auto px-6">
// // //     <div className="text-center mb-20">
// // //       <h2 className="text-4xl md:text-5xl font-extrabold text-black">
// // //         Data-Rich But Insight-Poor
// // //       </h2>
// // //       <p className="mt-4 text-xl leading-relaxed max-w-3xl mx-auto text-slate-600">
// // //         Institutions are drowning in data but starving for actionable insights
// // //         that actually improve student outcomes.
// // //       </p>
// // //     </div>

// // //     {/* ✅ Center grid like Image 2 */}
// // //     <div className="flex justify-center">
// // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-14 place-items-center">
// // //         {[
// // //           {
// // //             title: "Reactive, Not Proactive",
// // //             desc: "Issues are identified after exams, when it’s too late for meaningful intervention.",
// // //             icon: <AlertTriangle className="w-6 h-6 text-red-400" />,
// // //             bg: "bg-red-500/15 border-red-400/30",
// // //           },
// // //           {
// // //             title: "Siloed Information",
// // //             desc: "Data lives in separate systems, preventing a holistic view of student progress.",
// // //             icon: <BarChart className="w-6 h-6 text-yellow-300" />,
// // //             bg: "bg-yellow-400/15 border-yellow-300/30",
// // //           },
// // //           {
// // //             title: "One-Size-Fits-All Approach",
// // //             desc: "Traditional methods can’t provide the personalized insights each student needs.",
// // //             icon: <Users className="w-6 h-6 text-blue-300" />,
// // //             bg: "bg-blue-500/15 border-blue-400/30",
// // //           },
// // //         ].map((card, i) => (
// // //           <div key={i} className="relative group w-full max-w-[300px]">
// // //             {/* ✅ Neon glow layer (same concept as Image 2) */}
// // //             <div className="absolute -inset-6 bg-gradient-to-r from-algoarnAqua/15 via-sky-400/15 to-algoarnBlue/15 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

// // //             {/* ✅ Card background (same as Image 2) */}
// // //             <div
// // //               className="
// // //                 relative aspect-square
// // //                 rounded-[40px]
// // //                 bg-gradient-to-b from-[#16283F] via-[#0E2036] to-[#081426]
// // //                 border border-white/10
// // //                 shadow-[0_30px_90px_rgba(2,6,23,0.25)]
// // //                 px-8 py-8
// // //                 flex flex-col items-center text-center
// // //                 transition-transform duration-500
// // //                 group-hover:-translate-y-2
// // //               "
// // //             >
// // //               {/* Icon */}
// // //               <div className={`w-14 h-14 rounded-2xl ${card.bg} border flex items-center justify-center`}>
// // //                 {card.icon}
// // //               </div>

// // //               {/* Title */}
// // //               <h3 className="mt-6 text-lg font-extrabold text-white leading-snug min-h-[56px] flex items-center justify-center">
// // //                 {card.title}
// // //               </h3>

// // //               {/* Description */}
// // //               <p className="mt-3 text-sm text-white/70 leading-relaxed">
// // //                 {card.desc}
// // //               </p>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   </div>
// // // </section>



// // // {/* 3. ENHANCED PRODUCT OVERVIEW */}
// // //       <section className="section-padding relative" style={{marginTop:'50px'}}>
// // //         <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-2 items-center">
// // //           <motion.div
// // //             initial={{ opacity: 0, x: -30 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //             viewport={{ once: true }}
// // //             className="space-y-6"
// // //           >
// // //             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-algoarnAqua/10 border border-algoarnAqua/20">
// // //               <Lightbulb className="w-4 h-4 text-algoarnAqua" />
// // //               <span className="text-[13px] uppercase tracking-[0.2em] text-algoarnAqua font-semibold">
// // //                 The Solution
// // //               </span>
// // //             </div>
// // //             <h2 className="text-4xl md:text-5xl font-display font-bold text-black">
// // //               Meet SUCA: Your <span className="text-algoarnAqua">AI Academic Partner</span>
// // //             </h2>
// // //             <p className="text-lg text-black-300 leading-relaxed">
// // //               SUCA (Smart Unified Cognitive Analytics) is the intelligent layer that transforms raw academic data into meaningful, actionable insights for every stakeholder.
// // //             </p>
           
// // //             <div className="space-y-4 " >
// // //               {[
// // //                 "Predict student performance before exams",
// // //                 "Identify at-risk students 6-8 weeks earlier",
// // //                 "Personalize learning paths for each student",
// // //                 "Automate administrative analytics tasks"
// // //               ].map((benefit, index) => (
// // //                 <div key={index} className="flex items-center gap-3">
// // //                   <CheckCircle className="w-5 h-5 text-algoarnAqua flex-shrink-0" />
// // //                   <span className="text-black-300">{benefit}</span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </motion.div>
 
// // //           <motion.div
// // //             initial={{ opacity: 0, x: 30 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //             viewport={{ once: true }}
// // //             className="relative"
// // //           >
// // //             <div className="glass-card rounded-3xl border border-white p-8 space-y-6 bg-gradient-to-br from-algoarn-black/50 to-slate-900/50">
// // //               <div className="grid grid-cols-2 gap-4 text-white">
// // //                 {[
// // //                   { label: "Predictive Analytics", value: "94%", color: "from-green-500 to-emerald-500" },
// // //                   { label: "Risk Detection", value: "89%", color: "from-blue-500 to-cyan-500" },
// // //                   { label: "Time Saved", value: "12hrs/wk", color: "from-purple-500 to-pink-500" },
// // //                   { label: "Accuracy", value: "96%", color: "from-orange-500 to-red-500" }
// // //                 ].map((item, index) => (
// // //                   <div key={index} className="text-center p-4 rounded-2xl bg-white/5">
// // //                     <div className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
// // //                       {item.value}
// // //                     </div>
// // //                     <div className="text-xs text-white mt-1">{item.label}</div>
// // //                   </div>
// // //                 ))}
// // //               </div>
             
// // //               <div className="bg-algoarnAqua/10 border border-white rounded-2xl p-4">
// // //                 <div className="flex items-center gap-2 text-white text-sm font-semibold">
// // //                   <Star className="w-4 h-4 fill-algoarnAqua" />
// // //                   Trusted by 50+ Institutions
// // //                 </div>
// // //                 <p className="text-xs text-white mt-1">
// // //                   Universities, schools, and colleges across India
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </section>
// // // <section className="relative py-24 " style={{ marginTop: "50px" }}>
// // //   {/* Ambient background glow */}
// // //   <div className="absolute -top-44 -left-44 w-[700px] h-[700px] bg-algoarnAqua/12 blur-[160px] rounded-full" />
// // //   <div className="absolute -bottom-44 -right-44 w-[700px] h-[700px] bg-algoarnBlue/12 blur-[160px] rounded-full" />

// // //   <div className="relative z-10 max-w-7xl mx-auto px-6">
// // //     {/* Heading */}
// // //     <motion.div
// // //       initial={{ opacity: 0, y: 30 }}
// // //       whileInView={{ opacity: 1, y: 0 }}
// // //       viewport={{ once: true }}
// // //       className="text-center space-y-4 mb-16"
// // //     >
// // //       <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-algoarnBlue/10 border border-algoarnBlue/20">
// // //         <School className="w-4 h-4 text-algoarnBlue" />
// // //         <span className="text-[13px] uppercase tracking-[0.2em] text-algoarnBlue font-semibold">
// // //           Tailored Solutions
// // //         </span>
// // //       </div>

// // //       <h2 className="text-4xl md:text-5xl font-display font-bold text-black">
// // //         Choose Your <span className="text-algoarnBlue">SUCA Edition</span>
// // //       </h2>

// // //       <p className="text-xl leading-7 max-w-3xl mx-auto text-black">
// // //         One powerful AI engine, perfectly adapted for your specific educational context and challenges.
// // //       </p>
// // //     </motion.div>

// // //     {/* Cards */}
// // //     <motion.div
// // //       variants={staggerChildren}
// // //       initial="initial"
// // //       whileInView="animate"
// // //       viewport={{ once: true }}
// // //       className="
// // //         grid grid-cols-1 lg:grid-cols-3 gap-8
// // //         items-stretch
// // //       "
// // //     >
// // //       {editions.map((edition) => (
// // //         <motion.div
// // //           key={edition.title}
// // //           variants={fadeInUp}
// // //           className="relative group w-full max-w-[420px] mx-auto h-full"
// // //         >
// // //           {/* Neon glow */}
// // //           {/* <div
// // //             className={`
// // //               pointer-events-none absolute -inset-6 rounded-[44px]
// // //               bg-gradient-to-r ${edition.gradient}
// // //               blur-3xl opacity-50
// // //               group-hover:opacity-90 transition-opacity duration-500
// // //             `}
// // //           /> */}

// // //           {/* Card */}
// // //           <div
// // //             className="
// // //               relative h-full
// // //               rounded-[40px]
// // //               bg-gradient-to-b from-[#16283F] via-[#0E2036] to-[#081426]
// // //               border border-white/10
// // //               shadow-[0_30px_90px_rgba(2,6,23,0.25)]
// // //               p-8
// // //               flex flex-col
// // //               transition-transform duration-500
// // //               group-hover:-translate-y-2
// // //             "
// // //           >
// // //             {/* Top icon bar */}
// // //             <div
// // //               className={`
// // //                 w-full h-16 rounded-2xl
// // //                 bg-gradient-to-r ${edition.gradient}
// // //                 flex items-center px-6
// // //                 border border-white/10
// // //                 mb-7
// // //               `}
// // //             >
// // //               <edition.icon className="w-7 h-7 text-white" />
// // //             </div>

// // //             {/* Title + target */}
// // //             <h3 className="text-2xl font-bold text-white mb-2">
// // //               {edition.title}
// // //             </h3>
// // //             <p className="text-white font-medium mb-6">
// // //               {edition.target}
// // //             </p>

// // //             {/* Features */}
// // //             <ul className="text-white space-y-3 flex-1">
// // //               {edition.features.map((f) => (
// // //                 <li key={f} className="flex items-center gap-3">
// // //                   <CheckCircle className="w-4 h-4 text-algoarnAqua flex-shrink-0" />
// // //                   <span className="text-sm text-white leading-relaxed">{f}</span>
// // //                 </li>
// // //               ))}
// // //             </ul>

// // //             {/* Footer stays aligned */}
// // //             <div className="pt-5 mt-8 border-t border-white/10">
// // //               <p className="text-xs text-white/40">
// // //                 Customized implementation for your institution
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </motion.div>
// // //       ))}
// // //     </motion.div>
// // //   </div>
// // // </section>


// // //       {/* 4. ENHANCED EDITIONS SECTION */}
// // //       {/* <section className="section-padding " style={{marginTop:'50px'}}>
// // //         <div className="max-w-7xl mx-auto space-y-16">
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             className="text-center space-y-4"
// // //           >
// // //             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-algoarnBlue/10 border border-algoarnBlue/20">
// // //               <School className="w-4 h-4 text-algoarnBlue" />
// // //               <span className="text-[13px] uppercase tracking-[0.2em] text-algoarnBlue font-semibold">
// // //                 Tailored Solutions
// // //               </span>
// // //             </div>
// // //             <h2 className="text-4xl md:text-5xl font-display font-bold text-black">
// // //               Choose Your <span className="text-algoarnBlue">SUCA Edition</span>
// // //             </h2>
// // //             <p className="text-black-400 text-lg max-w-3xl mx-auto">
// // //               One powerful AI engine, perfectly adapted for your specific educational context and challenges.
// // //             </p>
// // //           </motion.div>
 
// // //           <motion.div
// // //             variants={staggerChildren}
// // //             initial="initial"
// // //             whileInView="animate"
// // //             viewport={{ once: true }}
// // //             className="grid grid-cols-1 lg:grid-cols-3 gap-8"
// // //           >
// // //             {editions.map((edition, index) => (
// // //               <motion.div
// // //                 key={edition.title}
// // //                 variants={fadeInUp}
// // //                 className="group relative"
// // //               >
// // //                 <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
// // //                 <div className="glass-card rounded-3xl border border-white/10 p-8 flex flex-col h-full relative group-hover:border-white/20 transition-all duration-300">
// // //                   <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${edition.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
// // //                     <edition.icon className="w-8 h-8 text-white" />
// // //                   </div>
                 
// // //                   <h3 className="text-2xl font-bold text-white mb-2">{edition.title}</h3>
// // //                   <p className="text-algoarnAqua font-semibold mb-6">{edition.target}</p>
                 
// // //                   <ul className="text-gray-300 space-y-3 mb-8 flex-1">
// // //                     {edition.features.map((f) => (
// // //                       <li key={f} className="flex items-center gap-3">
// // //                         <CheckCircle className="w-4 h-4 text-algoarnAqua flex-shrink-0" />
// // //                         <span className="text-sm">{f}</span>
// // //                       </li>
// // //                     ))}
// // //                   </ul>
                 
// // //                   <div className="pt-4 border-t border-white/10">
// // //                     <p className="text-xs text-gray-500">
// // //                       Customized implementation for your institution
// // //                     </p>
// // //                   </div>
// // //                 </div>
// // //               </motion.div>
// // //             ))}
// // //           </motion.div>
// // //         </div>
// // //       </section> */}
 
// // //       {/* 5. ENHANCED FEATURES SECTION */}
// // //       <section className="section-padding relative mt-12 ">
// // //   {/* Ambient background glow */}
// // //   <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-algoarnAqua/10 blur-[140px] rounded-full" />
// // //   <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-algoarnBlue/10 blur-[140px] rounded-full" />

// // //   <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-16">
// // //     {/* Header */}
// // //     <motion.div
// // //       initial={{ opacity: 0, y: 30 }}
// // //       whileInView={{ opacity: 1, y: 0 }}
// // //       viewport={{ once: true }}
// // //       className="text-center space-y-4"
// // //     >
// // //       <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-algoarnAqua/10 border border-algoarnAqua/20">
// // //         <Sparkles className="w-4 h-4 text-algoarnAqua" />
// // //         <span className="text-[13px] uppercase tracking-[0.2em] text-slate-700 font-semibold">
// // //           The Powerful Features
// // //         </span>
// // //       </div>

// // //       <h2 className="text-4xl md:text-5xl font-display font-bold text-black">
// // //         Intelligent Tools for{" "}
// // //         <span className="text-algoarnAqua">Modern Education</span>
// // //       </h2>

// // //       <p className="text-xl leading-7 max-w-3xl mx-auto text-black">
// // //         SUCA combines cutting-edge AI with deep educational expertise to deliver
// // //         insights that truly matter.
// // //       </p>
// // //     </motion.div>

// // //     {/* Cards Grid */}
// // //     <motion.div
// // //       variants={staggerChildren}
// // //       initial="initial"
// // //       whileInView="animate"
// // //       viewport={{ once: true }}
// // //       className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center"
// // //     >
// // //       {coreFeatures.map((feature, index) => (
// // //         <motion.div
// // //           key={feature.title}
// // //           variants={fadeInUp}
// // //           className="relative group w-full max-w-[360px]"
// // //         >
// // //           {/* Neon Glow */}
// // //           <div
// // //             className="
// // //               absolute -inset-6 rounded-[40px]
// // //               bg-gradient-to-r from-algoarnAqua/40 via-algoarnBlue/30 to-algoarnAqua/40
// // //               blur-3xl opacity-40
// // //               group-hover:opacity-70
// // //               transition-opacity duration-500
// // //             "
// // //           />

// // //           {/* Card */}
// // //           <div
// // //             className="
// // //               relative h-full rounded-[36px]
// // //               bg-gradient-to-b from-[#14243A] via-[#0D1E33] to-[#071426]
// // //               border border-white/10
// // //               shadow-[0_25px_70px_rgba(2,6,23,0.35)]
// // //               p-8 flex flex-col
// // //               transition-all duration-500
// // //               group-hover:-translate-y-2
// // //               group-hover:border-algoarnAqua/40
// // //             "
// // //           >
// // //             {/* Icon */}
// // //             <div className="mb-6">
// // //               <div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10">
// // //                 <feature.icon className="w-7 h-7 text-white" />
// // //               </div>
// // //             </div>

// // //             {/* Content */}
// // //             <h3 className="text-xl font-semibold text-white mb-3">
// // //               {feature.title}
// // //             </h3>

// // //             <p className="text-white leading-relaxed text-sm flex-1">
// // //               {feature.description}
// // //             </p>
// // //           </div>
// // //         </motion.div>
// // //       ))}
// // //     </motion.div>
// // //   </div>
// // // </section>

// // //       {/* <section className="section-padding relative" style={{marginTop:'50px'}}>
// // //         <div className="max-w-7xl mx-auto space-y-16">
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             className="text-center space-y-4"
// // //           >
// // //             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-algoarnAqua/10 border border-algoarnAqua/20">
             
// // //               <Sparkles className="w-8 h-8 text-white/60" />

// // //               <span className="text-[13px] uppercase tracking-[0.2em] text-black font-semibold">
// // //                The Powerful Features
// // //               </span>
// // //             </div>
// // //             <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
// // //               Intelligent Tools for <span className="text-algoarnAqua">Modern Education</span>
// // //             </h2>
// // //             <p className="text-black text-lg max-w-3xl mx-auto">
// // //               SUCA combines cutting-edge AI with deep educational expertise to deliver insights that matter.
// // //             </p>
// // //           </motion.div>
 
// // //           <motion.div
// // //             variants={staggerChildren}
// // //             initial="initial"
// // //             whileInView="animate"
// // //             viewport={{ once: true }}
// // //             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
// // //           >
// // //             {coreFeatures.map((feature, index) => (
// // //               <motion.div
// // //                 key={feature.title}
// // //                 variants={fadeInUp}
// // //                 className="glass-card p-8 rounded-3xl border border-white/10 hover:border-algoarnAqua/30 transition-all duration-300 group hover:scale-105"
// // //               >
// // //                 <div className="p-4 rounded-2xl bg-algoarnAqua/10 inline-flex mb-6 group-hover:scale-110 transition-transform duration-300">
// // //                   <feature.icon className="w-7 h-7 text-white" />
// // //                 </div>
// // //                 <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
// // //                 <p className="text-gray-300 leading-relaxed">{feature.description}</p>
// // //               </motion.div>
// // //             ))}
// // //           </motion.div>
// // //         </div>
// // //       </section> */}
 
// // //       {/* 6. ENHANCED PRIVACY SECTION */}
// // //      <section className="section-padding bg-gradient-to-br from-slate-900 to-algoarn-black relative" style={{marginTop:'50px'}}>
// // //   <motion.div
// // //     initial={{ opacity: 0, y: 30 }}
// // //     whileInView={{ opacity: 1, y: 0 }}
// // //     viewport={{ once: true }}
// // //     className="max-w-6xl mx-auto"
// // //   >
// // //     <div className="glass-card rounded-3xl border border-white/10 p-12 text-center space-y-8 bg-gradient-to-br from-algoarn-black/80 to-slate-900/80">
// // //             <div className="inline-flex p-4 rounded-2xl bg-green-500/10 border border-green-500/20">
// // //               <Shield className="w-12 h-12 text-green-400" />
// // //             </div>
// // //             <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
// // //               Your Data is <span className="text-green-400">100% Secure</span>
// // //             </h2>
// // //             <p className="text-xl leading-7 max-w-3xl mx-auto text-white">
// // //               We understand the sensitivity of academic data. SUCA operates with the highest standards of privacy and security, ensuring your institution's and students' data remains protected.
// // //             </p>
           
// // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
// // //               {[
// // //                 { title: "Private Demos", desc: "Custom demonstrations with sample data" },
// // //                 { title: "Data Encryption", desc: "End-to-end encryption for all data" },
// // //                 { title: "Compliance Ready", desc: "GDPR and local regulation compliant" }
// // //               ].map((item, index) => (
// // //                 <div key={index} className="text-center p-4">
// // //                   <div className="text-green-400 font-semibold mb-2">{item.title}</div>
// // //                   <div className="text-sm text-white">{item.desc}</div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </motion.div>
// // //       </section>
 
// // //       {/* 7. ENHANCED FINAL CTA */}
// // //       <section className="section-padding" style={{marginTop:'50px'}}>
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 30 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           className="max-w-6xl mx-auto"
// // //         >
// // //           <div className="glass-card rounded-3xl border border-white/10 p-12 text-center space-y-8 bg-gradient-to-br from-algoarnAqua/5 to-algoarnBlue/5 relative overflow-hidden">
// // //             {/* Background elements */}
// // //             <div className="absolute top-0 right-0 w-64 h-64 bg-algoarnAqua/10 rounded-full blur-3xl -translate-y-32 translate-x-32" />
// // //             <div className="absolute bottom-0 left-0 w-64 h-64 bg-algoarnBlue/10 rounded-full blur-3xl translate-y-32 -translate-x-32" />
           
// // //             <div className="relative z-10">
// // //               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-algoarnAqua/10 border border-black mb-6">
// // //                 <Sparkles className="w-4 h-4 text-algoarnAqua" />
// // //                 <span className="text-[13px] uppercase tracking-[0.2em] text-white font-semibold">
// // //                   Ready to Transform?
// // //                 </span>
// // //               </div>
             
// // //               <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
// // //                 Start Your AI-Powered Education Journey
// // //               </h2>
             
// // //               <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
// // //                 Join 50+ institutions already using SUCA to drive better outcomes, save time, and make data-driven decisions.
// // //               </p>
 
// // //               <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
// // //                 <Link href="/contact?type=SUCA+Demo">
// // //                   <Button size="lg" className="px-10 py-6 text-lg bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90" style={{borderRadius:'2.5rem'}}>
// // //                     <Sparkles className="w-5 h-5 mr-2" />
// // //                     Book a Personalized Demo
// // //                   </Button>
// // //                 </Link>
// // //                 <Link href="/contact?type=SUCA+Pricing">
// // //                      <Button size="lg" className="px-10 py-6 text-lg bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90" style={{borderRadius:'2.5rem'}}>
// // //                     View Custom Pricing
// // //                     <ArrowRight className="w-4 h-4 ml-2" />
// // //                   </Button>
// // //                 </Link>
// // //               </div>
             
// // //               <p className="text-white text-sm mt-6">
// // //                 No credit card required • Personalized demo in 24 hours
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </motion.div>
// // //       </section>
// // //     </>
// // //   );
// // // }
 
// // "use client";

// // import { motion } from "framer-motion";
// // import Link from "next/link";
// // import {
// //   GraduationCap,
// //   School,
// //   BookOpen,
// //   Brain,
// //   Target,
// //   TrendingUp,
// //   BarChart3,
// //   Users,
// //   Shield,
// //   AlertTriangle,
// //   Sparkles,
// //   CheckCircle,
// //   ArrowRight,
// //   Star,
// //   BarChart,
// //   Lightbulb,
// // } from "lucide-react";
// // import { Button } from "@/components/ui/button";

// // /** ✅ IMPORTANT: keep className strings single-line (no `\n` template literals) **/

// // const editions = [
// //   {
// //     icon: GraduationCap,
// //     title: "SUCA University Edition",
// //     target: "Engineering colleges, autonomous institutions, universities",
// //     features: [
// //       "NAAC/NBA analytics",
// //       "CO/PO mapping",
// //       "Department-level dashboards",
// //       "AI test generator",
// //       "Student performance insights",
// //       "Placement readiness metrics",
// //       "Attendance + engagement tracking",
// //       "AI project tracker (coming soon)",
// //     ],
// //     gradient: "from-blue-500 to-cyan-500",
// //   },
// //   {
// //     icon: School,
// //     title: "SUCA School Edition",
// //     target: "CBSE | ICSE | State schools",
// //     features: [
// //       "Student performance analysis",
// //       "Learning level classification",
// //       "Daily/weekly tests",
// //       "AI behaviour insights",
// //       "Parent-friendly scorecards",
// //       "Personalised learning path",
// //     ],
// //     gradient: "from-cyan-500 to-teal-500",
// //   },
// //   {
// //     icon: BookOpen,
// //     title: "SUCA Pre-University Edition",
// //     target: "PUC / Junior colleges / +2",
// //     features: [
// //       "Topic-wise performance",
// //       "Competitive exam readiness",
// //       "Time/accuracy insights",
// //       "AI test generator",
// //       "Exam score prediction",
// //       "Structured study planner",
// //     ],
// //     gradient: "from-teal-500 to-green-500",
// //   },
// // ];

// // const coreFeatures = [
// //   {
// //     icon: Brain,
// //     title: "AI Test Generator",
// //     description: "Auto-generates tests with difficulty balance and topic coverage.",
// //   },
// //   {
// //     icon: Target,
// //     title: "Learning Recommendation Engine",
// //     description: "Suggests what each student should revise or practise next.",
// //   },
// //   {
// //     icon: TrendingUp,
// //     title: "Grade Prediction",
// //     description: "Predicts internal and final scores using historical trends.",
// //   },
// //   {
// //     icon: Shield,
// //     title: "Risk Classifier",
// //     description: "Flags at-risk students early so you can intervene in time.",
// //   },
// //   {
// //     icon: BarChart3,
// //     title: "Learning Analytics",
// //     description:
// //       "Multi-level insights at batch, course, programme and institution level.",
// //   },
// //   {
// //     icon: Users,
// //     title: "Attendance & Engagement",
// //     description: "Tracks presence, participation and engagement signals over time.",
// //   },
// //   {
// //     icon: AlertTriangle,
// //     title: "Weak-Topic Detection",
// //     description: "Identifies weak concepts and topics for targeted remediation.",
// //   },
// // ];

// // const fadeInUp = {
// //   initial: { opacity: 0, y: 30 },
// //   animate: { opacity: 1, y: 0 },
// // };

// // const staggerChildren = {
// //   animate: {
// //     transition: {
// //       staggerChildren: 0.1,
// //     },
// //   },
// // };

// // // ✅ deterministic particles (SAFE for hydration)
// // const serviceParticles = Array.from({ length: 12 }, (_, i) => ({
// //   left: `${(i * 17) % 100}%`,
// //   top: `${(i * 37) % 100}%`,
// //   duration: 3 + (i % 3),
// //   delay: (i % 4) * 0.4,
// // }));

// // export default function SUCAPage() {
// //   return (
// //     <>
// //       {/* HERO */}
// //       <section
// //         className="relative min-h-[60vh] flex justify-center overflow-hidden w-screen -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)] bg-gradient-to-br from-[#f8faff] via-[#f3f4ff] to-[#eef9ff] pt-20 -mt-[31px]"
// //         style={{ marginTop: "-25px" }}
// //       >
// //         <div className="absolute inset-0 pointer-events-none overflow-hidden">
// //           <div className="absolute top-1/4 -left-40 w-[900px] h-[900px] bg-algoarnAqua/20 blur-3xl rounded-full animate-pulse-slow" />
// //           <div className="absolute bottom-1/4 -right-40 w-[900px] h-[900px] bg-algoarnBlue/25 blur-3xl rounded-full animate-pulse-slow" />
// //         </div>

// //         <div className="absolute inset-0 opacity-40 pointer-events-none">
// //           {serviceParticles.map((p, i) => (
// //             <motion.div
// //               key={i}
// //               className="absolute w-1 h-1 bg-algoarnAqua rounded-full"
// //               style={{ left: p.left, top: p.top }}
// //               animate={{ y: [0, -30, 0], opacity: [0, 1, 0] }}
// //               transition={{
// //                 duration: p.duration,
// //                 delay: p.delay,
// //                 repeat: Infinity,
// //                 ease: "easeInOut",
// //               }}
// //             />
// //           ))}
// //         </div>

// //         <motion.div
// //           initial={{ opacity: 0, y: 60 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, ease: "easeOut" }}
// //           className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center space-y-10"
// //         >
// //           <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-algoarnAqua/10 border border-algoarnAqua/30 backdrop-blur-sm">
// //             <Sparkles className="w-4 h-4 text-algoarnAqua" />
// //             <span className="text-xs md:text-sm font-medium text-indigo-500 tracking-[0.25em] uppercase">
// //               Flagship AI Product
// //             </span>
// //           </div>

// //           <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black">
// //             Transform Education With AI Intelligence
// //           </h1>

// //           <p className="text-xl leading-7 max-w-3xl mx-auto text-black">
// //             SUCA turns academic data into{" "}
// //             <span className="font-semibold">actionable intelligence</span> — helping
// //             institutions predict outcomes, personalize learning, and drive excellence
// //             at every level.
// //           </p>

// //           <div
// //             className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
// //             style={{ marginBottom: "78px" }}
// //           >
// //             <Button
// //               asChild
// //               size="lg"
// //               className="px-10 py-4 text-base md:text-lg font-semibold bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-lg hover:from-indigo-600 hover:to-sky-600 transition-all"
// //               style={{ borderRadius: "9999px" }}
// //             >
// //               <Link href="/contact?type=AI+Services">
// //                 <span className="text-white">Book a Demo</span>
// //               </Link>
// //             </Button>

// //             <Button
// //               asChild
// //               size="lg"
// //               className="px-10 py-4 text-base md:text-lg font-semibold bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-lg hover:from-indigo-600 hover:to-sky-600 transition-all"
// //               style={{ borderRadius: "9999px" }}
// //             >
// //               <Link href="/services?type=AI+Services">
// //                 <span className="text-white">View Pricing Plans</span>
// //               </Link>
// //             </Button>
// //           </div>
// //         </motion.div>
// //       </section>

// //       {/* PROBLEM CARDS (NEON, SQUARE, ALIGNED) */}
// //       <section className="relative py-24" style={{ marginTop: "35px" }}>
// //         <div className="absolute -top-44 -left-44 w-[700px] h-[700px] bg-algoarnAqua/16 blur-[140px] rounded-full" />
// //         <div className="absolute -bottom-44 -right-44 w-[700px] h-[700px] bg-algoarnBlue/16 blur-[140px] rounded-full" />

// //         <div className="relative z-10 max-w-7xl mx-auto px-6">
// //           <div className="text-center mb-20">
// //             <h2 className="text-4xl md:text-5xl font-extrabold text-black">
// //               Data-Rich But Insight-Poor
// //             </h2>
// //             <p className="mt-4 text-xl leading-relaxed max-w-3xl mx-auto text-slate-600">
// //               Institutions are drowning in data but starving for actionable insights
// //               that actually improve student outcomes.
// //             </p>
// //           </div>

// //           <div className="flex justify-center">
// //             <div className="grid grid-cols-1 md:grid-cols-3 gap-14 place-items-center">
// //               {[
// //                 {
// //                   title: "Reactive, Not Proactive",
// //                   desc: "Issues are identified after exams, when it’s too late for meaningful intervention.",
// //                   icon: <AlertTriangle className="w-6 h-6 text-red-400" />,
// //                   bg: "bg-red-500/15 border-red-400/30",
// //                 },
// //                 {
// //                   title: "Siloed Information",
// //                   desc: "Data lives in separate systems, preventing a holistic view of student progress.",
// //                   icon: <BarChart className="w-6 h-6 text-yellow-300" />,
// //                   bg: "bg-yellow-400/15 border-yellow-300/30",
// //                 },
// //                 {
// //                   title: "One-Size-Fits-All Approach",
// //                   desc: "Traditional methods can’t provide the personalized insights each student needs.",
// //                   icon: <Users className="w-6 h-6 text-blue-300" />,
// //                   bg: "bg-blue-500/15 border-blue-400/30",
// //                 },
// //               ].map((card, i) => (
// //                 <div key={i} className="relative group w-full max-w-[320px]">
// //                   <div className="absolute -inset-6 rounded-[44px] bg-gradient-to-r from-algoarnAqua/15 via-sky-400/15 to-algoarnBlue/15 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
// //                   <div className="relative aspect-square rounded-[40px] bg-gradient-to-b from-[#16283F] via-[#0E2036] to-[#081426] border border-white/10 shadow-[0_30px_90px_rgba(2,6,23,0.25)] px-8 py-8 flex flex-col items-center text-center transition-transform duration-500 group-hover:-translate-y-2">
// //                     <div className={`w-14 h-14 rounded-2xl ${card.bg} border flex items-center justify-center`}>
// //                       {card.icon}
// //                     </div>

// //                     <h3 className="mt-6 text-lg font-extrabold text-white leading-snug min-h-[56px] flex items-center justify-center">
// //                       {card.title}
// //                     </h3>

// //                     <p className="mt-3 text-sm text-white/70 leading-relaxed">
// //                       {card.desc}
// //                     </p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* PRODUCT OVERVIEW (add neon effect to the right box) */}
// //       <section className="section-padding relative" style={{ marginTop: "50px" }}>
// //         <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-2 items-center">
// //           <motion.div
// //             initial={{ opacity: 0, x: -30 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             className="space-y-6"
// //           >
// //             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-algoarnAqua/10 border border-algoarnAqua/20">
// //               <Lightbulb className="w-4 h-4 text-algoarnAqua" />
// //               <span className="text-[13px] uppercase tracking-[0.2em] text-algoarnAqua font-semibold">
// //                 The Solution
// //               </span>
// //             </div>

// //             <h2 className="text-4xl md:text-5xl font-display font-bold text-black">
// //               Meet SUCA: Your <span className="text-algoarnAqua">AI Academic Partner</span>
// //             </h2>

// //             <p className="text-lg text-black-300 leading-relaxed">
// //               SUCA (Smart Unified Cognitive Analytics) is the intelligent layer that transforms raw academic data into meaningful, actionable insights for every stakeholder.
// //             </p>

// //             <div className="space-y-4">
// //               {[
// //                 "Predict student performance before exams",
// //                 "Identify at-risk students 6-8 weeks earlier",
// //                 "Personalize learning paths for each student",
// //                 "Automate administrative analytics tasks",
// //               ].map((benefit, index) => (
// //                 <div key={index} className="flex items-center gap-3">
// //                   <CheckCircle className="w-5 h-5 text-algoarnAqua flex-shrink-0" />
// //                   <span className="text-black-300">{benefit}</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </motion.div>

// //           <motion.div
// //             initial={{ opacity: 0, x: 30 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             className="relative"
// //           >
// //             {/* ✅ Neon glow */}
// //             <div className="absolute -inset-8 rounded-[44px] bg-gradient-to-r from-algoarnAqua/20 via-sky-400/15 to-algoarnBlue/20 blur-3xl opacity-70" />

// //             <div className="relative rounded-[40px] border border-white/10 p-8 space-y-6 bg-gradient-to-b from-[#16283F] via-[#0E2036] to-[#081426] shadow-[0_30px_90px_rgba(2,6,23,0.25)]">
// //               <div className="grid grid-cols-2 gap-4 text-white">
// //                 {[
// //                   { label: "Predictive Analytics", value: "94%", color: "from-green-500 to-emerald-500" },
// //                   { label: "Risk Detection", value: "89%", color: "from-blue-500 to-cyan-500" },
// //                   { label: "Time Saved", value: "12hrs/wk", color: "from-purple-500 to-pink-500" },
// //                   { label: "Accuracy", value: "96%", color: "from-orange-500 to-red-500" },
// //                 ].map((item, index) => (
// //                   <div key={index} className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
// //                     <div className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
// //                       {item.value}
// //                     </div>
// //                     <div className="text-xs text-white/80 mt-1">{item.label}</div>
// //                   </div>
// //                 ))}
// //               </div>

// //               <div className="bg-algoarnAqua/10 border border-white/10 rounded-2xl p-4">
// //                 <div className="flex items-center gap-2 text-white text-sm font-semibold">
// //                   <Star className="w-4 h-4 fill-algoarnAqua text-algoarnAqua" />
// //                   Trusted by 50+ Institutions
// //                 </div>
// //                 <p className="text-xs text-white/70 mt-1">
// //                   Universities, schools, and colleges across India
// //                 </p>
// //               </div>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* EDITIONS (make card bg neon like your image) */}
// //       <section className="relative py-24" style={{ marginTop: "50px" }}>
// //         <div className="absolute -top-44 -left-44 w-[700px] h-[700px] bg-algoarnAqua/12 blur-[160px] rounded-full" />
// //         <div className="absolute -bottom-44 -right-44 w-[700px] h-[700px] bg-algoarnBlue/12 blur-[160px] rounded-full" />

// //         <div className="relative z-10 max-w-7xl mx-auto px-6">
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="text-center space-y-4 mb-16"
// //           >
// //             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-algoarnBlue/10 border border-algoarnBlue/20">
// //               <School className="w-4 h-4 text-algoarnBlue" />
// //               <span className="text-[13px] uppercase tracking-[0.2em] text-algoarnBlue font-semibold">
// //                 Tailored Solutions
// //               </span>
// //             </div>

// //             <h2 className="text-4xl md:text-5xl font-display font-bold text-black">
// //               Choose Your <span className="text-algoarnBlue">SUCA Edition</span>
// //             </h2>

// //             <p className="text-xl leading-7 max-w-3xl mx-auto text-black">
// //               One powerful AI engine, perfectly adapted for your specific educational context and challenges.
// //             </p>
// //           </motion.div>

// //           <motion.div
// //             variants={staggerChildren}
// //             initial="initial"
// //             whileInView="animate"
// //             viewport={{ once: true }}
// //             className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
// //           >
// //             {editions.map((edition) => (
// //               <motion.div
// //                 key={edition.title}
// //                 variants={fadeInUp}
// //                 className="relative group w-full max-w-[420px] mx-auto h-full"
// //               >
// //                 {/* ✅ Neon glow */}
// //                 {/* <div className={`pointer-events-none absolute -inset-6 rounded-[44px] bg-gradient-to-r ${edition.gradient} blur-3xl opacity-30 group-hover:opacity-55 transition-opacity duration-500`} /> */}

// //                 {/* ✅ Neon background card (same style as your image 2) */}
// //                 <div className="relative h-full rounded-[40px] bg-gradient-to-b from-[#16283F] via-[#0E2036] to-[#081426] border border-white/10 shadow-[0_30px_90px_rgba(2,6,23,0.25)] p-8 flex flex-col transition-transform duration-500 group-hover:-translate-y-2">
// //                   <div className={`w-full h-16 rounded-2xl bg-gradient-to-r ${edition.gradient} flex items-center px-6 border border-white/10 mb-7`}>
// //                     <edition.icon className="w-7 h-7 text-white" />
// //                   </div>

// //                   <h3 className="text-2xl font-bold text-white mb-2">{edition.title}</h3>
// //                   <p className="text-white/80 font-medium mb-6">{edition.target}</p>

// //                   <ul className="text-white space-y-3 flex-1">
// //                     {edition.features.map((f) => (
// //                       <li key={f} className="flex items-center gap-3">
// //                         <CheckCircle className="w-4 h-4 text-algoarnAqua flex-shrink-0" />
// //                         <span className="text-sm text-white/85 leading-relaxed">{f}</span>
// //                       </li>
// //                     ))}
// //                   </ul>

// //                   <div className="pt-5 mt-8 border-t border-white/10">
// //                     <p className="text-xs text-white/50">
// //                       Customized implementation for your institution
// //                     </p>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* FEATURES (already neon) */}
// //       <section className="section-padding relative mt-12">
// //         <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-algoarnAqua/10 blur-[140px] rounded-full" />
// //         <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-algoarnBlue/10 blur-[140px] rounded-full" />

// //         <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-16">
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="text-center space-y-4"
// //           >
// //             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-algoarnAqua/10 border border-algoarnAqua/20">
// //               <Sparkles className="w-4 h-4 text-algoarnAqua" />
// //               <span className="text-[13px] uppercase tracking-[0.2em] text-slate-700 font-semibold">
// //                 The Powerful Features
// //               </span>
// //             </div>

// //             <h2 className="text-4xl md:text-5xl font-display font-bold text-black">
// //               Intelligent Tools for <span className="text-algoarnAqua">Modern Education</span>
// //             </h2>

// //             <p className="text-xl leading-7 max-w-3xl mx-auto text-black">
// //               SUCA combines cutting-edge AI with deep educational expertise to deliver insights that truly matter.
// //             </p>
// //           </motion.div>

// //           <motion.div
// //             variants={staggerChildren}
// //             initial="initial"
// //             whileInView="animate"
// //             viewport={{ once: true }}
// //             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center"
// //           >
// //             {coreFeatures.map((feature) => (
// //               <motion.div
// //                 key={feature.title}
// //                 variants={fadeInUp}
// //                 className="relative group w-full max-w-[360px]"
// //               >
// //                 <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-r from-algoarnAqua/40 via-algoarnBlue/30 to-algoarnAqua/40 blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
// //                 <div className="relative h-full rounded-[36px] bg-gradient-to-b from-[#14243A] via-[#0D1E33] to-[#071426] border border-white/10 shadow-[0_25px_70px_rgba(2,6,23,0.35)] p-8 flex flex-col transition-all duration-500 group-hover:-translate-y-2 group-hover:border-algoarnAqua/40">
// //                   <div className="mb-6">
// //                     <div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10">
// //                       <feature.icon className="w-7 h-7 text-white" />
// //                     </div>
// //                   </div>
// //                   <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
// //                   <p className="text-white/80 leading-relaxed text-sm flex-1">{feature.description}</p>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </div>
// //          {/* <section className="section-padding relative" style={{marginTop:'50px'}}>
// // //         <div className="max-w-7xl mx-auto space-y-16">
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             className="text-center space-y-4"
// // //           >
// // //             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-algoarnAqua/10 border border-algoarnAqua/20">
             
// // //               <Sparkles className="w-8 h-8 text-white/60" />

// // //               <span className="text-[13px] uppercase tracking-[0.2em] text-black font-semibold">
// // //                The Powerful Features
// // //               </span>
// // //             </div>
// // //             <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
// // //               Intelligent Tools for <span className="text-algoarnAqua">Modern Education</span>
// // //             </h2>
// // //             <p className="text-black text-lg max-w-3xl mx-auto">
// // //               SUCA combines cutting-edge AI with deep educational expertise to deliver insights that matter.
// // //             </p>
// // //           </motion.div>
 
// // //           <motion.div
// // //             variants={staggerChildren}
// // //             initial="initial"
// // //             whileInView="animate"
// // //             viewport={{ once: true }}
// // //             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
// // //           >
// // //             {coreFeatures.map((feature, index) => (
// // //               <motion.div
// // //                 key={feature.title}
// // //                 variants={fadeInUp}
// // //                 className="glass-card p-8 rounded-3xl border border-white/10 hover:border-algoarnAqua/30 transition-all duration-300 group hover:scale-105"
// // //               >
// // //                 <div className="p-4 rounded-2xl bg-algoarnAqua/10 inline-flex mb-6 group-hover:scale-110 transition-transform duration-300">
// // //                   <feature.icon className="w-7 h-7 text-white" />
// // //                 </div>
// // //                 <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
// // //                 <p className="text-gray-300 leading-relaxed">{feature.description}</p>
// // //               </motion.div>
// // //             ))}
// // //           </motion.div>
// // //         </div>
// // //       </section> */}
 
// //       {/* 6. ENHANCED PRIVACY SECTION */}
// //      <section className="section-padding bg-gradient-to-br from-slate-900 to-algoarn-black relative" style={{marginTop:'50px'}}>
// //   <motion.div
// //     initial={{ opacity: 0, y: 30 }}
// //     whileInView={{ opacity: 1, y: 0 }}
// //     viewport={{ once: true }}
// //     className="max-w-6xl mx-auto"
// //   >
// //     <div className="glass-card rounded-3xl border border-white/10 p-12 text-center space-y-8 bg-gradient-to-br from-algoarn-black/80 to-slate-900/80">
// //             <div className="inline-flex p-4 rounded-2xl bg-green-500/10 border border-green-500/20">
// //               <Shield className="w-12 h-12 text-green-400" />
// //             </div>
// //             <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
// //               Your Data is <span className="text-green-400">100% Secure</span>
// //             </h2>
// //             <p className="text-xl leading-7 max-w-3xl mx-auto text-white">
// //               We understand the sensitivity of academic data. SUCA operates with the highest standards of privacy and security, ensuring your institution's and students' data remains protected.
// //             </p>
           
// //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
// //               {[
// //                 { title: "Private Demos", desc: "Custom demonstrations with sample data" },
// //                 { title: "Data Encryption", desc: "End-to-end encryption for all data" },
// //                 { title: "Compliance Ready", desc: "GDPR and local regulation compliant" }
// //               ].map((item, index) => (
// //                 <div key={index} className="text-center p-4">
// //                   <div className="text-green-400 font-semibold mb-2">{item.title}</div>
// //                   <div className="text-sm text-white">{item.desc}</div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </motion.div>
// //       </section>
// //  {/* 7. ENHANCED FINAL CTA */}
// // <section className="section-padding" style={{ marginTop: "50px" }}>
// //   <motion.div
// //     initial={{ opacity: 0, y: 30 }}
// //     whileInView={{ opacity: 1, y: 0 }}
// //     viewport={{ once: true }}
// //     className="max-w-6xl mx-auto"
// //   >
// //     <div className="glass-card rounded-3xl border border-white/10 p-12 text-center space-y-8 bg-gradient-to-br from-algoarnAqua/5 to-algoarnBlue/5 relative overflow-hidden">
// //       {/* Background elements */}
// //       <div className="absolute top-0 right-0 w-64 h-64 bg-algoarnAqua/10 rounded-full blur-3xl -translate-y-32 translate-x-32" />
// //       <div className="absolute bottom-0 left-0 w-64 h-64 bg-algoarnBlue/10 rounded-full blur-3xl translate-y-32 -translate-x-32" />

// //       <div className="relative z-10">
// //         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-algoarnAqua/10 border border-black mb-6">
// //           <Sparkles className="w-4 h-4 text-algoarnAqua" />
// //           <span className="text-[13px] uppercase tracking-[0.2em] text-white font-semibold">
// //             Ready to Transform?
// //           </span>
// //         </div>

// //         <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
// //           Start Your AI-Powered Education Journey
// //         </h2>

// //         <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
// //           Join 50+ institutions already using SUCA to drive better outcomes, save
// //           time, and make data-driven decisions.
// //         </p>

// //         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
// //           <Link href="/contact?type=SUCA+Demo">
// //             <Button
// //               size="lg"
// //               className="px-10 py-6 text-lg bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90"
// //               style={{ borderRadius: "2.5rem" }}
// //             >
// //               <Sparkles className="w-5 h-5 mr-2" />
// //               Book a Personalized Demo
// //             </Button>
// //           </Link>

// //           <Link href="/contact?type=SUCA+Pricing">
// //             <Button
// //               size="lg"
// //               className="px-10 py-6 text-lg bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90"
// //               style={{ borderRadius: "2.5rem" }}
// //             >
// //               View Custom Pricing
// //               <ArrowRight className="w-4 h-4 ml-2" />
// //             </Button>
// //           </Link>
// //         </div>

// //         <p className="text-white text-sm mt-6">
// //           No credit card required • Personalized demo in 24 hours
// //         </p>
// //       </div>
// //     </div>
// //   </motion.div>
// // </section>

            
      
  
// //       </section>
// //     </>
// //   );
// // }




// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import {
//   GraduationCap,
//   School,
//   BookOpen,
//   Brain,
//   Target,
//   TrendingUp,
//   BarChart3,
//   Users,
//   Shield,
//   AlertTriangle,
//   Sparkles,
//   CheckCircle,
//   ArrowRight,
//   Star,
//   BarChart,
//   Lightbulb,
//   Workflow,
//   Layers,
//   Gauge,
//   ClipboardCheck,
//   Building2,
//   UserRound,
//   User,
//   Download,
//   CalendarClock,
//   Zap,
// } from "lucide-react";


// import { Button } from "@/components/ui/button";


// const editions = [
//   {
//     title: "SUCA University Edition",
//     icon: GraduationCap,
//    target: "Engineering colleges | autonomous institutions | universities",

//     brochureHref: "/brochures/SUCA-University-Brochure.pdf",
//     features: [
//       "Department-level dashboards",
//       "Student performance intelligence",
//       "Placement readiness metrics",
//       "Attendance & engagement tracking",
//       "AI-powered test generation",
//       "CO–PO mapping & outcome analysis",
//     ],
//     gradient: "from-blue-500 to-cyan-500",
//   },
//   {
//     title: "SUCA School Edition",
//     icon: School,
//     target: "CBSE | ICSE | State Boards",
//     brochureHref: "/brochures/SUCA-School-Brochure.pdf",
//     features: [
//       "Student performance analysis",
//       "Learning level classification",
//       "Daily & weekly assessments",
//       "Parent-friendly scorecards",
//       "Personalized learning paths",
//       "Early risk alerts",
//     ],
//     gradient: "from-cyan-500 to-teal-500",
//   },
//   {
//     title: "SUCA Pre-University Edition",
//     icon: BookOpen,
//     target: "PUC | Junior Colleges | +2",
//     brochureHref: "/brochures/SUCA-PU-Brochure.pdf",
//     features: [
//       "Topic-wise performance analytics",
//       "Competitive exam readiness tracking",
//       "Time & accuracy insights",
//       "AI test generator",
//       "Exam score prediction",
//       "Structured study planning",
//     ],
//     gradient: "from-teal-500 to-green-500",
//   },
// ];

// const fadeInUp = {
//   initial: { opacity: 0, y: 30 },
//   animate: { opacity: 1, y: 0 },
// };

// const staggerChildren = {
//   animate: {
//     transition: { staggerChildren: 0.1 },
//   },
// };

// // ✅ deterministic particles (SAFE for hydration)
// const serviceParticles = Array.from({ length: 12 }, (_, i) => ({
//   left: `${(i * 17) % 100}%`,
//   top: `${(i * 37) % 100}%`,
//   duration: 3 + (i % 3),
//   delay: (i % 4) * 0.4,
// }));

// const pipeline = [
//   {
//     icon: Workflow,
//     title: "1️⃣ Data Ingestion",
//     desc: "Securely integrates with exam data, attendance systems, LMS platforms, and manual Excel/CSV uploads—without disrupting existing workflows.",
//   },
//   {
//     icon: Layers,
//     title: "2️⃣ AI Intelligence Layer",
//     desc: "Analyzes performance trends, topic mastery, attendance & engagement behavior, and historical + real-time patterns using explainable AI engines.",
//     bullets: ["Risk Classification Engine", "Weak-Topic Detection", "Engagement & Behaviour Analytics"],
//   },
//   {
//     icon: Gauge,
//     title: "3️⃣ Predictive Insights",
//     desc: "Generates student risk scores, grade/outcome predictions, mastery heatmaps, and course/batch/department-level insights—transparent and explainable.",
//   },
//   {
//     icon: ClipboardCheck,
//     title: "4️⃣ Action & Intervention",
//     desc: "Turns insights into action through personalized study plans, AI-generated tests, faculty dashboards, parent-ready scorecards, and remediation strategies.",
//   },
// ];

// const outcomes = [
//   "Early identification of struggling students",
//   "Improved exam performance & pass rates",
//   "AI oriented future ready campus",
//   "Reduced faculty workload through automation",
//   "Data-driven academic decision-making",
//   "Improved student engagement & accountability",
// ];

// const stakeholders = [
//   {
//     icon: Building2,
//     title: "Management & Principals",
//     desc: "Institution-wide intelligence, benchmarking, and compliance/accreditation support.",
//   },
//   {
//     icon: UserRound,
//     title: "Teachers",
//     desc: "Class & student-level insights, early intervention alerts, and reduced manual analysis.",
//   },
//   {
//     icon: User,
//     title: "Students",
//     desc: "Personalized learning paths with clear strengths, gaps, and next steps.",
//   },
//   {
//     icon: Users,
//     title: "Parents",
//     desc: "Transparent progress visibility through data-backed scorecards and reports.",
//   },
// ];

// const implementation = [
//   { icon: CalendarClock, title: "Week 1", desc: "Data mapping & setup" },
//   { icon: BarChart3, title: "Week 2", desc: "Dashboard & model configuration" },
//   { icon: Target, title: "Week 3", desc: "Pilot with selected class / department" },
//   { icon: Zap, title: "Week 4", desc: "Institution-wide rollout + onboarding support" },
// ];
// const SECTION_GAP = "mt-16 md:mt-20";

// export default function SUCAPage() {
//   return (
//     <>
//       {/* HERO */}
//       <section className="relative min-h-[60vh] flex justify-center overflow-hidden w-screen -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)] bg-gradient-to-br from-[#f8faff] via-[#f3f4ff] to-[#eef9ff] pt-20 -mt-[31px]" style={{ marginTop: "-25px" }}>
//         <div className="absolute inset-0 pointer-events-none overflow-hidden">
//           <div className="absolute top-1/4 -left-40 w-[900px] h-[900px] bg-algoarnAqua/20 blur-3xl rounded-full animate-pulse-slow" />
//           <div className="absolute bottom-1/4 -right-40 w-[900px] h-[900px] bg-algoarnBlue/25 blur-3xl rounded-full animate-pulse-slow" />
//         </div>

//         <div className="absolute inset-0 opacity-40 pointer-events-none">
//           {serviceParticles.map((p, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 bg-algoarnAqua rounded-full"
//               style={{ left: p.left, top: p.top }}
//               animate={{ y: [0, -30, 0], opacity: [0, 1, 0] }}
//               transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
//             />
//           ))}
//         </div>

//         <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center space-y-10">
//           <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-algoarnAqua/10 border border-algoarnAqua/30 backdrop-blur-sm">
//             <Sparkles className="w-4 h-4 text-algoarnAqua" />
//             <span className="text-xs md:text-sm font-medium text-indigo-500 tracking-[0.25em] uppercase">Flagship AI Product</span>
//           </div>

//           <div className="space-y-3">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black">SUCA – Student Understanding & Cognitive Analysis</h1>
//            <p className="text-xl leading-7 max-w-4xl font-bold mx-auto text-black">Predict. Personalize. Perform Better.</p>
//           </div>

//           <p className="text-xl leading-7 max-w-3xl mx-auto text-black">
//             AI-powered academic intelligence for schools, colleges, and universities. SUCA transforms raw academic data into clear, actionable insights—enabling early intervention, personalized learning, and measurable academic improvement.
//           </p>

//           <div className="flex flex-col md:flex-row gap-3 justify-center items-center text-sm text-slate-700">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border text-black">
//               {/* <Star className="w-4 h-4 text-algoarnAqua" /> */}
//               <span >🎓</span>
//               <span className="font-medium">Trusted by premium institutions across India</span>
//             </div>
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border text-black">
//               {/* <School className="w-4 h-4 text-algoarnBlue" /> */}
//               <span>⚙️</span>
//               <span className="font-medium">Designed for Indian education systems</span>
//             </div>
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border ">
//               {/* <Shield className="w-4 h-4 text-green-600" /> */}
//               <span>🔐</span>
//               <span className="font-medium text-black">Secure, compliant, and institution-ready</span>
//             </div>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6" style={{ marginBottom: "78px" }}>
//             <Button asChild size="lg" className="px-10 py-4 text-base md:text-lg font-semibold bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-lg hover:from-indigo-600 hover:to-sky-600 transition-all" style={{ borderRadius: "9999px" }}>
//               <Link href="/contact?type=SUCA+Institutional+Demo">
//                 <span className="text-white">Book an Institutional Demo</span>
//               </Link>
//             </Button>

//             {/* <Button asChild size="lg" className="px-10 py-4 text-base md:text-lg font-semibold bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-lg hover:from-indigo-600 hover:to-sky-600 transition-all" style={{ borderRadius: "9999px" }}>
//               <Link href="#how-suca-works">
//                 <span className="text-white">See How SUCA Works</span>
//               </Link>
//             </Button> */}
//           </div>
//         </motion.div>
//       </section>
// {/* THE PROBLEM (structured + 2 points row + images in cards) */}
// {/* <section className="relative py-24" style={{ marginTop: "35px" }}> */}
// <section className={`relative py-24 ${SECTION_GAP}`}>


//   <div className="absolute -top-44 -left-44 w-[700px] h-[700px] bg-algoarnAqua/16 blur-[140px] rounded-full" />
//   <div className="absolute -bottom-44 -right-44 w-[700px] h-[700px] bg-algoarnBlue/16 blur-[140px] rounded-full" />

//   <div className="relative z-10 max-w-7xl mx-auto px-6">
//     <div className="text-center mb-14">
//       <h2 className="text-4xl md:text-5xl font-extrabold text-black">
//          The Problem Institutions Face Today
//       </h2>

//       {/* 1) First sentence */}
//     <p className="mt-5 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-black text-center">
//   Educational institutions generate massive amounts of data every day.
// </p>

// {/* Two centered cards */}
// {/*  */}
// {/* <div className="mt-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0"> */}

//   {/* LEFT PANEL */}
//   {/* <div className="w-full max-w-[420px] border-l-4 border-indigo-500 bg-indigo-50/60 rounded-r-lg px-6 py-3 justify-self-center">
//     <div className="space-y-2 text-left">
//       <p className="text-lg italic text-slate-700">
//         Exam <span className="font-semibold text-slate-900">scores</span>
//       </p>

//       <p className="text-lg italic text-slate-700">
//         Attendance <span className="font-semibold text-slate-900">records</span>
//       </p>
//     </div>
//   </div> */}

//   {/* RIGHT PANEL */}
//   {/* <div className="w-full max-w-[420px] border-l-4 border-indigo-500 bg-indigo-50/60 rounded-r-lg px-6 py-3 justify-self-center">
//     <div className="space-y-2 text-left">
//       <p className="text-lg italic text-slate-700">
//         Internal <span className="font-semibold text-slate-900">assessments</span>
//       </p>

//       <p className="text-lg italic text-slate-700">
//         LMS and <span className="font-semibold text-slate-900">activity data</span>
//       </p>
//     </div>
//   </div>

// </div> */}
// <div className="mt-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-center gap-18">
  
//   {/* LEFT PANEL */}
//   <div className="w-full max-w-[420px] border-l-4 border-indigo-500 bg-indigo-50/50 py-4 rounded-r-lg pl-6" style={{width:'68%' ,marginInline:'40px'}}>
//     <div className="space-y-3 text-left">
//       <p className="text-lg italic text-slate-700">
//         Exam <span className="font-semibold text-slate-900">scores</span>
//       </p>
//       <p className="text-lg italic text-slate-700">
//         Attendance <span className="font-semibold text-slate-900">records</span>
//       </p>
//     </div>
//   </div>

//   {/* RIGHT PANEL */}
//   <div className="w-full max-w-[420px] border-l-4 border-indigo-500 bg-indigo-50/50 py-4 rounded-r-lg pl-6" style={{width:'68%'}}>
//     <div className="space-y-3 text-left">
//       <p className="text-lg italic text-slate-700">
//         Internal <span className="font-semibold text-slate-900">assessments</span>
//       </p>
//       <p className="text-lg italic text-slate-700">
//         LMS and <span className="font-semibold text-slate-900">activity data</span>
//       </p>
//     </div>
//   </div>

// </div>

// {/* <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
//   <div className="w-full max-w-[280px] rounded-xl bg-white/70 border border-black px-4 py-3 text-center shadow-sm">
//     <div className="text-sm font-medium text-black">
//       Exam scores
//     </div>
//     <div className="text-sm font-medium text-black">
//       Attendance records
//     </div>
//   </div>

//   <div className="w-full max-w-[280px] rounded-xl bg-white/70 border border-black px-4 py-3 text-center shadow-sm">
//     <div className="text-sm font-medium text-black">
//       Internal assessments
//     </div>
//     <div className="text-sm font-medium text-black">
//       LMS and activity data
//     </div>
//   </div>
// </div> */}


//       {/* <div className="mt-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div className="rounded-2xl bg-white/70 border border-black px-5 py-4 text-left shadow-sm">
//           <div className="text-sm font-semibold text-black">Exam scores    </div>
//           <div className="text-sm font-semibold text-black">
//          Attendance records
//           </div>
//         </div>
//         <div className="rounded-2xl bg-white/70 border border-black px-5 py-4 text-left shadow-sm">
//           <div className="text-sm font-semibold text-black"> Internal assessments</div>
//           <div className="text-sm font-semibold text-black">
//             LMS and activity data
//           </div>
//         </div>
//       </div> */}

//       {/* 3) Another sentence */}
//       <p className="mt-8 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-black">
//         Yet most institutions still struggle with the core challenges below.
//       </p>
//     </div>

//     {/* 4) Cards (same design) + IMAGES instead of icons */}
//     <div className="flex justify-center">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-14 place-items-center">
//         {[
//           {
//             title: "Reactive Decision-Making",
//             desc: "Problems are identified after exams, when it’s already too late.",
//             img: "/reactive.jpg",
//             imgAlt: "Reactive decision-making",
//             tint: "bg-red-500/10 border-red-400/20",
//           },
//           {
//             title: "Siloed Information",
//             desc: "Academic, attendance, and engagement data live in disconnected systems.",
//             img: "/sailed.jpg",
//             imgAlt: "Siloed information",
//             tint: "bg-yellow-400/10 border-yellow-300/20",
//           },
//           {
//             title: "One-Size-Fits-All Approach",
//             desc: "Traditional methods fail to address individual student needs.",
//             img: "/one.jpeg",
//             imgAlt: "One-size-fits-all approach",
           
//             tint: "bg-blue-500/10 border-blue-400/20",
//           },
//         ].map((card, i) => (
//           <div key={i} className="relative group w-full max-w-[320px]">
//             {/* Neon glow layer */}
//             <div className="absolute -inset-6 rounded-[44px] bg-gradient-to-r from-algoarnAqua/15 via-sky-400/15 to-algoarnBlue/15 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

//             {/* Card */}
//             <div className="relative aspect-square rounded-[40px] bg-gradient-to-b from-[#16283F] via-[#0E2036] to-[#081426] border border-white/10 shadow-[0_30px_90px_rgba(2,6,23,0.25)] px-8 py-8 flex flex-col items-center text-center transition-transform duration-500 group-hover:-translate-y-2">
//               {/* Image badge (replaces icon) */}
//               {/* <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mb-6"> */}
//   <img
//     src={card.img}
//     alt={card.imgAlt}
//     width={90}
//     height={90}
//     className="object-contain"
//   />
// {/* </div> */}


//               <h3 className="mt-6 text-lg font-extrabold text-white leading-snug min-h-[56px] flex items-center justify-center">
//                 {card.title}
//               </h3>

//               <p className="mt-3 text-sm text-white  leading-relaxed">
//                 {card.desc}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// </section>

//       {/* THE PROBLEM */}
//       {/* <section className="relative py-24" style={{ marginTop: "35px" }}>
//   <div className="absolute -top-44 -left-44 w-[700px] h-[700px] bg-algoarnAqua/16 blur-[140px] rounded-full" />
//   <div className="absolute -bottom-44 -right-44 w-[700px] h-[700px] bg-algoarnBlue/16 blur-[140px] rounded-full" />

//   <div className="relative z-10 max-w-7xl mx-auto px-6">
//     {/* Heading */}
//     {/* <div className="text-center mb-20">
//       <h2 className="text-4xl md:text-5xl font-extrabold text-black">
//         ❗ The Problem Institutions Face Today
//       </h2>

//       <p className="mt-5 text-xl leading-7 max-w-3xl mx-auto text-black mt-5">
//         <span className="font-bold text-3xl ">Data-Rich, But Insight-Poor.</span>
//         <br />
//         Educational institutions generate massive amounts of data every day —
//         exam scores, attendance records, internal assessments, LMS and activity data —
//         yet struggle to convert it into meaningful action.
//       </p>
//     </div> */}

   
//     {/* <div className="flex justify-center">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-14 place-items-center">
//         {[
//           {
//             title: "Reactive Decision-Making",
//             desc: "Problems are identified after exams, when it’s already too late.",
//             icon: <AlertTriangle className="w-6 h-6 text-red-400" />,
//             bg: "bg-red-500/15 border-red-400/30",
//           },
//           {
//             title: "Siloed Information",
//             desc: "Academic, attendance, and engagement data live in disconnected systems.",
//             icon: <BarChart className="w-6 h-6 text-yellow-300" />,
//             bg: "bg-yellow-400/15 border-yellow-300/30",
//           },
//           {
//             title: "One-Size-Fits-All Approach",
//             desc: "Traditional methods fail to address individual student needs.",
//             icon: <Users className="w-6 h-6 text-blue-300" />,
//             bg: "bg-blue-500/15 border-blue-400/30",
//           },
//         ].map((card, i) => (
//           <div key={i} className="relative group w-full max-w-[320px]"> */}
//             {/* Neon glow */}
//             {/* <div className="absolute -inset-6 rounded-[44px] bg-gradient-to-r from-algoarnAqua/15 via-sky-400/15 to-algoarnBlue/15 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" /> */}

//             {/* Card */}
//             {/* <div className="relative aspect-square rounded-[40px] bg-gradient-to-b from-[#16283F] via-[#0E2036] to-[#081426] border border-white/10 shadow-[0_30px_90px_rgba(2,6,23,0.25)] px-8 py-8 flex flex-col items-center text-center transition-transform duration-500 group-hover:-translate-y-2">
//               <div className={`w-14 h-14 rounded-2xl ${card.bg} border flex items-center justify-center`}>
//                 {card.icon}
//               </div>

//               <h3 className="mt-6 text-lg font-extrabold text-white leading-snug min-h-[56px] flex items-center justify-center">
//                 {card.title}
//               </h3>

//               <p className="mt-3 text-sm text-white leading-relaxed">
//                 {card.desc}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div> */} 

//     {/* Result */}
//     {/* <div className="text-center mt-14">
//       <p className="text-lg text-black font-bold">
//         Result: <span className="font-semibold">lost student potential</span>, lower outcomes,
//         and higher academic risk.
//       </p>
//     </div>
//   </div>
// </section> */}

//       {/* <section className="relative py-24" style={{ marginTop: "35px" }}>
//         <div className="absolute -top-44 -left-44 w-[700px] h-[700px] bg-algoarnAqua/16 blur-[140px] rounded-full" />
//         <div className="absolute -bottom-44 -right-44 w-[700px] h-[700px] bg-algoarnBlue/16 blur-[140px] rounded-full" />

//         <div className="relative z-10 max-w-7xl mx-auto px-6">
//           <div className="text-center mb-20">
//             <h2 className="text-4xl md:text-5xl font-extrabold text-black">❗ The Problem Institutions Face Today</h2>
//             <p className=" mt-5 text-xl leading-7 max-w-3xl mx-auto text-black">Data-Rich, But Insight-Poor — institutions generate massive data, but struggle to convert it into action.</p>
//           </div>

//           <div className="flex justify-center">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-14 place-items-center">
//               {[
//                 {
//                   title: "Reactive Decision-Making",
//                   desc: "Problems are identified after exams, when it’s already too late for meaningful intervention.",
//                   icon: <AlertTriangle className="w-6 h-6 text-red-400" />,
//                   bg: "bg-red-500/15 border-red-400/30",
//                 },
//                 {
//                   title: "Siloed Information",
//                   desc: "Academic, attendance, and engagement data live in disconnected systems—no holistic student view.",
//                   icon: <BarChart className="w-6 h-6 text-yellow-300" />,
//                   bg: "bg-yellow-400/15 border-yellow-300/30",
//                 },
//                 {
//                   title: "One-Size-Fits-All Approach",
//                   desc: "Traditional methods fail to address individual student needs and learning gaps at scale.",
//                   icon: <Users className="w-6 h-6 text-blue-300" />,
//                   bg: "bg-blue-500/15 border-blue-400/30",
//                 },
//               ].map((card, i) => (
//                 <div key={i} className="relative group w-full max-w-[320px]">
//                   <div className="absolute -inset-6 rounded-[44px] bg-gradient-to-r from-algoarnAqua/15 via-sky-400/15 to-algoarnBlue/15 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
//                   <div className="relative aspect-square rounded-[40px] bg-gradient-to-b from-[#16283F] via-[#0E2036] to-[#081426] border border-white/10 shadow-[0_30px_90px_rgba(2,6,23,0.25)] px-8 py-8 flex flex-col items-center text-center transition-transform duration-500 group-hover:-translate-y-2">
//                     <div className={`w-14 h-14 rounded-2xl ${card.bg} border flex items-center justify-center`}>{card.icon}</div>
//                     <h3 className="mt-6 text-lg font-extrabold text-white leading-snug min-h-[56px] flex items-center justify-center">{card.title}</h3>
//                     <p className="mt-3 text-sm text-white/70 leading-relaxed">{card.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="text-center mt-14">
//             <p className="text-lg text-slate-700">
//               Result: <span className="font-semibold">lost student potential</span>, lower outcomes, and higher academic risk.
//             </p>
//           </div>
//         </div>
//       </section> */}

//       {/* MEET SUCA */}
//       {/* <section className="section-padding relative" style={{ marginTop: "50px" }}> */}
//       <section className={`section-padding relative ${SECTION_GAP}`}>

//         <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-2 items-center">
//           <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-algoarnAqua/10 border border-algoarnAqua/20">
//               {/* <Lightbulb className="w-8 h-8 text-algoarnAqua" /> */}
//               <span className="text-[18px] uppercase tracking-[0.2em] text-algoarnAqua font-semibold"> Meet SUCA</span>
//             </div>

//             <h2 className="text-4xl md:text-5xl font-display font-bold text-black">
//               Your <span className="text-algoarnAqua">AI Academic Partner</span>
//             </h2>

//             <p className="text-lg text-black-300 leading-relaxed ">
//               SUCA sits on top of your existing academic data and converts it into meaningful, actionable intelligence. <span className="font-semibold text-black">
//     SUCA doesn’t replace your systems — it makes them intelligent.
//   </span>
//             </p>

//             <div className="space-y-4 text-black">
//               {[
//                 "Predict student performance before exams",
//                 "Identify at-risk students early",
//                 "Detect weak topics and learning gaps",
//                 "Personalize learning paths at scale",
//                 "Automate academic analytics and reporting",
//              ].map((item, i) => (
//                 <li key={i} className="flex items-start gap-3 text-black">
//       <CheckCircle className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
//       <span className="text-base leading-relaxed">
//         {item}
//       </span>
//     </li>
//               ))}
//             </div>
//           </motion.div>

//           <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
//             <div className="absolute -inset-8 rounded-[44px] bg-gradient-to-r from-algoarnAqua/20 via-sky-400/15 to-algoarnBlue/20 blur-3xl opacity-70" />
//             <div className="relative rounded-[40px] border border-white/10 p-8 space-y-6 bg-gradient-to-b from-[#16283F] via-[#0E2036] to-[#081426] shadow-[0_30px_90px_rgba(2,6,23,0.25)]">
//               <div className="flex items-center justify-between">
//                 <div className="text-white font-semibold"> Intelligence → Action → Measurable Improvement</div>
//                 <div className="inline-flex items-center gap-2 text-xs text-white">
//                 <span> .</span>
//                   Explainable Insights
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4 text-white">
//                 {[
//                   { label: "Risk Scores", value: "Early", color: "from-green-500 to-emerald-500" },
//                   { label: "Outcome Prediction", value: "High", color: "from-blue-500 to-cyan-500" },
//                   { label: "Workload Reduction", value: "Big", color: "from-purple-500 to-pink-500" },
//                   { label: "Dashboards", value: "Multi", color: "from-orange-500 to-red-500" },
//                 ].map((item, index) => (
//                   <div key={index} className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
//                     <div className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>{item.value}</div>
//                     <div className="text-xs text-white mt-1">{item.label}</div>
//                   </div>
//                 ))}
//               </div>

//               <div className="bg-algoarnAqua/10 border border-white/10 rounded-2xl p-4">
//                 <div className="flex items-center gap-2 text-white text-sm font-semibold">
                 
//                   Built for Indian Education Systems
//                 </div>
//                 <p className="text-xs text-white mt-1">Schools • Colleges • Universities • Autonomous Institutions</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

      

//       {/* OUTCOMES */}
//       {/* <section className="relative py-24" style={{ marginTop: "50px" }}> */}
//       <section className={`relative py-24 ${SECTION_GAP}`}>

//         <div className="absolute -top-44 -left-44 w-[700px] h-[700px] bg-algoarnAqua/12 blur-[160px] rounded-full" />
//         <div className="absolute -bottom-44 -right-44 w-[700px] h-[700px] bg-algoarnBlue/12 blur-[160px] rounded-full" />

//         <div className="relative z-10 max-w-7xl mx-auto px-6">
//           <div className="text-center space-y-4 mb-14">
//             <h2 className="text-4xl md:text-5xl font-display font-bold text-black"> Outcomes That Actually Matter</h2>
//             <p className="text-xl leading-7 max-w-3xl mx-auto text-black">Institutions using SUCA achieve measurable improvements across performance, efficiency, and engagement.</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
//             {outcomes.map((o) => (
//               <div key={o} className="relative w-full max-w-[360px]">
//                 <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-r from-algoarnAqua/25 via-sky-400/15 to-algoarnBlue/25 blur-3xl opacity-40" />
//                 <div className="relative rounded-[36px] min-h-[105px] bg-gradient-to-b from-[#14243A] via-[#0D1E33] to-[#071426] border border-white/10 shadow-[0_25px_70px_rgba(2,6,23,0.35)] p-7">

//                   <div className="flex items-start gap-3">
//                     <CheckCircle className="w-5 h-5 text-white mt-0.5" />
//                     <p className="text-white leading-relaxed">{o}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* EDITIONS */}
//       {/* <section className="relative py-24" style={{ marginTop: "50px" }}>
//         <div className="absolute -top-44 -left-44 w-[700px] h-[700px] bg-algoarnAqua/12 blur-[160px] rounded-full" />
//         <div className="absolute -bottom-44 -right-44 w-[700px] h-[700px] bg-algoarnBlue/12 blur-[160px] rounded-full" />

//         <div className="relative z-10 max-w-7xl mx-auto px-6">
//           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-4 mb-16">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-algoarnBlue/10 border border-algoarnBlue/20">
//               <School className="w-4 h-4 text-algoarnBlue" />
//               <span className="text-[13px] uppercase tracking-[0.2em] text-algoarnBlue font-semibold">🧩 Choose Your Edition</span>
//             </div>

//             <h2 className="text-4xl md:text-5xl font-display font-bold text-black">
//               Choose Your <span className="text-algoarnBlue">SUCA Edition</span>
//             </h2>

//             <p className="text-xl leading-7 max-w-3xl mx-auto text-black">One powerful AI engine, adapted for your institution type and academic structure.</p>
//           </motion.div>

//           <motion.div variants={staggerChildren} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
//             {editions.map((edition) => (
//               <motion.div key={edition.title} variants={fadeInUp} className="relative group w-full max-w-[420px] mx-auto h-full">
//                 <div className="relative h-full rounded-[40px] bg-gradient-to-b from-[#16283F] via-[#0E2036] to-[#081426] border border-white/10 shadow-[0_30px_90px_rgba(2,6,23,0.25)] p-8 flex flex-col transition-transform duration-500 group-hover:-translate-y-2">
//                   <div className={`w-full h-16 rounded-2xl bg-gradient-to-r ${edition.gradient} flex items-center px-6 border border-white/10 mb-7`}>
//                     <edition.icon className="w-7 h-7 text-white" />
//                   </div>

//                   <h3 className="text-2xl font-bold text-white mb-2">{edition.title}</h3>
//                   <p className="text-white font-medium mb-6">{edition.target}</p>

//                   <ul className="text-white space-y-3 flex-1">
//                     {edition.features.map((f) => (
//                       <li key={f} className="flex items-center gap-3">
//                         <CheckCircle className="w-4 h-4 text-algoarnAqua flex-shrink-0" />
//                         <span className="text-sm text-white/85 leading-relaxed">{f}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   <div className="pt-5 mt-8 border-t border-white/10">
//                     <p className="text-xs text-white/90">Customized implementation for your institution</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section> */}

//       {/* <section className="relative py-24" style={{ marginTop: "50px" }}> */}
//       <section className={`relative py-24 ${SECTION_GAP}`}>

//   <div className="absolute -top-44 -left-44 w-[700px] h-[700px] bg-algoarnAqua/12 blur-[160px] rounded-full" />
//   <div className="absolute -bottom-44 -right-44 w-[700px] h-[700px] bg-algoarnBlue/12 blur-[160px] rounded-full" />

//   <div className="relative z-10 max-w-7xl mx-auto px-6">
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       className="text-center space-y-4 mb-16"
//     >
//       {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-algoarnBlue/10 border border-algoarnBlue/20">
//         <School className="w-4 h-4 text-algoarnBlue" />
//         <span className="text-[13px] uppercase tracking-[0.2em] text-algoarnBlue font-semibold">
//            Choose Your Edition
//         </span>
//       </div> */}

//       <h2 className="text-4xl md:text-5xl font-display font-bold text-black">
//         Choose Your <span className="text-algoarnBlue">SUCA Edition</span>
//       </h2>

//       <p className="text-xl leading-7 max-w-3xl mx-auto text-black">
//         One powerful AI engine, adapted for your institution type and academic structure.
//       </p>
//     </motion.div>

//     <motion.div
//       variants={staggerChildren}
//       initial="initial"
//       whileInView="animate"
//       viewport={{ once: true }}
//       className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
//     >
//       {editions.map((edition) => (
//         <motion.div
//           key={edition.title}
//           variants={fadeInUp}
//           className="relative group w-full max-w-[420px] mx-auto h-full"
//         >
//           <div className="relative h-full rounded-[40px] bg-gradient-to-b from-[#16283F] via-[#0E2036] to-[#081426] border border-white/10 shadow-[0_30px_90px_rgba(2,6,23,0.25)] p-8 flex flex-col transition-transform duration-500 group-hover:-translate-y-2">

//             {/* ✅ COLOURED LABEL NOW CONTAINS EDITION NAME */}
//             <div className={`w-full h-16 rounded-2xl bg-gradient-to-r ${edition.gradient} flex items-center gap-3 px-6 border border-white/10 mb-6`}>
//               <edition.icon className="w-7 h-7 text-white" />
//               <span className="text-white font-semibold text-sm md:text-base">
//                 {edition.title}
//               </span>
//             </div>

//             {/* ✅ REMOVE BIG TITLE BELOW (manager wants title above) */}
//             <p className="text-white/85 font-medium mb-6 text-sm md:text-base">
//               {edition.target}
//             </p>

//             <ul className="text-white space-y-3 flex-1">
//               {edition.features.map((f) => (
//                 <li key={f} className="flex items-center gap-3">
//                   <CheckCircle className="w-4 h-4 text-algoarnAqua flex-shrink-0" />
//                   <span className="text-sm text-white/85 leading-relaxed">{f}</span>
//                 </li>
//               ))}
//             </ul>

//             {/* ✅ ADD BROCHURE DOWNLOAD OPTION IN EDITION CARD */}
//           <div className="pt-6 mt-8 border-t border-white/10">
//   <a
//     href={edition.brochureHref}
//     download
//     className="inline-flex items-center justify-center w-full px-6 py-3 rounded-2xl bg-gradient-to-r from-algoarnAqua to-algoarnBlue text-white font-semibold shadow-lg hover:scale-[1.02] transition-all"
//   >
//     <Download className="w-5 h-5 mr-2 text-white" />
//     Download Brochure
//   </a>

//               <p className="text-xs text-white/99 text-center mt-3">
//                 Customized implementation for your institution
//               </p>
//             </div>

//           </div>
//         </motion.div>
//       ))}
//     </motion.div>
//   </div>
// </section>

//       {/* SECURITY */}
//     <section className={`section-padding relative ${SECTION_GAP}`}>

//   <motion.div
//   initial={{ opacity: 0, y: 30 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   viewport={{ once: true }}
//   className="max-w-6xl mx-auto rounded-3xl overflow-hidden"
// >
  
  

//     <div className="glass-card rounded-none border border-white/10 p-10 md:p-12 min-h-[60px] flex flex-col justify-center text-center space-y-6 bg-gradient-to-br from-algoarn-black/80 to-slate-900/80">
//       <div className="inline-flex p-4 rounded-2xl bg-green-500/10 border border-green-500/20 mx-auto">
//         <Shield className="w-12 h-12 text-green-400" />
//       </div>

//       <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
//          Security, Privacy & <span className="text-green-400">Compliance</span>
//       </h2>

//       <p className="text-lg md:text-xl leading-7 max-w-3xl mx-auto text-white/85">
//         Your data is safe with SUCA. Security is not a feature — it’s a foundation.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-1">
//         {[
//           {
//             title: "End-to-end Encryption",
//             desc: "Protected data flows across ingestion, storage, and analytics.",
//           },
//           {
//             title: "GDPR + Local Ready",
//             desc: "Compliant by design for institutional deployments.",
//           },
//           {
//             title: "Private + Controlled AI",
//             desc: "No student data is used for AI model training.",
//           },
//         ].map((item) => (
//           <div key={item.title} className="text-center p-3">
//             <div className="text-green-400 font-semibold mb-2">{item.title}</div>
//             <div className="text-sm text-white/80 leading-relaxed">{item.desc}</div>
//           </div>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
//         {[
//           {
//             title: "Private demos with sample data",
//             desc: "See SUCA in action before integrating real data.",
//           },
//           {
//             title: "On-premise / private cloud options",
//             desc: "Deploy the way your institution prefers.",
//           },
//         ].map((item) => (
//           <div
//             key={item.title}
//             className="rounded-2xl bg-white/5 border border-white/10 p-4 text-left"
//           >
//             <div className="flex items-start gap-3">
//               <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
//               <div>
//                 <div className="text-white font-semibold">{item.title}</div>
//                 <div className="text-white/75 text-sm mt-1 leading-relaxed">
//                   {item.desc}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </motion.div>
// </section>


     

//       {/* WHY SUCA */}
//       {/* <section className="section-padding relative mt-12"> */}
//       <section className={`section-padding relative ${SECTION_GAP}`}>

//         <div className="relative z-10 max-w-7xl mx-auto px-6">
//           <div className="text-center space-y-4 mb-12">
//             <h2 className="text-4xl md:text-5xl font-display font-bold text-black">Why SUCA by Algoarn?</h2>
//             <p className="text-xl leading-7 max-w-3xl mx-auto text-black">Research-driven, practical, and built for real institutional outcomes.</p>
//           </div>

//           {/* <div className="max-w-4xl mx-auto space-y-4">
//             {[
//               "Built by AI engineers & researchers",
//               "Strong foundation in predictive analytics & computer vision",
//               "Research-driven, not hype-driven",
//               "Designed specifically for Indian education challenges",
//               "Part of Algoarn’s mission to build practical, human-centric AI",
//             ].map((line) => (
//               <div key={line} className="flex items-start gap-3">
//                 <CheckCircle className="w-5 h-5 text-algoarnAqua mt-0.5" />
//                 <p className="text-black text-lg">{line}</p>
//               </div>
//             ))}

//           </div> */}
//           <div className="max-w-4xl mx-auto space-y-4 flex flex-col items-center">
//   {[
//     "Built by AI engineers & researchers",
//     "Strong foundation in predictive analytics & computer vision",
//     "Research-driven, not hype-driven",
//     "Designed specifically for Indian education challenges",
//     "Part of Algoarn’s mission to build practical, human-centric AI",
//   ].map((line) => (
//     <div
//       key={line}
//       className="flex items-center gap-3 justify-center text-center"
//     >
//       <CheckCircle className="w-5 h-5 text-algoarnAqua flex-shrink-0" />
//       <p className="text-black text-lg">{line}</p>
//     </div>
//   ))}
// </div>

//         </div>
//       </section>

//       {/* FINAL CTA */}
// {/*  */}
// {/* <section className="section-padding" style={{ marginTop: "50px" }}> */}
// <section className={`section-padding ${SECTION_GAP}`}>

//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     className="max-w-6xl mx-auto rounded-3xl overflow-hidden"
//   >
//     <div className="glass-card rounded-3xl overflow-hidden border border-white/10 p-12 text-center space-y-10 bg-gradient-to-br from-algoarnAqua/5 to-algoarnBlue/5 relative">

//       {/* Background glows */}
//       <div className="absolute top-0 right-0 w-64 h-64 bg-algoarnAqua/10 rounded-full blur-3xl -translate-y-32 translate-x-32" />
//       <div className="absolute bottom-0 left-0 w-64 h-64 bg-algoarnBlue/10 rounded-full blur-3xl translate-y-32 -translate-x-32" />

//       <div className="relative z-10">

//         {/* BIGGER BADGE */}
//         <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-algoarnAqua/15 border border-white mb-10">
         
//           <span className="text-xl md:text-2xl uppercase tracking-[0.3em] text-white font-semibold">
//              Ready to Transform Academic Outcomes?
//           </span>
//         </div>

//         {/* HEADING – slightly smaller */}
//         <h2 className="text-2xl md:text-2xl font-display font-bold text-white mb-3">
//           SUCA is{" "}
//           <span className="text-algoarnAqua">
//             Academic Intelligence Infrastructure
//           </span>
//         </h2>

//         {/* SUBTEXT – smaller & lighter */}
//         <p className="text-white text-sm md:text-base max-w-2xl mx-auto mb-8">
//           Not just another edtech platform — SUCA helps institutions predict outcomes,
//           personalize learning, and intervene early with clarity and confidence.
//         </p>

        

//         {/* CTA BUTTONS – unchanged (primary actions) */}
//         {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"> */}
//         <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6 pb-12">

//           <Link href="/contact?type=SUCA+Personalized+Institutional+Demo">
//             <Button
//               size="lg"
//               className="px-10 py-6 text-lg bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90"
//               style={{ borderRadius: "2.5rem" }}
//             >
              
//               Book a Personalized Institutional Demo
//             </Button>
//           </Link>

         
//         </div>

//         <p className="text-white/60 text-xs mt-6">
//           · Personalized demo in 24 hours
//         </p>

//       </div>
//     </div>
//   </motion.div>
// </section>

//     </>
//   );
// }





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
} from "lucide-react";

import { Button } from "@/components/ui/button";

const editions = [
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
    gradient: "from-blue-500 to-cyan-500",
  },
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
    gradient: "from-cyan-500 to-teal-500",
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
    gradient: "from-teal-500 to-green-500",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const staggerChildren = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

// ✅ deterministic particles (SAFE for hydration)
const serviceParticles = Array.from({ length: 12 }, (_, i) => ({
  left: `${(i * 17) % 100}%`,
  top: `${(i * 37) % 100}%`,
  duration: 3 + (i % 3),
  delay: (i % 4) * 0.4,
}));

const pipeline = [
  {
    icon: Workflow,
    title: "1️⃣ Data Ingestion",
    desc: "Securely integrates with exam data, attendance systems, LMS platforms, and manual Excel/CSV uploads—without disrupting existing workflows.",
  },
  {
    icon: Layers,
    title: "2️⃣ AI Intelligence Layer",
    desc: "Analyzes performance trends, topic mastery, attendance & engagement behavior, and historical + real-time patterns using explainable AI engines.",
    bullets: [
      "Risk Classification Engine",
      "Weak-Topic Detection",
      "Engagement & Behaviour Analytics",
    ],
  },
  {
    icon: Gauge,
    title: "3️⃣ Predictive Insights",
    desc: "Generates student risk scores, grade/outcome predictions, mastery heatmaps, and course/batch/department-level insights—transparent and explainable.",
  },
  {
    icon: ClipboardCheck,
    title: "4️⃣ Action & Intervention",
    desc: "Turns insights into action through personalized study plans, AI-generated tests, faculty dashboards, parent-ready scorecards, and remediation strategies.",
  },
];

const outcomes = [
  "Early identification of struggling students",
  "Improved exam performance & pass rates",
  "AI oriented future ready campus",
  "Reduced faculty workload through automation",
  "Data-driven academic decision-making",
  "Improved student engagement & accountability",
];

const stakeholders = [
  {
    icon: Building2,
    title: "Management & Principals",
    desc: "Institution-wide intelligence, benchmarking, and compliance/accreditation support.",
  },
  {
    icon: UserRound,
    title: "Teachers",
    desc: "Class & student-level insights, early intervention alerts, and reduced manual analysis.",
  },
  {
    icon: User,
    title: "Students",
    desc: "Personalized learning paths with clear strengths, gaps, and next steps.",
  },
  {
    icon: Users,
    title: "Parents",
    desc: "Transparent progress visibility through data-backed scorecards and reports.",
  },
];

const implementation = [
  { icon: CalendarClock, title: "Week 1", desc: "Data mapping & setup" },
  { icon: BarChart3, title: "Week 2", desc: "Dashboard & model configuration" },
  { icon: Target, title: "Week 3", desc: "Pilot with selected class / department" },
  { icon: Zap, title: "Week 4", desc: "Institution-wide rollout + onboarding support" },
];

export default function SUCAPage() {
const { openModal } = useContactModal();

  return (
    <>
      {/* HERO  */}
      <section className="relative min-h-[60vh] flex justify-center overflow-hidden w-screen -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)] bg-gradient-to-br from-[#f8faff] via-[#f3f4ff] to-[#eef9ff] pt-20  -mt-[29px]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-40 w-[900px] h-[900px] bg-algoarnAqua/20 blur-3xl rounded-full animate-pulse-slow" />
          <div className="absolute bottom-1/4 -right-40 w-[900px] h-[900px] bg-algoarnBlue/25 blur-3xl rounded-full animate-pulse-slow" />
        </div>

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

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center space-y-10"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-algoarnAqua/10 border border-algoarnAqua/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-algoarnAqua" />
            <span className="text-xs md:text-sm font-medium text-indigo-500 tracking-[0.25em] uppercase">
              Flagship AI Product
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black">
             
              SUCA – Student Understanding & Cognitive Analysis
            </h1>
            <p className="text-xl leading-7 max-w-4xl font-bold mx-auto text-black">
              Predict. Personalize. Perform Better.
            </p>
          </div>

          <p className="text-xl leading-7 max-w-2xl mx-auto text-black">
            AI-powered academic intelligence for schools, colleges, and universities. SUCA
            transforms raw academic data into clear, actionable insights—enabling early
            intervention, personalized learning, and measurable academic improvement.
          </p>

          <div className="flex flex-col md:flex-row gap-3 justify-center items-center text-sm text-slate-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border text-black">
              <span>🎓</span>
              <span className="font-medium">Trusted by premium institutions across India</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border text-black">
              <span>⚙️</span>
              <span className="font-medium">Designed for Indian education systems</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border">
              <span>🔐</span>
              <span className="font-medium text-black">Secure, compliant, and institution-ready</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6 pb-20">
            {/* <Button
              asChild
              size="lg"
              className="px-10 py-4 text-base md:text-lg font-semibold bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-lg hover:from-indigo-600 hover:to-sky-600 transition-all"
              style={{ borderRadius: "9999px" }}
            >
              <Link href="/contact?type=SUCA+Institutional+Demo">
                <span className="text-white">Book an Institutional Demo</span>
              </Link>
            </Button> */}
            {/* <Button
  size="lg"
  type="button"
  onClick={() => openContact("Institutional Demo")}
  className="px-10 py-6 text-lg 
    bg-gradient-to-r from-algoarnAqua to-algoarnBlue 
    hover:from-algoarnAqua/90 hover:to-algoarnBlue/90"
  style={{ borderRadius: "2.5rem" }}
>
  Book an  Institutional Demo
</Button> */}
<Button
  size="lg"
  className="px-10 py-6 text-lg bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90"
  style={{ borderRadius: "2.5rem" }}
  onClick={() => openModal("Institutional Demo")}
>
  Book a Personalized Institutional Demo
</Button>

          </div>
        </motion.div>
      </section>

   
      <div className="space-y-20 md:space-y-24">
        {/* THE PROBLEM */}
        <section className="relative py-24">
          <div className="absolute -top-44 -left-44 w-[700px] h-[700px] bg-algoarnAqua/16 blur-[140px] rounded-full" />
          <div className="absolute -bottom-44 -right-44 w-[700px] h-[700px] bg-algoarnBlue/16 blur-[140px] rounded-full" />

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-bold text-black">
                The Problem Institutions Face Today
              </h2>

              <p className="mt-5 text-xl leading-7 max-w-2xl mx-auto  text-black text-center">
                Educational institutions generate massive amounts of data every day.
              </p>

              <div className="mt-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-center gap-12">
                <div className="w-full max-w-[420px] border-l-4 border-indigo-500 bg-indigo-50/50 py-4 rounded-r-lg pl-6">
                  <div className="space-y-3 text-left">
                    <p className="text-xl leading-7 max-w-2xl mx-auto text-black">
                      Exam <span className="font-bold text-black">scores</span>
                    </p>
                    <p className="text-xl leading-7 max-w-2xl mx-auto text-black">
                      Attendance <span className="font-bold text-black">records</span>
                    </p>
                  </div>
                </div>

                <div className="w-full max-w-[420px] border-l-4 border-indigo-500 bg-indigo-50/50 py-4 rounded-r-lg pl-6">
                  <div className="space-y-3 text-left">
                    <p className="text-xl leading-7 max-w-2xl mx-auto text-black">
                      Internal <span className="font-bold text-black">assessments</span>
                    </p>
                    <p className="text-xl leading-7 max-w-2xl mx-auto text-black">
                      LMS and <span className="font-bold text-black">activity data</span>
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-xl leading-7 max-w-2xl mx-auto text-black">
                Yet most institutions still struggle with the core challenges below.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-14 place-items-center">
                {[
                  {
                    title: "Reactive Decision-Making",
                    desc: "Problems are identified after exams, when it’s already too late.",
                    img: "/reactive.jpg",
                    imgAlt: "Reactive decision-making",
                  },
                  {
                    title: "Siloed Information",
                    desc: "Academic, attendance, and engagement data live in disconnected systems.",
                    img: "/sailed.jpg",
                    imgAlt: "Siloed information",
                  },
                  {
                    title: "One-Size-Fits-All Approach",
                    desc: "Traditional methods fail to address individual student needs.",
                    img: "/one.jpeg",
                    imgAlt: "One-size-fits-all approach",
                  },
                ].map((card, i) => (
                  <div key={i} className="relative group w-full max-w-[320px]">
                    <div className="absolute -inset-6 rounded-[44px] bg-gradient-to-r from-algoarnAqua/15 via-sky-400/15 to-algoarnBlue/15 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative aspect-square rounded-[40px] bg-gradient-to-b from-[#16283F] via-[#0E2036] to-[#081426] border border-white/10 shadow-[0_30px_90px_rgba(2,6,23,0.25)] px-8 py-8 flex flex-col items-center text-center transition-transform duration-500 group-hover:-translate-y-2">
                      <img
                        src={card.img}
                        alt={card.imgAlt}
                        width={90}
                        height={90}
                        className="object-contain"
                      />
                      <h3 className="mt-6 text-lg font-bold text-white group-hover:text-algoarnAqua transition-colors min-h-[56px] flex items-center justify-center">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-sm text-white leading-relaxed">{card.desc}</p>
                    </div>
                  </div> 
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MEET SUCA */}
        {/* <section className="section-padding relative"> */}
        <section className="relative" style={{marginTop:'-78px'}}>

          <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-algoarnAqua/10 border border-algoarnAqua/20">
                <span className="text-[12px] uppercase tracking-[0.2em] text-algoarnAqua font-semibold">
                  Meet SUCA
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold">
                Your AI Academic Partner
              </h2>

              <p className="text-xl leading-7 max-w-2xl mx-auto text-black">
                SUCA sits on top of your existing academic data and converts it into meaningful,
                actionable intelligence.{" "}
                <span className="font-semibold text-black">
                  SUCA doesn’t replace your systems — it makes them intelligent.
                </span>
              </p>

             <div className="flex justify-center" style={{marginLeft:"-113px"}}>
  <ul className="space-y-4 text-black">
    {[
      "Predict student performance before exams",
      "Identify at-risk students early",
      "Detect weak topics and learning gaps",
      "Personalize learning paths at scale",
      "Automate academic analytics and reporting",
    ].map((item, i) => (
      <li key={i} className="flex items-start gap-3">
        <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
        <span className="text-xl leading-relaxed max-w-2xl">
          {item}
        </span>
      </li>
    ))}
  </ul>
</div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-8 rounded-[44px] bg-gradient-to-r from-algoarnAqua/20 via-sky-400/15 to-algoarnBlue/20 blur-3xl opacity-70" />
              <div className="relative rounded-[40px] border border-white/10 p-8 space-y-6 bg-gradient-to-b from-[#16283F] via-[#0E2036] to-[#081426] shadow-[0_30px_90px_rgba(2,6,23,0.25)]">
                <div className="flex items-center justify-between">
                  <div className="text-white font-semibold">
                    Intelligence → Action → Measurable Improvement
                  </div>
                  <div className="inline-flex items-center gap-2 text-xs text-white">
                    <span>.</span> Explainable Insights
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-white">
                  {[
                    { label: "Risk Scores", value: "Early", color: "from-green-500 to-emerald-500" },
                    { label: "Outcome Prediction", value: "High", color: "from-blue-500 to-cyan-500" },
                    { label: "Workload Reduction", value: "Big", color: "from-purple-500 to-pink-500" },
                    { label: "Dashboards", value: "Multi", color: "from-orange-500 to-red-500" },
                  ].map((item, index) => (
                    <div key={index} className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {item.value}
                      </div>
                      <div className="text-xs text-white mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-algoarnAqua/10 border border-white/10 rounded-2xl p-4">
                  <div className="flex items-center gap-2 text-white text-sm font-semibold">
                    Built for Indian Education Systems
                  </div>
                  <p className="text-xs text-white mt-1">
                    Schools • Colleges • Universities • Autonomous Institutions
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* OUTCOMES */}
        {/* <section className="relative py-24"> */}
        <section className="relative">

          <div className="absolute -top-44 -left-44 w-[700px] h-[700px] bg-algoarnAqua/12 blur-[160px] rounded-full" />
          <div className="absolute -bottom-44 -right-44 w-[700px] h-[700px] bg-algoarnBlue/12 blur-[160px] rounded-full" />

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center space-y-4 mb-14">
              <h2 className="text-3xl md:text-5xl font-bold">
                Outcomes That Actually Matter
              </h2>
              <p className="text-xl leading-7 max-w-2xl mx-auto text-black">
                Institutions using SUCA achieve measurable improvements across performance, efficiency, and engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
              {outcomes.map((o) => (
                <div key={o} className="relative w-full max-w-[360px]">
                  <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-r from-algoarnAqua/25 via-sky-400/15 to-algoarnBlue/25 blur-3xl opacity-40" />
                  <div className="relative rounded-[36px] min-h-[105px] bg-gradient-to-b from-[#14243A] via-[#0D1E33] to-[#071426] border border-white/10 shadow-[0_25px_70px_rgba(2,6,23,0.35)] p-7">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-0.5" />
                      <p className="text-white leading-relaxed">{o}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EDITIONS */}
        {/* <section className="relative py-24"> */}
        <section className="relative">

          <div className="absolute -top-44 -left-44 w-[700px] h-[700px] bg-algoarnAqua/12 blur-[160px] rounded-full" />
          <div className="absolute -bottom-44 -right-44 w-[700px] h-[700px] bg-algoarnBlue/12 blur-[160px] rounded-full" />

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-4 mb-16"
            >
              
              <h2 className="text-3xl md:text-5xl font-bold">
                Choose Your <span className="text-algoarnBlue">SUCA Edition</span>
              </h2>
              <p className="text-xl leading-7 max-w-2xl mx-auto text-black">
                One powerful AI engine, adapted for your institution type and academic structure.
              </p>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
            >
              {editions.map((edition) => (
                <motion.div
                  key={edition.title}
                  variants={fadeInUp}
                  className="relative group w-full max-w-[420px] mx-auto h-full"
                >
                  <div className="relative h-full rounded-[40px] bg-gradient-to-b from-[#16283F] via-[#0E2036] to-[#081426] border border-white/10 shadow-[0_30px_90px_rgba(2,6,23,0.25)] p-8 flex flex-col transition-transform duration-500 group-hover:-translate-y-2">
                    <div className={`w-full h-16 rounded-2xl bg-gradient-to-r ${edition.gradient} flex items-center gap-3 px-6 border border-white/10 mb-6`}>
                      <edition.icon className="w-7 h-7 text-white" />
                      <span className="text-white font-bold text-sm md:text-base">{edition.title}</span>
                    </div>

                    <p className="text-white font-medium mb-6 text-sm md:text-base">{edition.target}</p>

                    <ul className="text-white space-y-3 flex-1">
                      {edition.features.map((f) => (
                        <li key={f} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-algoarnAqua flex-shrink-0" />
                          <span className="text-sm text-white leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-6 mt-8 border-t border-white/10">
                      <a
                        href={edition.brochureHref}
                        download
                        className="inline-flex items-center justify-center w-full px-6 py-3 rounded-2xl bg-gradient-to-r from-algoarnAqua to-algoarnBlue text-white font-semibold shadow-lg hover:scale-[1.02] transition-all"
                      >
                        <Download className="w-5 h-5 mr-2 text-white" />
                        Download Brochure
                      </a>

                      <p className="text-xs text-white text-center mt-3">
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
            viewport={{ once: true }}
            className="max-w-6xl mx-auto rounded-3xl overflow-hidden"
          >
            <div className="glass-card rounded-none border border-white/10 p-10 md:p-12 min-h-[60px] flex flex-col justify-center text-center space-y-6 bg-gradient-to-br from-algoarn-black/80 to-slate-900/80">
              <div className="inline-flex p-4 rounded-2xl bg-green-500/10 border border-green-500/20 mx-auto">
                <Shield className="w-12 h-12 text-green-400" />
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Security, Privacy & Compliance </h2>
             

              <p className="text-xl leading-7 max-w-2xl mx-auto  text-white">
                Your data is safe with SUCA. Security is not a feature — it’s a foundation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-1">
                {[
                  {
                    title: "End-to-end Encryption",
                    desc: "Protected data flows across ingestion, storage, and analytics.",
                  },
                  {
                    title: "GDPR + Local Ready",
                    desc: "Compliant by design for institutional deployments.",
                  },
                  {
                    title: "Private + Controlled AI",
                    desc: "No student data is used for AI model training.",
                  },
                ].map((item) => (
                  <div key={item.title} className="text-center p-3">
                    <div className="text-green-400 font-bold mb-2">{item.title}</div>
                    <div className="text-sm text-white leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
                {[
                  {
                    title: "Private demos with sample data",
                    desc: "See SUCA in action before integrating real data.",
                  },
                  {
                    title: "On-premise / private cloud options",
                    desc: "Deploy the way your institution prefers.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl bg-white/5 border border-white/10 p-4 text-left">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <div className="text-white font-semibold">{item.title}</div>
                        <div className="text-white text-sm mt-1 leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* WHY SUCA */}
        {/* <section className="section-padding relative"> */}
        <section className="relative">

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-black">
                Why SUCA by Algoarn?
              </h2>
              <p className="text-xl leading-7 max-w-2xl mx-auto text-black">
                Research-driven, practical, and built for real institutional outcomes.
              </p>
            </div>

            {/*  Centered points */}
            <div className="max-w-4xl mx-auto mt-10 flex flex-col items-center">
 <div className="flex justify-center">
  <ul className="space-y-6">
    {[
      "Built by AI engineers & researchers",
      "Strong foundation in predictive analytics & computer vision",
      "Research-driven, not hype-driven",
      "Designed specifically for Indian education challenges",
      "Part of Algoarn’s mission to build practical, human-centric AI",
    ].map((line, i) => (
      <li key={i} className="flex items-start gap-3">
        <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-black" />
        <p className="text-xl leading-7 max-w-2xl text-black text-left">
          {line}
        </p>
      </li>
    ))}
  </ul>
</div>

  
  
</div>

          </div>
        </section>

        {/* FINAL CTA */}
        {/* <section className="section-padding"> */}
        <section>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto rounded-3xl overflow-hidden"
          >
            <div className="glass-card rounded-3xl overflow-hidden border border-white/10 p-12 text-center space-y-10 bg-gradient-to-br from-algoarnAqua/5 to-algoarnBlue/5 relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-algoarnAqua/10 rounded-full blur-3xl -translate-y-32 translate-x-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-algoarnBlue/10 rounded-full blur-3xl translate-y-32 -translate-x-32" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-algoarnAqua/15 border border-white mb-10">
                  <span className=" text-xl leading-7 max-w-2xl mx-auto text-white">
                    Ready to Transform Academic Outcomes ?
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
                  SUCA is
                  Academic Intelligence Infrastructure
                </h2>

                <p className="text-xl leading-7 max-w-2xl mx-auto text-white  mb-8 mt-12">
                  Not just another edtech platform — SUCA helps institutions predict outcomes,
                  personalize learning, and intervene early with clarity and confidence.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6 pb-12">
                  {/* <Link href="/contact?type=SUCA+Personalized+Institutional+Demo"> */}
                    {/* <Button
                      size="lg"
                      className="px-10 py-6 text-lg bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90"
                      style={{ borderRadius: "2.5rem" }}
                    >
                      Book a Personalized Institutional Demo
                    </Button> */}
                   <Button
  size="lg"
  className="px-10 py-6 text-lg bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90"
  style={{ borderRadius: "2.5rem" }}
  onClick={() => openModal("Institutional Demo")}
>
  Book a Personalized Institutional Demo
</Button>
                  {/* </Link> */}
                </div>

                <p className="text-white/60 text-xs mt-6">· Personalized demo in 24 hours</p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
