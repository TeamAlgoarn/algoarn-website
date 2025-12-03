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
 
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
 
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in Name, Email and Message.");
      return;
    }
 
    try {
      setStatus("submitting");
 
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
 
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
      {activeChat && (
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
                <h4 className="text-white font-bold">Algoarn AI Assistant</h4>
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
 
      {/* Enhanced Live Chat Trigger */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setActiveChat(!activeChat)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-algoarnAqua to-algoarnBlue rounded-full shadow-2xl flex items-center justify-center z-40 group"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900 animate-ping" />
      </motion.button>
 
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
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
            >
              Transform Your  Institution  with AI
             
            </motion.h1>
 
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed"
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
                  <div className="text-3xl font-bold text-algoarnAqua mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-sm font-medium">
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
                <p className="text-white/70 text-lg">
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
                        <p className="text-white/60 text-base leading-relaxed">
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
                      <Mail className="w-7 h-7 text-algoarnAqua" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-white text-lg">
                        Email Our Team
                      </div>
                      <div className="text-algoarnAqua text-base font-medium">
                        solutions@algoarn.com
                      </div>
                      <div className="text-white/50 text-sm mt-1">
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
                      <Phone className="w-7 h-7 text-algoarnAqua" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-white text-lg">
                        Call Our Experts
                      </div>
                      <div className="text-algoarnAqua text-base font-medium">
                        +1 (555) 123-ALGO
                      </div>
                      <div className="text-white/50 text-sm mt-1">
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
                      <MessageCircle className="w-7 h-7 text-algoarnAqua" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-white text-lg">
                        Live AI Assistant
                      </div>
                      <div className="text-algoarnAqua text-base font-medium">
                        Instant intelligent support
                      </div>
                      <div className="text-white/50 text-sm mt-1">
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
                <Shield className="w-8 h-8 text-algoarnAqua" />
                <h4 className="font-bold text-algoarnAqua text-xl">
                  Enterprise-Grade Security & Compliance
                </h4>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                  <CheckCircle2 className="w-5 h-5 text-algoarnAqua flex-shrink-0" />
                  <span>GDPR & FERPA Compliant</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                  <CheckCircle2 className="w-5 h-5 text-algoarnAqua flex-shrink-0" />
                  <span>SOC 2 Type II Certified</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                  <CheckCircle2 className="w-5 h-5 text-algoarnAqua flex-shrink-0" />
                  <span>End-to-End Encryption</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                  <CheckCircle2 className="w-5 h-5 text-algoarnAqua flex-shrink-0" />
                  <span>ISO 27001 Certified</span>
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
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Start Your AI Transformation
                </h2>
                <p className="text-white/60 text-lg">
                  Get a personalized consultation and demo tailored to your
                  institution
                </p>
              </div>
 
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-white/80">
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
                    <label className="text-sm font-semibold text-white/80">
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
                    <label className="text-sm font-semibold text-white/80">
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
                    <label className="text-sm font-semibold text-white/80">
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
                    <label className="text-sm font-semibold text-white/80">
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
                    <label className="text-sm font-semibold text-white/80">
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
                    <label className="text-sm font-semibold text-white/80">
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
                  <label className="text-sm font-semibold text-white/80">
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
              <Globe className="w-8 h-8 text-algoarnAqua" />
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                Global Reach, Local Expertise
              </h3>
            </div>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
              Serving educational institutions across 25+ countries with
              localized support and region-specific AI solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-white/60">
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
 