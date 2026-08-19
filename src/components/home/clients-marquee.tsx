import { Marquee } from "@/components/ui/marquee";
import { clientLogos } from "@/data/site";

export function ClientsMarquee() {
  return (
    <section className="border-y border-line py-10" style={{ backgroundColor: "var(--color-ink)" }}>
      <div className="container-edge mb-6 flex items-center justify-center">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/40">
          Trusted by leading regional brands
        </span>
      </div>
      <Marquee>
        {[...clientLogos, ...clientLogos].map((name, i) => (
          <span
            key={name + i}
            className="font-display text-2xl font-bold uppercase tracking-tight text-foreground/25 transition-colors hover:text-foreground/60 md:text-3xl"
          >
            {name}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
