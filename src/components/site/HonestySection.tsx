import { Section } from "./Section";

export function HonestySection() {
  return (
    <Section className="bg-white py-16 md:py-24 border-t border-stone-200" id="pristup">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-stone-50 p-8 md:p-12 rounded-3xl border border-stone-200 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-stone-900 leading-snug">
            Iskren pristup, bez glumljenja velikog IT servisa.
          </h2>
          
          <div className="space-y-6 text-lg text-stone-700 leading-relaxed">
            <p>
              Bok, ja sam Mate. Nisam velika servisna firma, već ciljam pomoći običnim korisnicima sa svakodnevnim frustracijama. Ako vam Windowsi rade sporo, trebate osnovnu optimizaciju, prebacivanje podataka ili vam samo treba netko da vam na miru objasni kako nešto podesiti — tu sam.
            </p>
            <p>
              Princip rada je jednostavan i pošten: prvo porazgovaramo o problemu, napravim brzu procjenu i dogovorimo okvirnu cijenu prije nego što išta počnem raditi. Nema skrivenih troškova. 
            </p>
            <p>
              Isto tako, otvoren sam oko onoga što <strong>ne</strong> nudim. Ne bavim se naprednom hardverskom elektronikom, popravcima poslije prolijevanja kave, instalacijom piratskog softvera niti spašavanjem podataka s fizički krepali diskova. Ako za vaš problem treba specijalizirana oprema, reći ću vam to odmah.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
