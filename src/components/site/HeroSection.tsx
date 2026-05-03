import { Section } from "./Section";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import Image from "next/image";

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

        {/* Right — Composition (Image) */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/5] flex items-center justify-center p-0 lg:p-4">
          <div className="relative w-full h-full min-h-[300px] lg:min-h-[500px] rounded-lg border border-stone-200 overflow-hidden shadow-sm">
            <Image 
              src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&h=1000&q=80" 
              alt="Popravak i čišćenje računala u Zagrebu" 
              fill 
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}