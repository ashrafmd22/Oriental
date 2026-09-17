import React from 'react';
import { Link } from 'react-router-dom';

// Shared top banner for inner pages (About, Brands, Contact) so they all look the same.

type HeroAction =
  | { label: string; onClick: () => void; href?: never; to?: never; external?: never }
  | { label: string; to: string; onClick?: never; href?: never; external?: never }
  | { label: string; href: string; external?: boolean; onClick?: never; to?: never };

interface PageHeroProps {
  title: string;
  description: string;
  primary: HeroAction;
  secondary?: HeroAction;
  note?: string;
}

const primaryClass =
  'inline-flex w-full sm:w-auto sm:min-w-[210px] min-h-12 items-center justify-center rounded-full border-2 border-transparent bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:from-pink-600 hover:to-purple-600';
const secondaryClass =
  'inline-flex w-full sm:w-auto sm:min-w-[210px] min-h-12 items-center justify-center rounded-full border-2 border-white/30 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/15';

function ActionButton({ action, className }: { action: HeroAction; className: string }) {
  if (action.onClick) {
    return (
      <button type="button" onClick={action.onClick} className={className}>
        {action.label}
      </button>
    );
  }
  if (action.to) {
    return (
      <Link to={action.to} className={className}>
        {action.label}
      </Link>
    );
  }
  return (
    <a
      href={action.href}
      className={className}
      {...(action.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {action.label}
    </a>
  );
}

export const PageHero: React.FC<PageHeroProps> = ({ title, description, primary, secondary, note }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 text-white">
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '36px 36px' }}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(35% 60% at 30% 0%, rgba(217,70,239,0.22), transparent 70%), radial-gradient(35% 60% at 70% 100%, rgba(129,140,248,0.22), transparent 70%)' }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 md:py-24 flex items-center justify-center text-center">
        <div className="w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-5 leading-tight px-2">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-7 sm:mb-8 text-indigo-100/90 px-2">
            {description}
          </p>
          <div className="mx-auto flex max-w-xs flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center">
            <ActionButton action={primary} className={primaryClass} />
            {secondary && <ActionButton action={secondary} className={secondaryClass} />}
          </div>
          {note && <p className="mt-4 text-xs sm:text-sm text-indigo-200">{note}</p>}
        </div>
      </div>
    </section>
  );
};

export const scrollToId = (id: string) => () =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
