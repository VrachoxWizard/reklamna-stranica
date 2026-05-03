import Image from "next/image";
import { Section } from "./Section";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <Section className="bg-[var(--color-bg-primary)] pt-16 pb-12 md:pt-24 md:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — Copy */}
        <div className="flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-surface)] px-3 py-1 text-sm font-medium text-[var(--color-text-secondary)] mb-6 shadow-[var(--shadow-weightless)]">
            <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
            Zagreb i okolica
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6 leading-tight">
            Sporo računalo, Windows problemi ili trebate IT pomoć u Zagrebu?
          </h1>
          
          <p className="text-lg sm:text-xl leading-relaxed text-[var(--color-text-secondary)] mb-8 max-w-xl text-balance">
            Pomažem s osnovnim i srednje zahtjevnim problemima na računalima i laptopima — jasno, pošteno i bez nepotrebnog kompliciranja.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
            <a href="#kontakt" className="inline-flex items-center justify-center rounded-[var(--radius-button)] bg-[var(--color-accent)] px-6 py-3 text-base font-semibold text-white hover:bg-[var(--color-accent-hover)] transition-colors text-center shadow-sm">
              Pošalji problem
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#cijene" className="inline-flex items-center justify-center rounded-[var(--radius-button)] bg-[var(--color-bg-surface)] border border-[var(--color-border)] px-6 py-3 text-base font-semibold text-[var(--color-text-primary)] hover:bg-[var(--color-bg-muted)] transition-colors text-center shadow-sm">
              Pogledaj cijene
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm text-[var(--color-text-secondary)]">
            {[
              "Cijena dogovorena prije rada",
              "Ako ne znam, kažem odmah",
              "Windows, backup i osnovna IT pomoć"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Image */}
        <div className="relative w-full aspect-video sm:aspect-[4/3] rounded-[var(--radius-card)] overflow-hidden border border-[var(--color-border)] shadow-[var(--shadow-card)] bg-[var(--color-bg-surface)]">
          <Image 
            src="/images/hero_desk_setup.png"
            alt="Uredni radni stol s laptopom"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </Section>
  );
}