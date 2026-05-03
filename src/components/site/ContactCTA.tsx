"use client";

import { useEffect, useRef } from "react";
import { Section } from "./Section";
import gsap from "gsap";
import { MessageCircle, Mail, Phone, ArrowRight } from "lucide-react";

export function ContactCTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Magnetic effect for buttons
      const buttons = gsap.utils.toArray<HTMLElement>(".magnetic-btn");
      
      buttons.forEach((btn) => {
        const handleMouseMove = (e: MouseEvent) => {
          const { clientX, clientY } = e;
          const { left, top, width, height } = btn.getBoundingClientRect();
          const x = (clientX - (left + width / 2)) * 0.35;
          const y = (clientY - (top + height / 2)) * 0.35;

          gsap.to(btn, {
            x: x,
            y: y,
            duration: 0.4,
            ease: "power2.out",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.3)",
          });
        };

        btn.addEventListener("mousemove", handleMouseMove);
        btn.addEventListener("mouseleave", handleMouseLeave);
      });

      // Animated background noise
      gsap.to(".contact-noise", {
        x: -20,
        y: -20,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="kontakt" className="bg-stone-900 text-white relative overflow-hidden py-24 md:py-32" ref={containerRef}>
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-noise contact-noise opacity-30 mix-blend-soft-light pointer-events-none scale-110" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-accent)]/20 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/2" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10 px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/60 mb-8">
          Kontaktirajte me
        </div>
        
        <h2 className="text-5xl md:text-7xl font-bold mb-10 text-white tracking-tighter leading-[0.95]">
          Niste sigurni <br className="hidden md:block" /> što nije u redu?
        </h2>
        
        <p className="text-xl md:text-2xl text-white/70 mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
          Pošaljite mi opis problema. Ne morate znati tehničke detalje — dovoljno je napisati što se događa, a ja ću vam reći što dalje.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-20">
          <a 
            href="https://wa.me/385900000000" 
            className="magnetic-btn group flex items-center justify-center gap-4 px-12 py-6 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-[2rem] font-bold text-xl transition-shadow shadow-2xl shadow-[#25D366]/20"
          >
            <MessageCircle className="w-7 h-7 fill-current" />
            WhatsApp
          </a>
          
          <a 
            href="mailto:info@example.com" 
            className="magnetic-btn group flex items-center justify-center gap-4 px-12 py-6 bg-white text-stone-900 rounded-[2rem] font-bold text-xl transition-shadow shadow-2xl shadow-white/5"
          >
            <Mail className="w-7 h-7" />
            Email poruka
          </a>

          <a 
            href="tel:+385900000000" 
            className="magnetic-btn group flex items-center justify-center gap-4 px-12 py-6 bg-transparent border-2 border-white/20 hover:border-white/40 hover:bg-white/5 text-white rounded-[2rem] font-bold text-xl transition-all"
          >
            <Phone className="w-7 h-7" />
            Nazovi
          </a>
        </div>

        <div className="glass-dark rounded-[2.5rem] p-10 md:p-12 text-left max-w-3xl mx-auto border border-white/10 relative group overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <MessageCircle className="w-24 h-24 text-white" />
          </div>
          
          <p className="text-xs text-white/40 uppercase tracking-[0.3em] font-black mb-6">
            Primjer poruke za slanje:
          </p>
          <div className="relative">
            <p className="text-2xl md:text-3xl text-white italic font-medium leading-tight tracking-tight">
              &quot;Laptop se sporo pali, ventilator se čuje i sve šteka zadnjih tjedan dana. Model je HP Pavilion. Možete li pogledati?&quot;
            </p>
            <div className="mt-8 flex items-center gap-3 text-[var(--color-accent)] font-bold uppercase text-[10px] tracking-widest">
              <span>Napišite nešto slično</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
