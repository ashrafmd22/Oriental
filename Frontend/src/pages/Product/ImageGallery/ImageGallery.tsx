import React, { useState, useEffect, useCallback } from 'react';
import { ZoomIn } from 'lucide-react';
import { ImageControls } from './ImageControls';
import { Thumbnails } from './Thumbnails';
import { ImagePreloader } from './ImagePreloader';

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

export function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
      <ImagePreloader images={images} />

      <div className="relative w-full aspect-square mt-16 sm:mt-0">
        <ImageControls
          onPrevious={() => handleArrowClick('left')}
          onNext={() => handleArrowClick('right')}
        />

        <div
          className="relative w-full h-full overflow-hidden rounded-xl bg-gray-50"
          onMouseEnter={() => !isMobile && setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsZoomed(false)}
        >
          <div className={`w-full h-full ${!isMobile && 'cursor-zoom-in'}`}>
            {images.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`${productName} - Image ${index + 1}`}
                className="w-full h-full object-contain absolute inset-0 transition-opacity duration-200"
                style={{
                  opacity: index === selectedImageIndex ? 1 : 0,
                  transform: isZoomed ? 'scale(2)' : 'scale(1)',
                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  transition: isZoomed ? 'none' : 'all 0.2s ease-out',
                  pointerEvents: index === selectedImageIndex ? 'auto' : 'none'
                }}
              />
            ))}
          </div>

          {!isMobile && !isZoomed && (
            <div className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-lg shadow-md flex items-center gap-2">
              <ZoomIn className="w-4 h-4" />
              <span className="text-sm">Hover to zoom</span>
            </div>
          )}
        </div>
      </div>

      <Thumbnails
        images={images}
        selectedIndex={selectedImageIndex}
        productName={productName}
        onSelect={(index) => {
          setIsZoomed(false);
          setSelectedImageIndex(index);
        }}
      />
    </div>
  );
}