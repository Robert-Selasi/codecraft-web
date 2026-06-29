import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CodeCraft | Premium Digital Engineering',
  description: 'Stop losing customers to generic templates. We construct high-performance digital platforms that automate operations, secure search dominance, and convert at scale.',
  keywords: ['Web Engineering', 'Digital Infrastructure', 'Next.js Development', 'Enterprise Websites', 'High-Performance Web'],
  openGraph: {
    title: 'CodeCraft | Premium Digital Engineering',
    description: 'We engineer premium, custom websites optimized for conversions, speed, and absolute trust.',
    url: 'https://codecraft.com', // MUST UPDATE: Change to your actual live domain
    siteName: 'CodeCraft',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeCraft | Premium Digital Engineering',
    description: 'We engineer premium, custom websites optimized for conversions, speed, and absolute trust.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}