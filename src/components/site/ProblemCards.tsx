import { Clock, AlertTriangle, CloudOff, HeartHandshake } from "lucide-react";
import { Section } from "./Section";

const problems = [
  {
    title: "Laptop je postao jako spor",
    description: "Dugo se pali, šteka kod otvaranja programa ili se ventilator stalno čuje.",
    icon: Clock,
  },
  {
    title: "Windows se ponaša čudno",
    description: "Greške, update problemi, rušenja, zamrzavanje ili poruke koje ne razumijete.",
    icon: AlertTriangle,
  },
  {
    title: "Bojite se za podatke",
    description: "Vaše fotografije, dokumenti i radovi nisu backupirani i strah vas je kvara diska.",
    icon: CloudOff,
  },
  {
    title: "Trebate poštenu pomoć",
    description: "Ne želite platiti veliki servis ako je problem možda jednostavan, a rješenje brzo.",
    icon: HeartHandshake,
  }
];

export function ProblemCards() {
  return (
    <Section className="bg-[var(--color-bg-primary)]">
      <div className="mb-12 md:mb-16 max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-surface)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-6">
          Česti problemi
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
          Računalo vas usporava više nego što pomaže?
        </h2>
        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
          Najčešće se ne radi o &quot;velikom kvaru&quot;, nego o kombinaciji sitnih softverskih problema koji se s vremenom nakupe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {problems.map((problem, index) => {
          const Icon = problem.icon;
          return (
            <div 
              key={index} 
              className="flex flex-col sm:flex-row gap-5 p-6 md:p-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-surface)]"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-700">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
                  {problem.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
