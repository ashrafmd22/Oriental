import React from 'react';
import { Send } from 'lucide-react';
import { ContactFormInput } from './ContactFormInput';
import { borderFor, formCardClass, inputClass, labelClass } from '../formStyles';
import { PhoneInput } from './PhoneInput';
import { SubmitButton } from './SubmitButton';

interface ContactFormProps {
  formData: {
    fullName: string;
    email: string;
    phone: string;
    message: string;
  };
  errors: {
    fullName: string;
    email: string;
    phone: string;
    message: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  emailBorderColor: string;
  phoneBorderColor: string;
  isLoading: boolean;
}

export function ContactForm({
  formData,
  errors,
  handleInputChange,
  handleSubmit,
  emailBorderColor,
  phoneBorderColor,
  isLoading,
}: ContactFormProps) {
  return (
    <div
      id="contact-form"
      className={`${formCardClass} scroll-mt-24`}
    >
      <div className="p-5 sm:p-8">
        <div className="mb-6 flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <Send className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Send Us a Message</h2>
            <p className="mt-0.5 text-sm text-slate-500">We usually reply within a few business hours.</p>
          </div>
        </div>

        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
            <ContactFormInput
              label="Full Name"
              name="fullName"
              type="text"
              autoComplete="name"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Your name"
              error={errors.fullName}
              disabled={isLoading}
            />

            <PhoneInput
              value={formData.phone}
              onChange={handleInputChange}
              error={errors.phone}
              borderColor={phoneBorderColor}
              disabled={isLoading}
            />
          </div>

          <ContactFormInput
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
            optional
            value={formData.email}
            onChange={handleInputChange}
            placeholder="you@company.com"
            error={errors.email}
            borderColor={emailBorderColor}
            disabled={isLoading}
          />

          <div>
            <label htmlFor="contact-message" className={labelClass}>
              How can we help?
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              placeholder="e.g. Need 150 branded bottles and diaries for a client event next month"
              disabled={isLoading}
              className={`${inputClass} resize-none ${borderFor(errors.message)}`}
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>

          <SubmitButton isLoading={isLoading} />
        </form>
      </div>
    </div>
  );
}
