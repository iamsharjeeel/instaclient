/*
 * InstaClient Terms of Service Page
 * Design: Clean, readable legal document layout with sticky nav back to home
 */

import { Zap, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple top bar */}
      <header className="border-b border-[oklch(0.91_0.006_265)] bg-white sticky top-0 z-40">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg gradient-bg-primary flex items-center justify-center shadow-md">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="font-display font-extrabold text-xl text-[oklch(0.14_0.015_265)] tracking-tight" style={{ fontWeight: 800 }}>
                Insta<span className="text-[oklch(0.42_0.19_265)]">Client</span>
              </span>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-[oklch(0.42_0.19_265)] hover:text-[oklch(0.35_0.20_265)] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container py-16 max-w-3xl mx-auto">
        <div className="mb-10">
          <p className="text-sm text-[oklch(0.55_0.015_265)] mb-2">Last updated: January 1, 2026</p>
          <h1 className="font-display text-4xl font-extrabold text-[oklch(0.14_0.015_265)] mb-4" style={{ fontWeight: 800 }}>
            Terms of Service
          </h1>
          <p className="text-[oklch(0.45_0.015_265)] leading-relaxed text-lg">
            These Terms of Service ("Terms") govern your access to and use of the InstaClient platform and services provided by InstaClient, Inc. ("InstaClient," "we," "our," or "us"). By accessing or using our services, you agree to be bound by these Terms.
          </p>
        </div>

        <div className="space-y-8 text-[oklch(0.35_0.015_265)]">

          <section>
            <h2 className="font-display text-xl font-bold text-[oklch(0.14_0.015_265)] mb-3" style={{ fontWeight: 700 }}>1. Acceptance of Terms</h2>
            <p className="leading-relaxed text-sm">By creating an account, accessing, or using InstaClient, you confirm that you are at least 18 years old, have the authority to enter into these Terms on behalf of yourself or your organization, and agree to comply with all applicable laws and regulations. If you do not agree to these Terms, you may not use our services.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[oklch(0.14_0.015_265)] mb-3" style={{ fontWeight: 700 }}>2. Description of Services</h2>
            <p className="leading-relaxed text-sm mb-3">InstaClient provides an AI-powered speed-to-lead and missed call recovery platform that enables businesses to automatically respond to missed calls via SMS, qualify leads, and facilitate appointment booking. Services include:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed">
              <li>Automated AI SMS response to missed calls</li>
              <li>Lead qualification and conversation management</li>
              <li>Calendar and booking system integrations</li>
              <li>Revenue tracking and analytics dashboard</li>
              <li>Follow-up sequence automation</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[oklch(0.14_0.015_265)] mb-3" style={{ fontWeight: 700 }}>3. Account Registration and Security</h2>
            <p className="leading-relaxed text-sm mb-3">To use InstaClient, you must create an account. You agree to:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed">
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security and confidentiality of your login credentials</li>
              <li>Notify us immediately of any unauthorized access to your account</li>
              <li>Accept responsibility for all activities that occur under your account</li>
            </ul>
            <p className="text-sm leading-relaxed mt-3">You may not share your account credentials with others or allow multiple users to access the platform through a single account (unless explicitly permitted by your plan).</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[oklch(0.14_0.015_265)] mb-3" style={{ fontWeight: 700 }}>4. Subscription Plans and Billing</h2>
            <p className="leading-relaxed text-sm mb-3">InstaClient offers subscription-based plans billed monthly or annually. By subscribing, you authorize us to charge your payment method on a recurring basis.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed">
              <li><strong>Billing Cycle:</strong> Subscriptions renew automatically at the end of each billing period unless cancelled.</li>
              <li><strong>Price Changes:</strong> We will provide at least 30 days' notice before any price increases take effect.</li>
              <li><strong>Refunds:</strong> We do not provide refunds for partial billing periods. If you cancel, you retain access through the end of your current billing period.</li>
              <li><strong>Taxes:</strong> Prices do not include applicable taxes, which will be added to your invoice where required by law.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[oklch(0.14_0.015_265)] mb-3" style={{ fontWeight: 700 }}>5. Acceptable Use Policy</h2>
            <p className="leading-relaxed text-sm mb-3">You agree to use InstaClient only for lawful purposes and in accordance with these Terms. You must not:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed">
              <li>Send unsolicited commercial messages (spam) or contact individuals without proper consent</li>
              <li>Violate any applicable laws, including the Telephone Consumer Protection Act (TCPA) and CAN-SPAM Act</li>
              <li>Use the platform to harass, threaten, or deceive any person</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
              <li>Attempt to gain unauthorized access to any part of the platform or its related systems</li>
              <li>Reverse engineer, decompile, or attempt to extract the source code of the platform</li>
              <li>Use the platform for any purpose that violates healthcare privacy laws (HIPAA) without proper agreements in place</li>
              <li>Transmit any viruses, malware, or other harmful code</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[oklch(0.14_0.015_265)] mb-3" style={{ fontWeight: 700 }}>6. SMS and Telecommunications Compliance</h2>
            <p className="leading-relaxed text-sm mb-3">You are solely responsible for ensuring that your use of InstaClient's SMS features complies with all applicable laws, including but not limited to:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed">
              <li>Obtaining proper written consent from contacts before sending automated text messages</li>
              <li>Providing clear opt-out instructions in all messages</li>
              <li>Honoring opt-out requests promptly</li>
              <li>Complying with TCPA, CTIA guidelines, and carrier requirements</li>
              <li>Maintaining records of consent as required by law</li>
            </ul>
            <p className="text-sm leading-relaxed mt-3">InstaClient provides tools to help with compliance but does not guarantee compliance with all applicable laws. You are responsible for your own compliance.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[oklch(0.14_0.015_265)] mb-3" style={{ fontWeight: 700 }}>7. Intellectual Property</h2>
            <p className="leading-relaxed text-sm mb-3">InstaClient and its licensors own all intellectual property rights in the platform, including software, designs, logos, and content. These Terms do not grant you any rights to use our trademarks, logos, or brand features.</p>
            <p className="text-sm leading-relaxed">You retain ownership of all data and content you submit to the platform ("Your Content"). By using our services, you grant InstaClient a limited license to use Your Content solely to provide and improve the services.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[oklch(0.14_0.015_265)] mb-3" style={{ fontWeight: 700 }}>8. Confidentiality</h2>
            <p className="leading-relaxed text-sm">Each party agrees to keep confidential any non-public information disclosed by the other party that is designated as confidential or that reasonably should be understood to be confidential. This obligation does not apply to information that is publicly available, independently developed, or required to be disclosed by law.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[oklch(0.14_0.015_265)] mb-3" style={{ fontWeight: 700 }}>9. Disclaimers and Limitation of Liability</h2>
            <p className="leading-relaxed text-sm mb-3">THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. CLIENTFLOW DOES NOT WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES.</p>
            <p className="text-sm leading-relaxed">TO THE MAXIMUM EXTENT PERMITTED BY LAW, CLIENTFLOW'S TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM THESE TERMS OR YOUR USE OF THE PLATFORM SHALL NOT EXCEED THE AMOUNT YOU PAID TO CLIENTFLOW IN THE THREE MONTHS PRECEDING THE CLAIM. IN NO EVENT SHALL CLIENTFLOW BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[oklch(0.14_0.015_265)] mb-3" style={{ fontWeight: 700 }}>10. Indemnification</h2>
            <p className="leading-relaxed text-sm">You agree to indemnify, defend, and hold harmless InstaClient and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or in connection with your use of the platform, your violation of these Terms, or your violation of any applicable law or the rights of a third party.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[oklch(0.14_0.015_265)] mb-3" style={{ fontWeight: 700 }}>11. Termination</h2>
            <p className="leading-relaxed text-sm mb-3">Either party may terminate this agreement at any time. You may cancel your account at any time through your account settings. We may suspend or terminate your access immediately if:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed">
              <li>You breach these Terms and fail to cure the breach within 10 days of notice</li>
              <li>You engage in fraudulent or illegal activity</li>
              <li>Continued provision of services would expose InstaClient to legal liability</li>
            </ul>
            <p className="text-sm leading-relaxed mt-3">Upon termination, your right to use the platform ceases immediately. Sections 7, 9, 10, and 13 survive termination.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[oklch(0.14_0.015_265)] mb-3" style={{ fontWeight: 700 }}>12. Modifications to Terms</h2>
            <p className="leading-relaxed text-sm">We reserve the right to modify these Terms at any time. We will provide notice of material changes by email or through the platform at least 30 days before the changes take effect. Your continued use of the platform after the effective date of the revised Terms constitutes your acceptance of the changes.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[oklch(0.14_0.015_265)] mb-3" style={{ fontWeight: 700 }}>13. Governing Law and Dispute Resolution</h2>
            <p className="leading-relaxed text-sm mb-3">These Terms are governed by the laws of the State of Delaware, without regard to conflict of law principles. Any dispute arising from these Terms shall be resolved through binding arbitration administered by the American Arbitration Association under its Commercial Arbitration Rules, except that either party may seek injunctive or other equitable relief in any court of competent jurisdiction.</p>
            <p className="text-sm leading-relaxed">You waive any right to participate in a class action lawsuit or class-wide arbitration.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[oklch(0.14_0.015_265)] mb-3" style={{ fontWeight: 700 }}>14. Contact Information</h2>
            <p className="leading-relaxed text-sm">For questions about these Terms, please contact us:</p>
            <div className="mt-3 p-4 rounded-xl bg-[oklch(0.97_0.005_265)] border border-[oklch(0.91_0.006_265)] text-sm space-y-1">
              <p><strong>InstaClient, Inc.</strong></p>
              <p>Email: <span className="text-[oklch(0.42_0.19_265)]">legal@instaclient.io</span></p>
              <p>For general inquiries: <span className="text-[oklch(0.42_0.19_265)]">hello@instaclient.io</span></p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[oklch(0.91_0.006_265)] py-8 mt-8">
        <div className="container text-center">
          <p className="text-xs text-[oklch(0.65_0.015_265)]">© 2026 InstaClient, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
