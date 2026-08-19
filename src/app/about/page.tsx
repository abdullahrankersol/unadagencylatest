import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { company, milestones, pillars, stats, team } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us — UNAD Agency",
  description:
    "Learn about UNAD's story, leadership team and the values driving our advertising and signage work across the region.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About UNAD"
        crumb="About"
        title="Fifteen years of turning brands into landmarks."
        description="We're a full-service advertising agency built by fabricators, strategists and storytellers who believe brand experience should be felt in the real world, not just on a screen."
      />

      <section className="py-24" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="container-edge grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line">
              <Image
                src="https://images.pexels.com/photos/36522033/pexels-photo-36522033.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1400"
                alt="UNAD production facility"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Built from the workshop up."
            />
            <Reveal delay={0.15}>
              <p className="mt-6 text-base leading-relaxed text-foreground/60 md:text-lg">
                {company.fullName} started in {company.founded} as a five-person fabrication
                workshop in Dubai's Al Quoz industrial district. What began as a signage shop grew,
                project by project, into a full-service advertising group spanning exhibitions,
                branding, events, retail and digital.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mt-4 text-base leading-relaxed text-foreground/60 md:text-lg">
                Today our teams operate from four countries, but the philosophy hasn&apos;t
                changed: keep production in-house, keep quality non-negotiable, and never let a
                brand blend into the background.
              </p>
            </Reveal>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-bold text-foreground md:text-3xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <span className="text-xs uppercase tracking-wide text-foreground/45">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: "var(--color-ink)" }}>
        <div className="container-edge">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Four principles behind every project"
            align="center"
          />
          <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => (
              <StaggerItem key={pillar.title}>
                <div className="card-glow h-full rounded-3xl border border-line bg-foreground/[0.03] p-8">
                  <span className="font-display text-3xl font-bold text-foreground/20">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/55">
                    {pillar.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="container-edge">
          <SectionHeading eyebrow="Milestones" title="Fifteen years of growth" />
          <div className="relative mt-16 border-l border-line pl-8 md:pl-12">
            {milestones.map((milestone, i) => (
              <Reveal key={milestone.year} delay={i * 0.06}>
                <div className="relative pb-14 last:pb-0">
                  <span
                    className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-4 md:-left-[57px]"
                    style={{ borderColor: "var(--color-surface)", background: "var(--color-accent)" }}
                  />
                  <span className="font-display text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--color-accent)" }}>
                    {milestone.year}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-foreground md:text-2xl">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-foreground/55 md:text-base">
                    {milestone.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: "var(--color-ink)" }}>
        <div className="container-edge">
          <SectionHeading eyebrow="Leadership" title="The people behind the work" />
          <StaggerGroup className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="group relative overflow-hidden rounded-3xl border border-line">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-display text-base font-semibold text-foreground">{member.name}</h3>
                    <p className="text-xs text-foreground/60">{member.role}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="container-edge flex flex-col items-center gap-6 rounded-[2.5rem] border border-line bg-foreground/[0.03] px-8 py-16 text-center">
          <h2 className="max-w-2xl font-display text-3xl font-semibold text-foreground md:text-4xl">
            Ready to work with a team that builds what it designs?
          </h2>
          <MagneticButton href="/contact" className="!px-8 !py-4 text-sm">
            Start a Conversation
            <ArrowUpRight size={16} />
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
