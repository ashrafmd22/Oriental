import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const baseArrowStyles = "absolute z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 shadow-lg top-1/2 -translate-y-1/2";

export function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className={`${baseArrowStyles} left-2`}>
      <ChevronLeft className="w-6 h-6 text-gray-600" />
    </button>
  );
}

export function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className={`${baseArrowStyles} right-2`}>
      <ChevronRight className="w-6 h-6 text-gray-600" />
    </button>
  );
}