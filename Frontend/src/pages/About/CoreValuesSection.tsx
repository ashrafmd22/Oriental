import React from 'react';
import { CheckCircle, Target, Heart } from 'lucide-react';

const values = [
  {
    title: 'Quality First',
    description: 'Premium materials and expert craftsmanship in every product.',
    icon: CheckCircle
  },
  {
    title: 'Innovation',
    description: 'Constantly evolving with market trends and client needs.',
    icon: Target
  },
  {
    title: 'Client Focus',
    description: 'Building lasting relationships through exceptional service.',
    icon: Heart
  }
];

export const CoreValuesSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-gray-800 mb-8 sm:mb-12 tracking-tight">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <div className="group-hover:animate-bounce">
                <value.icon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-600 mx-auto mb-4 sm:mb-6" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 group-hover:text-blue-600 transition duration-300">
                {value.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800 transition duration-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};