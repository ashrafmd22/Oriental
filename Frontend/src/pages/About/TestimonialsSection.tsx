import React from 'react';
import Slider from 'react-infinite-logo-slider';
import { clients } from './data';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-gray-800 mb-8 sm:mb-12">
          What Our Clients Say
        </h2>
        <Slider
          width="300px"
          duration={60}
          pauseOnHover={true}
          blurBorders={false}
          blurBorderColor="#fff"
        >
          {clients.map((client, index) => (
            <Slider.Slide key={index}>
              <div className="bg-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 w-[280px] h-[380px] flex flex-col mx-2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 flex-shrink-0">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-lg text-gray-900 truncate">{client.name}</h3>
                    <p className="text-gray-600 text-sm truncate">{client.testimonial.designation}</p>
                  </div>
                </div>
                <blockquote className="text-base text-gray-600 italic mb-4 flex-1">
                  "{client.testimonial.text}"
                </blockquote>
                <p className="text-blue-600 font-medium mt-auto">
                  - {client.testimonial.author}
                </p>
              </div>
            </Slider.Slide>
          ))}
        </Slider>
      </div>
    </section>
  );
};