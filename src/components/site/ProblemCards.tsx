import { Clock, AlertTriangle, CloudOff, HeartHandshake, ArrowRight } from "lucide-react";
import { Section } from "./Section";

const problems = [
  {
    title: "Sporo paljenje i zamrzavanje",
    description:
      "Čak i otvaranje preglednika traje predugo. Ventilator radi bez prestanka, ekran se zamrzava.",
    icon: Clock,
  },
  {
    title: "Windows greške i nepoznati programi",
    description:
      "Pojavili su se programi koje niste instalirali, sustav ne da se ažurirati, ili se stalno ruši.",
    icon: AlertTriangle,
  },
  {
    title: "Strah od gubitka podataka",
    description:
      "Slike i dokumenti na starom disku — ne znate kako to sigurno pohraniti ili prebaciti.",
    icon: CloudOff,
  },
  {
    title: "Trebate normalnu IT pomoć",
    description:
      'Ne treba vam servis koji odmah govori o "velikom kvaru" — trebate nekog da normalno pogleda.',
    icon: HeartHandshake,
  }
];

export function ProblemCards() {
  return (
    <Section className="bg-stone-50 py-16 md:py-24" id="problemi">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Prepoznajete li koji od ovih scenarija?
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed max-w-2xl">
            Najčešće se ne radi o velikom kvaru — nego o hrpi sitnih softverskih
            problema koji su se s vremenom nakupili.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.title}
                className="flex items-start gap-4 bg-white p-5 md:p-6 rounded-lg border border-stone-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="shrink-0 bg-stone-100 p-2.5 rounded-lg border border-stone-200 mt-0.5">
                  <Icon className="w-5 h-5 text-stone-600 stroke-[1.5]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1.5 text-stone-900">
                    {problem.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed text-sm">
                    {problem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bridge into services */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 bg-white rounded-lg border border-stone-200">
          <p className="text-sm text-stone-600 max-w-md">
            <span className="font-semibold text-stone-900">Nije ovo točno vaš problem?</span>{" "}
            Opišite što vidite — zajedno ćemo procijeniti može li se to riješiti.
          </p>
          <a
            href="#usluge"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 rounded"
          >
            Pogledaj sve usluge
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </Section>
  );
}
