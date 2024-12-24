import React from 'react';
import { PolicyLayout } from './Policy/PolicyLayout';

export default function RefundPage() {
  return (
    <PolicyLayout
      title="Refund & Cancellation Policy"
      icon="https://cdn-icons-png.flaticon.com/512/2366/2366081.png"
    >
      <div className="space-y-8 overflow-x-hidden px-4 sm:px-6 lg:px-8">
        <p className="text-xl text-gray-700 leading-relaxed">
          We strive to ensure your complete satisfaction with our services. Our refund and cancellation policy is designed to be fair and transparent.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">1. Refund Policy</h2>
          <div className="bg-blue-50 rounded-xl p-6">
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Refund requests must be made within 30 days of purchase</li>
              <li>All refunds are subject to review and approval</li>
              <li>Processing time: 5-7 business days</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">2. Cancellation Policy</h2>
          <div className="bg-yellow-50 rounded-xl p-6">
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Cancellations must be requested within 24 hours of placing an order</li>
              <li>If the order has already been processed or shipped, cancellation is not possible</li>
              <li>Orders cancelled before shipment are eligible for a full refund</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">3. Refund Eligibility</h2>
          <div className="bg-green-50 rounded-xl p-6">
            <p className="text-gray-700">
              To be eligible for a refund, the product must meet the following conditions:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>The product is defective or damaged upon arrival</li>
              <li>The product was not as described on our website</li>
              <li>Proof of purchase is required for all refund claims</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">4. How to Request a Refund</h2>
          <div className="bg-purple-50 rounded-xl p-6">
            <ul className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>Contact our customer support team via email or phone</li>
              <li>Provide your order number and the reason for your refund request</li>
              <li>Submit any relevant documentation (e.g., images of the damaged product)</li>
              <li>Our team will review your request and process it accordingly</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">5. Refund Method</h2>
          <div className="bg-red-50 rounded-xl p-6">
            <p className="text-gray-700">
              Refunds will be issued to the original payment method used during the purchase. If the payment was made via credit/debit card, the refund will be processed to the same card. For other payment methods, refunds will be issued according to the payment provider's policies.
            </p>
          </div>
        </section>
      </div>
    </PolicyLayout>
  );
}
