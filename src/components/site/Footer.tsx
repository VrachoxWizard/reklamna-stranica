const PHONE_NUMBER_DISPLAY = "0994414638";
const PHONE_E164 = "+385994414638";
const WHATSAPP_LINK = "https://wa.me/385994414638";
const EMAIL_ADDRESS = "matevukusic123321@gmail.com";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-white py-24 md:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-20 mb-24">
          
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-8 tracking-tighter leading-none">
              Direkt IT Pomoć <span className="text-[var(--color-accent)]">Zagreb</span>
            </h2>
            <p className="mb-10 leading-relaxed text-stone-400 max-w-md text-xl font-medium">
              Poštena i razumljiva IT pomoć za stvarne ljude. Fokus na Windows optimizaciju, backup podataka i svakodnevnu tehničku podršku u Zagrebu.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-white/5 rounded-xl text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] border border-white/10">Zagreb i okolica</span>
              <span className="px-4 py-2 bg-white/5 rounded-xl text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] border border-white/10">Windows pomoć</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-[10px] font-black text-stone-600 uppercase tracking-[0.3em] mb-10">Navigacija</h3>
            <ul className="space-y-6">
              <li><a href="#usluge" className="text-stone-400 hover:text-white transition-colors text-lg font-bold tracking-tight">Usluge</a></li>
              <li><a href="#cijene" className="text-stone-400 hover:text-white transition-colors text-lg font-bold tracking-tight">Cijene</a></li>
              <li><a href="#kontakt" className="text-stone-400 hover:text-white transition-colors text-lg font-bold tracking-tight">Kontakt</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-[10px] font-black text-stone-600 uppercase tracking-[0.3em] mb-10">Kontakt</h3>
            <ul className="space-y-6">
              <li><a href={`mailto:${EMAIL_ADDRESS}`} className="text-stone-400 hover:text-white transition-colors text-lg font-bold tracking-tight">{EMAIL_ADDRESS}</a></li>
              <li><a href={`tel:${PHONE_E164}`} className="text-stone-400 hover:text-white transition-colors text-lg font-bold tracking-tight">{PHONE_NUMBER_DISPLAY}</a></li>
              <li><a href={WHATSAPP_LINK} className="text-stone-400 hover:text-white transition-colors text-lg font-bold tracking-tight font-black uppercase text-sm tracking-widest bg-[var(--color-accent)] text-white px-5 py-3 rounded-xl inline-block">WhatsApp poruka</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12">
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
