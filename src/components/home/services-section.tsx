import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServicesGrid } from "@/components/services-grid";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section className="py-28" style={{ backgroundColor: "var(--color-ink)" }}>
      <div className="container-edge">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What We Do"
            title="One agency. Every discipline."
            description="From brand strategy to fabrication and installation, our teams work under one roof so nothing gets lost in translation."
          />
          <MagneticButton href="/services" variant="outline" className="!px-6 !py-3.5 shrink-0 text-xs">
            All Services
            <ArrowUpRight size={14} />
          </MagneticButton>
        </div>

        <div className="mt-14">
          <ServicesGrid services={services} />
        </div>
      </div>
    </section>
  );
}
