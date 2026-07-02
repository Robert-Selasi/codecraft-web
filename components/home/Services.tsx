'use client'

import { useRef } from 'react'
import { motion, useInView, Variants } from 'framer-motion'
import { 
  Code2, GitMerge, Zap, Database, 
  ArrowRight, Terminal, Braces, Layers
} from 'lucide-react'

// ============================================================================
// 1. ANIMATED BACKGROUND VISUALS FOR HOVER STATES
// ============================================================================

// NEW: Levitating 3D Isometric Layers for "Custom Web Platforms"
const PlatformVisual = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10 group-hover:opacity-40 transition-opacity duration-700" viewBox="0 0 400 300">
    <g transform="translate(0, -20)">
      {/* Top Layer (UI/Frontend) */}
      <motion.g animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
        <path d="M 200 80 L 300 120 L 200 160 L 100 120 Z" fill="none" stroke="#3b82f6" strokeWidth="2" />
        <path d="M 200 80 L 300 120 L 200 160 L 100 120 Z" fill="#3b82f6" opacity="0.1" />
      </motion.g>
      {/* Middle Layer (Logic/API) */}
      <motion.g animate={{ y: [0, 6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
        <path d="M 200 130 L 300 170 L 200 210 L 100 170 Z" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M 200 130 L 300 170 L 200 210 L 100 170 Z" fill="#3b82f6" opacity="0.05" />
      </motion.g>
      {/* Bottom Layer (Database/Infrastructure) */}
      <motion.g animate={{ y: [0, -4, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
        <path d="M 200 180 L 300 220 L 200 260 L 100 220 Z" fill="none" stroke="#3b82f6" strokeWidth="2" />
        <path d="M 200 180 L 300 220 L 200 260 L 100 220 Z" fill="#3b82f6" opacity="0.1" />
      </motion.g>
      {/* Connecting Vertical Sync Lines */}
      <motion.path d="M 100 120 L 100 220 M 300 120 L 300 220 M 200 160 L 200 260 M 200 80 L 200 180" stroke="#3b82f6" strokeWidth="1" strokeDasharray="2 4" opacity="0.3" />
    </g>
  </svg>
)

// Automation (Unchanged)
const AutomationVisual = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10 group-hover:opacity-30 transition-opacity duration-700" viewBox="0 0 400 300">
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#a855f7" strokeWidth="0.5" strokeOpacity="0.5"/>
    </pattern>
    <rect width="100%" height="100%" fill="url(#grid)" />
    <motion.rect x="-50" y="80" width="40" height="40" fill="#a855f7" animate={{ x: 450 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
    <motion.rect x="-50" y="160" width="40" height="40" fill="#a855f7" animate={{ x: 450 }} transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2 }} />
  </svg>
)

// Commerce (FIXED: Converted cy to y transform)
const CommerceVisual = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10 group-hover:opacity-30 transition-opacity duration-700" viewBox="0 0 400 300">
    <motion.path d="M0 200 L 100 150 L 200 180 L 300 80 L 400 100" stroke="#10b981" strokeWidth="2" fill="none" />
    <motion.path d="M0 200 L 100 150 L 200 180 L 300 80 L 400 100 L 400 300 L 0 300 Z" fill="url(#grad)" opacity="0.2" />
    <defs>
      <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="transparent" />
      </linearGradient>
    </defs>
    <motion.circle 
      cx="0" cy="0" r="6" fill="#10b981" 
      initial={{ x: 300, y: 80 }} 
      animate={{ y: [80, 70, 80] }} 
      transition={{ duration: 2, repeat: Infinity }} 
    />
  </svg>
)

// System Integration (FIXED: Converted all cx/cy to x/y transforms)
const IntegrationVisual = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10 group-hover:opacity-40 transition-opacity duration-700" viewBox="0 0 400 300">
    <g transform="translate(0, 10)">
      {/* Sync Lines from Outer Apps to Center Hub */}
      <path d="M 80 80 L 200 150 M 320 80 L 200 150 M 80 220 L 200 150 M 320 220 L 200 150" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4 6" fill="none" opacity="0.4" />
      
      {/* Flowing Data Packets (Dots moving towards the center using CSS transforms) */}
      <motion.circle cx="0" cy="0" r="3" fill="#f97316" initial={{ x: 80, y: 80, opacity: 0 }} animate={{ x: [80, 200], y: [80, 150], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
      <motion.circle cx="0" cy="0" r="3" fill="#f97316" initial={{ x: 320, y: 80, opacity: 0 }} animate={{ x: [320, 200], y: [80, 150], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }} />
      <motion.circle cx="0" cy="0" r="3" fill="#f97316" initial={{ x: 80, y: 220, opacity: 0 }} animate={{ x: [80, 200], y: [220, 150], opacity: [0, 1, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 1 }} />
      <motion.circle cx="0" cy="0" r="3" fill="#f97316" initial={{ x: 320, y: 220, opacity: 0 }} animate={{ x: [320, 200], y: [220, 150], opacity: [0, 1, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "linear", delay: 0.2 }} />

      {/* Outer App Nodes */}
      <circle cx="80" cy="80" r="12" fill="#080c17" stroke="#f97316" strokeWidth="2" />
      <circle cx="320" cy="80" r="12" fill="#080c17" stroke="#f97316" strokeWidth="2" />
      <circle cx="80" cy="220" r="12" fill="#080c17" stroke="#f97316" strokeWidth="2" />
      <circle cx="320" cy="220" r="12" fill="#080c17" stroke="#f97316" strokeWidth="2" />
      
      {/* Central Unified Hub (Fixed Transform Origin Bug) */}
      <motion.circle cx="0" cy="0" r="22" fill="#f97316" opacity="0.15" initial={{ x: 200, y: 150 }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
      <circle cx="200" cy="150" r="22" fill="#080c17" stroke="#f97316" strokeWidth="2.5" />
      <circle cx="200" cy="150" r="8" fill="#f97316" />
    </g>
  </svg>
)

// ============================================================================
// 2. BUSINESS-FOCUSED COPYWRITING
// ============================================================================

const SERVICES = [
  {
    id: "01",
    title: "Custom Web Platforms",
    desc: "We don't just build websites; we build powerful digital headquarters for your brand. They are lightning-fast, highly secure, and ready to handle massive traffic without ever slowing down.",
    tech: ["Lightning Fast", "Bank-Level Security", "Built to Scale"],
    icon: <Layers size={24} className="text-blue-400" />,
    visual: <PlatformVisual />,
    colSpan: "md:col-span-8", 
    glow: "from-blue-500/20 to-transparent",
    border: "group-hover:border-blue-500/50"
  },
  {
    id: "02",
    title: "Business Automation",
    desc: "Stop wasting hours on repetitive tasks. We build smart software that manages your inventory, updates your accounting, and runs your daily operations on complete autopilot.",
    tech: ["Smart Workflows", "Auto-Sync", "Saves Hours Weekly"],
    icon: <Terminal size={24} className="text-purple-400" />,
    visual: <AutomationVisual />,
    colSpan: "md:col-span-4", 
    glow: "from-purple-500/20 to-transparent",
    border: "group-hover:border-purple-500/50"
  },
  {
    id: "03",
    title: "High-Converting E-Commerce",
    desc: "A slow online store costs you sales. We create beautiful, high-speed shopping experiences that make it incredibly easy for your customers to browse, click, and buy from anywhere.",
    tech: ["Easy Checkout", "Secure Payments", "More Sales"],
    icon: <Zap size={24} className="text-emerald-400" />,
    visual: <CommerceVisual />,
    colSpan: "md:col-span-5", 
    glow: "from-emerald-500/20 to-transparent",
    border: "group-hover:border-emerald-500/50"
  },
  {
    id: "04",
    title: "System Integration",
    desc: "Are you using too many apps that don't talk to each other? We connect your favorite tools so that customer data, sales, and emails flow seamlessly across your entire business.",
    tech: ["App Linking", "Data Sync", "Unified Dashboards"],
    icon: <GitMerge size={24} className="text-orange-400" />,
    visual: <IntegrationVisual />,
    colSpan: "md:col-span-7", 
    glow: "from-orange-500/20 to-transparent",
    border: "group-hover:border-orange-500/50"
  }
]

// ============================================================================
// 3. MAIN COMPONENT
// ============================================================================

export default function Services() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, y: 0, 
      transition: { type: "spring", stiffness: 80, damping: 20 }
    }
  }

  return (
    <section id="services" className="py-24 md:py-32 relative bg-[#020617] overflow-hidden" ref={containerRef}>
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-bold uppercase tracking-widest mb-6">
              <Braces size={14} /> Core Services
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              We turn complex business problems into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">simple, beautiful software.</span>
            </h3>
            <p className="text-lg text-gray-400 font-light leading-relaxed max-w-2xl">
              From automating your daily tasks to building online stores that sell while you sleep, we build the digital tools that help you focus on growing your business.
            </p>
          </motion.div>
        </div>

        {/* Asymmetrical Bento Box Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {SERVICES.map((service) => (
            <motion.div 
              key={service.id}
              variants={cardVariants}
              className={`group relative rounded-3xl bg-[#080c17] border border-white/5 overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 ${service.colSpan} ${service.border}`}
            >
              {/* Dynamic Animated SVG Background */}
              <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen">
                {service.visual}
              </div>

              {/* Hover Glow Gradient */}
              <div className={`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b ${service.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0`} />

              <div className="p-8 md:p-10 relative z-10 flex flex-col h-full">
                
                {/* Card Header */}
                <div className="flex justify-between items-start mb-16">
                  <div className="w-12 h-12 rounded-xl bg-[#020617] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    {service.icon}
                  </div>
                  <div className="text-4xl font-black text-white/5 font-mono group-hover:text-white/10 transition-colors duration-500">
                    {service.id}
                  </div>
                </div>

                {/* Content */}
                <div className="mt-auto">
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 pr-4 group-hover:text-gray-300 transition-colors">
                    {service.desc}
                  </p>

                  {/* Benefit Tags Footer */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {service.tech.map((t, i) => (
                        <span key={i} className="text-[10px] font-mono font-bold tracking-wider text-gray-500 uppercase bg-black/50 px-2 py-1 rounded border border-white/5 group-hover:border-white/10 group-hover:text-gray-300 transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors cursor-pointer shrink-0">
                      <ArrowRight size={14} className="text-gray-500 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}