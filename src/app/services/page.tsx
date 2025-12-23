 
"use client";
import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NeonCard } from "@/components/ui/neon-card";
import { Card } from "@/components/ui/card";
import {
  Eye,
  Brain,
  ChartLine,
  GraduationCap,
  Cpu,
  Settings,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  Zap,
  Rocket,
  Shield,
  Star,
  Section,
} from "lucide-react";
 
// ✅ deterministic particles (no Math.random, no hydration mismatch)
const serviceParticles = Array.from({ length: 12 }, (_, i) => ({
  left: `${(i * 17) % 100}%`,
  top: `${(i * 37) % 100}%`,
  duration: 3 + (i % 3), // 3–5 seconds
  delay: (i % 4) * 0.4,  // 0, 0.4, 0.8, 1.2
}));
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
 const services = [
  {
    title: "Computer Vision",
    desc: `At Algoarn, our Computer Vision solutions transform visual data into meaningful insights that drive smarter decision-making. By leveraging advanced algorithms, we enable machines to interpret and understand images and videos, unlocking opportunities for automation, accuracy, and efficiency.`,
    img: "/computer vision.avif",
  },
  {
    title: "Generative AI",
    desc: `Algoarn’s Generative AI services bring creativity and efficiency together to help businesses do more with less. By utilizing advanced generative models, we empower organizations to automate content creation, streamline processes, and enhance productivity.`,
    img: "/genai.avif",
  },
  {
    title: "Predictive AI",
    desc: `Our Predictive AI services enable businesses to make proactive, data-driven decisions that reduce risks and optimize operations. By analyzing historical data, our models can forecast future trends and improve demand forecasting and planning.`,
    img: "/predictive.png",
  },
];
export default function ServicesPage() {
  return (
    <div className="space-y-28 pt-20 pb-20">
      {/* 1. ENHANCED HERO SECTION */}
      {/* <section className="relative min-h-[70vh] flex items-center justify-center overflow-x-hidden 
bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 
border-b border-algoarnAqua/30 
w-screen -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)] pt-24 pb-28"> */}
   {/* <section className="relative min-h-[calc(60vh)] flex justify-center overflow-hidden w-screen 
  -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)]
  bg-gradient-to-br from-[#f8faff] via-[#f3f4ff] to-[#eef9ff]
  pt-20 -mt-[31px]" style={{marginTop:'-110px'}}> */}
  <section className="relative min-h-[60vh] flex justify-center overflow-hidden w-screen -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)] bg-gradient-to-br from-[#f8faff] via-[#f3f4ff] to-[#eef9ff] pt-20 -mt-[31px]" style={{marginTop:'-110px'}}>

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
        Enterprise AI Solutions
      </span>
    </div>

    {/* Heading */}
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black">
      Services <span className="text-black">Tailored for You</span>
    </h1>

    {/* Subheading */}
    <p className="text-lg md:text-xl text-black leading-relaxed max-w-4xl mx-auto">
      From computer vision and generative AI to LMS platforms and custom AI
      workflows, we design and ship{" "}
      <span className="text-black font-semibold">
        solutions aligned with your real-world outcomes
      </span>{" "}
      and business objectives.
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
    <span className="text-white">Contact Us</span>
  </Link>
</Button>

<Button
  asChild
  size="lg"
  className="px-10 py-4 text-base md:text-lg font-semibold bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-lg hover:from-indigo-600 hover:to-sky-600 transition-all"
  style={{ borderRadius: "9999px" }}
>
  <Link href="/services?type=AI+Services">
    <span className="text-white">Explore Services</span>
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

 
      {/* 2. ENHANCED SERVICES OVERVIEW - PREMIUM NEON GRID */}
      <section id="services" className="space-y-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
           
          >
            {/* <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
           Comprehensive AI Solutions
              </h2> */}
            {/* <Target className="w-6 h-6" /> */}
         
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-black to-black/80 bg-clip-text text-transparent">
            Our AI Service Portfolio
          </h2>
          <p className="text-xl text-black/90 max-w-3xl mx-auto leading-relaxed">
            End-to-end AI services designed to transform your operations with cutting-edge
            technology
          </p>
        </motion.div>
 
       
          <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 space-y-28">
        {services.map((s, i) => (
          <FadeInUp key={s.title} delay={0.1 + i * 0.1}>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-14 items-center ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              {/* Image – casual, no border */}
              <div className="flex justify-center">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full max-w-md object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Text */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {s.title}
                </h2>

                <p className="mt-4 text-gray-600 text-base leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          </FadeInUp>
        ))}
      </div>
    </section>
          {/* Computer Vision */}
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="group relative"
          > */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            <NeonCard className="p-8 h-full flex flex-col space-y-6 bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-white/10 group-hover:border-blue-400/50 backdrop-blur-sm transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <div className="absolute inset-[2px] rounded-3xl bg-slate-900 -z-10"></div> */}
{/*
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Computer Vision</h3>
              </div> */}
              {/* <div className="flex items-center gap-4">
  <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 group-hover:scale-110 transition-transform duration-300 shadow-lg">
    <div className="relative w-20 h-20">
      <Image
        src="/computer vision.avif"    // ⬅️ your image path
        alt="Computer Vision"
        fill
        className="object-contain"
      />
    </div>
  </div>
  <h3 className="text-2xl font-bold text-white">Computer Vision</h3>
</div> */}
 
 
              {/* <ul className="space-y-4 flex-1">
                {["Detection & tracking", "OCR", "Video analytics", "Quality inspection"].map(
                  (feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      className="flex items-start gap-4 text-white/80 text-base leading-relaxed group/item hover:text-white transition-colors"
                    >
                      <div className="p-1 rounded-lg bg-gradient-to-r from-blue-400 to-cyan-400 mt-1 flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span>{feature}</span>
                    </motion.li>
                  )
                )}
              </ul>
            </NeonCard>
          </motion.div>
  */}
          {/* Generative AI */}
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            <NeonCard className="p-8 h-full flex flex-col space-y-6 bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-white/10 group-hover:border-purple-400/50 backdrop-blur-sm transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <div className="absolute inset-[2px] rounded-3xl bg-slate-900 -z-10"></div> */}
 
              {/* <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Generative AI</h3>
              </div> */}
{/* <div className="flex items-center gap-4">
  <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 group-hover:scale-110 transition-transform duration-300 shadow-lg">
    <div className="relative w-20 h-20">
      <Image
        src="/genai.avif"   // ⬅️ your image path
        alt="Generative AI"
        fill
        className="object-contain"
      />
    </div>
  </div>
  <h3 className="text-2xl font-bold text-white">Generative AI</h3>
</div>
 
              <ul className="space-y-4 flex-1">
                {["Chatbots", "Content automation", "Model fine-tuning"].map(
                  (feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-start gap-4 text-white/80 text-base leading-relaxed group/item hover:text-white transition-colors"
                    >
                      <div className="p-1 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400 mt-1 flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span>{feature}</span>
                    </motion.li>
                  )
                )}
              </ul>
            </NeonCard>
          </motion.div> */}
 
          {/* Predictive AI */}
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            <NeonCard className="p-8 h-full flex flex-col space-y-6 bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-white/10 group-hover:border-green-400/50 backdrop-blur-sm transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <div className="absolute inset-[2px] rounded-3xl bg-slate-900 -z-10"></div> */}
{/*
               <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <ChartLine className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Predictive AI</h3>
              </div> */}
              {/* <div className="flex items-center gap-4">
  <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30 group-hover:scale-110 transition-transform duration-300 shadow-lg">
<div className="relative w-20 h-20">
  <Image
    // src="/Predictive-AI.jpg"
     src="/predictive.png"
    alt="Predictive AI"
    fill
    className="object-contain"
  />
</div>
</div>
 <h3 className="text-2xl font-bold text-white">Predictive AI</h3>
 </div>
              <ul className="space-y-4 flex-1">
                {["Forecasting", "Risk prediction", "Time-series analysis"].map(
                  (feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-4 text-white/80 text-base leading-relaxed group/item hover:text-white transition-colors"
                    >
                      <div className="p-1 rounded-lg bg-gradient-to-r from-green-400 to-emerald-400 mt-1 flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span>{feature}</span>
                    </motion.li>
                  )
                )}
              </ul>
            </NeonCard>
          </motion.div> */}
 
         
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            <NeonCard className="p-8 h-full flex flex-col space-y-6 bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-white/10 group-hover:border-orange-400/50 backdrop-blur-sm transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <div className="absolute inset-[2px] rounded-3xl bg-slate-900 -z-10"></div> */}
 
              {/* <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-400/30 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">LMS & EdTech</h3>
              </div> */}
{/* <div className="flex items-center gap-4">
  <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-400/30 group-hover:scale-110 transition-transform duration-300 shadow-lg">
    <div className="relative w-20 h-20">
      <Image
        src="/LMS.jpg"   // ⬅️ your image file path
        alt="LMS & EdTech"
        fill
        className="object-contain"
      />
    </div>
  </div>
  <h3 className="text-2xl font-bold text-white">LMS & EdTech</h3>
</div> */}
 
              {/* <ul className="space-y-4 flex-1">
                {["Full LMS", "AI-powered assessments", "Dashboards"].map(
                  (feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-4 text-white/80 text-base leading-relaxed group/item hover:text-white transition-colors"
                    >
                      <div className="p-1 rounded-lg bg-gradient-to-r from-orange-400 to-red-400 mt-1 flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span>{feature}</span>
                    </motion.li>
                  )
                )}
              </ul>
            </NeonCard>
          </motion.div> */}
 
{/* Custom AI Development */}
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            <NeonCard className="p-8 h-full flex flex-col space-y-6 bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-white/10 group-hover:border-blue-400/50 backdrop-blur-sm transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <div className="absolute inset-[2px] rounded-3xl bg-slate-900 -z-10"></div> */}
 
              {/* <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-400/30 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Custom AI</h3>
              </div> */}
{/* <div className="flex items-center gap-4">
  <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-400/30 group-hover:scale-110 transition-transform duration-300 shadow-lg">
    <div className="relative w-20 h-20">
      <Image
        src="/custom.jpg"   // ⬅️ your image file
        alt="Custom AI"
        fill
        className="object-contain"
      />
    </div>
  </div>
  <h3 className="text-2xl font-bold text-white">Custom AI</h3>
</div>
 
              <ul className="space-y-4 flex-1">
                {["Tailored AI solutions", "Integration with existing systems"].map(
                  (feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-4 text-white/80 text-base leading-relaxed group/item hover:text-white transition-colors"
                    >
                      <div className="p-1 rounded-lg bg-gradient-to-r from-blue-400 to-indigo-400 mt-1 flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span>{feature}</span>
                    </motion.li>
                  )
                )}
              </ul>
            </NeonCard>
          </motion.div> */}
 
          {/* Software Development */}
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            <NeonCard className="p-8 h-full flex flex-col space-y-6 bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-white/10 group-hover:border-cyan-400/50 backdrop-blur-sm transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <div className="absolute inset-[2px] rounded-3xl bg-slate-900 -z-10"></div> */}
 
              {/* <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-400/30 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Software Dev</h3>
              </div> */}
{/* <div className="flex items-center gap-4">
  <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-400/30 group-hover:scale-110 transition-transform duration-300 shadow-lg">
    <div className="relative w-19 h-19">
      <Image
        src="/Dev.avif"   // ⬅️ your image path
        alt="Software Development"
        fill
        className="object-contain"
      />
    </div>
  </div>
  <h3 className="text-2xl font-bold text-white">Software Dev</h3>
</div> */}
 
              {/* <ul className="space-y-4 flex-1">
                {["Web apps", "Dashboards", "Backend systems"].map(
                  (feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-start gap-4 text-white/80 text-base leading-relaxed group/item hover:text-white transition-colors"
                    >
                      <div className="p-1 rounded-lg bg-gradient-to-r from-cyan-400 to-teal-400 mt-1 flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span>{feature}</span>
                    </motion.li>
                  )
                )}
              </ul> */}
            {/* </NeonCard>
          </motion.div> */}
        
      </section>
 
      {/* 3. ENHANCED EXPERIENCE SECTION */}
      <section className="relative px-4">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center space-y-8 max-w-5xl mx-auto"
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-black to-black/80 bg-clip-text text-transparent">
        Proven Track Record
      </h2>
    </motion.div>

    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
      Our Experience
    </h2>
  </motion.div>

  <div className="max-w-5xl mx-auto mt-12">
    <Card className="relative p-12 bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-algoarnAqua/20 backdrop-blur-sm rounded-3xl overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:40px_40px]" />
      </div>

      {/* ✅ CONTENT */}
      <div className="relative z-10 space-y-6">
        {/* Headings row */}
        <div className="grid md:grid-cols-2 gap-8">
          <h3 className="text-2xl font-bold text-white">Key Achievements</h3>
          <h3 className="text-2xl font-bold text-white">Why Choose Us</h3>
        </div>

        {/* Paired rows (perfect alignment) */}
        <div className="space-y-4">
          {[
            {
              left: "Built SUCA — a production-ready academic intelligence platform",
              right: "Proven expertise in cutting-edge AI technologies",
            },
            {
              left: "Developed multiple AI pipelines for enterprise use cases",
              right: "Track record of successful project delivery",
            },
            {
              left: "Expertise in computer vision + EdTech ecosystems",
              right: "Deep understanding of institutional needs",
            },
            {
              left: "Delivered scalable internal solutions for institutions",
              right: "Commitment to scalable, maintainable solutions",
            },
          ].map((row, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-stretch">
              {/* LEFT CARD */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full flex items-start gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/80 transition-all duration-300 group"
              >
                <div className="p-2 rounded-xl bg-algoarnAqua/20 border border-algoarnAqua/30 group-hover:scale-110 transition-transform">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <span className="text-white text-lg leading-relaxed flex-1">
                  {row.left}
                </span>
              </motion.div>

              {/* RIGHT CARD */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full flex items-start gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/80 transition-all duration-300 group"
              >
                <div className="p-2 rounded-xl bg-algoarnBlue/20 border border-algoarnBlue/30 group-hover:scale-110 transition-transform">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <span className="text-white text-lg leading-relaxed flex-1">
                  {row.right}
                </span>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  </div>
</section>

 
      {/* 4. ENHANCED CTA SECTION */}
      <section className="px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <NeonCard className="p-12 md:p-16 rounded-4xl text-center space-y-8 bg-gradient-to-br from-slate-900 via-slate-800/20 to-slate-900 border border-algoarnAqua/40 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-algoarnAqua to-transparent animate-pulse"></div>
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-algoarnAqua/20 rounded-full blur-3xl animate-pulse-slow"></div>
              <div
                className="absolute -bottom-20 -left-20 w-64 h-64 bg-algoarnBlue/20 rounded-full blur-3xl animate-pulse-slow"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
 
            <div className="relative z-10 space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-white"
              >
                Let&apos;s Build Your   AI Solution
               
              </motion.h2>
 
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
              >
                Ready to transform your institution or business with cutting-edge AI
                technology? Contact us to discuss your project requirements and start your AI
                journey today.
              </motion.p>
 
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
              >
                <Link href="/contact?type=AI+Services">
                  <Button className="px-16 py-8 text-xl font-bold bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90 hover:scale-105 transform transition-all duration-300 shadow-2xl shadow-algoarnAqua/30 group relative overflow-hidden">
                    <span className="relative z-10 flex items-center gap-4">
                      🚀 Start Your Project
                      {/* <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" /> */}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </Button>
                </Link>
              </motion.div>
 
              {/* Trust Assurance */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 max-w-2xl mx-auto"
              >
                {[
                  { icon: Shield, text: "Secure & Confidential" },
                  { icon: Star, text: "Proven Methodology" },
                  { icon: Rocket, text: "Fast Deployment" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 justify-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                  >
                    <item.icon className="w-5 h-5 text-algoarnAqua" />
                    <span className="text-white/90 text-sm font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </NeonCard>
        </motion.div>
      </section>
    </div>
  );
}
 
 