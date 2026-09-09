interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <div className={`flex items-center gap-2 mb-3 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="h-px w-8 bg-sky" />
          <span className="font-headline text-xs uppercase tracking-[0.2em] text-sky">{eyebrow}</span>
        </div>
      )}
      <h2
        className={`headline text-3xl md:text-4xl lg:text-5xl ${
          light ? 'text-navy' : 'text-white'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${light ? 'text-navy-600' : 'text-sky-light/70'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
