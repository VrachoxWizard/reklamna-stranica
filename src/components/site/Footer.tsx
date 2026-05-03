
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-reveal", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
        y: 20,
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
    <footer className="bg-stone-950 text-white py-24 md:py-32 relative overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-20 mb-24">
          
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <h2 className="footer-reveal text-3xl font-bold text-white mb-8 tracking-tighter leading-none">
              Direkt IT Pomoć <span className="text-[var(--color-accent)]">Zagreb</span>
            </h2>
            <p className="footer-reveal mb-10 leading-relaxed text-stone-400 max-w-md text-xl font-medium">
              Poštena i razumljiva IT pomoć za stvarne ljude. Fokus na Windows optimizaciju, backup podataka i svakodnevnu tehničku podršku u Zagrebu.
            </p>
            <div className="footer-reveal flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-white/5 rounded-xl text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] border border-white/10">Zagreb i okolica</span>
              <span className="px-4 py-2 bg-white/5 rounded-xl text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] border border-white/10">Windows Ekspert</span>
            </div>
          </div>

          {/* Links */}
          <div className="footer-reveal">
            <h3 className="text-[10px] font-black text-stone-600 uppercase tracking-[0.3em] mb-10">Navigacija</h3>
            <ul className="space-y-6">
              <li><a href="#usluge" className="text-stone-400 hover:text-white transition-colors text-lg font-bold tracking-tight">Usluge</a></li>
              <li><a href="#cijene" className="text-stone-400 hover:text-white transition-colors text-lg font-bold tracking-tight">Cijene</a></li>
              <li><a href="#kontakt" className="text-stone-400 hover:text-white transition-colors text-lg font-bold tracking-tight">Kontakt</a></li>
            </ul>
          </div>

          {/* Contact info (placeholders) */}
          <div className="footer-reveal">
            <h3 className="text-[10px] font-black text-stone-600 uppercase tracking-[0.3em] mb-10">Kontakt</h3>
            <ul className="space-y-6">
              <li><a href="mailto:info@example.com" className="text-stone-400 hover:text-white transition-colors text-lg font-bold tracking-tight">info@example.com</a></li>
              <li><a href="tel:+385900000000" className="text-stone-400 hover:text-white transition-colors text-lg font-bold tracking-tight">+385 90 000 0000</a></li>
              <li><a href="https://wa.me/385900000000" className="text-stone-400 hover:text-white transition-colors text-lg font-bold tracking-tight font-black uppercase text-sm tracking-widest bg-[var(--color-accent)] text-white px-5 py-3 rounded-xl inline-block">WhatsApp poruka</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-reveal border-t border-white/5 pt-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
            <p className="text-sm text-stone-500 max-w-2xl leading-relaxed font-medium">
              <strong className="text-stone-400 font-bold uppercase tracking-widest text-[10px] block mb-2">Odricanje od odgovornosti</strong> 
              Usluga je namijenjena osnovnim i srednje zahtjevnim IT problemima. Za fizička oštećenja, napredni data recovery i kompleksne hardverske kvarove preporučujem specijalizirani servis.
            </p>
            <p className="text-xs font-bold text-stone-700 whitespace-nowrap uppercase tracking-widest">
              &copy; {currentYear} Direkt IT Pomoć Zagreb.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
