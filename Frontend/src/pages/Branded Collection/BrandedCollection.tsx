import React, { useEffect } from 'react';
import { HeroSection } from './HeroSection';
import { BrandCard } from './BrandCard';
import { brands } from './brands';

export const BrandedCollection: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-25">
        <HeroSection
          title="Premium Brand Partners"
          description="Explore our exclusive collection of world-renowned brands, carefully curated for corporate excellence."
        />
      </div>

      <div id="brands-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
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