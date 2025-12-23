"use client";
 
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { NeonCard } from "@/components/ui/neon-card";
import {
  Mail,
  Phone,
  Sparkles,
  MessageCircle,
  Zap,
  Users,
  Target,
  Clock,
  Shield,
  ArrowRight,
  CheckCircle2,
  Bot,
  Cpu,
  Building,
  GraduationCap,
  BarChart3,
  Brain,
  Rocket,
  Star,
  Award,
  Globe,
  Calendar,
  Video,
} from "lucide-react";
 
type FormState = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  institutionType: string;
  employees: string;
  topic: string;
  timeline: string;
  message: string;
};
 
export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    organization: "",
    institutionType: "university",
    employees: "1-50",
    topic: "suca-demo",
    timeline: "1-month",
    message: "",
  });
 
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);
  const [activeChat, setActiveChat] = useState(false);
 
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
 
  // const handleSubmit = async (e: FormEvent) => {
  //   e.preventDefault();
  //   setError(null);
 
  //   if (!form.name || !form.email || !form.message) {
  //     setError("Please fill in Name, Email and Message.");
  //     return;
  //   }
 
  //   try {
  //     setStatus("submitting");
 
  //     await fetch("/api/contact", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(form),
  //     });
 
  //     setStatus("success");
  //     setForm({
  //       name: "",
  //       email: "",
  //       phone: "",
  //       organization: "",
  //       institutionType: "university",
  //       employees: "1-50",
  //       topic: "suca-demo",
  //       timeline: "1-month",
  //       message: "",
  //     });
  //   } catch (err) {
  //     setStatus("error");
  //     setError("Something went wrong. Please try again or email us directly.");
  //   }
  // };
 const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setError(null);

  if (!form.name || !form.email || !form.message) {
    setError("Please fill in Name, Email and Message.");
    return;
  }

  try {
    setStatus("submitting");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // we send the whole form; API will pick only needed fields
      body: JSON.stringify(form),
    });

    const json = await res.json();

    if (!res.ok) {
      setStatus("error");
      setError(json.error || "Something went wrong. Please try again.");
      return;
    }

    setStatus("success");
    setForm({
      name: "",
      email: "",
      phone: "",
      organization: "",
      institutionType: "university",
      employees: "1-50",
      topic: "suca-demo",
      timeline: "1-month",
      message: "",
    });
  } catch (err) {
    console.error(err);
    setStatus("error");
    setError("Something went wrong. Please try again or email us directly.");
  }
};

  const stats = [
    { value: "< 24h", label: "Average Response Time", icon: Clock },
    { value: "98%", label: "Client Satisfaction Rate", icon: Star },
    { value: "50+", label: "Institutions Served", icon: Building },
    { value: "100+", label: "AI Solutions Deployed", icon: Target },
  ];
 
  const features = [
    {
      icon: Brain,
      title: "AI Strategy Consulting",
      description:
        "Comprehensive AI roadmap development and implementation planning",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description:
        "Advanced data insights for student success and institutional efficiency",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "GDPR, FERPA compliant solutions with end-to-end encryption",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Rocket,
      title: "Rapid Implementation",
      description: "90-day deployment guarantee for most standard solutions",
      color: "from-orange-500 to-red-500",
    },
  ];
 
  const testimonials = [
    {
      quote:
        "Algoarn transformed our student retention rates by 35% in the first semester.",
      author: "Dr. Sarah Chen",
      role: "Dean of Academic Affairs, Stanford University",
      icon: GraduationCap,
    },
    {
      quote:
        "The predictive analytics helped us identify at-risk students 6 weeks earlier than traditional methods.",
      author: "Michael Rodriguez",
      role: "CTO, MIT Technology Services",
      icon: Building,
    },
    {
      quote:
        "Implementation was seamless and the ROI was evident within the first quarter.",
      author: "Emily Watson",
      role: "Director of Operations, Harvard Business School",
      icon: Award,
    },
  ];
 
  const institutionTypes = [
    { value: "university", label: "University" },
    { value: "college", label: "College" },
    { value: "school", label: "K-12 School" },
    { value: "corporate", label: "Corporate Training" },
    { value: "government", label: "Government Institution" },
    { value: "other", label: "Other" },
  ];
 
  const timelineOptions = [
    { value: "immediate", label: "Immediate (0-2 weeks)" },
    { value: "1-month", label: "Short-term (1 month)" },
    { value: "3-months", label: "Medium-term (3 months)" },
    { value: "6-months", label: "Long-term (6+ months)" },
  ];
 
  return (
    <main className="pt-20 pb-24">
      {/* Enhanced Live Chat Widget */}
      {/* {activeChat && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="fixed bottom-24 right-8 w-96 h-[500px] bg-gradient-to-br from-gray-900 to-slate-950 border border-algoarnAqua/40 rounded-2xl shadow-2xl z-50 overflow-hidden backdrop-blur-sm"
        >
          <div className="bg-gradient-to-r from-algoarnAqua to-algoarnBlue p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-algoarnAqua" />
              </div>
              <div>
                <h4 className="text-black font-bold">Algoarn AI Assistant</h4>
                <p className="text-white/80 text-sm">
                  Ready to help you transform education
                </p>
              </div>
              <div className="ml-auto w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            </div>
          </div>
 
          <div className="p-4 h-80 overflow-y-auto space-y-4">
            <div className="bg-algoarnAqua/10 border border-algoarnAqua/30 rounded-2xl p-4">
              <p className="text-white font-medium">
                Hello! I'm your Algoarn AI assistant. How can I help you today?
              </p>
              <div className="mt-3 space-y-2">
                <button className="w-full text-left p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm">
                  🎯 Schedule a SUCA demo
                </button>
                <button className="w-full text-left p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm">
                  💼 Discuss custom AI solutions
                </button>
                <button className="w-full text-left p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm">
                  📊 Get pricing information
                </button>
                <button className="w-full text-left p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm">
                  🚀 Technical requirements
                </button>
              </div>
            </div>
          </div>
 
          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <Input
                placeholder="Ask about AI solutions, pricing, or technical specs..."
                className="flex-1 bg-black/40 border-white/15 text-sm"
              />
              <Button className="bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-white/40 mt-2 text-center">
              Typically responds in under 30 seconds
            </p>
          </div>
        </motion.div>
      )}
  */}
      {/* Enhanced Live Chat Trigger */}
      {/* <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setActiveChat(!activeChat)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-algoarnAqua to-algoarnBlue rounded-full shadow-2xl flex items-center justify-center z-40 group"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900 animate-ping" />
      </motion.button> */}
 
      <div className="max-w-7xl mx-auto px-4 space-y-24">
        {/* Enhanced Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-12"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 rounded-full border border-algoarnAqua/30 bg-algoarnAqua/10 px-8 py-4 text-base font-semibold text-algoarnAqua backdrop-blur-sm"
            >
              <Sparkles className="w-5 h-5" />
              Trusted by Leading Educational Institutions Worldwide
              <Sparkles className="w-5 h-5" />
            </motion.div>
 
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black"
            >
              Transform Your  Institution  with AI
             
            </motion.h1>
 
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl text-black max-w-4xl mx-auto leading-relaxed"
            >
              Join forward-thinking universities and businesses leveraging our AI
              platform to enhance learning outcomes, optimize operations, and
              drive measurable results.
            </motion.p>
          </div>
 
          {/* Enhanced Stats Section – NOW USING NEONCARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <NeonCard className="text-center p-6 rounded-2xl">
                  <div className="w-14 h-14 bg-gradient-to-r from-algoarnAqua to-algoarnBlue rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white text-sm font-medium">
                    {stat.label}
                  </div>
                </NeonCard>
              </motion.div>
            ))}
          </motion.div>
 
          {/* CTA Buttons (commented out in your code) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          ></motion.div>
        </motion.section>
 
        {/* Testimonials Section (still commented out) */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        ></motion.section>
 
        {/* Main Content Grid */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid gap-16 lg:grid-cols-[1.1fr,1fr] items-start"
        >
          {/* Left: Enhanced Features & Info */}
          <div className="space-y-12">
            {/* Features Grid */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Why <span className="text-algoarnAqua">Algoarn</span> Stands
                  Out
                </h2>
                <p className="text-white text-lg">
                  We deliver enterprise-grade AI solutions with proven results
                  across the education sector.
                </p>
              </div>
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <NeonCard className="flex gap-6 p-6 rounded-3xl group hover:border-algoarnAqua/60 transition-all duration-300">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                      >
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-white text-xl mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-white text-base leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </NeonCard>
                  </motion.div>
                ))}
              </div>
            </div>
 
            {/* Enhanced Contact Methods */}
            <div className="space-y-8">
              <h3 className="text-4xl md:text-5xl font-bold mb-4">Multiple Ways to Connect</h3>
              <div className="space-y-4">
                {/* Email card */}
                <motion.div whileHover={{ scale: 1.02 }}>
                  <NeonCard className="flex items-center gap-6 p-6 rounded-3xl group hover:border-algoarnAqua/60 transition-all duration-300">
                    <div className="w-14 h-14 bg-algoarnAqua/20 rounded-2xl flex items-center justify-center group-hover:bg-algoarnAqua/30 transition-colors">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-white text-lg">
                        Email Our Team
                      </div>
                      <div className="text-white text-base font-medium">
                        solutions@algoarn.com
                      </div>
                      <div className="text-white text-sm mt-1">
                        Dedicated solution architects ready to help
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-algoarnAqua opacity-0 group-hover:opacity-100 transition-opacity" />
                  </NeonCard>
                </motion.div>
 
                {/* Phone card */}
                <motion.div whileHover={{ scale: 1.02 }}>
                  <NeonCard className="flex items-center gap-6 p-6 rounded-3xl group hover:border-algoarnAqua/60 transition-all duration-300">
                    <div className="w-14 h-14 bg-algoarnAqua/20 rounded-2xl flex items-center justify-center group-hover:bg-algoarnAqua/30 transition-colors">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-white text-lg">
                        Call Our Experts
                      </div>
                      <div className="text-white text-base font-medium">
                        +1 (555) 123-ALGO
                      </div>
                      <div className="text-white text-sm mt-1">
                        Mon-Fri, 8AM-8PM EST | Global toll-free available
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-algoarnAqua opacity-0 group-hover:opacity-100 transition-opacity" />
                  </NeonCard>
                </motion.div>
 
{/* Live chat card */}
                <motion.div whileHover={{ scale: 1.02 }}>
                  <NeonCard
                    className="w-full flex items-center gap-6 p-6 rounded-3xl cursor-pointer group hover:border-algoarnAqua/60 transition-all duration-300"
                    onClick={() => setActiveChat(true)}
                  >
                    <div className="w-14 h-14 bg-algoarnAqua/30 rounded-2xl flex items-center justify-center">
                      <MessageCircle className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-white text-lg">
                        Live AI Assistant
                      </div>
                      <div className="text-white text-base font-medium">
                        Instant intelligent support
                      </div>
                      <div className="text-white text-sm mt-1">
                        24/7 automated assistance with human backup
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-algoarnAqua opacity-0 group-hover:opacity-100 transition-opacity" />
                  </NeonCard>
                </motion.div>
              </div>
            </div>
 
            {/* Enhanced Trust Indicators */}
            <NeonCard className="p-8 space-y-6 rounded-3xl bg-gradient-to-br from-algoarnAqua/5 to-algoarnBlue/5">
              <div className="flex items-center gap-4">
                <Shield className="w-8 h-8 text-white" />
                <h4 className="font-bold text-white text-xl">
                  Enterprise-Grade Security & Compliance
                </h4>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/15">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white">GDPR & FERPA Compliant</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/15">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white">SOC 2 Type II Certified</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/15">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white">End-to-End Encryption</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/15">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white">ISO 27001 Certified</span>
                </div>
              </div>
            </NeonCard>
          </div>
 
          {/* Right: Enhanced Form */}
          <div className="sticky top-24">
            <NeonCard className="relative p-8 rounded-3xl border border-algoarnAqua/40 bg-gradient-to-br from-slate-900/90 to-gray-950/90 backdrop-blur-sm">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-algoarnAqua to-algoarnBlue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  Start Your AI Transformation
                </h2>
                <p className="text-white text-lg">
                  Get a personalized consultation and demo tailored to your
                  institution
                </p>
              </div>
 
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-white">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <Input
                      name="name"
                      placeholder="Dr. John Smith"
                      value={form.name}
                      onChange={handleChange}
                      className="bg-black/40 border-white/15 focus:border-algoarnAqua h-12"
                    />
                  </div>
 
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-white">
                      Work Email <span className="text-red-400">*</span>
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="john.smith@university.edu"
                      value={form.email}
                      onChange={handleChange}
                      className="bg-black/40 border-white/15 focus:border-algoarnAqua h-12"
                    />
                  </div>
                </div>
 
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-white">
                      Direct Phone
                    </label>
                    <Input
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={handleChange}
                      className="bg-black/40 border-white/15 focus:border-algoarnAqua h-12"
                    />
                  </div>
 
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-white">
                      Organization
                    </label>
                    <Input
                      name="organization"
                      placeholder="Stanford University"
                      value={form.organization}
                      onChange={handleChange}
                      className="bg-black/40 border-white/15 focus:border-algoarnAqua h-12"
                    />
                  </div>
                </div>
 
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-white">
                      Institution Type
                    </label>
                    <select
                      name="institutionType"
                      value={form.institutionType}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-white/90 shadow-inner outline-none focus:border-algoarnAqua focus:ring-2 focus:ring-algoarnAqua/30 transition-all duration-200 h-12"
                    >
                      {institutionTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
 
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-white">
                      Team Size
                    </label>
                    <select
                      name="employees"
                      value={form.employees}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-white/90 shadow-inner outline-none focus:border-algoarnAqua focus:ring-2 focus:ring-algoarnAqua/30 transition-all duration-200 h-12"
                    >
                      <option value="1-50">1-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-1000">201-1,000 employees</option>
                      <option value="1000+">1,000+ employees</option>
                    </select>
                  </div>
                </div>
 
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-white">
                      Primary Interest
                    </label>
                    <select
                      name="topic"
                      value={form.topic}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-white/90 shadow-inner outline-none focus:border-algoarnAqua focus:ring-2 focus:ring-algoarnAqua/30 transition-all duration-200 h-12"
                    >
                      <option value="suca-demo">SUCA Platform Demo</option>
                      <option value="ai-strategy">AI Strategy Consulting</option>
                      <option value="predictive-analytics">
                        Predictive Analytics
                      </option>
                      <option value="custom-solutions">
                        Custom AI Solutions
                      </option>
                      <option value="integration">
                        System Integration
                      </option>
                      <option value="partnership">
                        Partnership Opportunity
                      </option>
                    </select>
                  </div>
 
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-white/80">
                      Implementation Timeline
                    </label>
                    <select
                      name="timeline"
                      value={form.timeline}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-white/90 shadow-inner outline-none focus:border-algoarnAqua focus:ring-2 focus:ring-algoarnAqua/30 transition-all duration-200 h-12"
                    >
                      {timelineOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
 
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-white">
                    Tell Us About Your Goals{" "}
                    <span className="text-red-400">*</span>
                  </label>
                  <Textarea
                    name="message"
                    rows={5}
                    placeholder="Describe your institution's current challenges, specific goals you want to achieve with AI, and any particular use cases you're interested in..."
                    value={form.message}
                    onChange={handleChange}
                    className="bg-black/40 border-white/15 focus:border-algoarnAqua resize-none min-h-[120px]"
                  />
                </div>
 
                {error && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 text-sm text-red-400 bg-red-500/10 border border-red-500/40 rounded-xl"
                  >
                    {error}
                  </motion.div>
                )}
 
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/40 rounded-xl flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">
                        Consultation Request Received!
                      </div>
                      <div>
                        Our AI solutions specialist will contact you within 2
                        hours to schedule your demo.
                      </div>
                    </div>
                  </motion.div>
                )}
 
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-5 text-lg font-bold bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-algoarnAqua/30"
                  >
                    {status === "submitting" ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing Your Request...
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <Rocket className="w-5 h-5" />
                        Request Personalized Demo
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    )}
                  </Button>
 
                  <div className="text-center space-y-2 mt-4">
                    <p className="text-xs text-white/40">
                      🔒 Your information is secure and confidential
                    </p>
                    <p className="text-xs text-white/40">
                      By submitting, you agree to our Privacy Policy and consent
                      to contact about AI solutions.
                    </p>
                  </div>
                </div>
              </form>
            </NeonCard>
          </div>
        </motion.section>
 
        {/* Global Presence Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <NeonCard className="p-12 rounded-3xl bg-gradient-to-br from-algoarnAqua/5 to-algoarnBlue/5">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Globe className="w-8 h-8 text-white" />
              <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Global Reach, Local Expertise
              </h3>
            </div>
            <p className="text-white text-lg max-w-2xl mx-auto mb-8">
              Serving educational institutions across 25+ countries with
              localized support and region-specific AI solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-white">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-algoarnAqua" />
                <span>24/7 Global Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-algoarnAqua" />
                <span>Multi-language AI Assistants</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-algoarnAqua" />
                <span>Local Data Compliance</span>
              </div>
            </div>
          </NeonCard>
        </motion.section>
      </div>
    </main>
  );
}
 





// "use client";
 
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   BarChart3,
//   Brain,
//   Building,
//   CheckCircle2,
//   Clock,
//   Globe,
//   Loader2,
//   Mail,
//   MapPin,
//   Phone,
//   Rocket,
//   Send,
//   Shield,
//   Sparkles,
//   Star,
//   Target
// } from "lucide-react";
// import { FormEvent, useState } from "react";
 
// type FormState = {
//   name: string;
//   email: string;
//   phone: string;
//   organization: string;
//   institutionType: string;
//   employees: string;
//   topic: string;
//   timeline: string;
//   message: string;
// };
 
// export default function ContactPage() {
//   const [form, setForm] = useState<FormState>({
//     name: "",
//     email: "",
//     phone: "",
//     organization: "",
//     institutionType: "university",
//     employees: "1-50",
//     topic: "suca-demo",
//     timeline: "1-month",
//     message: "",
//   });
 
//   const [status, setStatus] = useState<
//     "idle" | "submitting" | "success" | "error"
//   >("idle");
//   const [error, setError] = useState<string | null>(null);
 
//   const handleChange = (
//     e:
//       | React.ChangeEvent<HTMLInputElement>
//       | React.ChangeEvent<HTMLTextAreaElement>
//       | React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };
 
//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setError(null);
 
//     if (!form.name || !form.email || !form.message) {
//       setError("Please fill in Name, Email and Message.");
//       return;
//     }
 
//     try {
//       setStatus("submitting");
 
//       await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });
 
//       setStatus("success");
//       setForm({
//         name: "",
//         email: "",
//         phone: "",
//         organization: "",
//         institutionType: "university",
//         employees: "1-50",
//         topic: "suca-demo",
//         timeline: "1-month",
//         message: "",
//       });
//     } catch (err) {
//       setStatus("error");
//       setError("Something went wrong. Please try again or email us directly.");
//     }
//   };
 
//   const stats = [
//     { value: "< 24h", label: "Average Response Time", icon: Clock },
//     { value: "98%", label: "Client Satisfaction", icon: Star },
//     { value: "50+", label: "Institutions Served", icon: Building },
//     { value: "100+", label: "AI Solutions Deployed", icon: Target },
//   ];
 
//   const features = [
//     {
//       icon: Brain,
//       title: "AI Strategy Consulting",
//       description: "Comprehensive AI roadmap development and implementation planning",
//       gradient: "from-blue-500 to-cyan-500",
//       bg: "bg-blue-50",
//       iconColor: "text-blue-600",
//     },
//     {
//       icon: BarChart3,
//       title: "Predictive Analytics",
//       description: "Advanced data insights for student success and efficiency",
//       gradient: "from-emerald-500 to-teal-500",
//       bg: "bg-emerald-50",
//       iconColor: "text-emerald-600",
//     },
//     {
//       icon: Shield,
//       title: "Enterprise Security",
//       description: "GDPR, FERPA compliant with end-to-end encryption",
//       gradient: "from-violet-500 to-purple-500",
//       bg: "bg-violet-50",
//       iconColor: "text-violet-600",
//     },
//     {
//       icon: Rocket,
//       title: "Rapid Implementation",
//       description: "90-day deployment guarantee for standard solutions",
//       gradient: "from-orange-500 to-amber-500",
//       bg: "bg-orange-50",
//       iconColor: "text-orange-600",
//     },
//   ];
 
//   const institutionTypes = [
//     { value: "university", label: "University" },
//     { value: "college", label: "College" },
//     { value: "school", label: "K-12 School" },
//     { value: "corporate", label: "Corporate Training" },
//     { value: "government", label: "Government Institution" },
//     { value: "other", label: "Other" },
//   ];
 
//   const timelineOptions = [
//     { value: "immediate", label: "Immediate (0-2 weeks)" },
//     { value: "1-month", label: "Short-term (1 month)" },
//     { value: "3-months", label: "Medium-term (3 months)" },
//     { value: "6-months", label: "Long-term (6+ months)" },
//   ];
 
//   return (
//     <div className="relative w-screen -mx-[calc((100vw-100%)/2)] -mt-8">
//       {/* LAYER 1: Full Page Background - Sticky to follow scroll but contained */}
//       <div className="sticky top-0 h-screen w-full -mb-[100vh] bg-gradient-to-br from-indigo-100 via-purple-50 to-sky-100 -z-10">
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]" />
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_80%_80%,rgba(56,189,248,0.15),rgba(255,255,255,0))]" />
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_20%_60%,rgba(167,139,250,0.15),rgba(255,255,255,0))]" />
//       </div>
 
