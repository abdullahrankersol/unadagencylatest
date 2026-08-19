"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { VideoModal } from "@/components/ui/video-modal";
import { company, pillars } from "@/data/site";

export function AboutSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative overflow-hidden py-28" style={{ backgroundColor: "var(--color-surface)" }}>
      <div className="container-edge grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading eyebrow="Who We Are" title="The Art of Impacting" />
          <Reveal delay={0.2}>
            <p className="mt-6 text-base leading-relaxed text-foreground/60 md:text-lg">
              {company.fullName} has grown from a single Dubai workshop into a full-service
              advertising group operating across four countries. We are a premier partner for
              events, exhibitions, signage, promotions and brand campaigns — with a vision to
              become the region&apos;s most trusted name in advertising craft.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-4 text-base leading-relaxed text-foreground/60 md:text-lg">
              Whether it&apos;s the slightest tip of a pen or a full-fledged exhibition stand, our
              in-house strategists, designers and fabricators handle it all — end to end, under
              one roof.
            </p>
          </Reveal>

          <StaggerGroup className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <div className="group">
                  <span className="font-display text-2xl font-bold text-foreground/20 transition-colors group-hover:text-foreground/80">
                    0{pillars.indexOf(pillar) + 1}
                  </span>
                  <h3 className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-foreground/50">{pillar.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <div className="relative">
          <Reveal>
            <div className="relative ml-auto aspect-[4/5] w-[80%] overflow-hidden rounded-3xl border border-line">
              <Image
                src="https://images.pexels.com/photos/36894415/pexels-photo-36894415.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900"
                alt="UNAD studio at work"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 80vw"
              />
            </div>
          </Reveal>
          <Reveal delay={0.2} className="absolute -bottom-10 -left-2 w-[55%] sm:left-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border-4 shadow-2xl" style={{ borderColor: "var(--color-surface)" }}>
              <Image
                src="https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900"
                alt="UNAD signage installation"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, 45vw"
              />
            </div>
          </Reveal>

          <button
            onClick={() => setOpen(true)}
            className="group absolute right-4 top-4 z-10 flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-md transition-transform hover:scale-110 sm:right-10 sm:top-10"
            aria-label="Play showreel"
          >
            <span className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-white/30" />
            <Play size={22} fill="currentColor" />
          </button>
        </div>
      </div>

      <VideoModal
        open={open}
        onClose={() => setOpen(false)}
        videoUrl="https://videos.pexels.com/video-files/8064422/8064422-uhd_3840_2160_30fps.mp4"
      />
    </section>
  );
}
