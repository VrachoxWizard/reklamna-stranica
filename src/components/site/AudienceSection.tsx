import { Section } from "./Section";

const audiences = [
  {
    title: "Kućni korisnici",
    description: "Laptop Vam služi za internet, dokumente i fotografije, ali je jednostavno spor i nešto šteka.",
  },
  {
    title: "Starije osobe",
    description: "Želite da Vam netko polako, bez nervoze objasni gdje se što nalazi i složi osnovne programe.",
  },
  {
    title: "Studenti",
    description: "Trebate osigurati da Vam laptop preživi do kraja studija bez da stalno gubite vrijeme na glupe greške u Windowsima.",
  },
  {
    title: "Mali uredi",
    description: "Imate jednostavan problem s radnim računalom ili printerom, ali Vam ne treba skupi mjesečni ugovor za održavanje.",
  }
];

export function AudienceSection() {
  return (
    <Section className="bg-[var(--color-bg-surface)] py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section)] border-t border-[var(--color-border)]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        
        {/* Left Column: Heading */}
        <div className="lg:col-span-1">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6 leading-tight">
            Normalna IT pomoć za normalne ljude
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Moj posao nije slagati servere za korporacije, već osigurati da vaše računalo radi pouzdano kako biste ga mogli koristiti bez frustracija.
          </p>
        </div>

        {/* Right Column: Audience Types */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            {audiences.map((audience, index) => (
              <div key={index} className="flex flex-col border-t border-[var(--color-border)] pt-4">
                <h3 className="text-lg md:text-xl font-bold text-[var(--color-text-primary)] mb-2">
                  {audience.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
