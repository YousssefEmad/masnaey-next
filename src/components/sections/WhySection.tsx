"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { whyItems } from "@/data/why";
import { cn } from "@/lib/utils";

import {
  CheckCircle,
  CircleDot,
  Search,
  MessageCircle,
} from "lucide-react";
const iconMap = {
  check: CheckCircle,
  dot: CircleDot,
  search: Search,
  message: MessageCircle,
} as const;

type IconName = keyof typeof iconMap;

function WhyIcon({ name }: { name: IconName }) {
  const Icon = iconMap[name] || CheckCircle;

  return (
    <Icon
      size={28}
      className={cn(
        "text-[#104090]",
        "transition-colors duration-300",
        "group-hover:text-white"
      )}
    />
  );
}

export default function WhySection() {
  return (
    <section
      className="py-[60px] bg-[#F4F6FB]"
      aria-labelledby="why-title"
    >
      <div className="container mx-auto px-4">

        {/* Header */}
        <SectionHeader title="لماذا مصنعي؟" centered />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">

          {whyItems.map((item) => (
            <article
              key={item.id}
              className={cn(
                "group flex items-center gap-4",
                "bg-white rounded-2xl p-6",
                "border border-transparent",
                "transition-all duration-300",
                "hover:border-[#104090]",
                "hover:-translate-y-1",
                "hover:shadow-[0_4px_24px_rgba(16,64,144,.13)]"
              )}
            >

              {/* Icon */}
              <div
                className={cn(
                  "w-[125px] h-[70px] rounded-full",
                  "bg-[#F7F7F7]",
                  "flex items-center justify-center",
                  "transition-all duration-300",
                  "group-hover:bg-gradient-to-br",
                  "group-hover:from-[#104090]",
                  "group-hover:to-[#1D4C9E]"
                )}
              >
                <WhyIcon name={item.icon as IconName} />
              </div>

              {/* Content */}
              <div className="text-start">
                <h3 className="text-[1.05rem] font-bold text-[#101828] mb-1">
                  {item.title}
                </h3>

                <p className="text-sm text-[#6B7280] leading-relaxed m-0">
                  {item.description}
                </p>
              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}