//       {/* LAYER 2: All Content */}
//       <div className="relative">
//         {/* Hero Section */}
//         <section className="pt-24 pb-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center max-w-4xl mx-auto"
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.1 }}
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-sm font-medium mb-6"
//             >
//               <Sparkles className="w-4 h-4" />
//               Trusted by 50+ Leading Institutions
//             </motion.div>
           
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
//               Let's Build the{" "}
//               <span className="text-indigo-600">
//                 Future of Education
//               </span>{" "}
//               Together
//             </h1>
           
//             <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
//               Connect with our team of AI experts to discover how we can transform
//               your institution with cutting-edge technology solutions.
//             </p>
//           </motion.div>
 
//           {/* Stats Cards */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.6 }}
//             className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16 max-w-5xl mx-auto"
//           >
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={stat.label}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 + index * 0.1 }}
//                 whileHover={{ y: -5, transition: { duration: 0.2 } }}
//                 className="group"
//               >
//                 <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl hover:border-indigo-200 transition-all duration-300">
//                   <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                     <stat.icon className="w-6 h-6 text-white" />
//                   </div>
//                   <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
//                     {stat.value}
//                   </div>
//                   <div className="text-sm text-slate-600 font-medium">
//                     {stat.label}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//           </div>
//         </section>
 
