import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CalendarDays, MapPin, Tag, User } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { getPortfolioItemBySlug, portfolioItems } from "@/data/portfolio";

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getPortfolioItemBySlug(slug);
  if (!item) return {};
  return {
    title: `${item.title} — UNAD Agency`,
    description: item.summary,
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getPortfolioItemBySlug(slug);
  if (!item) notFound();

  const related = portfolioItems.filter((p) => p.slug !== item.slug && p.category === item.category).slice(0, 3);
  const fallbackRelated = related.length > 0 ? related : portfolioItems.filter((p) => p.slug !== item.slug).slice(0, 3);

  const meta = [
    { icon: User, label: "Client", value: item.client },
    { icon: Tag, label: "Category", value: item.category },
    { icon: MapPin, label: "Location", value: item.location },
    { icon: CalendarDays, label: "Year", value: item.year },
  ];

  return (
    <>
      <section className="relative overflow-hidden pb-10 pt-40" style={{ backgroundColor: "var(--color-ink)" }}>
        <div className="container-edge relative">
          <Reveal>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-foreground/50 transition-colors hover:text-foreground"
            >
              <ArrowLeft size={14} />
              All Projects
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.2rem,5.5vw,4.2rem)] font-semibold leading-[1.02] tracking-tight text-foreground">
              {item.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-24" style={{ backgroundColor: "var(--color-ink)" }}>
        <div className="container-edge">
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-line">
              <Image src={item.image} alt={item.title} fill className="object-cover" sizes="100vw" priority />
            </div>
          </Reveal>

          <div className="mt-14 grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <div className="grid grid-cols-2 gap-6">
                {meta.map((entry) => (
                  <div key={entry.label}>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-foreground/40">
                      <entry.icon size={13} />
                      {entry.label}
                    </div>
                    <p className="mt-1.5 font-display text-lg font-semibold text-foreground">{entry.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <MagneticButton href="/contact" className="!px-7 !py-3.5 text-xs">
                  Start a Similar Project
                  <ArrowUpRight size={14} />
                </MagneticButton>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-2xl font-semibold text-foreground">Project Overview</h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/60 md:text-lg">{item.summary}</p>
              <p className="mt-4 text-base leading-relaxed text-foreground/60">
                Our team managed this project end-to-end — from initial concept and structural
                design through in-house fabrication, logistics and on-site installation — working
                closely with the {item.client} team to hit every deadline and brand guideline
                along the way.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="container-edge">
          <h2 className="font-display text-2xl font-semibold text-foreground">More Projects</h2>
          <div className="mt-10">
            <PortfolioGrid items={fallbackRelated} />
          </div>
        </div>
      </section>
    </>
  );
}
