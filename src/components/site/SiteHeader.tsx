import Link from "next/link";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/385994414638";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-5 flex items-center justify-between h-14">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-baseline gap-1.5 select-none focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 rounded"
          aria-label="Direkt IT Pomoć – početna stranica"
        >
          <span className="font-semibold text-stone-950 tracking-tight text-base">
            Direkt IT Pomoć
          </span>
          <span className="text-xs font-normal text-stone-400 leading-none">
            · Zagreb
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Navigacija">
          <Link
            href="#usluge"
            className="text-sm text-stone-600 hover:text-stone-950 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 rounded"
          >
            Usluge
          </Link>
          <Link
            href="#cijene"
            className="text-sm text-stone-600 hover:text-stone-950 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 rounded"
          >
            Cijene
          </Link>
          <Link
            href="#o-meni"
            className="text-sm text-stone-600 hover:text-stone-950 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 rounded"
          >
            O meni
          </Link>
          <Link
            href="#pitanja"
            className="text-sm text-stone-600 hover:text-stone-950 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 rounded"
          >
            Česta pitanja
          </Link>
        </nav>

        {/* Desktop CTA */}
        <a
          href="#kontakt"
          className="hidden md:inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--color-accent-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2"
        >
          <MessageCircle className="w-4 h-4" aria-hidden="true" />
          Pošalji problem
        </a>

        {/* Mobile: WhatsApp icon only */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors focus:outline-none focus:ring-2 focus:ring-stone-300"
          aria-label="Kontakt na WhatsApp"
        >
          <MessageCircle className="w-5 h-5" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
