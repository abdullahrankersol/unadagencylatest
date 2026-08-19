export type PortfolioCategory =
  | "Signage"
  | "Exhibition Booths"
  | "Events"
  | "Retail Activations"
  | "Branding"
  | "Outdoor"
  | "Corporate Interiors"
  | "Digital Campaigns";

export type PortfolioItem = {
  slug: string;
  title: string;
  client: string;
  category: PortfolioCategory;
  location: string;
  year: string;
  image: string;
  summary: string;
};

export const portfolioCategories: PortfolioCategory[] = [
  "Signage",
  "Exhibition Booths",
  "Events",
  "Retail Activations",
  "Branding",
  "Outdoor",
  "Corporate Interiors",
  "Digital Campaigns",
];

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "falcon-motors-showroom-crown",
    title: "Falcon Motors Showroom Crown Sign",
    client: "Falcon Motors",
    category: "Signage",
    location: "Dubai, UAE",
    year: "2024",
    image:
      "https://images.pexels.com/photos/36913687/pexels-photo-36913687.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1400",
    summary:
      "A 22-metre illuminated crown sign fabricated and installed atop Falcon Motors' flagship showroom, visible from Sheikh Zayed Road.",
  },
  {
    slug: "zenith-foods-tradeshow-booth",
    title: "Zenith Foods Trade Show Pavilion",
    client: "Zenith Foods",
    category: "Exhibition Booths",
    location: "Riyadh, KSA",
    year: "2024",
    image:
      "https://images.pexels.com/photos/35138560/pexels-photo-35138560.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1400",
    summary:
      "A 200sqm double-deck exhibition pavilion with an interactive tasting bar for Gulfood 2024.",
  },
  {
    slug: "orbit-telecom-product-launch",
    title: "Orbit Telecom 5G Launch Night",
    client: "Orbit Telecom",
    category: "Events",
    location: "Manama, Bahrain",
    year: "2023",
    image:
      "https://images.pexels.com/photos/30215324/pexels-photo-30215324.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1400",
    summary:
      "Full-scale stage production, lighting design and live broadcast for a national network launch event.",
  },
  {
    slug: "aria-hospitality-window-takeover",
    title: "Aria Hospitality Window Takeover",
    client: "Aria Hospitality",
    category: "Retail Activations",
    location: "Cairo, Egypt",
    year: "2023",
    image:
      "https://images.pexels.com/photos/36437176/pexels-photo-36437176.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1400",
    summary:
      "Seasonal storefront takeover with kinetic window displays across 12 mall locations.",
  },
  {
    slug: "crescent-bank-rebrand",
    title: "Crescent Bank Full Rebrand",
    client: "Crescent Bank",
    category: "Branding",
    location: "Dubai, UAE",
    year: "2022",
    image:
      "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1400",
    summary:
      "Complete identity overhaul spanning logo, branch signage, uniforms and digital assets.",
  },
  {
    slug: "horizon-energy-billboard-campaign",
    title: "Horizon Energy Highway Billboards",
    client: "Horizon Energy",
    category: "Outdoor",
    location: "Riyadh, KSA",
    year: "2024",
    image:
      "https://images.pexels.com/photos/29849362/pexels-photo-29849362.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1400",
    summary:
      "A 14-site unipole and billboard rollout supporting a national sustainability campaign.",
  },
  {
    slug: "skyline-malls-corporate-hq",
    title: "Skyline Malls Corporate HQ Fit-out",
    client: "Skyline Malls",
    category: "Corporate Interiors",
    location: "Manama, Bahrain",
    year: "2023",
    image:
      "https://images.pexels.com/photos/36894415/pexels-photo-36894415.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1400",
    summary:
      "Branded interior fit-out including reception signage, wayfinding and feature walls.",
  },
  {
    slug: "palm-ventures-social-campaign",
    title: "Palm Ventures Launch Campaign",
    client: "Palm Ventures",
    category: "Digital Campaigns",
    location: "Dubai, UAE",
    year: "2024",
    image:
      "https://images.pexels.com/photos/38041486/pexels-photo-38041486.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1400",
    summary:
      "Integrated paid social and motion design campaign generating 4.2M impressions in 30 days.",
  },
  {
    slug: "meraas-living-sales-pavilion",
    title: "Meraas Living Sales Pavilion",
    client: "Meraas Living",
    category: "Exhibition Booths",
    location: "Dubai, UAE",
    year: "2022",
    image:
      "https://images.pexels.com/photos/36522033/pexels-photo-36522033.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1400",
    summary:
      "A premium off-plan sales pavilion with scale model, VR suite and hospitality lounge.",
  },
  {
    slug: "nova-retail-flagship-signage",
    title: "Nova Retail Flagship Signage Suite",
    client: "Nova Retail",
    category: "Signage",
    location: "Cairo, Egypt",
    year: "2023",
    image:
      "https://images.pexels.com/photos/27945019/pexels-photo-27945019.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1400",
    summary:
      "Full exterior and interior signage suite for a 3,000sqm flagship retail launch.",
  },
  {
    slug: "falcon-motors-mall-activation",
    title: "Falcon Motors Mall Activation",
    client: "Falcon Motors",
    category: "Retail Activations",
    location: "Riyadh, KSA",
    year: "2022",
    image:
      "https://images.pexels.com/photos/28388982/pexels-photo-28388982.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1400",
    summary:
      "An interactive vehicle showcase and test-drive booking activation across three malls.",
  },
  {
    slug: "zenith-foods-brand-refresh",
    title: "Zenith Foods Brand Refresh",
    client: "Zenith Foods",
    category: "Branding",
    location: "Manama, Bahrain",
    year: "2021",
    image:
      "https://images.pexels.com/photos/37539928/pexels-photo-37539928.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1400",
    summary:
      "Packaging, identity and retail signage refresh across a 40-SKU product range.",
  },
];

export function getPortfolioItemBySlug(slug: string) {
  return portfolioItems.find((item) => item.slug === slug);
}
