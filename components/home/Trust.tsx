'use client'

import { motion } from 'framer-motion'
import { Activity, Gauge, Landmark, Radio, MonitorPlay, Shield, Zap, Server } from 'lucide-react'

// ============================================================================
// DATA STRUCTURES
// ============================================================================

// Unique brand identities using typography and Lucide icons, scaled for mobile
const CLIENTS = [
  { name: "APEX AUTO", icon: Gauge, style: "font-black italic tracking-tighter text-base md:text-xl" },
  { name: "Crystal Hospital", icon: Activity, style: "font-semibold tracking-wide text-sm md:text-lg" },
  { name: "EBANQ", icon: Landmark, style: "font-bold tracking-widest uppercase text-base md:text-xl" },
  { name: "ETELMO", icon: Radio, style: "font-extrabold tracking-tighter text-base md:text-xl" },
  { name: "MasterClass", icon: MonitorPlay, style: "font-bold tracking-tight text-base md:text-xl" },
]

// Duplicate the array multiple times to ensure a perfectly seamless infinite scroll
const INFINITE_CLIENTS = [...CLIENTS, ...CLIENTS, ...CLIENTS]

const METRICS = [
  { label: "Encrypted Data", value: "2.4 TB/s", icon: <Shield size={14} className="text-emerald-400" /> },
  { label: "Edge Uptime", value: "99.99%", icon: <Zap size={14} className="text-blue-400" /> },
  { label: "Active Requests", value: "1.2M+", icon: <Server size={14} className="text-purple-400" /> },
]

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function Trust() {
  return (
    <section className="py-10 md:py-16 relative bg-[#020408] border-y border-white/5 overflow-hidden">
      
      {/* Background Ambience - Scaled down for mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] md:w-[800px] h-[200px] md:h-[300px] bg-blue-900/10 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 mb-8 md:mb-12">
        <div className="flex flex-col xl:flex-row gap-6 md:gap-8 justify-between items-center">
          
          <div className="text-center xl:text-left">
            <h3 className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest mb-1.5 md:mb-2">
              Enterprise Infrastructure Secured
            </h3>
            <p className="text-gray-500 text-xs md:text-sm">
              Powering the operational backend for industry leaders.
            </p>
          </div>

          {/* Telemetry Metrics - Stacked pills on mobile, inline row on desktop */}
          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2 md:gap-4">
            {METRICS.map((metric, i) => (
              <div 
                key={i} 
                className="flex items-center justify-between sm:justify-start gap-4 bg-white/[0.02] border border-white/5 px-4 py-3 sm:py-2.5 rounded-xl backdrop-blur-md w-full sm:w-auto"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-md md:rounded-lg bg-black/50 border border-white/10 flex items-center justify-center shrink-0">
                    {metric.icon}
                  </div>
                  <span className="text-[10px] md:text-[9px] text-gray-400 md:text-gray-500 font-mono uppercase tracking-wider">
                    {metric.label}
                  </span>
                </div>
                <span className="text-sm font-bold text-gray-200">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Infinite Scrolling Logo Ticker */}
      <div className="relative w-full flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30, // Slightly faster for smaller mobile screens
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex gap-12 md:gap-24 items-center min-w-max px-6 md:px-8"
        >
          {INFINITE_CLIENTS.map((client, idx) => {
            const Icon = client.icon
            return (
              <div 
                key={idx} 
                className="flex items-center gap-2.5 md:gap-3 text-gray-500 hover:text-white transition-colors duration-300 group cursor-pointer"
              >
                <Icon className="w-5 h-5 md:w-7 md:h-7 opacity-50 group-hover:opacity-100 group-hover:text-blue-500 transition-all duration-300" />
                <span className={`${client.style}`}>
                  {client.name}
                </span>
              </div>
            )
          })}
        </motion.div>
      </div>

    </section>
  )
}