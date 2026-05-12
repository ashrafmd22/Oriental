import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export function CorporateGiftsDelhiPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-20 sm:pt-24">
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">Corporate Gifts Supplier in Delhi</h1>
          <p className="mt-4 mx-auto max-w-3xl text-sm sm:text-base md:text-lg text-blue-100">
            Oriental Enterprises helps business teams in Delhi with curated corporate gifting, custom branding, and practical delivery planning.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="inline-flex min-h-11 items-center justify-center rounded-full bg-white text-blue-700 px-6 py-3 font-semibold">
              Get a Quote
            </Link>
            <Link to="/products" className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/40 px-6 py-3 font-semibold">
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-slate-900">What We Support</h2>
            <ul className="mt-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li>Employee onboarding kits and joining packs</li>
              <li>Client appreciation and premium gifting</li>
              <li>Festive corporate gifting campaigns</li>
              <li>Conference and event giveaway kits</li>
              <li>Custom sourced items as per business brief</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white border border-gray-200 p-6">
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
