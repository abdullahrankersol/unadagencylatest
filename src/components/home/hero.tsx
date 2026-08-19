"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, PlayCircle } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { stats } from "@/data/site";

const headlineWords = ["Bold", "Ideas.", "Built", "to", "Be", "Seen."];

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-black pt-32">
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover opacity-45"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/photos/34665162/berlin-city-at-night-night-city-timelapse-34665162.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000"
        >
          <source src="https://videos.pexels.com/video-files/34665162/14693594_3840_2160_24fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
      </div>

      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-30 blur-[160px]"
        style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))" }}
      />

      <div className="container-edge relative z-10 flex flex-1 flex-col justify-center pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 backdrop-blur-sm"
          >
            <span className="h-2 w-2 animate-pulse rounded-full" style={{ backgroundColor: "var(--color-lime)" }} />
            UAE · KSA · Egypt · Bahrain
          </span>
        </motion.div>

        <h1 className="mt-8 font-display text-[clamp(2.8rem,9vw,7.5rem)] font-semibold uppercase leading-[0.94] tracking-tight text-white">
          {headlineWords.map((word, i) => (
            <span key={word + i} className="mr-4 inline-block overflow-hidden align-bottom last:mr-0">
              <motion.span
                className={`inline-block ${word === "Seen." ? "gradient-text" : ""}`}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.85, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
        >
          UNAD is a full-service advertising agency crafting signage, exhibitions, activations
          and campaigns for the region&apos;s most ambitious brands — from first sketch to final
          installation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <MagneticButton href="/contact" className="!px-8 !py-4 text-sm">
            Start a Project
            <ArrowUpRight size={16} />
          </MagneticButton>
          <MagneticButton
            href="/portfolio"
            variant="outline"
            className="!px-8 !py-4 text-sm !border-white/30 !text-white hover:!border-white/60"
          >
            <PlayCircle size={16} />
            View Our Work
          </MagneticButton>
        </motion.div>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-md">
        <div className="container-edge grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + i * 0.08 }}
              className="flex flex-col gap-1"
            >
              <div className="font-display text-3xl font-bold text-white md:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <span className="text-xs uppercase tracking-[0.18em] text-white/50 md:text-sm">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-28 left-1/2 z-10 hidden -translate-x-1/2 md:block"
      >
        <ArrowDown className="text-white/40" size={22} />
      </motion.div>
    </section>
  );
}
