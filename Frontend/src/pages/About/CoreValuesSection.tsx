import React from 'react';
import { CheckCircle, Target, Heart } from 'lucide-react';

const values = [
  {
    title: 'Quality First',
    description: 'Premium materials and expert craftsmanship in every product.',
    icon: CheckCircle,
    tint: 'from-indigo-500 to-indigo-600',
  },
  {
    title: 'Innovation',
    description: 'Constantly evolving with market trends and client needs.',
    icon: Target,
    tint: 'from-purple-500 to-fuchsia-600',
  },
  {
    title: 'Client Focus',
    description: 'Building lasting relationships through exceptional service.',
    icon: Heart,
    tint: 'from-pink-500 to-rose-500',
  },
];

export const CoreValuesSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">What Drives Us</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900">Our Core Values</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${value.tint} text-white shadow-lg transition group-hover:scale-110`}
              >
                <value.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">{value.title}</h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
