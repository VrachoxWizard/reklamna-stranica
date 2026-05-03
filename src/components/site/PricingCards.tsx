import { Section } from "./Section";
import { Check, Info } from "lucide-react";

const packages = [
  {
    title: "Brzi pregled",
    price: "Od 20 €",
    description: "Osnovna procjena problema za korisnike koji ne znaju u čemu je problem.",
    includes: [
      "Kratak razgovor o problemu",
      "Osnovna provjera računala/laptopa",
      "Procjena softver vs hardver",
      "Preporuka sljedećeg koraka"
    ]
  },
  {
    title: "Windows osvježenje",
    price: "Od 35 €",
    badge: "Najčešći izbor",
    description: "Za spora i zapuštena Windows računala kojima treba osnovno sređivanje.",
    includes: [
      "Pregled startup programa",
      "Osnovno čišćenje nepotrebnih stvari",
      "Provjera prostora na disku",
      "Osnovna provjera updateova"
    ]
  },
  {
    title: "Sigurniji podaci",
    price: "Od 30 €",
    description: "Pomoć oko spremanja i organizacije važnih datoteka.",
    includes: [
      "Kopiranje na vanjski disk",
      "Postavljanje cloud backupa",
      "Organizacija važnih foldera",
      "Osnovna provjera virusa"
    ]
  },
  {
    title: "Čisto i mirnije računalo",
    price: "Od 45 €",
    description: "Detaljniji pregled za računala koja se pregrijavaju ili su bučna.",
    includes: [
      "Provjera temperature",
      "Detaljnije čišćenje sustava",
      "Pregled ventilatora/buke",
      "Preporuka za hardver"
    ]
  },
  {
    title: "Mala IT pomoć",
    price: "Od 25 €",
    description: "Za jednostavne zadatke i pomoć oko programa ili svakodnevnog korištenja.",
    includes: [
      "Instalacija softvera",
      "Podešavanje browsera",
      "Pomoć s emailom",
      "PDF, Office, Zoom"
    ]
  }
];

export function PricingCards() {
  return (
    <Section id="cijene" className="bg-[var(--color-bg-primary)] border-t border-[var(--color-border)] py-16 md:py-24">
      <div className="mb-12 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
          Cjenik usluga
        </h2>
        <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
          Bez neugodnih iznenađenja. Uvijek znate okvirnu procjenu prije nego što krenemo s radom.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {packages.map((pkg, index) => (
          <div 
            key={index} 
            className="flex flex-col h-full p-6 md:p-8 bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-sm"
          >
            <div className="mb-6">
              <div className="flex flex-col gap-2 mb-3">
                <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                  {pkg.title}
                </h3>
                {pkg.badge && (
                  <div className="inline-flex">
                    <span className="bg-[var(--color-accent)] text-white text-xs font-semibold px-2 py-1 rounded-sm">
                      {pkg.badge}
                    </span>
                  </div>
                )}
              </div>
              <div className="mb-4">
                <span className="text-2xl font-bold text-[var(--color-text-primary)]">
                  {pkg.price}
                </span>
              </div>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed min-h-[40px]">
                {pkg.description}
              </p>
            </div>
            
            <div className="flex-grow pt-6 border-t border-[var(--color-border)]">
              <ul className="space-y-3">
                {pkg.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 mt-0.5 text-[var(--color-text-secondary)] shrink-0" />
                    <span className="text-[var(--color-text-secondary)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-sm flex gap-4 items-start max-w-4xl">
        <Info className="w-5 h-5 text-[var(--color-text-secondary)] shrink-0 mt-0.5" />
        <div>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            <span className="font-semibold text-[var(--color-text-primary)]">Važna napomena: </span>
            Cijene su okvirne i ovise o problemu. Prije rada dogovaramo što se radi i koliko okvirno košta. Licence, dijelovi i dodatna oprema nisu uključeni.
          </p>
        </div>
      </div>
    </Section>
  );
}
