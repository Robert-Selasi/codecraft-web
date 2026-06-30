import Hero from '@/components/home/Hero'
import Trust from '@/components/home/Trust'
import Problem from '@/components/home/Problem'
import Services from '@/components/home/Services'  // <-- Moved up
import Process from '@/components/home/Process'
import Portfolio from '@/components/home/Portfolio' // <-- Moved down
import Company from '@/components/home/Company'
import Cta from '@/components/home/Cta'

export default function Home() {
  return (
    <main className="bg-[#020617] min-h-screen selection:bg-brand-500/30 selection:text-brand-200">
      <Hero />
      <Trust />
      <Problem />
      <Services /> 
      <Process />
      <Portfolio /> 
      <Company />
      <Cta />
    </main>
  )
}