"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef, type FormEvent } from "react";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { governorates, cities } from "@/data/locations";

// ── Useful Links Dropdown Items ─────────────────────────────────
const usefulLinks = [
  { label: "من نحن",        href: "#" },
  { label: "جميع القطاعات",  href: "#" },
  { label: "تواصل معنا",     href: "#" },
];

// ── Logo (inline SVG — swaps white / colored) ──────────────────
function Logo({ white = false }: { white?: boolean }) {
  return (
    <svg
      viewBox="0 0 200 56"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={siteConfig.name}
      className="h-full w-auto"
    >
      {!white && (
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#104090" />
            <stop offset="100%" stopColor="#2196F3" />
          </linearGradient>
        </defs>
      )}
      <text
        x="8"
        y="44"
        fontFamily="Cairo, sans-serif"
        fontSize="46"
        fontWeight="900"
        fill={white ? "#ffffff" : "url(#logoGrad)"}
      >
        {siteConfig.name}
      </text>
    </svg>
  );
}

// ── Navbar Search Form (appears in center, desktop, once scrolled) ─
function NavbarSearchForm({ visible }: { visible: boolean }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query)       params.set("q", query);
    if (governorate)  params.set("governorate", governorate);
    if (city)         params.set("city", city);
    router.push(`/search?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      aria-label="بحث عن مصنع"
      aria-hidden={!visible}
      className={cn(
        "hidden lg:flex items-stretch h-12 rounded-lg overflow-hidden",
        "border border-gray-200 divide-x divide-gray-200 bg-white",
        "transition-opacity duration-300",
        visible ? "opacity-100" : "opacity-0 invisible"
      )}
    >
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="أكتب اسم المنتج أو المصنع"
        aria-label="ابحث عن مصنع"
        autoComplete="off"
        tabIndex={visible ? 0 : -1}
        className="w-[170px] xl:w-[210px] px-4 text-sm text-gray-600 placeholder:text-gray-500 font-tajawal font-medium outline-none bg-transparent"
      />

      <select
        value={governorate}
        onChange={(e) => setGovernorate(e.target.value)}
        aria-label="اختر المحافظة"
        tabIndex={visible ? 0 : -1}
        className="w-[150px] xl:w-[190px] px-4 text-sm text-gray-600 font-tajawal font-medium outline-none bg-transparent cursor-pointer"
      >
        {governorates.map((g) => (
          <option key={g.value} value={g.value}>{g.label}</option>
        ))}
      </select>

      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        aria-label="اختر المدينة أو الحى"
        tabIndex={visible ? 0 : -1}
        className="w-[150px] xl:w-[190px] px-4 text-sm text-gray-600 font-tajawal font-medium outline-none bg-transparent cursor-pointer"
      >
        {cities.map((c) => (
          <option key={c.value} value={c.value}>{c.label}</option>
        ))}
      </select>

      <button
        type="submit"
        aria-label="بحث"
        tabIndex={visible ? 0 : -1}
        className="w-[84px] flex items-center justify-center gap-1.5 text-gray-600 font-tajawal font-medium text-[.95rem] hover:bg-[#1e2d72] hover:text-white transition-colors duration-300 cursor-pointer flex-shrink-0"
      >
        <Search size={14} aria-hidden="true" />
        بحث
      </button>
    </form>
  );
}

// ── Navbar ───────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen, setDropOpen]     = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  // ── Scroll handler — simple threshold like native JS ────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Close dropdown on outside click ─────────────────────────
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ── Lock body scroll when mobile menu open ──────────────────
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isTransparent = !scrolled && !mobileOpen;

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50",
        "h-[72px] lg:h-[93px]",
        "transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)]",
        scrolled || mobileOpen
          ? "bg-white shadow-[0_4px_24px_rgba(16,64,144,.13)]"
          : "bg-transparent shadow-none"
      )}
      role="navigation"
      aria-label="القائمة الرئيسية"
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between gap-3">

        {/* ── Right group: mobile toggle + logo ── */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => setMobileOpen((p) => !p)}
            aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={mobileOpen}
            className={cn(
              "lg:hidden p-2 -m-2 rounded-lg transition-colors duration-300 cursor-pointer",
              isTransparent ? "text-white hover:bg-white/12" : "text-primary hover:bg-blue-50"
            )}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <Link
            href="/"
            aria-label={`${siteConfig.name} - الرئيسية`}
            className="relative block h-8 lg:h-14"
          >
            {/* white logo — visible when transparent */}
            <span className={cn("absolute inset-0 transition-opacity duration-300", scrolled ? "opacity-0 invisible" : "opacity-100")}>
              <Logo white />
            </span>
            {/* colored logo — visible when scrolled */}
            <span className={cn("block h-full transition-opacity duration-300", scrolled ? "opacity-100" : "opacity-0 invisible")}>
              <Logo />
            </span>
          </Link>
        </div>

        {/* ── Center: search form (desktop only, shown once scrolled) ── */}
        <div className="flex-1 hidden lg:flex justify-center">
          <NavbarSearchForm visible={scrolled} />
        </div>

        {/* ── Left group: useful links dropdown + CTA buttons ── */}
        <div className="flex items-center gap-2 flex-shrink-0">

          {/* روابط مفيدة Dropdown — desktop only */}
          <div ref={dropRef} className="relative hidden lg:block">
            <button
              onClick={() => setDropOpen((p) => !p)}
              aria-expanded={dropOpen}
              aria-haspopup="true"
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer",
                "font-tajawal text-base font-bold transition-colors duration-300",
                isTransparent
                  ? "text-[#FAFAFA] hover:bg-white/12"
                  : "text-primary hover:bg-blue-50"
              )}
            >
              روابط مفيدة
              <ChevronDown
                size={16}
                className={cn("transition-transform duration-300", dropOpen && "rotate-180")}
                aria-hidden="true"
              />
            </button>

            {dropOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-[0_8px_40px_rgba(16,64,144,.18)] border border-gray-100 py-2 z-50">
                {usefulLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setDropOpen(false)}
                    className="block px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-primary rounded-lg mx-1 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t border-gray-100 my-1" />
                <Link
                  href="/categories"
                  onClick={() => setDropOpen(false)}
                  className="block px-4 py-2.5 text-sm font-bold text-primary hover:bg-blue-50 rounded-lg mx-1 transition-colors"
                >
                  كل الفئات
                </Link>
              </div>
            )}
          </div>

          {/* أنضم معنا */}
          <Link
            href="/register"
            className={cn(
              "h-[45px] px-6 rounded-lg flex items-center justify-center gap-2",
              "font-tajawal text-base font-bold transition-all duration-300",
              isTransparent
                ? "bg-white/90 text-primary hover:bg-primary hover:text-white"
                : "bg-primary text-white hover:bg-primary-light"
            )}
          >
            أنضم معنا
          </Link>

          {/* En — language toggle */}
          <button
            type="button"
            aria-label="Switch to English"
            className={cn(
              "h-[45px] px-6 rounded-lg flex items-center justify-center cursor-pointer",
              "font-tajawal text-base font-bold transition-all duration-300",
              isTransparent
                ? "bg-[#24338BB2] text-white hover:bg-white/90 hover:text-primary"
                : "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white"
            )}
          >
            En
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)]",
          mobileOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-white border-t border-gray-100 shadow-xl px-4 pb-6 pt-4">

          <p className="text-[.72rem] font-bold text-gray-400 uppercase tracking-widest mb-3 font-tajawal">
            روابط مفيدة
          </p>
          <ul className="space-y-1 mb-2">
            {usefulLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-primary rounded-lg transition-colors font-tajawal"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/categories"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm font-bold text-primary hover:bg-blue-50 rounded-lg transition-colors font-tajawal"
              >
                كل الفئات
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-2 mt-4">
            <Link
              href="/register"
              onClick={() => setMobileOpen(false)}
              className="flex-1 h-[45px] rounded-lg flex items-center justify-center font-tajawal text-base font-bold bg-primary text-white hover:bg-primary-light transition-colors"
            >
              أنضم معنا
            </Link>
            <button
              type="button"
              aria-label="Switch to English"
              className="h-[45px] px-6 rounded-lg font-tajawal text-base font-bold border border-primary text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"
            >
              En
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
