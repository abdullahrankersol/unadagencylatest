// "use client";

// import { motion } from "framer-motion";
// import { ArrowDown, ArrowUpRight, PlayCircle } from "lucide-react";
// import { MagneticButton } from "@/components/ui/magnetic-button";
// import { AnimatedCounter } from "@/components/ui/animated-counter";
// import { stats } from "@/data/site";

// const headlineWords = ["Bold", "Ideas.", "Built", "to", "Be", "Seen."];

// export function Hero() {
//   return (
//     <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-black pt-32">
// <div className="absolute inset-0 z-0">
//   <video
//     className="h-full w-full object-cover"
//     autoPlay
//     muted
//     loop
//     playsInline
//     poster="https://images.pexels.com/photos/34665162/berlin-city-at-night-night-city-timelapse-34665162.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000"
//   >
//     <source src="https://videos.pexels.com/video-files/34665162/14693594_3840_2160_24fps.mp4" type="video/mp4" />
//   </video>
//   <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
// </div>
// {/* <div className="absolute inset-0 z-0">
//   <video
//     className="h-full w-full object-cover"
//     autoPlay
//     muted
//     loop
//     playsInline
//     poster="https://images.pexels.com/photos/34665162/berlin-city-at-night-night-city-timelapse-34665162.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000"
//   >
//     <source src="https://videos.pexels.com/video-files/34665162/14693594_3840_2160_24fps.mp4" type="video/mp4" />
//   </video>
// </div> */}
//       <div
//         className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-30 blur-[160px]"
//         style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))" }}
//       />

//       <div className="container-edge relative z-10 flex flex-1 flex-col justify-center pb-24">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="flex items-center gap-3"
//         >
//           <span
//             className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 backdrop-blur-sm"
//           >
//             <span className="h-2 w-2 animate-pulse rounded-full" style={{ backgroundColor: "var(--color-lime)" }} />
//             UAE · KSA · Egypt · Bahrain
//           </span>
//         </motion.div>

//         {/* <h1 className="mt-8 font-display text-[clamp(2.8rem,9vw,7.5rem)] font-semibold uppercase leading-[0.94] tracking-tight text-white"> */}
//         <h1 className="mt-8 font-display text-[clamp(2.8rem,10vw,8rem)] font-black uppercase leading-[0.92] tracking-tighter text-foreground">
//           {headlineWords.map((word, i) => (
//             <span key={word + i} className="mr-4 inline-block overflow-hidden align-bottom last:mr-0">
//               <motion.span
//                 className={`inline-block ${word === "Seen." ? "gradient-text" : ""}`}
//                 initial={{ y: "110%" }}
//                 animate={{ y: "0%" }}
//                 transition={{ duration: 0.85, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
//               >
//                 {word}
//               </motion.span>
//             </span>
//           ))}
//         </h1>

//         <motion.p
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.7 }}
//           className="mt-8 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
//         >
//           UNAD is a full-service advertising agency crafting signage, exhibitions, activations
//           and campaigns for the region&apos;s most ambitious brands — from first sketch to final
//           installation.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.85 }}
//           className="mt-10 flex flex-wrap items-center gap-5"
//         >
//           <MagneticButton href="/contact" className="!px-8 !py-4 text-sm">
//             Start a Project
//             <ArrowUpRight size={16} />
//           </MagneticButton>
//           <MagneticButton
//             href="/portfolio"
//             variant="outline"
//             className="!px-8 !py-4 text-sm !border-white/30 !text-white hover:!border-white/60"
//           >
//             <PlayCircle size={16} />
//             View Our Work
//           </MagneticButton>
//         </motion.div>
//       </div>

//      <div className="relative z-10 border-t border-line bg-ink backdrop-blur-md">
//   <div className="container-edge grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
//     {stats.map((stat, i) => (
//       <motion.div
//         key={stat.label}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.9 + i * 0.08 }}
//         className="flex flex-col gap-1"
//       >
//         <div className="font-display text-3xl font-bold text-foreground md:text-4xl">
//           <AnimatedCounter value={stat.value} suffix={stat.suffix} />
//         </div>
//         <span className="text-xs uppercase tracking-[0.18em] text-foreground/50 md:text-sm">
//           {stat.label}
//         </span>
//       </motion.div>
//     ))}
//   </div>
// </div>

//       <motion.div
//         animate={{ y: [0, 8, 0] }}
//         transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute bottom-28 left-1/2 z-10 hidden -translate-x-1/2 md:block"
//       >
//         <ArrowDown className="text-white/40" size={22} />
//       </motion.div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { stats } from "@/data/site";


const slides = [
  { 
    lines: [
      ["Bold", "Ideas"], 
      ["Built", "to", "Be", "Seen..."]
    ], 
    accent: "Seen..." 
  },
  { 
    lines: [
      ["Your", "Vision"], 
      ["Made", "Unmissable"]
    ], 
    accent: "Unmissable" 
  },
  { 
    lines: [
      ["Grab", "Attention"], 
      ["Create", "Impact!"]
    ], 
    accent: "Impact!" 
  },
];

// Increased duration so slides change slower
const SLIDE_DURATION = 7000; 

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[active];

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-black pt-24">
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/photos/34665162/berlin-city-at-night-night-city-timelapse-34665162.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000"
        >
          <source src="https://videos.pexels.com/video-files/34665162/14693594_3840_2160_24fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
      </div>

      {/* Vertical slide dots */}
      <div className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="group relative flex h-6 w-6 items-center justify-center"
          >
            <span
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                i === active ? "scale-125 bg-white" : "bg-white/30 group-hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>

      <div className="container-edge relative z-10">
        <AnimatePresence mode="wait">
          <motion.h1
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            /* Increased duration to 1s and smoothed easing */
            transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1] }} 
            /* Relaxed leading-[1.1] for better line spacing */
            className="font-display text-[clamp(2.8rem,9vw,7.5rem)] font-black uppercase leading-[1.1] tracking-tight text-white"
          >
          {currentSlide.lines.map((line, lineIndex) => (
  <span key={lineIndex} className="block">
    {line.map((word, wordIndex) => (
      <span key={word + wordIndex} className="mr-4 mb-2 inline-block last:mr-0">
        <span className={word === currentSlide.accent ? "gradient-text" : ""}>
          {word}
        </span>
      </span>
    ))}
  </span>
))}
          </motion.h1>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 max-w-xl text-base font-semibold leading-relaxed text-white/90"
        >
          The fastest-growing full-service advertising agency in the Middle East.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-end gap-x-12 gap-y-5"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1.5">
              <div className="font-display text-4xl font-black leading-none text-accent md:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-white/70">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
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
    </section>
  );
}