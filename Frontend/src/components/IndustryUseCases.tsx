import { Building2, FlaskConical, Landmark, Megaphone, Rocket, Stethoscope } from "lucide-react";

const industries = [
  { label: "IT and SaaS", icon: Rocket },
  { label: "Pharma and Healthcare", icon: Stethoscope },
  { label: "BFSI", icon: Landmark },
  { label: "Real Estate", icon: Building2 },
  { label: "Events and Marketing", icon: Megaphone },
  { label: "Manufacturing", icon: FlaskConical },
];

const deliveryHighlights = [
  "Onboarding and welcome kits",
  "Festive and client gifting",
  "Event and conference giveaways",
];

export function IndustryUseCases() {
  return (
    <section className="bg-slate-50 py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-indigo-600">Solutions by Use Case</p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-black text-slate-900">
            Built for the way business teams buy corporate gifts
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.label}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-3 sm:px-4 text-xs sm:text-sm font-semibold text-slate-700"
            >
              <industry.icon className="h-4 w-4 text-indigo-600 shrink-0" />
              <span>{industry.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-2 sm:gap-2.5">
          {deliveryHighlights.map((item) => (
            <div key={item} className="rounded-full border border-indigo-100 bg-indigo-50/70 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
