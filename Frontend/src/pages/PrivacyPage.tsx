import React from 'react';
import { PolicyLayout } from './Policy/PolicyLayout';

export default function PrivacyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      icon="https://cdn-icons-png.flaticon.com/512/1642/1642911.png"
    >
      <div className="space-y-8 overflow-x-hidden px-4 sm:px-6 lg:px-8">
        <p className="text-xl text-gray-700 leading-relaxed">
          Your privacy is of utmost importance to us. We understand the significance of protecting your personal information and are committed to maintaining its confidentiality.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">1. Information Collection</h2>
          <p className="text-gray-700">
            We collect information that you provide directly to us when using our services, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Name and contact information</li>
            <li>Payment details for transactions</li>
            <li>Usage data and preferences</li>
            <li>Device and browser information</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">2. Use of Information</h2>
          <div className="bg-blue-50 rounded-xl p-6">
            <p className="text-gray-700">
              The information we collect is used to provide and improve our services, including:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Processing transactions and payments</li>
              <li>Personalizing user experience</li>
              <li>Sending updates and promotional offers (with user consent)</li>
              <li>Improving website functionality and performance</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">3. Data Sharing</h2>
          <div className="bg-green-50 rounded-xl p-6">
            <p className="text-gray-700">
              We may share your information with third parties in the following cases:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>With service providers who assist in providing our services</li>
              <li>In response to legal obligations or requests from law enforcement</li>
              <li>To protect the rights, safety, and security of our users and the public</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">4. Data Security</h2>
          <div className="bg-yellow-50 rounded-xl p-6">
            <p className="text-gray-700">
              We take the security of your personal data seriously and implement measures to protect it from unauthorized access, alteration, or disclosure. These measures include:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Encryption of sensitive information</li>
              <li>Secure storage and restricted access to data</li>
              <li>Regular security audits</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">5. Cookies and Tracking Technologies</h2>
          <div className="bg-red-50 rounded-xl p-6">
            <p className="text-gray-700">
              We use cookies and similar tracking technologies to enhance user experience. These technologies may collect information such as:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Browsing activity and preferences</li>
              <li>Pages visited and interaction with content</li>
            </ul>
            <p className="text-gray-700 mt-3">
              You can control the use of cookies through your browser settings, but disabling cookies may limit some features of our services.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">6. Your Rights</h2>
          <div className="bg-purple-50 rounded-xl p-6">
            <p className="text-gray-700">
              You have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>The right to access your data</li>
              <li>The right to correct or update inaccurate data</li>
              <li>The right to delete or request the deletion of your data</li>
              <li>The right to object to or restrict processing</li>
            </ul>
            <p className="text-gray-700 mt-3">
              To exercise these rights, please contact us at the provided contact information.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">7. Changes to This Privacy Policy</h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any changes will be posted on this page with an updated effective date.
            </p>
          </div>
        </section>
      </div>
    </PolicyLayout>
  );
}
