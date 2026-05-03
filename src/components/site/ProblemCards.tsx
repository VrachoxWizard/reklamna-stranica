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
    <Section className="bg-stone-50 py-16 md:py-24" id="problemi">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6">
            Računalo vas usporava više nego što pomaže?
          </h2>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl border-l-[3px] border-stone-300 pl-4">
            Znam kako je. Najčešće se ne radi o velikom kvaru, nego o hrpi sitnih softverskih problema koji su se s vremenom nakupili i usporili sustav.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 bg-white p-6 md:p-8 rounded-2xl border border-stone-200 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex-shrink-0 bg-stone-100 p-3 rounded-xl border border-stone-200 mt-1">
                  <Icon className="w-8 h-8 text-stone-700 stroke-[1.5]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-stone-900">
                    &quot;{problem.title}&quot;
                  </h3>
                  <p className="text-stone-600 leading-relaxed text-lg">
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
