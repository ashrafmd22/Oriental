import { useEffect } from 'react';
import { PageHero } from '../components/PageHero';

export function EmployeeWelcomeKitsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-16 sm:pt-[72px] xl:pt-20">
      <PageHero
        title="Employee Welcome Kits"
        description="Build onboarding kits that reflect your culture with curated products, branding support, and delivery coordination."
        primary={{ label: 'Request Kit Suggestions', to: '/contact' }}
        secondary={{ label: 'Explore Kit Categories', to: '/products/bags' }}
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-14">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">Common Welcome Kit Components</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm sm:text-base text-slate-700">
            <span>Backpack / Laptop Bag</span>
            <span>Drinkware / Bottle</span>
            <span>Notebook and Pen Set</span>
            <span>Branded T-shirt / Apparel</span>
            <span>Desk Utility Essentials</span>
            <span>Custom Welcome Card</span>
          </div>
          <p className="mt-6 text-sm sm:text-base text-slate-600">
            If your preferred item is not listed, share your requirement and we can curate custom-sourced options.
          </p>
        </div>
      </section>
    </div>
  );
}
