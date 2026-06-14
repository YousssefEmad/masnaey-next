import Link from "next/link";

import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section
      className="py-16 bg-gradient-to-br from-primary to-[#2433BB] relative overflow-hidden"
      aria-labelledby="cta-title"
    >
      <div
        aria-hidden="true"
        className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/[.055]"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-20 -right-12 w-80 h-80 rounded-full bg-white/[.04]"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2
              id="cta-title"
              className="text-3xl md:text-[2.2rem] font-black text-white leading-snug mb-4"
            >
              انضم إلى الآلاف من أصحاب المصانع في مصنعي
            </h2>

            <p className="text-white/80 text-[.95rem] leading-relaxed">
              أكبر دليل للمصانع في مصر والوطن العربي. سجّل مصنعك
              مجاناً وابدأ في استقبال طلبات الشراء والتواصل مع
              المشترين.
            </p>
          </div>

          <Link href="/register">
            <Button
              variant="white"
              size="lg"
              className="shadow-[0_8px_40px_rgba(16,64,144,.18)]"
            >
              سجّل مصنعك الآن ←
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}