import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoBar from "@/components/LogoBar";
import IndustriesSection from "@/components/IndustriesSection";
import HowItWorks from "@/components/HowItWorks";
import SpeedBanner from "@/components/SpeedBanner";

const FeaturesSection = lazy(() => import("@/components/FeaturesSection"));
const ROISection = lazy(() => import("@/components/ROISection"));
const IntegrationsSection = lazy(() => import("@/components/IntegrationsSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));

function SectionFallback() {
  return <div className="min-h-[70vh] bg-white" aria-hidden />;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <LogoBar />
      <IndustriesSection />
      <HowItWorks />
      <SpeedBanner />
      <Suspense fallback={<SectionFallback />}>
        <FeaturesSection />
        <ROISection />
        <IntegrationsSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </Suspense>
    </div>
  );
}
