const PHONE_NUMBER_DISPLAY = "0994414638";
const PHONE_E164 = "+385994414638";
const WHATSAPP_LINK = "https://wa.me/385994414638";
const EMAIL_ADDRESS = "matevukusic123321@gmail.com";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-bg-surface)] border-t border-[var(--color-border)] py-12 pb-28 md:py-16 md:pb-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4 tracking-tight">
          Direkt IT Pomoć Zagreb
        </h2>
        <p className="mb-8 leading-relaxed text-[var(--color-text-secondary)] text-base max-w-lg mx-auto">
          Ljudska i poštena IT pomoć za spora računala, osnovnu optimizaciju i backup podataka. Zagreb i okolica.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a href={`mailto:${EMAIL_ADDRESS}`} className="text-[var(--color-text-primary)] hover:text-[var(--color-accent)] font-semibold transition-colors">
            {EMAIL_ADDRESS}
          </a>
          <a href={`tel:${PHONE_E164}`} className="text-[var(--color-text-primary)] hover:text-[var(--color-accent)] font-semibold transition-colors">
            {PHONE_NUMBER_DISPLAY}
          </a>
          <a href={WHATSAPP_LINK} className="text-[#25D366] hover:text-[#20bd5a] font-semibold transition-colors">
            WhatsApp
          </a>
        </div>

        <div className="border-t border-[var(--color-border)] pt-8 flex flex-col items-center gap-4">
          <p className="text-xs text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
            <span className="font-semibold text-[var(--color-text-primary)]">Odricanje od odgovornosti: </span> 
            Usluga je namijenjena osnovnim i srednje zahtjevnim softverskim i hardverskim problemima. Za oštećene komponente, prelomljene matične ploče i spašavanje podataka s potpuno neispravnih diskova obratite se specijaliziranim laboratorijima.
          </p>
          <div className="text-xs font-medium text-[var(--color-text-secondary)] mt-4">
            &copy; {currentYear} IT Pomoć Zagreb
          </div>
        </div>
      </div>
    </footer>
  );
}
