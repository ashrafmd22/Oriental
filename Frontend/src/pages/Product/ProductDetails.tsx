import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface ProductDetailsProps {
  name: string;
  description: string;
  features: string[];
  code: string;
}

export function ProductDetails({ name, description, features, code }: ProductDetailsProps) {
  const handleWhatsAppClick = () => {
    const text = `Hello! I'm interested in the following product:%0A%0AName: ${name}%0ACode: ${code}%0A%0AIf you have more details, please share.`;
    window.open(`https://wa.me/+918810418134?text=${text}`, '_blank');
  };

  return (
    <div className="flex flex-col h-full">
      <div className="space-y-6 flex-grow">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{name}</h1>
        </div>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 text-justify leading-relaxed">{description}</p>
        </div>

        {/* Features */}
        <div className="space-y-3">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Features</h2>
          <ul className="space-y-2 pl-4">
            {features.map((feature, index) => (
              <li key={index} className="text-gray-600 relative pl-4">
                <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-blue-500 rounded-full" />
                <span className="block text-justify leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Code */}
        <div className="space-y-2">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Product Code</h2>
          <p className="text-gray-600 font-mono bg-gray-50 px-3 py-1 rounded-md inline-block">{code}</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-8 space-y-4 bg-gray-50 p-4 rounded-xl">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Need Help?</h2>
        <p className="text-gray-600 text-justify">
          If you have any questions about this product, feel free to contact us on WhatsApp!
        </p>
        <button
          onClick={handleWhatsAppClick}
          className="w-full sm:w-auto bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all duration-200 flex items-center justify-center gap-3 hover:shadow-lg"
        >
          <FaWhatsapp className="w-6 h-6" />
          Contact on WhatsApp
        </button>
      </div>
    </div>
  );
}