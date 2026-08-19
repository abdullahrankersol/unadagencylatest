import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PortfolioExplorer } from "@/components/portfolio-explorer";

export const metadata: Metadata = {
  title: "Portfolio — UNAD Agency",
  description:
    "Browse UNAD's portfolio of signage, exhibition stands, events, retail activations, branding and outdoor advertising projects.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        crumb="Portfolio"
        title="Selected projects, all built in-house."
        description="Filter by discipline to explore signage, exhibitions, events, retail and branding work delivered for clients across the region."
      />
      <section className="pb-28" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="container-edge">
          <PortfolioExplorer />
        </div>
      </section>
    </>
  );
}
