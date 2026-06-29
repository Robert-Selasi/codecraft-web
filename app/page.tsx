import Hero from '@/components/home/Hero'
import Trust from '@/components/home/Trust'
import Problem from '@/components/home/Problem'
import Process from '@/components/home/Process'
import Portfolio from '@/components/home/Portfolio'
import Company from '@/components/home/Company'
import Services from '@/components/home/Services'
import Cta from '@/components/home/Cta'

export default function Home() {
  return (
    <main className="bg-[#020617] min-h-screen selection:bg-brand-500/30 selection:text-brand-200">
      <Hero />
      <Trust />
      <Problem />
      <Process />
      <Portfolio />
      <Company />
      <Services />
      <Cta />
    </main>
  )
}