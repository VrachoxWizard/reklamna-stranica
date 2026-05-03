"use client";

import { useState } from "react";
import { Section } from "./Section";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Možete li popraviti svaki kvar?",
    answer: "Ne. Fokusiram se na softverske probleme i osnovnu optimizaciju. Ako problem izgleda kao ozbiljan hardverski kvar matične ploče ili ekrana, savjetovat ću Vam odlazak u specijalizirani servis."
  },
  {
    question: "Što ako ne znate riješiti problem?",
    answer: "Ako nakon pregleda shvatim da je problem izvan mog znanja, reći ću Vam to otvoreno. Ne naplaćujem pokušaje rješavanja ako od početka znam da ne mogu pomoći."
  },
  {
    question: "Radite li reinstalaciju Windowsa?",
    answer: "Da, ali prije bilo kakvog brisanja uvijek provjerimo i napravimo backup Vaših važnih slika i dokumenata kako se ne bi ništa izgubilo."
  },
  {
    question: "Možete li spasiti podatke s pokvarenog diska?",
    answer: "Ako disk nije fizički oštećen i još se može očitati, da. Ako disk glasno klika ili se uopće ne pali, tu nažalost pomažu samo firme za data recovery."
  },
  {
    question: "Pomažete li starijim osobama i početnicima?",
    answer: "Svakako. Velik dio posla je upravo to — smireno objašnjavanje kako nešto funkcionira, bez okretanja očima."
  },
  {
    question: "Je li cijena unaprijed poznata?",
    answer: "Cijena ovisi o problemu, ali prije bilo kakvog rada na računalu napravim kratku procjenu i kažem Vam koliko bi to otprilike koštalo."
  },
  {
    question: "Radite li izlazak na teren?",
    answer: "Moguće prema dogovoru ako se radi o rješavanju problema kod Vas doma, poput problema s kućnim printerom ili WiFi mrežom u Zagrebu."
  },
  {
    question: "Instalirate li piratske Windowse i programe?",
    answer: "Ne. Radim isključivo s Windows licencama koje već imate ili vam mogu preporučiti gdje povoljno kupiti legalan ključ."
  }
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section className="bg-[var(--color-bg-primary)] py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section)] border-t border-[var(--color-border)]">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6">
            Česta pitanja
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Sve što trebate znati prije nego se javite. Bez sitnih slova.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border-b border-[var(--color-border)] last:border-0"
              >
                <button 
                  onClick={() => toggleItem(index)}
                  className="w-full min-h-[56px] flex items-center justify-between gap-4 py-5 md:py-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={cn(
                    "text-lg md:text-xl font-bold leading-snug transition-colors break-words",
                    isOpen ? "text-[var(--color-accent)]" : "text-[var(--color-text-primary)]"
                  )}>
                    {faq.question}
                  </span>
                  <div className={cn(
                    "flex-shrink-0 transition-transform duration-300",
                    isOpen ? "text-[var(--color-accent)] rotate-180" : "text-[var(--color-text-secondary)]"
                  )}>
                    <ChevronDown className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </button>
                
                <div 
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100 mb-6" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed pr-8 break-words">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
