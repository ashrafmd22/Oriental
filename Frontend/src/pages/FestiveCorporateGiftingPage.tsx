import { useEffect } from 'react';
import { PageHero } from '../components/PageHero';

export function FestiveCorporateGiftingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-16 sm:pt-[72px] xl:pt-20">
      <PageHero
        title="Festive Corporate Gifting"
        description="Plan festive gifting for employees, clients, and partners with curated options across budgets and branding requirements."
        primary={{ label: 'Plan Festive Gifting', to: '/contact' }}
        secondary={{
          label: 'WhatsApp Requirement',
          href: 'https://wa.me/+919899987779?text=Hi%2C%20I%20need%20festive%20corporate%20gifting%20options.',
          external: true,
        }}
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-900">Budget-Friendly</h2>
            <p className="mt-2 text-sm text-slate-600">Utility-first gifting options for larger quantities and broad distribution.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-900">Mid-Premium Mix</h2>
            <p className="mt-2 text-sm text-slate-600">Balanced curation for impact and practicality with custom branding support.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-900">Premium Curation</h2>
            <p className="mt-2 text-sm text-slate-600">High-perception gifting for leadership, key clients, and strategic relationships.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
