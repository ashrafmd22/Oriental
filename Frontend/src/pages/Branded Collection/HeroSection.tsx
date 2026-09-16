import React from 'react';
import { PageHero, scrollToId } from '../../components/PageHero';

interface HeroSectionProps {
  title: string;
  description: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ title, description }) => (
  <PageHero
    title={title}
    description={description}
    primary={{ label: 'Explore Brands', onClick: scrollToId('brands-section') }}
    secondary={{ label: 'Request Brand Curation', to: '/contact' }}
    note="Looking for a specific brand? Share your requirement with our team."
  />
);
