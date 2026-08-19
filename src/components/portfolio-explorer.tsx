"use client";

import { useMemo, useState } from "react";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { portfolioCategories, portfolioItems, type PortfolioCategory } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function PortfolioExplorer() {
  const [active, setActive] = useState<PortfolioCategory | "All">("All");

  const filtered = useMemo(() => {
    if (active === "All") return portfolioItems;
    return portfolioItems.filter((item) => item.category === active);
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {["All", ...portfolioCategories].map((category) => (
          <button
            key={category}
            onClick={() => setActive(category as PortfolioCategory | "All")}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wide transition-colors sm:text-sm",
              active === category
                ? "border-transparent text-on-accent"
                : "border-line text-foreground/60 hover:border-foreground/40 hover:text-foreground",
            )}
            style={
              active === category
                ? { background: "linear-gradient(90deg, var(--color-accent), var(--color-accent-2))" }
                : undefined
            }
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-12">
        <PortfolioGrid items={filtered} key={active} />
      </div>
    </div>
  );
}
