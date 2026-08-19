"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import type { PortfolioItem } from "@/data/portfolio";

export function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  if (items.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-line py-24 text-center text-foreground/40">
        No projects found in this category yet.
      </div>
    );
  }

  return (
    <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <StaggerItem key={item.slug}>
          <article className="card-glow group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-foreground/[0.02]">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-95" />
              <span
                className="absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-on-accent"
                style={{ background: "var(--color-lime)" }}
              >
                {item.category}
              </span>
              <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-between p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-xs font-medium uppercase tracking-wider text-foreground/70">
                  {item.location} · {item.year}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-on-accent">
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-between gap-3 p-6">
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-foreground/40">
                  {item.client}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-foreground">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-foreground/55">{item.summary}</p>
            </div>
          </article>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
