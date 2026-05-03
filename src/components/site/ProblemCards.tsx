import { Clock, AlertTriangle, CloudOff, HeartHandshake } from "lucide-react";
import { Section } from "./Section";

const problems = [
  {
    title: "Laptop se užasno sporo pali i stalno nešto vrti",
    description: "Ventilator se čuje, programi zapinju, a najjednostavniji klik traje predugo.",
    icon: Clock,
  },
  {
    title: "Windows izbacuje čudne greške",
    description: "Ili se ruši, ili ne da ažurirati, ili su se pojavili neki programi koje niste instalirali.",
    icon: AlertTriangle,
  },
  {
    title: "Strah vas je da ćete izgubiti slike i dokumente",
    description: "Sve Vam stoji na jednom mjestu, računalo je staro i niste sigurni kako to sigurno prebaciti.",
    icon: CloudOff,
  },
  {
    title: "Samo trebate da Vam netko normalan pogleda računalo",
    description: "Ne želite nositi u veliki servis gdje će vas odmah na ulazu tražiti hrpu novca ako je problem možda bezazlen.",
    icon: HeartHandshake,
  }
];

export function ProblemCards() {
  return (
    <Section className="bg-[var(--color-bg-primary)] py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section)]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-surface)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] mb-6 shadow-sm">
            Zašto ste ovdje
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
            Računalo vas usporava više nego što pomaže?
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
            Najčešće se ne radi o velikom kvaru, nego o hrpi sitnih softverskih problema koji su se s vremenom nakupili.
          </p>
        </div>

        <div className="space-y-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col sm:flex-row gap-4 lg:gap-6 py-6 border-b border-[var(--color-border)] last:border-0 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-surface)] flex items-center justify-center text-[var(--color-text-primary)] shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 mt-1">
                  <h3 className="text-lg md:text-xl font-bold text-[var(--color-text-primary)] mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
