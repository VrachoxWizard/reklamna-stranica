import { Section } from "./Section";

const steps = [
  {
    num: "01",
    title: "Javite mi problem",
    body: "Napišite poruku ili nazovite — par rečenica je dovoljno. Možete priložiti i sliku ekrana. Stručni izrazi nisu potrebni.",
  },
  {
    num: "02",
    title: "Kratka procjena",
    body: "Odgovorim brzo s prvim dojmom. Ako trebam vidjeti uređaj, dogovorimo kratki pregled bez obveze.",
  },
  {
    num: "03",
    title: "Dogovorimo cijenu",
    body: "Jasno kažem koliko bi koštalo — prije nego što počnem. Bez iznenađenja i bez skrivenih troškova.",
  },
  {
    num: "04",
    title: "Rješavam problem",
    body: "Radim temeljito, bez žurbe. Ako naiđem na nešto neočekivano, odmah javim i čekam vaš pristanak.",
  },
  {
    num: "05",
    title: "Predajem sređeno",
    body: "Objasnim što sam radio, pokažem promjene i dam par savjeta kako dalje održavati računalo u redu.",
  },
];

export function ProcessSteps() {
  return (
    <Section id="kako-radim" className="bg-stone-50 py-16 md:py-24 border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-10">
          Kako izgleda naš dogovor?
        </h2>

        {/* Mobile: vertical timeline */}
        <div className="flex flex-col md:hidden">
          {steps.map((step, i) => (
            <div key={step.num} className="relative flex items-start gap-4 pb-8">
              {i < steps.length - 1 && (
                <div
                  className="absolute left-4 top-9 bottom-0 w-px bg-stone-200"
                  aria-hidden="true"
                />
              )}
              <div
                className="shrink-0 w-9 h-9 rounded-full bg-[var(--color-accent)] text-white font-bold text-sm flex items-center justify-center z-10"
                aria-label={`Korak ${step.num}`}
              >
                {step.num}
              </div>
              <div className="pt-1.5">
                <h3 className="text-base font-bold text-stone-900 mb-1">{step.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: 5-col grid */}
        <div className="hidden md:grid md:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="relative">
              <div
                className="w-9 h-9 rounded-full bg-[var(--color-accent)] text-white font-bold text-sm flex items-center justify-center mb-4"
                aria-label={`Korak ${step.num}`}
              >
                {step.num}
              </div>
              <h3 className="text-base font-bold text-stone-900 mb-2">{step.title}</h3>
              <p className="text-stone-600 leading-relaxed text-sm">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
