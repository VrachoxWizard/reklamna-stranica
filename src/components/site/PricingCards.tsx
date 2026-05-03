import { Section } from "./Section";
import { Check, Info } from "lucide-react";

const packages = [
  {
    title: "Mini pomoć",
    price: "Od 20 €",
    description: "Za manje probleme s emailom, preglednikom, printerom, osnovnim postavkama i brzom dijagnostikom.",
    bestFor: "Idealno za brzo rješavanje sitnih frustracija.",
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
    bestFor: "Za laptope i računala koji se sporo pale i otežano rade.",
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
    bestFor: "Kada je strah od gubitka podataka na prvom mjestu.",
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
    description: "Za početnike i korisnike kojima trebaju jednostavna objašnjenja tehničkih koncepata i softvera.",
    bestFor: "Za starije osobe i obitelji s raznim IT pitanjima.",
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
    <Section id="cijene" className="bg-stone-50 py-16 md:py-24 border-t border-stone-200">
      <div className="mb-10 max-w-3xl px-6 md:px-0">
        <h2 className="text-3xl md:text-5xl font-bold text-stone-950 mb-6">
          Okvirne cijene
        </h2>
        <p className="text-lg md:text-xl text-stone-800 leading-relaxed border-l-[3px] border-stone-300 pl-4">
          Bez neugodnih iznenađenja. Uvijek prvo napravimo kratku procjenu pa se dogovorimo prije početka rada.
        </p>
      </div>

      <div className="flex overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 snap-x snap-mandatory">
        {packages.map((pkg, index) => {
          const isFeatured = pkg.badge === "Najčešći izbor";
          return (
          <div 
            key={index} 
            className={`relative flex-none w-[85vw] sm:w-[320px] md:w-auto flex flex-col p-5 md:p-6 rounded-lg transition-all duration-200 snap-center ${
              isFeatured 
                ? 'bg-white border-[2px] border-emerald-700' 
                : 'bg-white border border-stone-200'
            }`}
          >
            {pkg.badge && (
              <div className="mb-3">
                <span className="text-emerald-700 text-xs font-bold uppercase tracking-wider">
                  {pkg.badge}
                </span>
              </div>
            )}
            
            <div className="mb-5">
              <h3 className="text-lg md:text-xl font-bold text-stone-950 mb-2">
                {pkg.title}
              </h3>
              <div className="text-2xl md:text-3xl font-extrabold text-stone-950 mb-3">
                {pkg.price}
              </div>
              <p className="text-sm text-stone-800 leading-relaxed min-h-[60px]">
                {pkg.description}
              </p>
            </div>
            
            <div className="flex-grow pt-4 border-t border-stone-100">
              <ul className="space-y-2.5 mb-6">
                {pkg.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-emerald-700" />
                    <span className="font-medium text-stone-800">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto">
              <a href="#kontakt" className={`flex w-full min-h-[44px] items-center justify-center text-center px-4 rounded-lg font-bold text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isFeatured 
                  ? 'bg-emerald-700 text-white hover:bg-stone-800 focus:ring-emerald-700' 
                  : 'bg-stone-50 border border-stone-200 text-stone-950 hover:bg-stone-100 focus:ring-stone-950'
              }`}>
                Zatraži ovu uslugu
              </a>
            </div>
          </div>
        )})}
      </div>

      <div className="mt-4 p-5 md:p-6 bg-white border border-stone-200 rounded-lg flex flex-col md:flex-row gap-4 items-start max-w-4xl mx-6 md:mx-0">
        <Info className="w-6 h-6 text-stone-600 shrink-0 mt-0.5" />
        <div>
          <p className="text-stone-900 leading-relaxed">
            <span className="font-bold text-stone-950">Važna napomena: </span>
            Ove cijene su okvirne i služe za orijentaciju. Ovise o konkretnom uređaju i dubini problema. Ako se tijekom pregleda pokaže da je problem kompliciraniji ili zahtijeva servisne dijelove, prvo ću vam sve objasniti i dati točnu cijenu nastavka rada. Ništa se ne radi na silu.
          </p>
        </div>
      </div>
    </Section>
  );
}