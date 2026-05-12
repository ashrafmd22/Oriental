import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export function FestiveCorporateGiftingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-20 sm:pt-24">
      <section className="bg-gradient-to-r from-fuchsia-700 to-indigo-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">Festive Corporate Gifting</h1>
          <p className="mt-4 mx-auto max-w-3xl text-sm sm:text-base md:text-lg text-fuchsia-100">
            Plan festive gifting for employees, clients, and partners with curated options across budgets and branding requirements.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="inline-flex min-h-11 items-center justify-center rounded-full bg-white text-indigo-700 px-6 py-3 font-semibold">
              Plan Festive Gifting
            </Link>
            <a
              href="https://wa.me/+919899987779?text=Hi%2C%20I%20need%20festive%20corporate%20gifting%20options."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/40 px-6 py-3 font-semibold"
            >
              WhatsApp Requirement
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-900">Budget-Friendly</h2>
            <p className="mt-2 text-sm text-slate-600">Utility-first gifting options for larger quantities and broad distribution.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-900">Mid-Premium Mix</h2>
            <p className="mt-2 text-sm text-slate-600">Balanced curation for impact and practicality with custom branding support.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-900">Premium Curation</h2>
            <p className="mt-2 text-sm text-slate-600">High-perception gifting for leadership, key clients, and strategic relationships.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
