import React from 'react';

export function ContactHero() {
  return (
    <section className="relative h-[400px] bg-gradient-to-r from-blue-700 to-blue-900 text-white mt-17">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center justify-center text-center">
        <div className="z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-wide">
            Get in Touch with Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
            We value our customers and are here to help. Reach out to us and let us assist you with your needs.
          </p>
          <a
            href="#contact-form"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
