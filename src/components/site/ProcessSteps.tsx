import { Section } from "./Section";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Javite mi problem",
    body: "Napišite poruku ili nazovite — par rečenica je dovoljno. Možete priložiti i sliku ekrana.",
  },
  {
    num: "02",
    title: "Kratka procjena",
    body: "Odgovorim brzo s prvim dojmom. Ako trebam vidjeti uređaj, dogovorimo kratki pregled.",
  },
  {
    num: "03",
    title: "Dogovorimo cijenu",
    body: "Jasno kažem koliko bi koštalo — prije nego što počnem. Bez skrivenih troškova.",
  },
  {
    num: "04",
    title: "Rješavam problem",
    body: "Radim temeljito, bez žurbe. Ako naiđem na nešto neočekivano, odmah vam javim.",
  },
  {
    num: "05",
    title: "Predajem sređeno",
    body: "Objasnim što sam radio, pokažem promjene i dam par savjeta za održavanje.",
  },
];

export function ProcessSteps() {
  return (
    <Section id="kako-radim" className="bg-[#FDFBF7] py-24 md:py-32 border-t border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center mb-16 md:mb-24">
          <div className="lg:w-7/12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-6 shadow-sm">
              <Sparkles className="w-3 h-3" />
              Jednostavan proces
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-stone-950 mb-8 leading-[1.1] tracking-tight">
              Kako izgleda naš <span className="text-[var(--color-accent)]">dogovor</span>?
            </h2>
            <p className="text-xl md:text-2xl text-stone-700 leading-relaxed max-w-2xl font-medium opacity-90">
              Cilj je da proces bude što jednostavniji za vas. Nema kompliciranih formulara ni čekanja u redu. Sve rješavamo izravno, lokalno i ljudski.
            </p>
          </div>
          
          <div className="lg:w-5/12 relative">
            <div className="relative rounded-3xl overflow-hidden img-card-shadow border-8 border-white bg-white rotate-2 hover:rotate-0 transition-transform duration-700 group">
              <Image 
                src="/images/process_hands.jpg" 
                alt="Ruke tehničara koji pažljivo radi na laptopu" 
                width={800} 
                height={600}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-orange-900/5 mix-blend-multiply pointer-events-none" />
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--color-accent)] rounded-full blur-[60px] opacity-10 -z-10" />
          </div>
        </div>

        {/* Steps — Enhanced Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-4 relative">
          
          {/* Desktop Timeline Line (Hidden on Mobile) */}
          <div className="hidden md:block absolute top-7 left-12 right-12 h-0.5 bg-stone-200/60 -z-10" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)]/50 via-[var(--color-accent)]/20 to-stone-300/30" />
          </div>
          
          {steps.map((step, idx) => (
            <div key={step.num} className="relative group">
              {/* Mobile Timeline Line */}
              {idx < steps.length - 1 && (
                <div className="md:hidden absolute left-7 top-14 bottom-0 w-0.5 bg-stone-200/60" aria-hidden="true" />
              )}
              
              <div className="flex md:flex-col items-start md:items-start gap-6 md:gap-0">
                {/* Number Circle */}
                <div
                  className="shrink-0 w-14 h-14 rounded-full bg-white border-2 border-stone-100 text-stone-900 group-hover:bg-[var(--color-accent)] group-hover:border-[var(--color-accent)] group-hover:text-white font-bold text-lg flex items-center justify-center mb-8 transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-teal-900/10 group-hover:-translate-y-1"
                  aria-label={`Korak ${step.num}`}
                >
                  {step.num}
                </div>
                
                {/* Content */}
                <div className="flex-grow pt-1 md:pt-0">
                  <h3 className="text-xl font-bold text-stone-950 mb-4 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed text-sm md:text-base opacity-90 group-hover:opacity-100 transition-opacity">
                    {step.body}
                  </p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Footer for Process */}
        <div className="mt-16 md:mt-20 p-8 md:p-12 rounded-3xl bg-white border border-stone-200 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="flex-grow text-center md:text-left">
            <h4 className="text-xl font-bold text-stone-950 mb-2">Imate pitanje o načinu rada?</h4>
            <p className="text-stone-600">Slobodno pošaljite poruku, odgovorim čim stignem.</p>
          </div>
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-xl bg-stone-950 px-8 py-4 text-sm font-bold text-white hover:bg-stone-800 transition-all active:scale-[0.98] shadow-lg shadow-stone-900/10"
          >
            Pošalji upit
          </a>
        </div>

      </div>
    </Section>
  );
}
