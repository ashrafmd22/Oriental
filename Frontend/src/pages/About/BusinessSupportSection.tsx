import React from 'react';
import { BadgeCheck, CalendarClock, Handshake, ShieldCheck, SwatchBook } from 'lucide-react';

const supportAreas = [
  'Employee onboarding kits',
  'Festive and occasion gifting',
  'Client appreciation gifting',
  'Event and conference giveaways',
  'Executive and premium gifting',
  'Custom sourced requirements',
];

const commitmentPoints = [
  {
    title: 'Clear Communication',
    description: 'You get practical updates and realistic timelines at every stage.',
    icon: Handshake,
  },
  {
    title: 'Quality and Consistency',
    description: 'Selections are curated with attention to utility, finish, and presentation.',
    icon: ShieldCheck,
  },
  {
    title: 'Flexible Curation',
    description: 'From budget gifting to premium kits, options are tailored to your brief.',
    icon: SwatchBook,
  },
];

export const BusinessSupportSection: React.FC = () => {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">What We Support</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900">
              Corporate gifting use-cases your team can rely on
            </h2>
            <p className="mt-4 text-base text-slate-600">
              We help teams plan and execute gifting requirements across common business scenarios without adding unnecessary complexity.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {supportAreas.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 rounded-xl border border-indigo-100 bg-indigo-50/60 px-4 py-3 transition hover:border-indigo-200 hover:bg-indigo-50"
                >
                  <BadgeCheck className="h-5 w-5 shrink-0 text-indigo-600" />
                  <span className="text-sm font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">What You Can Expect</p>
            <h3 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900">A dependable working style for your team</h3>
            <p className="mt-4 text-base text-slate-600">
              Our focus is not just product supply. We aim to make planning, approvals, and fulfilment simpler for business teams.
            </p>
            <div className="mt-6 space-y-3">
              {commitmentPoints.map((point) => (
                <div
                  key={point.title}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 transition hover:border-indigo-200 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <point.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900">{point.title}</h4>
                    <p className="mt-1 text-sm text-slate-600">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-5 text-white">
              <div className="flex items-center gap-2">
                <CalendarClock className="h-5 w-5" />
                <p className="font-semibold">Business-hour response support</p>
              </div>
              <p className="mt-1.5 text-sm text-indigo-100">
                For active requirements, we prioritize quick shortlisting and timeline discussions to help your team move faster.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
