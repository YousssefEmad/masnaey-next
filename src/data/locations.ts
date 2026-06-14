export interface LocationOption {
  value: string;
  label: string;
}

// ── Governorates (المحافظات) ────────────────────────────────
export const governorates: LocationOption[] = [
  { value: "",            label: "اختر المحافظة" },
  { value: "cairo",       label: "القاهرة" },
  { value: "giza",        label: "الجيزة" },
  { value: "alexandria",  label: "الإسكندرية" },
  { value: "10th",        label: "مدينة العاشر" },
  { value: "6th",         label: "مدينة السادس من أكتوبر" },
  { value: "badr",        label: "مدينة بدر" },
  { value: "suez",        label: "السويس" },
];

// ── Cities / Districts (المدينة أو الحي) ────────────────────
export const cities: LocationOption[] = [
  { value: "",            label: "اختر المدينة أو الحى" },
  { value: "cairo",       label: "القاهرة" },
  { value: "giza",        label: "الجيزة" },
  { value: "alexandria",  label: "الإسكندرية" },
  { value: "10th",        label: "مدينة العاشر" },
  { value: "6th",         label: "مدينة السادس من أكتوبر" },
  { value: "badr",        label: "مدينة بدر" },
  { value: "suez",        label: "السويس" },
];
