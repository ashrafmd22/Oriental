import { clients } from './data';
import { LogoSlider } from './LogoSlider';
import { SectionTitle } from './SectionTitle';

export function ClientLogos() {
  return (
    <section className="py-10 sm:py-16 md:py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Trusted by Leading Brands"
          subtitle="Selected brands and teams we have supported through corporate gifting requirements"
        />

        <div className="relative">
          {/* Logo Sliders */}
          <div className="relative z-0 space-y-4 sm:space-y-8">
            <LogoSlider clients={clients} direction="left" speed={30} />
            <div className="hidden sm:block">
              <LogoSlider clients={clients} direction="right" speed={25} />
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-2 sm:gap-4 text-center max-w-3xl mx-auto">
          <div className="p-2 sm:p-4">
            <div className="text-sm sm:text-2xl md:text-3xl font-bold text-indigo-700">Trusted Support</div>
            <div className="text-xs sm:text-base text-slate-600">Corporate Gifting Partner</div>
          </div>
          <div className="p-2 sm:p-4">
            <div className="text-sm sm:text-2xl md:text-3xl font-bold text-indigo-700">Custom Branding</div>
            <div className="text-xs sm:text-base text-slate-600">Packaging Support</div>
          </div>
          <div className="p-2 sm:p-4">
            <div className="text-sm sm:text-2xl md:text-3xl font-bold text-indigo-700">On-Time Delivery</div>
            <div className="text-xs sm:text-base text-slate-600">Delivery Planning</div>
          </div>
        </div>
      </div>
    </section>
  );
}