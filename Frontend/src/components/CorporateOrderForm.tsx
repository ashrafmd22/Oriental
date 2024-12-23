import React, { useState, useEffect } from 'react';
import { FiPhone, FiMail, FiX } from 'react-icons/fi';
import axios from 'axios';

interface FormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  productRequirements: string;
}

interface Errors {
  email: string;
  phone: string;
  companyName: string;
  contactPerson: string;
  productRequirements: string;
}

export function CorporateOrderForm() {
  // State to manage form data
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    productRequirements: '',
  });

  // State for error messages and success message
  const [errors, setErrors] = useState<Errors>({
    email: '',
    phone: '',
    companyName: '',
    contactPerson: '',
    productRequirements: '',
  });

  const [formStatus, setFormStatus] = useState<string | null>(null); // 'success' or 'error'
  const [showError, setShowError] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false); // State for showing success message

  // Phone and email border color states
  const [phoneBorderColor, setPhoneBorderColor] = useState<string>('');
  const [emailBorderColor, setEmailBorderColor] = useState<string>('');

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Validate phone number length
    if (name === 'phone') {
      if (value.length < 10) {
        setPhoneBorderColor('border-red-500');
      } else if (value.length === 10) {
        setPhoneBorderColor('border-green-500');
        setErrors((prevErrors) => ({ ...prevErrors, phone: '' })); // Remove error message when valid
      } else {
        setPhoneBorderColor('border-gray-300'); // Default border color
      }
    }

    // Validate email format
    if (name === 'email') {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (emailPattern.test(value)) {
        setEmailBorderColor('border-green-500');
        setErrors((prevErrors) => ({ ...prevErrors, email: '' })); // Remove error message when valid
      } else {
        setEmailBorderColor('border-red-500');
      }
    }
  };

  // Validate form data
  const validateForm = () => {
    let valid = true;
    const newErrors: Errors = { // Explicitly type `newErrors` as `Errors`
      email: '',
      phone: '',
      companyName: '',
      contactPerson: '',
      productRequirements: '',
    };

    // Validate company name
    if (!formData.companyName) {
      newErrors.companyName = 'Company name is required.';
      valid = false;
    }

    // Validate contact person
    if (!formData.contactPerson) {
      newErrors.contactPerson = 'Contact person is required.';
      valid = false;
    }

    // Email validation (using regex)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      valid = false;
    }

    // Phone validation (must be 10 digits)
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
      valid = false;
    }

    // Validate product requirements
    if (!formData.productRequirements) {
      newErrors.productRequirements = 'Product requirements are required.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Form data ko backend ke POST route pe bhejna
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/submit-corporate-order`, formData);

        if (response.status === 200) {
          // Agar response success ho to success message dikhaye
          setFormStatus('success');
          setShowError(false); // Hide error message
          setShowSuccess(true); // Show success message
          setFormData({
            companyName: '',
            contactPerson: '',
            email: '',
            phone: '',
            productRequirements: '',
          });

          // Reset border colors after success
          setPhoneBorderColor('border-gray-300');
          setEmailBorderColor('border-gray-300');
        }
      } catch (error) {
        // Agar error aaye to error message dikhaye
        setFormStatus('error');
        setShowError(true);
        setShowSuccess(false);
        console.error('Error submitting form:', error);
      }
    } else {
      setFormStatus('error');
      setShowError(true);
      setShowSuccess(false);
    }
  };

  // Auto-dismiss the error and success messages after 5 seconds
  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => {
        setShowError(false);
      }, 5000);

      return () => clearTimeout(timer); // Cleanup timeout
    }
  }, [showError]);

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 5000);

      return () => clearTimeout(timer); // Cleanup timeout
    }
  }, [showSuccess]);

  return (
    <section className="py-12 bg-gradient-to-r from-[#E7F0FF] to-[#F9F6F1]
    ">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-5xl sm:text-4xl font-extrabold text-center mb-4 text-blue-700">
          Corporate Order Form
        </h2>

        <p className="text-center text-gray-600 mb-4 text-sm sm:text-base">
          Let us know your requirements, and we’ll get back to you promptly.
        </p>

        {/* Error Message */}
        {showError && (
          <div className="fixed bottom-4 right-4 bg-red-500 text-white p-3 rounded-lg shadow-md flex items-center justify-between w-64 sm:w-72 z-50">
            <span className="text-xs sm:text-sm font-medium">Please fix the form errors.</span>
            <button
              onClick={() => setShowError(false)}
              className="text-white text-sm sm:text-lg ml-2"
            >
              <FiX />
            </button>
          </div>
        )}

        {/* Success Message */}
        {showSuccess && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-lg shadow-md flex items-center justify-between w-64 sm:w-72 z-50">
            <span className="text-xs sm:text-sm font-medium">Form submitted successfully!</span>
            <button
              onClick={() => setShowSuccess(false)}
              className="text-white text-sm sm:text-lg ml-2"
            >
              <FiX />
            </button>
          </div>
        )}

        <form className="bg-white p-4 sm:p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                placeholder="Your Company Name"
                className={`w-full rounded-md border p-2 sm:p-3 focus:border-blue-500 focus:ring-blue-500 transition duration-150 ${errors.companyName ? 'border-red-500' : ''}`}
                onChange={handleInputChange}
                required
              />
              {errors.companyName && <p className="text-red-500 text-xs">{errors.companyName}</p>}
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                Contact Person
              </label>
              <input
                type="text"
                name="contactPerson"
                value={formData.contactPerson}
                placeholder="Your Full Name"
                className={`w-full rounded-md border p-2 sm:p-3 focus:border-blue-500 focus:ring-blue-500 transition duration-150 ${errors.contactPerson ? 'border-red-500' : ''}`}
                onChange={handleInputChange}
                required
              />
              {errors.contactPerson && <p className="text-red-500 text-xs">{errors.contactPerson}</p>}
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="example@company.com"
                className={`w-full rounded-md border p-2 sm:p-3 focus:border-blue-500 focus:ring-blue-500 transition duration-150 ${errors.email ? 'border-red-500' : ''}`}
                onChange={handleInputChange}
                required
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                Phone
              </label>
              <div className="flex items-center">
                <div className="flex items-center w-1/5 rounded-md border border-gray-300 p-1 sm:p-2 bg-gray-200 text-gray-600 text-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                    alt="India Flag"
                    className="w-5 h-4 mr-1"
                  />
                  +91
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  placeholder="Phone number"
                  className={`w-4/5 rounded-md border p-2 sm:p-3 focus:border-blue-500 focus:ring-blue-500 transition duration-150 ${errors.phone ? 'border-red-500' : ''}`}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}

            </div>
          </div>

          <div className="mt-4">
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
              Product Requirements
            </label>
            <textarea
              rows={4}
              name="productRequirements"
              value={formData.productRequirements}
              placeholder="Specify your product details..."
              className={`w-full rounded-md border p-2 sm:p-3 focus:border-blue-500 focus:ring-blue-500 transition duration-150 ${errors.productRequirements ? 'border-red-500' : ''}`}
              onChange={handleInputChange}
              required
            />
            {errors.productRequirements && <p className="text-red-500 text-xs">{errors.productRequirements}</p>}
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 sm:py-4 rounded-md text-sm sm:text-base font-medium hover:from-blue-700 hover:to-blue-600 transition duration-150"
            >
              Submit Inquiry
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-700 text-sm sm:text-base font-semibold">
            Need help right away?
          </p>
          <p className="text-gray-600 mt-2 text-base sm:text-lg">
            Call us at{' '}
            <span className="text-blue-600 font-bold inline-flex items-center">
              <FiPhone className="mr-1" /> +91 98765 43210
            </span>{' '}
            or email{' '}
            <span className="text-blue-600 font-bold inline-flex items-center">
              <FiMail className="mr-1" /> info@orientalenterprises.com
            </span>
          </p>
        </div>

      </div>
    </section>

  );
}

export default CorporateOrderForm;
