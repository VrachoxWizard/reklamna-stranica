import { Section } from "./Section";
import Image from "next/image";

export function ServicesGrid() {
  return (
    <Section id="usluge" className="bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">
            S čim vam konkretno mogu pomoći?
          </h2>
          <p className="mt-4 text-lg text-stone-800">
            Nisam korporativni servis. Fokusiram se na svakodnevne stvari koje izluđuju normalne ljude dok koriste svoja računala kod kuće ili u malom uredu.
          </p>
        </div>

        {/* Staggered, warm, conversational layout instead of standard 3-column AI grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          
          {/* Card 1: Large emphasis */}
          <div className="rounded-lg bg-stone-50 lg:col-span-7 flex flex-col justify-center border border-stone-200/80 overflow-hidden">
            <div className="relative w-full h-[240px] border-b border-stone-200/80">
              <Image 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=800&q=80" 
                alt="Rad na računalu" 
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
            <div className="p-8 sm:p-10">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-stone-200 text-stone-800">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-stone-950">Ubrzavanje i oživljavanje Windowsa</h3>
              <p className="mt-4 text-stone-900 leading-relaxed text-lg">
                Ako se kompjuter pali 10 minuta i ne možete otvoriti browser bez zaleđivanja, tu sam. Gasim nepotrebne procese, čistim smeće, brišem programe koji se pale sami od sebe i podešavam sustav da prodiše. Radim &quot;refresh&quot; bez gubljenja vaših podataka.
              </p>
            </div>
          </div>

          {/* Card 2: Medium */}
          <div className="rounded-lg bg-stone-50/50 p-8 sm:p-10 lg:col-span-5 border border-stone-200/80 flex flex-col">
            <h3 className="text-xl font-bold text-stone-950">Spašavanje fileova (Backup)</h3>
            <p className="mt-4 text-stone-900 leading-relaxed flex-grow">
              Prije nego išta teže radimo, vadim vaše slike, dokumente i foldere na sigurno. Pomažem vam smanjiti kaos na desktopu i organizirati podatke usput.
            </p>
          </div>

          {/* Card 3: Medium */}
          <div className="rounded-lg bg-stone-50/50 p-8 sm:p-10 lg:col-span-4 border border-stone-200/80">
            <h3 className="text-xl font-bold text-stone-950">Početno slaganje programa</h3>
            <p className="mt-4 text-stone-900 leading-relaxed">
              Trebate kupili novi laptop pa ne znate otkud krenuti? Podešavam e-mailove, instaliram preglednike po vašoj želji, stavljam Office alternative, PDF čitače i sve osnovno da laptop bude odmah spreman.
            </p>
          </div>

          {/* Card 4: Detailed Text block */}
          <div className="rounded-lg bg-stone-50/50 p-8 sm:p-10 lg:col-span-4 border border-stone-200/80">
            <h3 className="text-xl font-bold text-stone-950">Pomoć oko interneta i opreme</h3>
            <p className="mt-4 text-stone-900 leading-relaxed">
              Zezaju vas postavke, pisač odjednom neće isprintati, Wi-Fi se gubi, ili niste sigurni kako spojiti novi ekran? Rješavam probleme lokalne periferije bez stresa, korak po korak.
            </p>
          </div>

          {/* Card 5: Medium */}
          <div className="rounded-lg bg-stone-50/50 p-8 sm:p-10 lg:col-span-4 border border-stone-200/80">
            <h3 className="text-xl font-bold text-stone-950">Prijevara i virus čišćenje</h3>
            <p className="mt-4 text-stone-900 leading-relaxed">
              Stalno vam iskaču obavijesti da je &quot;računalo zaraženo&quot; u kutu ekrana? Maknut ćemo lažna upozorenja, očistiti zlonamjerne ekstenzije iz preglednika i ugasiti te iritantne iskočne prozore.
            </p>
          </div>

        </div>
      </div>
    </Section>
  );
}