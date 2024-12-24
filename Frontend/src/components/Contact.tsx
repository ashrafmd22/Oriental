import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [phoneBorderColor, setPhoneBorderColor] = useState('');
  const [emailBorderColor, setEmailBorderColor] = useState('');
  const [notification, setNotification] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the page is opened
  }, []);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));


    // Validate phone number
    if (name === 'phone') {
      const phonePattern = /^\d{10}$/;
      if (phonePattern.test(value)) {
        setPhoneBorderColor('border-green-500');
        setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
      } else {
        setPhoneBorderColor('border-red-500');
      }
    }

    // Validate email
    if (name === 'email') {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (emailPattern.test(value)) {
        setEmailBorderColor('border-green-500');
        setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
      } else {
        setEmailBorderColor('border-red-500');
      }
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors: { [key in keyof typeof formData]: string } = {
      fullName: '',
      email: '',
      phone: '',
      message: ''
    }; // Ensure each field is initialized as a string

    // Required field validation
    for (let key in formData) {
      if (!formData[key as keyof typeof formData]) {
        newErrors[key as keyof typeof formData] = `${key.replace(/([A-Z])/g, ' $1').toUpperCase()} is required.`;
        valid = false;
      }
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      valid = false;
    }

    // Phone validation
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/submit-contact-form`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });



        if (response.ok) {
          setShowSuccess(true);
          setShowError(false);
          setNotification('Message sent successfully!');
          setFormData({
            fullName: '', // Fixed key
            email: '',
            phone: '',
            message: '',
          });

          // Reset border colors
          setPhoneBorderColor('');
          setEmailBorderColor('');
        } else {
          setShowError(true);
          setShowSuccess(false);
          setNotification('Failed to send message. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setShowError(true);
        setNotification('An unexpected error occurred.');
      }

      setTimeout(() => {
        setShowError(false);
        setShowSuccess(false);
        setNotification('');
      }, 5000);
    }
  };


  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[350px] bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center justify-center text-center">
          <div className="z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-wide">Get in Touch with Us</h1>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
              We value our customers and are here to help. Reach out to us and let us assist you with your needs.
            </p>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-4 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white p-4 md:p-6 lg:p-6 xl:p-5 rounded-lg shadow-lg transform hover:scale-100 lg:hover:scale-105 transition-transform duration-300">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-600 text-center">Send Us a Message</h2>
              <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-md border-gray-300 shadow focus:border-blue-500 focus:ring-2 focus:ring-blue-500 p-2 sm:p-2.5 text-sm transition duration-200"
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className={`w-full rounded-md border-gray-300 shadow focus:border-blue-500 focus:ring-2 focus:ring-blue-500 p-2 sm:p-2.5 text-sm transition duration-200 ${emailBorderColor}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <div className="flex items-center border rounded-md shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                    <div className="flex items-center bg-gray-100 px-3 border-r border-gray-300">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                        alt="India Flag"
                        className="w-5 h-4 mr-1"
                      />
                      <span className="text-gray-600 text-sm">+91</span>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className={`flex-1 rounded-r-md border-0 p-2.5 text-sm focus:ring-0 ${phoneBorderColor}`}
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Write your message here"
                    className="w-full rounded-md border-gray-300 shadow focus:border-blue-500 focus:ring-2 focus:ring-blue-500 p-2 sm:p-2.5 text-sm transition duration-200"
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2.5 px-4 rounded-md font-semibold hover:from-blue-700 hover:to-blue-600 transition duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-white p-4 md:p-6 lg:p-6 xl:p-5 rounded-lg shadow-lg transform hover:scale-100 lg:hover:scale-105 transition-transform duration-300">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-600">Contact Information</h2>
              <div className="space-y-4 sm:space-y-6">
                {/* Visit Us */}
                <div className="flex items-start hover:bg-blue-50 p-3 sm:p-4 rounded-lg transition-colors duration-300 transform hover:scale-105">
                  <MapPin className="w-5 sm:w-6 text-blue-600 mt-1" />
                  <div className="ml-3 sm:ml-4">
                    <h3 className="font-semibold text-base sm:text-lg text-blue-600">Visit Us</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      123 Business District<br />
                      New Delhi, India 110001
                    </p>
                  </div>
                </div>
                {/* Call Us */}
                <div className="flex items-start hover:bg-blue-50 p-3 sm:p-4 rounded-lg transition-colors duration-300 transform hover:scale-105">
                  <Phone className="w-5 sm:w-6 text-blue-600 mt-1" />
                  <div className="ml-3 sm:ml-4">
                    <h3 className="font-semibold text-base sm:text-lg text-blue-600">Call Us</h3>
                    <a href="tel:+919876543210" className="text-sm sm:text-base text-gray-600">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
                {/* Email Us */}
                <div className="flex items-start hover:bg-blue-50 p-3 sm:p-4 rounded-lg transition-colors duration-300 transform hover:scale-105">
                  <Mail className="w-5 sm:w-6 text-blue-600 mt-1" />
                  <div className="ml-3 sm:ml-4">
                    <h3 className="font-semibold text-base sm:text-lg text-blue-600">Email Us</h3>
                    <a href="mailto:info@orientalenterprises.com" className="text-sm sm:text-base text-gray-600">
                      info@orientalenterprises.com
                    </a>
                  </div>
                </div>
                {/* Business Hours */}
                <div className="flex items-start hover:bg-blue-50 p-3 sm:p-4 rounded-lg transition-colors duration-300 transform hover:scale-105">
                  <Clock className="w-5 sm:w-6 text-blue-600 mt-1" />
                  <div className="ml-3 sm:ml-4">
                    <h3 className="font-semibold text-base sm:text-lg text-blue-600">Business Hours</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Google Map */}
      <div className="mt-12 bg-gray-50 h-[400px] rounded-lg overflow-hidden shadow-lg px-4 sm:px-8 lg:px-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.2347834219097!2d77.2273!3d28.6129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzQ2LjQiTiA3N8KwMTMnMzguMyJF!5e0!3m2!1sen!2sin!4v1635835824092!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Notification */}
      {notification && (
        <div
          className={`fixed bottom-5 right-5 p-4 rounded-lg shadow-lg text-white ${showError ? 'bg-red-500' : 'bg-green-500'
            }`}
        >
          <p>{notification}</p>
        </div>
      )}
    </div>
  );
}
