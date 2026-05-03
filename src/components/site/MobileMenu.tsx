"use client";

import { useState, useEffect } from "react";
import { X, MessageCircle, Menu } from "lucide-react";
import Link from "next/link";

const WHATSAPP_LINK = "https://wa.me/385994414638";

const navItems = [
  { label: "Usluge", href: "#usluge" },
  { label: "Cijene", href: "#cijene" },
  { label: "O meni", href: "#o-meni" },
  { label: "Česta pitanja", href: "#pitanja" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Close menu on route change
  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    window.addEventListener("hashchange", handleRouteChange);
    return () => window.removeEventListener("hashchange", handleRouteChange);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors focus:outline-none focus:ring-2 focus:ring-stone-300"
        aria-label="Otvori izbornik"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Menu Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-[85vw] max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigacijski izbornik"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-stone-200">
          <span className="font-semibold text-stone-950 tracking-tight text-base">
            Izbornik
          </span>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-10 h-10 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors focus:outline-none focus:ring-2 focus:ring-stone-300"
            aria-label="Zatvori izbornik"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-5" aria-label="Navigacija">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-4 py-3 text-lg font-medium text-stone-900 hover:bg-stone-50 hover:text-[var(--color-accent)] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Section */}
        <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-stone-200 bg-stone-50">
          <a
            href="#kontakt"
            onClick={(e) => handleNavClick(e, "#kontakt")}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] px-4 py-3 text-base font-semibold text-white hover:bg-[var(--color-accent-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 mb-3"
          >
            <MessageCircle className="w-5 h-5" />
            Pošalji problem
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-white border-2 border-stone-200 px-4 py-3 text-base font-semibold text-stone-950 hover:bg-stone-50 hover:border-stone-300 transition-colors focus:outline-none focus:ring-2 focus:ring-stone-200 focus:ring-offset-2"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}