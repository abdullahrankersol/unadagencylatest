// "use client";

// import { Moon, Sun } from "lucide-react";
// import { AnimatePresence, motion } from "framer-motion";
// import { useTheme } from "@/components/theme-provider";
// import { cn } from "@/lib/utils";

// const TRACK_WIDTH = 150;
// const KNOB_SIZE = 32;
// const PADDING = 6;

// export function ThemeToggle({ className }: { className?: string }) {
//   const { theme, toggleTheme } = useTheme();
//   const isDark = theme === "dark";

//   return (
//     <button
//       type="button"
//       onClick={toggleTheme}
//       aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
//       style={{ width: TRACK_WIDTH, height: KNOB_SIZE + PADDING * 2 }}
//       className={cn(
//         "relative shrink-0 overflow-hidden rounded-full border border-line bg-surface-2",
//         className,
//       )}
//     >
//       <AnimatePresence mode="wait" initial={false}>
//         <motion.span
//           key={isDark ? "night" : "day"}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.2, ease: "easeOut" }}
//           className={cn(
//             "absolute top-1/2 -translate-y-1/2 text-xs font-semibold uppercase tracking-wide text-foreground",
//             isDark ? "right-4" : "left-4",
//           )}
//         >
//           {isDark ? "Night mode" : "Day mode"}
//         </motion.span>
//       </AnimatePresence>

// <motion.span
//   animate={{ x: isDark ? PADDING : TRACK_WIDTH - KNOB_SIZE - PADDING }}
//         transition={{ type: "spring", stiffness: 300, damping: 30 }}
//         style={{ width: KNOB_SIZE, height: KNOB_SIZE, top: PADDING }}
//         className="absolute flex items-center justify-center rounded-full bg-white shadow-md"
//       >
//         <AnimatePresence mode="wait" initial={false}>
//           <motion.span
//             key={isDark ? "moon" : "sun"}
//             initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
//             animate={{ opacity: 1, rotate: 0, scale: 1 }}
//             exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
//             transition={{ duration: 0.25, ease: "easeOut" }}
//           >
//             {isDark ? (
//               <Moon size={14} className="text-accent" />
//             ) : (
//               <Sun size={14} className="text-accent" />
//             )}
//           </motion.span>
//         </AnimatePresence>
//       </motion.span>
//     </button>
//   );
// }
"use client";

import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

// Adjusted dimensions for a compact, icon-only pill shape
const TRACK_WIDTH = 80;
const KNOB_SIZE = 32;
const PADDING = 6;

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      style={{ width: TRACK_WIDTH, height: KNOB_SIZE + PADDING * 2 }}
      className={cn(
        "relative shrink-0 overflow-hidden rounded-full border border-line transition-colors duration-300",
        // Match the background colors from the image
        isDark ? "bg-[#2d2d2d]" : "bg-white",
        className,
      )}
    >
      {/* Track Background Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-[14px]">
        <Sun
          size={16}
          className={cn(
            "transition-opacity duration-300",
            isDark ? "text-white opacity-100" : "opacity-0"
          )}
        />
        <Moon
          size={16}
          className={cn(
            "transition-opacity duration-300",
            !isDark ? "text-gray-400 opacity-100" : "opacity-0"
          )}
        />
      </div>

      {/* Sliding Knob */}
      <motion.span
        animate={{ x: isDark ? TRACK_WIDTH - KNOB_SIZE - PADDING : PADDING }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        style={{ width: KNOB_SIZE, height: KNOB_SIZE, top: PADDING, left: 0 }}
        // Using bg-orange-500. You can change this to bg-accent if your Tailwind config uses that for orange.
        className="absolute flex items-center justify-center rounded-full bg-orange-500 shadow-md"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {isDark ? (
              <Moon size={16} className="text-white" />
            ) : (
              <Sun size={16} className="text-white" />
            )}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </button>
  );
}