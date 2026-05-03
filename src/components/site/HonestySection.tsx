import { CheckCircle2 } from "lucide-react";

export function HonestySection() {
  const bullets = [
    "Prije rada dogovaramo okvirnu cijenu",
    "Objašnjavam problem jednostavnim jezikom",
    "Ne obećavam ono što ne mogu napraviti",
    "Ne forsiram nepotrebne usluge",
    "Fokus na rješenje, ne na kompliciranje"
  ];

  return (
    <div className="bg-stone-900 text-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-white">
              Pošteno, jednostavno i <span className="text-[var(--color-accent)]">bez glumljenja velikog servisa.</span>
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-stone-300 leading-relaxed">
              <p>
                Nisam velika servisna firma i neću se tako predstavljati. Moj fokus su svakodnevni IT problemi: spori Windowsi, osnovna optimizacija, backup, softver, i pomoć korisnicima koji žele normalno objašnjenje.
              </p>
              <p>
                Ako problem izgleda kao ozbiljan hardverski kvar, oštećen disk ili napredni kvar matične ploče — reći ću vam da je bolje obratiti se specijaliziranom servisu.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <ul className="space-y-5">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-4 group/item">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[var(--color-accent)] group-hover/item:bg-[var(--color-accent)] group-hover/item:text-white transition-colors">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-stone-100 font-semibold text-lg md:text-xl leading-snug pt-1">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
