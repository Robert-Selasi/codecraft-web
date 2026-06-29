'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Database, Globe, Cloud, Layout, Box, Activity, ShieldCheck } from 'lucide-react'

// --- 1. TIMING SCHEDULES ---
const TIMING = {
  erp:     { duration: 12, times: [0, 0.40, 0.45, 0.55, 0.60, 1] }, 
  crm:     { duration: 14, times: [0, 0.20, 0.25, 0.35, 0.40, 1] }, 
  ecom:    { duration: 11, times: [0, 0.65, 0.70, 0.80, 0.85, 1] }, 
  booking: { duration: 13, times: [0, 0.80, 0.85, 0.95, 1.00, 1] }, 
  
  nextjs:  { duration: 10, times: [0, 0.20, 0.25, 0.35, 0.40, 1] },
  webhook: { duration: 14, times: [0, 0.70, 0.75, 0.85, 0.90, 1] },
  api:     { duration: 15, times: [0, 0.50, 0.55, 0.65, 0.70, 1] },
  
  grid1:   { duration: 9,  times: [0, 0.20, 0.25, 0.35, 0.40, 1] },
  grid2:   { duration: 11, times: [0, 0.40, 0.45, 0.55, 0.60, 1] },
  grid3:   { duration: 10, times: [0, 0.60, 0.65, 0.75, 0.80, 1] },
  grid4:   { duration: 12, times: [0, 0.80, 0.85, 0.95, 1.00, 1] },
  
  cloudInner: { duration: 13, times: [0, 0.30, 0.35, 0.45, 0.50, 1] },

  auth:    { duration: 10, times: [0, 0.30, 0.35, 0.50, 0.55, 1] },
  cdn:     { duration: 12, times: [0, 0.60, 0.65, 0.80, 0.85, 1] },
  db:      { duration: 11, times: [0, 0.75, 0.80, 0.90, 0.95, 1] },
}

