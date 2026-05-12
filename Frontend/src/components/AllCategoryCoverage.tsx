import { Link } from "react-router-dom";
import { BadgeCheck, Boxes, Building2, Truck } from "lucide-react";

const categories = [
  "Employee Welcome Kits",
  "Festive Hampers",
  "Tech Accessories",
  "Drinkware",
  "Office Desk Essentials",
  "Bags & Backpacks",
  "Executive Gifts",
  "Apparel & T-Shirts",
  "Diaries & Stationery",
  "Eco-Friendly Gifts",
  "Wellness & Self-Care Kits",
  "Gourmet Gift Hampers",
  "Event Giveaways",
  "Conference & Expo Kits",
  "Awards & Recognition",
  "Premium Brand Merchandise",
];

export function AllCategoryCoverage() {
  return (
    <section className="bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-white via-indigo-50/50 to-purple-50/40 p-4 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-2 text-indigo-700">
            <Building2 className="h-5 w-5" />
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
              End-to-End Corporate Gifting Partner
            </p>
          </div>

          <h2 className="mt-2 text-xl sm:text-3xl lg:text-4xl font-black text-slate-900">
            We deal in all types of corporate gift items
          </h2>
          <p className="mt-2 max-w-3xl text-sm sm:text-base text-slate-600">
            Even if a product image is not listed yet, our sourcing team can arrange it with branding, packaging,
            and pan-India dispatch support.
          </p>
          <p className="mt-3 text-xs sm:text-sm font-semibold text-indigo-700">
            Popular categories we frequently supply:
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-[11px] sm:text-xs font-semibold text-indigo-700">
              20+ popular categories
            </span>
            <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-[11px] sm:text-xs font-semibold text-indigo-700">
              Bulk and urgent order support
            </span>
            <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-[11px] sm:text-xs font-semibold text-indigo-700">
              Custom branding and packaging
            </span>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
            {categories.map((item, index) => (
              <div
                key={item}
                className={`flex items-center gap-2 rounded-xl border border-indigo-100 bg-white px-3 py-2 text-sm font-semibold text-slate-700 ${
                  index > 5 ? "hidden sm:flex" : ""
                }`}
              >
                <BadgeCheck className="h-4 w-4 shrink-0 text-indigo-600" />
                <span>{item}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50/70 px-3 py-2 text-sm font-semibold text-indigo-800 sm:col-span-2 lg:col-span-1">
              <BadgeCheck className="h-4 w-4 shrink-0 text-indigo-600" />
              <span>Need something else? We source custom items on request.</span>
            </div>
          </div>

          <div className="mt-5 grid gap-2.5 sm:gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-indigo-100 bg-white p-3.5 sm:p-4">
              <div className="flex items-center gap-2 text-indigo-700">
                <Boxes className="h-4 w-4" />
                <p className="text-sm font-bold">Custom Sourcing</p>
              </div>
              <p className="mt-1 text-xs text-slate-600">Did not find your item? Share your brief and we source it fast.</p>
            </div>
            <div className="rounded-2xl border border-indigo-100 bg-white p-3.5 sm:p-4">
              <div className="flex items-center gap-2 text-indigo-700">
                <BadgeCheck className="h-4 w-4" />
                <p className="text-sm font-bold">Branding Support</p>
              </div>
              <p className="mt-1 text-xs text-slate-600">Printing, embroidery, engraving, and packaging guidance included.</p>
            </div>
            <div className="rounded-2xl border border-indigo-100 bg-white p-3.5 sm:p-4">
              <div className="flex items-center gap-2 text-indigo-700">
                <Truck className="h-4 w-4" />
                <p className="text-sm font-bold">Pan-India Delivery</p>
              </div>
              <p className="mt-1 text-xs text-slate-600">Reliable dispatch planning for events and campaign timelines.</p>
            </div>
          </div>

          <div className="mt-5 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Request Complete Catalogue
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-white px-5 py-2.5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
            >
              Explore Listed Categories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
