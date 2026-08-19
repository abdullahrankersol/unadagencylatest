import { Marquee } from "@/components/ui/marquee";

const words = [
  "Brand Strategy",
  "Signage",
  "Exhibitions",
  "Activations",
  "Retail Branding",
  "Outdoor Advertising",
  "Digital & Motion",
  "Fabrication",
];

export function StatementMarquee() {
  return (
    <section
      className="relative overflow-hidden border-y border-line py-10"
      style={{ backgroundColor: "var(--color-ink)" }}
    >
      <Marquee fast>
        {[...words, ...words].map((word, i) => (
          <span key={word + i} className="flex items-center gap-10">
            <span className="font-display text-4xl font-semibold uppercase tracking-tight text-foreground/90 md:text-6xl">
              {word}
            </span>
            <span
              className="h-3 w-3 shrink-0 rounded-full"
              style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))" }}
            />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
