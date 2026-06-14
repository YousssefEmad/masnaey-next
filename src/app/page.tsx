import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import FactoriesSection from "@/components/sections/FactoriesSection";
import WhySection from "@/components/sections/WhySection";
import CTASection from "@/components/sections/CTASection";
// import NewsSection from "@/components/sections/NewsSection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | دليل ذكي لبيانات المصانع - ابحث عن المصنع المناسب`,
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FactoriesSection />
      <WhySection />
      <CTASection />
      {/* <NewsSection /> */}
    </>
  );
}
