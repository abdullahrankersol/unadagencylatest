"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Compass,
  Lightbulb,
  Megaphone,
  MonitorPlay,
  PartyPopper,
  Printer,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import type { Service } from "@/data/services";

const icons: Record<string, LucideIcon> = {
  Compass,
  Lightbulb,
  Building2,
  PartyPopper,
  ShoppingBag,
  Megaphone,
  MonitorPlay,
  Printer,
};

export function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <StaggerGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service, index) => {
        const Icon = icons[service.icon] ?? Compass;
        return (
          <StaggerItem key={service.slug}>
            <Link
              href={`/services/${service.slug}`}
              className="card-glow group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-line bg-foreground/[0.03] p-7 transition-colors duration-300 hover:bg-foreground/[0.06]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-semibold text-foreground/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
                    style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))" }}
                  >
                    <Icon size={20} className="text-on-accent" />
                  </div>
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold leading-snug text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/55">
                  {service.shortDescription}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-foreground/70 transition-colors group-hover:text-foreground">
                Explore service
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </Link>
          </StaggerItem>
        );
      })}
    </StaggerGroup>
  );
}
