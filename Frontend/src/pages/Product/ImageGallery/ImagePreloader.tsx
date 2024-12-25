import { useEffect } from 'react';

interface ImagePreloaderProps {
  images: string[];
}

export function ImagePreloader({ images }: ImagePreloaderProps) {
  useEffect(() => {
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  return null;
}