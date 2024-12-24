import React from 'react';
import { clients } from './data';
import { LogoSlider } from './LogoSlider';
import { SectionTitle } from './SectionTitle';

export function ClientLogos() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Trusted by Leading Brands"
          subtitle="Join the ranks of industry leaders who have chosen our services for their success"
        />

        <div className="relative">
          {/* Logo Sliders */}
          <div className="relative z-0 space-y-8">
            <LogoSlider clients={clients} direction="left" speed={30} />
            <LogoSlider clients={clients} direction="right" speed={25} />
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 text-center max-w-3xl mx-auto">
          <div className="p-4">
            <div className="text-2xl sm:text-3xl font-bold text-blue-800">500+</div>
            <div className="text-sm sm:text-base text-gray-600">Happy Clients</div>
          </div>
          <div className="p-4">
            <div className="text-2xl sm:text-3xl font-bold text-blue-800">98%</div>
            <div className="text-sm sm:text-base text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="p-4 col-span-2 sm:col-span-1">
            <div className="text-2xl sm:text-3xl font-bold text-blue-800">10+ Years</div>
            <div className="text-sm sm:text-base text-gray-600">Industry Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}