"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { navLinks, company } from "@/data/site";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open ? "py-3" : "py-6",
      )}
    >
      <div
        className={cn(
          "container-edge flex items-center justify-between rounded-full border px-5 py-2.5 transition-all duration-500",
          scrolled || open
            ? "border-line bg-ink/70 backdrop-blur-xl shadow-lg shadow-black/20"
                  : "border-transparent bg-transparent [.light_&]:border-line [.light_&]:bg-ink/70 [.light_&]:backdrop-blur-xl [.light_&]:shadow-lg [.light_&]:shadow-black/10",
        )}
      >
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-black text-black">
            <span
              className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))" }}
            />
            <span className="relative font-display">U</span>
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            {company.name}
            <span className="ml-1 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/40">
              agency
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium tracking-wide text-foreground/70 transition-colors hover:text-foreground",
                  active && "text-foreground",
                )}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 h-[2px] w-full rounded-full"
                    style={{ background: "linear-gradient(90deg, var(--color-accent), var(--color-accent-2))" }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={company.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            <Phone size={15} />
            {company.phone}
          </a>
          <MagneticButton href="/contact" className="!px-5 !py-3 text-xs">
            Get a Quote
            <ArrowUpRight size={14} />
          </MagneticButton>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="container-edge mt-3 lg:hidden"
          >
            <div className="flex flex-col gap-1 rounded-3xl border border-line bg-ink/95 p-5 backdrop-blur-xl">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground",
                    pathname === link.href && "bg-foreground/5 text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 flex items-center justify-between border-t border-line px-4 pt-4">
                <a href={company.phoneHref} className="text-sm font-medium text-foreground/70">
                  {company.phone}
                </a>
                <MagneticButton href="/contact" className="!px-5 !py-3 text-xs">
                  Get a Quote
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