//       {/* Main Content */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
         
//           {/* Left Column - Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="space-y-10"
//           >
//             {/* Section Title */}
//             <div>
//               <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
//                 Why Choose{" "}
//                 <span className="text-indigo-600">
//                   Algoarn
//                 </span>
//               </h2>
//               <p className="text-slate-600 text-lg">
//                 Enterprise-grade AI solutions with proven results across the education sector.
//               </p>
//             </div>
 
//             {/* Features */}
//             <div className="space-y-4">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={feature.title}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.2 + index * 0.1 }}
//                   whileHover={{ x: 5 }}
//                   className="group"
//                 >
//                   <div className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300">
//                     <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
//                       <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors mb-1">{feature.title}</h3>
//                       <p className="text-sm text-slate-600">{feature.description}</p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//             {/* Contact Cards */}
//             <div className="space-y-4">
//               <h3 className="text-xl font-semibold text-slate-900">Get in Touch</h3>
             
//               <div className="grid gap-4">
//                 <motion.a
//                   href="mailto:solutions@algoarn.com"
//                   whileHover={{ scale: 1.02 }}
//                   className="flex items-center gap-4 p-4 rounded-2xl bg-indigo-50 border border-indigo-100 hover:border-indigo-200 transition-all group"
//                 >
//                   <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 flex items-center justify-center">
//                     <Mail className="w-5 h-5 text-white" />
//                   </div>
//                   <div className="flex-1">
//                     <div className="font-semibold text-slate-900">Email Us</div>
//                     <div className="text-indigo-600 text-sm">solutions@algoarn.com</div>
//                   </div>
//                   <ArrowRight className="w-5 h-5 text-indigo-400 group-hover:translate-x-1 transition-transform" />
//                 </motion.a>
 
