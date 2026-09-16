import React from 'react';
import { PageHero, scrollToId } from '../../components/PageHero';

export const HeroSection: React.FC = () => (
  <PageHero
    title="Our Story"
    description="Three decades of excellence in corporate gifting, building lasting relationships through quality and innovation."
    primary={{ label: 'Discover Our Journey', onClick: scrollToId('legacy') }}
    secondary={{
      label: 'WhatsApp Us',
      href: 'https://wa.me/+919899987779?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20corporate%20gifting.',
      external: true,
    }}
    note="Serving businesses from Karol Bagh, New Delhi since 1990."
  />
);
