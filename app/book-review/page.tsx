'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Cpu, Terminal, ArrowRight, CheckCircle2, ShieldCheck, Mail, Building, LayoutGrid } from 'lucide-react'
import Link from 'next/link'

export default function BookReview() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Extract form data
    const formData = new FormData(e.currentTarget)

    try {
      // ==============================================================================
      // FORMSUBMIT AJAX ROUTING LOGIC (selertson@gmail.com)
      // ==============================================================================
      const response = await fetch("https://formsubmit.co/ajax/selertson@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json' // Ensures FormSubmit returns JSON, not an HTML page
        }
      })

      if (response.ok) {
        setIsSuccess(true)
      } else {
        console.error("Submission failed. Server responded with an error.")
      }
    } catch (error) {
      console.error("Network or submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#020408] flex items-center justify-center pt-24 pb-12 px-6 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        {/* ==========================================
            LEFT COLUMN: THE PITCH
            ========================================== */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-widest mb-6 w-max">
            <Cpu size={14} /> Intake Protocol
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-6">
            Audit your digital <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              infrastructure.
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg font-light leading-relaxed mb-10 max-w-md">
            Schedule a high-level technical review with our lead architects. We will analyze your current bottlenecks and map out a custom deployment strategy to scale your operations.
          </p>

          <div className="space-y-6">
            {[
              { title: "Zero Obligation", desc: "A pure value-driven analysis of your current stack." },
              { title: "Performance Mapping", desc: "Identifying friction points costing you conversions." },
              { title: "Architecture Blueprint", desc: "A tailored path to enterprise-grade stability." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <ShieldCheck size={12} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ==========================================
            RIGHT COLUMN: THE INTAKE FORM
            ========================================== */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-[#060913]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
            
            {/* Top Glass Glare */}
            <div className="absolute top-0 left-0 w-[150%] h-32 bg-gradient-to-b from-white/[0.03] to-transparent -rotate-12 transform origin-top-left pointer-events-none"></div>

            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="h-full min-h-[400px] flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                  <CheckCircle2 size={32} className="text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Transmission Secured</h3>
                <p className="text-gray-400 text-sm mb-8">Our architects have received your briefing. We will contact you shortly to confirm the deployment schedule.</p>
                <Link href="/" className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-bold rounded-xl transition-colors">
                  Return to Headquarters
                </Link>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                
                {/* FORMSUBMIT CONFIGURATION FIELDS */}
                {/* Email Subject Line */}
                <input type="hidden" name="_subject" value="New Architecture Review Request" />
                {/* Disable Captcha to maintain seamless UI */}
                <input type="hidden" name="_captcha" value="false" />
                {/* Set email format to clean table */}
                <input type="hidden" name="_template" value="table" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest pl-1">Lead Contact</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-blue-400 transition-colors">
                        <Terminal size={14} />
                      </div>
                      <input 
                        type="text" name="name" required
                        className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest pl-1">Work Email</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-blue-400 transition-colors">
                        <Mail size={14} />
                      </div>
                      <input 
                        type="email" name="email" required
                        className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Company Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest pl-1">Organization</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-blue-400 transition-colors">
                        <Building size={14} />
                      </div>
                      <input 
                        type="text" name="company" required
                        className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>

                  {/* Current Stack Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest pl-1">Current Tech Stack</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-blue-400 transition-colors">
                        <LayoutGrid size={14} />
                      </div>
                      <input 
                        type="text" name="stack"
                        className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        placeholder="e.g. Next.js, WordPress, Custom"
                      />
                    </div>
                  </div>
                </div>

                {/* Textarea Input */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest pl-1">Primary Bottleneck</label>
                  <textarea 
                    name="message" required rows={4}
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                    placeholder="Describe the operational or performance issues limiting your scale..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="mt-2 w-full group relative flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-sm transition-all shadow-[0_0_30px_rgba(37,99,235,0.2)] hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:bg-blue-500 active:scale-95 disabled:opacity-50 disabled:pointer-events-none overflow-hidden"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  
                  {isSubmitting ? (
                    <span className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Transmitting...</span>
                  ) : (
                    <span className="relative z-10 flex items-center gap-2">
                      Initialize Audit <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </button>
                
                <p className="text-center text-[10px] text-gray-600 font-mono mt-2">
                  SECURE END-TO-END ENCRYPTION ACTIVE
                </p>

              </form>
            )}
          </div>
        </motion.div>

      </div>
    </div>
  )
}