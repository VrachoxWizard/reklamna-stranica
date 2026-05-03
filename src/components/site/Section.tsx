import * as React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  containerClassName?: string;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, className = "", containerClassName = "", ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={`py-14 md:py-20 ${className}`}
        {...props}
      >
        <div className={`mx-auto max-w-6xl px-5 ${containerClassName}`}>
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";
