"use client";

import { useState } from "react";
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

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="pitanja" className="bg-[#FAF9F6] py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
            Česta pitanja
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Odgovori na ono što me ljudi najčešće pitaju prije nego što se dogovorimo.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="group rounded-2xl border border-neutral-200/60 bg-white transition-colors duration-200 hover:border-neutral-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left min-h-[60px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-medium text-neutral-800">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-50 text-neutral-500 group-hover:bg-amber-50 group-hover:text-amber-700 transition-colors">
                    {isOpen ? (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    )}
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
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