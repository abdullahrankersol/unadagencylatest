import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { company, locations } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact — UNAD Agency",
  description:
    "Get in touch with UNAD to start your next signage, exhibition, event or brand campaign.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        crumb="Contact"
        title="Let's build your next campaign."
        description="Tell us about your brand and goals — our team typically responds within one business day."
      />

      <section
        className="pt-10 pb-28 md:pt-14"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container-edge grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          {/* Contact Information */}
          <div>
            <Reveal>
              <div className="rounded-3xl border border-line bg-foreground/[0.03] p-8">
                <h2 className="font-display text-xl font-semibold text-foreground">
                  Direct Contact
                </h2>

                <div className="mt-6 space-y-4">
                  <a
                    href={company.phoneHref}
                    className="flex items-center gap-3 text-sm text-foreground/70 transition-colors hover:text-foreground"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/5">
                      <Phone size={16} />
                    </span>
                    {company.phone}
                  </a>

                  <a
                    href={company.emailHref}
                    className="flex items-center gap-3 text-sm text-foreground/70 transition-colors hover:text-foreground"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/5">
                      <Mail size={16} />
                    </span>
                    {company.email}
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Locations */}
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4">
                {locations.map((loc) => (
                  <div
                    key={loc.city}
                    className="rounded-3xl border border-line bg-foreground/[0.02] p-6"
                  >
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-base font-semibold text-foreground">
                        {loc.city}
                      </h3>

                      {loc.isHQ && (
                        <span
                          className="rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-on-accent"
                          style={{ background: "var(--color-lime)" }}
                        >
                          HQ
                        </span>
                      )}
                    </div>

                    <div className="mt-3 flex items-start gap-2 text-sm text-foreground/55">
                      <MapPin
                        size={14}
                        className="mt-0.5 shrink-0"
                      />
                      {loc.address}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Contact Form */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-line bg-foreground/[0.03] p-8 sm:p-10">
              <h2 className="font-display text-xl font-semibold text-foreground">
                Start a Project
              </h2>

              <p className="mt-2 text-sm text-foreground/55">
                Fill in the form and our team will get back to you with next
                steps.
              </p>

              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}