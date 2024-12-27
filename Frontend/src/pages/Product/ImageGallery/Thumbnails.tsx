import React from 'react';

interface ThumbnailsProps {
  images: string[];
  selectedIndex: number;
  productName: string;
  onSelect: (index: number) => void;
}

export function Thumbnails({ images, selectedIndex, productName, onSelect }: ThumbnailsProps) {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 gap-3">
      {images.map((image, index) => (
        <button
          key={image}
          onClick={() => onSelect(index)}
          className={`
            relative aspect-square rounded-lg overflow-hidden
            ${index === selectedIndex
              ? 'ring-2 ring-blue-500'
              : 'opacity-70 hover:opacity-100 transition-opacity'
            }
          `}
        >
          <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-50">
            <img
              src={image}
              alt={`${productName} thumbnail ${index + 1}`}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        </button>
      ))}
    </div>
  );
}