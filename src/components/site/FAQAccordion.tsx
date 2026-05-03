"use client";

import { useState, useRef } from "react";
import { Section } from "./Section";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Radite li dolazak na lokaciju?",
    answer: "Da, za većinu problema dolazim do vas u Zagrebu i bližoj okolici. Neke stvari, ako zahtijevaju više sati rada (poput dubokog skeniranja i spašavanja podataka), možda ponesem kod sebe pa vam vratim sređeno.",
  },
  {
    question: "Mogu li prvo poslati opis problema na WhatsApp?",
    answer: "Naravno, to je i najbolje. Napišite mi ukratko što se događa, poslikajte ekran ako ima neka greška, pa ću vam odmah reći ima li smisla da to gledam i koliko bi otprilike koštalo.",
  },
  {
    question: "Što ako se problem ne može riješiti?",
    answer: "Ako nakon pregleda zaključim da je riječ o fizičkom kvaru (npr. izgorjela matična, uništen disk) koji ja ne mogu popraviti, reći ću vam to odmah. U tom slučaju naplaćujem samo simboličnu dijagnostiku/dolazak, a ne popravak koji nije uspio.",
  },
  {
    question: "Radite li backup podataka prije reinstalacije?",
    answer: "Uvijek. Ako treba formatirati disk ili stavljati novi Windows, prvo prekopiramo vaše dokumente, slike i bitne foldere na sigurno. Vaši podaci su prioritet.",
  },
  {
    question: "Instalirate li piratske programe?",
    answer: "Ne. Koristim isključivo besplatne alternative, open-source rješenja ili originalne licence ako ih imate. Za većinu onoga što kućnom korisniku treba, postoji super besplatan program.",
  },
  {
    question: "Možete li pomoći starijim osobama i onima koji se boje kliknuti nešto krivo?",
    answer: "Apsolutno. Navikao sam raditi s ljudima kojima tehnologija ide na živce. Objasnim polako, napišem na papir korake ako treba, i uredim računalo tako da bude što jednostavnije za korištenje.",
  },
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="pitanja" className="bg-[#FDFBF7] py-24 md:py-32 border-t border-stone-200">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 md:mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-stone-950 mb-8 leading-[1.1]">
            Česta <span className="text-[var(--color-accent)]">pitanja</span>
          </h2>
          <p className="text-xl md:text-2xl text-stone-700 leading-relaxed max-w-2xl font-medium opacity-90 border-l-4 border-stone-200 pl-6">
            Odgovori na ono što me ljudi najčešće pitaju prije nego što se dogovorimo.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="group rounded-lg border border-stone-200/60 bg-white transition-colors duration-200 hover:border-stone-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left min-h-[60px] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-medium text-stone-800">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-50 text-stone-500 group-hover:bg-[var(--color-accent-light)] group-hover:text-[var(--color-accent)] transition-colors">
                    {isOpen ? (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    )}
                  </span>
                </button>
                
                <div
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? (contentRefs.current[index]?.scrollHeight || 0) + "px" : "0px",
                    opacity: isOpen ? "1" : "0",
                  }}
                >
                  <div className="px-6 pb-6 text-stone-600 leading-relaxed">
                    {faq.answer}
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