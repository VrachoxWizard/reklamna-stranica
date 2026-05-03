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
    <Section className="bg-[var(--color-bg-primary)] overflow-hidden py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section)] border-t border-[var(--color-border)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <div className="relative order-2 lg:order-1">
          <div className="relative rounded-[var(--radius-card)] overflow-hidden aspect-[4/5] border border-[var(--color-border)] bg-[var(--color-bg-surface)]">
            <Image 
              src="/images/process_hands.png"
              alt="Tipkanje po laptopu — ljudski pristup IT problemima"
              fill
              className="object-cover opacity-90"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="mb-10 md:mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6 leading-tight">
              Kako točno radim
            </h2>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-xl">
              Bez kompliciranja i praznih obećanja. Evo što možete očekivati od prvog kontakta do popravka.
            </p>
          </div>

          <div className="relative space-y-10">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10 flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-border)] text-[var(--color-text-primary)] flex-shrink-0 flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <div className="pt-1.5 flex-1">
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
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
