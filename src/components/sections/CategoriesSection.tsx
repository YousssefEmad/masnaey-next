"use client";

import * as LucideIcons from "lucide-react";
import { type LucideProps } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "@/components/ui/SectionHeader";
import { categories } from "@/data/categories";
import { cn } from "@/lib/utils";

import "swiper/css";

// Dynamic icon resolver
function DynamicIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = (LucideIcons as unknown as Record<string, React.FC<LucideProps>>)[name];
  if (!Icon) return <LucideIcons.Factory {...props} />;
  return <Icon {...props} />;
}

export default function CategoriesSection() {
  return (
    <section className="py-20 bg-white" aria-labelledby="cats-title">
      <div className="container mx-auto px-4">

        <SectionHeader
          title={<>كل <span>القطاعات</span></>}
          href="/categories"
          linkLabel="عرض الجميع"
        />

        <Swiper
          dir="rtl"
          loop
          grabCursor
          spaceBetween={16}
          slidesPerView={1.15}
          breakpoints={{
            576:  { slidesPerView: 1.5, spaceBetween: 18 },
            768:  { slidesPerView: 2.2, spaceBetween: 20 },
            992:  { slidesPerView: 3.1, spaceBetween: 22 },
            1200: { slidesPerView: 6.1, spaceBetween: 24 },
          }}
          className="!py-5 !px-[5px]"
          aria-label="قائمة القطاعات"
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.id} className="!h-auto">
              <Link
                href={`/categories/${cat.slug}`}
                aria-label={`${cat.name} — ${cat.factoryCount.toLocaleString("ar-EG")} مصنع`}
                className={cn(
                  "group flex flex-col items-center justify-center gap-6 text-center",
                  "h-[185px] px-3 pt-6 pb-5 rounded-2xl border border-[#EBEBEB] bg-white",
                  "relative overflow-hidden cursor-pointer",
                  "hover:border-primary hover:shadow-[0_4px_24px_rgba(16,64,144,.13)] hover:-translate-y-1",
                  "transition-all duration-300"
                )}
              >
                {/* Bottom accent bar */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 inset-x-0 h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                />

                {/* Icon */}
                <span className="w-14 h-14 rounded-full bg-[#F7F7F7] flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <DynamicIcon name={cat.icon} size={22} className="text-primary" aria-hidden="true" />
                </span>

                {/* Text */}
                <span>
                  <p className="font-tajawal text-[18px] font-bold leading-7 text-[#222222] mb-2">
                    {cat.name}
                  </p>
                  <p className="font-tajawal text-sm font-medium leading-5 text-[#666666]">
                    {cat.factoryCount.toLocaleString("ar-EG")} مصنع
                  </p>
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}