//                 <motion.a
//                   href="tel:+15551234567"
//                   whileHover={{ scale: 1.02 }}
//                   className="flex items-center gap-4 p-4 rounded-2xl bg-sky-50 border border-sky-100 hover:border-sky-200 transition-all group"
//                 >
//                   <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 flex items-center justify-center">
//                     <Phone className="w-5 h-5 text-white" />
//                   </div>
//                   <div className="flex-1">
//                     <div className="font-semibold text-slate-900">Call Us</div>
//                     <div className="text-sky-600 text-sm">+1 (555) 123-ALGO</div>
//                   </div>
//                   <ArrowRight className="w-5 h-5 text-sky-400 group-hover:translate-x-1 transition-transform" />
//                 </motion.a>
 
//                 <motion.div
//                   whileHover={{ scale: 1.02 }}
//                   className="flex items-center gap-4 p-4 rounded-2xl bg-purple-50 border border-purple-100 hover:border-purple-200 transition-all group cursor-pointer"
//                 >
//                   <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
//                     <MapPin className="w-5 h-5 text-white" />
//                   </div>
//                   <div className="flex-1">
//                     <div className="font-semibold text-slate-900">Visit Us</div>
//                     <div className="text-purple-600 text-sm">Global offices in 25+ countries</div>
//                   </div>
//                   <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
//                 </motion.div>
//               </div>
//             </div>
 
