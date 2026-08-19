export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "premium-podiums-brand-presence",
    title: "How Premium Podiums Elevate Your Brand Presence",
    excerpt:
      "A well-designed podium does more than hold a product — it frames a brand story in three dimensions.",
    category: "Exhibitions",
    date: "2025-11-04",
    readTime: "5 min read",
    image:
      "https://images.pexels.com/photos/36522033/pexels-photo-36522033.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    content: [
      "Premium podiums are often the first physical touchpoint a visitor has with your brand at an exhibition or launch event. Getting the material, lighting and proportions right can be the difference between a passer-by and a qualified lead.",
      "At UNAD, our design team starts every podium concept with the product story: what is it, who is it for, and what feeling should the reveal create? From there we prototype in CAD, test structural integrity, and finish with premium materials — brushed metal, backlit acrylic, veneered timber — to match the brand tier.",
      "The result is a piece of furniture that photographs beautifully, survives a multi-day show floor, and gives your sales team a stage to perform on.",
    ],
  },
  {
    slug: "virtual-reality-exhibitions-tradeshows",
    title: "The Possibilities Virtual Reality Brings to Exhibitions",
    excerpt:
      "VR and AR are moving from novelty to necessity on the modern trade show floor. Here's how brands are using it.",
    category: "Technology",
    date: "2025-10-18",
    readTime: "6 min read",
    image:
      "https://images.pexels.com/photos/38041486/pexels-photo-38041486.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    content: [
      "Immersive technology gives exhibitors a way to showcase products that are too large, too expensive, or too early-stage to bring to the show floor physically.",
      "We've integrated VR configurators into automotive showrooms, AR wayfinding into mall activations, and 360-degree walkthroughs into real estate sales pavilions — each time increasing average dwell time at the stand.",
      "The key is treating the technology as a storytelling tool, not a gimmick: script the experience, keep sessions under three minutes, and always pair it with a human host.",
    ],
  },
  {
    slug: "exhibition-booth-mistakes",
    title: "Five Ways an Exhibition Booth Can Go Wrong (And How to Avoid Them)",
    excerpt:
      "Poor sightlines, weak lighting and cluttered messaging can sink an otherwise great booth. Here's our field guide.",
    category: "Exhibitions",
    date: "2025-09-22",
    readTime: "4 min read",
    image:
      "https://images.pexels.com/photos/35138560/pexels-photo-35138560.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    content: [
      "The most common mistake we see is trying to say everything at once. A booth has roughly three seconds to earn a second look — your headline message needs to be legible from twenty metres away.",
      "Lighting is the second biggest lever: warm, layered lighting draws people in, while flat overhead lighting flattens your product and your brand.",
      "Finally, always design for the walk-by, not just the meeting. Open sightlines, low counters and a clear single call-to-action will consistently outperform a maze of literature stands.",
    ],
  },
  {
    slug: "top-activation-ideas-2026",
    title: "Top Four Brand Activation Ideas for 2026",
    excerpt:
      "From AI-personalised pop-ups to sustainable material builds, here's what's driving experiential this year.",
    category: "Activations",
    date: "2025-08-30",
    readTime: "7 min read",
    image:
      "https://images.pexels.com/photos/30215324/pexels-photo-30215324.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    content: [
      "Sustainable, demountable structures are no longer a nice-to-have — clients are asking for full material breakdowns and reuse plans before we even start design.",
      "Personalisation at scale, powered by lightweight AI tools, is letting brands print or project a visitor's name, style, or previous interaction back at them in real time.",
      "We're also seeing a shift toward smaller, hyper-local activations distributed across a city instead of one large flagship event — spreading reach and reducing single-point risk.",
    ],
  },
  {
    slug: "art-of-advertising-engaging-promotion",
    title: "The Art of Advertising: Strategies for Engaging Brand Promotion",
    excerpt:
      "Cutting through the noise takes more than a big budget — it takes a sharp, consistent creative idea.",
    category: "Strategy",
    date: "2025-07-14",
    readTime: "5 min read",
    image:
      "https://images.pexels.com/photos/29849362/pexels-photo-29849362.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    content: [
      "The best advertising campaigns we've produced share one trait: a single, sharp idea that survives translation across every medium — billboard, feed, storefront and stage.",
      "We start every campaign with a one-sentence creative brief. If the idea can't be explained in one sentence, it isn't ready for production.",
      "From there, consistency of execution across every touchpoint is what compounds recall over time.",
    ],
  },
  {
    slug: "window-display-techniques-retail-impact",
    title: "Maximising Retail Impact: Effective Window Display Techniques",
    excerpt:
      "Your storefront window is unpaid media running twenty-four hours a day. Here's how to use it properly.",
    category: "Retail",
    date: "2025-06-02",
    readTime: "4 min read",
    image:
      "https://images.pexels.com/photos/36437176/pexels-photo-36437176.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    content: [
      "A strong window display should communicate what you sell, who it's for, and why now — in under two seconds of glance time.",
      "Layering depth (foreground prop, mid-ground product, background graphic) creates a scene rather than a shelf, which consistently increases foot traffic conversion.",
      "Refresh cycles matter too: we recommend a full seasonal reset at minimum, with lighter refreshes every four to six weeks to keep regular passers-by noticing something new.",
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
