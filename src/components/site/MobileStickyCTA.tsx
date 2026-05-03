import Link from "next/link";

export function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-stone-200 bg-white/80 backdrop-blur-md px-4 pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgb(0,0,0,0.04)] md:hidden">
      <div className="flex gap-4 max-w-md mx-auto">
        <Link 
          href="#kontakt"
          className="flex-[2] rounded-xl bg-[var(--color-accent)] px-4 py-4 text-center font-bold text-white shadow-lg shadow-teal-900/10 transition-transform active:scale-95 min-h-[56px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2"
        >
          Pošalji upit
        </Link>
        
        <Link 
          href="#cijene"
          className="flex-1 rounded-xl border-2 border-stone-100 bg-white px-4 py-4 text-center font-bold text-stone-950 shadow-sm transition-transform active:scale-95 min-h-[56px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-stone-200 focus:ring-offset-2"
        >
          Cijene
        </Link>
      </div>
    </div>
  );
}