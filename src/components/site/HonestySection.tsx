"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function HonestySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".honesty-reveal", {
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

  const bullets = [
    "Prije rada dogovaramo okvirnu cijenu",
    "Objašnjavam problem jednostavnim jezikom",
    "Ne obećavam ono što ne mogu napraviti",
    "Ne forsiram nepotrebne usluge",
    "Fokus na rješenje, ne na kompliciranje"
  ];

  return (
    <div className="bg-stone-900 text-white py-24 md:py-32 relative overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="honesty-reveal text-5xl md:text-6xl font-bold mb-10 tracking-tighter leading-[0.95]">
              Pošteno, jednostavno i <span className="text-[var(--color-accent)]">bez glumljenja velikog servisa.</span>
            </h2>
            <div className="honesty-reveal space-y-8 text-xl md:text-2xl text-stone-400 leading-relaxed font-medium">
              <p>
                Nisam velika servisna firma i neću se tako predstavljati. Moj fokus su svakodnevni IT problemi: spori Windowsi, osnovna optimizacija, backup, softver, i pomoć korisnicima koji žele normalno objašnjenje.
              </p>
              <p>
                Ako problem izgleda kao ozbiljan hardverski kvar, oštećen disk ili napredni kvar matične ploče — reći ću vam da je bolje obratiti se specijaliziranom servisu.
              </p>
            </div>
          </div>

          <div className="honesty-reveal glass-dark border border-white/10 rounded-[2.5rem] p-10 md:p-12 backdrop-blur-xl relative group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--color-accent)]/10 rounded-full blur-[80px] group-hover:bg-[var(--color-accent)]/20 transition-colors" />
            
            <ul className="space-y-8 relative z-10">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-5 group/item">
                  <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] group-hover/item:bg-[var(--color-accent)] group-hover/item:text-white transition-all">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-stone-200 font-bold text-2xl tracking-tight leading-none pt-1">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
