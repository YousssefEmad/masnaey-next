import type { Factory } from "@/types";

export const factories: Factory[] = [
  {
    id: "1", slug: "egyptian-food-industries",
    name: "الصناعات المصرية للأغذية",
    location: "مدينة العاشر من رمضان",
    governorate: "الشرقية",
    categoryId: "1", categoryName: "الغذاء والمشروبات",
    description: "مصنع متخصص في إنتاج المواد الغذائية المعلبة والمحفوظة بأعلى معايير الجودة والسلامة الغذائية. نمتلك خطوط إنتاج حديثة وطاقة إنتاجية عالية.",
    verified: true, employeeCount: "٢٥٠+",
    establishedYear: 2001, certifications: ["ISO 9001", "HACCP"],
  },
  {
    id: "2", slug: "united-textile-factory",
    name: "مصنع النسيج المتحد",
    location: "مدينة السادس من أكتوبر",
    governorate: "الجيزة",
    categoryId: "2", categoryName: "الملابس والمنسوجات",
    description: "رائدون في صناعة الأقمشة والملابس الجاهزة منذ أكثر من ٢٠ عاماً. نصدر منتجاتنا لأكثر من ١٥ دولة حول العالم.",
    verified: true, employeeCount: "٥٠٠+",
    establishedYear: 1998, certifications: ["ISO 9001", "OEKO-TEX"],
  },
  {
    id: "3", slug: "egyptian-industrial-chemicals",
    name: "الكيماويات الصناعية المصرية",
    location: "السويس، منطقة صناعية",
    governorate: "السويس",
    categoryId: "3", categoryName: "الكيماويات",
    description: "متخصصون في إنتاج المواد الكيماوية الصناعية ومواد التنظيف. نطبق أعلى معايير السلامة والجودة.",
    verified: true, employeeCount: "١٨٠+",
    establishedYear: 2005, certifications: ["ISO 9001", "ISO 14001"],
  },
  {
    id: "4", slug: "advanced-construction",
    name: "شركة البناء المتطور",
    location: "مدينة بدر",
    governorate: "القاهرة",
    categoryId: "5", categoryName: "مواد البناء",
    description: "مصنع رائد في إنتاج مواد البناء الحديثة من طوب وبلاط وعوازل. نخدم مشاريع التطوير العقاري الكبرى.",
    verified: true, employeeCount: "٣٢٠+",
    establishedYear: 2010, certifications: ["ISO 9001"],
  },
];
