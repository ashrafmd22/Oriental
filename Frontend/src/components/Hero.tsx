import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

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
      <div className="absolute inset-0 w-full h-full slider-container">
        <SimpleImageSlider
          width="100%" // Full width of the container
          height="100%" // Full height of the container
          images={images}
          showBullets={true} // Show navigation bullets
          showNavs={true} // Show navigation arrows
          autoPlay={true} // Enable autoplay
          autoPlayDelay={3} // Delay between slides in seconds
          slideDuration={0.5} // Smooth transitions
          bgColor="transparent" // Transparent background
        />
      </div>

      {/* Text Content with Background */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center z-10">
        <div className="max-w-3xl px-6 py-8 bg-black bg-opacity-50 rounded-lg text-center animate-slideInLeft">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Premium Corporate Gift Solutions
          </h1>
          <p className="text-lg sm:text-xl text-white mb-8">
            Elevating your brand with exceptional corporate gifts since 1990
          </p>
          <a
            href="/products"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Explore Our Products
          </a>
        </div>
      </div>

      {/* Custom Animation for Left Slide Effect */}
      <style>{`
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
          animation: slideInLeft 1s ease-out forwards;
        }

        /* Custom CSS to make sure the images are contained properly */
        .slider-container img {
          object-fit: contain; /* Ensures the image fits within the container without being cropped */
          width: 100%; /* Ensure the image fills the width */
          height: 100%; /* Ensure the image fills the height */
        }
      `}</style>
    </section >
  );
}
