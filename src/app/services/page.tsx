"use client";
import { useContactModal } from "@/components/contact/contact-modal-provider";
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
 
const serviceParticles = Array.from({ length: 12 }, (_, i) => ({
  left: `${(i * 17) % 100}%`,
  top: `${(i * 37) % 100}%`,
  duration: 3 + (i % 3),
  delay: (i % 4) * 0.4,
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
    desc: `Algoarn's Generative AI services bring creativity and efficiency together to help businesses do more with less. By utilizing advanced generative models, we empower organizations to automate content creation, streamline processes, and enhance productivity.`,
    img: "/genai.avif",
  },
  {
    title: "Predictive AI",
    desc: `Our Predictive AI services enable businesses to make proactive, data-driven decisions that reduce risks and optimize operations. By analyzing historical data, our models can forecast future trends and improve demand forecasting and planning.`,
    img: "/predictive.png",
  },
];

export default function ServicesPage() {
  const { openModal } = useContactModal();

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-screen -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)] pt-20 pb-24 -mt-[32px]">

        {/* Background image + dark blue-purple gradient overlay */}
        <div className="absolute inset-0">
          <img
            src="/service.webp"
            alt="AI services background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-indigo-900/70 to-purple-900/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(79,70,229,0.4)_0%,_transparent_20%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(139,92,246,0.3)_0%,_transparent_20%)]" />
        </div>

        {/* Ambient blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-40 w-[700px] h-[700px] bg-blue-500/10 blur-[140px] rounded-full" />
          <div className="absolute bottom-1/4 -right-40 w-[700px] h-[700px] bg-purple-500/10 blur-[140px] rounded-full" />
        </div>

        {/* Floating white particles */}
        <div className="absolute inset-0 pointer-events-none">
          {serviceParticles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-white rounded-full"
              style={{ left: p.left, top: p.top }}
              animate={{ y: [0, -40, 0], opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
              transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center space-y-10"
        >
          {/* Badge */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 50 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-300" />
            <span className="text-xs md:text-sm font-medium text-white tracking-[0.25em] uppercase">
              Enterprise AI Solutions
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 50 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              Services Tailored for You
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl leading-7 max-w-3xl mx-auto text-gray-200"
          >
            From computer vision and generative AI to LMS platforms and custom AI
            workflows, we design and ship{" "}
            <span className="font-semibold text-white">
              solutions aligned with your real-world outcomes
            </span>{" "}
            and business objectives.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6 pb-20"
          >
            <Button
              size="lg"
              className="px-10 py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-2xl shadow-blue-500/30"
              style={{ borderRadius: "2.5rem" }}
              onClick={() => openModal("Institutional Demo")}
            >
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. SERVICES OVERVIEW */}
      <section id="services" className="relative space-y-16 px-4 py-24" style={{ marginTop: "94px" }}>

        <div className="absolute -top-44 -left-44 w-[700px] h-[700px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-44 -right-44 w-[700px] h-[700px] bg-purple-500/10 blur-[140px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center space-y-6 max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our AI Service Portfolio
            </span>
          </h2>
          <p className="text-xl leading-7 max-w-2xl mx-auto text-gray-700">
            End-to-end AI services designed to transform your operations with cutting-edge technology
          </p>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto space-y-12" style={{ marginTop: "-12px" }}>
          {services.map((s, i) => (
            <FadeInUp key={s.title} delay={0.1 + i * 0.1}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.3, type: "spring" } }}
                className="relative group"
              >
                <div className="absolute -inset-4 rounded-[44px] bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative rounded-[40px] bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-2xl p-10 md:p-14">
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 gap-14 items-center ${
                      i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="flex justify-center">
                      <img
                        src={s.img}
                        alt={s.title}
                        className="w-full max-w-md object-contain transition-transform duration-300 hover:scale-105 rounded-2xl"
                      />
                    </div>
                    <div className="space-y-5">
                      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                        {s.title}
                      </h2>
                      <p className="text-lg leading-7 text-gray-300" style={{ marginTop: "17px" }}>
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeInUp>
          ))}
        </div>
      </section>

      {/* 3. EXPERIENCE SECTION */}
      <section className="relative px-4 py-24">

        <div className="absolute -top-44 -left-44 w-[700px] h-[700px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-44 -right-44 w-[700px] h-[700px] bg-purple-500/10 blur-[140px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center space-y-4 max-w-5xl mx-auto mb-14"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Proven Track Record
              </span>
            </h2>
          </motion.div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">Our Experience</p>
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="relative rounded-[40px] bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-2xl p-10 md:p-12 overflow-hidden">

            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:40px_40px]" />
            </div>

            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-32 translate-x-32 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-32 -translate-x-32 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
                  Key Achievements
                </h3>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                  Why Choose Us
                </h3>
              </div>

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
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="h-full flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="p-2 rounded-xl bg-blue-500/20 border border-blue-500/30 group-hover:scale-110 transition-transform flex-shrink-0">
                        <Star className="w-5 h-5 text-blue-400" />
                      </div>
                      <span className="text-base leading-7 text-gray-300 flex-1">{row.left}</span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="h-full flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="p-2 rounded-xl bg-purple-500/20 border border-purple-500/30 group-hover:scale-110 transition-transform flex-shrink-0">
                        <Rocket className="w-5 h-5 text-purple-400" />
                      </div>
                      <span className="text-base leading-7 text-gray-300 flex-1">{row.right}</span>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA SECTION — now matches dark card style */}
      <section className="px-4" style={{ marginTop: "97px" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative rounded-[40px] overflow-hidden border border-white/10 p-12 md:p-16 text-center space-y-8 bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl">

            {/* Dot pattern — matches section 3 */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:40px_40px]" />
            </div>

            {/* Glow blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-32 translate-x-32 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-32 -translate-x-32 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white/10 border border-white/20 mb-4"
              >
                <span className="text-lg text-white">Ready to Build Your AI Solution?</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-5xl font-bold"
              >
                <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                  Let&apos;s Build Your AI Solution
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl leading-7 max-w-2xl mx-auto text-gray-200 mt-8"
              >
                Ready to transform your institution or business with cutting-edge AI technology?
                Contact us to discuss your project requirements and start your AI journey today.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 pb-12"
              >
                <Link href="/contact?type=AI+Services">
                  <Button
                    size="lg"
                    className="px-10 py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-2xl shadow-blue-500/30"
                    style={{ borderRadius: "2.5rem" }}
                  >
                    Start Your Project
                  </Button>
                </Link>
              </motion.div>

              {/* Trust Assurance */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 max-w-2xl mx-auto"
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
                    <item.icon className="w-5 h-5 text-blue-400" />
                    <span className="text-white/90 text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </motion.div>

              <p className="text-gray-400 text-xs mt-6">· Personalized response in 24 hours</p>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}