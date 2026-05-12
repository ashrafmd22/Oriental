import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the minimum order quantity for corporate gifts?",
    answer: "MOQ depends on product type. We support both startup-sized and enterprise bulk orders.",
  },
  {
    question: "Can you customize products with our logo and packaging?",
    answer: "Yes, we offer logo branding, packaging options, and campaign-based curation.",
  },
  {
    question: "How fast can you deliver bulk orders?",
    answer: "Delivery timelines vary by quantity and customization. We share clear dispatch timelines before confirmation.",
  },
  {
    question: "Do you provide GST invoices and support for company procurement?",
    answer: "Yes, we support standard business invoicing and procurement-friendly order documentation.",
  },
];

export function BusinessFaqSection() {
  return (
    <section className="bg-slate-50 py-14 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">FAQ</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900">
            Common Questions Before You Place A Bulk Order
          </h2>
        </div>
        <div className="mt-8 space-y-3">
          {faqs.map((item) => (
            <details key={item.question} className="group rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-left text-sm sm:text-base font-semibold text-slate-900">
                {item.question}
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm sm:text-base text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
