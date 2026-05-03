import { Section } from "./Section";
import Image from "next/image";

const audienceCards = [
  {
    title: "Kućni korisnici",
    body: "Studenti, zaposleni roditelji ili svakodnevni korisnici s problematičnim laptopom koji \u201ešteka\u201c ili se pregrijava.",
    photo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop",
    alt: "Laptop na radnom stolu — pomoć kućnim korisnicima u Zagrebu",
  },
  {
    title: "Starije osobe",
    body: "Strpljivo objašnjavam kako nešto funkcionira, bez okretanja očima i nepotrebnih engleskih riječi. Sve rješavamo na miru.",
    photo: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=1170&auto=format&fit=crop",
    alt: "Osoba koja tipka na laptopu — strpljiva IT pomoć za starije korisnike",
  },
  {
    title: "Mali obrti",
    body: "Manji uredi, obrti i freelanceri kojima treba netko posložiti računala da jednostavno i sigurno rade svaki dan.",
    photo: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1169&auto=format&fit=crop",
    alt: "Mali uredski prostor s laptopom i biljkama — IT podrška za obrtike",
  },
];

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
          {audienceCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-stone-200 bg-stone-50 overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={card.photo}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500" aria-hidden="true" />
              </div>
              <div className="p-8">
                <h3 className="mb-4 text-xl font-bold text-stone-950 tracking-tight">{card.title}</h3>
                <p className="text-stone-700 leading-relaxed text-sm">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
