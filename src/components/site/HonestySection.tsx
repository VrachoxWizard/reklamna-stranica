import { Section } from "./Section";
import { X, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { ImageWithSkeleton } from "./ImageWithSkeleton";

const notIncluded = [
  "Napredno spašavanje podataka s fizički oštećenih diskova",
  "Popravak matičnih ploča, lemljenje, šteta od tekućine",
  "Instalacija piratskog softvera ili krekiranog Windowsa",
  "Garantirano rješavanje svakog problema bez prethodnog pregleda",
];

export function HonestySection() {
  return (
    <Section className="bg-white py-24 md:py-32 border-t border-stone-200" id="o-meni">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-stone-950 mb-10 leading-[1.1]">
              Iskren pristup, bez <span className="text-[var(--color-accent)]">glumljenja</span> velikog servisa.
            </h2>
            
            <div className="space-y-6 text-lg text-stone-800 leading-relaxed">
              <p>
                Bok, ja sam <span className="font-bold text-stone-950 underline decoration-[var(--color-accent)] decoration-2 underline-offset-4">Mate</span>. Nisam velika servisna firma, već ciljam pomoći običnim korisnicima sa svakodnevnim frustracijama. 
              </p>
              <p>
                Ako vam Windowsi rade sporo, trebate osnovnu optimizaciju, prebacivanje podataka ili vam samo treba netko da vam na miru objasni kako nešto podesiti — tu sam.
              </p>
              <p>
                Princip rada je jednostavan i pošten: prvo porazgovaramo o problemu, napravim brzu procjenu i dogovorimo okvirnu cijenu prije nego što išta počnem raditi.
              </p>
            </div>

            <div className="mt-12 p-8 bg-stone-50 rounded-2xl border border-stone-100">
              <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-6">Što ne nudim</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-stone-600 text-sm leading-snug">
                    <X className="w-4 h-4 mt-0.5 shrink-0 text-stone-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 pt-6 border-t border-stone-200/50 text-stone-500 text-sm italic">
                Ako za vaš problem treba specijalizirana oprema, reći ću vam to odmah — i uputiti vas na pravo mjesto.
              </p>
            </div>
          </div>

          {/* Right — Visual/About card */}
          <div className="lg:col-span-5">
            <div className="relative pb-12 lg:pb-0">
              {/* Image background */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-stone-50 img-card-shadow rotate-1 lg:rotate-3">
                <ImageWithSkeleton
                  src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?q=80&w=1170&auto=format&fit=crop"
                  alt="Ugodan kućni radni stol s laptopom i biljenicama"
                  width={500}
                  height={600}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
              </div>

              {/* Overlaid card */}
              <div className="absolute -bottom-8 -left-8 right-8 bg-white rounded-2xl shadow-xl border border-stone-100 p-6 z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-bold text-lg">M</div>
                  <div>
                    <p className="font-bold text-stone-950">Mate / Vrachox</p>
                    <p className="text-sm text-stone-500">IT pomoćnik iz Zagreba</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {[
                    "Cijena poznata unaprijed",
                    "Bez skrivenih troškova",
                    "Jednostavna objašnjenja",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
