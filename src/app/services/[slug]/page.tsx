import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { getServiceBySlug, services } from "@/data/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} — UNAD Agency`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-40" style={{ backgroundColor: "var(--color-ink)" }}>
        <div
          className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[420px] rounded-full opacity-20 blur-[140px]"
          style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))" }}
        />
        <div className="container-edge relative">
          <Reveal>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-foreground/50 transition-colors hover:text-foreground"
            >
              <ArrowLeft size={14} />
              All Services
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.2rem,5.5vw,4.2rem)] font-semibold leading-[1.02] tracking-tight text-foreground">
              {service.title}
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/60 md:text-lg">
              {service.shortDescription}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-8" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="container-edge grid gap-14 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="relative aspect-[16/11] overflow-hidden rounded-3xl border border-line">
              <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(min-width: 1024px) 55vw, 100vw" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-foreground">Overview</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-base leading-relaxed text-foreground/60">{service.description}</p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-8 space-y-3">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 rounded-2xl border border-line bg-foreground/[0.03] px-4 py-3">
                    <span
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                      style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))" }}
                    >
                      <Check size={13} className="text-on-accent" />
                    </span>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10">
                <MagneticButton href="/contact" className="!px-8 !py-4 text-sm">
                  Request a Proposal
                  <ArrowUpRight size={16} />
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: "var(--color-ink)" }}>
        <div className="container-edge">
          <h2 className="font-display text-2xl font-semibold text-foreground">Related Services</h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="card-glow group rounded-3xl border border-line bg-foreground/[0.03] p-6 transition-colors hover:bg-foreground/[0.06]"
              >
                <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-foreground/55">{item.shortDescription}</p>
                <span className="mt-4 flex items-center gap-2 text-sm font-medium text-foreground/70 group-hover:text-foreground">
                  Learn more
                  <ArrowUpRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
