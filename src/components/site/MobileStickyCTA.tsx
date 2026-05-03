import Link from "next/link";

export function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--color-border)] bg-[var(--color-bg-surface)] px-3 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] md:hidden">
      <div className="flex gap-3 max-w-md mx-auto">
        <Link 
          href="#kontakt"
          className="flex-1 rounded-lg bg-[var(--color-accent)] px-4 py-3.5 text-center font-semibold text-white shadow-sm transition-transform active:scale-95 min-h-[48px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2"
        >
          Upit
        </Link>
        
        <Link 
          href="#cijene"
          className="flex-1 rounded-lg border border-[var(--color-border)] bg-white px-4 py-3.5 text-center font-semibold text-[var(--color-text-primary)] shadow-sm transition-transform active:scale-95 min-h-[48px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[var(--color-border)] focus:ring-offset-2"
        >
          Cijene
        </Link>
      </div>
    </div>
  );
}