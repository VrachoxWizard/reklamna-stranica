import { Section } from "./Section";
import { X, CheckCircle2 } from "lucide-react";

const notIncluded = [
  "Napredno spašavanje podataka s fizički oštećenih diskova",
  "Popravak matičnih ploča, lemljenje, šteta od tekućine",
  "Instalacija piratskog softvera ili krekiranog Windowsa",
  "Garantirano rješavanje svakog problema bez prethodnog pregleda",
];

export function HonestySection() {
  return (
    <Section className="bg-white py-16 md:py-24 border-t border-stone-200" id="o-meni">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-stone-50 p-8 md:p-12 rounded-lg border border-stone-200 grid grid-cols-1 md:grid-cols-[1fr_280px] gap-8 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-stone-950 leading-snug">
              Iskren pristup, bez glumljenja velikog IT servisa.
            </h2>
            
            <div className="space-y-6 text-lg text-stone-900 leading-relaxed">
              <p>
                Bok, ja sam Mate. Nisam velika servisna firma, već ciljam pomoći običnim korisnicima sa svakodnevnim frustracijama. Ako vam Windowsi rade sporo, trebate osnovnu optimizaciju, prebacivanje podataka ili vam samo treba netko da vam na miru objasni kako nešto podesiti — tu sam.
              </p>
              <p>
                Princip rada je jednostavan i pošten: prvo porazgovaramo o problemu, napravim brzu procjenu i dogovorimo okvirnu cijenu prije nego što išta počnem raditi. Nema skrivenih troškova. 
              </p>
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-stone-500 mb-4">Što ne nudim</p>
              <ul className="space-y-3">
                {notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-stone-700 text-base">
                    <X className="w-4 h-4 mt-0.5 shrink-0 text-stone-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-stone-600 text-sm leading-relaxed">
                Ako za vaš problem treba specijalizirana oprema, reći ću vam to odmah — i uputiti vas na pravo mjesto.
              </p>
            </div>
          </div>

          {/* Right — About card */}
          <div className="w-full rounded-xl border border-[var(--color-border)] bg-white shadow-sm overflow-hidden md:mt-2">
            {/* Person header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--color-border)] bg-stone-50">
              <div
                className="w-10 h-10 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-bold text-base shrink-0 select-none"
                aria-hidden="true"
              >
                M
              </div>
              <div className="leading-snug">
                <p className="text-sm font-semibold text-stone-900">Mate</p>
                <p className="text-xs text-stone-500">IT pomoćnik · Zagreb i okolica</p>
              </div>
            </div>

            {/* How I work */}
            <div className="px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3">
                Kako radim
              </p>
              <ul className="flex flex-col gap-2.5" role="list">
                {[
                  "Cijena se dogovara prije rada",
                  "Nema skrivenih troškova",
                  "Ako ne znam, odmah kažem",
                  "Upućujem na pravo mjesto ako treba specijalist",
                ].map((trait) => (
                  <li key={trait} className="flex items-center gap-2.5">
                    <CheckCircle2
                      className="w-4 h-4 text-[var(--color-accent)] shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-stone-700">{trait}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Email */}
            <div className="border-t border-[var(--color-border)] px-5 py-3 bg-stone-50">
              <a
                href="mailto:matevukusic123321@gmail.com"
                className="text-xs text-[var(--color-accent)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 rounded"
              >
                matevukusic123321@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
