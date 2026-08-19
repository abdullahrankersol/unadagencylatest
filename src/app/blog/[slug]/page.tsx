import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { getBlogPostBySlug, blogPosts } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — UNAD Agency`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <section className="relative overflow-hidden pb-10 pt-40" style={{ backgroundColor: "var(--color-ink)" }}>
        <div className="container-edge relative max-w-3xl">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-foreground/50 transition-colors hover:text-foreground"
            >
              <ArrowLeft size={14} />
              All Insights
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <span
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em]"
              style={{ color: "var(--color-accent)" }}
            >
              {post.category}
            </span>
          </Reveal>
          <Reveal delay={0.14}>
            <h1 className="mt-4 font-display text-[clamp(2rem,5vw,3.2rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
              {post.title}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-sm text-foreground/45">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
              · {post.readTime}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24" style={{ backgroundColor: "var(--color-ink)" }}>
        <div className="container-edge max-w-3xl">
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-line">
              <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(min-width: 768px) 768px, 100vw" priority />
            </div>
          </Reveal>

          <div className="mt-10 space-y-6">
            {post.content.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-base leading-relaxed text-foreground/70 md:text-lg">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-14 flex flex-col items-start gap-4 rounded-3xl border border-line bg-foreground/[0.03] p-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-display text-lg font-semibold text-foreground">
                Have a project idea inspired by this?
              </p>
              <MagneticButton href="/contact" className="!px-6 !py-3.5 text-xs">
                Let&apos;s Talk
                <ArrowUpRight size={14} />
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24" style={{ backgroundColor: "var(--color-ink)" }}>
        <div className="container-edge">
          <h2 className="font-display text-2xl font-semibold text-foreground">More Insights</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {more.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="card-glow group flex items-center gap-5 rounded-3xl border border-line bg-foreground/[0.03] p-5 transition-colors hover:bg-foreground/[0.06]"
              >
                <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-2xl">
                  <Image src={item.image} alt={item.title} fill className="object-cover" sizes="128px" />
                </div>
                <div>
                  <span className="text-xs text-foreground/40">{item.category}</span>
                  <h3 className="mt-1 font-display text-base font-semibold text-foreground group-hover:text-foreground/80">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
