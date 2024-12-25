import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageControlsProps {
  onPrevious: () => void;
  onNext: () => void;
}

export function ImageControls({ onPrevious, onNext }: ImageControlsProps) {
  return (
    <>
      <button
        className="absolute -left-4 lg:-left-8 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors z-10"
        onClick={onPrevious}
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>
      <button
        className="absolute -right-4 lg:-right-8 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors z-10"
        onClick={onNext}
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>
    </>
  );
}