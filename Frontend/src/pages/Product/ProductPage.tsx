import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { products } from '../../data/products';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ProductDetails } from './ProductDetails';

export function ProductPage() {
  const { id } = useParams();
  const location = useLocation();
  const product = products.find(p => p.id === id);

  // Extract category from URL path
  const category = location.pathname.split('/')[2];
  // Format category for display (capitalize first letter, remove hyphens)
  const displayCategory = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : 'Products';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Product not found</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen pt-20 sm:pt-24 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 sm:p-6 lg:p-8">
            {/* Breadcrumb */}
            <div className="lg:col-span-2 flex items-center space-x-2 text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
              <span>Home</span>
              <span>/</span>
              <span>Products</span>
              <span>/</span>
              <span>{displayCategory}</span>
              <span>/</span>
              <span className="text-gray-900">{product.name}</span>
            </div>

            <ImageGallery
              images={product.images}
              productName={product.name}
            />
            <ProductDetails
              name={product.name}
              description={product.description}
              features={product.features}
              code={product.code}
            />
          </div>
        </div>
      </div>
    </div>
  );
}