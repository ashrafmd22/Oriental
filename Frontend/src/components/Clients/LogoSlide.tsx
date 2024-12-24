import React from 'react';
import type { Client } from './data';

interface LogoSlideProps {
  client: Client;
}

export function LogoSlide({ client }: LogoSlideProps) {
  return (
    <div className="flex items-center justify-center px-2 sm:px-4 py-2 mx-1 sm:mx-2">
      <img
        src={client.logo}
        alt={client.name}
        className={`${client.width || 'w-16 sm:w-24 md:w-28 lg:w-32'} object-contain h-8 sm:h-12 md:h-16 lg:h-20 filter grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105`}
        loading="lazy"
      />
    </div>
  );
}