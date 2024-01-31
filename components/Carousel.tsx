import React, { ReactNode } from 'react';
import checkBox from './CheckBox';

interface CarouselProps {
  children: ReactNode;
}

export const Carousel = ({ children }: CarouselProps) => {
  return (
    <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
      {children}
    </div>
  );
};

export default Carousel;
