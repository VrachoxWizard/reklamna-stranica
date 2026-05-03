"use client";

import { useEffect, useRef } from "react";
import { Section } from "./Section";
import gsap from "gsap";
import { 
  Settings, 
  Zap, 
  ShieldCheck, 
  Download, 
  Users, 
  Database,
  ArrowUpRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Windows optimizacija",
    description: "Pregled pokretanja sustava, nepotrebnih programa, osnovnih postavki, prostora na disku i stvari koje najčešće usporavaju računalo.",
    goodFor: ["Sporo paljenje računala", "Spori programi", "Puni disk", "Previše programa u startupu"],
    icon: Settings,
    glass: true,
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
    glass: true,
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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: ".service-card",
          start: "top 92%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "all",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="usluge" className="bg-[var(--color-bg-primary)] overflow-hidden" ref={containerRef}>
      <div className="mb-16 md:mb-24 max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-surface)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-6 shadow-sm">
          Pregled usluga
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-8 tracking-tighter leading-[0.9]">
          Što točno radim?
        </h2>
        <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl font-medium">
          Fokus je na jednostavnim i srednje zahtjevnim problemima — Windows optimizacija, backup i svakodnevna tehnička pomoć.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => {
          const isWide = index === 0 || index === 3;
          const Icon = service.icon;
          
          return (
            <div 
              key={index} 
              className={cn(
                "service-card group relative flex flex-col h-full p-10 rounded-[2.5rem] border border-[var(--color-border)] transition-all duration-500 overflow-hidden",
                isWide ? "lg:col-span-2" : "lg:col-span-1",
                service.glass ? "glass shadow-weightless" : "bg-[var(--color-bg-surface)] shadow-card hover:shadow-weightless-hover hover:-translate-y-2"
              )}
            >
              {/* Subtle noise texture */}
              <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />
              
              <div className="relative z-10 flex items-start justify-between mb-8">
                <div className="flex-shrink-0 w-14 h-14 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-2xl flex items-center justify-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Icon className="w-7 h-7" />
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-6 h-6 text-[var(--color-text-tertiary)]" />
                </div>
              </div>
              
              <h3 className="relative z-10 text-3xl font-bold text-[var(--color-text-primary)] leading-tight mb-4 tracking-tight">
                {service.title}
              </h3>
              
              <p className="relative z-10 text-[var(--color-text-secondary)] mb-10 flex-grow text-lg leading-relaxed font-medium">
                {service.description}
              </p>
              
              {service.goodFor && (
                <div className="relative z-10 pt-8 border-t border-[var(--color-border)]/40">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {service.goodFor.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-bold text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.note && (
                <div className="relative z-10 mt-6 p-5 rounded-2xl bg-[var(--color-bg-primary)]/50 border border-[var(--color-border)]/60 backdrop-blur-sm">
                  <p className="text-sm font-semibold text-[var(--color-text-secondary)] leading-relaxed italic">
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
