import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const TermsAndConditionsPage: React.FC = () => {
  useEffect(() => {
    // Scroll to the top of the page when this component is loaded
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-16 mt-16">
      {/* Main Content Area with White Background */}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Title and Image */}
        <div className="flex items-center mb-8">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjEHla3jGSCPLhR1UjGKruLlDiCk3xd2MwLg&s"
            alt="Terms Image"
            className="w-24 h-24 object-contain mr-6" // Ensures the image is fully visible and maintains aspect ratio
          />
          <h1 className="text-4xl font-bold text-gray-800">Terms and Conditions</h1>
        </div>

        {/* Terms and Conditions Content */}
        <p className="text-xl mb-6 text-gray-700">
          Please read these Terms and Conditions carefully before using our services. These terms outline the rules and regulations for the use of our services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
        <p className="text-lg mb-6 text-gray-700">
          By accessing or using our services, you agree to comply with these Terms and Conditions. If you do not agree to these terms, you should refrain from using our services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Use of Services</h2>
        <p className="text-lg mb-6 text-gray-700">
          You are granted a limited, non-exclusive, non-transferable license to access and use our services. You may not copy, distribute, or reverse engineer the services for unauthorized purposes.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Account Responsibility</h2>
        <p className="text-lg mb-6 text-gray-700">
          You are responsible for maintaining the confidentiality of your account information and are fully responsible for all activities under your account.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Prohibited Uses</h2>
        <p className="text-lg mb-6 text-gray-700">
          You agree not to use our services for any unlawful or prohibited activities. This includes, but is not limited to, engaging in fraud, violating intellectual property rights, or interfering with the proper functioning of our services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Limitation of Liability</h2>
        <p className="text-lg mb-6 text-gray-700">
          In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Changes to Terms</h2>
        <p className="text-lg mb-6 text-gray-700">
          We reserve the right to update or modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on this page. It is your responsibility to review these terms periodically.
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
            By using our services, you agree to the terms outlined in these Terms and Conditions. Please review them periodically as they may change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
