import type { Category } from "@/types";

export const categories: Category[] = [
  { id: "1", slug: "food-beverages",   name: "الغذاء والمشروبات",     icon: "UtensilsCrossed", factoryCount: 1240 },
  { id: "2", slug: "textiles",         name: "الملابس والمنسوجات",    icon: "Shirt",           factoryCount: 896  },
  { id: "3", slug: "chemicals",        name: "الكيماويات",             icon: "FlaskConical",    factoryCount: 632  },
  { id: "4", slug: "electronics",      name: "الإلكترونيات",          icon: "Cpu",             factoryCount: 415  },
  { id: "5", slug: "construction",     name: "مواد البناء",           icon: "HardHat",         factoryCount: 578  },
  { id: "6", slug: "engineering",      name: "الهندسية والميكانيكية", icon: "Settings2",        factoryCount: 721  },
  { id: "7", slug: "plastics",         name: "البلاستيك والمطاط",     icon: "Package",         factoryCount: 389  },
  { id: "8", slug: "metals",           name: "المعادن والصلب",        icon: "Layers",          factoryCount: 502  },
];
