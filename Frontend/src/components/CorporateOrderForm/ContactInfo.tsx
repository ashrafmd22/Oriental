import React from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';

export function ContactInfo() {
  return (
    <div className="mt-6 sm:mt-8 text-center bg-gradient-to-r from-blue-100/80 via-purple-100/80 to-pink-100/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-white/50">
      <h3 className="text-gray-800 text-base sm:text-xl font-semibold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700">
        Need Immediate Assistance?
      </h3>
      <div className="space-y-2 sm:space-y-3">
        <a
          href="tel:+919899987779"
          className="flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors group"
        >
          <FiPhone className="mr-2 group-hover:animate-bounce text-sm sm:text-base" />
          <span className="font-medium text-sm sm:text-base">+91 98999 87779</span>
        </a>
        <a
          href="mailto:info@orientalenterprises.com"
          className="flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors group"
        >
          <FiMail className="mr-2 group-hover:animate-bounce text-sm sm:text-base" />
          <span className="font-medium text-sm sm:text-base">orientalgifting@gmail.com</span>
        </a>
      </div>
    </div>
  );
}