import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const PrivacyPage: React.FC = () => {
  // Scroll to the top when the PrivacyPage component is mounted
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-16 mt-16">
      {/* Main Content Area with White Background */}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Title and Image */}
        <div className="flex items-center mb-8">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3RuoarHGCgZ6cROrsdk98DAaybxiv13-sdQ&s"
            alt="Privacy Image"
            className="w-24 h-24 object-cover mr-6"
          />
          <h1 className="text-4xl font-bold text-gray-800">Privacy Policy</h1>
        </div>

        {/* Privacy Policy Content */}
        <p className="text-xl mb-6 text-gray-700">
          Your privacy is of utmost importance to us. We understand the importance
          of maintaining the confidentiality and security of your personal
          information. This Privacy Policy explains how we collect, use, and protect
          your data while using our services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information Collection</h2>
        <p className="text-lg mb-6 text-gray-700">
          We collect information that you provide directly to us when you use our
          services. This may include your name, email address, phone number, and
          payment details.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
        <p className="text-lg mb-6 text-gray-700">
          We use the information we collect to provide and improve our services,
          communicate with you, process your transactions, and personalize your
          experience. We may also send you promotional offers that might interest you.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Data Security</h2>
        <p className="text-lg mb-6 text-gray-700">
          We take the security of your personal data seriously and implement
          appropriate security measures to safeguard it. We use encryption and secure
          servers to protect your information from unauthorized access.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Cookies and Tracking</h2>
        <p className="text-lg mb-6 text-gray-700">
          We use cookies and tracking technologies to enhance your user experience
          and to collect information about how our website is used. You can choose
          to disable cookies through your browser settings.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Your Rights</h2>
        <p className="text-lg mb-6 text-gray-700">
          You have the right to access, update, or delete your personal data at any
          time. If you wish to exercise these rights or have any concerns, feel free
          to contact us.
        </p>

        {/* Contact Button */}
        <div className="flex justify-center mt-8">
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us for More Information
          </Link>
        </div>

        {/* Additional Information */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Additional Information</h3>
          <p className="text-lg text-gray-700">
            By using our services, you agree to the terms outlined in this Privacy
            Policy. We may update this policy from time to time, and any changes will
            be reflected on this page. Please review this policy periodically to stay
            informed about how we protect your data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
