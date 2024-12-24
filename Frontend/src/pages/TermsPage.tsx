import React from 'react';
import { PolicyLayout } from './Policy/PolicyLayout';

export default function TermsPage() {
  return (
    <PolicyLayout
      title="Terms & Conditions"
      icon="https://cdn-icons-png.flaticon.com/512/4300/4300059.png"
    >
      <div className="space-y-8 overflow-x-hidden px-4 sm:px-6 lg:px-8">
        <p className="text-xl text-gray-700 leading-relaxed">
          Please read these terms and conditions carefully before using our services. By accessing or using our platform, you agree to be bound by these terms.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">1. Acceptance of Terms</h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-gray-700">
              By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">2. User Responsibilities</h2>
          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="font-semibold mb-3">Your Responsibilities:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>You agree to provide accurate and truthful information when using our platform.</li>
              <li>You are responsible for maintaining the confidentiality of your account and password.</li>
              <li>You must comply with all applicable laws and regulations while using our services.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">3. Account Termination</h2>
          <div className="bg-yellow-50 rounded-xl p-6">
            <h3 className="font-semibold mb-3">Termination of Account:</h3>
            <p className="text-gray-700">
              We reserve the right to suspend or terminate your account at our discretion if we believe that you have violated any of the terms and conditions, engaged in fraudulent activity, or misused our platform in any way.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">4. Privacy Policy</h2>
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="font-semibold mb-3">Data Collection and Use:</h3>
            <p className="text-gray-700">
              We respect your privacy and are committed to protecting your personal information. Please refer to our <strong><a href="/privacy" className="text-blue-600">Privacy Policy</a></strong> for more details on how we collect, use, and protect your data.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">5. Limitation of Liability</h2>
          <div className="bg-red-50 rounded-xl p-6">
            <h3 className="font-semibold mb-3">Limitation of Liability:</h3>
            <p className="text-gray-700">
              To the maximum extent permitted by law, we are not liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from the use of our services or from any content, products, or services obtained through our platform.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">6. Changes to Terms</h2>
          <div className="bg-purple-50 rounded-xl p-6">
            <h3 className="font-semibold mb-3">Amendments to Terms:</h3>
            <p className="text-gray-700">
              We may update these terms and conditions from time to time. Any changes will be posted on this page, and the updated version will be effective immediately upon posting. Please review the terms periodically to stay informed about any updates.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">7. Governing Law</h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-semibold mb-3">Jurisdiction:</h3>
            <p className="text-gray-700">
              These terms and conditions are governed by the laws of [Your Country/Region]. Any disputes arising from these terms will be resolved in the competent courts of [Your City/Region].
            </p>
          </div>
        </section>

      </div>
    </PolicyLayout>
  );
}
