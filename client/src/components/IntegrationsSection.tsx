/*
 * InstaClient Integrations Section
 * Design: Clean grid of integration logos/names with subtle animation
 */

import { motion } from "framer-motion";
import { Plug } from "lucide-react";

const integrations = [
  { name: "Jane App", category: "Booking", color: "bg-pink-50 text-pink-700 border-pink-200" },
  { name: "Mindbody", category: "Booking", color: "bg-blue-50 text-blue-700 border-blue-200" },
  { name: "Calendly", category: "Scheduling", color: "bg-indigo-50 text-indigo-700 border-indigo-200" },
  { name: "Acuity", category: "Scheduling", color: "bg-purple-50 text-purple-700 border-purple-200" },
  { name: "HubSpot", category: "CRM", color: "bg-orange-50 text-orange-700 border-orange-200" },
  { name: "Salesforce", category: "CRM", color: "bg-sky-50 text-sky-700 border-sky-200" },
  { name: "Google Calendar", category: "Calendar", color: "bg-green-50 text-green-700 border-green-200" },
  { name: "Twilio", category: "SMS", color: "bg-red-50 text-red-700 border-red-200" },
  { name: "Zapier", category: "Automation", color: "bg-amber-50 text-amber-700 border-amber-200" },
  { name: "Square", category: "Payments", color: "bg-slate-50 text-slate-700 border-slate-200" },
  { name: "Stripe", category: "Payments", color: "bg-violet-50 text-violet-700 border-violet-200" },
  { name: "Webhooks", category: "Custom", color: "bg-gray-50 text-gray-700 border-gray-200" },
];

export default function IntegrationsSection() {
  return (
    <section className="py-20 bg-[oklch(0.985_0.003_265)] border-t border-[oklch(0.91_0.006_265)]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[oklch(0.96_0.008_265)] border border-[oklch(0.88_0.015_265)] text-[oklch(0.42_0.19_265)] text-xs font-semibold font-display tracking-wide mb-5">
              <Plug className="w-3 h-3" />
              Integrations
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[oklch(0.14_0.015_265)] leading-tight mb-4" style={{ fontWeight: 800 }}>
              Works with your existing{" "}
              <span className="gradient-text">tools and systems</span>
            </h2>
            <p className="text-[oklch(0.45_0.015_265)] leading-relaxed mb-6">
              InstaClient plugs into your current booking system, CRM, and calendar in minutes. No ripping and replacing — just adding a powerful AI layer on top of what you already use.
            </p>
            <div className="flex items-center gap-3 text-sm text-[oklch(0.52_0.018_265)]">
              <div className="w-8 h-8 rounded-lg gradient-bg-primary flex items-center justify-center">
                <Plug className="w-4 h-4 text-white" />
              </div>
              <span>Don't see your tool? <span className="text-[oklch(0.42_0.19_265)] font-semibold cursor-pointer hover:underline">Request an integration</span></span>
            </div>
          </motion.div>

          {/* Right: Integration grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 sm:grid-cols-4 gap-4"
          >
            {integrations.map((integration, i) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`rounded-xl border px-3 py-4 text-center card-hover ${integration.color}`}
              >
                <div className="font-display font-semibold text-sm leading-tight">{integration.name}</div>
                <div className="text-xs opacity-70 mt-1">{integration.category}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
