import React from 'react';

export const LegacySection: React.FC = () => {
  return (
    <section id="legacy" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800">
              Our Legacy of Excellence
            </h2>
            <div className="space-y-4">
              <p className="text-sm sm:text-base md:text-lg text-gray-600">
                Since 1990, Oriental Enterprises has supported business gifting requirements with consistent quality and practical execution.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">
                From a family-run setup to a trusted corporate gifting partner, our focus remains clear: relevant curation, clean branding, and reliable delivery planning.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-8">
              {[
                { value: 'Since 1990', label: 'Years of Experience' },
                { value: 'Trusted Service', label: 'Client Support' },
                { value: 'Custom Branding', label: 'Branding and Packaging' },
                { value: 'Pan India', label: 'Delivery Planning' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-2 sm:p-4">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-600 mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 mt-8 md:mt-0">
            <img
              src="/assets/About/1.jpg"
              alt="Team"
              className="w-full rounded-xl shadow-xl transform transition duration-300 hover:scale-105"
            />
            <img
              src="/assets/About/2.jpg"
              alt="Office"
              className="w-full rounded-xl shadow-xl transform transition duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};