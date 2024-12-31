import React from 'react';

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
    <section className="relative h-[400px] sm:h-[450px] md:h-[500px] bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center text-center">
        <div className="z-10 mt-8 sm:mt-16">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-6 leading-tight tracking-wide px-2">
            {title}
          </h1>
          <p className="text-base sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 sm:mb-8 opacity-90 px-4">
            {description}
          </p>
          <button
            onClick={scrollToBrands}
            className="inline-block bg-blue-600 text-white px-6 sm:px-6 py-3 sm:py-3 rounded-lg text-base sm:text-base md:text-lg font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg"
          >
            Explore Brands
          </button>
        </div>
      </div>
    </section>
  );
};