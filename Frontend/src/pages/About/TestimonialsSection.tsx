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
          width="250px"
          duration={60}
          pauseOnHover={true}
          blurBorders={false}
          blurBorderColor="#fff"
        >
          {clients.map((client, index) => (
            <Slider.Slide key={index}>
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 min-h-[300px] sm:min-h-[350px]">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-gray-200">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-600 italic mb-4 sm:mb-6 text-center">
                  {client.testimonial}
                </p>
                <h3 className="font-semibold text-center text-base sm:text-lg md:text-xl">
                  {client.name}
                </h3>
              </div>
            </Slider.Slide>
          ))}
        </Slider>
      </div>
    </section>
  );
};