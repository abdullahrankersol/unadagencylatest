import Image from "next/image";
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
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
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

export function ServicesShowcase({ services }: { services: Service[] }) {
  return (
    <div className="flex flex-col gap-20 md:gap-28">
      {services.map((service, index) => {
        const Icon = icons[service.icon] ?? Compass;
        const reversed = index % 2 === 1;

        return (
          <div
            key={service.slug}
            className={cn(
              "grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16",
            )}
          >
            <Reveal className={cn(reversed && "md:order-2")}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-line">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div
                  className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))" }}
                >
                  <Icon size={22} className="text-on-accent" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className={cn(reversed && "md:order-1")}>
              <span className="font-display text-sm font-semibold text-foreground/30">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold leading-snug text-foreground md:text-3xl">
                {service.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/60">
                {service.description}
              </p>
              {service.features.length > 0 && (
                <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-foreground/70"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              <Link
                href={`/services/${service.slug}`}
                className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                Explore service
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </Reveal>
          </div>
        );
      })}
    </div>
  );
}