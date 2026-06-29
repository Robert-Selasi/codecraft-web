'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { 
  Shield, ArrowRight, Layers, 
  CheckCircle2, Gauge, Timer, Search, Handshake, Target, Rocket, Sparkles, Fingerprint
} from 'lucide-react'
import Link from 'next/link'

// ============================================================================
// DATA STRUCTURES
// ============================================================================

const METHODOLOGY_LAYERS = [
  {
    id: "foundation",
    label: "01 / The Foundation",
    title: "Built to Stand Out",
    desc: "We completely ignore cheap drag-and-drop website builders. Every digital platform we create is designed from scratch to reflect your exact brand identity and business goals.",
    points: [
      "Lightning-fast page loading to keep visitors engaged",
      "Custom designs that make competitors look outdated",
      "Zero reliance on fragile, cookie-cutter templates"
    ],
    accent: "from-blue-500/20 to-indigo-500/10",
    textAccent: "text-blue-400",
    glow: "shadow-[0_0_40px_rgba(59,130,246,0.3)]"
  },
  {
    id: "automation",
    label: "02 / The Automation",
    title: "Built to Save Time",
    desc: "Your staff shouldn't be wasting hours on repetitive manual data entry. We connect your favorite tools—like your store, your accounting software, and your CRM—so they talk to each other seamlessly.",
    points: [
      "Eliminate human error from daily manual tasks",
      "Automatically sync your inventory and customer data",
      "Free up your team to focus on actual growth"
    ],
    accent: "from-purple-500/20 to-pink-500/10",
    textAccent: "text-purple-400",
    glow: "shadow-[0_0_40px_rgba(168,85,247,0.3)]"
  },
  {
    id: "reliability",
    label: "03 / The Reliability",
    title: "Built to Protect & Grow",
    desc: "A broken website costs you money and reputation. We build our systems on rock-solid foundations that can handle massive spikes in visitors without ever slowing down or crashing.",
    points: [
      "Bank-level security to protect your customer data",
      "Systems that stay online and fast, 24/7",
      "Real-time monitoring so we catch issues before you do"
    ],
    accent: "from-emerald-500/20 to-teal-500/10",
    textAccent: "text-emerald-400",
    glow: "shadow-[0_0_40px_rgba(16,185,129,0.3)]"
  }
]

const PERFORMANCE_METRICS = [
  { label: "Client Retention", value: "100%", sub: "Long-term strategic partnerships", icon: <Handshake size={14} className="text-blue-400" /> },
  { label: "Target Uptime", value: "99.99%", sub: "Your business is always open", icon: <Shield size={14} className="text-emerald-400" /> },
  { label: "Manual Hours Saved", value: "40h+", sub: "Per client, every single week", icon: <Timer size={14} className="text-purple-400" /> },
]

const GUIDING_PRINCIPLES = [
  {
    icon: <Search size={24} className="text-blue-400" />,
    title: "Radical Transparency",
    desc: "No black-box development. We build in the open, keeping you informed at every milestone. You will always know exactly what we are building and why."
  },
  {
    icon: <Target size={24} className="text-purple-400" />,
    title: "Business-First Design",
    desc: "We don't just care about pretty visuals; we care about your bottom line. Every feature we build is designed to increase revenue, capture leads, or reduce costs."
  },
  {
    icon: <Rocket size={24} className="text-emerald-400" />,
    title: "Uncompromising Quality",
    desc: "We believe in doing it right the first time. By refusing to take shortcuts, we deliver digital platforms that scale smoothly for the next decade."
  }
]

