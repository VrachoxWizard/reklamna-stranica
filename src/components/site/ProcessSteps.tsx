import { Section } from "./Section";

export function ProcessSteps() {
  return (
    <Section className="bg-stone-50 py-16 md:py-24 border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-12">
          Kako izgleda naš dogovor?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="relative">
            <span className="text-sm font-bold tracking-widest uppercase text-teal-700 mb-4 block bg-teal-50 w-fit px-3 py-1 rounded">Korak 1</span>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Javite mi u čemu je problem</h3>
            <p className="text-stone-600 leading-relaxed">
              Kratko mi u poruci ili pozivu opišite što šteka i od kad to traje. Nisu potrebni stručni izrazi — samo recite što vidite.
            </p>
          </div>
          
          <div className="relative">
            <span className="text-sm font-bold tracking-widest uppercase text-teal-700 mb-4 block bg-teal-50 w-fit px-3 py-1 rounded">Korak 2</span>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Iskrena procjena i cijena</h3>
            <p className="text-stone-600 leading-relaxed">
              Prije bilo kakvog rada, pregledam uređaj i objasnim što mogu napraviti. Tada vam dam točnu cijenu unaprijed, bez iznenađenja.
            </p>
          </div>
          
          <div className="relative">
            <span className="text-sm font-bold tracking-widest uppercase text-teal-700 mb-4 block bg-teal-50 w-fit px-3 py-1 rounded">Korak 3</span>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Popravak uz objašnjenje</h3>
            <p className="text-stone-600 leading-relaxed">
              Kad završim, računalo vam predam sređeno. Usput objasnim par sitnica na što paziti ubuduće, da vas ne muči ista stvar.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
