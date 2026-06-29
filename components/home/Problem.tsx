'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Clock, TrendingDown, Smartphone, SearchX, Palette } from 'lucide-react'

const problems = [
  {
    icon: <Clock size={24} />,
    title: "Slow Load Times",
    description: "53% of mobile users abandon sites that take over 3 seconds to load. Every second is lost revenue."
  },
  {
    icon: <TrendingDown size={24} />,
    title: "Poor Conversion Rates",
    description: "Traffic means nothing if visitors don't take action. Most sites are digital brochures, not sales engines."
  },
  {
    icon: <Smartphone size={24} />,
    title: "Not Mobile-First",
    description: "Over 60% of web traffic is mobile, yet most agency templates are still designed for desktop first."
  },
  {
    icon: <SearchX size={24} />,
    title: "Invisible to Search",
    description: "Beautiful designs are completely useless if your ideal customers cannot find you on Google."
  },
  {
    icon: <Palette size={24} />,
    title: "Outdated Branding",
    description: "A generic template signals a generic business. Your digital presence must reflect premium quality."
  },
  {
    icon: <AlertTriangle size={24} />,
    title: "Clunky User Experience",
    description: "Confusing navigation and friction-filled forms actively push your customers directly to competitors."
  }
]

export default function Problem() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section className="py-32 relative z-10 bg-[#0a0f1c] overflow-hidden border-t border-white/5">
      {/* Subtle Danger Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Sticky Left Column: The Narrative */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-[1.1]">
                Why Most Business Websites <span className="text-red-400">Fail.</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Most agencies sell you a pretty template. But aesthetics alone don't grow businesses. If your website isn't engineered for performance, it's silently draining your marketing budget.
              </p>
              <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-2xl">
                <p className="text-red-200 text-sm font-medium">
                  The CodeCraft Difference
                </p>
                <p className="text-white mt-2 font-semibold">
                  We don't build brochures. We engineer digital assets that actively generate ROI.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Scrolling Right Column: The Grid */}
          <div className="lg:w-2/3">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {problems.map((problem, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {problem.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-red-100 transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {problem.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}