//             {/* Trust Badges */}
//             <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-sky-50 border border-indigo-100">
//               <div className="flex items-center gap-3 mb-4">
//                 <Shield className="w-6 h-6 text-indigo-600" />
//                 <h4 className="font-semibold text-slate-900">Enterprise Security</h4>
//               </div>
//               <div className="grid grid-cols-2 gap-3">
//                 {["GDPR Compliant", "SOC 2 Type II", "FERPA Certified", "ISO 27001"].map((badge) => (
//                   <div key={badge} className="flex items-center gap-2 text-sm text-slate-700">
//                     <CheckCircle2 className="w-4 h-4 text-indigo-500" />
//                     {badge}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
 
//           {/* Right Column - Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="lg:sticky lg:top-24"
//           >
//             <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
//               {/* Form Header */}
//               {/* <div className="bg-gradient-to-r from-indigo-600 to-sky-500 px-8 py-6">
//                 <div className="flex items-center gap-4">
//                   <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
//                     <Send className="w-7 h-7 text-white" />
//                   </div>
//                   <div>
//                     <h2 className="text-2xl font-bold text-white">Get Started</h2>
//                     <p className="text-white/80 text-sm">Fill out the form and we'll be in touch within 24 hours</p>
//                   </div>
//                 </div>
//               </div> */}
//  {/* Form Header (NEON) */}
// <div className="relative overflow-hidden rounded-t-3xl">
//   {/* neon glow */}
//   <div className="absolute -inset-10 bg-gradient-to-r from-indigo-500/45 to-sky-400/45 blur-3xl opacity-90" />

