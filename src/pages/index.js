import Image from 'next/image';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Hero from '../../components/Hero';
import { Logo } from '../../components/Logo';
import Button from '../../components/Button';
export default function Home() {
  return (
    <>
      <Hero>
        <Logo />
        <h1 className="mb-5 text-5xl font-bold">Get Bidding</h1>
        <p className="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <Button label="Get Started" />
      </Hero>
    </>
  );
}
