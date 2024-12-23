import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const WarrantyPolicyPage: React.FC = () => {
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
            src="https://cdn-icons-png.flaticon.com/128/2915/2915324.png"
            alt="Warranty Policy Image"
            className="w-24 h-24 object-contain mr-6" // Ensures the image is fully visible and maintains aspect ratio
          />
          <h1 className="text-4xl font-bold text-gray-800">Warranty Policy</h1>
        </div>

        {/* Warranty Policy Content */}
        <p className="text-xl mb-6 text-gray-700">
          Our Warranty Policy is designed to ensure the quality and satisfaction of the products we provide. Please read our terms carefully.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Warranty Coverage</h2>
        <p className="text-lg mb-6 text-gray-700">
          Our products come with a limited warranty that covers manufacturing defects and faulty materials. The warranty does not cover damages caused by misuse, accidents, or normal wear and tear.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Warranty Period</h2>
        <p className="text-lg mb-6 text-gray-700">
          The warranty period for each product varies. Please refer to the product documentation or packaging for the specific warranty duration.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How to Request Warranty Service</h2>
        <p className="text-lg mb-6 text-gray-700">
          To request warranty service, please contact our customer support team. Provide proof of purchase and a description of the issue you're facing. We will review your request and provide instructions on how to proceed.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Warranty Exclusions</h2>
        <p className="text-lg mb-6 text-gray-700">
          Warranty coverage does not include:
          <ul className="list-disc pl-6 mt-2">
            <li>Damage caused by improper use or handling</li>
            <li>Repairs or modifications made by unauthorized service centers</li>
            <li>Normal wear and tear</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Warranty Claim Process</h2>
        <p className="text-lg mb-6 text-gray-700">
          If a product is determined to be defective within the warranty period, we will either repair or replace the product at no additional charge, depending on the circumstances.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Contact Us for Warranty Inquiries</h2>
        <p className="text-lg mb-6 text-gray-700">
          For any questions related to warranty claims, please reach out to our support team. We are happy to assist you with any concerns.
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
            By using our products, you agree to the terms outlined in this Warranty Policy. Please review this policy periodically as it may change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WarrantyPolicyPage;
