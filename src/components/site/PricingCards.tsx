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
    <Section id="cijene" className="bg-[var(--color-bg-primary)] border-t border-[var(--color-border)] py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section)]">
      <div className="mb-12 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
          Cjenik usluga
        </h2>
        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
          Bez neugodnih iznenađenja. Uvijek znate okvirnu procjenu prije nego što krenemo s radom.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {packages.map((pkg, index) => {
          const isFeatured = pkg.badge === "Najčešći izbor";
          return (
          <div 
            key={index} 
            className={`flex flex-col h-full p-6 md:p-8 border rounded-[var(--radius-card)] transition-all duration-200 relative pt-10 ${
              isFeatured 
                ? 'bg-[#1C1917] border-[#1C1917] shadow-xl md:-translate-y-2 rotate-1' 
                : 'bg-[var(--color-bg-surface)] border-[var(--color-border)] shadow-[var(--shadow-weightless)] hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--color-border-strong)]'
            }`}
          >
            <div className="mb-6">
              <div className="flex flex-col gap-2 mb-3">
                <h3 className={`text-xl font-bold ${isFeatured ? 'text-[#FDFBF7]' : 'text-[var(--color-text-primary)]'}`}>
                  {pkg.title}
                </h3>
                {pkg.badge && (
                  <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                    <span className="bg-[var(--color-accent)] text-white text-xs font-bold px-3 py-1 rounded-sm shadow-sm rotate-3 inline-block">
                      {pkg.badge}
                    </span>
                  </div>
                )}
              </div>
              <div className="mb-4">
                <span className={`text-3xl font-bold ${isFeatured ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-primary)]'}`}>
                  {pkg.price}
                </span>
              </div>
              <p className={`text-sm leading-relaxed mb-4 min-h-[40px] ${isFeatured ? 'text-[#A8A29E]' : 'text-[var(--color-text-secondary)]'}`}>
                {pkg.description}
              </p>
              <p className={`font-medium text-xs uppercase tracking-wider mb-2 ${isFeatured ? 'text-[#FDFBF7]' : 'text-[var(--color-text-primary)]'}`}>
                Najbolje za
              </p>
              <p className={`text-sm italic min-h-[40px] ${isFeatured ? 'text-[#A8A29E]' : 'text-[var(--color-text-secondary)]'}`}>
                {pkg.bestFor}
              </p>
            </div>
            
            <div className={`flex-grow pt-6 border-t ${isFeatured ? 'border-gray-800' : 'border-[var(--color-border)]'}`}>
              <ul className="space-y-3 mb-8">
                {pkg.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${isFeatured ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-secondary)]'}`} />
                    <span className={`font-medium ${isFeatured ? 'text-[#FDFBF7]' : 'text-[var(--color-text-secondary)]'}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto">
              <a href="#kontakt" className={`block w-full text-center py-2.5 px-4 rounded-[var(--radius-button)] font-semibold text-sm transition-colors shadow-sm ${
                isFeatured 
                  ? 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] border-transparent' 
                  : 'bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-muted)]'
              }`}>
                Zatraži ovu uslugu
              </a>
            </div>
          </div>
        )})}
      </div>

      <div className="p-6 bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-[var(--radius-card)] flex gap-4 items-start max-w-4xl shadow-[var(--shadow-weightless)]">
        <Info className="w-5 h-5 text-[var(--color-text-secondary)] shrink-0 mt-0.5" />
        <div>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            <span className="font-semibold text-[var(--color-text-primary)]">Važna napomena: </span>
            Cijena se dogovara prije rada. Ako se tijekom pregleda pokaže da je problem veći nego što izgleda, prvo objasnim što sam našao i koliko bi dalje koštalo.
          </p>
        </div>
      </div>
    </Section>
  );
}
