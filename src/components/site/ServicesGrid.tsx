import { Section } from "./Section";
import { HardDrive, Zap, MonitorSmartphone, Wifi, ShieldAlert, Check } from "lucide-react";

const windowsChips = [
  "Startup traje 10+ min",
  "Zauzet disk",
  "Zastarjeli driveri",
  "Lažna upozorenja",
  "Stari antivirus",
  "Previše programa pri startu",
  "Browser pun smeća",
  "Ažuriranja zapela",
];

function OutcomePills({ outcomes }: { outcomes: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {outcomes.map((outcome) => (
        <span
          key={outcome}
          className="inline-flex items-center gap-1 rounded-md bg-[var(--color-accent-light)] px-2.5 py-1 text-xs font-medium text-[var(--color-accent)]"
        >
          <Check className="w-3 h-3 shrink-0" aria-hidden="true" />
          {outcome}
        </span>
      ))}
    </div>
  );
}

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
          <div className="rounded-lg bg-stone-50 lg:col-span-7 flex flex-col border border-stone-200/80 overflow-hidden">
            {/* Chip visualization replacing image */}
            <div className="px-8 pt-7 pb-6 border-b border-stone-200/80 bg-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3">
                Česti znakovi usporenog Windowsa
              </p>
              <div className="flex flex-wrap gap-2">
                {windowsChips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-block rounded-md border border-stone-200 bg-stone-100 px-2.5 py-1 text-xs text-stone-600"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-8 sm:p-10">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-[var(--color-accent-light)] text-[var(--color-accent)]">
                <Zap className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-stone-950">Ubrzavanje i oživljavanje Windowsa</h3>
              <p className="mt-4 text-stone-700 leading-relaxed text-lg">
                Ako se kompjuter pali 10 minuta i ne možete otvoriti browser bez zaleđivanja, tu sam. Gasim nepotrebne procese, čistim smeće, brišem programe koji se pale sami od sebe i podešavam sustav da prodiše. Radim &quot;refresh&quot; bez gubljenja vaših podataka.
              </p>
              <OutcomePills outcomes={["Brže paljenje", "Manje zamrzavanja", "Čišći startup", "Ažuriran sustav"]} />
            </div>
          </div>

          {/* Card 2: Medium */}
          <div className="rounded-lg bg-stone-50/50 p-8 sm:p-10 lg:col-span-5 border border-stone-200/80 flex flex-col">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-stone-100 text-stone-700">
              <HardDrive className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-stone-950">Spašavanje fileova (Backup)</h3>
            <p className="mt-4 text-stone-700 leading-relaxed flex-grow">
              Prije nego išta teže radimo, vadim vaše slike, dokumente i foldere na sigurno. Pomažem vam smanjiti kaos na desktopu i organizirati podatke usput.
            </p>
            <OutcomePills outcomes={["Sigurni dokumenti i slike", "Organizirani podaci", "Spreman za reinstalaciju"]} />
          </div>

          {/* Card 3: Medium */}
          <div className="rounded-lg bg-stone-50/50 p-8 sm:p-10 lg:col-span-4 border border-stone-200/80">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-stone-100 text-stone-700">
              <MonitorSmartphone className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-stone-950">Početno slaganje programa</h3>
            <p className="mt-4 text-stone-700 leading-relaxed">
              Trebate kupili novi laptop pa ne znate otkud krenuti? Podešavam e-mailove, instaliram preglednike po vašoj želji, stavljam Office alternative, PDF čitače i sve osnovno da laptop bude odmah spreman.
            </p>
            <OutcomePills outcomes={["Laptop odmah spreman", "Browser i mail postavljeni", "Bez neželjenih programa"]} />
          </div>

          {/* Card 4: Detailed Text block */}
          <div className="rounded-lg bg-stone-50/50 p-8 sm:p-10 lg:col-span-4 border border-stone-200/80">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-stone-100 text-stone-700">
              <Wifi className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-stone-950">Pomoć oko interneta i opreme</h3>
            <p className="mt-4 text-stone-700 leading-relaxed">
              Zezaju vas postavke, pisač odjednom neće isprintati, Wi-Fi se gubi, ili niste sigurni kako spojiti novi ekran? Rješavam probleme lokalne periferije bez stresa, korak po korak.
            </p>
            <OutcomePills outcomes={["Printer koji radi", "Stabilan Wi-Fi", "Mail i preglednik podešeni"]} />
          </div>

          {/* Card 5: Medium */}
          <div className="rounded-lg bg-stone-50/50 p-8 sm:p-10 lg:col-span-4 border border-stone-200/80">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-stone-100 text-stone-700">
              <ShieldAlert className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-stone-950">Prijevara i virus čišćenje</h3>
            <p className="mt-4 text-stone-700 leading-relaxed">
              Stalno vam iskaču obavijesti da je &quot;računalo zaraženo&quot; u kutu ekrana? Maknut ćemo lažna upozorenja, očistiti zlonamjerne ekstenzije iz preglednika i ugasiti te iritantne iskočne prozore.
            </p>
            <OutcomePills outcomes={["Manje iskačućih prozora", "Čišći browser", "Praktični savjeti za zaštitu"]} />
          </div>

        </div>
      </div>
    </Section>
  );
}