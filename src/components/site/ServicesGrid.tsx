import { Section } from "./Section";
import { HardDrive, Zap, MonitorSmartphone, Wifi, ShieldAlert, Check, Sparkles } from "lucide-react";
import Image from "next/image";

const windowsChips = [
  "Startup traje 10+ min",
  "Zauzet disk",
  "Zastarjeli driveri",
  "Lažna upozorenja",
  "Stari antivirus",
  "Previše programa pri startu",
  "Browser pun smeća",
];

function OutcomePills({ outcomes }: { outcomes: string[] }) {
  return (
    <div className="mt-8 flex flex-wrap gap-2">
      {outcomes.map((outcome) => (
        <span
          key={outcome}
          className="inline-flex items-center gap-1.5 rounded-full bg-stone-100 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-stone-600 border border-stone-200/50"
        >
          <Check className="w-3 h-3 shrink-0 text-[var(--color-accent)]" aria-hidden="true" />
          {outcome}
        </span>
      ))}
    </div>
  );
}

export function ServicesGrid() {
  return (
    <Section id="usluge" className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="max-w-3xl mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-50 border border-stone-200 text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-6">
            <Sparkles className="w-3 h-3" />
            Konkretne usluge
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-stone-950 mb-8 leading-[1.1]">
            S čim vam konkretno <span className="text-[var(--color-accent)] italic">mogu</span> pomoći?
          </h2>
          <p className="text-xl text-stone-700 leading-relaxed max-w-2xl border-l-4 border-stone-100 pl-6">
            Nisam korporativni servis. Fokusiram se na svakodnevne stvari koje izluđuju normalne ljude dok koriste svoja računala kod kuće ili u malom uredu.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          
          {/* Card 1: Windows Optimization (Major visual anchor) */}
          <div className="rounded-3xl bg-stone-50 lg:col-span-7 flex flex-col border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group">
            <div className="relative h-72 sm:h-96 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1074&auto=format&fit=crop" 
                alt="Tehničar radi na laptopu u čistom okruženju" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-accent)] text-white text-[10px] font-bold uppercase tracking-widest mb-4 shadow-lg shadow-teal-900/20">
                  Glavna usluga
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">Ubrzavanje Windowsa</h3>
              </div>
            </div>
            
            <div className="p-8 sm:p-12 flex-grow">
              <div className="flex flex-wrap gap-2 mb-10">
                {windowsChips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-block rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-xs font-semibold text-stone-600 shadow-sm transition-colors hover:border-stone-300"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              
              <div className="flex items-start gap-6">
                <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-accent-light)] text-[var(--color-accent)] shadow-inner">
                  <Zap className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="flex-grow">
                  <p className="text-stone-700 leading-relaxed text-lg">
                    Ako se kompjuter pali 10 minuta i ne možete otvoriti browser bez zaleđivanja, tu sam. Gasim nepotrebne procese, čistim smeće i podešavam sustav da prodiše. Radim &quot;refresh&quot; bez gubljenja vaših podataka.
                  </p>
                  <OutcomePills outcomes={["Brže paljenje", "Manje zamrzavanja", "Čišći startup"]} />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Backup (Secondary visual anchor) */}
          <div className="rounded-3xl bg-stone-50 lg:col-span-5 border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col">
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1170&auto=format&fit=crop" 
                alt="Sigurnosno kopiranje podataka na eksterni disk" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            
            <div className="p-8 sm:p-12 flex-grow">
              <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-accent-light)] text-[var(--color-accent)] shadow-inner">
                <HardDrive className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-stone-950 mb-4 tracking-tight">Spašavanje fileova</h3>
              <p className="text-stone-700 leading-relaxed text-lg">
                Prije nego išta teže radimo, vadim vaše slike, dokumente i foldere na sigurno. Pomažem vam smanjiti kaos na desktopu i organizirati podatke usput.
              </p>
              <OutcomePills outcomes={["Sigurni dokumenti", "Organizirani podaci"]} />
            </div>
          </div>

          {/* Visual divider — two-tier reading: image-anchored → icon-only */}
          <div className="col-span-1 md:col-span-2 lg:col-span-12 flex items-center gap-4 pt-4" aria-hidden="true">
            <div className="h-px flex-grow bg-stone-100" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 shrink-0 px-2">Ostalo što rješavam</p>
            <div className="h-px flex-grow bg-stone-100" />
          </div>

          {/* Card 3: Setup */}
          <div className="rounded-3xl bg-stone-50 lg:col-span-4 border border-stone-200 shadow-sm hover:shadow-lg transition-all group flex flex-col">
            <div className="p-8 flex-grow">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-accent-light)] text-[var(--color-accent)]">
                <MonitorSmartphone className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-stone-950 mb-4">Postavljanje programa</h3>
              <p className="text-stone-700 leading-relaxed text-sm">
                Trebate kupili novi laptop? Podešavam e-mailove, instaliram preglednike po želji, stavljam Office alternative i PDF čitače.
              </p>
              <OutcomePills outcomes={["Spreman za rad", "Bez bloatwarea"]} />
            </div>
          </div>

          {/* Card 4: Hardware help */}
          <div className="rounded-3xl bg-stone-50 p-8 lg:col-span-4 border border-stone-200 shadow-sm hover:shadow-lg transition-all flex flex-col">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-accent-light)] text-[var(--color-accent)]">
              <Wifi className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-stone-950 mb-4">Internet i periferija</h3>
            <p className="text-stone-700 leading-relaxed text-sm">
              Zezaju vas postavke, pisač odjednom neće isprintati, Wi-Fi se gubi, ili niste sigurni kako spojiti novi ekran? Rješavam bez stresa.
            </p>
            <OutcomePills outcomes={["Printer koji radi", "Stabilan Wi-Fi"]} />
          </div>

          {/* Card 5: Security */}
          <div className="rounded-3xl bg-stone-50 p-8 lg:col-span-4 border border-stone-200 shadow-sm hover:shadow-lg transition-all flex flex-col">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-accent-light)] text-[var(--color-accent)]">
              <ShieldAlert className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-stone-950 mb-4">Čišćenje virusa</h3>
            <p className="text-stone-700 leading-relaxed text-sm">
              Stalno vam iskaču obavijesti? Maknut ćemo lažna upozorenja, očistiti zlonamjerne ekstenzije i ugasiti te iritantne iskočne prozore.
            </p>
            <OutcomePills outcomes={["Čišći browser", "Bez reklama"]} />
          </div>

        </div>
      </div>
    </Section>
  );
}