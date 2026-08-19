"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { events } from "@/data/events";

export function EventsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-28" style={{ backgroundColor: "var(--color-ink)" }}>
      <div className="container-edge">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="On the Road"
            title="Upcoming Events & Exhibitions"
            description="Find us on the show floor building booths, activations and everything in between."
          />
          <div className="flex gap-3">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-foreground transition-colors hover:border-foreground/40 disabled:opacity-30"
              aria-label="Previous event"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-foreground transition-colors hover:border-foreground/40 disabled:opacity-30"
              aria-label="Next event"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="mt-14 overflow-hidden" ref={emblaRef}>
          <div className="-ml-6 flex">
            {events.map((event) => (
              <div
                key={event.slug}
                className="min-w-0 shrink-0 grow-0 basis-full pl-6 sm:basis-1/2 lg:basis-1/3"
              >
                <Link
                  href="/contact"
                  className="card-glow group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-foreground/[0.03]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <span
                      className="absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-on-accent"
                      style={{ background: "var(--color-accent-2)" }}
                    >
                      {event.country}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3 className="font-display text-lg font-semibold text-foreground">{event.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-foreground/50">
                      <CalendarDays size={14} />
                      {event.dateLabel}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-foreground/50">
                      <MapPin size={14} />
                      {event.location}
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/60">{event.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
