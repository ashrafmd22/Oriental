import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

export function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check mobile only once on mount and on resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleArrowClick = useCallback((direction: 'left' | 'right') => {
    setIsZoomed(false);
    setSelectedImageIndex((prevIndex) => {
      if (direction === 'left') {
        return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      }
      return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
    });
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handleArrowClick('left');
      if (e.key === 'ArrowRight') handleArrowClick('right');
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleArrowClick]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed || isMobile) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <div className="w-full space-y-4">
      {/* Main Image Container */}
      <div className="relative w-full aspect-square mt-16 sm:mt-0">
        {/* Navigation Arrows */}
        <button
          className="absolute -left-4 lg:-left-8 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors z-10"
          onClick={() => handleArrowClick('left')}
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button
          className="absolute -right-4 lg:-right-8 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors z-10"
          onClick={() => handleArrowClick('right')}
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        {/* Image Container */}
        <div
          className="relative w-full h-full overflow-hidden rounded-xl bg-gray-50"
          onMouseEnter={() => !isMobile && setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsZoomed(false)}
        >
          <div className={`w-full h-full ${!isMobile && 'cursor-zoom-in'}`}>
            <img
              key={selectedImageIndex}
              src={images[selectedImageIndex]}
              alt={`${productName} - Image ${selectedImageIndex + 1}`}
              className="w-full h-full object-contain"
              style={{
                transform: isZoomed ? 'scale(2)' : 'scale(1)',
                transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                transition: isZoomed ? 'none' : 'transform 0.2s ease-out'
              }}
            />
          </div>

          {/* Zoom indicator */}
          {!isMobile && !isZoomed && (
            <div className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-lg shadow-md flex items-center gap-2">
              <ZoomIn className="w-4 h-4" />
              <span className="text-sm">Hover to zoom</span>
            </div>
          )}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => {
              setIsZoomed(false);
              setSelectedImageIndex(index);
            }}
            className={`
              relative aspect-square rounded-lg overflow-hidden
              ${index === selectedImageIndex
                ? 'ring-2 ring-blue-500'
                : 'opacity-70 hover:opacity-100'
              }
            `}
          >
            <img
              src={image}
              alt={`${productName} thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}