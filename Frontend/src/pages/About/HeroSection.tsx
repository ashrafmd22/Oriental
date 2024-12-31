import React from 'react';

export const HeroSection: React.FC = () => {
  const scrollToLegacy = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const legacySection = document.getElementById('legacy');
    if (legacySection) {
      legacySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[300px] sm:h-[350px] md:h-[400px] bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center text-center">
        <div className="z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight tracking-wide">
            Our Story
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 opacity-90 px-4">
            Three decades of excellence in corporate gifting, building lasting relationships through quality and innovation.
          </p>
          <a
            href="#legacy"
            onClick={scrollToLegacy}
            className="inline-block bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg font-medium hover:bg-blue-700 transition-colors duration-300"
          >
            Discover Our Journey
          </a>
        </div>
      </div>
    </section>
  );
};