import React from 'react';
import { PolicyLayout } from './Policy/PolicyLayout';

export default function WarrantyPage() {
  return (
    <PolicyLayout
      title="Warranty Policy"
      icon="https://cdn-icons-png.flaticon.com/512/2915/2915324.png"
    >
      <div className="space-y-8 overflow-x-hidden">
        <p className="text-xl text-gray-700 leading-relaxed">
          Our warranty policy ensures the quality and reliability of our products. We stand behind our products and are committed to your satisfaction. We offer a warranty on all our products to provide peace of mind and ensure that you are completely satisfied with your purchase.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">1. Warranty Coverage</h2>
          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="font-semibold mb-3">What's Covered:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Manufacturing defects</li>
              <li>Material defects</li>
              <li>Functional issues</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">2. Warranty Exclusions</h2>
          <div className="bg-red-50 rounded-xl p-6">
            <h3 className="font-semibold mb-3">What's Not Covered:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Damage caused by misuse or neglect</li>
              <li>Products that have been altered or repaired by unauthorized personnel</li>
              <li>Normal wear and tear from everyday use</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">3. Warranty Duration</h2>
          <div className="bg-yellow-50 rounded-xl p-6">
            <h3 className="font-semibold mb-3">Warranty Period:</h3>
            <p className="text-gray-700">
              Our warranty covers all eligible products for a period of <strong>12 months</strong> from the date of purchase. This period ensures that the product remains free from defects under normal use. If you experience any issues during this period, please contact our support team for assistance.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">4. How to Claim Warranty</h2>
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="font-semibold mb-3">Steps to File a Warranty Claim:</h3>
            <ul className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Contact our customer support team via phone or email.</li>
              <li>Provide proof of purchase, including order number and date of purchase.</li>
              <li>Describe the issue with the product in detail.</li>
              <li>Our team will assess the issue and provide further instructions on how to return the product (if applicable).</li>
            </ul>
          </div>
        </section>


      </div>
    </PolicyLayout>
  );
}
