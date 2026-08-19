export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  icon: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "brand-strategy-identity",
    title: "Brand Strategy & Identity",
    shortDescription:
      "Positioning, naming and visual identity systems built to travel across every touchpoint.",
    description:
      "We dig into market research, competitor mapping and customer psychology before a single pixel is drawn. The result is a brand platform — name, voice, identity system and guidelines — that gives every future campaign a solid foundation to build on.",
    image:
      "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    icon: "Compass",
    features: [
      "Brand positioning & messaging",
      "Naming & verbal identity",
      "Logo & visual identity systems",
      "Brand guideline documentation",
    ],
  },
  {
    slug: "signage-3d-branding",
    title: "Signage & 3D Letter Branding",
    shortDescription:
      "Illuminated, fabricated and 3D signage that turns storefronts into landmarks.",
    description:
      "From backlit acrylic letters to full building crowns, our in-house fabrication studio designs, engineers and installs signage that survives the elements and stops foot traffic in its tracks.",
    image:
      "https://images.pexels.com/photos/36913687/pexels-photo-36913687.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    icon: "Lightbulb",
    features: [
      "Illuminated & neon signage",
      "3D fabricated letters",
      "Building & facade branding",
      "Wayfinding systems",
    ],
  },
  {
    slug: "exhibition-stands",
    title: "Exhibition Stands & Booths",
    shortDescription:
      "Custom exhibition booths engineered for maximum footfall and brand storytelling.",
    description:
      "Our exhibition division designs modular and bespoke booths for trade shows across the region — complete with structural engineering, AV integration and on-site project management from build to breakdown.",
    image:
      "https://images.pexels.com/photos/35138560/pexels-photo-35138560.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    icon: "Building2",
    features: [
      "Custom & modular booth design",
      "Structural engineering & permits",
      "AV & interactive integration",
      "On-site build & breakdown",
    ],
  },
  {
    slug: "event-activations",
    title: "Event Activations & Experiential",
    shortDescription:
      "Immersive brand experiences and live activations that get people talking.",
    description:
      "We conceive and produce experiential activations — product launches, roadshows, pop-ups and stage productions — designed to create a moment worth sharing and a story worth remembering.",
    image:
      "https://images.pexels.com/photos/30215324/pexels-photo-30215324.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    icon: "PartyPopper",
    features: [
      "Experiential concept & production",
      "Stage & set design",
      "Roadshows & pop-ups",
      "Live event management",
    ],
  },
  {
    slug: "retail-mall-branding",
    title: "Retail & Mall Branding",
    shortDescription:
      "Point-of-sale, window displays and in-mall activations engineered to convert.",
    description:
      "We help retail and mall brands own their environment — from window vinyl and POS units to full mall activation campaigns that drive footfall and basket size.",
    image:
      "https://images.pexels.com/photos/36437176/pexels-photo-36437176.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    icon: "ShoppingBag",
    features: [
      "Window & storefront displays",
      "POS & merchandising units",
      "Mall activations & kiosks",
      "Seasonal campaign rollouts",
    ],
  },
  {
    slug: "outdoor-advertising",
    title: "Outdoor Advertising (OOH)",
    shortDescription:
      "Billboards, transit and street furniture campaigns planned for maximum reach.",
    description:
      "Our media planning team secures premium out-of-home inventory — billboards, transit wraps and street furniture — and pairs it with bold creative that performs at a glance.",
    image:
      "https://images.pexels.com/photos/29849362/pexels-photo-29849362.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    icon: "Megaphone",
    features: [
      "Billboard & unipole campaigns",
      "Transit & vehicle wraps",
      "Street furniture media",
      "Media planning & buying",
    ],
  },
  {
    slug: "digital-marketing-motion",
    title: "Digital Marketing & Motion",
    shortDescription:
      "Performance campaigns, social content and motion design that build momentum online.",
    description:
      "Our digital studio extends every physical campaign into the feed — paid social, performance media, motion graphics and content production engineered for engagement and ROI.",
    image:
      "https://images.pexels.com/photos/38041486/pexels-photo-38041486.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    icon: "MonitorPlay",
    features: [
      "Paid social & performance media",
      "Motion graphics & video",
      "Content production",
      "Analytics & reporting",
    ],
  },
  {
    slug: "print-fabrication",
    title: "Print & Large-Format Fabrication",
    shortDescription:
      "In-house large-format printing, styrofoam modelling and fabrication at scale.",
    description:
      "Our production facility runs large-format printing, CNC routing and styrofoam/3D modelling in-house — giving us tighter quality control and faster turnaround on every job we produce.",
    image:
      "https://images.pexels.com/photos/12246956/pexels-photo-12246956.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    icon: "Printer",
    features: [
      "Large-format & UV printing",
      "CNC routing & fabrication",
      "Styrofoam & 3D models",
      "Finishing & installation",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
