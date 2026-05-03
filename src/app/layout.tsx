import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://direkt-it-pomoc-zagreb.vercel.app"
  ),
  title: "IT pomoć i servis računala Zagreb | Windows optimizacija i backup",
  description: "Sporo računalo, Windows problemi ili trebate backup podataka? Poštena i razumljiva IT pomoć u Zagrebu za kućne korisnike, studente i male poslovne korisnike.",
  openGraph: {
    title: "IT pomoć i servis računala Zagreb",
    description: "Poštena i razumljiva IT pomoć za računala i laptope u Zagrebu.",
    siteName: "Direkt IT Pomoć Zagreb",
    locale: "hr_HR",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IT Pomoć Zagreb",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hr"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
        <LocalBusinessJsonLd />
        {children}
      </body>
    </html>
  );
}
