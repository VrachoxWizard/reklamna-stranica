import type { HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  containerClassName?: string;
}

export function Section({
  children,
  className = "",
  containerClassName = "",
  ...props
}: SectionProps) {
  return (
    <section className={`py-14 md:py-20 scroll-mt-16 ${className}`} {...props}>
      <div className={`mx-auto max-w-6xl px-5 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
