import { Section } from "./Section";
import { 
  Settings, 
  Zap, 
  ShieldCheck, 
  Download, 
  Users, 
  Database
} from "lucide-react";

const services = [
  {
    title: "Windows optimizacija",
    description: "Pregled pokretanja sustava, nepotrebnih programa, osnovnih postavki, prostora na disku i stvari koje najčešće usporavaju računalo.",
    goodFor: ["Sporo paljenje računala", "Spori programi", "Puni disk", "Previše programa u startupu"],
    icon: Settings,
  },
  {
    title: "Pomoć kod sporog računala",
    description: "Ako računalo “šteka”, prvo gledamo uzrok: softver, disk, memoriju, previše procesa ili moguće znakove kvara.",
    goodFor: ["Laptop koji je prije radio bolje", "Računalo koje se zamrzava", "Osnovna dijagnostika performansi", "Savjet treba li nadogradnja"],
    icon: Zap,
  },
  {
    title: "Backup važnih podataka",
    description: "Pomoć oko spremanja važnih dokumenata, fotografija i datoteka na vanjski disk, cloud ili drugi siguran način.",
    goodFor: ["Fotografije i videi", "Važni dokumenti", "Školske i poslovne datoteke", "Priprema prije reinstalacije"],
    icon: Database,
  },
  {
    title: "Osnovna provjera virusa",
    description: "Pregled sumnjivih programa, browser dodataka, pop-upova i osnovno uklanjanje neželjenih stvari gdje je to moguće.",
    note: "Napomena: Kod težih infekcija preporučujem reinstalaciju Windowsa radi sigurnosti.",
    icon: ShieldCheck,
  },
  {
    title: "Instalacija softvera",
    description: "Pomoć s instalacijom osnovnih programa, preglednika, uredskih alata, PDF čitača i aplikacija za rad.",
    goodFor: ["Firefox / Chrome / Edge", "Office / LibreOffice", "PDF alati", "Zoom / Teams / Email"],
    icon: Download,
  },
  {
    title: "IT pomoć za početnike",
    description: "Objašnjenje problema normalnim jezikom, bez ismijavanja i bez pretpostavke da “to već morate znati”.",
    goodFor: ["Starije korisnike", "Treću životnu dob", "Početnike", "Sve koji se boje kliknuti"],
    icon: Users,
  }
];

export function ServicesGrid() {
  return (
    <Section id="usluge" className="bg-[var(--color-bg-surface)] py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section)] border-t border-[var(--color-border)]">
      <div className="mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
          Kako vam točno mogu pomoći?
        </h2>
        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
          Radim stvari koje muče većinu kućnih korisnika — od čišćenja do prebacivanja slika. Ne nudim sve, ali ono što nudim radim pošteno.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isFeatured = index === 0 || index === 2; // Making specific items span 2 columns
          
          return (
            <div 
              key={index} 
              className={`flex flex-col p-6 rounded-[var(--radius-card)] bg-[var(--color-bg-primary)] border border-[var(--color-border)] shadow-[var(--shadow-weightless)] ${isFeatured ? 'md:col-span-2' : 'md:col-span-1'}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-primary)]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)]">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-base text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {service.goodFor && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] mb-3">
                    Najčešće riješavam:
                  </h4>
                  <ul className="flex flex-wrap gap-2">
                    {service.goodFor.map((item, i) => (
                      <li key={i} className="inline-flex items-center rounded-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] px-3 py-1 text-sm font-medium text-[var(--color-text-secondary)]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.note && (
                <div className="mt-4 p-4 border-l-2 border-[var(--color-text-secondary)] bg-[var(--color-bg-primary)]">
                  <p className="text-sm font-medium italic text-[var(--color-text-secondary)]">
                    {service.note}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
