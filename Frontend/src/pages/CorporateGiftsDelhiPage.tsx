import { useEffect } from 'react';
import { PageHero } from '../components/PageHero';

export function CorporateGiftsDelhiPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-16 sm:pt-[72px] xl:pt-20">
      <PageHero
        title="Corporate Gifts Supplier in Delhi"
        description="Oriental Enterprises helps business teams in Delhi with curated corporate gifting, custom branding, and practical delivery planning."
        primary={{ label: 'Get a Quote', to: '/contact' }}
        secondary={{ label: 'Explore Products', to: '/products' }}
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white border border-slate-200 p-6">
            <h2 className="text-2xl font-bold text-slate-900">What We Support</h2>
            <ul className="mt-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li>Employee onboarding kits and joining packs</li>
              <li>Client appreciation and premium gifting</li>
              <li>Festive corporate gifting campaigns</li>
              <li>Conference and event giveaway kits</li>
              <li>Custom sourced items as per business brief</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white border border-slate-200 p-6">
            <h2 className="text-2xl font-bold text-slate-900">Why Teams Choose Us</h2>
            <ul className="mt-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li>Since 1990 experience in corporate gifting</li>
              <li>Custom branding and packaging guidance</li>
              <li>Business-hour response for active enquiries</li>
              <li>Pan-India delivery support from Delhi operations</li>
              <li>Practical curation for budget and timeline goals</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
