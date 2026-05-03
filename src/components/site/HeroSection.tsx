"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Section } from "./Section";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%",
          toggleActions: "play none none none",
        }
      });
      
      tl.from(".hero-reveal", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        clearProps: "all",
      });

      tl.from(".hero-image", {
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      }, "-=0.6");

      tl.from(".hero-badge", {
        x: -20,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      }, "-=0.4");

      // Continuous floating for the image and card
      gsap.to(".hero-image", {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-badge", {
        y: -8,
        x: 5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Interactive mouse follow (Magnetic effect)
      const handleMouseMove = (e: MouseEvent) => {
        if (!imageRef.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = imageRef.current.getBoundingClientRect();
        const x = (clientX - (left + width / 2)) / 30;
        const y = (clientY - (top + height / 2)) / 30;

        gsap.to(imageRef.current, {
          rotateX: -y,
          rotateY: x,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section className="bg-[var(--color-bg-primary)] pt-20 pb-12 md:pt-32 md:pb-24 overflow-hidden relative" ref={containerRef}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-accent)]/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
        {/* Left — Copy */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left" ref={contentRef}>
          <div className="hero-reveal hero-tag inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] glass px-4 py-1.5 text-sm font-semibold text-[var(--color-text-secondary)] mb-8 shadow-weightless">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-accent)]"></span>
            </span>
            IT pomoć — Zagreb i okolica
          </div>
          
          <h1 className="hero-reveal text-5xl sm:text-6xl lg:text-[4rem] xl:text-7xl font-bold tracking-tighter text-[var(--color-text-primary)] mb-8 leading-[0.95]">
            Sporo računalo?
            <br />
            <span className="text-[var(--color-accent)]">Riješimo to.</span>
          </h1>
          
          <p className="hero-reveal text-xl sm:text-2xl leading-relaxed text-[var(--color-text-secondary)] mb-10 max-w-xl text-balance font-medium">
            Pomažem ljudima koji se bore sa sporim Windowsima, čudnim greškama i nejasnim postavkama. Jasno, pošteno i direktno.
          </p>
          
          <div className="hero-reveal flex flex-col sm:flex-row gap-4 mb-14 w-full sm:w-auto">
            <a href="#kontakt" className="inline-flex items-center justify-center rounded-2xl bg-[var(--color-accent)] px-8 py-4 sm:px-10 sm:py-5 text-lg font-bold text-white shadow-2xl shadow-[var(--color-accent)]/30 hover:bg-[var(--color-accent-hover)] hover:-translate-y-1 transition-all active:scale-95 text-center">
              Pošalji upit
              <ArrowRight className="ml-2 h-6 w-6" />
            </a>
            <a href="#cijene" className="inline-flex items-center justify-center rounded-2xl bg-[var(--color-bg-surface)] border border-[var(--color-border)] glass px-8 py-4 sm:px-10 sm:py-5 text-lg font-bold text-[var(--color-text-primary)] hover:bg-[var(--color-bg-muted)] hover:-translate-y-1 transition-all active:scale-95 text-center shadow-weightless">
              Pogledaj cijene
            </a>
          </div>

          <div className="hero-reveal grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-[var(--color-text-secondary)]">
            {[
              "Cijena unaprijed",
              "Pošten pristup",
              "Bez kompliciranja"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="font-bold tracking-wide uppercase text-[10px]">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Image */}
        <div className="relative hidden lg:block perspective-2000" ref={imageRef}>
          <div className="hero-image relative rounded-[2.5rem] overflow-hidden shadow-[var(--shadow-weightless)] aspect-[4/3] border-4 border-[var(--color-bg-surface)] bg-[var(--color-bg-surface)]">
            <Image 
              src="/images/hero_desk_setup.png"
              alt="Uredni radni stol s laptopom"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 0vw, 50vw"
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-stone-900/10 to-transparent pointer-events-none" />
          </div>
          
          {/* Floating accent card */}
          <div className="hero-badge absolute -bottom-10 -left-10 glass rounded-3xl p-6 shadow-2xl border border-white/50 max-w-[240px]">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-accent)] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[var(--color-accent)]/20">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-base font-bold text-[var(--color-text-primary)] leading-tight">Dostupan odmah</p>
                <p className="text-xs text-[var(--color-text-tertiary)] mt-1 font-medium leading-relaxed">Šaljem procjenu čim pošaljete opis problema.</p>
              </div>
            </div>
          </div>

          {/* Decorative shapes */}
          <div className="absolute -top-10 -right-10 w-32 h-32 glass rounded-full blur-2xl opacity-40 -z-10 animate-pulse" />
        </div>
      </div>
    </Section>
  );
}
