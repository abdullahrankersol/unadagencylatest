export type AgencyEvent = {
  slug: string;
  title: string;
  location: string;
  country: string;
  dateLabel: string;
  image: string;
  description: string;
};

export const events: AgencyEvent[] = [
  {
    slug: "gulfood-manufacturing-2026",
    title: "Gulfood Manufacturing 2026",
    location: "Dubai World Trade Centre",
    country: "UAE",
    dateLabel: "10 – 12 Feb 2026",
    image:
      "https://images.pexels.com/photos/35138560/pexels-photo-35138560.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    description:
      "Visit our production showcase and see the exhibition booths we're building for this year's exhibitors.",
  },
  {
    slug: "riyadh-retail-expo-2026",
    title: "Riyadh Retail & Franchise Expo",
    location: "Riyadh International Convention Centre",
    country: "Saudi Arabia",
    dateLabel: "3 – 5 Mar 2026",
    image:
      "https://images.pexels.com/photos/28388982/pexels-photo-28388982.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    description:
      "UNAD will unveil a new modular retail activation system built for franchise rollouts.",
  },
  {
    slug: "cairo-sign-print-2026",
    title: "Cairo Sign & Print Expo",
    location: "Egypt International Exhibition Center",
    country: "Egypt",
    dateLabel: "18 – 20 Apr 2026",
    image:
      "https://images.pexels.com/photos/36913687/pexels-photo-36913687.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    description:
      "Catch a live fabrication demo of our latest illuminated signage systems on the show floor.",
  },
  {
    slug: "bahrain-property-show-2026",
    title: "Bahrain Property & Investment Show",
    location: "Bahrain International Exhibition Centre",
    country: "Bahrain",
    dateLabel: "9 – 11 May 2026",
    image:
      "https://images.pexels.com/photos/36522033/pexels-photo-36522033.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    description:
      "Explore our sales pavilion concepts designed for premium real estate launches.",
  },
];
