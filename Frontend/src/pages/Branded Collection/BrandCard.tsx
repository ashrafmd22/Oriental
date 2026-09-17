import React from 'react';

interface BrandCardProps {
  name: string;
  imagePath?: string;
  category: string;
}

export const BrandCard: React.FC<BrandCardProps> = ({ name, imagePath, category }) => {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg">
      <div className="flex h-24 sm:h-28 items-center justify-center rounded-xl bg-white p-3">
        {imagePath ? (
          <img
            loading="lazy"
            decoding="async"
            src={imagePath}
            alt={`${name} logo`}
            className="h-full max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <span className="px-2 text-center text-lg sm:text-xl font-black leading-tight tracking-tight text-slate-800 transition-colors group-hover:text-indigo-700">
            {name}
          </span>
        )}
      </div>
      <div className="mt-2.5 pb-1 text-center">
        <h3 className="text-sm font-semibold text-slate-800">{name}</h3>
        <p className="mt-0.5 text-xs text-slate-500">{category}</p>
      </div>
    </div>
  );
};
