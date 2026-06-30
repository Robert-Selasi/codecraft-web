import Link from 'next/link'
import { ArrowLeft, Scale } from 'lucide-react'

export const metadata = {
  title: 'Terms of Service | CodeCraft',
  description: 'Legal terms and conditions for engaging with CodeCraft.',
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#020408] py-24 md:py-32 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-12">
          <ArrowLeft size={16} /> Return to Headquarters
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
            <Scale className="text-indigo-400" size={20} />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Terms of Service</h1>
        </div>

        <div className="prose prose-invert prose-indigo max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-indigo-400 prose-p:text-gray-400 prose-li:text-gray-400">
          <p><strong>Last Updated:</strong> June 30, 2026</p>

          <p>
            By accessing the CodeCraft website or engaging our engineering services, you agree to be bound by these Terms of Service. Please read them carefully, as they constitute a legally binding agreement between you (the Client) and CodeCraft.
          </p>

          <hr className="border-white/10 my-8" />

          <h3>1. Scope of Services</h3>
          <p>
            CodeCraft provides premium digital engineering, web architecture, and performance optimization services. The specific scope, deliverables, timelines, and costs for any project will be outlined in a separate, formal Statement of Work (SOW) or Project Agreement signed by both parties prior to the commencement of development.
          </p>

          <h3>2. Intellectual Property & Code Ownership</h3>
          <p>
            We believe in true infrastructure ownership. Upon delivery of the final product and receipt of full payment, <strong>100% ownership of the custom code, design assets, and intellectual property transfers to the Client</strong>. CodeCraft retains the right to display the completed project within our portfolio and marketing materials unless a strict Non-Disclosure Agreement (NDA) is executed prior to the project start.
          </p>

          <h3>3. Client Responsibilities</h3>
          <p>To ensure flawless deployment, the Client agrees to:</p>
          <ul>
            <li>Provide necessary access to existing servers, domain registrars, or legacy codebases required for the project.</li>
            <li>Deliver brand assets, copy, and resources in a timely manner.</li>
            <li>Review deliverables and provide consolidated feedback within the timeframes specified in the Project Agreement.</li>
          </ul>

          <h3>4. Payment Terms</h3>
          <p>
            Standard payment structures require an initial deposit to secure engineering resources and initiate the project, with subsequent milestones or final payments due upon delivery. Failure to meet payment schedules may result in a pause in development or withholding of the final source code and deployment.
          </p>

          <h3>5. Limitation of Liability</h3>
          <p>
            CodeCraft engineers robust, highly secure platforms; however, we do not guarantee that the software will be entirely immune to third-party disruptions, zero-day vulnerabilities, or external server downtimes. In no event shall CodeCraft be liable for any indirect, consequential, or loss-of-profit damages arising out of the use or inability to use the developed platforms. Our maximum liability shall not exceed the total amount paid by the Client for the specific project in question.
          </p>

          <h3>6. Governing Law</h3>
          <p>
            These Terms of Service and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of Accra, Ghana.
          </p>

          <h3>7. Modifications to Terms</h3>
          <p>
            CodeCraft reserves the right to update or modify these Terms at any time without prior notice. Your continued use of our website or services following any changes indicates your acceptance of the new Terms.
          </p>

          <h3>8. Contact Information</h3>
          <p>
            Legal inquiries regarding these terms should be directed to:
            <br />
            <strong>Email:</strong> selertson@gmail.com
          </p>
        </div>
      </div>
    </main>
  )
}