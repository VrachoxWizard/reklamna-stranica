import { Section } from "./Section";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <Section className="bg-stone-50 pt-16 pb-12 md:pt-24 md:pb-20 border-b border-stone-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — Copy */}
        <div className="flex flex-col items-start text-left">
          <div className="flex items-center gap-2 text-sm font-medium text-stone-500 mb-6">
            <MapPin className="w-5 h-5 text-teal-700" />
            <span className="uppercase tracking-wider">Zagreb i okolica</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-stone-900 mb-6 leading-[1.2] lg:leading-tight">
            Sporo računalo, Windows problemi ili trebate IT pomoć u Zagrebu?
          </h1>
          
          <p className="text-lg sm:text-xl leading-relaxed text-stone-600 mb-8 max-w-xl text-balance">
            Pomažem s osnovnim i srednje zahtjevnim problemima na računalima i laptopima — jasno, pošteno i bez nepotrebnog kompliciranja.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
            <a href="#kontakt" className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-teal-700 px-6 py-3.5 text-base font-semibold text-white hover:bg-teal-800 transition-colors text-center min-h-[48px] focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2">
              Pošalji problem
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#cijene" className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-stone-50 border border-stone-200 px-6 py-3.5 text-base font-semibold text-stone-900 hover:bg-stone-100 transition-colors text-center min-h-[48px] focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-2">
              Pogledaj cijene
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm text-stone-600 w-full">
            {[
              "Cijena dogovorena prije rada",
              "Ako ne znam, kažem odmah",
              "Windows, backup i osnovna IT pomoć"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Composition (Work Ticket) */}
        <div className="relative w-full aspect-[4/3] sm:aspect-square lg:aspect-[4/5] flex items-center justify-center p-4 sm:p-8 lg:p-12">
          
          {/* Main "Work Order" Ticket */}
          <div className="relative w-full max-w-[340px] bg-white rounded-md border border-stone-200 p-5 sm:p-6 lg:p-8">
            {/* Header snippet */}
            <div className="border-b border-dashed border-stone-200 pb-3 mb-4 flex justify-between items-center">
              <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">
                Radni Nalog #024
              </span>
              <span className="text-[10px] font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-sm uppercase tracking-widest border border-teal-200">
                Riješeno
              </span>
            </div>

            {/* Diagnostic content mimicking an actual ticket */}
            <div className="space-y-4 mb-6">
              <div>
                <p className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-0.5">Problem</p>
                <p className="text-sm font-medium text-stone-900 leading-snug">
                  Laptop se jako sporo pali, otvara preglednik 5 minuta. Pojavile se Windows greške.
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-0.5">Napomena stranke</p>
                <div className="bg-amber-50 border-l-2 border-amber-500 p-2.5 rounded-r-sm">
                  <p className="text-sm text-stone-700 italic leading-snug">
                    &quot;Obavezno spasiti slike s Desktopa prije čišćenja!&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Footer pricing info */}
            <div className="border-t border-stone-200 pt-4 mt-auto">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-0.5">Okvirna cijena</p>
                  <p className="text-xl font-bold text-stone-900">45 €</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-stone-500 font-medium">Dogovoreno unaprijed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}