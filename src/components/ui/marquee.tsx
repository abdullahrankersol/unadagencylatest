import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Marquee({
  children,
  className,
  reverse = false,
  fast = false,
}: {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  fast?: boolean;
}) {
  return (
    <div className={cn("group relative flex overflow-hidden", className)}>
      <div
        className={cn(
          "flex shrink-0 items-center gap-10 pr-10",
          fast ? "animate-marquee-fast" : "animate-marquee",
          reverse && "[animation-direction:reverse]",
          "group-hover:[animation-play-state:paused]",
        )}
      >
        {children}
      </div>
      <div
        aria-hidden
        className={cn(
          "flex shrink-0 items-center gap-10 pr-10",
          fast ? "animate-marquee-fast" : "animate-marquee",
          reverse && "[animation-direction:reverse]",
          "group-hover:[animation-play-state:paused]",
        )}
      >
        {children}
      </div>
    </div>
  );
}
