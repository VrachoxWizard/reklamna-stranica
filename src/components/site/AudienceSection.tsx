import { Section } from "./Section";
import { Home, Users, GraduationCap, Briefcase } from "lucide-react";

const audiences = [
  {
    title: "Za kućne korisnike",
    description: "Ako vam laptop služi za internet, dokumente, slike, plaćanja i svakodnevne stvari — a nešto ne radi kako treba.",
    icon: Home,
  },
  {
    title: "Za starije korisnike",
    description: "Ako želite da vam netko strpljivo objasni problem normalnim jezikom, bez tehničkog pametovanja.",
    icon: Users,
  },
  {
    title: "Za studente",
    description: "Ako vam treba funkcionalan laptop za učenje, seminare, online nastavu i nesmetan rad.",
    icon: GraduationCap,
  },
  {
    title: "Za male urede",
    description: "Ako imate jednostavan problem s računalom, backupom ili softverom, ali ne trebate veliki IT ugovor.",
    icon: Briefcase,
  }
];

export function AudienceSection() {
  return (
    <Section className="bg-[var(--color-bg-primary)] overflow-hidden">
      <div className="mb-12 md:mb-16 max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-surface)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-5">
          Kome pomažem?
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6 leading-tight">
          Normalna IT pomoć <br className="hidden md:block" /> za normalne ljude.
        </h2>
        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
          Nisam servis za velike korporacije, nego za stvarne ljude koji trebaju podršku oko svojih uređaja bez kompliciranja.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {audiences.map((audience, index) => {
          const Icon = audience.icon;
          return (
            <div 
              key={index} 
              className="group flex flex-col sm:flex-row gap-5 p-6 md:p-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] hover:border-[var(--color-border-strong)] transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-bg-primary)] rounded-lg border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                <Icon className="w-6 h-6 stroke-[1.75]" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-3 leading-tight">
                  {audience.title}
                </h3>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                  {audience.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
