"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { services } from "@/data/services";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setSuccessMessage(data.message);
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 rounded-3xl border border-line bg-foreground/[0.03] px-8 py-16 text-center"
      >
        <CheckCircle2 size={48} style={{ color: "var(--color-lime)" }} />
        <h3 className="font-display text-2xl font-semibold text-foreground">Message sent</h3>
        <p className="max-w-sm text-sm text-foreground/60">{successMessage}</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-medium text-foreground/70 underline underline-offset-4 transition-colors hover:text-foreground"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-wide text-foreground/50">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            required
            minLength={2}
            placeholder="Jane Doe"
            className="w-full rounded-2xl border border-line bg-foreground/[0.03] px-4 py-3.5 text-sm text-foreground placeholder:text-foreground/30 outline-none transition-colors focus:border-foreground/40"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-wide text-foreground/50">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className="w-full rounded-2xl border border-line bg-foreground/[0.03] px-4 py-3.5 text-sm text-foreground placeholder:text-foreground/30 outline-none transition-colors focus:border-foreground/40"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-xs font-medium uppercase tracking-wide text-foreground/50">
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            placeholder="+971 5X XXX XXXX"
            className="w-full rounded-2xl border border-line bg-foreground/[0.03] px-4 py-3.5 text-sm text-foreground placeholder:text-foreground/30 outline-none transition-colors focus:border-foreground/40"
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-2 block text-xs font-medium uppercase tracking-wide text-foreground/50">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            className="w-full appearance-none rounded-2xl border border-line bg-foreground/[0.03] px-4 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-foreground/40"
            defaultValue=""
          >
            <option value="" disabled className="bg-surface">
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.title} className="bg-surface">
                {service.title}
              </option>
            ))}
            <option value="Other" className="bg-surface">
              Other
            </option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-wide text-foreground/50">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={5}
          placeholder="Tell us about your brand, timeline and goals..."
          className="w-full resize-none rounded-2xl border border-line bg-foreground/[0.03] px-4 py-3.5 text-sm text-foreground placeholder:text-foreground/30 outline-none transition-colors focus:border-foreground/40"
        />
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
          >
            {errorMessage}
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "loading"}
        className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-on-accent transition-opacity disabled:opacity-70 sm:w-auto"
        style={{ background: "linear-gradient(90deg, var(--color-accent), var(--color-accent-2))" }}
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </>
        )}
      </button>
    </form>
  );
}
