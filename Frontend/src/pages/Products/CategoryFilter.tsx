import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { trackEvent } from '../../utils/analytics';

interface CategoryFilterProps {
  categories: string[];
  currentCategory: string;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, currentCategory }) => {
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleCategorySelect = (category: string, source: 'dropdown' | 'button') => {
    trackEvent('category_filter_change', { category: category.toLowerCase(), source });
    navigate(`/products/${category.toLowerCase()}`);
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Category Filter Navigation */}
      <div className="bg-gray-100 py-4 sm:py-6 mb-6 sm:mb-10 mt-4 sm:mt-8 rounded-xl"> {/* Added margin-top and bottom */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Categories</h2>
        <div className="lg:flex justify-center gap-6 lg:gap-12">
          {/* Mobile Dropdown */}
          <div ref={dropdownRef} className="relative lg:hidden mb-4 px-3 sm:px-4">
            <button
              type="button"
              onClick={() => setIsMobileOpen((prev) => !prev)}
              className="w-full text-left text-gray-700 py-2.5 px-4 bg-gray-200 border border-gray-300 rounded-lg shadow-sm font-semibold flex items-center justify-between"
              aria-expanded={isMobileOpen}
              aria-label="Toggle categories"
            >
              <span>{currentCategory}</span>
              {isMobileOpen ? (
                <ChevronUp className="h-5 w-5 text-gray-500 shrink-0" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500 shrink-0" />
              )}
            </button>
            {isMobileOpen && (
              <div className="absolute left-3 right-3 sm:left-4 sm:right-4 mt-2 rounded-lg border border-gray-200 bg-white shadow-lg z-20 overflow-hidden">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleCategorySelect(cat, 'dropdown')}
                    className={`block w-full px-4 py-2.5 text-left text-sm ${
                      currentCategory.toLowerCase() === cat.toLowerCase()
                        ? 'bg-blue-50 text-blue-700 font-semibold'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Desktop Buttons */}
          <div className="hidden lg:flex gap-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat, 'button')}
                className={`text-lg font-semibold py-2 px-4 rounded-lg transition-all duration-200 
                  ${currentCategory.toLowerCase() === cat.toLowerCase()
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-blue-200'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic Page Header */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 text-center mb-6 sm:mb-10 bg-blue-50 py-4 sm:py-6 rounded-xl">
        {currentCategory === 'All' ? 'All Products' : currentCategory}
      </h2>
    </>
  );
};
