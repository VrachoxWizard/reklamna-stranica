import { Section } from "./Section";
import { MessageCircle, Mail, Phone, ArrowDownRight } from "lucide-react";

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
          
          <p className="text-lg text-stone-800 mb-8 leading-relaxed">
            Pošaljite mi kratko što ne radi, kada je počelo i koji uređaj koristite. Ne morate znati nikakve tehničke izraze, objasnite točno onako kako vidite.
          </p>

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

        <div className="flex flex-col mb-4 gap-4">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[64px] flex items-center justify-between px-6 rounded-lg bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-colors focus:ring-4 focus:ring-[#25D366]/30 shadow-sm"
            aria-label="Pošalji upit preko WhatsAppa"
          >
            <div className="flex items-center gap-4">
              <MessageCircle className="w-7 h-7" />
              <span className="text-lg md:text-xl font-bold">Pošalji poruku na WhatsApp</span>
            </div>
          </a>
          
          <a 
            href={`tel:${PHONE_E164}`}
            className="w-full min-h-[64px] flex items-center gap-4 px-6 rounded-lg border-2 border-stone-200 bg-white text-stone-950 hover:border-stone-300 hover:bg-stone-50 transition-colors focus:ring-4 focus:ring-stone-200"
            aria-label={`Nazovi ${PHONE_NUMBER_DISPLAY}`}
          >
            <Phone className="w-6 h-6 text-[var(--color-accent)]" />
            <span className="text-lg md:text-xl font-bold">Nazovi {PHONE_NUMBER_DISPLAY}</span>
          </a>

          <a 
            href={`mailto:${EMAIL_ADDRESS}`}
            className="w-full min-h-[64px] flex items-center gap-4 px-6 rounded-lg border border-stone-200 bg-white text-stone-800 hover:border-stone-300 hover:bg-stone-50 transition-colors focus:ring-4 focus:ring-stone-200 focus:outline-none"
            aria-label={`Pošalji email na ${EMAIL_ADDRESS}`}
          >
            <Mail className="w-6 h-6 text-stone-600 shrink-0" aria-hidden="true" />
            <span className="text-sm sm:text-base font-medium truncate" title={EMAIL_ADDRESS}>{EMAIL_ADDRESS}</span>
          </a>
        </div>

      </div>
    </Section>
  );
}