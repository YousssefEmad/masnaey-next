"use client";

import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

// ── Types ──────────────────────────────────────────────────────
type Variant = "primary" | "outline" | "ghost" | "white" | "white-outline";
type Size    = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  fullWidth?: boolean;
  asChild?: boolean;
}

// ── Variant styles ─────────────────────────────────────────────
const variantStyles: Record<Variant, string> = {
  primary:
    "bg-primary text-white border-2 border-primary hover:bg-primary-light hover:border-primary-light active:scale-[.98]",
  outline:
    "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white active:scale-[.98]",
  ghost:
    "bg-transparent text-primary border-2 border-transparent hover:bg-primary/10 active:scale-[.98]",
  white:
    "bg-white text-primary border-2 border-white hover:bg-blue-50 active:scale-[.98]",
  "white-outline":
    "bg-transparent text-white border-2 border-white/60 hover:bg-white/15 hover:border-white active:scale-[.98]",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-5 py-2.5 text-[.9rem] gap-2",
  lg: "px-7 py-3 text-base gap-2.5",
};

// ── Component ──────────────────────────────────────────────────
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      fullWidth = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          // base
          "inline-flex items-center justify-center font-bold rounded-lg",
          "font-cairo transition-all duration-[.28s] ease-out cursor-pointer",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
          "disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none",
          "whitespace-nowrap select-none",
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {loading ? (
          <>
            <span
              className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
              aria-hidden="true"
            />
            <span>جاري التحميل...</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
