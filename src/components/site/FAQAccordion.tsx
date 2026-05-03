"use client";

import { useState } from "react";
import { Section } from "./Section";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Možete li popraviti svaki kvar?",
    answer: "Ne. Fokusiram se na jednostavne i srednje IT probleme: Windows, optimizaciju, backup, softver i osnovno troubleshooting. Ako problem izgleda kao ozbiljan hardverski kvar, oštećen disk ili napredni servis elektronike, reći ću vam to otvoreno."
  },
  {
    question: "Što ako ne znate riješiti problem?",
    answer: "Ako nakon pregleda vidim da problem nije u mojoj domeni, objasnit ću vam što sam primijetio i koji je najbolji sljedeći korak. Ne želim naplaćivati nepotrebne pokušaje ako je jasno da treba specijalizirani servis."
  },
  {
    question: "Radite li reinstalaciju Windowsa?",
    answer: "Mogu pomoći oko Windows problema i osnovnog podešavanja, ali reinstalacija se dogovara ovisno o situaciji, licenci i backupu podataka. Prije bilo kakvog zahvata važno je provjeriti podatke."
  },
  {
    question: "Možete li spasiti podatke s pokvarenog diska?",
    answer: "Ne predstavljam se kao data recovery servis. Mogu pomoći s backupom podataka s ispravnih diskova. Ako disk pokazuje ozbiljne znakove kvara, bolje je obratiti se specijaliziranom servisu za spašavanje podataka."
  },
  {
    question: "Pomažete li starijim osobama i početnicima?",
    answer: "Da. Velik dio usluge je upravo strpljivo objašnjenje problema normalnim jezikom. Nema glupih pitanja, samo konkretni odgovori."
  },
  {
    question: "Koliko košta pregled računala?",
    answer: "Osnovni pregled kreće od 20 €, ovisno o problemu i dogovoru. Ako se dogovorimo za konkretnu uslugu, pregled se obično uračunava u ukupnu cijenu."
  },
  {
    question: "Radite li na terenu?",
    answer: "Moguće je prema dogovoru, ovisno o lokaciji i problemu. Za neke probleme je praktičnije prvo poslati fotografiju ekrana ako postoji greška."
  },
  {
    question: "Možete li ukloniti viruse?",
    answer: "Mogu pomoći s osnovnim čišćenjem malwarea i browser problema. Ne obećavam 100% uklanjanje kod ozbiljnih infekcija ili ransomwarea."
  }
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section className="bg-[var(--color-bg-primary)] overflow-hidden">
      <div className="mb-12 md:mb-16 max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-surface)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)] mb-5">
          FAQ
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6 leading-tight">
          Česta pitanja
        </h2>
        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
          Sve što trebate znati prije nego se javite. Iskreno, direktno i bez tehničkog preseravanja.
        </p>
      </div>

      <div className="max-w-4xl space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={cn(
                "group rounded-xl border transition-colors overflow-hidden",
                isOpen 
                  ? "bg-white border-[var(--color-accent)]/30 shadow-weightless" 
                  : "bg-[var(--color-bg-surface)] border-[var(--color-border)] hover:border-[var(--color-border-strong)]"
              )}
            >
              <button 
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
                aria-expanded={isOpen}
              >
                <span className={cn(
                  "text-lg md:text-xl font-bold leading-snug transition-colors",
                  isOpen ? "text-[var(--color-accent)]" : "text-[var(--color-text-primary)]"
                )}>
                  {faq.question}
                </span>
                <div className={cn(
                  "flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-transform",
                  isOpen ? "bg-[var(--color-accent)] text-white rotate-180" : "bg-[var(--color-bg-primary)] text-[var(--color-text-tertiary)]"
                )}>
                  <ChevronDown className="w-5 h-5 stroke-[3]" />
                </div>
              </button>
              
              <div 
                className={cn(
                  "grid transition-all duration-500 ease-in-out",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="p-5 sm:p-6 pt-0 text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    <div className="pt-5 border-t border-[var(--color-border)]/40">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
