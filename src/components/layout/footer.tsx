"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { company, locations, navLinks, socialLinks } from "@/data/site";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function Footer() {
  const [activeCity, setActiveCity] = useState(locations[0].city);
  const active = locations.find((l) => l.city === activeCity) ?? locations[0];

  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink pt-24">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[900px] -translate-x-1/2 rounded-full opacity-20 blur-[140px]" style={{ background: "linear-gradient(90deg, var(--color-accent), var(--color-accent-2))" }} />

      <div className="container-edge relative">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 border-b border-line pb-16 md:flex-row md:items-end">
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: "var(--color-accent)" }}>
                Let&apos;s build something bold
              </span>
              <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.6rem)] font-semibold leading-[1.05] text-foreground">
                Have a brand worth <span className="gradient-text">shouting about?</span>
              </h2>
            </div>
            <MagneticButton href="/contact" className="!px-8 !py-4 text-sm">
              Start a project
              <ArrowUpRight size={16} />
            </MagneticButton>
          </div>
        </Reveal>

        <div className="grid gap-14 py-16 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/50">
                We Are Located At
              </span>
              <div className="mt-6 flex flex-wrap gap-2">
                {locations.map((loc) => (
                  <button
                    key={loc.city}
                    onClick={() => setActiveCity(loc.city)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                      activeCity === loc.city
                        ? "border-transparent text-on-accent"
                        : "border-line text-foreground/60 hover:border-foreground/40 hover:text-foreground",
                    )}
                    style={
                      activeCity === loc.city
                        ? { background: "linear-gradient(90deg, var(--color-accent), var(--color-accent-2))" }
                        : undefined
                    }
                  >
                    {loc.city}
                  </button>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border border-line bg-foreground/[0.03] p-7">
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-xl font-semibold text-foreground">{active.city}</h3>
                  {active.isHQ && (
                    <span
                      className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-on-accent"
                      style={{ background: "var(--color-lime)" }}
                    >
                      HQ
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-foreground/50">{active.country}</p>
                <div className="mt-5 space-y-3 text-sm text-foreground/70">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-foreground/40" />
                    <span>{active.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="shrink-0 text-foreground/40" />
                    <span>{active.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="shrink-0 text-foreground/40" />
                    <span>{active.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <Reveal delay={0.05}>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/50">Navigate</h4>
                <ul className="mt-5 space-y-3">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-foreground/70 transition-colors hover:text-foreground">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/50">Company</h4>
                <ul className="mt-5 space-y-3">
                  <li>
                    <Link href="/about" className="text-sm text-foreground/70 transition-colors hover:text-foreground">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="text-sm text-foreground/70 transition-colors hover:text-foreground">
                      Our Work
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-sm text-foreground/70 transition-colors hover:text-foreground">
                      Insights
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-sm text-foreground/70 transition-colors hover:text-foreground">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/50">Follow</h4>
                <ul className="mt-5 space-y-3">
                  {socialLinks.map((social) => (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                      >
                        {social.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-line py-8 text-xs text-foreground/40 md:flex-row">
          <p>
            © {new Date().getFullYear()} {company.fullName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="transition-colors hover:text-foreground/70">
              Privacy Policy
            </Link>
            <Link href="/contact" className="transition-colors hover:text-foreground/70">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
