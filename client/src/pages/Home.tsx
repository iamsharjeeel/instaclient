/*
 * InstaClient Home Page
 * Design: Precision Minimalism meets AI-Native SaaS
 * Sections: Navbar → Hero → LogoBar → HowItWorks → Features → ROI → Testimonials → Pricing → FAQ → CTA → Footer
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoBar from "@/components/LogoBar";
import IndustriesSection from "@/components/IndustriesSection";
import HowItWorks from "@/components/HowItWorks";
import SpeedBanner from "@/components/SpeedBanner";
import FeaturesSection from "@/components/FeaturesSection";
import ROISection from "@/components/ROISection";
import IntegrationsSection from "@/components/IntegrationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <LogoBar />
      <IndustriesSection />
      <HowItWorks />
      <SpeedBanner />
      <FeaturesSection />
      <ROISection />
      <IntegrationsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
