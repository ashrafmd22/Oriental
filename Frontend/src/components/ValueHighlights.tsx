import { ClipboardList, Palette, PackageCheck, Truck } from "lucide-react";

const steps = [
  {
    title: "Share Your Brief",
    description: "Tell us your audience, quantity, branding need, and delivery date.",
    icon: ClipboardList,
  },
  {
    title: "Receive Curated Options",
    description: "Get relevant suggestions based on budget, timeline, and gifting objective.",
    icon: Palette,
  },
  {
    title: "Approve Sample",
    description: "Review sample and branding application before we move to bulk production.",
    icon: PackageCheck,
  },
  {
    title: "Bulk Delivery",
    description: "Get high-quality branded gifts with timeline-focused dispatch support.",
    icon: Truck,
  },
];

export function ValueHighlights() {
  return (
    <section className="bg-white py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">How We Work</p>
          <h2 className="mt-3 text-2xl sm:text-4xl font-black text-slate-900">
            Designed for modern teams and enterprise gifting
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600">
            A streamlined process that reduces back-and-forth and helps you launch gifting campaigns quickly.
          </p>
        </div>
        <div className="mt-6 sm:mt-10 grid gap-3 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4 sm:p-6 transition hover:shadow-lg">
              <div className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-3 py-2 sm:p-3 text-white">
                <step.icon className="h-5 w-5" />
                <span className="text-xs font-bold">Step {index + 1}</span>
              </div>
              <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-bold text-slate-900">{step.title}</h3>
              <p className="mt-1.5 sm:mt-2 text-sm sm:text-base text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
