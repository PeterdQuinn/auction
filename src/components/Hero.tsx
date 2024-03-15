import { ReactNode } from 'react';

interface HeroProps {
  children?: ReactNode;
  classes: string;
}

export const Hero = ({ children, classes }: HeroProps) => {
  return (
    <div className={`hero bg-hero-pattern ${classes}`}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">{children}</div>
      </div>
    </div>
  );
};

export default Hero;
