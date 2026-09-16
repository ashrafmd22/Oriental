
interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-6 sm:mb-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}