//   {/* neon border */}
//   <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-sky-500" />

//   {/* inner header */}
//   <div className="relative m-[2px] rounded-t-[1.35rem] bg-slate-950/85 backdrop-blur-xl px-8 py-6">
//     <div className="flex items-center gap-4">
//       <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center border border-white/20">
//         <Send className="w-7 h-7 text-white" />
//       </div>

//       <div>
//         <h2 className="text-2xl font-bold text-white">Get Started</h2>
//         <p className="text-white/80 text-sm">
//           Fill out the form and we&apos;ll be in touch within 24 hours
//         </p>
//       </div>
//     </div>
//   </div>
// </div>

//               {/* Form Body */}
//               <form onSubmit={handleSubmit} className="p-8 space-y-6">
//                 <div className="grid gap-5 sm:grid-cols-2">
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-slate-700">
//                       Full Name <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       name="name"
//                       type="text"
//                       placeholder="John Smith"
//                       value={form.name}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-slate-700">
//                       Work Email <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       name="email"
//                       type="email"
//                       placeholder="john@university.edu"
//                       value={form.email}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                     />
//                   </div>
//                 </div>
 
//                 <div className="grid gap-5 sm:grid-cols-2">
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-slate-700">Phone</label>
//                     <input
//                       name="phone"
//                       type="tel"
//                       placeholder="+1 (555) 000-0000"
//                       value={form.phone}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-slate-700">Organization</label>
//                     <input
//                       name="organization"
//                       type="text"
//                       placeholder="Stanford University"
//                       value={form.organization}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                     />
//                   </div>
//                 </div>
 
