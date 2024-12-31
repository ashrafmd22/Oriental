import React, { useEffect } from 'react';
import { HeroSection } from './HeroSection';
import { LegacySection } from './LegacySection';
import { CoreValuesSection } from './CoreValuesSection';
import { TestimonialsSection } from './TestimonialsSection';

export function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16 sm:pt-20  scroll-smooth" >
      <HeroSection />
      <LegacySection />
      <CoreValuesSection />
      <TestimonialsSection />
    </div >
  );
}