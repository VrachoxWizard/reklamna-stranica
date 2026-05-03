import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IT pomoć i servis računala Zagreb | Windows optimizacija i backup",
  description: "Sporo računalo, Windows problemi ili trebate backup podataka? Poštena i razumljiva IT pomoć u Zagrebu za kućne korisnike, studente i male poslovne korisnike.",
  openGraph: {
    title: "IT pomoć i servis računala Zagreb",
    description: "Poštena i razumljiva IT pomoć za računala i laptope u Zagrebu.",
    siteName: "Direkt IT Pomoć Zagreb",
    locale: "hr_HR",
    type: "website",
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
      className={`${outfit.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
        <LocalBusinessJsonLd />
        {children}
      </body>
    </html>
  );
}
