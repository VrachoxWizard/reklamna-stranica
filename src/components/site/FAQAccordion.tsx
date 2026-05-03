"use client";

import { useState, useEffect, useRef } from "react";
import { Section } from "./Section";
import gsap from "gsap";
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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-reveal", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
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

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section className="bg-[var(--color-bg-primary)] overflow-hidden" ref={containerRef}>
      <div className="mb-20 md:mb-24 max-w-4xl">
        <div className="faq-reveal inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-surface)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--color-text-tertiary)] mb-6 shadow-sm">
          FAQ
        </div>
        <h2 className="faq-reveal text-5xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-8 tracking-tighter leading-[0.95]">
          Česta pitanja
        </h2>
        <p className="faq-reveal text-xl md:text-2xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl font-medium">
          Sve što trebate znati prije nego se javite. Iskreno, direktno i bez tehničkog preseravanja.
        </p>
      </div>

      <div className="max-w-4xl space-y-5">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={cn(
                "faq-reveal group rounded-[2rem] border transition-all duration-500 overflow-hidden",
                isOpen 
                  ? "bg-white border-[var(--color-accent)]/30 shadow-weightless" 
                  : "bg-[var(--color-bg-surface)] border-[var(--color-border)] hover:border-[var(--color-border-strong)]"
              )}
            >
              <button 
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-8 sm:p-10 text-left focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className={cn(
                  "text-2xl font-bold tracking-tight transition-all duration-300",
                  isOpen ? "text-[var(--color-accent)]" : "text-[var(--color-text-primary)]"
                )}>
                  {faq.question}
                </span>
                <div className={cn(
                  "flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500",
                  isOpen ? "bg-[var(--color-accent)] text-white rotate-180 shadow-lg shadow-[var(--color-accent)]/20" : "bg-[var(--color-bg-primary)] text-[var(--color-text-tertiary)]"
                )}>
                  <ChevronDown className="w-6 h-6 stroke-[3]" />
                </div>
              </button>
              
              <div 
                className={cn(
                  "grid transition-all duration-500 ease-in-out",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="p-8 sm:p-10 pt-0 text-xl text-[var(--color-text-secondary)] leading-relaxed font-medium">
                    <div className="pt-8 border-t border-[var(--color-border)]/40">
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
