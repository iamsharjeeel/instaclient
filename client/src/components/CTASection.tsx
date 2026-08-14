/*
 * InstaClient CTA Section
 * Design: Full-width indigo gradient, bold headline, demo booking form
 */

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { luxuryTransition, view } from "@/lib/motion";

export default function CTASection() {
  const [form, setForm] = useState({ name: "", business: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Fire GHL external tracking event
    try {
      // Split full name into first/last for GHL auto-mapping
      const nameParts = form.name.trim().split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";

      // GHL external tracking script injected via index.html
      const w = window as unknown as Record<string, unknown>;
      if (typeof w["__ghl_track"] === "function") {
        (w["__ghl_track"] as Function)("form_submission", {
          first_name: firstName,
          last_name: lastName,
          email: form.email,
          phone: form.phone,
          "business.name": form.business,
        });
      }
    } catch (_) {
      // Tracking failure should never block form submission
    }

    setSubmitted(true);
    toast.success("Demo request received! Redirecting you to book your call...");
    setTimeout(() => {
      window.location.href = "https://book.instaclient.io/introcall";
    }, 2000);
  };

  return (
    <section id="cta" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg-primary" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(circle at 70% 30%, oklch(0.72 0.15 195 / 0.5) 0%, transparent 50%), radial-gradient(circle at 20% 80%, oklch(0.30 0.20 265 / 0.5) 0%, transparent 40%)"
      }} />
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
        backgroundSize: "24px 24px"
      }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={view}
            transition={luxuryTransition}
          >
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6" style={{ fontWeight: 800 }}>
              More booked appointments
              <span className="block mt-2" style={{ color: "oklch(0.72 0.15 195)" }}>start today.</span>
            </h2>
            <p className="text-white/75 text-xl leading-relaxed mb-8">
              Book a 20-minute demo and we'll show you exactly how many leads you're currently losing — and how InstaClient can recover them starting this week.
            </p>

            <div className="space-y-4">
              {[
                { icon: Calendar, text: "Live demo of your personalized AI setup" },
                { icon: Phone, text: "See a real missed call recovery in action" },
                { icon: Mail, text: "Custom ROI projection for your business" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/85 text-base">{text}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/20">
              <p className="text-white/60 text-sm">
                Join the businesses already using InstaClient
              </p>
              <div className="flex items-center gap-2 mt-3">
                {[
                  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=40&h=40&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=40&h=40&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=40&h=40&fit=crop&crop=face",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Customer"
                    className="w-9 h-9 rounded-full border-2 border-white/30 object-cover"
                    style={{ marginLeft: i > 0 ? "-8px" : 0 }}
                  />
                ))}

              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={view}
            transition={luxuryTransition}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              {!submitted ? (
                <>
                  <h3 className="font-display text-2xl font-bold text-[oklch(0.14_0.015_265)] mb-2" style={{ fontWeight: 700 }}>
                    Book Your Free Demo
                  </h3>
                  <p className="text-[oklch(0.52_0.018_265)] text-sm mb-6">
                    Takes 20 minutes. No commitment required.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold font-display text-[oklch(0.35_0.015_265)] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Dr. Jane Smith"
                          className="w-full px-4 py-3 rounded-xl border border-[oklch(0.91_0.006_265)] text-sm text-[oklch(0.14_0.015_265)] placeholder:text-[oklch(0.70_0.010_265)] focus:outline-none focus:border-[oklch(0.42_0.19_265)] focus:ring-2 focus:ring-[oklch(0.42_0.19_265/0.15)] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold font-display text-[oklch(0.35_0.015_265)] mb-1.5">
                          Business Name *
                        </label>
                        <input
                          type="text"
                          value={form.business}
                          onChange={(e) => setForm({ ...form, business: e.target.value })}
                          placeholder="Luxe MedSpa"
                          className="w-full px-4 py-3 rounded-xl border border-[oklch(0.91_0.006_265)] text-sm text-[oklch(0.14_0.015_265)] placeholder:text-[oklch(0.70_0.010_265)] focus:outline-none focus:border-[oklch(0.42_0.19_265)] focus:ring-2 focus:ring-[oklch(0.42_0.19_265/0.15)] transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold font-display text-[oklch(0.35_0.015_265)] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="(555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-[oklch(0.91_0.006_265)] text-sm text-[oklch(0.14_0.015_265)] placeholder:text-[oklch(0.70_0.010_265)] focus:outline-none focus:border-[oklch(0.42_0.19_265)] focus:ring-2 focus:ring-[oklch(0.42_0.19_265/0.15)] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold font-display text-[oklch(0.35_0.015_265)] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="jane@luxemedspa.com"
                        className="w-full px-4 py-3 rounded-xl border border-[oklch(0.91_0.006_265)] text-sm text-[oklch(0.14_0.015_265)] placeholder:text-[oklch(0.70_0.010_265)] focus:outline-none focus:border-[oklch(0.42_0.19_265)] focus:ring-2 focus:ring-[oklch(0.42_0.19_265/0.15)] transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full py-4 rounded-xl text-base font-semibold font-display flex items-center justify-center gap-2 mt-2"
                    >
                      Book My Free Demo
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>

                  <p className="text-xs text-[oklch(0.65_0.015_265)] text-center mt-4">
                    By submitting, you agree to our Privacy Policy. No spam, ever.
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full gradient-bg-primary flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[oklch(0.14_0.015_265)] mb-2" style={{ fontWeight: 700 }}>
                    You're all set!
                  </h3>
                  <p className="text-[oklch(0.52_0.018_265)] text-sm leading-relaxed">
                    Taking you to the calendar now so you can pick a time that works for you...
                  </p>
                  <div className="mt-6 p-4 rounded-xl bg-[oklch(0.96_0.008_265)] text-left">
                    <p className="text-xs font-semibold font-display text-[oklch(0.42_0.19_265)] mb-1">What happens next:</p>
                    <ul className="text-xs text-[oklch(0.45_0.015_265)] space-y-1">
                      <li>✓ Pick your preferred time on the next page</li>
                      <li>✓ Confirmation sent to {form.email}</li>
                      <li>✓ Custom ROI analysis prepared for your call</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
