import React, { useEffect } from 'react';
import { HeroSection } from './HeroSection';
import { LegacySection } from './LegacySection';
import { CoreValuesSection } from './CoreValuesSection';
import { BusinessSupportSection } from './BusinessSupportSection';

export function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 sm:pt-24 scroll-smooth">
      <HeroSection />
      <LegacySection />
      <CoreValuesSection />
      <BusinessSupportSection />
    </div>
  );
}