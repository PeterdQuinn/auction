import React, { ReactNode } from 'react';
import checkBox from './CheckBox';

interface CarouselProps {
  children: ReactNode;
}

export const Carousel = ({ children }: CarouselProps) => {
  return (
    <div className="carousel carousel-center max-w-full p-4 space-x-4 bg-neutral rounded-box overflow-hidden">
      {children}
    </div>
  );
};

export default Carousel;
