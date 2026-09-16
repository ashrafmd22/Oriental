import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

type FinderOption = {
  id: string;
  label: string;
};

type Recommendation = {
  title: string;
  categories: string[];
  route: string;
  note: string;
};

const occasions: FinderOption[] = [
  { id: "employee-onboarding", label: "Employee Onboarding" },
  { id: "festive-hampers", label: "Festive Gifting" },
  { id: "client-events", label: "Client Events" },
  { id: "conference", label: "Conference / Expo" },
];

const audiences: FinderOption[] = [
  { id: "team", label: "Internal Team" },
  { id: "clients", label: "Clients / Partners" },
  { id: "mixed", label: "Mixed Audience" },
];

const budgets: FinderOption[] = [
  { id: "under-500", label: "Under 500 / gift" },
  { id: "500-1500", label: "500 - 1500 / gift" },
  { id: "1500-plus", label: "1500+ / gift" },
];

function getRecommendation(occasion: string, audience: string, budget: string): Recommendation {
  let categories: string[] = [];
  let route = "/products";
  let title = "Balanced shortlist for your requirement";

  if (budget === "under-500") {
    categories = ["Drinkware", "Caps", "Accessories"];
    route = "/products/drinkware";
    title = "Value-focused shortlist for bulk gifting";
  } else if (budget === "500-1500") {
    categories = ["Diaries & Stationery", "T-Shirts", "Bags & Backpacks"];
    route = "/products/diaries";
    title = "Balanced shortlist for utility and branding";
  } else {
    categories = ["Jackets & Apparel", "Bags & Backpacks", "Branded Collection"];
    route = "/branded-collection";
    title = "Premium-focused shortlist for high-impact gifting";
  }

  if (occasion === "employee-onboarding") {
    categories = ["Bags & Backpacks", "Diaries & Stationery", "Drinkware", ...categories];
    route = "/products/bags";
  } else if (occasion === "festive-hampers") {
    categories = ["Diaries & Stationery", "Drinkware", "Accessories", ...categories];
    route = "/products/diaries";
  } else if (occasion === "client-events") {
    categories = ["Branded Collection", "Jackets & Apparel", "Accessories", ...categories];
    route = "/branded-collection";
  } else if (occasion === "conference") {
    categories = ["Caps", "T-Shirts", "Accessories", ...categories];
    route = "/products/caps";
  }

  if (audience === "team") {
    categories = ["T-Shirts", ...categories];
  } else if (audience === "clients") {
    categories = ["Branded Collection", ...categories];
  } else if (audience === "mixed") {
    categories = ["Drinkware", ...categories];
  }

  const deduped = Array.from(new Set(categories)).slice(0, 4);

  return {
    title,
    categories: deduped,
    route,
    note: "Need something beyond these? We also source custom corporate gifting items on request.",
  };
}

export function SmartGiftFinder() {
  const [occasion, setOccasion] = useState("");
  const [audience, setAudience] = useState("");
  const [budget, setBudget] = useState("");

  const recommendation = useMemo(
    () => getRecommendation(occasion || "employee-onboarding", audience || "team", budget || "500-1500"),
    [occasion, audience, budget]
  );
  const canShowResult = Boolean(occasion && audience && budget);

  return (
    <section className="bg-slate-900 py-10 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-5 sm:p-8">
          <div className="flex items-center gap-2 text-indigo-300">
            <Sparkles className="h-5 w-5" />
            <p className="text-sm font-semibold uppercase tracking-widest">Smart Gift Finder</p>
          </div>
          <h2 className="mt-3 text-2xl sm:text-4xl font-black text-white">
            Build the right gifting shortlist in 30 seconds
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-3xl">
            Select your campaign context and get an instant recommendation to help your team move faster.
          </p>

          <div className="mt-6 grid gap-3 sm:gap-4 md:grid-cols-3">
            <SelectorCard
              title="1) Occasion"
              options={occasions}
              selected={occasion}
              onSelect={setOccasion}
            />
            <SelectorCard
              title="2) Audience"
              options={audiences}
              selected={audience}
              onSelect={setAudience}
            />
            <SelectorCard
              title="3) Budget"
              options={budgets}
              selected={budget}
              onSelect={setBudget}
            />
          </div>

          <div className="mt-6 rounded-2xl border border-indigo-300/20 bg-indigo-500/10 p-4 sm:p-5">
            {canShowResult ? (
              <>
                <p className="text-sm text-indigo-200">Recommended pack based on your selection:</p>
                <p className="mt-2 text-lg sm:text-xl font-bold text-white">{recommendation.title}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {recommendation.categories.map((category) => (
                    <span
                      key={category}
                      className="rounded-full border border-indigo-300/30 bg-white/10 px-3 py-1 text-xs sm:text-sm font-semibold text-indigo-100"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs sm:text-sm text-indigo-100">{recommendation.note}</p>
                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <Link
                    to={recommendation.route}
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900"
                  >
                    Explore Suggested Products
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white"
                  >
                    Request Curated Quote
                  </Link>
                </div>
              </>
            ) : (
              <p className="text-sm sm:text-base text-indigo-100">
                Select occasion, audience, and budget to unlock your tailored recommendation.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

interface SelectorCardProps {
  title: string;
  options: FinderOption[];
  selected: string;
  onSelect: (value: string) => void;
}

function SelectorCard({ title, options, selected, onSelect }: SelectorCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm font-semibold text-slate-200">{title}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onSelect(option.id)}
            className={`rounded-full px-3 py-1.5 text-xs sm:text-sm font-semibold transition ${
              selected === option.id
                ? "bg-indigo-400 text-slate-900"
                : "bg-white/10 text-slate-200 hover:bg-white/20"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