//                 <div className="grid gap-5 sm:grid-cols-2">
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-slate-700">Institution Type</label>
//                     <select
//                       name="institutionType"
//                       value={form.institutionType}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                     >
//                       {institutionTypes.map((type) => (
//                         <option key={type.value} value={type.value}>
//                           {type.label}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-slate-700">Primary Interest</label>
//                     <select
//                       name="topic"
//                       value={form.topic}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                     >
//                       <option value="suca-demo">SUCA Platform Demo</option>
//                       <option value="ai-strategy">AI Strategy Consulting</option>
//                       <option value="predictive-analytics">Predictive Analytics</option>
//                       <option value="custom-solutions">Custom AI Solutions</option>
//                       <option value="integration">System Integration</option>
//                       <option value="partnership">Partnership</option>
//                     </select>
//                   </div>
//                 </div>
 
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium text-slate-700">
//                     Tell us about your goals <span className="text-red-500">*</span>
//                   </label>
//                   <textarea
//                     name="message"
//                     rows={4}
//                     placeholder="Describe your institution's challenges and what you'd like to achieve..."
//                     value={form.message}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
//                   />
//                 </div>
 
//                 {error && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm"
//                   >
//                     {error}
//                   </motion.div>
//                 )}
 
//                 {status === "success" ? (
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center gap-3"
//                   >
//                     <CheckCircle2 className="w-5 h-5" />
//                     <div>
//                       <div className="font-semibold">Message sent successfully!</div>
//                       <div className="text-sm">We'll get back to you within 24 hours.</div>
//                     </div>
//                   </motion.div>
//                 ) : (
                  
//                   // <button
//                   //   type="submit"
//                   //   disabled={status === "submitting"}
//                   //   className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 text-white font-semibold text-lg hover:from-indigo-600 hover:to-sky-600 focus:ring-4 focus:ring-indigo-200 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30"
//                   // >
//                   //   {status === "submitting" ? (
//                   //     <>
//                   //       <Loader2 className="w-5 h-5 animate-spin" />
//                   //       Sending...
//                   //     </>
//                   //   ) : (
//                   //     <>
//                   //       Send Message
//                   //       <ArrowRight className="w-5 h-5" />
//                   //     </>
//                   //   )}
//                   // </button>
//                   <button
//   type="submit"
//   disabled={status === "submitting"}
//   className="
//     w-full py-4 px-6 rounded-xl
//     bg-gradient-to-r from-[#6366f1] to-[#0ea5e9]
//     text-white font-semibold text-lg

