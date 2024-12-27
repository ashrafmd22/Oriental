import React, { useState, useEffect } from 'react';
import { FormField } from './FormField';
import { Notification } from './Notification';
import { ContactInfo } from './ContactInfo';
import { SubmitButton } from './SubmitButton';
import type { FormData, Errors } from './types';

export function CorporateOrderForm() {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    productRequirements: '',
  });

  const [errors, setErrors] = useState<Errors>({
    email: '',
    phone: '',
    companyName: '',
    contactPerson: '',
    productRequirements: '',
  });

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors: Errors = {
      email: '',
      phone: '',
      companyName: '',
      contactPerson: '',
      productRequirements: '',
    };
    let isValid = true;

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
      isValid = false;
    }

    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = 'Contact person is required';
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit number';
      isValid = false;
    }

    if (!formData.productRequirements.trim()) {
      newErrors.productRequirements = 'Please describe your requirements';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setNotification({
        show: true,
        type: 'error',
        message: 'Please fix the errors in the form',
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: `${import.meta.env.VITE_WEB3FORMS_KEY}`,
          company_name: formData.companyName,
          contact_person: formData.contactPerson,
          email: formData.email,
          phone: formData.phone,
          product_requirements: formData.productRequirements,
          subject: `New Corporate Order Inquiry from ${formData.companyName}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormData({
          companyName: '',
          contactPerson: '',
          email: '',
          phone: '',
          productRequirements: '',
        });
        setNotification({
          show: true,
          type: 'success',
          message: 'Your inquiry has been submitted successfully!',
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setNotification({
        show: true,
        type: 'error',
        message: 'Failed to submit the form. Please try again.',
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
    <section className="min-h-screen py-8 sm:py-12 lg:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-3xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-10">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-3">
            Corporate Order Form
          </h1>
          <p className="text-gray-600 text-xs sm:text-base max-w-xl mx-auto">
            Share your requirements with us, and our team will create the perfect corporate gifting solution for your business.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-8 backdrop-blur-sm bg-white/90"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-6">
            <FormField label="Company Name" error={errors.companyName}>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                disabled={isLoading}
                placeholder="Enter company name"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-sm sm:text-base disabled:bg-gray-50 disabled:cursor-not-allowed"
              />
            </FormField>

            <FormField label="Contact Person" error={errors.contactPerson}>
              <input
                type="text"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleInputChange}
                disabled={isLoading}
                placeholder="Enter your name"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-sm sm:text-base disabled:bg-gray-50 disabled:cursor-not-allowed"
              />
            </FormField>

            <FormField label="Email Address" error={errors.email}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={isLoading}
                placeholder="Enter email address"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-sm sm:text-base disabled:bg-gray-50 disabled:cursor-not-allowed"
              />
            </FormField>

            <FormField label="Phone Number" error={errors.phone}>
              <div className="flex">
                <div className="hidden sm:flex items-center bg-gray-100 px-3 rounded-l-lg border border-r-0 border-gray-300">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                    alt="India Flag"
                    className="w-5 h-3 mr-1"
                  />
                  <span className="text-gray-600 text-sm">+91</span>
                </div>
                <div className="flex sm:hidden items-center bg-gray-100 px-2 rounded-l-lg border border-r-0 border-gray-300">
                  <span className="text-gray-600 text-xs">+91</span>
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  placeholder="Enter phone number"
                  className="flex-1 px-3 py-2 sm:px-4 sm:py-3 rounded-r-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-sm sm:text-base disabled:bg-gray-50 disabled:cursor-not-allowed"
                />
              </div>
            </FormField>
          </div>

          <FormField label="Product Requirements" error={errors.productRequirements}>
            <textarea
              name="productRequirements"
              value={formData.productRequirements}
              onChange={handleInputChange}
              disabled={isLoading}
              placeholder="Please describe your requirements in detail..."
              rows={3}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 resize-none text-sm sm:text-base disabled:bg-gray-50 disabled:cursor-not-allowed"
            />
          </FormField>

          <SubmitButton isLoading={isLoading} />
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