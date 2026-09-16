// Shared look for every enquiry form on the site (home quote form, contact page).

export const formCardClass =
  'rounded-2xl border border-slate-200 bg-white shadow-xl shadow-indigo-100/60';

export const labelClass = 'mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-slate-700';

const fieldSurface =
  'bg-slate-50/70 transition duration-200 hover:border-slate-400';

export const inputClass = `w-full rounded-xl border px-4 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 ${fieldSurface} focus:bg-white focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 disabled:bg-slate-100 disabled:cursor-not-allowed`;

export const phoneWrapperClass = `flex items-stretch overflow-hidden rounded-xl border ${fieldSurface} focus-within:bg-white focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-100`;

export const phonePrefixClass =
  'flex items-center border-r border-slate-200 bg-slate-100 px-3.5 text-sm font-medium text-slate-600';

export const phoneInputClass =
  'min-w-0 flex-1 border-0 bg-transparent px-4 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0 disabled:cursor-not-allowed';

export const submitButtonClass =
  'w-full flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-200 transition duration-300 hover:-translate-y-0.5 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none';

export const borderFor = (error?: string, override?: string) =>
  error ? 'border-red-400' : override || 'border-slate-300';
