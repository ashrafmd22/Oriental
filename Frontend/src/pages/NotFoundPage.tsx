import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-28 pb-16">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <span className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
          Error 404
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl font-black text-slate-900">
          This page does not exist
        </h1>
        <p className="mt-4 text-slate-600 text-base sm:text-lg">
          The link may be outdated, or the page may have moved. Explore our catalog or contact our team for help.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/products"
            className="w-full sm:w-auto rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-white font-semibold shadow-md transition hover:opacity-95"
          >
            Explore Products
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto rounded-full border border-slate-300 px-6 py-3 text-slate-700 font-semibold transition hover:bg-slate-100"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
