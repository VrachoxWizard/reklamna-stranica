import { Section } from "./Section";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/385994414638";

const CHECKLIST_ITEMS = [
  "Sporo paljenje i gašenje računala",
  "Backup važnih datoteka",
  "Printer, Wi-Fi, mail, browser",
  "Windows greške i optimizacija",
];

const TRUST_CUES = [
  "Mate, IT pomoćnik u Zagrebu",
  "Cijena dogovorena prije rada",
  "Ako ne znam, kažem odmah",
  "Windows, backup, printer i Wi-Fi",
];

export function HeroSection() {
  return (
    <Section className="bg-stone-50 pt-16 pb-12 md:pt-24 md:pb-20 border-b border-stone-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — Copy */}
        <div className="flex flex-col items-start text-left">
          {/* Personal badge */}
          <div className="flex items-center gap-3 mb-7">
            <div
              className="w-10 h-10 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-bold text-base shrink-0 select-none"
              aria-hidden="true"
            >
              M
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-stone-900">
                Mate, IT pomoćnik
              </span>
              <span className="text-xs text-stone-500">Zagreb i okolica</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-950 mb-6 leading-[1.15]">
            Sporo računalo, Windows problemi ili trebate IT pomoć u Zagrebu?
          </h1>

          <p className="text-lg sm:text-xl leading-relaxed text-stone-700 mb-8 max-w-xl">
            Pomažem s osnovnim i srednje zahtjevnim problemima na računalima i
            laptopima — jasno, pošteno i bez nepotrebnog kompliciranja.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
            <a
              href="#kontakt"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-[var(--color-accent)] px-6 py-3.5 text-base font-semibold text-white hover:bg-[var(--color-accent-hover)] transition-colors text-center min-h-[48px] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2"
            >
              Pošalji problem
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#cijene"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-stone-50 border border-stone-200 px-6 py-3.5 text-base font-semibold text-stone-950 hover:bg-stone-100 transition-colors text-center min-h-[48px] focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-2"
            >
              Pogledaj cijene
            </a>
          </div>

          {/* Trust cues */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm text-stone-700 w-full">
            {TRUST_CUES.map((text) => (
              <div key={text} className="flex items-center gap-2">
                <CheckCircle2
                  className="w-4 h-4 text-[var(--color-accent)] shrink-0"
                  aria-hidden="true"
                />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Service composition panel */}
        <div className="relative w-full flex items-start justify-center lg:justify-end lg:pl-4">
          {/* Floating badge — hidden on small screens to avoid overlap */}
          <div
            className="hidden sm:flex absolute -top-4 right-0 lg:right-4 z-10 items-center gap-1.5 rounded-full border border-[var(--color-amber)] bg-[var(--color-amber-light)] px-3 py-1 text-xs font-semibold text-[var(--color-amber)] shadow-sm whitespace-nowrap"
            aria-hidden="true"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-amber)] shrink-0" />
            Cijena dogovorena unaprijed
          </div>

          {/* Card */}
          <div className="w-full max-w-sm lg:max-w-none rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] shadow-sm overflow-hidden">
            {/* Person header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--color-border)] bg-stone-50">
              <div
                className="w-10 h-10 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-bold text-base shrink-0 select-none"
                aria-hidden="true"
              >
                M
              </div>
              <div className="flex flex-col leading-snug">
                <span className="text-sm font-semibold text-stone-900">
                  Mate, IT pomoćnik
                </span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span
                    className="w-2 h-2 rounded-full bg-green-500 shrink-0"
                    aria-label="Dostupan"
                  />
                  <span className="text-xs text-stone-500">
                    Zagreb i okolica · Dostupan
                  </span>
                </div>
              </div>
            </div>

            {/* Checklist */}
            <div className="px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3">
                Što mogu riješiti
              </p>
              <ul className="flex flex-col gap-2.5" role="list">
                {CHECKLIST_ITEMS.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle2
                      className="w-4 h-4 text-[var(--color-accent)] shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="border-t border-[var(--color-border)]" />

            {/* Honest note */}
            <div className="px-5 py-3 bg-stone-50">
              <p className="text-xs text-stone-500 leading-relaxed">
                Ako problem nije za moj nivo — kažem odmah i preporučim
                specijalizirani servis.
              </p>
            </div>

            {/* WhatsApp CTA */}
            <div className="px-5 pb-5 pt-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#f0fdf4] border border-[#bbf7d0] px-4 py-3 text-sm font-semibold text-[#15803d] hover:bg-[#dcfce7] transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                Pošalji opis problema na WhatsApp
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}