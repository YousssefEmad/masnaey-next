"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import { MapPin, ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { factories } from "@/data/factories";
import { cn } from "@/lib/utils";

import "swiper/css";

function FactoryCard({
  factory,
  isActive,
}: {
  factory: (typeof factories)[0];
  isActive: boolean;
}) {
  return (
    <article
      className={cn(
        "relative rounded-[20px] border border-[#EBEBEB] shadow-[0_3px_9px_#00000014] p-6 min-h-[275px] transition-all duration-300",
        isActive ? "bg-[#FAFAFA]" : "bg-white"
      )}
    >
      {/* Sponsor Badge */}
      <span className="absolute top-0 left-0 bg-[#D8E9FF] text-[#104090] px-[13px] py-2 rounded-br-[16px] text-[12px] font-medium">
        راعي النشاط
      </span>

      {/* Header */}
      <div className="mb-5">
                <Image
          src="/public/logo-m.jpg"
          alt={factory.name}
          width={80}
          height={80}
          className="rounded-[10px] object-cover shadow-[0_8px_24px_rgba(149,157,165,.2)]"
        />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-[18px] font-bold text-[#101828] mb-2">
          {factory.name}
        </h3>

        <p className="text-[16px] leading-5 text-[#4A5565] line-clamp-2 mb-6">
          {factory.description}
        </p>

        <p className="flex items-center gap-1 text-[14px] text-[#333333]">
          <MapPin size={16} />
          {factory.location}
        </p>
      </div>

      {/* Footer يظهر للـ Active فقط */}
      <div
        className={cn(
          "flex gap-2 mt-7 overflow-hidden transition-all duration-300",
          isActive
            ? "opacity-100 max-h-[60px]"
            : "opacity-0 max-h-0"
        )}
      >
        <Link
          href={`/factories/${factory.slug}`}
          className="w-1/2 h-12 bg-[#1D4C9E] text-white rounded-lg flex items-center justify-center text-sm font-medium"
        >
          عرض الملف
        </Link>

        <Link
          href="/contact"
          className="w-1/2 h-12 border border-[#1D4C9E] text-[#1D4C9E] bg-white rounded-lg flex items-center justify-center text-sm font-medium"
        >
          تواصل معنا
        </Link>
      </div>
    </article>
  );
}

function SwiperNavBtn({
  dir,
  onClick,
}: {
  dir: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-10 h-10 rounded-full border flex items-center justify-center transition-all",
        dir === "next"
          ? "bg-[#1D4C9E] text-white border-[#1D4C9E] hover:bg-white hover:text-[#1D4C9E]"
          : "bg-white text-[#1D4C9E] border-[#E5E7EB] hover:bg-[#1D4C9E] hover:text-white"
      )}
    >
      {dir === "prev" ? (
        <ChevronRight size={16} />
      ) : (
        <ChevronLeft size={16} />
      )}
    </button>
  );
}

export default function FactoriesSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="py-14 bg-[#F4F6FB]"
      aria-labelledby="factories-title"
    >
      <div className="container mx-auto px-4">
        <SectionHeader title={<>راعى <span>النشاط</span></>}>
          <div className="flex gap-2">
            <SwiperNavBtn
              dir="prev"
              onClick={() => swiperRef.current?.slidePrev()}
            />
            <SwiperNavBtn
              dir="next"
              onClick={() => swiperRef.current?.slideNext()}
            />
          </div>
        </SectionHeader>

        <Swiper
          dir="rtl"
          modules={[Navigation]}
          centeredSlides
          loop
          speed={600}
          grabCursor
          slidesPerView={3}
          spaceBetween={30}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setActiveIndex(swiper.realIndex);
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          breakpoints={{
            576: {
              slidesPerView: 1.5,
              spaceBetween: 18,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 22,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
        >
          {factories.map((factory, index) => (
            <SwiperSlide
              key={factory.id}
              className={cn(
                "!h-auto transition-all duration-500",
                activeIndex === index
                  ? "scale-100 opacity-100 z-10"
                  : "scale-[0.88] opacity-55"
              )}
            >
              <FactoryCard
                factory={factory}
                isActive={activeIndex === index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}