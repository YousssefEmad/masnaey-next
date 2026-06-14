"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { governorates, cities } from "@/data/locations";

export default function HeroSection() {
  const router = useRouter();
  const [query, setQuery]             = useState("");
  const [governorate, setGovernorate] = useState("");
  const [city, setCity]               = useState("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query)       params.set("q", query);
    if (governorate) params.set("governorate", governorate);
    if (city)        params.set("city", city);
    router.push(`/search?${params.toString()}`);
  };

  return (
    <section
      aria-label="البحث عن مصنع"
      className={cn(
        "hero-section relative overflow-hidden",
        "bg-primary bg-cover bg-center", // bg-primary = fallback color if image missing
        "-mt-[72px] lg:-mt-[93px]"
      )}
      style={{ backgroundImage: "url('/images/banner-hero.jpg')" }}
    >
      {/* Decorative shape overlay */}
      <div
        aria-hidden="true"
        className="bg-no-repeat bg-top bg-contain sm:bg-cover pt-[120px] pb-12 lg:pt-[200px] lg:pb-[70px]"
        style={{ backgroundImage: "url('/images/shap-banner.png')" }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">

            {/* Title */}
            <h1 className="font-zain font-black text-white text-center text-[2.25rem] sm:text-5xl lg:text-[60px] leading-[1.2] lg:leading-[75px] tracking-[-0.02em] mb-6">
              لما تدور على مصنع
              <br />
              ابدأ من هنا
            </h1>

            {/* Search Form */}
            <form
              onSubmit={handleSearch}
              role="search"
              aria-label="بحث عن مصنع"
              className="bg-white rounded-2xl sm:rounded-full border-2 border-[#E8F4FF] shadow-[0_8px_40px_rgba(16,64,144,.18)] overflow-hidden flex flex-col sm:flex-row sm:h-16"
            >
              {/* Product / Factory name */}
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="أكتب اسم المنتج أو المصنع"
                aria-label="ابحث عن مصنع"
                autoComplete="off"
                className="w-full sm:flex-1 sm:h-16 sm:min-w-0 px-5 py-4 sm:py-0 text-sm font-tajawal font-medium text-primary placeholder:text-primary outline-none bg-transparent text-right"
              />

              {/* Divider */}
              <div aria-hidden="true" className="hidden sm:block w-px h-full bg-[#bbddfa73] flex-shrink-0" />

              {/* Governorate */}
              <select
                value={governorate}
                onChange={(e) => setGovernorate(e.target.value)}
                aria-label="اختر المحافظة"
                className="w-full sm:w-auto sm:min-w-[150px] sm:flex-shrink-0 sm:h-16 px-5 py-4 sm:py-0 text-sm font-tajawal font-medium text-[#04419C] outline-none bg-transparent cursor-pointer text-right border-t sm:border-t-0 border-[#E8F4FF]"
              >
                {governorates.map((g) => (
                  <option key={g.value} value={g.value}>{g.label}</option>
                ))}
              </select>

              {/* Divider */}
              <div aria-hidden="true" className="hidden sm:block w-px h-full bg-[#bbddfa73] flex-shrink-0" />

              {/* City / District */}
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                aria-label="اختر المدينة أو الحى"
                className="w-full sm:w-auto sm:min-w-[150px] sm:flex-shrink-0 sm:h-16 px-5 py-4 sm:py-0 text-sm font-tajawal font-medium text-[#04419C] outline-none bg-transparent cursor-pointer text-right border-t sm:border-t-0 border-[#E8F4FF]"
              >
                {cities.map((c) => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>

              {/* Search Button */}
              <button
                type="submit"
                aria-label="بحث"
                className="w-full sm:w-[108px] sm:h-16 sm:flex-shrink-0 flex items-center justify-center gap-1.5 bg-[#193A79] text-[#FAFAFA] font-tajawal text-base font-medium px-6 py-4 sm:py-0 hover:bg-[#142f61] transition-colors duration-300 cursor-pointer"
              >
                <Search size={16} aria-hidden="true" />
                بحث
              </button>
            </form>

            {/* Description */}
            <p className="mt-5 font-tajawal text-base sm:text-lg text-[#FAFAFA]/90 text-center">
              دور أٌقل أوصل اسرع
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}