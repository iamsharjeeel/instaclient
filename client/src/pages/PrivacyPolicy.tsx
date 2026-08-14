/*
 * InstaClient Privacy Policy Page
 * Design: Clean, readable legal document layout with sticky nav back to home
 */

import { Zap, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-[oklch(0.45_0.015_265)] leading-relaxed text-lg">
            InstaClient, Inc. ("InstaClient," "we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
          </p>
        </div>

        <div className="prose prose-slate max-w-none space-y-8 text-[oklch(0.35_0.015_265)]">

          <section>
            <h2 className="font-display text-xl font-bold text-[oklch(0.14_0.015_265)] mb-3" style={{ fontWeight: 700 }}>1. Information We Collect</h2>
            <p className="leading-relaxed mb-3">We collect information you provide directly to us, information we collect automatically when you use our services, and information from third parties.</p>
            <h3 className="font-display font-semibold text-[oklch(0.14_0.015_265)] mb-2">Information You Provide</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed">
              <li>Account registration information (name, email address, phone number, business name)</li>
              <li>Billing and payment information (processed securely by our payment processor)</li>
              <li>Business configuration data (services offered, hours, booking preferences)</li>
              <li>Communications you send us (support requests, feedback, demo requests)</li>
            </ul>
            <h3 className="font-display font-semibold text-[oklch(0.14_0.015_265)] mb-2 mt-4">Information Collected Automatically</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed">
              <li>Log data (IP address, browser type, pages visited, time spent)</li>
              <li>Device information (hardware model, operating system, unique device identifiers)</li>
              <li>Usage data (features used, interactions with the platform)</li>
              <li>Cookies and similar tracking technologies (see Section 6)</li>
            </ul>
            <h3 className="font-display font-semibold text-[oklch(0.14_0.015_265)] mb-2 mt-4">Lead and Customer Data</h3>
            <p className="text-sm leading-relaxed">When our platform processes missed calls and SMS conversations on your behalf, we process contact information (phone numbers, names) and conversation content belonging to your leads and customers. This data is processed as a service provider on your behalf and subject to your instructions.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[oklch(0.14_0.015_265)] mb-3" style={{ fontWeight: 700 }}>2. How We Use Your Information</h2>
            <p className="leading-relaxed mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed">
              <li>Provide, operate, and improve the InstaClient platform and services</li>
              <li>Process transactions and send related information (confirmations, invoices)</li>
              <li>Send technical notices, updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Monitor and analyze usage patterns to improve user experience</li>
              <li>Detect, investigate, and prevent fraudulent transactions and abuse</li>
              <li>Comply with legal obligations and enforce our terms</li>
              <li>Send marketing communications (you may opt out at any time)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[oklch(0.14_0.015_265)] mb-3" style={{ fontWeight: 700 }}>3. Information Sharing and Disclosure</h2>
            <p className="leading-relaxed mb-3">We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed">
              <li><strong>Service Providers:</strong> We share information with vendors and service providers who perform services on our behalf (payment processing, cloud hosting, SMS delivery, analytics).</li>
              <li><strong>Business Transfers:</strong> If InstaClient is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
              <li><strong>Legal Requirements:</strong> We may disclose information if required by law, subpoena, or other legal process, or if we believe disclosure is necessary to protect rights, property, or safety.</li>
              <li><strong>With Your Consent:</strong> We may share information with third parties when you give us explicit consent to do so.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[oklch(0.14_0.015_265)] mb-3" style={{ fontWeight: 700 }}>4. Data Retention</h2>
            <p className="leading-relaxed text-sm">We retain your account information for as long as your account is active or as needed to provide services. Lead and conversation data is retained for 12 months by default, configurable in your account settings. Upon account cancellation, your data is retained for 30 days and then permanently deleted, unless we are required to retain it for legal purposes.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[oklch(0.14_0.015_265)] mb-3" style={{ fontWeight: 700 }}>5. Data Security</h2>
            <p className="leading-relaxed text-sm">We implement industry-standard security measures to protect your information, including encryption in transit (TLS 1.2+) and at rest (AES-256), access controls, and regular security audits. However, no method of transmission over the Internet or electronic storage is 100% secure. We encourage you to use strong passwords and to notify us immediately if you suspect unauthorized access to your account.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[oklch(0.14_0.015_265)] mb-3" style={{ fontWeight: 700 }}>6. Cookies and Tracking Technologies</h2>
            <p className="leading-relaxed mb-3 text-sm">We use cookies and similar tracking technologies to collect and track information about your use of our platform. Types of cookies we use:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed">
              <li><strong>Essential cookies:</strong> Required for the platform to function (authentication, session management)</li>
              <li><strong>Analytics cookies:</strong> Help us understand how users interact with the platform</li>
              <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
            </ul>
            <p className="text-sm leading-relaxed mt-3">You can control cookies through your browser settings. Disabling certain cookies may affect platform functionality.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[oklch(0.14_0.015_265)] mb-3" style={{ fontWeight: 700 }}>7. Your Rights and Choices</h2>
            <p className="leading-relaxed mb-3 text-sm">Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
              <li><strong>Portability:</strong> Request a machine-readable copy of your data</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time via the link in any email</li>
            </ul>
            <p className="text-sm leading-relaxed mt-3">To exercise these rights, contact us at <span className="text-[oklch(0.42_0.19_265)] font-medium">privacy@instaclient.io</span>.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[oklch(0.14_0.015_265)] mb-3" style={{ fontWeight: 700 }}>8. Healthcare Data and TCPA Compliance</h2>
            <p className="leading-relaxed text-sm">For customers in the healthcare industry, InstaClient operates as a Business Associate under HIPAA when processing Protected Health Information (PHI). We sign Business Associate Agreements (BAAs) upon request. All SMS communications facilitated through our platform are subject to TCPA compliance requirements. Businesses using InstaClient are responsible for obtaining appropriate consent from their contacts prior to initiating automated text messages.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[oklch(0.14_0.015_265)] mb-3" style={{ fontWeight: 700 }}>9. Children's Privacy</h2>
            <p className="leading-relaxed text-sm">InstaClient is not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child under 18, we will take steps to delete that information.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[oklch(0.14_0.015_265)] mb-3" style={{ fontWeight: 700 }}>10. Changes to This Policy</h2>
            <p className="leading-relaxed text-sm">We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically. Your continued use of InstaClient after changes are posted constitutes your acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[oklch(0.14_0.015_265)] mb-3" style={{ fontWeight: 700 }}>11. Contact Us</h2>
            <p className="leading-relaxed text-sm">If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:</p>
            <div className="mt-3 p-4 rounded-xl bg-[oklch(0.97_0.005_265)] border border-[oklch(0.91_0.006_265)] text-sm space-y-1">
              <p><strong>InstaClient, Inc.</strong></p>
              <p>Email: <span className="text-[oklch(0.42_0.19_265)]">privacy@instaclient.io</span></p>
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
