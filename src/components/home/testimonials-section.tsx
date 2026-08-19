"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  function next() {
    setIndex((i) => (i + 1) % testimonials.length);
  }
  function prev() {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }

  return (
    <section className="relative overflow-hidden py-28" style={{ backgroundColor: "var(--color-surface)" }}>
      <div className="noise-overlay opacity-60" />
      <div className="container-edge relative">
        <SectionHeading eyebrow="Client Words" title="Trusted by ambitious brands" align="center" />

        <div className="relative mx-auto mt-16 max-w-3xl text-center">
          <Quote className="mx-auto mb-6 text-foreground/15" size={56} />
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-display text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
                &ldquo;{current.quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border border-line">
                  <Image src={current.image} alt={current.name} fill className="object-cover" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground">{current.name}</p>
                  <p className="text-xs text-foreground/50">
                    {current.role}, {current.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-foreground transition-colors hover:border-foreground/40"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={16} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setIndex(i)}
                  className="h-1.5 rounded-full transition-all"
                  style={{
                    width: i === index ? "24px" : "8px",
                    backgroundColor: i === index ? "var(--color-accent)" : "rgba(255,255,255,0.2)",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-foreground transition-colors hover:border-foreground/40"
              aria-label="Next testimonial"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
