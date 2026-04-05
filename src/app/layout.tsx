import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DaVinci Stone | Premium Countertops in Boise, Idaho",
  description:
    "Family-owned stone fabricator specializing in granite and quartz countertops. Visualize your space with our AI tool, explore our slab catalog, and request a free measurement.",
  keywords: [
    "granite countertops Boise",
    "quartz countertops Idaho",
    "stone fabricator",
    "kitchen countertops",
    "bathroom vanity",
    "DaVinci Stone",
  ],
  openGraph: {
    title: "DaVinci Stone | Premium Countertops in Boise, Idaho",
    description:
      "Family-owned stone fabricator specializing in granite and quartz countertops in Boise, Idaho.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
