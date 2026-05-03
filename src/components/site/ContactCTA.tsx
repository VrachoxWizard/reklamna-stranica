import { Section } from "./Section";
import { MessageCircle, Mail, Phone } from "lucide-react";

const PHONE_NUMBER_DISPLAY = "0994414638";
const PHONE_E164 = "+385994414638";
const WHATSAPP_LINK = "https://wa.me/385994414638";
const EMAIL_ADDRESS = "matevukusic123321@gmail.com";

export function ContactCTA() {
  return (
    <Section id="kontakt" className="bg-[var(--color-bg-primary)] border-t border-[var(--color-border)] py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section)]">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[var(--color-text-primary)]">
          Trebate pomoć? Javite se.
        </h2>
        
        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto leading-relaxed">
          Pošaljite kratko što ne radi, kada je počelo i koji uređaj koristite. Ne morate znati tehničke izraze, samo objasnite vlastitim riječima.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[120px] flex flex-col items-center justify-center gap-2 rounded-[var(--radius-button)] bg-[#25D366] p-6 text-white transition-colors hover:bg-[#20bd5a] shadow-[var(--shadow-weightless)]"
            aria-label="Pošalji upit preko WhatsAppa"
          >
            <MessageCircle className="w-8 h-8 mb-1" />
            <span className="text-lg font-bold">WhatsApp</span>
            <span className="text-sm font-medium text-white/90">Najbrži odgovor</span>
          </a>
          
          <a 
            href={`mailto:${EMAIL_ADDRESS}`}
            className="w-full min-h-[120px] flex flex-col items-center justify-center gap-2 rounded-[var(--radius-button)] bg-[var(--color-bg-surface)] border border-[var(--color-border)] p-6 text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-bg-muted)] shadow-[var(--shadow-weightless)]"
            aria-label={`Pošalji email na ${EMAIL_ADDRESS}`}
          >
            <Mail className="w-8 h-8 text-[var(--color-text-secondary)] mb-1" />
            <span className="text-lg font-bold">Email</span>
            <span className="text-sm font-medium text-[var(--color-text-secondary)]">Za dulji opis</span>
          </a>

          <a 
            href={`tel:${PHONE_E164}`}
            className="w-full min-h-[120px] flex flex-col items-center justify-center gap-2 rounded-[var(--radius-button)] border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-6 text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-bg-muted)] shadow-[var(--shadow-weightless)]"
            aria-label={`Nazovi ${PHONE_NUMBER_DISPLAY}`}
          >
            <Phone className="w-8 h-8 text-[var(--color-text-secondary)] mb-1" />
            <span className="text-lg font-bold">Telefon</span>
            <span className="text-sm font-medium text-[var(--color-text-secondary)]">{PHONE_NUMBER_DISPLAY}</span>
          </a>
        </div>

        <div className="mx-auto max-w-xl rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-6 text-left shadow-[var(--shadow-weightless)]">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[var(--color-text-secondary)]">
            Primjer poruke
          </p>
          <div className="bg-[var(--color-bg-primary)] p-4 rounded-lg border border-[var(--color-border)]">
            <p className="text-base md:text-lg text-[var(--color-text-primary)] font-medium leading-relaxed italic">
              &quot;Laptop se sporo pali zadnjih par dana. Windows 11 je u pitanju.
              Trebam provjeru i savjet što se isplati napraviti.&quot;
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
