import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-white pt-16 pb-28 md:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand & Vibe */}
          <div className="lg:pr-8">
            <h3 className="text-xl font-medium tracking-tight text-stone-900">
              Direkt IT Pomoć
            </h3>
            <p className="mt-4 text-stone-600 leading-relaxed">
              Lokalna, ljudska informatička pomoć u Zagrebu. Bez tehničkog preseravanja, s cijenom po dogovoru. Ako nije za mene, reći ću.
            </p>
          </div>

          {/* Quick Contact & Location */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-stone-900 uppercase">
              Kontakt i grad
            </h3>
            <ul className="mt-4 space-y-3 text-stone-600">
              <li>
                <span className="block font-medium text-stone-800">Radno područje:</span>
                Grad Zagreb i bliža okolica
              </li>
              <li>
                <span className="block font-medium mt-2 text-stone-800">Moje radno vrijeme:</span>
                Po dogovoru (često i vikendom)
              </li>
              <li className="pt-2">
                <a 
                  href="mailto:matevukusic123321@gmail.com" 
                  className="inline-flex items-center text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 rounded-sm"
                >
                  matevukusic123321@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Fast Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-stone-900 uppercase">
              Brze poveznice
            </h3>
            <ul className="mt-4 space-y-2 text-stone-600">
              <li>
                <Link href="#usluge" className="hover:text-[var(--color-accent)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 rounded">
                  Što točno radim
                </Link>
              </li>
              <li>
                <Link href="#cijene" className="hover:text-[var(--color-accent)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 rounded">
                  Okvirne cijene
                </Link>
              </li>
              <li>
                <Link href="#pitanja" className="hover:text-[var(--color-accent)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 rounded">
                  Česta pitanja
                </Link>
              </li>
              <li>
                <Link href="#o-meni" className="hover:text-[var(--color-accent)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 rounded">
                  Tko stoji iza ovoga
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-stone-100 pt-8 sm:flex-row">
          <p className="text-sm text-stone-500 text-center sm:text-left">
            &copy; {currentYear} Direkt IT Pomoć Zagreb. Sva prava pridržana.
          </p>
          <p className="mt-4 text-sm text-stone-600 sm:mt-0 text-center sm:text-left">
            Mate (Vrachox) - Osobni projekt za pomoć ljudima.
          </p>
        </div>
      </div>
    </footer>
  );
}