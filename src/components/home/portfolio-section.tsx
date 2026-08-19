import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { portfolioItems } from "@/data/portfolio";

export function PortfolioSection() {
  const featured = portfolioItems.slice(0, 6);

  return (
    <section className="py-28" style={{ backgroundColor: "var(--color-surface)" }}>
      <div className="container-edge">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Selected Work"
            title="Campaigns that command attention."
            description="A snapshot of the signage, exhibitions and activations we've shipped across the region."
          />
          <MagneticButton href="/portfolio" variant="outline" className="!px-6 !py-3.5 shrink-0 text-xs">
            Full Portfolio
            <ArrowUpRight size={14} />
          </MagneticButton>
        </div>

        <div className="mt-14">
          <PortfolioGrid items={featured} />
        </div>
      </div>
    </section>
  );
}
