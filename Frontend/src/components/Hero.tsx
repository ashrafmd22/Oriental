import React from 'react';
import { Gift, Package, Award, Trophy, Star, Briefcase } from "lucide-react";

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-fuchsia-900 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-20" />

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-[128px] animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-4000" />

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-icons">
          <Gift className="icon text-pink-200" size={32} style={{ left: '10%', top: '20%', animationDelay: '0s' }} />
          <Package className="icon text-purple-200" size={40} style={{ left: '25%', top: '25%', animationDelay: '1.5s' }} />
          <Award className="icon text-fuchsia-200" size={36} style={{ left: '45%', top: '22%', animationDelay: '1s' }} />
          <Trophy className="icon text-indigo-200" size={44} style={{ left: '65%', top: '24%', animationDelay: '2s' }} />
          <Star className="icon text-pink-200" size={32} style={{ left: '80%', top: '21%', animationDelay: '0.5s' }} />
          <Briefcase className="icon text-purple-200" size={38} style={{ left: '90%', top: '23%', animationDelay: '1.8s' }} />
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-20">
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <a href="#" title="" className="text-base text-purple-100 transition-all duration-200 hover:text-white">Products</a>
              <a href="#" title="" className="text-base text-purple-100 transition-all duration-200 hover:text-white">Solutions</a>
              <a href="#" title="" className="text-base text-purple-100 transition-all duration-200 hover:text-white">About Us</a>
              <a href="#" title="" className="text-base text-purple-100 transition-all duration-200 hover:text-white">Contact</a>
            </div>

            <a href="#" title="" className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full" role="button">
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section - Added more top padding */}
      <section className="relative z-10 py-6 sm:py-16 lg:py-24 mt-8 sm:mt-12 lg:mt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-6 lg:gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-2">
                <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-pink-300" />
                <p className="text-base sm:text-lg lg:text-2xl font-semibold tracking-wider text-pink-300 uppercase">Premium Corporate</p>
              </div>
              <h1 className="mt-3 sm:mt-4 text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200">
                  Gift Solutions
                </span>
              </h1>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-xl text-purple-100">
                Elevate your brand with our exceptional collection of corporate gifts, crafted to leave lasting impressions since 1990.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 lg:mt-12">
                <a
                  href="/products"
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all duration-200 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full hover:from-pink-600 hover:to-purple-600"
                  role="button"
                >
                  Explore Products
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold text-purple-100 transition-all duration-200 border-2 border-purple-400 rounded-full hover:bg-purple-900/30"
                  role="button"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 animate-pulse-slow">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg opacity-20 blur-xl"></div>
              </div>
              <img className="relative w-full rounded-lg" src="https://swagilo.com/wp-content/uploads/2023/08/Brand-Banner.png" alt="Corporate Gifts" />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .pattern-grid {
          background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0);
          background-size: 48px 48px;
        }

        .floating-icons {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .icon {
          position: absolute;
          animation: floatUpDown 8s ease-in-out infinite;
          opacity: 0.3;
        }

        @keyframes floatUpDown {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(-40px, -20px) scale(1.05);
          }
        }

        .animate-blob {
          animation: blob 10s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @media (max-width: 640px) {
          .floating-icons {
            opacity: 0.15;
          }
        }
      `}</style>
    </div>
  );
}