/*
 * InstaClient LogoBar
 * Design: Minimal trust strip — 5 real business names in a single centered row
 * Mobile: wraps to 2-3 per row but stays visually balanced
 */

import { motion } from "framer-motion";

const businesses = [
  "Lux Med Spa",
  "ServiceMaster Restore",
  "Golla Plastic Surgery & Med Spa",
  "American Laser Med Spa",
  "Aire Serv Heating & Air Conditioning",
];

export default function LogoBar() {
  return (
    <section className="py-12 border-y border-[oklch(0.91_0.006_265)] bg-[oklch(0.985_0.003_265)]">
      <div className="container">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm font-medium text-[oklch(0.55_0.015_265)] mb-8 tracking-wide uppercase"
        >
          Trusted by high-ticket local service businesses
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-5">
          {businesses.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-2 text-[oklch(0.55_0.015_265)] hover:text-[oklch(0.42_0.19_265)] transition-colors"
            >
              <div className="w-6 h-6 rounded-md gradient-bg-primary opacity-70 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold font-display">{name[0]}</span>
              </div>
              <span className="text-sm font-semibold font-display whitespace-nowrap">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
