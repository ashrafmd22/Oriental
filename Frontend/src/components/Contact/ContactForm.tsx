import React from 'react';
import { ContactFormInput } from './ContactFormInput';
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
    <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg transform hover:scale-100 lg:hover:scale-[1.02] transition-all duration-300" id="contact-form">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-blue-600 text-center">
        Send Us a Message
      </h2>
      <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
        <ContactFormInput
          label="Full Name"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="Enter your full name"
          error={errors.fullName}
          disabled={isLoading}
        />

        <ContactFormInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email address"
          error={errors.email}
          borderColor={emailBorderColor}
          disabled={isLoading}
        />

        <PhoneInput
          value={formData.phone}
          onChange={handleInputChange}
          error={errors.phone}
          borderColor={phoneBorderColor}
          disabled={isLoading}
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            placeholder="Write your message here"
            disabled={isLoading}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 p-3 text-sm transition duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed"
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>

        <SubmitButton isLoading={isLoading} />
      </form>
    </div>
  );
}