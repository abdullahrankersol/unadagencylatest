import { Hero } from "@/components/home/hero";
import { ClientsMarquee } from "@/components/home/clients-marquee";
import { AboutSection } from "@/components/home/about-section";
import { StatementMarquee } from "@/components/home/statement-marquee";
import { ServicesSection } from "@/components/home/services-section";
import { PortfolioSection } from "@/components/home/portfolio-section";
import { EventsSection } from "@/components/home/events-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { BlogSection } from "@/components/home/blog-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientsMarquee />
      <AboutSection />
      <StatementMarquee />
      <ServicesSection />
      <PortfolioSection />
      <EventsSection />
      <TestimonialsSection />
      <BlogSection />
    </>
  );
}
