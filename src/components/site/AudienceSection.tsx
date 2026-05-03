"use client";

import { useEffect, useRef } from "react";
import { Section } from "./Section";
import gsap from "gsap";
import { Home, Users, GraduationCap, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

const audiences = [
  {
    title: "Za kućne korisnike",
    description: "Ako vam laptop služi za internet, dokumente, slike, plaćanja i svakodnevne stvari — a nešto ne radi kako treba.",
    icon: Home,
  },
  {
    title: "Za starije korisnike",
    description: "Ako želite da vam netko strpljivo objasni problem normalnim jezikom, bez tehničkog pametovanja.",
    icon: Users,
  },
  {
    title: "Za studente",
    description: "Ako vam treba funkcionalan laptop za učenje, seminare, online nastavu i nesmetan rad.",
    icon: GraduationCap,
  },
  {
    title: "Za male urede",
    description: "Ako imate jednostavan problem s računalom, backupom ili softverom, ali ne trebate veliki IT ugovor.",
    icon: Briefcase,
  }
];

export function AudienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".audience-reveal", {
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
      <div className="mb-20 md:mb-24 max-w-4xl">
        <div className="audience-reveal inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-surface)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-6 shadow-sm">
          Kome pomažem?
        </div>
        <h2 className="audience-reveal text-5xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-8 tracking-tighter leading-[0.95]">
          Normalna IT pomoć <br className="hidden md:block" /> za normalne ljude.
        </h2>
        <p className="audience-reveal text-xl md:text-2xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl font-medium">
          Nisam servis za velike korporacije, nego za stvarne ljude koji trebaju podršku oko svojih uređaja bez kompliciranja.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        {audiences.map((audience, index) => {
          const Icon = audience.icon;
          return (
            <div 
              key={index} 
              className="audience-reveal group flex flex-col sm:flex-row gap-8 p-10 rounded-[2.5rem] border border-[var(--color-border)] bg-[var(--color-bg-surface)] hover:shadow-weightless-hover hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex-shrink-0 w-20 h-20 bg-[var(--color-bg-primary)] rounded-[1.5rem] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300 shadow-sm">
                <Icon className="w-10 h-10 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4 tracking-tight leading-none">
                  {audience.title}
                </h3>
                <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed font-medium">
                  {audience.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
