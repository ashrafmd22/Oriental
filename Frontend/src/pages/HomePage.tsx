import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
// import { FeaturedProducts } from '../components/FeaturedProducts';
import { FeaturedProducts } from '../components/Featured/FeaturedProducts';

// import { CorporateOrderForm } from '../components/CorporateOrderForm';
import { CorporateOrderForm } from '../components/CorporateOrderForm/Index';
// import { ClientLogos } from '../components/ClientLogos';
import { ClientLogos } from '../components/Clients/ClientLogos';

import { About } from '../components/About';
import { ValueHighlights } from '../components/ValueHighlights';
import { BusinessFaqSection } from '../components/BusinessFaqSection';
import { SmartGiftFinder } from '../components/SmartGiftFinder';
import { TrustStrip } from '../components/TrustStrip';
import { AllCategoryCoverage } from '../components/AllCategoryCoverage';
import { IndustryUseCases } from '../components/IndustryUseCases';

export function HomePage() {
  // useEffect hook to scroll to the top on page refresh
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top (0, 0)
  }, []); // Empty dependency array ensures it runs once when the page refreshes

  return (
    <>
      <Hero />
      <TrustStrip />
      <AllCategoryCoverage />
      <IndustryUseCases />
      <FeaturedProducts />
      <SmartGiftFinder />
      <CorporateOrderForm />
      <ValueHighlights />
      <About />
      <BusinessFaqSection />
      <ClientLogos />
    </>
  );
}
