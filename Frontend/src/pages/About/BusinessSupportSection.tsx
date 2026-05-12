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
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-600">What We Support</p>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800">
              Corporate gifting use-cases your team can rely on
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600">
              We help teams plan and execute gifting requirements across common business scenarios without adding unnecessary complexity.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {supportAreas.map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-lg border border-blue-100 bg-blue-50/50 px-3 py-2.5">
                  <BadgeCheck className="h-4 w-4 text-blue-600 shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-600">What You Can Expect</p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-gray-800">A dependable working style for your team</h3>
            <p className="mt-4 text-sm sm:text-base text-gray-600">
              Our focus is not just product supply. We aim to make planning, approvals, and fulfilment simpler for business teams.
            </p>
            <div className="mt-6 space-y-4">
              {commitmentPoints.map((point) => (
                <div key={point.title} className="rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-5">
                  <div className="flex items-center gap-3">
                    <point.icon className="h-5 w-5 text-blue-600" />
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800">{point.title}</h4>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{point.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/70 p-4">
              <div className="flex items-center gap-2 text-blue-700">
                <CalendarClock className="h-4 w-4" />
                <p className="text-sm font-semibold">Business-hour response support</p>
              </div>
              <p className="mt-1 text-sm text-gray-700">
                For active requirements, we prioritize quick shortlisting and timeline discussions to help your team move faster.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
