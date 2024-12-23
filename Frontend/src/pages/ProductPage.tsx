import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';

export function ProductPage() {
  const { category, id } = useParams();
  const product = products.find(p => p.id === id);

  // State to track selected image index
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Handle thumbnail click to update the main image
  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  // Handle arrow click to navigate through images
  const handleArrowClick = (direction: 'left' | 'right') => {
    setSelectedImageIndex((prevIndex) => {
      if (direction === 'left') {
        return (prevIndex - 1 + product.images.length) % product.images.length;
      } else {
        return (prevIndex + 1) % product.images.length;
      }
    });
  };

  return (
    <div className="bg-gray-50 py-16 mt-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-lg shadow-md">
          <div className="relative">
            {/* Main Product Image */}
            <div className="relative w-full h-96 overflow-hidden">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-contain rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-125"
              />
              {/* Left Arrow */}
              <button
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700"
                onClick={() => handleArrowClick('left')}
                aria-label="Previous Image"
              >
                &lt;
              </button>

              {/* Right Arrow */}
              <button
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700"
                onClick={() => handleArrowClick('right')}
                aria-label="Next Image"
              >
                &gt;
              </button>

            </div>



            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4 mt-4">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name} thumbnail`}
                  className={`w-full h-24 object-contain rounded cursor-pointer transition-all duration-300 ${index === selectedImageIndex ? 'border-2 border-blue-500' : 'opacity-70'}`}
                  onClick={() => handleImageClick(index)}
                  style={{
                    transform: index === selectedImageIndex ? 'scale(1.1)' : 'scale(1)',
                  }}
                />
              ))}
            </div>
          </div>


          <div>
            {/* Product Details */}
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl text-blue-600 mb-4">{product.price}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Product Features */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Features</h2>
              <ul className="list-disc list-inside space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
            </div>

            {/* Product Code */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Product Code</h2>
              <p className="text-gray-600">{product.code}</p>
            </div>

            {/* Contact Section with WhatsApp */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-3">Need Help?</h2>
              <p className="text-gray-600 mb-4">If you have any questions about this product, feel free to contact us on WhatsApp!</p>
              <a
                href={`https://wa.me/9899987779?text=Hello!%20I'm%20interested%20in%20the%20following%20product:%0A%0AName:%20${product.name}%0ACode:%20${product.code}%0AImage:%20${product.images[0]}%0A%0AIf%20you%20have%20more%20details,%20please%20share.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
              >
                Contact on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
