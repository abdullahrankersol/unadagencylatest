import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ServicesGrid } from "@/components/services-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services — UNAD Agency",
  description:
    "Explore UNAD's full-service capabilities: brand strategy, signage, exhibitions, events, retail branding, outdoor advertising, digital and fabrication.",
};

const process = [
  {
    step: "01",
    title: "Discover",
    description: "We map your audience, competitors and objectives before proposing a single idea.",
  },
  {
    step: "02",
    title: "Design",
    description: "Concepts are developed, tested and refined with your team until they're bulletproof.",
  },
  {
    step: "03",
    title: "Produce",
    description: "In-house fabrication, printing and digital production keep quality and timelines tight.",
  },
  {
    step: "04",
    title: "Deliver",
    description: "Install, launch and measure — with reporting that ties creative back to results.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        crumb="Services"
        title="Every discipline a modern brand needs."
        description="From first strategy workshop to final installation, our teams work under one roof so nothing gets lost between departments — or countries."
      />

      <section className="py-24" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="container-edge">
          <ServicesGrid services={services} />
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: "var(--color-ink)" }}>
        <div className="container-edge">
          <SectionHeading eyebrow="How We Work" title="A process built for accountability" />
          <StaggerGroup className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <StaggerItem key={item.step}>
                <div className="relative border-t border-line pt-6">
                  <span className="font-display text-4xl font-bold gradient-text">{item.step}</span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/55">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="container-edge flex flex-col items-center gap-6 rounded-[2.5rem] border border-line bg-foreground/[0.03] px-8 py-16 text-center">
          <h2 className="max-w-2xl font-display text-3xl font-semibold text-foreground md:text-4xl">
            Not sure which service fits your brand?
          </h2>
          <p className="max-w-xl text-foreground/55">
            Tell us about your goals and we&apos;ll recommend the right mix of services and budget.
          </p>
          <MagneticButton href="/contact" className="!px-8 !py-4 text-sm">
            Talk to Our Team
            <ArrowUpRight size={16} />
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
