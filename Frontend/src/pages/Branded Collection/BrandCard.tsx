import React from 'react';

interface BrandCardProps {
  name: string;
  imagePath: string;
  category: string;
}

export const BrandCard: React.FC<BrandCardProps> = ({ name, imagePath, category }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-3 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
      <div className="flex items-center justify-center p-4 h-32">
        <img
          src={imagePath}
          alt={`${name} logo`}
          className="w-auto h-full max-h-24 object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="text-center mt-2 pb-2">
        <h3 className="text-sm font-medium text-gray-800">{name}</h3>
        <p className="text-xs text-gray-500 mt-0.5">{category}</p>
      </div>
    </div>
  );
};