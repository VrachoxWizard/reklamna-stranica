"use client";

import { useEffect, useRef } from "react";
import { Section } from "./Section";
import gsap from "gsap";
import { Clock, AlertTriangle, CloudOff, HeartHandshake } from "lucide-react";
import { cn } from "@/lib/utils";

const problems = [
  {
    title: "Laptop je postao jako spor",
    description: "Dugo se pali, šteka kod otvaranja programa ili se ventilator stalno čuje.",
    icon: Clock,
  },
  {
    title: "Windows se ponaša čudno",
    description: "Greške, update problemi, rušenja, zamrzavanje ili poruke koje ne razumijete.",
    icon: AlertTriangle,
  },
  {
    title: "Bojite se za podatke",
    description: "Vaše fotografije, dokumenti i radovi nisu backupirani i strah vas je kvara diska.",
    icon: CloudOff,
  },
  {
    title: "Trebate poštenu pomoć",
    description: "Ne želite platiti veliki servis ako je problem možda jednostavan, a rješenje brzo.",
    icon: HeartHandshake,
  }
];

export function ProblemCards() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".problem-reveal", {
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
    <Section className="bg-[var(--color-bg-primary)] relative overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />
      
      <div className="mb-20 md:mb-24 max-w-4xl relative z-10">
        <div className="problem-reveal inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-surface)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-600 mb-8 shadow-sm">
          Česti problemi
        </div>
        <h2 className="problem-reveal text-5xl md:text-7xl font-bold text-[var(--color-text-primary)] mb-10 tracking-tighter leading-[0.95]">
          Računalo vas usporava <br className="hidden md:block" /> više nego što pomaže?
        </h2>
        <p className="problem-reveal text-xl md:text-2xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl font-medium">
          Najčešće se ne radi o &quot;velikom kvaru&quot;, nego o kombinaciji sitnih softverskih problema koji se s vremenom nakupe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 relative z-10">
        {problems.map((problem, index) => {
          const Icon = problem.icon;
          return (
            <div 
              key={index} 
              className="problem-reveal group flex flex-col sm:flex-row gap-8 p-10 rounded-[2.5rem] border border-[var(--color-border)] bg-[var(--color-bg-surface)] hover:shadow-weightless-hover hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm">
                <Icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4 tracking-tight">
                  {problem.title}
                </h3>
                <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed font-medium">
                  {problem.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
