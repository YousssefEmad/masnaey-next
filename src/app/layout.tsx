import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: siteConfig.colors.primary,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | دليل ذكي لبيانات المصانع`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["مصانع مصر","دليل المصانع","مصنعي","بحث عن مصنع","قطاع صناعي","مصانع غذاء","مصانع ملابس","بيانات صناعية","تصنيع","مصانع عربية","Masnaey","Egyptian factories"],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.nameEn,
  publisher: siteConfig.nameEn,
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website", locale: "ar_EG", url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | دليل ذكي لبيانات المصانع`,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: `${siteConfig.name} - دليل ذكي لبيانات المصانع` }],
  },
  twitter: {
    card: "summary_large_image", site: "@masnaey", creator: "@masnaey",
    title: `${siteConfig.name} | دليل ذكي لبيانات المصانع`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  alternates: { canonical: siteConfig.url, languages: { "ar-EG": siteConfig.url } },
  icons: {
    icon: [{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }, { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  formatDetection: { telephone: false },
  category: "business",
};

const websiteSchema = {
  "@context": "https://schema.org", "@type": "WebSite",
  name: siteConfig.name, alternateName: siteConfig.nameEn,
  url: siteConfig.url, description: siteConfig.description, inLanguage: "ar",
  potentialAction: { "@type": "SearchAction", target: { "@type": "EntryPoint", urlTemplate: `${siteConfig.url}/search?q={search_term_string}` }, "query-input": "required name=search_term_string" },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url, logo: { "@type": "ImageObject", url: `${siteConfig.url}/images/logo.png`, width: 200, height: 60 }, sameAs: Object.values(siteConfig.social) },
};

const orgSchema = {
  "@context": "https://schema.org", "@type": "Organization",
  name: siteConfig.name, alternateName: siteConfig.nameEn,
  url: siteConfig.url, logo: `${siteConfig.url}/images/logo.png`,
  contactPoint: { "@type": "ContactPoint", telephone: siteConfig.contact.phone, contactType: "customer service", availableLanguage: "Arabic", areaServed: "EG" },
  address: { "@type": "PostalAddress", addressCountry: "EG", addressLocality: "Cairo" },
  sameAs: Object.values(siteConfig.social),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="geo.region" content="EG" />
        <meta name="geo.country" content="Egypt" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="font-cairo antialiased">
        <Navbar />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
