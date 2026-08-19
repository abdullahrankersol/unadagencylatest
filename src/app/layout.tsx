import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";

const themeInitScript = `
(function () {
  try {
    var stored = window.localStorage.getItem("unad-theme");
    if (stored === "light") {
      document.documentElement.classList.add("light");
    }
  } catch (e) {}
})();
`;

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display-sans",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "UNAD Agency — Bold Impact. Built to Be Seen.",
  description:
    "UNAD is a full-service advertising agency crafting signage, exhibitions, activations and campaigns across the UAE, Saudi Arabia, Egypt and Bahrain.",
  keywords: [
    "advertising agency",
    "signage",
    "exhibition stands",
    "brand activation",
    "UNAD",
  ],
  openGraph: {
    title: "UNAD Agency — Bold Impact. Built to Be Seen.",
    description:
      "Full-service advertising agency crafting signage, exhibitions, activations and campaigns.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="grain bg-ink font-body text-foreground antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
