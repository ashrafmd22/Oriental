import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

interface CategoryCardProps {
  name: string;
  image: string;
  url: string;
  bgColor: string;
}

export function CategoryCard({ name, image, url, bgColor }: CategoryCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-105"
          style={{ backgroundColor: bgColor }}
          loading="lazy"
        />
      </div>

      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
          {name}
        </h3>
        <div className="mt-auto">
          <Link
            to={url}
            className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>View Collection</span>
          </Link>
        </div>
      </div>
    </div>
  );
}