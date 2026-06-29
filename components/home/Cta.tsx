'use client'

import { useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Terminal, ShieldCheck, Zap, Fingerprint, Calendar, Cpu } from 'lucide-react'
import Link from 'next/link'

export default function CTA() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const cardRef = useRef<HTMLDivElement>(null)

  // ============================================================================
  // INTERACTIVE SPOTLIGHT PHYSICS
  // ============================================================================
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  // Smooth the mouse movement for the glow effect
  const springX = useSpring(mouseX, { damping: 50, stiffness: 400 })
  const springY = useSpring(mouseY, { damping: 50, stiffness: 400 })

  return (
    <section 
      ref={containerRef}
      className="py-24 md:py-32 relative bg-[#020408] flex items-center justify-center overflow-hidden border-t border-white/5" 
    >
      
      {/* ==================================================================
          CINEMATIC BACKGROUND EFFECTS & TERMINAL FEED
          ================================================================== */}
      {/* Deep Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Grid Blueprint */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Background Terminal Logs (Faint & Scrolling) - FIXED HYDRATION */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03] flex justify-between px-10">
        <motion.div 
          animate={{ y: [0, -1000] }} 
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="font-mono text-xs text-blue-400 whitespace-pre leading-loose"
        >
          {Array(30).fill(0).map((_, i) => (
            <div key={`left-${i}`}>[SYS_{1000 + i}] INITIALIZING DEPLOYMENT PIPELINE... OK<br/>[SYS_{1000 + i}] RESOLVING EDGE CACHE... SECURE</div>
          ))}
        </motion.div>
        <motion.div 
          animate={{ y: [-1000, 0] }} 
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="font-mono text-xs text-indigo-400 whitespace-pre leading-loose text-right hidden lg:block"
        >
          {Array(30).fill(0).map((_, i) => (
            <div key={`right-${i}`}>ESTABLISHING WSS CONNECTION... {142 + (i * 18)}MS<br/>SYNCING CLUSTER STATE... COMPLETE</div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* ==================================================================
            THE COMMAND CENTER CARD (With Spotlight)
            ================================================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.8, type: "spring", damping: 25, stiffness: 200 }}
          className="max-w-5xl mx-auto relative group"
        >
          {/* Outer Ambient Glow */}
          <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-blue-500/20 rounded-[2rem] opacity-50 blur-xl group-hover:opacity-100 transition-opacity duration-700" />
          
          {/* Interactive Card Surface */}
          <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className="relative bg-[#060913]/90 backdrop-blur-3xl border border-white/5 rounded-[2rem] p-8 md:p-16 lg:p-20 overflow-hidden shadow-2xl flex flex-col items-center text-center"
          >
            {/* The Dynamic Spotlight */}
            <motion.div 
              className="absolute pointer-events-none inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"
              style={{
                background: useTransform(
                  [springX, springY],
                  ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(59,130,246,0.15), transparent 40%)`
                )
              }}
            />

            {/* Top Security/Terminal Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 border border-white/5 text-gray-400 text-[10px] md:text-xs font-mono uppercase tracking-widest mb-10 shadow-inner relative z-10">
              <Cpu size={14} className="text-blue-500" />
              Deployment Protocol Ready
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-2 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            </div>

            {/* Refined Typography */}
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-6 relative z-10">
              Leave templates behind. <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">
                Commission true infrastructure.
              </span>
            </h2>

            <p className="text-sm md:text-lg text-gray-400 font-light max-w-2xl mx-auto leading-relaxed mb-12 relative z-10">
              Your business has outgrown standard web builders. Partner with our engineering team to construct a high-performance digital platform that automates your operations and scales flawlessly.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto relative z-10">
              
              {/* Primary Action */}
              <Link 
                href="/contact"
                className="w-full sm:w-auto group relative flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-sm transition-all shadow-[0_0_30px_rgba(37,99,235,0.2)] hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:bg-blue-500 active:scale-95 overflow-hidden"
              >
                {/* Button Glare Effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                
                <Terminal size={16} className="opacity-80" />
                Start Your Project
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              {/* Secondary Action */}
              <Link 
                href="/book-review" // <--- Update this link
                className="w-full sm:w-auto group flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 text-white font-bold text-sm transition-all active:scale-95"
              >
                <Calendar size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                Book Architecture Review
              </Link>
              
            </div>

            {/* Bottom Trust Indicators */}
            <div className="mt-14 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-6 md:gap-16 w-full max-w-3xl relative z-10">
              <div className="flex items-center gap-2.5 text-[11px] md:text-xs font-mono text-gray-500 tracking-wide">
                <ShieldCheck size={16} className="text-emerald-500/70" /> 100% Code Ownership
              </div>
              <div className="flex items-center gap-2.5 text-[11px] md:text-xs font-mono text-gray-500 tracking-wide">
                <Zap size={16} className="text-blue-500/70" /> Edge-Network Speeds
              </div>
              <div className="flex items-center gap-2.5 text-[11px] md:text-xs font-mono text-gray-500 tracking-wide">
                <Fingerprint size={16} className="text-indigo-500/70" /> Custom Architecture
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}