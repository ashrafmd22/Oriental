import React from 'react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  description: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ title, description }) => {
  const scrollToBrands = () => {
    const element = document.getElementById('brands-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-10 sm:py-0 sm:h-[380px] md:h-[420px]">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative min-h-[360px] sm:min-h-0 sm:h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center text-center">
        <div className="z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 sm:mb-6 leading-tight tracking-wide px-2">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 opacity-90 px-4">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={scrollToBrands}
              className="inline-flex min-h-11 items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg"
            >
              Explore Brands
            </button>
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center justify-center bg-white/10 border border-white/30 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-white/20 transition-colors duration-300"
            >
              Request Brand Curation
            </Link>
          </div>
          <p className="mt-3 text-xs sm:text-sm text-blue-100">
            Looking for a specific brand? Share your requirement with our team.
          </p>
        </div>
      </div>
    </section>
  );
};