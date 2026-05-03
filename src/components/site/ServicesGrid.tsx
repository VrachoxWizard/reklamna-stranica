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
    note: "Ne obećavam “100% uklanjanje svega” kod ozbiljnih infekcija.",
    icon: ShieldCheck,
  },
  {
    title: "Instalacija softvera",
    description: "Pomoć s instalacijom osnovnih programa, browsera, uredskih alata, PDF čitača i drugih aplikacija.",
    goodFor: ["Firefox / Chrome / Edge", "Office / LibreOffice", "PDF i uredski alati", "Zoom / Teams / Email"],
    icon: Download,
  },
  {
    title: "IT pomoć za početnike",
    description: "Objašnjenje problema normalnim jezikom, bez ismijavanja i bez pretpostavke da “to morate znati”.",
    goodFor: ["Starije korisnike", "Roditelje", "Početnike", "Korisnike koji se boje kliknuti"],
    icon: Users,
  }
];

export function ServicesGrid() {
  return (
    <Section id="usluge" className="bg-[var(--color-bg-primary)]">
      <div className="mb-12 md:mb-16 max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-surface)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-6">
          Pregled usluga
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
          Što točno radim?
        </h2>
        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
          Fokus je na jednostavnim i srednje zahtjevnim problemima — Windows optimizacija, backup i svakodnevna tehnička pomoć.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          
          return (
            <div 
              key={index} 
              className="flex flex-col h-full p-6 md:p-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-surface)]"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-lg flex items-center justify-center text-[var(--color-accent)]">
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">
                {service.title}
              </h3>
              
              <p className="text-[var(--color-text-secondary)] mb-6 flex-grow leading-relaxed">
                {service.description}
              </p>
              
              {service.goodFor && (
                <div className="pt-6 border-t border-[var(--color-border)]">
                  <ul className="flex flex-col gap-2">
                    {service.goodFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.note && (
                <div className="mt-6 p-4 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border)]">
                  <p className="text-sm text-[var(--color-text-secondary)] italic">
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