// ============================================================================
// CINEMATIC MULTI-DIRECTIONAL BACKGROUND COMPONENT
// ============================================================================
const DeepTechBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#020408]">
    {/* Base Ambient Gradients */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0a1224_0%,transparent_70%)] opacity-60"></div>
    
    {/* Drifting Orbs */}
    <motion.div 
      animate={{ x: [0, 100, 0], y: [0, 50, 0] }} 
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }} 
      className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px]" 
    />
    <motion.div 
      animate={{ x: [0, -100, 0], y: [0, -50, 0] }} 
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }} 
      className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px]" 
    />

    {/* Animated "Data River" SVG Lines - Criss-Crossing Network */}
    <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 1440 800" preserveAspectRatio="none">
      <defs>
        {/* Blue gradient for left-to-right paths */}
        <linearGradient id="glow-line-blue" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
        {/* Purple gradient for right-to-left paths */}
        <linearGradient id="glow-line-purple" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      
      {/* Wave 1: Flows Left -> Right */}
      <motion.path 
        d="M -200,800 C 300,700 600,200 1640,100" 
        fill="none" stroke="url(#glow-line-blue)" strokeWidth="1.5"
        initial={{ strokeDasharray: "2000", strokeDashoffset: 2000 }}
        animate={{ strokeDashoffset: -2000 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      {/* Wave 2: Flows Left -> Right (Lower) */}
      <motion.path 
        d="M -200,500 C 400,500 500,300 1640,200" 
        fill="none" stroke="url(#glow-line-blue)" strokeWidth="1" opacity="0.5"
        initial={{ strokeDasharray: "2000", strokeDashoffset: 2000 }}
        animate={{ strokeDashoffset: -2000 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear", delay: 2 }}
      />
      
      {/* Wave 3: Flows Right -> Left (Criss-Cross) */}
      <motion.path 
        d="M 1640,800 C 1000,750 700,300 -200,100" 
        fill="none" stroke="url(#glow-line-purple)" strokeWidth="1.5" opacity="0.7"
        initial={{ strokeDasharray: "2000", strokeDashoffset: 2000 }}
        animate={{ strokeDashoffset: -2000 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 1 }}
      />
      {/* Wave 4: Flows Right -> Left (Lower Criss-Cross) */}
      <motion.path 
        d="M 1640,400 C 1200,450 900,700 -200,800" 
        fill="none" stroke="url(#glow-line-purple)" strokeWidth="1" opacity="0.5"
        initial={{ strokeDasharray: "2000", strokeDashoffset: 2000 }}
        animate={{ strokeDashoffset: -2000 }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear", delay: 4 }}
      />
    </svg>

    {/* Micro-Dot Overlay Mask */}
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]"></div>
  </div>
)

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function Company() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [activeLayer, setActiveLayer] = useState('foundation')

  const layerData = METHODOLOGY_LAYERS.find(l => l.id === activeLayer)!

  return (
    <section id="company" className="py-24 md:py-32 relative overflow-hidden" ref={containerRef}>
      
      <DeepTechBackground />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* ==================================================================
            TOP SECTION: THE STORY & INTERACTIVE MATRIX
            ================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start mb-32">
          
          {/* LEFT: THE STORY & OUTCOMES */}
          <motion.div 
            className="lg:col-span-6 flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md w-max shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              <Sparkles size={14} className="text-blue-400" /> The CodeCraft Story
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              We build digital headquarters for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">industry leaders.</span>
            </h2>
            
            <div className="space-y-6 text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-xl mb-12">
              <p>
                Most modern businesses are held back by frustrating, slow website templates that break easily and look exactly like their competitors. We created CodeCraft to offer a different path.
              </p>
              <p>
                We are a collective of digital craftsmen and business strategists who believe your online presence should be your greatest competitive advantage. We don't just build websites; we construct high-performance digital platforms that automate your daily operations, dominate search results, and effortlessly turn visitors into paying clients.
              </p>
            </div>

            {/* Business Performance Ledger Widget */}
            <div className="bg-[#060913]/80 border border-white/5 p-6 rounded-2xl backdrop-blur-xl shadow-2xl relative overflow-hidden max-w-xl group">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent group-hover:via-indigo-400 transition-colors duration-500"></div>
              <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Gauge size={12} className="text-blue-400"/> The CodeCraft Impact
              </div>
              
              <div className="flex flex-col gap-4">
                {PERFORMANCE_METRICS.map((metric, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-white/[0.03] last:border-none">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center shadow-inner">
                        {metric.icon}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-200">{metric.label}</div>
                        <div className="text-[10px] text-gray-500 font-light">{metric.sub}</div>
                      </div>
                    </div>
                    <div className="text-lg font-bold text-white font-mono tracking-tight">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: INTERACTIVE BUSINESS METHODOLOGY */}
          <motion.div 
            className="lg:col-span-6 w-full lg:sticky lg:top-28"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className={`bg-[#050812]/90 border border-white/5 backdrop-blur-2xl rounded-3xl p-6 md:p-10 transition-all duration-700 relative overflow-hidden flex flex-col min-h-[500px] ${layerData.glow}`}>
              
              {/* Dynamic Glow corresponding to active tab */}
              <div className={`absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br ${layerData.accent} blur-[100px] rounded-full pointer-events-none transition-all duration-700`} />
              
              {/* Matrix Control Layer Controls */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 border-b border-white/5 pb-6 mb-8 relative z-10">
                <div className="flex items-center gap-2">
                  <Shield size={16} className={layerData.textAccent} />
                  <span className="text-[11px] font-mono font-bold uppercase text-gray-400 tracking-widest">How We Work</span>
                </div>
                <div className="flex flex-wrap gap-2 bg-black/50 p-1.5 rounded-xl border border-white/5">
                  {METHODOLOGY_LAYERS.map((layer) => (
                    <button
                      key={layer.id}
                      onClick={() => setActiveLayer(layer.id)}
                      className={`px-4 py-2 text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all ${
                        activeLayer === layer.id 
                          ? 'bg-white/10 text-white border border-white/10 shadow-lg' 
                          : 'text-gray-500 hover:text-gray-300 border border-transparent hover:bg-white/5'
                      }`}
                    >
                      {layer.label.split('/')[1].trim()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Animated Content Panel */}
              <div className="flex-1 flex flex-col justify-between relative z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeLayer}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col h-full"
                  >
                    <span className={`text-[10px] font-mono font-bold tracking-widest uppercase mb-2 ${layerData.textAccent}`}>
                      {layerData.label}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                      {layerData.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed mb-8">
                      {layerData.desc}
                    </p>

                    <div className="flex flex-col gap-3 bg-white/[0.02] border border-white/5 p-5 rounded-2xl shadow-inner mt-auto">
                      {layerData.points.map((point, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className={`mt-0.5 shrink-0 ${layerData.textAccent}`} />
                          <span className="text-sm text-gray-300 font-medium">{point}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </motion.div>
        </div>

        {/* ==================================================================
            MIDDLE SECTION: OUR GUIDING PRINCIPLES (Hover Glow Cards)
            ================================================================== */}
        <motion.div 
          className="mb-32"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">The Standards We Live By</h3>
            <p className="text-gray-400 mt-4 text-base max-w-2xl mx-auto">We don't cut corners. These are the non-negotiable principles we bring to every single project we take on.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GUIDING_PRINCIPLES.map((principle, index) => (
              <div key={index} className="relative group rounded-3xl overflow-hidden bg-[#060913] border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-2">
                {/* Internal Hover Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-transparent group-hover:from-blue-600/10 transition-colors duration-700 pointer-events-none" />
                
                <div className="p-8 md:p-10 relative z-10">
                  <div className="w-14 h-14 bg-black/50 border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-blue-500/20">
                    {principle.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">{principle.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {principle.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ==================================================================
            BOTTOM SECTION: THE CODECRAFT PROMISE BANNER
            ================================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="relative bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-500/20 rounded-3xl p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl"
        >
          {/* Decorative Flare */}
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,#3b82f6_0%,transparent_50%)] opacity-20 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Fingerprint size={16} className="text-blue-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-300">The CodeCraft Guarantee</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
              You own your platform. Period.
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Many agencies lock you into proprietary software or hold your website hostage with monthly fees. Not us. When the project is complete, you own 100% of the code, the data, and the digital assets. We succeed when you succeed.
            </p>
          </div>

          <Link href="/contact" className="shrink-0 relative z-10 group flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition-all active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Start Your Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}