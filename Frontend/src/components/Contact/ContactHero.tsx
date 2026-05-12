import React from 'react';

export function ContactHero() {
  const scrollToContactForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-10 sm:py-0 sm:h-[380px] md:h-[420px]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative min-h-[360px] sm:min-h-0 sm:h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center text-center">
        <div className="z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 sm:mb-6 leading-tight tracking-wide">
            Get in Touch with Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 opacity-90">
            We value our customers and are here to help. Reach out to us and let us assist you with your needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#contact-form"
              onClick={scrollToContactForm}
              className="inline-flex min-h-11 items-center bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium text-base sm:text-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Contact Us Now
            </a>
            <a
              href="https://wa.me/+919899987779?text=Hi%2C%20I%20need%20help%20with%20corporate%20gifting."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center bg-white/10 border border-white/30 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium text-base sm:text-lg hover:bg-white/20 transition-colors duration-300"
            >
              WhatsApp Us
            </a>
          </div>
          <p className="mt-3 text-xs sm:text-sm text-blue-100">
            Business-hour response support for corporate enquiries.
          </p>
        </div>
      </div>
    </section>
  );
}