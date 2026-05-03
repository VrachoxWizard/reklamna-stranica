import { Section } from "./Section";
import { MessageCircle, Mail, Phone, ArrowDownRight, Clock } from "lucide-react";

const PHONE_NUMBER_DISPLAY = "0994414638";
const PHONE_E164 = "+385994414638";
const WHATSAPP_LINK = "https://wa.me/385994414638";
const EMAIL_ADDRESS = "matevukusic123321@gmail.com";

export function ContactCTA() {
  return (
    <Section id="kontakt" className="bg-white border-t border-stone-200 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-stone-950 leading-tight">
            Trebate pomoć? Samo se javite.
          </h2>

          <p className="text-lg text-stone-800 mb-4 leading-relaxed">
            Pošaljite mi kratko što ne radi, kada je počelo i koji uređaj koristite. Ne morate znati nikakve tehničke izraze, objasnite točno onako kako vidite.
          </p>

          {/* Response time indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent-light)] border border-[var(--color-accent)]/20 mb-8">
            <Clock className="w-4 h-4 text-[var(--color-accent)]" />
            <span className="text-sm font-semibold text-[var(--color-accent)]">
              Odgovorim u roku od 24h
            </span>
          </div>

          <div className="relative mt-8">
            <div className="flex items-center gap-2 mb-3 text-[var(--color-accent)] font-medium text-sm ml-2">
              <ArrowDownRight className="w-4 h-4" />
              Primjer kako poruka može izgledati:
            </div>
            <div className="bg-stone-50 p-5 rounded-lg border border-stone-200 shadow-sm relative w-full sm:w-[90%]">
              <p className="text-stone-900 font-medium leading-relaxed">
                &quot;Bok, laptop se sporo pali zadnjih par tjedana, mislim da je Windows 11 gore. Ventilator stalno radi. Želim provjeriti isplati li se to srediti. Zovem se Ivan iz Dubrave.&quot;
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mb-4 gap-5">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[72px] flex items-center justify-between px-8 rounded-2xl bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-all hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 shadow-lg shadow-green-500/10 group"
            aria-label="Pošalji upit preko WhatsAppa"
          >
            <div className="flex items-center gap-4">
              <MessageCircle className="w-8 h-8 transition-transform group-hover:rotate-12" />
              <div className="flex flex-col items-start">
                <span className="text-lg md:text-xl font-bold leading-none">WhatsApp poruka</span>
                <span className="text-xs text-white/80 font-medium mt-1">Najbrži odgovor</span>
              </div>
            </div>
            <ArrowDownRight className="w-5 h-5 opacity-50" aria-hidden="true" />
          </a>
          
          <a 
            href={`tel:${PHONE_E164}`}
            className="w-full min-h-[72px] flex items-center gap-4 px-8 rounded-2xl border-2 border-stone-200 bg-white text-stone-950 hover:border-stone-300 hover:bg-stone-50 transition-all hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-stone-200"
            aria-label={`Nazovi ${PHONE_NUMBER_DISPLAY}`}
          >
            <div className="shrink-0 w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center">
              <Phone className="w-5 h-5 text-[var(--color-accent)]" />
            </div>
            <span className="text-lg md:text-xl font-bold">Nazovi {PHONE_NUMBER_DISPLAY}</span>
          </a>

          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="w-full min-h-[64px] flex items-center gap-4 px-8 rounded-2xl border border-stone-200 bg-white text-stone-800 hover:border-stone-300 hover:bg-stone-50 transition-all focus:ring-4 focus:ring-stone-200 focus:outline-none opacity-80 hover:opacity-100"
            aria-label={`Pošalji email na ${EMAIL_ADDRESS}`}
          >
            <Mail className="w-5 h-5 text-stone-600 shrink-0" aria-hidden="true" />
            <span className="text-sm font-medium truncate" title={EMAIL_ADDRESS}>{EMAIL_ADDRESS}</span>
          </a>

          {/* Quick reply buttons */}
          <div className="mt-6 pt-6 border-t border-stone-100">
            <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3">Brzi odgovori</p>
            <div className="flex flex-wrap gap-2">
              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent("Sporo računalo - trebam pomoć")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-50 border border-stone-200 text-sm font-medium text-stone-700 hover:bg-stone-100 hover:border-stone-300 transition-colors focus:outline-none focus:ring-2 focus:ring-stone-200"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                Sporo računalo
              </a>
              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent("Windows greška - trebam pomoć")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-50 border border-stone-200 text-sm font-medium text-stone-700 hover:bg-stone-100 hover:border-stone-300 transition-colors focus:outline-none focus:ring-2 focus:ring-stone-200"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                Windows greška
              </a>
              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent("Trebam backup podataka")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-50 border border-stone-200 text-sm font-medium text-stone-700 hover:bg-stone-100 hover:border-stone-300 transition-colors focus:outline-none focus:ring-2 focus:ring-stone-200"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                Backup podataka
              </a>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}