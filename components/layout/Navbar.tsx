'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2 } from 'lucide-react'

// Map the display name to the exact section ID
const NAV_ITEMS = [
  { name: 'Process', id: 'process' },
  { name: 'Services', id: 'services' },
  { name: 'Work', id: 'portfolio' }, 
  { name: 'Company', id: 'company' },
]

export default function Navbar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-[#030509]/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* =============================================================
              CSS-CODED LOGO (Recreated from your image)
              ============================================================= */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            {/* 1. The Lucide React Icon */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white group-hover:scale-105 transition-transform shadow-lg shrink-0">
              <Code2 size={22} />
            </div>

            {/* 2. The Custom Typography Logo */}
            <div className="flex items-center mt-0.5">
              {/* "Code" - Blue and Italic */}
              <span className="text-blue-500 font-black italic text-2xl tracking-tighter">
                Code
              </span>
              
              {/* "Craft" - White text inside a skewed blue parallelogram */}
              <div className="bg-blue-600 ml-1 px-2.5 py-0.5 rounded-md -skew-x-12 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:bg-blue-500 transition-colors">
                <span className="text-white font-black italic text-xl tracking-tighter skew-x-12 pr-0.5">
                  Craft
                </span>
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.name} 
                href={`/#${item.id}`}
                className="text-sm font-bold text-gray-400 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link 
              href="/contact"
              className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Start Project
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button 
            className="md:hidden text-white relative z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#030509]/95 backdrop-blur-2xl flex flex-col items-center justify-center pt-20"
          >
            <nav className="flex flex-col items-center gap-8 text-center">
              {NAV_ITEMS.map((item) => (
                <Link 
                  key={item.name} 
                  href={`/#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-extrabold text-gray-300 hover:text-white transition-colors tracking-tight"
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-8">
                <Link 
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded-full hover:bg-blue-500 transition-all active:scale-95 shadow-[0_0_30px_rgba(59,130,246,0.3)] inline-block"
                >
                  Start Project
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}