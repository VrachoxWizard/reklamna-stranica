import { CheckCircle2 } from "lucide-react";

export function HonestySection() {
  const bullets = [
    "Prije rada dogovaramo okvirnu cijenu",
    "Objašnjavam problem jednostavnim jezikom",
    "Ne obećavam ono što ne mogu napraviti",
    "Ne forsiram nepotrebne popravke",
    "Fokusiram se na rješenje, a ne na kompliciranje"
  ];

  return (
    <div className="bg-[#1C1917] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-[#FDFBF7]">
              Pošten pristup,<br />bez glumljenja velikog servisa.
            </h2>
            <div className="space-y-6 text-lg text-[#A8A29E] leading-relaxed">
              <p>
                Nisam velika servisna firma i neću se tako predstavljati. Moj fokus su svakodnevni IT problemi: spori Windowsi, osnovna optimizacija, spašavanje slika i ugodno objašnjavanje onima kojima je to potrebno.
              </p>
              <p>
                Ako problem izgleda kao ozbiljan hardverski kvar, poput oštećenog diska iz kojeg se čuje klikanje ili je otišla matična ploča — reći ću vam iskreno da je bolje potražiti specijalizirani servis koji se bavi time.
              </p>
            </div>
          </div>

          <div className="pt-2 lg:pt-0">
            <ul className="space-y-6">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center text-[var(--color-accent)]">
                    <CheckCircle2 className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <span className="text-[#FDFBF7] md:text-lg leading-snug pt-1">
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
