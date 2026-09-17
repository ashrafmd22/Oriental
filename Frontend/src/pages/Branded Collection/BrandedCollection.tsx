import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { HeroSection } from './HeroSection';
import { BrandCard } from './BrandCard';
import { brands, brandGroups } from './brands';

type Filter = 'All' | (typeof brandGroups)[number];

export const BrandedCollection: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('All');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const visibleBrands = useMemo(
    () => (filter === 'All' ? brands : brands.filter((brand) => brand.group === filter)),
    [filter]
  );

  const filters: Filter[] = ['All', ...brandGroups];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="pt-16 sm:pt-[72px] xl:pt-20">
        <HeroSection
          title="Branded Corporate Gifts"
          description="Gift from trusted brands across tech, travel, drinkware, apparel and gourmet, with your logo and packaging."
        />
      </div>

      <div id="brands-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 scroll-mt-20">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Brands We Supply</h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Pick a category to find the right brand for your budget and audience.
          </p>
        </div>

        {/* Mobile / tablet: dropdown, same pattern as the Products page category filter */}
        <div ref={dropdownRef} className="relative mx-auto mt-6 max-w-md lg:hidden">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-4 py-3 text-left font-semibold text-slate-700 shadow-sm"
            aria-expanded={isOpen}
            aria-label="Choose brand category"
          >
            <span>{filter}</span>
            {isOpen ? (
              <ChevronUp className="h-5 w-5 shrink-0 text-slate-500" />
            ) : (
              <ChevronDown className="h-5 w-5 shrink-0 text-slate-500" />
            )}
          </button>
          {isOpen && (
            <div className="absolute inset-x-0 z-20 mt-2 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg">
              {filters.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setFilter(item);
                    setIsOpen(false);
                  }}
                  className={`block w-full px-4 py-2.5 text-left text-sm ${
                    filter === item ? 'bg-indigo-50 font-semibold text-indigo-700' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop: chips */}
        <div className="mt-6 hidden lg:block">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((item) => {
              const active = filter === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  aria-pressed={active}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? 'border-indigo-600 bg-indigo-600 text-white shadow-md'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:text-indigo-700'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {visibleBrands.map((brand) => (
            <BrandCard
              key={brand.name}
              name={brand.name}
              imagePath={brand.imagePath}
              category={brand.category}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50 to-purple-50 p-5 text-center sm:p-8 md:flex-row md:text-left">
          <div className="flex-1">
            <p className="text-base sm:text-lg font-bold text-slate-900">Looking for a brand not listed here?</p>
            <p className="mt-1 text-sm text-slate-600">
              Share your requirement and we will suggest brand options that fit your budget, quantity and timeline.
            </p>
          </div>
          <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row">
            <a
              href="https://wa.me/+919899987779?text=Hi%2C%20I%20need%20brand-based%20corporate%20gifting%20suggestions."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              Ask on WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-white px-5 py-2.5 text-sm font-semibold text-indigo-700 transition-colors hover:bg-indigo-50"
            >
              Get Brand Suggestions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
