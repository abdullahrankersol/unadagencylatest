import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

export default function NotFound() {
  return (
    <section
      className="flex min-h-[80vh] flex-col items-center justify-center px-6 pt-32 text-center"
      style={{ backgroundColor: "var(--color-ink)" }}
    >
      <span className="font-display text-[clamp(5rem,16vw,10rem)] font-bold leading-none gradient-text">
        404
      </span>
      <h1 className="mt-4 font-display text-2xl font-semibold text-foreground md:text-3xl">
        This page went missing on the show floor.
      </h1>
      <p className="mt-4 max-w-md text-foreground/55">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back
        on track.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <MagneticButton href="/" className="!px-7 !py-3.5 text-xs">
          Back to Home
          <ArrowUpRight size={14} />
        </MagneticButton>
        <Link href="/contact" className="text-sm font-medium text-foreground/60 underline underline-offset-4 hover:text-foreground">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
