import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Insights — UNAD Agency",
  description:
    "Field notes on advertising, exhibitions, signage and brand experience from the UNAD team.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        crumb="Insights"
        title="Ideas from the studio floor."
        description="Perspectives on advertising, fabrication and brand experience, written by the people who build it."
      />

      <section
        className="pt-10 pb-28 md:pt-14"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container-edge">
          <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
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
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
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

                    <p className="text-sm leading-relaxed text-foreground/55">
                      {post.excerpt}
                    </p>

                    <span className="mt-auto flex items-center gap-2 pt-2 text-sm font-medium text-foreground/70 transition-colors group-hover:text-foreground">
                      Read article
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}