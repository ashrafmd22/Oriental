import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from './HeroSection';
import { BrandCard } from './BrandCard';
import { brands } from './brands';

export const BrandedCollection: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-20 sm:pt-24">
        <HeroSection
          title="Premium Brand Partners"
          description="Explore our exclusive collection of world-renowned brands, carefully curated for corporate excellence."
        />
      </div>

      <div id="brands-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-8 rounded-2xl border border-blue-100 bg-blue-50/60 p-4 sm:p-5">
          <p className="text-sm sm:text-base font-semibold text-slate-800">
            Looking for a specific brand not listed here?
          </p>
          <p className="mt-1 text-sm text-slate-600">
            Share your requirement and we will help curate brand options based on your budget and gifting objective.
          </p>
          <div className="mt-3 flex flex-col sm:flex-row gap-2.5">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Get Brand Suggestions
            </Link>
            <a
              href="https://wa.me/+919899987779?text=Hi%2C%20I%20need%20brand-based%20corporate%20gifting%20suggestions."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition-colors"
            >
              WhatsApp Requirement
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <BrandCard
              key={brand.name}
              name={brand.name}
              imagePath={brand.imagePath}
              category={brand.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};