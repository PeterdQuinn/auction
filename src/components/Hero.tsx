import { ReactNode } from 'react';

interface HeroProps {
  children?: ReactNode;
}

export const Hero = ({ children }: HeroProps) => {
  return (
    <div className="hero bg-hero-pattern">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">{children}</div>
      </div>
    </div>
  );
};

export default Hero;
