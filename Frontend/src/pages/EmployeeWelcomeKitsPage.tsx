import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export function EmployeeWelcomeKitsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-20 sm:pt-24">
      <section className="bg-gradient-to-r from-indigo-700 to-purple-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">Employee Welcome Kits</h1>
          <p className="mt-4 mx-auto max-w-3xl text-sm sm:text-base md:text-lg text-indigo-100">
            Build onboarding kits that reflect your culture with curated products, branding support, and delivery coordination.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="inline-flex min-h-11 items-center justify-center rounded-full bg-white text-indigo-700 px-6 py-3 font-semibold">
              Request Kit Suggestions
            </Link>
            <Link to="/products/bags" className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/40 px-6 py-3 font-semibold">
              Explore Kit Categories
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-14">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
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
