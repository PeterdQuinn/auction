import React, { ReactNode } from 'react';

interface CarouselItemProps {
  id: string;
  key: string;
  children: ReactNode;
}

export const CarouselItem = ({ id, children, key }: CarouselItemProps) => {
  return (
    <div className="carousel-item" key={key}>
      {children}
    </div>
  );
};

export default CarouselItem;
