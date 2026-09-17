import { Link } from 'react-router-dom';
import { Gift, Package, Award, Trophy, Star, Briefcase, CheckCircle2, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { trackEvent } from '../utils/analytics';

export function Hero() {
  const whatsappQuoteLink =
    "https://wa.me/+919899987779?text=Hi%2C%20I%20need%20a%20quick%20corporate%20gifting%20quote.%20Please%20assist.";

  const quickStats = [
    { value: "Decades", label: "Industry Experience" },
    { value: "Pan-India", label: "Business Delivery Support" },
    { value: "Custom", label: "Branding and Packaging" },
  ];

  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-fuchsia-900 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-20" />

      {/* Soft glow: static gradients instead of animated blurred blobs (much cheaper to paint on phones) */}
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(40% 50% at 25% 30%, rgba(236,72,153,0.35), transparent 70%), radial-gradient(40% 50% at 75% 35%, rgba(168,85,247,0.35), transparent 70%), radial-gradient(45% 45% at 50% 100%, rgba(99,102,241,0.35), transparent 70%)' }} />

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden hidden lg:block motion-reduce:hidden">
        <div className="floating-icons">
          <Gift className="icon text-pink-200" size={32} style={{ left: '10%', top: '20%', animationDelay: '0s' }} />
          <Package className="icon text-purple-200" size={40} style={{ left: '25%', top: '25%', animationDelay: '1.5s' }} />
          <Award className="icon text-fuchsia-200" size={36} style={{ left: '45%', top: '22%', animationDelay: '1s' }} />
          <Trophy className="icon text-indigo-200" size={44} style={{ left: '65%', top: '24%', animationDelay: '2s' }} />
          <Star className="icon text-pink-200" size={32} style={{ left: '80%', top: '21%', animationDelay: '0.5s' }} />
          <Briefcase className="icon text-purple-200" size={38} style={{ left: '90%', top: '23%', animationDelay: '1.8s' }} />
        </div>
      </div>

      <section className="relative z-10 pt-24 pb-10 sm:pt-32 sm:pb-16 xl:pt-36 xl:pb-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-8 lg:gap-8 xl:gap-12 lg:grid-cols-[1.1fr_0.9fr] xl:grid-cols-2">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-pink-300" />
                <p className="text-xs sm:text-sm lg:text-base font-semibold tracking-wider text-pink-200 uppercase">Premium Corporate Gifting</p>
              </div>
              <h1 className="mt-3 sm:mt-4 text-3xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200">
                  Corporate Gift Solutions for Modern Brands
                </span>
              </h1>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg xl:text-xl text-purple-100 max-w-xl">
                From onboarding kits to premium gifting, we source, brand, and deliver across corporate categories.
              </p>

              <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                {quickStats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-white/15 bg-white/10 px-2.5 py-2.5 sm:px-4 sm:py-3">
                    <p className="text-base sm:text-xl font-bold text-white">{stat.value}</p>
                    <p className="text-[11px] leading-snug sm:text-sm text-purple-100">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-6 sm:mt-8 lg:mt-10">
                <a
                  href={whatsappQuoteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('hero_primary_cta_click', { cta: 'whatsapp_quote' })}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-pink-500/20 transition-all duration-200 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full hover:from-pink-600 hover:to-purple-600"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  Get Quote on WhatsApp
                </a>
                <Link
                  to="/products"
                  onClick={() => trackEvent('hero_secondary_cta_click', { cta: 'explore_products' })}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap px-6 py-3.5 text-base font-semibold text-purple-100 transition-all duration-200 border-2 border-purple-400 rounded-full hover:bg-purple-900/30"
                >
                  Explore Products
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-purple-200">
                Fast response for corporate queries during business hours.
              </p>

              <div className="mt-5 space-y-2">
                <div className="flex items-start gap-2 text-sm text-purple-100">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                  All categories covered, including custom-sourced items
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-none">
              <picture>
                <source srcSet="/assets/Home Hero/1.webp" type="image/webp" />
                <img className="relative w-full rounded-2xl" src="/assets/Home Hero/1.png" alt="Corporate gifting collection display" width={1010} height={748} />
              </picture>
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

      `}</style>
    </div>
  );
}