import { Section } from "./Section";
import { MessageCircle, Mail, Phone } from "lucide-react";

const PHONE_NUMBER_DISPLAY = "0994414638";
const PHONE_E164 = "+385994414638";
const WHATSAPP_LINK = "https://wa.me/385994414638";
const EMAIL_ADDRESS = "matevukusic123321@gmail.com";

export function ContactCTA() {
  return (
    <Section id="kontakt" className="bg-stone-900 text-white relative py-20 md:py-28">
      <div className="max-w-4xl mx-auto text-center px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-stone-300 mb-6">
          Kontaktirajte me
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
          Niste sigurni što nije u redu?
        </h2>
        
        <p className="text-lg md:text-xl text-stone-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Pošaljite kratko što ne radi, kada je počelo i koji uređaj koristite.
        </p>

        <div className="grid gap-4 sm:grid-cols-3 mb-8">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-20 items-center justify-center gap-3 rounded-lg bg-[#25D366] px-6 py-4 text-white transition-colors hover:bg-[#20bd5a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Pošalji upit preko WhatsAppa"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-left">
              <span className="block text-lg font-bold">WhatsApp</span>
              <span className="block text-sm font-medium text-white/90">Najbrži upit</span>
            </span>
          </a>
          
          <a 
            href={`mailto:${EMAIL_ADDRESS}`}
            className="flex min-h-20 items-center justify-center gap-3 rounded-lg bg-white px-6 py-4 text-stone-900 transition-colors hover:bg-stone-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label={`Pošalji email na ${EMAIL_ADDRESS}`}
          >
            <Mail className="w-6 h-6" />
            <span className="text-left">
              <span className="block text-lg font-bold">Email</span>
              <span className="block text-sm font-medium text-stone-600">Opis problema</span>
            </span>
          </a>

          <a 
            href={`tel:${PHONE_E164}`}
            className="flex min-h-20 items-center justify-center gap-3 rounded-lg border border-white/30 bg-transparent px-6 py-4 text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label={`Nazovi ${PHONE_NUMBER_DISPLAY}`}
          >
            <Phone className="w-6 h-6" />
            <span className="text-left">
              <span className="block text-lg font-bold">Telefon</span>
              <span className="block text-sm font-medium text-stone-300">{PHONE_NUMBER_DISPLAY}</span>
            </span>
          </a>
        </div>

        <div className="mx-auto max-w-2xl rounded-lg border border-white/15 bg-white/5 p-5 text-left text-stone-300">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-stone-400">
            Primjer poruke
          </p>
          <p className="text-base leading-relaxed">
            Laptop se sporo pali zadnjih par dana. Windows 11 je u pitanju.
            Trebam provjeru i savjet što se isplati napraviti.
          </p>
          <p className="mt-4 text-sm text-stone-400">
            Ne morate znati tehničke detalje. Dovoljno je opisati što vidite.
          </p>
        </div>
      </div>
    </Section>
  );
}
