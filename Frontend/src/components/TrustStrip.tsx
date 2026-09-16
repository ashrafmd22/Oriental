export function TrustStrip() {
  const items = [
    "MOQ options available for bulk orders",
    "Proposal and shortlist typically within 24 hours",
    "Sample approval before bulk production",
    "GST invoicing and pan-India delivery support",
  ];

  return (
    <section className="bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-700 font-semibold">
          {items.map((item) => (
            <span key={item} className="rounded-full bg-slate-100 px-3 py-1.5 text-center">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
