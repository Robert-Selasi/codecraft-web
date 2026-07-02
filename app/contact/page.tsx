'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowLeft, ArrowRight, Layers, Terminal, Zap, GitMerge, 
  CheckCircle2, Send, Building2, User, Mail, MessageSquare, X
} from 'lucide-react'
import Link from 'next/link'

// ============================================================================
// DATA STRUCTURES FOR INTAKE OPTIONS
// ============================================================================

const INTAKE_INTENTS = [
  { id: 'Custom Platform', title: 'Custom Web Platform', desc: 'A high-performance digital headquarters.', icon: Layers },
  { id: 'Automation', title: 'Business Automation', desc: 'Replacing operational friction with code.', icon: Terminal },
  { id: 'E-Commerce', title: 'High-Converting E-Commerce', desc: 'Seamless shopping and checkout flows.', icon: Zap },
  { id: 'Integration', title: 'System Integration', desc: 'Connecting fragmented software tools.', icon: GitMerge },
]

const BUDGET_RANGES = [
  { id: 'Under $10k', label: 'Under $10k' },
  { id: '$10k - $50k', label: '$10k - $50k' },
  { id: '$50k+', label: '$50k+' },
]

const TIMELINES = [
  { id: 'ASAP', label: 'ASAP' },
  { id: '1-3 Months', label: '1 - 3 Months' },
  { id: 'Flexible', label: 'Flexible / Exploring' },
]

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function ContactIntakeFlow() {
  const [step, setStep] = useState(1)
  const [direction, setDirection] = useState(1) 
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Form State
  const [formData, setFormData] = useState({
    intent: '',
    budget: '',
    timeline: '',
    name: '',
    email: '',
    company: '',
    details: ''
  })

  // ============================================================================
  // VALIDATION LOGIC (NEW)
  // ============================================================================
  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.intent !== ''
      case 2:
        return formData.budget !== '' && formData.timeline !== ''
      case 3:
        // Ensures Name, Email, and Company are filled and not just empty spaces
        return formData.name.trim() !== '' && 
               formData.email.trim() !== '' && 
               formData.email.includes('@') && // Basic email check
               formData.company.trim() !== ''
      default:
        return true
    }
  }

  // Navigation Handlers
  const nextStep = () => {
    if (step < 4 && isStepValid()) {
      setDirection(1)
      setStep(prev => prev + 1)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setDirection(-1)
      setStep(prev => prev - 1)
    }
  }

  const updateForm = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }))
    // Auto-advance on single-click selections for step 1
    if (key === 'intent') {
      setTimeout(() => {
        setDirection(1)
        setStep(2)
      }, 350) 
    }
  }

  // --- LIVE EMAIL INTEGRATION ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Final check before submission
    if (formData.details.trim() === '') return
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/selertson@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New CodeCraft Project Lead: ${formData.company || formData.name}`,
          Name: formData.name,
          Email: formData.email,
          Company: formData.company,
          Service_Type: formData.intent,
          Estimated_Budget: formData.budget,
          Target_Timeline: formData.timeline,
          Project_Details: formData.details
        })
      });

      if (response.ok) {
        setIsSuccess(true)
      } else {
        console.error("Submission failed")
        setIsSuccess(true) 
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Animation Variants
  const slideVariants = {
    hidden: (direction: number) => ({ x: direction > 0 ? 50 : -50, opacity: 0 }),
    visible: { x: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 300, damping: 30 } },
    exit: (direction: number) => ({ x: direction > 0 ? -50 : 50, opacity: 0, transition: { duration: 0.2 } })
  }

  const progress = (step / 4) * 100

  return (
    <div className="min-h-screen bg-[#030509] text-white flex flex-col relative overflow-hidden font-sans pt-20 pb-12">
      
      {/* --- PREMIUM CINEMATIC BACKGROUND --- */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none" />
      
      {/* --- FLOATING CANCEL BUTTON --- */}
      <Link 
        href="/" 
        className="fixed top-6 right-6 md:top-10 md:right-10 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-gray-400 hover:text-white transition-all backdrop-blur-md text-[10px] font-bold uppercase tracking-widest group shadow-2xl"
      >
        <X size={14} className="group-hover:rotate-90 transition-transform duration-500" /> Cancel
      </Link>

      {/* Main Intake Area */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 relative z-10 w-full mt-8 md:mt-0">
        <div className="w-full max-w-2xl mx-auto">
          
          {/* Progress Bar */}
          {!isSuccess && (
            <div className="mb-12">
              <div className="flex justify-between text-[10px] font-bold text-gray-500 mb-3 tracking-widest uppercase">
                <span>Step {step} of 4</span>
                <span className="text-blue-400">{Math.round(progress)}% Complete</span>
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                />
              </div>
            </div>
          )}

          {/* Dynamic Form Steps */}
          <div className="relative min-h-[420px] w-full">
            <AnimatePresence mode="wait" custom={direction}>
              
              {/* STEP 1: INTENT */}
              {step === 1 && !isSuccess && (
                <motion.div key="step1" custom={direction} variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="w-full">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">What brings you to CodeCraft?</h2>
                  <p className="text-gray-400 mb-8 md:text-lg">Select the primary focus of your project so we can prepare the right architecture.</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {INTAKE_INTENTS.map((intent) => {
                      const Icon = intent.icon
                      const isActive = formData.intent === intent.id
                      return (
                        <motion.button
                          key={intent.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => updateForm('intent', intent.id)}
                          className={`p-6 rounded-2xl border text-left transition-all duration-300 w-full ${
                            isActive 
                              ? 'bg-blue-600/10 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.15)]' 
                              : 'bg-[#0a0f1c]/80 backdrop-blur-sm border-white/5 hover:border-white/20'
                          }`}
                        >
                          <Icon size={24} className={`mb-4 ${isActive ? 'text-blue-400' : 'text-gray-500'}`} />
                          <h3 className={`font-bold mb-1 ${isActive ? 'text-white' : 'text-gray-200'}`}>{intent.title}</h3>
                          <p className="text-[11px] text-gray-500 leading-relaxed">{intent.desc}</p>
                        </motion.button>
                      )
                    })}
                  </div>
                </motion.div>
              )}

              {/* STEP 2: SCOPE & TIMELINE */}
              {step === 2 && !isSuccess && (
                <motion.div key="step2" custom={direction} variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="w-full">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Project Scope & Timing.</h2>
                  <p className="text-gray-400 mb-8 md:text-lg">This helps us allocate the right engineering resources for your build.</p>
                  
                  <div className="space-y-8">
                    {/* Budget Selection */}
                    <div>
                      <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Estimated Budget <span className="text-red-500">*</span></h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {BUDGET_RANGES.map((range) => (
                          <button
                            key={range.id}
                            onClick={() => updateForm('budget', range.id)}
                            className={`py-4 px-2 text-xs md:text-sm font-bold rounded-xl border transition-all w-full ${
                              formData.budget === range.id 
                                ? 'bg-blue-600/10 border-blue-500 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.15)]' 
                                : 'bg-[#0a0f1c]/80 backdrop-blur-sm border-white/5 text-gray-400 hover:border-white/20 hover:text-gray-200'
                            }`}
                          >
                            {range.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Timeline Selection */}
                    <div>
                      <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Target Launch <span className="text-red-500">*</span></h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {TIMELINES.map((time) => (
                          <button
                            key={time.id}
                            onClick={() => updateForm('timeline', time.id)}
                            className={`py-4 px-2 text-xs md:text-sm font-bold rounded-xl border transition-all w-full ${
                              formData.timeline === time.id 
                                ? 'bg-blue-600/10 border-blue-500 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.15)]' 
                                : 'bg-[#0a0f1c]/80 backdrop-blur-sm border-white/5 text-gray-400 hover:border-white/20 hover:text-gray-200'
                            }`}
                          >
                            {time.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: THE DETAILS */}
              {step === 3 && !isSuccess && (
                <motion.div key="step3" custom={direction} variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="w-full">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Let's get the details.</h2>
                  <p className="text-gray-400 mb-8 md:text-lg">Who are we speaking with, and what brand are we representing?</p>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative w-full">
                        <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10 pointer-events-none" />
                        <input type="text" placeholder="Your Name *" value={formData.name} onChange={(e) => updateForm('name', e.target.value)} className="w-full bg-[#0a0f1c]/80 backdrop-blur-sm border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all shadow-inner relative z-0" />
                      </div>
                      <div className="relative w-full">
                        <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10 pointer-events-none" />
                        <input type="email" placeholder="Email Address *" value={formData.email} onChange={(e) => updateForm('email', e.target.value)} className="w-full bg-[#0a0f1c]/80 backdrop-blur-sm border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all shadow-inner relative z-0" />
                      </div>
                    </div>
                    <div className="relative w-full">
                      <Building2 size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10 pointer-events-none" />
                      <input type="text" placeholder="Company Name *" value={formData.company} onChange={(e) => updateForm('company', e.target.value)} className="w-full bg-[#0a0f1c]/80 backdrop-blur-sm border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all shadow-inner relative z-0" />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: REVIEW & SUBMIT */}
              {step === 4 && !isSuccess && (
                <motion.div key="step4" custom={direction} variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="w-full flex flex-col">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Ready to initiate?</h2>
                  <p className="text-gray-400 mb-8 md:text-lg">Give us a brief overview of the project. Don't worry about being perfect; we'll hash out the architecture on our first call.</p>
                  
                  <div className="relative h-48 mb-6 w-full">
                    <MessageSquare size={16} className="absolute left-4 top-5 text-gray-400 z-10 pointer-events-none" />
                    <textarea 
                      placeholder="Tell us about the operational bottleneck or platform you want to build... *" 
                      value={formData.details} 
                      onChange={(e) => updateForm('details', e.target.value)}
                      className="w-full h-full bg-[#0a0f1c]/80 backdrop-blur-sm border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all resize-none shadow-inner relative z-0" 
                    />
                  </div>

                  <button 
                    onClick={handleSubmit}
                    disabled={isSubmitting || formData.details.trim() === ''}
                    className="w-full mt-4 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>Initialize Project <Send size={18} /></>
                    )}
                  </button>
                </motion.div>
              )}

              {/* SUCCESS STATE */}
              {isSuccess && (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full py-10 flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
                    <CheckCircle2 size={48} className="text-emerald-400" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Transmission Received.</h2>
                  <p className="text-gray-400 max-w-lg mx-auto mb-10 leading-relaxed md:text-lg">
                    Thank you, {formData.name || 'there'}. Our engineering team is reviewing your requirements. We will be in touch within 24 hours to schedule an architectural review.
                  </p>
                  <Link href="/" className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold text-sm transition-all flex items-center gap-2">
                    <ArrowLeft size={16} /> Return to Base
                  </Link>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Footer Navigation */}
          {!isSuccess && (
            <div className="mt-8 md:mt-12 flex justify-between items-center pt-6 border-t border-white/5 w-full">
              <button 
                onClick={prevStep}
                className={`flex items-center gap-2 text-sm font-bold transition-all ${step === 1 ? 'opacity-0 pointer-events-none' : 'text-gray-400 hover:text-white'}`}
              >
                <ArrowLeft size={16} /> Back
              </button>
              
              {step < 4 && (
                <button 
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className={`flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold transition-all shadow-lg ${
                    isStepValid()
                      ? 'bg-white text-black hover:bg-gray-200 active:scale-95'
                      : 'bg-white/10 text-gray-500 cursor-not-allowed border border-white/5'
                  }`}
                >
                  Continue <ArrowRight size={16} />
                </button>
              )}
            </div>
          )}

        </div>
      </main>
    </div>
  )
}