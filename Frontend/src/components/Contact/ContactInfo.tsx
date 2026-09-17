import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { formCardClass } from '../formStyles';

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

function ContactItem({ icon, title, href, external, children }: ContactItemProps) {
  const content = (
    <>
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">{title}</h3>
        <div className="mt-0.5 text-[15px] font-medium text-slate-800 [overflow-wrap:anywhere]">{children}</div>
      </div>
      {href && <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-slate-300 transition group-hover:text-indigo-600" />}
    </>
  );

  const className =
    'group flex items-start gap-4 rounded-xl border border-slate-100 bg-slate-50/60 p-4 transition hover:border-indigo-200 hover:bg-white hover:shadow-md';

  return href ? (
    <a
      href={href}
      className={className}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
}

export function ContactInfo() {
  return (
    <div className={`${formCardClass} flex flex-col p-5 sm:p-8`}>
      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Contact Information</h2>
      <p className="mt-1 text-sm text-slate-500">Prefer to talk? Reach us directly.</p>

      <div className="mt-6 grid grid-cols-1 flex-1 content-start gap-3">
        <ContactItem icon={<Phone className="h-5 w-5" />} title="Call Us" href="tel:+919899987779">
          +91 98999 87779
        </ContactItem>

        <ContactItem icon={<Mail className="h-5 w-5" />} title="Email Us" href="mailto:orientalgifting@gmail.com">
          orientalgifting@gmail.com
        </ContactItem>

        <ContactItem
          icon={<MapPin className="h-5 w-5" />}
          title="Visit Us"
          href="https://maps.google.com/?q=Oriental+Enterprises+Karol+Bagh+New+Delhi"
          external
        >
          8769/14-B, Shidipura Karol Bagh, New Delhi 110005
        </ContactItem>

        <ContactItem icon={<Clock className="h-5 w-5" />} title="Business Hours">
          Mon – Fri: 9:00 AM – 7:00 PM
          <br />
          Sat: 10:00 AM – 6:00 PM
        </ContactItem>
      </div>

      <a
        href="https://wa.me/+919899987779?text=Hi%2C%20I%20need%20help%20with%20corporate%20gifting."
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-100 transition hover:bg-emerald-600"
      >
        <FaWhatsapp className="h-5 w-5" />
        Chat on WhatsApp
      </a>
    </div>
  );
}
