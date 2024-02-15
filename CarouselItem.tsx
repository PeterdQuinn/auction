import React, { ReactNode } from 'react';

interface CarouselItemProps {
  id?: string;
  children: ReactNode;
}

export const CarouselItem = ({ id, children }: CarouselItemProps) => {
  return (
    <div className="carousel-item mx-4" id={id}>
      {children}
    </div>
  );
};

export default CarouselItem;
