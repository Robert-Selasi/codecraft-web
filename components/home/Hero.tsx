'use client'

import { motion, Variants, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Terminal, Activity, Code2, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Hero() {
  // 1. Mouse Parallax Physics
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 50, stiffness: 400 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  // Different depths for 3D floating effect
  const depth1X = useTransform(springX, [-1, 1], [-30, 30])
  const depth1Y = useTransform(springY, [-1, 1], [-30, 30])
  
  const depth2X = useTransform(springX, [-1, 1], [50, -50])
  const depth2Y = useTransform(springY, [-1, 1], [50, -50])
  
  const depth3X = useTransform(springX, [-1, 1], [-70, 70])
  const depth3Y = useTransform(springY, [-1, 1], [-70, 70])

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    mouseX.set((clientX / innerWidth) * 2 - 1)
    mouseY.set((clientY / innerHeight) * 2 - 1)
  }

  // 2. Cinematic Entrance Animations
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(12px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    },
  }

  // Hydration fix
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => setIsMounted(true), [])
  if (!isMounted) return <div className="min-h-screen bg-[#020617]" />

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-[#020617]"
    >
      {/* --- BACKGROUND ENGINEERING --- */}
      {/* Ambient Mouse-Tracking Light */}
      <motion.div 
        style={{ x: depth1X, y: depth1Y }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/20 rounded-full blur-[120px] pointer-events-none" 
      />
      
      {/* Perspective Grid Floor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none [perspective:1000px]">
        <motion.div 
          initial={{ opacity: 0, rotateX: 60, translateY: '50%', translateZ: -200 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-[-20%] left-[-50%] right-[-50%] h-[150vh] bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        />
      </div>

      {/* --- FLOATING ABSTRACT UI COMPONENTS (Desktop Only) --- */}
      {/* 1. Top Right: Mini Chart Component */}
      <motion.div 
        style={{ x: depth2X, y: depth2Y }}
        className="absolute top-[20%] right-[15%] w-64 p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md hidden lg:block shadow-2xl"
      >
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
          <div className="flex items-center gap-2">
            <Activity size={14} className="text-emerald-400" />
            <span className="text-xs font-medium text-gray-400">Conversion Rate</span>
          </div>
          <span className="text-xs font-bold text-emerald-400">+124%</span>
        </div>
        <div className="flex items-end gap-1.5 h-16">
          {[40, 25, 60, 45, 80, 55, 100].map((h, i) => (
            <motion.div 
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 1, delay: 1 + (i * 0.1) }}
              className={`flex-1 rounded-t-sm ${i === 6 ? 'bg-emerald-400' : 'bg-white/10'}`}
            />
          ))}
        </div>
      </motion.div>

      {/* 2. Bottom Left: Mini Code Block */}
      <motion.div 
        style={{ x: depth3X, y: depth3Y }}
        className="absolute bottom-[25%] left-[10%] w-72 p-5 rounded-2xl bg-[#0a0f1c]/80 border border-white/10 backdrop-blur-xl hidden lg:block shadow-2xl"
      >
        <div className="flex gap-1.5 mb-4">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <div className="space-y-2 font-mono text-[10px]">
          <div className="flex gap-2"><span className="text-pink-400">import</span><span className="text-white">{'{ Growth }'}</span><span className="text-pink-400">from</span><span className="text-brand-400">'@codecraft/engine'</span></div>
          <div className="flex gap-2 mt-2"><span className="text-blue-400">const</span><span className="text-white">platform = </span><span className="text-yellow-200">buildPlatform</span><span className="text-gray-400">()</span></div>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 2.5 }}
            className="flex gap-2"
          >
            <span className="text-white">platform.</span><span className="text-yellow-200">optimize</span><span className="text-gray-400">({'{'}</span>
            <span className="text-brand-400">speed</span><span className="text-white">: </span><span className="text-orange-400">true</span>
            <span className="text-gray-400">{'}'})</span>
          </motion.div>
        </div>
      </motion.div>

      {/* 3. Top Left: Floating Node */}
      <motion.div 
        style={{ x: depth1X, y: depth1Y }}
        className="absolute top-[30%] left-[20%] p-3 rounded-xl bg-gradient-to-br from-brand-600/20 to-transparent border border-brand-400/20 backdrop-blur-md hidden lg:flex items-center gap-3 shadow-[0_0_30px_rgba(37,99,235,0.2)]"
      >
        <div className="w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center">
          <Code2 size={14} className="text-brand-400" />
        </div>
        <div>
          <div className="h-1.5 w-16 bg-white/20 rounded-full mb-1.5" />
          <div className="h-1 w-10 bg-white/10 rounded-full" />
        </div>
      </motion.div>

      {/* --- MAIN CONTENT --- */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Animated Glowing Badge */}
          <motion.div variants={itemVariants} className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-400 to-blue-600 blur-[10px] opacity-40 group-hover:opacity-60 transition-opacity" />
              <span className="relative px-5 py-2 rounded-full border border-white/10 bg-[#020617]/80 backdrop-blur-md text-sm font-medium text-gray-200 flex items-center gap-2">
                <Sparkles size={14} className="text-brand-400" /> Premium Digital Engineering
              </span>
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.05]"
          >
            We Build Websites That <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-blue-200 to-white">
              Grow Businesses.
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Stop losing customers to generic templates. We engineer premium, custom websites optimized for <strong className="text-white font-medium">conversions, speed, and absolute trust</strong>.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Primary CTA with Sweep Hover */}
            <Link 
              href="/contact"
              className="group relative px-8 py-4 bg-white text-[#020617] font-bold rounded-full overflow-hidden transition-transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative z-10 flex items-center gap-2">
                Book Free Consultation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            {/* Secondary CTA - Now routed correctly */}
            <Link 
              href="/#portfolio"
              className="group px-8 py-4 bg-white/[0.03] border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-colors backdrop-blur-md flex items-center gap-2"
            >
              View Our Work
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}