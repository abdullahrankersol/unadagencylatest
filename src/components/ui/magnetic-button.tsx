"use client";

import { useRef, type ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  href?: string;
  children: ReactNode;
  className?: string;
  variant?: "solid" | "outline" | "ghost";
  onClick?: () => void;
  type?: "button" | "submit";
};

export function MagneticButton({
  href,
  children,
  className,
  variant = "solid",
  onClick,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.setProperty("--tx", `${x * 0.28}px`);
    el.style.setProperty("--ty", `${y * 0.35}px`);
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tx", `0px`);
    el.style.setProperty("--ty", `0px`);
  }

  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] transition-colors duration-300 whitespace-nowrap";

  const variantStyles = {
    solid: "text-on-accent",
    outline: "border border-line text-foreground hover:border-foreground/60",
    ghost: "text-foreground/80 hover:text-foreground",
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: "translate(var(--tx, 0px), var(--ty, 0px))",
      }}
      className={cn("transition-transform duration-200 ease-out", "inline-block")}
    >
      <span className={cn(baseStyles, variantStyles[variant], className)}>
        {variant === "solid" && (
          <span
            className="absolute inset-0 -z-10"
            style={{
              background: "linear-gradient(90deg, var(--color-accent), var(--color-accent-2))",
            }}
          />
        )}
        {children}
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-block">
      {content}
    </button>
  );
}
