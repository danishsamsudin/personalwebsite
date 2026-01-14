import { ReactNode } from "react";

interface SectionShellProps {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export default function SectionShell({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}
    >
      {(eyebrow || title) && (
        <div className="mb-10 sm:mb-14 lg:mb-16 text-center">
          {eyebrow && (
            <p className="text-sm font-medium text-accent mb-2 uppercase tracking-wider">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            {title}
          </h2>
        </div>
      )}
      {children}
    </section>
  );
}
