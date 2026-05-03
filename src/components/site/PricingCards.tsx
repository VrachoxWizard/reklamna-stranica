"use client";

import { useEffect, useRef } from "react";
import { Section } from "./Section";
import gsap from "gsap";
import { Check, Info, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const packages = [
  {
    title: "Brzi pregled",
    price: "Od 20 €",
    description: "Za korisnike koji ne znaju što nije u redu i žele osnovnu procjenu problema.",
    includes: [
      "Kratak razgovor o problemu",
      "Osnovna provjera računala/laptopa",
      "Procjena softver vs hardver",
      "Preporuka sljedećeg koraka"
    ],
    bestFor: "“Ne znam što se dogodilo”, “Računalo se čudno ponaša”",
    featured: false
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
      "Osnovna provjera updateova",
      "Savjeti za urednije korištenje"
    ],
    bestFor: "Sporo paljenje, Općenito štekanje, Previše programa",
    featured: true
  },
  {
    title: "Mala IT pomoć",
    price: "Od 25 €",
    description: "Za jednostavne zadatke i pomoć oko programa, postavki ili svakodnevnog korištenja.",
    includes: [
      "Instalacija legitimnog softvera",
      "Podešavanje browsera",
      "Osnovna pomoć s emailom",
      "PDF, Office, Zoom/Teams",
      "Kratko objašnjenje korisniku"
    ],
    bestFor: "Starije korisnike, Početnike, Studente",
    featured: false
  }
];

export function PricingCards() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal animation
      gsap.from(".pricing-card", {
        scrollTrigger: {
          trigger: ".pricing-card",
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

      // Hover effects
      gsap.utils.toArray<HTMLElement>(".pricing-card").forEach((card) => {
        const tl = gsap.timeline({ paused: true });
        tl.to(card, {
          y: -12,
          scale: 1.02,
          duration: 0.4,
          ease: "power2.out",
          boxShadow: "0 30px 60px rgba(28, 25, 23, 0.12)",
        });

        card.addEventListener("mouseenter", () => tl.play());
        card.addEventListener("mouseleave", () => tl.reverse());
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="cijene" className="bg-[var(--color-bg-primary)] overflow-hidden" ref={containerRef}>
      <div className="mb-20 md:mb-24 max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-surface)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-6 shadow-sm">
          Cjenik usluga
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-8 tracking-tighter leading-[0.9]">
          Jednostavne cijene
        </h2>
        <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl font-medium">
          Bez neugodnih iznenađenja. Uvijek znate okvirnu procjenu prije nego što krenemo s radom.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
        {packages.map((pkg, index) => (
          <div 
            key={index} 
            className={cn(
              "pricing-card group relative flex flex-col h-full p-10 rounded-[2.5rem] transition-all duration-500 overflow-hidden",
              pkg.featured 
                ? "bg-[var(--color-text-primary)] text-white lg:scale-105 z-10 shadow-2xl" 
                : "bg-[var(--color-bg-surface)] border border-[var(--color-border)] shadow-card"
            )}
          >
            {pkg.featured && (
              <>
                <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/20 blur-3xl -z-10" />
                <div className="absolute top-0 right-10 bg-[var(--color-accent)] text-white text-[10px] font-black uppercase tracking-[0.2em] py-2 px-5 rounded-b-2xl shadow-lg z-10">
                  {pkg.badge}
                </div>
              </>
            )}
            
            <div className="mb-10 relative z-10">
              <h3 className={cn(
                "text-2xl font-bold mb-4 tracking-tight",
                pkg.featured ? "text-white" : "text-[var(--color-text-primary)]"
              )}>
                {pkg.title}
              </h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className={cn(
                  "text-5xl font-black tracking-tighter",
                  pkg.featured ? "text-white" : "text-[var(--color-accent)]"
                )}>
                  {pkg.price.split(" ")[1]}
                </span>
                <span className={cn(
                  "text-lg font-bold opacity-60",
                  pkg.featured ? "text-white" : "text-[var(--color-text-secondary)]"
                )}>
                  €
                </span>
                <span className={cn(
                  "text-sm font-bold ml-2 opacity-40 uppercase tracking-widest",
                  pkg.featured ? "text-white" : "text-[var(--color-text-tertiary)]"
                )}>
                  {pkg.price.split(" ")[0]}
                </span>
              </div>
              <p className={cn(
                "text-lg leading-relaxed font-medium",
                pkg.featured ? "text-stone-300" : "text-[var(--color-text-secondary)]"
              )}>
                {pkg.description}
              </p>
            </div>
            
            <div className="flex-grow mb-10 relative z-10">
              <ul className="space-y-5">
                {pkg.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm font-semibold">
                    <div className={cn(
                      "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center",
                      pkg.featured ? "bg-white/10 text-[var(--color-accent)]" : "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                    )}>
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className={pkg.featured ? "text-stone-200" : "text-[var(--color-text-secondary)]"}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={cn(
              "pt-10 border-t relative z-10",
              pkg.featured ? "border-white/10" : "border-[var(--color-border)]/40"
            )}>
              <div className="flex items-start gap-3 mb-10">
                <Info className={cn("w-5 h-5 flex-shrink-0 mt-0.5", pkg.featured ? "text-stone-400" : "text-[var(--color-text-tertiary)]")} />
                <p className={cn(
                  "text-sm font-medium leading-relaxed",
                  pkg.featured ? "text-stone-400" : "text-[var(--color-text-secondary)]"
                )}>
                  <span className={cn("font-bold", pkg.featured ? "text-white" : "text-[var(--color-text-primary)]")}>Najbolje za: </span>
                  {pkg.bestFor}
                </p>
              </div>
              
              <a href="#kontakt" className={cn(
                "w-full py-5 px-6 rounded-[1.5rem] text-center font-bold text-lg transition-all active:scale-95 flex items-center justify-center gap-2 group/btn",
                pkg.featured
                  ? "bg-[var(--color-accent)] text-white shadow-xl shadow-[var(--color-accent)]/30 hover:bg-[var(--color-accent-hover)]"
                  : "bg-[var(--color-text-primary)] text-white hover:bg-stone-800 shadow-xl shadow-stone-900/10"
              )}>
                Zatraži procjenu
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 p-10 bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-[2.5rem] max-w-4xl shadow-card relative overflow-hidden group">
        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-shrink-0 w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-600">
            <Info className="w-8 h-8" />
          </div>
          <p className="text-base font-medium text-[var(--color-text-secondary)] leading-relaxed text-center md:text-left">
            <span className="font-bold text-[var(--color-text-primary)] block mb-1">Važna napomena</span>
            Cijene su okvirne i ovise o kompleksnosti problema. Prije početka rada uvijek dogovaramo točan opseg i procjenu troška. Licence i rezervni dijelovi nisu uključeni u cijenu rada.
          </p>
        </div>
      </div>
    </Section>
  );
}
