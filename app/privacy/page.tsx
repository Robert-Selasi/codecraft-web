import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy | CodeCraft',
  description: 'How CodeCraft collects, uses, and protects your data.',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#020408] py-24 md:py-32 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-12">
          <ArrowLeft size={16} /> Return to Headquarters
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
            <Shield className="text-blue-400" size={20} />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Privacy Policy</h1>
        </div>

        <div className="prose prose-invert prose-blue max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-400 prose-p:text-gray-400 prose-li:text-gray-400">
          <p><strong>Last Updated:</strong> June 30, 2026</p>
          
          <p>
            At CodeCraft, we engineer high-performance digital infrastructure. Just as we prioritize security in the platforms we build, we are equally committed to protecting the privacy and data of our clients and website visitors. This Privacy Policy outlines how we collect, use, and safeguard your information.
          </p>

          <hr className="border-white/10 my-8" />

          <h3>1. Information We Collect</h3>
          <p>We may collect the following types of information when you interact with our website or engage our services:</p>
          <ul>
            <li><strong>Intake Data:</strong> Information you provide via our project intake and architecture review forms, including your name, corporate email address, company name, and technical project details.</li>
            <li><strong>Communication Data:</strong> Records of correspondence, including emails and project scope discussions.</li>
            <li><strong>Usage Data:</strong> Anonymous analytics regarding how you navigate our website (e.g., IP addresses, browser types, and interaction metrics) to help us optimize our digital presence.</li>
          </ul>

          <h3>2. How We Use Your Information</h3>
          <p>CodeCraft uses the collected data strictly for professional purposes:</p>
          <ul>
            <li>To evaluate your technical bottlenecks and provide accurate architecture reviews.</li>
            <li>To communicate regarding project timelines, deliverables, and service updates.</li>
            <li>To securely process payments and manage billing.</li>
            <li>To improve our website's performance and user experience.</li>
          </ul>

          <h3>3. Data Protection and Security</h3>
          <p>
            We deploy enterprise-grade security protocols to protect your personal and corporate data. Information submitted through our architecture review portals is transmitted via secure, encrypted channels. We do not store sensitive payment information directly on our servers; all transactions are routed through compliant third-party financial gateways.
          </p>

          <h3>4. Third-Party Data Sharing</h3>
          <p>
            <strong>We do not sell, rent, or trade your personal data.</strong> We may share necessary information only with trusted third-party service providers (such as hosting platforms, email routers like FormSubmit, or analytics providers) strictly to facilitate our business operations. These partners are bound by confidentiality agreements.
          </p>

          <h3>5. Your Rights</h3>
          <p>
            You have the right to request access to the personal data we hold about you, request corrections, or request deletion of your data from our active systems. To exercise these rights, please contact our lead engineering team.
          </p>

          <h3>6. Contact Protocol</h3>
          <p>
            If you have any questions regarding this Privacy Policy or our data handling practices, please initiate contact at:
            <br />
            <strong>Email:</strong> selertson@gmail.com
          </p>
        </div>
      </div>
    </main>
  )
}