//     flex items-center justify-center gap-2
//     transition-all duration-300

//     shadow-[0_8px_24px_rgba(99,102,241,0.35)]
//     hover:shadow-[0_12px_36px_rgba(14,165,233,0.45)]
//     hover:brightness-110

//     focus:outline-none
//     focus:ring-4
//     focus:ring-sky-300/40

//     disabled:opacity-70
//     disabled:cursor-not-allowed
//   "
// >
//   {status === "submitting" ? (
//     <>
//       <Loader2 className="w-5 h-5 animate-spin" />
//       Sending...
//     </>
//   ) : (
//     <>
//       Send Message
//       <ArrowRight className="w-5 h-5" />
//     </>
//   )}
// </button>

//                 )}
 
//                 <p className="text-center text-xs text-gray-400">
//                    Your information is secure and will never be shared
//                 </p>
//               </form>
//             </div>
//           </motion.div>
//         </div>
//       </section>
 
//       {/* Global Section */}
//       {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="bg-gradient-to-r from-indigo-600 to-sky-500 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
//         >
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
         
//           <div className="relative">
//             <div className="flex items-center justify-center gap-3 mb-4">
//               <Globe className="w-8 h-8 text-white" />
//               <h3 className="text-3xl sm:text-4xl font-bold text-white">
//                 Global Reach, Local Expertise
//               </h3>
//             </div>
//             <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
//               Serving educational institutions across 25+ countries with
//               localized support and region-specific AI solutions.
//             </p>
//             <div className="flex flex-wrap justify-center gap-6 text-white/90">
//               {["24/7 Global Support", "Multi-language AI", "Local Compliance"].map((item) => (
//                 <div key={item} className="flex items-center gap-2">
//                   <CheckCircle2 className="w-5 h-5" />
//                   <span>{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </section> */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.6 }}
//   //   className="
//   //     relative overflow-hidden rounded-[2.5rem]
//   //     p-8 sm:p-12 text-center
//   //     bg-gradient-to-br from-[#0b1426] via-[#0b1f33] to-[#071225]
//   //     shadow-[0_25px_80px_rgba(2,132,199,0.25)]
//   //     ring-1 ring-white/10
//   //   "
//   // >
//   className="
//     relative overflow-hidden rounded-[2.5rem]
//   p-8 sm:p-12 text-center

//   /* EXACT Image-1 style background */
//   bg-[radial-gradient(900px_420px_at_50%_-12%,rgba(56,189,248,0.35)_0%,rgba(56,189,248,0.18)_35%,transparent_60%),linear-gradient(135deg,#0b1424_0%,#0f2940_45%,#09172a_100%)]

//   shadow-[0_40px_120px_rgba(56,189,248,0.28)]
//   ring-1 ring-white/10
// "
// >
//     {/* Neon glow blobs (like Image-1) */}
//     <div className="pointer-events-none absolute inset-0">
//       <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-sky-400/25 blur-[90px]" />
//       <div className="absolute -bottom-48 -left-24 h-[520px] w-[520px] rounded-full bg-cyan-400/20 blur-[100px]" />
//       <div className="absolute -bottom-52 -right-24 h-[520px] w-[520px] rounded-full bg-sky-500/15 blur-[110px]" />

//       {/* Soft vignette to keep center readable */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/40" />

//       {/* Optional subtle dots texture */}
//       <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:26px_26px]" />
//     </div>

//     <div className="relative">
//       <div className="flex items-center justify-center gap-3 mb-4">
//         <Globe className="w-8 h-8 text-sky-300" />
//         <h3 className="text-3xl sm:text-4xl font-bold text-white">
//           Global Reach, Local Expertise
//         </h3>
//       </div>

//       <p className="text-white/85 text-lg max-w-2xl mx-auto mb-8">
//         Serving educational institutions across 25+ countries with localized
//         support and region-specific AI solutions.
//       </p>

//       <div className="flex flex-wrap justify-center gap-6 text-white/85">
//         {["24/7 Global Support", "Multi-language AI", "Local Compliance"].map(
//           (item) => (
//             <div key={item} className="flex items-center gap-2">
//               <CheckCircle2 className="w-5 h-5 text-sky-300" />
//               <span>{item}</span>
//             </div>
//           )
//         )}
//       </div>
//     </div>
//   </motion.div>
// </section>

//       </div>{/* End LAYER 2: Content */}
//     </div>
//   );
// }