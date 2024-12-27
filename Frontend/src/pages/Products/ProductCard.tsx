import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
  category: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, category }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-102 transition-all duration-300 
                    flex flex-col h-full overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden group">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>

        <div className="mt-auto">
          <div className="flex flex-col gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                {product.category}
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded">
                Code: {product.code}
              </span>
            </div>
            <div className="flex flex-wrap gap-1">
              {product.features.slice(0, 2).map((feature, index) => (
                <span key={index} className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded">
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => navigate(`/products/${category}/${product.id}`)}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 
                     text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md 
                     transform transition-all duration-300 hover:-translate-y-0.5"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};