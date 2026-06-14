// ── Category ─────────────────────────────────────────────────
export interface Category {
  id: string;
  slug: string;
  name: string;
  icon: string;           // lucide icon name
  factoryCount: number;
}

// ── Factory ──────────────────────────────────────────────────
export interface Factory {
  id: string;
  slug: string;
  name: string;
  location: string;
  governorate: string;
  categoryId: string;
  categoryName: string;
  description: string;
  logo?: string;
  verified: boolean;
  employeeCount: string;
  establishedYear?: number;
  certifications?: string[];
}

// ── News Article ─────────────────────────────────────────────
export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  image?: string;
  category: string;
  publishedAt: string;    // ISO date string
  readTime?: number;      // minutes
}

// ── Search Params ────────────────────────────────────────────
export interface SearchParams {
  q?: string;
  category?: string;
  region?: string;
  page?: number;
}

// ── Why Item ─────────────────────────────────────────────────
export interface WhyItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}
