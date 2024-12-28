import React from 'react';
import type { Client } from './data';

interface LogoSlideProps {
  client: Client;
}

export function LogoSlide({ client }: LogoSlideProps) {
  return (
    <div className="flex items-center justify-center px-2 sm:px-4 py-2 mx-1 sm:mx-2">
      <div className="w-[120px] sm:w-[150px] md:w-[180px] h-[60px] sm:h-[80px] md:h-[100px] relative flex items-center justify-center">
        <img
          src={client.logo}
          alt={client.name}
          className={`max-w-full max-h-full w-auto h-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105 ${client.width || ''}`}
          loading="lazy"
        />
      </div>
    </div>
  );
}