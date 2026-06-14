import Link from "next/link";
import { Phone, Mail, MapPin, Share2 } from "lucide-react";
import { siteConfig } from "@/config/site";

function FooterLogo() {
  return (
    <svg width="110" height="34" viewBox="0 0 200 56" xmlns="http://www.w3.org/2000/svg" aria-label={siteConfig.name}>
      <text x="8" y="44" fontFamily="Cairo,sans-serif" fontSize="46" fontWeight="900" fill="#ffffff">
        {siteConfig.name}
      </text>
    </svg>
  );
}

const quickLinks = [
  { label: "الرئيسية",     href: "/" },
  { label: "الفئات",       href: "/categories" },
  { label: "المصانع",      href: "/factories" },
  { label: "الأخبار",      href: "/news" },
  { label: "من نحن",       href: "/about" },
];

const factoryLinks = [
  { label: "تسجيل مصنع",    href: "/register" },
  { label: "تسجيل دخول",    href: "/login" },
  { label: "باقات الاشتراك", href: "/pricing" },
  { label: "الإعلان معنا",   href: "/advertise" },
  { label: "الأسئلة الشائعة", href: "/faq" },
];

const socials = [
  { label: "فيسبوك",   href: siteConfig.social.facebook,  svg: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
  { label: "تويتر",    href: siteConfig.social.twitter,   svg: "M4 4l16 16M4 20L20 4" },
  { label: "لينكدإن",  href: siteConfig.social.linkedin,  svg: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
  { label: "انستجرام", href: siteConfig.social.instagram, svg: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z M12 6.865a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27z M12 8.8a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4z M17.6 5.76a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" },
  { label: "يوتيوب",   href: siteConfig.social.youtube,   svg: "M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z M9.75 15.02V8.98L15.5 12l-5.75 3.02z" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white/85" role="contentinfo">
      <div className="container mx-auto px-4 pt-14 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div>
            <FooterLogo />
            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-[270px]">
              الدليل الذكي الأول لبيانات المصانع في مصر والوطن العربي. نربطك بآلاف المصانع الموثقة.
            </p>
            <div className="flex gap-2.5 mt-5" aria-label="وسائل التواصل الاجتماعي">
              {socials.map(({ svg, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/12 flex items-center justify-center text-white hover:bg-white/28 transition-all hover:-translate-y-0.5 duration-[.28s]"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={svg} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 pb-2.5 border-b border-white/15">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-[.28s] group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Factory Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 pb-2.5 border-b border-white/15">
              للمصانع
            </h4>
            <ul className="space-y-2.5">
              {factoryLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-[.28s] group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 pb-2.5 border-b border-white/15">
              تواصل معنا
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <Phone size={15} className="text-blue-300 mt-0.5 flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} dir="ltr" className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <Mail size={15} className="text-blue-300 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin size={15} className="text-blue-300 mt-0.5 flex-shrink-0" />
                <span>{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/12 mt-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {siteConfig.name}. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/50">
            <Link href="/privacy" className="hover:text-white transition-colors">سياسة الخصوصية</Link>
            <span className="text-white/25">|</span>
            <Link href="/terms" className="hover:text-white transition-colors">الشروط والأحكام</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
