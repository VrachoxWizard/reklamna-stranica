import Image from "next/image";
import { Section } from "./Section";

const steps = [
  {
    title: "Pošaljete mi opis problema",
    description: "Kratko opišite što ne radi: kada je počelo, koji uređaj koristite i imate li važne podatke.",
  },
  {
    title: "Dobijete iskrenu procjenu",
    description: "Ako mogu pomoći, dogovorimo se. Ako je kvar prevelik za moj nivo, kažem vam odmah.",
  },
  {
    title: "Pregled pa dogovor",
    description: "Nakon provjere objasnim što sam našao i predložim rješenje. Bez skrivenih troškova.",
  },
  {
    title: "Rješavanje i savjet",
    description: "Cilj je popravljeno računalo i vaše jasnije razumijevanje kako izbjeći problem ubuduće.",
  }
];

export function ProcessSteps() {
  return (
    <Section className="bg-[var(--color-bg-primary)] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <div className="relative order-2 lg:order-1">
          <div className="relative rounded-xl overflow-hidden shadow-[var(--shadow-card)] aspect-[4/5] border border-[var(--color-border)] bg-white">
            <Image 
              src="/images/process_hands.png"
              alt="Tipkanje po laptopu — ljudski pristup IT problemima"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-stone-900/5 mix-blend-multiply pointer-events-none" />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="mb-12 md:mb-14">
            <div className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-surface)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-5">
              Naš put
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6 leading-tight">
              Kako točno radim
            </h2>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-xl">
              Cijenim vaše vrijeme. Komunikacija je direktna, a rješenja praktična i dugoročna.
            </p>
          </div>

          <div className="relative space-y-8 before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-[var(--color-border)] before:opacity-50">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10 flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-lg bg-white border border-[var(--color-border)] text-[var(--color-text-primary)] flex-shrink-0 flex items-center justify-center font-bold text-xl shadow-sm group-hover:bg-[var(--color-accent)] group-hover:text-white group-hover:border-[var(--color-accent)] transition-colors">
                  {index + 1}
                </div>
                <div className="pt-1">
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
