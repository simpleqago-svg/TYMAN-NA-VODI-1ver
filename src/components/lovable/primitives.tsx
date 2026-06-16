import Link from "next/link";
import type { ReactNode } from "react";

export function LovableCTA({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  onClick?: () => void;
}) {
  const base =
    "inline-flex items-center justify-center px-8 py-4 text-xs md:text-sm tracking-[0.18em] uppercase transition-colors duration-200";
  const styles =
    variant === "primary"
      ? "bg-burgundy text-foreground hover:bg-burgundy-hover"
      : "border border-border text-foreground hover:border-foreground";

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={`${base} ${styles} ${className}`}>
        {children}
      </button>
    );
  }

  const isExternal = href?.startsWith("http");
  const isHash = href?.startsWith("#");

  if (href && !isExternal && !isHash) {
    return (
      <Link href={href} className={`${base} ${styles} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href ?? "#"} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

export function LovableSectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-6 text-[11px] tracking-[0.28em] text-accent-gold uppercase">
      {children}
    </div>
  );
}

export const lovableInputClass =
  "w-full border-b border-border bg-transparent py-2 text-foreground transition-colors focus:border-foreground focus:outline-none";

export const lovableLabelClass =
  "mb-3 block text-[11px] tracking-[0.2em] text-muted-foreground uppercase";
