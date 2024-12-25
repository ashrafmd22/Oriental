import React from "react";
import { Gift, Package, Award, Trophy, Star, Briefcase } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-fuchsia-900 pt-12">
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

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-3xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative mt-4 sm:mt-0">
              <div className="absolute inset-0 animate-ping-slow">
                <Gift size={64} className="text-pink-400 opacity-50" />
              </div>
              <Gift size={64} className="text-white relative z-10" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200">
              Premium Corporate
            </span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-200 via-pink-200 to-purple-200">
              Gift Solutions
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-purple-100 mb-8 max-w-2xl mx-auto font-light">
            Elevate your brand with our exceptional collection of corporate gifts,
            crafted to leave lasting impressions since 1990
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/products"
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-200 w-full sm:w-auto"
            >
              Explore Products
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border-2 border-purple-300 text-purple-100 rounded-lg font-semibold hover:bg-purple-900/30 transition-colors duration-200 w-full sm:w-auto"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

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

        .animate-ping-slow {
          animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }

        @media (max-width: 640px) {
          .floating-icons {
            opacity: 0.15;
          }
        }
      `}</style>
    </section>
  );
}