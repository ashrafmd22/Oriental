import { useEffect } from 'react';
import { HeroSection } from './HeroSection';
import { LegacySection } from './LegacySection';
import { CoreValuesSection } from './CoreValuesSection';
import { BusinessSupportSection } from './BusinessSupportSection';

export function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16 sm:pt-[72px] xl:pt-20">
      <HeroSection />
      <LegacySection />
      <CoreValuesSection />
      <BusinessSupportSection />
    </div>
  );
}