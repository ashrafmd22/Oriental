import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

interface PolicyLayoutProps {
  title: string;
  icon: string;
  children: React.ReactNode;
}

export function PolicyLayout({ title, icon, children }: PolicyLayoutProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8 mt-12"> {/* Added mt-12 here */}
      <div className="max-w-4xl mx-auto">
        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-xl mb-8 p-6 sm:p-8 transform -translate-y-6 hover:translate-y-0 transition-transform duration-300">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <div className="w-24 h-24 rounded-2xl bg-blue-50 p-4 flex items-center justify-center">
              <img
                src={icon}
                alt={`${title} Icon`}
                className="w-16 h-16 object-contain"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center sm:text-left">
              {title}
            </h1>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
          <div className="prose prose-lg max-w-none">
            {children}
          </div>

          {/* Contact Section */}
          <div className="mt-12 border-t pt-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Need More Information?
              </h3>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Contact Our Support Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
