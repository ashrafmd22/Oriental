import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  { url: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80" },
  { url: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80" },
  { url: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&q=80" },
  { url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80" },
  { url: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80" },
];

export function Hero() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={800}
          loop={true}
          className="w-full h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <div className="w-full h-full relative slide-container overflow-hidden">
                <img
                  src={image.url}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover slide-image"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center z-10 px-4">
        <div className="max-w-3xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 animate-slideInLeft">
            Premium Corporate Gift Solutions
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 md:mb-8 animate-slideInLeft animation-delay-200">
            Elevating your brand with exceptional corporate gifts since 1990
          </p>
          <a
            href="/products"
            className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base animate-slideInLeft animation-delay-400"
          >
            Explore Our Products
          </a>
        </div>
      </div>

      <style>{`
        .slide-container {
          transform: scale(1.02); /* Slightly larger to prevent edge gaps */
        }

        .swiper-slide-active .slide-image {
          animation: zoomAndSlide 3s ease-out forwards;
        }

        @keyframes zoomAndSlide {
          0% {
            transform: scale(1.2) translateX(0);
          }
          100% {
            transform: scale(1.05) translateX(-1%);
          }
        }

        @keyframes slideInLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slideInLeft {
          opacity: 0;
          animation: slideInLeft 1s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
        }

        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.7;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
        }

        @media (max-width: 640px) {
          .swiper-button-next,
          .swiper-button-prev {
            transform: scale(0.7);
          }
        }

        /* Responsive image handling */
        @media (max-width: 475px) {
          .slide-container {
            height: 100vh;
            width: 100vw;
          }
          
          .slide-image {
            height: 100%;
            width: 100%;
            object-position: center;
          }
        }
      `}</style>
    </section>
  );
}