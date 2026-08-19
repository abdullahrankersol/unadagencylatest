"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center rounded-full border border-line text-foreground transition-colors hover:bg-foreground/5",
        className,
      )}
    >
      <Sun
        size={16}
        className={cn(
          "absolute transition-all duration-300",
          theme === "dark" ? "scale-100 opacity-100" : "scale-0 opacity-0",
        )}
      />
      <Moon
        size={16}
        className={cn(
          "absolute transition-all duration-300",
          theme === "light" ? "scale-100 opacity-100" : "scale-0 opacity-0",
        )}
      />
    </button>
  );
}
