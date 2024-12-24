import React from "react";
import { Award, Users, Clock } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "High-quality products that reflect your brand's excellence.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Users,
    title: "Custom Solutions",
    description: "Personalized gifts tailored to your brand's identity.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "On-time delivery to meet your business deadlines.",
    color: "from-purple-500 to-purple-600",
  },
];

export function About() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E3EBFF] to-[#ECE8EF]">
        <div className="absolute inset-0 bg-grid-slate-100/[0.05] bg-[length:20px_20px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">
              Who We Are
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-medium">
            With over three decades of experience,{" "}
            <span className="relative inline-block font-semibold text-blue-700 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-700/30">
              Oriental Enterprises
            </span>{" "}
            specializes in premium corporate gifting solutions. We combine quality,
            customization, and reliability to create gifts that leave lasting
            impressions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative p-6 sm:p-8">
                {/* Icon Container */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} p-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    {React.createElement(feature.icon, { className: "w-full h-full text-white" })}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