// --- 2. ENGINE: The Multi-Axis Animated Node ---
function AnimatedNode({ 
  x, y, width, height, children, className = '', 
  enterDelay = 0, loopSchedule = null, placeholderShape = "rounded-lg",
  flipAxis = "fade", reverse = false 
}: { 
  x: number, y: number, width: number, height: number, children: React.ReactNode, 
  className?: string, enterDelay?: number, loopSchedule?: { duration: number, times: number[] } | null,
  placeholderShape?: string, flipAxis?: 'x' | 'y' | 'fade', reverse?: boolean
}) {
  
  const getInitial = () => {
    if (flipAxis === 'x') return { opacity: 0, rotateX: reverse ? 90 : -90 }
    if (flipAxis === 'y') return { opacity: 0, rotateY: reverse ? 90 : -90 }
    return { opacity: 0, scale: 0.95 }
  }
  
  const getNodeAnimate = () => {
    if (!loopSchedule) return {}
    const nodeOpacity = [1, 1, 0, 0, 1, 1]
    
    if (flipAxis === 'x') return { rotateX: [0, 0, reverse ? 90 : -90, reverse ? 90 : -90, 0, 0], opacity: nodeOpacity }
    if (flipAxis === 'y') return { rotateY: [0, 0, reverse ? 90 : -90, reverse ? 90 : -90, 0, 0], opacity: nodeOpacity }
    
    return { opacity: nodeOpacity } 
  }

  return (
    <div style={{ left: x, top: y, width, height }} className="absolute [perspective:1000px]">
      <motion.div
        initial={getInitial()}
        whileInView={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, delay: enterDelay, type: "spring", bounce: 0.4 }}
        style={{ transformOrigin: 'center' }}
        className="w-full h-full relative z-0"
      >
        
        {/* PERMANENT DOTTED PLACEHOLDER (z-[-1]) */}
        {loopSchedule && (
          <div className={`absolute inset-[1px] border-2 border-dashed border-blue-400/50 bg-blue-900/20 ${placeholderShape} z-[-1]`} />
        )}

        {/* ACTIVE SOLID CONTENT (z-10) */}
        <motion.div
          animate={getNodeAnimate()}
          transition={loopSchedule ? { duration: loopSchedule.duration, times: loopSchedule.times, repeat: Infinity, ease: "easeInOut" } : {}}
          style={{ transformOrigin: 'center' }}
          className={`absolute inset-0 flex items-center justify-center z-10 border border-blue-400/30 ${className}`}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function Process() {
  const containerRef = useRef(null)

  return (
    <section id="process" className="py-24 md:py-32 relative z-10 bg-[#020617] overflow-hidden" ref={containerRef}>
      
      {/* GLOBAL SVG STYLES */}
      <style>{`
        .flow-line {
          stroke: rgba(59, 130, 246, 0.3);
          stroke-width: 1.5;
          fill: none;
          stroke-dasharray: 4 4;
        }
        .flow-animated {
          stroke: rgba(59, 130, 246, 1);
          stroke-width: 2.5;
          fill: none;
          stroke-linecap: round;
          stroke-dasharray: 12 50; 
          animation: data-flow 2.5s linear infinite;
          filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.8));
        }
        @keyframes data-flow {
          from { stroke-dashoffset: 62; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>

      {/* --- CINEMATIC BACKGROUND --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1200px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[image:radial-gradient(#3b82f6_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.08] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 mb-12 text-center max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          The CodeCraft <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Ecosystem.</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
          We don't just build pages. We engineer interconnected digital environments customized for scalable business operations.
        </p>
      </div>

      {/* --- DYNAMIC MOBILE SCALING CONTAINER --- */}
      <div className="w-full flex justify-center h-[260px] xs:h-[300px] sm:h-[400px] md:h-[600px] lg:h-[700px] xl:h-[800px] relative overflow-hidden md:overflow-visible">
        
        {/* Origin-Top Transform Engine ensures no horizontal scroll on mobile */}
        <div className="relative w-[1000px] h-[600px] shrink-0 transform-gpu origin-top scale-[0.4] xs:scale-[0.45] sm:scale-[0.6] md:scale-[0.9] lg:scale-[1.1] xl:scale-[1.25] transition-transform duration-500">
          
          {/* --- LAYER 1: SVG ROUTING LINES --- */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600">
            {/* STATIC DOTTED BACKGROUND TRACKS 
              Notice how the lines at x=390 and x=640 now terminate exactly at y=148 
              (the bottom edge of the Application Layer dock) 
              and the center line (x=500, y=240) going straight up has been removed.
            */}
            <path className="flow-line" d="M 440 260 L 400 260 Q 390 260 390 250 L 390 210" />
            <path className="flow-line" d="M 390 170 L 390 148" />
            
            <path className="flow-line" d="M 560 260 L 630 260 Q 640 260 640 250 L 640 210" />
            <path className="flow-line" d="M 640 170 L 640 148" />
            
            <path className="flow-line" d="M 440 300 L 380 300" />
            <path className="flow-line" d="M 220 300 L 160 300" />
            <path className="flow-line" d="M 560 300 L 620 300" />
            <path className="flow-line" d="M 740 300 L 820 300" />
            <path className="flow-line" d="M 500 360 L 500 440" />

            {/* STATIC BOTTOM TRACKS */}
            <path className="flow-line" d="M 500 480 L 500 490 Q 500 500 490 500 L 440 500 Q 430 500 430 510 L 430 530" />
            <path className="flow-line" d="M 500 480 L 500 530" />
            <path className="flow-line" d="M 500 480 L 500 490 Q 500 500 510 500 L 560 500 Q 570 500 570 510 L 570 530" />
            
            {/* GLOWING DATA PACKETS */}
            <motion.path
              className="flow-animated"
              d="M 500 480 L 500 490 Q 500 500 490 500 L 440 500 Q 430 500 430 510 L 430 530"
              animate={{ opacity: [1, 1, 0, 0, 1, 1] }}
              transition={{ duration: TIMING.auth.duration, times: TIMING.auth.times, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              className="flow-animated"
              d="M 500 480 L 500 530"
              animate={{ opacity: [1, 1, 0, 0, 1, 1] }}
              transition={{ duration: TIMING.cdn.duration, times: TIMING.cdn.times, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              className="flow-animated"
              d="M 500 480 L 500 490 Q 500 500 510 500 L 560 500 Q 570 500 570 510 L 570 530"
              animate={{ opacity: [1, 1, 0, 0, 1, 1] }}
              transition={{ duration: TIMING.db.duration, times: TIMING.db.times, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>

          {/* --- LAYER 2: HTML UI NODES --- */}
          
          <AnimatedNode x={440} y={240} width={120} height={120} enterDelay={0.2} flipAxis="fade" className="bg-gradient-to-br from-blue-500 to-[#1e1b4b] rounded-2xl shadow-[0_0_50px_rgba(59,130,246,0.4)] flex-col gap-2">
            <Globe size={36} className="text-white" />
            <span className="text-white font-bold tracking-wide text-lg">CodeCraft</span>
          </AnimatedNode>

          {/* THE APPLICATION LAYER BACKGROUND DOCK */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute left-[210px] top-[68px] w-[520px] h-[80px] bg-[#0a0f1c]/80 border border-blue-500/20 rounded-xl backdrop-blur-sm shadow-[0_0_30px_rgba(59,130,246,0.1)] pointer-events-none"
            style={{ zIndex: -2 }}
          >
            {/* The Badge */}
            <div className="absolute -top-3 left-6 bg-[#020617] px-3 py-0.5 text-[9px] font-mono text-blue-400 font-bold tracking-widest uppercase border border-blue-500/30 rounded-full flex items-center gap-1.5 shadow-lg">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" /> Application Layer
            </div>
          </motion.div>

          {/* Top Systems Bar */}
          <AnimatedNode x={230} y={90} width={100} height={36} enterDelay={0.5} flipAxis="fade" loopSchedule={TIMING.erp} className="bg-blue-600 rounded-lg text-white text-xs font-semibold shadow-lg">
            ERP Systems
          </AnimatedNode>
          <AnimatedNode x={350} y={90} width={100} height={36} enterDelay={0.6} flipAxis="fade" loopSchedule={TIMING.crm} className="bg-blue-600 rounded-lg text-white text-xs font-semibold shadow-lg">
            CRM
          </AnimatedNode>
          <AnimatedNode x={470} y={90} width={100} height={36} enterDelay={0.7} flipAxis="fade" loopSchedule={TIMING.ecom} className="bg-blue-600 rounded-lg text-white text-xs font-semibold shadow-lg">
            E-Commerce
          </AnimatedNode>
          <AnimatedNode x={590} y={90} width={120} height={36} enterDelay={0.8} flipAxis="fade" loopSchedule={TIMING.booking} className="bg-blue-600 rounded-lg text-white text-xs font-semibold shadow-lg">
            Booking System
          </AnimatedNode>

          {/* Mid Nodes */}
          <AnimatedNode x={350} y={170} width={80} height={40} enterDelay={0.4} flipAxis="fade" loopSchedule={TIMING.nextjs} className="bg-blue-600 rounded-lg shadow-lg text-white font-semibold text-xs">
            Next.js
          </AnimatedNode>
          <AnimatedNode x={570} y={170} width={140} height={40} enterDelay={0.8} flipAxis="fade" loopSchedule={TIMING.webhook} className="bg-blue-600 rounded-lg shadow-lg text-white font-semibold text-xs">
            Webhooks
          </AnimatedNode>
          
          {/* API Integrations */}
          <AnimatedNode x={220} y={280} width={160} height={40} enterDelay={0.9} flipAxis="y" reverse={true} loopSchedule={TIMING.api} className="bg-blue-600 rounded-lg shadow-lg text-white font-semibold text-xs flex items-center justify-center gap-2 hover:bg-blue-500 transition-colors cursor-pointer">
            API Integrations <ExternalLink size={14} />
          </AnimatedNode>
          
          <AnimatedNode x={620} y={280} width={120} height={40} enterDelay={0.5} flipAxis="fade" className="bg-blue-600 rounded-lg shadow-lg text-white font-semibold text-xs">
            Data Pipeline
          </AnimatedNode>

          {/* Far-Left Grid Container */}
          <AnimatedNode x={60} y={250} width={100} height={100} enterDelay={0.3} flipAxis="fade" placeholderShape="rounded-xl" className="bg-[#0f172a] rounded-xl p-2.5 grid grid-cols-2 gap-2 shadow-2xl">
            {[
              { icon: <Box size={16} />, color: 'bg-black', schedule: TIMING.grid1 },
              { icon: <Activity size={16} />, color: 'bg-cyan-500', schedule: TIMING.grid2 },
              { icon: <Layout size={16} />, color: 'bg-orange-500', schedule: TIMING.grid3 },
              { icon: <ShieldCheck size={16} />, color: 'bg-emerald-500', schedule: TIMING.grid4 }
            ].map((app, i) => (
              <div key={i} className="relative w-full h-full [perspective:1000px] z-0">
                <div className="absolute inset-[1px] border border-dashed border-blue-400/60 rounded bg-blue-900/30 z-[-1]" />
                <motion.div
                  animate={{ rotateY: [0, 0, -90, -90, 0, 0], opacity: [1, 1, 0, 0, 1, 1] }}
                  transition={{ duration: app.schedule.duration, times: app.schedule.times, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformOrigin: 'center' }}
                  className={`absolute inset-0 ${app.color} rounded-md flex items-center justify-center text-white z-10 border border-white/10`}
                >
                  {app.icon}
                </motion.div>
              </div>
            ))}
          </AnimatedNode>

          {/* Far-Right Cloud Logo Container */}
          <AnimatedNode x={820} y={276} width={48} height={48} enterDelay={1.0} flipAxis="fade" placeholderShape="rounded-xl" className="bg-[#0f172a] rounded-xl shadow-2xl hover:scale-110 transition-transform cursor-pointer">
            <div className="relative w-full h-full [perspective:1000px] z-0">
              <div className="absolute inset-[1px] border border-dashed border-blue-400/60 rounded-xl bg-blue-900/30 z-[-1]" />
              <motion.div
                animate={{ rotateY: [0, 0, -90, -90, 0, 0], opacity: [1, 1, 0, 0, 1, 1] }}
                transition={{ duration: TIMING.cloudInner.duration, times: TIMING.cloudInner.times, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: 'center' }}
                className="absolute inset-0 flex items-center justify-center z-10 bg-white rounded-xl border border-white/10"
              >
                <Cloud size={24} className="text-blue-600 fill-blue-600" />
              </motion.div>
            </div>
          </AnimatedNode>

          {/* Edge Orchestration (Permanent Core Node) */}
          <AnimatedNode x={430} y={440} width={140} height={40} enterDelay={0.6} flipAxis="fade" className="bg-blue-600 rounded-lg shadow-lg text-white font-semibold text-xs">
            Edge Orchestration
          </AnimatedNode>

          {/* BOTTOM CIRCUIT NODES */}
          <AnimatedNode x={400} y={530} width={60} height={40} enterDelay={0.7} flipAxis="fade" loopSchedule={TIMING.auth} className="bg-[#0f172a] rounded-lg text-gray-300 font-semibold text-xs flex flex-col items-center justify-center shadow-lg">
            Auth
          </AnimatedNode>
          <AnimatedNode x={470} y={530} width={60} height={40} enterDelay={0.8} flipAxis="fade" loopSchedule={TIMING.cdn} className="bg-[#0f172a] rounded-lg text-gray-300 font-semibold text-xs flex flex-col items-center justify-center shadow-lg">
            CDN
          </AnimatedNode>
          <AnimatedNode x={540} y={530} width={60} height={40} enterDelay={0.9} flipAxis="fade" loopSchedule={TIMING.db} className="bg-[#0f172a] rounded-lg text-gray-300 font-semibold text-xs flex flex-col items-center justify-center shadow-lg">
            <Database size={16} className="mb-0.5" />
          </AnimatedNode>

        </div>
      </div>
    </section>
  )
}