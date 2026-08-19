import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  crumb,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden pb-20 pt-40" style={{ backgroundColor: "var(--color-ink)" }}>
      <div
        className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[420px] rounded-full opacity-20 blur-[140px]"
        style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))" }}
      />
      <div className="container-edge relative">
        <Reveal>
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-foreground/40">
            <Link href="/" className="transition-colors hover:text-foreground/70">
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-foreground/70">{crumb}</span>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <span
            className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em]"
            style={{ color: "var(--color-accent)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--color-accent)" }} />
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.14}>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.4rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-tight text-foreground">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/60 md:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
