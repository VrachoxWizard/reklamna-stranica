import { Section } from "./Section";

export function AudienceSection() {
  return (
    <Section id="kome-je-namijenjeno" className="bg-white py-24 md:py-32 border-t border-stone-200">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-stone-950 mb-8 leading-[1.1]">
            Za koga <span className="text-[var(--color-accent)]">je</span> ova usluga?
          </h2>
          <p className="text-xl md:text-2xl text-stone-700 leading-relaxed max-w-2xl mx-auto font-medium opacity-90">
            Nisam servis za ogromne tvrtke s poslovnim mrežama. Fokusiram se na normalne ljude u Zagrebu koji samo žele da im računalo normalno radi.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3 text-left">
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="mb-4 text-xl font-bold text-stone-950 tracking-tight">Kućni korisnici</h3>
            <p className="text-stone-700 leading-relaxed text-sm">
              Studenti, zaposleni roditelji ili svakodnevni korisnici s problematičnim laptopom koji &quot;šteka&quot; ili se pregrijava.
            </p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="mb-4 text-xl font-bold text-stone-950 tracking-tight">Starije osobe</h3>
            <p className="text-stone-700 leading-relaxed text-sm">
              Strpljivo objašnjavam kako nešto funkcionira, bez okretanja očima i nepotrebnih engleskih riječi. Sve rješavamo na miru.
            </p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="mb-4 text-xl font-bold text-stone-950 tracking-tight">Mali obrti</h3>
            <p className="text-stone-700 leading-relaxed text-sm">
              Manji uredi, obrti i freelanceri kojima treba netko posložiti računala da jednostavno i sigurno rade svaki dan.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
