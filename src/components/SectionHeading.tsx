interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-10 md:mb-14 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : ''} ${className}`}
    >
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-electric">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-charcoal/70 md:text-lg">{description}</p>
      )}
    </div>
  );
}
