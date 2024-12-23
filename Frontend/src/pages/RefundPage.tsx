import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const RefundAndCancellationPage: React.FC = () => {
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
            src="https://cdn-icons-png.flaticon.com/128/2366/2366081.png"
            alt="Refund and Cancellation Image"
            className="w-24 h-24 object-contain mr-6" // Ensures the image is fully visible and maintains aspect ratio
          />
          <h1 className="text-4xl font-bold text-gray-800">Refund and Cancellation Policy</h1>
        </div>

        {/* Refund and Cancellation Content */}
        <p className="text-xl mb-6 text-gray-700">
          We want to ensure you have the best experience with our services. Our Refund and Cancellation Policy explains how we handle requests for refunds and cancellations.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Refund Policy</h2>
        <p className="text-lg mb-6 text-gray-700">
          Refund requests must be made within 30 days of your purchase. We will review your request and issue a refund if applicable, based on the nature of the product or service and our refund conditions.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Cancellation Policy</h2>
        <p className="text-lg mb-6 text-gray-700">
          You can cancel your order before it is processed and shipped. Once an order has been processed or shipped, it cannot be canceled. Please contact our support team as soon as possible for any cancellation requests.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Refund Processing</h2>
        <p className="text-lg mb-6 text-gray-700">
          Once your refund request is approved, it may take up to 7 business days to process and reflect in your account, depending on the payment method used.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Non-Refundable Items</h2>
        <p className="text-lg mb-6 text-gray-700">
          Some items, such as personalized or customized products, may not be eligible for a refund. Please check our product terms for more details on exclusions.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Contact Us for Refunds or Cancellations</h2>
        <p className="text-lg mb-6 text-gray-700">
          If you have any questions or would like to request a refund or cancellation, please contact our support team. We are here to assist you.
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
            By using our services, you agree to the terms outlined in this Refund and Cancellation Policy. Please review it periodically as it may change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundAndCancellationPage;
