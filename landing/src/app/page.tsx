"use client";
import ContentSection from "@/components/home/content-1";
import FaqSection from "@/components/home/faqs-3";
import CreditsSection from "@/components/home/features-5";
import AiFeatureSection from "@/components/home/features-6";
import BentoFeatures from "@/components/home/features-8";
import HeroSection from "@/components/home/HeroSection";
import IntegrationsSection from "@/components/home/Integrations";
import StatsSection from "@/components/home/stats-4";
import Testimonials from "@/components/home/testimonials";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <HeroSection />
      <CreditsSection />
      <IntegrationsSection />
      <StatsSection />
      <AiFeatureSection />
      <BentoFeatures />
      <ContentSection />
      <Testimonials />
      <FaqSection />
    </div>
  );
};

export default Home;
