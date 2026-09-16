import React from 'react';
import { CalendarCheck, HeartHandshake, Palette, Truck } from 'lucide-react';

const stats = [
  { value: 'Since 1990', label: 'Years of Experience', icon: CalendarCheck },
  { value: 'Trusted Service', label: 'Client Support', icon: HeartHandshake },
  { value: 'Custom Branding', label: 'Branding and Packaging', icon: Palette },
  { value: 'Pan India', label: 'Delivery Planning', icon: Truck },
];

export const LegacySection: React.FC = () => {
  return (
    <section id="legacy" className="py-14 sm:py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">Who We Are</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900">
              Our Legacy of Excellence
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-base sm:text-lg text-slate-600">
                Since 1990, Oriental Enterprises has supported business gifting requirements with consistent quality and practical execution.
              </p>
              <p className="text-base sm:text-lg text-slate-600">
                From a family-run setup to a trusted corporate gifting partner, our focus remains clear: relevant curation, clean branding, and reliable delivery planning.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-indigo-50/60 p-3.5 sm:p-4"
                >
                  <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm sm:text-lg font-bold leading-tight text-slate-900">{stat.value}</p>
                    <p className="mt-0.5 text-xs sm:text-sm text-slate-500">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-3 sm:gap-4 pb-10 sm:pb-14">
            <div className="absolute -inset-3 sm:-inset-5 -z-0 rounded-[2rem] bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100" />
            <img
              loading="lazy"
              decoding="async"
              src="/assets/About/1.jpg"
              alt="Corporate team meeting"
              className="relative aspect-[4/5] w-full rounded-2xl object-cover shadow-xl"
            />
            <img
              loading="lazy"
              decoding="async"
              src="/assets/About/2.jpg"
              alt="Business presentation"
              className="relative aspect-[4/5] w-full rounded-2xl object-cover shadow-xl translate-y-10 sm:translate-y-14"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
