import React, { useState, useEffect } from 'react';
import { FormField } from './FormField';
import { Notification } from './Notification';
import { ContactInfo } from './ContactInfo';
import { SubmitButton } from './SubmitButton';
import type { FormData, Errors } from './types';
import { trackEvent } from '../../utils/analytics';
import { PhoneInput } from '../Contact/PhoneInput';
import { borderFor, formCardClass, inputClass } from '../formStyles';

const emptyForm: FormData = { name: '', phone: '', requirement: '', quantity: '' };
const emptyErrors: Errors = { name: '', phone: '', requirement: '', quantity: '' };

export function CorporateOrderForm() {
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [errors, setErrors] = useState<Errors>(emptyErrors);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<{
    show: boolean;
    type: 'success' | 'error';
    message: string;
  }>({
    show: false,
    type: 'success',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors: Errors = { ...emptyErrors };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
      isValid = false;
    }

    const phone = formData.phone.trim();
    if (!phone) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = 'Please enter a valid 10-digit number';
      isValid = false;
    }

    if (!formData.requirement.trim()) {
      newErrors.requirement = 'Tell us what you are looking for';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      trackEvent('corporate_form_validation_error');
      return;
    }

    setIsLoading(true);
    try {
      trackEvent('corporate_form_submit_attempt');
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: `${import.meta.env.VITE_WEB3FORMS_KEY}`,
          contact_person: formData.name,
          phone: formData.phone.replace(/\D/g, ''),
          product_requirements: formData.requirement,
          quantity: formData.quantity,
          subject: `New Quote Request from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        trackEvent('corporate_form_submit_success');
        setFormData(emptyForm);
        setNotification({
          show: true,
          type: 'success',
          message: 'Thank you! Our team will call you shortly.',
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      trackEvent('corporate_form_submit_failed');
      setNotification({
        show: true,
        type: 'error',
        message: 'Failed to submit the form. Please try again or call us.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification((prev) => ({ ...prev, show: false }));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification.show]);

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-gradient-to-br from-indigo-50 via-indigo-50 to-purple-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-3">
            Get a Quick Quote
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto">
            Share a few details and our team will call you back with options and pricing.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className={`${formCardClass} p-5 sm:p-8`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <FormField label="Your Name" htmlFor="quote-name" error={errors.name}>
              <input
                id="quote-name"
                type="text"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleInputChange}
                disabled={isLoading}
                placeholder="Enter your name"
                className={`${inputClass} ${borderFor(errors.name)}`}
              />
            </FormField>

            <PhoneInput
              id="quote-phone"
              value={formData.phone}
              onChange={handleInputChange}
              error={errors.phone}
              disabled={isLoading}
            />

            <div className="sm:col-span-2">
              <FormField label="What are you looking for?" htmlFor="quote-requirement" error={errors.requirement}>
                <textarea
                  id="quote-requirement"
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  placeholder="e.g. Branded bottles and diaries for Diwali"
                  rows={2}
                  className={`${inputClass} resize-none ${borderFor(errors.requirement)}`}
                />
              </FormField>
            </div>

            <div className="sm:col-span-2">
              <FormField label="Approx. Quantity (optional)" htmlFor="quote-quantity" error={errors.quantity}>
                <select
                  id="quote-quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  className={`${inputClass} ${borderFor()}`}
                >
                  <option value="">Not sure yet</option>
                  <option value="Under 50">Under 50</option>
                  <option value="50 - 200">50 - 200</option>
                  <option value="200 - 500">200 - 500</option>
                  <option value="500+">500+</option>
                </select>
              </FormField>
            </div>
          </div>

          <div className="mt-6">
            <SubmitButton isLoading={isLoading} />
          </div>
          <p className="mt-3 text-center text-xs text-slate-500">
            We only use your number to reply to this enquiry.
          </p>
        </form>

        <ContactInfo />
      </div>

      {notification.show && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification((prev) => ({ ...prev, show: false }))}
        />
      )}
    </section>
  );
}
