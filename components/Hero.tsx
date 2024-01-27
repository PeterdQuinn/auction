import { ReactNode } from 'react';

interface HeroProps {
  children?: ReactNode;
}

export const Hero = ({ children }: HeroProps) => {
  return (
    <div style={{ minHeight: `5rem` }}>
      <div
        className="hero"
        style={{
          backgroundImage:
            'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)',
          minHeight: `20rem`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 min-h-screen"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
