/*
 * InstaClient Footer
 * Design: Clean, minimal — white with subtle border, simplified columns
 * Updated: Removed social links, HIPAA/Security/Cookies, Company, Resources, Changelog
 */

import { Zap } from "lucide-react";
import { Link } from "wouter";
import { scrollToHash } from "@/lib/motion";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Integrations", href: "#integrations" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  const handleScrollLink = (href: string) => {
    if (!href.startsWith("#")) return;
    if (window.location.pathname !== "/") {
      window.location.assign(`/${href}`);
      return;
    }
    scrollToHash(href);
  };

  return (
    <footer className="bg-white border-t border-[oklch(0.91_0.006_265)]">
      <div className="container py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand — spans 2 cols on large screens */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-bg-primary flex items-center justify-center shadow-md">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="font-display font-extrabold text-xl text-[oklch(0.14_0.015_265)] tracking-tight" style={{ fontWeight: 800 }}>
                Insta<span className="text-[oklch(0.42_0.19_265)]">Client</span>
              </span>
            </div>
            <p className="text-sm text-[oklch(0.52_0.018_265)] leading-relaxed max-w-xs">
              The AI-powered platform that turns missed calls, slow follow-up, and dormant customers into booked appointments — automatically.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h4 className="font-display font-semibold text-sm text-[oklch(0.14_0.015_265)] mb-4">Product</h4>
            <ul className="space-y-2.5">
              {footerLinks.Product.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleScrollLink(link.href)}
                    className="text-sm text-[oklch(0.55_0.015_265)] hover:text-[oklch(0.42_0.19_265)] transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="font-display font-semibold text-sm text-[oklch(0.14_0.015_265)] mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {footerLinks.Legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[oklch(0.55_0.015_265)] hover:text-[oklch(0.42_0.19_265)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[oklch(0.91_0.006_265)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[oklch(0.65_0.015_265)]">
            © 2026 InstaClient, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-[oklch(0.65_0.015_265)]">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
