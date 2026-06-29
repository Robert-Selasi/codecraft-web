'use client'

import Link from 'next/link'
import { Code2, ArrowRight } from 'lucide-react'

const MAIN_LINKS = [
  { name: 'Process', href: '/#process' },
  { name: 'Services', href: '/#services' },
  { name: 'Work', href: '/#portfolio' },
  { name: 'Company', href: '/#company' },
]

const LEGAL_LINKS = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#020408] border-t border-white/5 pt-20 pb-10 overflow-hidden">
      
      {/* Ambient Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/10 blur-[120px] rounded-t-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* ==========================================
              COLUMN 1: BRANDING & TAGLINE
              ========================================== */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col">
            {/* CSS-Coded Logo (Matches Navbar exactly) */}
            <Link href="/" className="flex items-center gap-3 group w-max mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white group-hover:scale-105 transition-transform shadow-lg shrink-0">
                <Code2 size={22} />
              </div>
              <div className="flex items-center mt-0.5">
                <span className="text-blue-500 font-black italic text-2xl tracking-tighter">
                  Code
                </span>
                <div className="bg-blue-600 ml-1 px-2.5 py-0.5 rounded-md -skew-x-12 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:bg-blue-500 transition-colors">
                  <span className="text-white font-black italic text-xl tracking-tighter skew-x-12 pr-0.5">
                    Craft
                  </span>
                </div>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm mb-8">
              We engineer competitive digital monopolies. High-performance platforms, automated workflows, and uncompromising architectural standards.
            </p>
          </div>

          {/* ==========================================
              COLUMN 2: NAVIGATION LINKS
              ========================================== */}
          <div className="md:col-span-3 lg:col-span-2 lg:col-start-7">
            <h4 className="text-white font-bold mb-6 tracking-tight">Platform</h4>
            <ul className="flex flex-col gap-4">
              {MAIN_LINKS.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors font-medium flex items-center gap-2 group w-max"
                  >
                    <span className="w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-3"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ==========================================
              COLUMN 3: PROJECT INITIATION CTA
              ========================================== */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-white font-bold mb-6 tracking-tight">Initiate Deployment</h4>
            <div className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl">
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                Ready to upgrade your digital infrastructure? Speak directly with our lead architects.
              </p>
              <Link 
                href="/contact" 
                className="group flex items-center justify-between w-full px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)]"
              >
                <span className="text-xs font-bold uppercase tracking-wider">Start Project</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

        {/* ==========================================
            BOTTOM STRIP: LEGAL & COPYRIGHT
            ========================================== */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600 font-medium">
            &copy; {new Date().getFullYear()} CodeCraft Engineering. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {LEGAL_LINKS.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-xs text-gray-600 hover:text-gray-300 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}