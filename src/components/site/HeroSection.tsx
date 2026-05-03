import { Section } from "./Section";
import { ArrowRight, ShieldCheck, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";

const TRUST_POINTS = [
  { icon: ShieldCheck, text: "Cijena dogovorena unaprijed" },
  { icon: MapPin, text: "Zagreb i okolica" },
  { icon: Sparkles, text: "Ako ne znam, kažem odmah" },
];

export function HeroSection() {
  return (
    <Section className="bg-[#FDFBF7] pt-16 pb-20 md:pt-24 md:pb-28 border-b border-stone-200 overflow-x-clip">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Brand/Owner Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-200 shadow-sm mb-8 md:mb-10 hover:border-[var(--color-accent)] transition-colors cursor-default">
            <div className="w-6 h-6 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center text-[10px] font-bold">
              M
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-stone-900 tracking-wide uppercase">
              Mate Vukusić <span className="text-stone-400 font-medium px-1">/</span> IT Pomoćnik
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-stone-950 mb-6 md:mb-8 leading-[1.1] sm:leading-[1.05] max-w-2xl">
            Računalo <span className="text-[var(--color-accent)]">sporo</span> ili Windows <span className="text-[var(--color-accent)] underline decoration-stone-200 underline-offset-8">zeza</span>?
          </h1>

          <p className="text-lg sm:text-2xl leading-relaxed text-stone-700 mb-10 md:mb-12 max-w-xl font-medium opacity-90">
            Pomažem s onim dosadnim problemima koji vam troše vrijeme: spori Windowsi, backup fileova, printeri i internet. Jednostavno, lokalno i bez &quot;preseravanja&quot;.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-12 md:mb-16 w-full sm:w-auto">
            <a
              href="#kontakt"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-[var(--color-accent)] px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold text-white hover:bg-[var(--color-accent-hover)] transition-all hover:shadow-xl hover:shadow-teal-900/10 active:scale-[0.98] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
            >
              Pošalji problem
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#cijene"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-white border-2 border-stone-200 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold text-stone-950 hover:bg-stone-50 hover:border-stone-300 transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2"
            >
              Pogledaj cijene
            </a>
          </div>

          {/* Trust Points */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-y-4 gap-x-8">
            {TRUST_POINTS.map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center shrink-0">
                  <item.icon className="w-3.5 h-3.5 text-stone-600" aria-hidden="true" />
                </div>
                <span className="text-sm font-bold text-stone-900 tracking-tight">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Visual — Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-none group">
            {/* White border frame + directional shadow + subtle rotation on hover */}
            <div className="relative rounded-3xl border-4 md:border-[6px] border-white shadow-[0_24px_56px_-12px_rgba(0,0,0,0.14)] rotate-1 group-hover:rotate-0 transition-transform duration-700 overflow-hidden">
              {/* aspect-square matches the actual image dimensions — prevents layout shift */}
              <div className="aspect-square">
                <Image
                  src="/images/hero_desk_setup.jpg"
                  alt="Laptop na urednom radnom stolu s biljkom i kavom — praktično okruženje za IT pomoć u Zagrebu"
                  width={1024}
                  height={1024}
                  priority
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 36vw"
                />
              </div>
              {/* Subtle warm tint — cohesion without dominating */}
              <div className="absolute inset-0 bg-amber-900/[0.04] mix-blend-multiply pointer-events-none" aria-hidden="true" />
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}