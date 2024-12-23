import React, { useEffect } from "react";
import { Award, Users, Clock } from "lucide-react";

export function About() {
  // Scroll to the top when the About page is opened
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-r from-[#E3EBFF] to-[#ECE8EF]
      "
    >
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-wide">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            With over three decades of experience,{" "}
            <span className="font-semibold text-blue-700">
              Oriental Enterprises
            </span>{" "}
            specializes in premium corporate gifting solutions. We combine
            quality, customization, and reliability to create gifts that leave
            lasting impressions. Partner with us to elevate your brand and
            build meaningful relationships.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Feature 1 */}
          <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex justify-center items-center mb-6">
              <Award className="w-16 h-16 text-blue-600 group-hover:text-blue-800 transition-colors duration-300" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
              Premium Quality
            </h3>
            <p className="text-gray-500 leading-relaxed text-lg">
              High-quality products that reflect your brand's excellence.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex justify-center items-center mb-6">
              <Users className="w-16 h-16 text-blue-600 group-hover:text-blue-800 transition-colors duration-300" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
              Custom Solutions
            </h3>
            <p className="text-gray-500 leading-relaxed text-lg">
              Personalized gifts tailored to your brand’s identity.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex justify-center items-center mb-6">
              <Clock className="w-16 h-16 text-blue-600 group-hover:text-blue-800 transition-colors duration-300" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
              Timely Delivery
            </h3>
            <p className="text-gray-500 leading-relaxed text-lg">
              On-time delivery to meet your business deadlines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
