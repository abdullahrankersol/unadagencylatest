import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { blogPosts } from "@/data/blog";

export function BlogSection() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="py-28" style={{ backgroundColor: "var(--color-ink)" }}>
      <div className="container-edge">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Insights"
            title="Ideas from the studio floor"
            description="Field notes on advertising, fabrication and brand experience from the UNAD team."
          />
          <MagneticButton href="/blog" variant="outline" className="!px-6 !py-3.5 shrink-0 text-xs">
            All Articles
            <ArrowUpRight size={14} />
          </MagneticButton>
        </div>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="card-glow group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-foreground/[0.02]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span
                    className="absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-on-accent"
                    style={{ background: "var(--color-lime)" }}
                  >
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="text-xs text-foreground/40">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}{" "}
                    · {post.readTime}
                  </span>
                  <h3 className="font-display text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-foreground/80">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground/55">{post.excerpt}</p>
                  <span className="mt-auto flex items-center gap-2 pt-2 text-sm font-medium text-foreground/70 transition-colors group-hover:text-foreground">
                    Read article
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
