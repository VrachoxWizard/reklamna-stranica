"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Section } from "./Section";
import gsap from "gsap";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Pošaljete mi opis problema",
    description: "Kratko opišite što ne radi: kada je počelo, koji uređaj koristite i imate li važne podatke.",
  },
  {
    title: "Dobijete iskrenu procjenu",
    description: "Ako mogu pomoći, dogovorimo se. Ako je kvar prevelik za moj nivo, kažem vam odmah.",
  },
  {
    title: "Pregled pa dogovor",
    description: "Nakon provjere objasnim što sam našao i predložim rješenje. Bez skrivenih troškova.",
  },
  {
    title: "Rješavanje i savjet",
    description: "Cilj je popravljeno računalo i vaše jasnije razumijevanje kako izbjeći problem ubuduće.",
  }
];

export function ProcessSteps() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-reveal", {
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

  return (
    <Section className="bg-[var(--color-bg-primary)] overflow-hidden" ref={containerRef}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Image with depth */}
        <div className="process-reveal relative order-2 lg:order-1 perspective-2000">
          <div className="relative rounded-[3rem] overflow-hidden shadow-weightless aspect-[4/5] border-8 border-white bg-white group hover:shadow-weightless-hover transition-all duration-700">
            <Image 
              src="/images/process_hands.png"
              alt="Tipkanje po laptopu — ljudski pristup IT problemima"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-stone-900/5 mix-blend-multiply pointer-events-none" />
          </div>
          
          {/* Floating glass element */}
          <div className="absolute -bottom-10 -right-10 glass rounded-3xl p-8 shadow-2xl border border-white/50 max-w-[200px] hidden md:block">
            <p className="text-3xl font-black text-[var(--color-accent)] mb-1">100%</p>
            <p className="text-sm font-bold text-[var(--color-text-secondary)] leading-tight uppercase tracking-widest">Transparentan proces</p>
          </div>
        </div>

        {/* Right Side: Editorial Timeline */}
        <div className="order-1 lg:order-2">
          <div className="process-reveal mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-surface)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-6 shadow-sm">
              Naš put
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-8 tracking-tighter leading-[0.95]">
              Kako točno radim
            </h2>
            <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] leading-relaxed max-w-xl font-medium">
              Cijenim vaše vrijeme. Komunikacija je direktna, a rješenja praktična i dugoročna.
            </p>
          </div>

          <div className="relative space-y-12 before:absolute before:left-7 before:top-2 before:bottom-2 before:w-0.5 before:bg-[var(--color-border)] before:opacity-50">
            {steps.map((step, index) => (
              <div key={index} className="process-reveal relative z-10 flex items-start gap-8 group">
                <div className="w-14 h-14 rounded-2xl bg-white border border-[var(--color-border)] text-[var(--color-text-primary)] flex-shrink-0 flex items-center justify-center font-black text-2xl shadow-card group-hover:bg-[var(--color-accent)] group-hover:text-white group-hover:border-[var(--color-accent)] transition-all duration-300">
                  {index + 1}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3 leading-tight tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
