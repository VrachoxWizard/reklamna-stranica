import { Section } from "./Section";
import { Check, Info, Star, ChevronLeft, ChevronRight } from "lucide-react";

const packages = [
  {
    title: "Mini pomoć",
    price: "Od 20 €",
    description: "Za manje probleme s emailom, preglednikom, printerom, osnovnim postavkama i brzom dijagnostikom.",
    bestFor: "Brzo rješavanje sitnih frustracija.",
    includes: [
      "Provjera manjih grešaka",
      "Pomoć s emailom i browserom",
      "Podešavanje osnovne opreme",
      "Kratki savjet za dalje"
    ]
  },
  {
    title: "Windows Refresh",
    price: "Oko 45 €",
    badge: "Najčešći izbor",
    description: "Za spora računala: osnovni pregled, startup čišćenje, driveri i detaljnija provjera nepotrebnih stvari.",
    bestFor: "Laptope i računala koji se sporo pale.",
    includes: [
      "Pregled startup programa",
      "Uklanjanje nepotrebnog softvera",
      "Provjera ažuriranja sustava",
      "Osnovno čišćenje preglednika"
    ]
  },
  {
    title: "Backup + sređivanje",
    price: "Od 55 €",
    description: "Za korisnike koji žele zaštititi važne datoteke prije dubljeg čišćenja ili reinstalacije Windowsa.",
    bestFor: "Kada je sigurnost podataka prioritet.",
    includes: [
      "Siguran backup na disk",
      "Prijenos fotografija i dokumenata",
      "Sistemsko čišćenje",
      "Uputa za budući backup"
    ]
  },
  {
    title: "Kućna IT pomoć",
    price: "Po dogovoru",
    description: "Za početnike kojima trebaju jednostavna objašnjenja tehničkih koncepata i softvera.",
    bestFor: "Starije osobe i obitelji s raznim pitanjima.",
    includes: [
      "Objašnjenje Windows značajki",
      "Savjeti za izbjegavanje prevara",
      "Podešavanje kućne mreže",
      "Strpljivi odgovori na pitanja"
    ]
  }
];

export function PricingCards() {
  return (
    <Section id="cijene" className="bg-[#FDFBF7] py-24 md:py-32 border-t border-stone-200">
      <div className="mb-10 max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-stone-950 mb-8 leading-[1.1]">
          Okvirne cijene
        </h2>
        <p className="text-xl text-stone-700 leading-relaxed border-l-4 border-[var(--color-accent)] pl-6 py-1">
          Bez neugodnih iznenađenja. Uvijek prvo napravimo kratku procjenu pa se dogovorimo prije početka rada.
        </p>
      </div>

      <div className="relative">
        {/* Mobile scroll hint - only visible on mobile */}
        <div className="lg:hidden flex items-center justify-center gap-2 mb-4 text-stone-400 text-xs font-medium">
          <ChevronLeft className="w-4 h-4" />
          <span>Prevucite za više opcija</span>
          <ChevronRight className="w-4 h-4" />
        </div>

        <div className="flex overflow-x-auto pt-10 pb-12 -mx-5 px-5 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-4 gap-8 snap-x snap-mandatory hide-scrollbars">
        {packages.map((pkg, index) => {
          const isFeatured = pkg.badge === "Najčešći izbor";
          return (
          <div 
            key={index} 
            className={`relative flex-none w-[85vw] sm:w-[320px] lg:w-auto h-full flex flex-col p-8 md:p-10 rounded-3xl transition-all duration-300 snap-center group ${
              isFeatured 
                ? 'bg-white border-2 border-[var(--color-accent)] shadow-2xl scale-[1.02] z-10' 
                : 'bg-white border border-stone-200 shadow-sm hover:shadow-xl hover:border-stone-300'
            }`}
          >
            {pkg.badge && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1.5 bg-[var(--color-accent)] text-white text-[11px] font-extrabold uppercase tracking-widest px-5 py-2 rounded-full shadow-xl shadow-teal-900/20">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  {pkg.badge}
                </span>
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-stone-950 mb-4 group-hover:text-[var(--color-accent)] transition-colors tracking-tight">
                {pkg.title}
              </h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-extrabold text-stone-950 tracking-tighter">{pkg.price}</span>
              </div>
              <p className="text-sm text-stone-700 leading-relaxed min-h-[60px] opacity-90">
                {pkg.description}
              </p>
              <div className="mt-6 pt-6 border-t border-stone-100">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-stone-400 mb-2">Najbolje za:</p>
                <p className="text-[12px] font-bold text-stone-900 leading-snug">{pkg.bestFor}</p>
              </div>
            </div>
            
            <div className="flex-grow pt-8 border-t border-stone-50">
              <ul className="space-y-4 mb-10">
                {pkg.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-stone-700 leading-tight font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto pt-6">
              <a href="#kontakt" className={`flex w-full min-h-[56px] items-center justify-center text-center px-8 rounded-xl font-bold text-sm transition-all active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isFeatured 
                  ? 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] focus:ring-[var(--color-accent)] shadow-xl shadow-teal-900/10' 
                  : 'bg-stone-50 border border-stone-200 text-stone-950 hover:bg-stone-100 focus:ring-stone-950'
              }`}>
                Pošalji upit
              </a>
            </div>
          </div>
        )})}
      </div>
      </div>

      <div className="mt-12 p-8 bg-white border border-stone-200 rounded-2xl shadow-sm flex flex-col md:flex-row gap-6 items-start max-w-4xl mx-5 lg:mx-0">
        <div className="shrink-0 w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center">
          <Info className="w-6 h-6 text-stone-500" />
        </div>
        <div>
          <p className="text-stone-800 leading-relaxed text-sm">
            <span className="font-bold text-stone-950">Važna napomena: </span>
            Ove cijene su okvirne i služe za orijentaciju. Ovise o konkretnom uređaju i dubini problema. Ako se tijekom pregleda pokaže da je problem kompliciraniji ili zahtijeva servisne dijelove, prvo ću vam sve objasniti i dati točnu cijenu nastavka rada. Ništa se ne radi na silu.
          </p>
        </div>
      </div>
    </Section>
  );
}