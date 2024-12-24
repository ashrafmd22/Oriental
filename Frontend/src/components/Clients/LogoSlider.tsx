import React from 'react';
import Marquee from 'react-fast-marquee';
import type { Client } from './data';
import { LogoSlide } from './LogoSlide';

interface LogoSliderProps {
  clients: Client[];
  speed?: number;
  direction?: 'left' | 'right';
}

export function LogoSlider({
  clients,
  speed = 40,
  direction = 'left'
}: LogoSliderProps) {
  return (
    <div className="py-2 sm:py-4">
      <Marquee
        speed={speed}
        direction={direction}
        gradient={true}
        gradientColor="white"
        gradientWidth={50}
        pauseOnHover={true}
      >
        {clients.map((client, index) => (
          <LogoSlide key={index} client={client} />
        ))}
      </Marquee>
    </div>
  );
}