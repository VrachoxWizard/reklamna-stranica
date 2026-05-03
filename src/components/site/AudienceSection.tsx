import { Section } from "./Section";

export function AudienceSection() {
  return (
    <Section id="kome-je-namijenjeno" className="bg-white py-16 md:py-24 border-t border-stone-200">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-8 text-3xl font-bold text-stone-900 sm:text-4xl">
          Za koga je ova usluga?
        </h2>
        <p className="mb-12 text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
          Nisam servis za ogromne tvrtke s poslovnim mrežama. Fokusiram se na normalne ljude u Zagrebu koji samo žele
          da im računalo normalno radi.
        </p>

        <div className="grid gap-6 sm:grid-cols-3 text-left">
          <div className="rounded-lg border border-stone-200 bg-stone-50 p-6">
            <h3 className="mb-2 font-bold text-stone-900">Kućni korisnici</h3>
            <p className="text-stone-600">
              Studenti, zaposleni roditelji ili svakodnevni korisnici s problematičnim laptopom koji &quot;šteka&quot;.
            </p>
          </div>
          <div className="rounded-lg border border-stone-200 bg-stone-50 p-6">
            <h3 className="mb-2 font-bold text-stone-900">Starije osobe</h3>
            <p className="text-stone-600">
              Strpljivo objašnjavam kako nešto funkcionira, bez okretanja očima i nepotrebnih engleskih riječi.
            </p>
          </div>
          <div className="rounded-lg border border-stone-200 bg-stone-50 p-6">
            <h3 className="mb-2 font-bold text-stone-900">Mali obrti i freelanceri</h3>
            <p className="text-stone-600">
              Manji uredi kojima treba netko posložiti računala da jednostavno i sigurno rade.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
