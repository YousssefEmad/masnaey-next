import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: React.ReactNode;
  href?: string;
  linkLabel?: string;
  className?: string;
  centered?: boolean;
  underline?: boolean;
  children?: React.ReactNode; // extra controls e.g. swiper nav buttons
}

export default function SectionHeader({
  title,
  href,
  linkLabel = "عرض الكل",
  className,
  centered = false,
  underline = true,
  children,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 mb-8",
        centered ? "justify-center text-center" : "justify-between",
        className
      )}
    >
      <h2
        className={cn(
          "font-tajawal text-2xl font-bold leading-[30px] text-[#666666]",
          "[&_span]:text-primary",
          underline &&
            "after:content-[''] after:block after:w-[164px] after:h-[2px] after:bg-primary after:mt-2.5",
          centered && underline && "after:mx-auto"
        )}
      >
        {title}
      </h2>

      {(href || children) && (
        <div className="flex items-center gap-4 flex-shrink-0 pt-1">
          {href && (
            <Link
              href={href}
              className="flex items-center gap-1.5 font-tajawal text-base font-medium text-[#222222] hover:opacity-70 transition-opacity"
            >
              {linkLabel}
              <ChevronLeft size={16} className="text-primary" aria-hidden="true" />
            </Link>
          )}
          {children}
        </div>
      )}
    </div>
  );
}