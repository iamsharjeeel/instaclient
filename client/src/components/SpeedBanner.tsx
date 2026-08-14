/*
 * InstaClient Speed Banner
 * Design: Full-width teal accent strip with urgency stats about speed-to-lead
 */

import { motion } from "framer-motion";
import { Zap, TrendingDown, Clock, AlertTriangle } from "lucide-react";

const urgencyStats = [
  {
    icon: Clock,
    stat: "78%",
    text: "of customers choose the first business that responds",
  },
  {
    icon: TrendingDown,
    stat: "21x",
    text: "lower conversion if you wait more than 5 minutes",
  },
  {
    icon: AlertTriangle,
    stat: "62%",
    text: "of calls to local businesses go unanswered",
  },
  {
    icon: Zap,
    stat: "< 60s",
    text: "InstaClient's guaranteed first response time",
  },
];

export default function SpeedBanner() {
  return (
    <section className="py-14 relative overflow-hidden">
      {/* Teal gradient background */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(135deg, oklch(0.35 0.15 195) 0%, oklch(0.45 0.17 210) 50%, oklch(0.38 0.18 230) 100%)"
      }} />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
        backgroundSize: "20px 20px"
      }} />

      <div className="container relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {urgencyStats.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.stat}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-mono-stat text-3xl font-bold text-white">{item.stat}</div>
                  <div className="text-white/85 text-sm leading-snug mt-0.5">{item.text}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
