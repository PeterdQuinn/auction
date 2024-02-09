import Image from 'next/image';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Hero from '@/components/Hero';
import { Logo } from '@/components/Logo';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Carousel from '@/components/Carousel';
import CarouselItem from '../../CarouselItem';

const shoes = [
  {
    id: 1,
    name: 'Air Jordan 1 Retro High',
    brand: 'Nike',
    size: '42',
    color: 'Blue/White',
    price: 170.0,
  },
  {
    id: 2,
    name: 'Yeezy Boost 350 V2',
    brand: 'Adidas',
    size: '43',
    color: 'Black/Red',
    price: 220.0,
  },
  {
    id: 3,
    name: 'Classic Leather',
    brand: 'Reebok',
    size: '44',
    color: 'White',
    price: 75.0,
  },
  {
    id: 4,
    name: 'Old Skool',
    brand: 'Vans',
    size: '42',
    color: 'Black/White',
    price: 60.0,
  },
  {
    id: 5,
    name: 'Chuck Taylor All Star',
    brand: 'Converse',
    size: '39',
    color: 'White',
    price: 55.0,
  },
  {
    id: 6,
    name: 'Gel-Lyte III',
    brand: 'ASICS',
    size: '40',
    color: 'Red/White',
    price: 110.0,
  },
];
export default function Home() {
  return (
    <>
      <div>
        <Hero>
          <Logo width="40" />
          <h1 className="mb-5 text-5xl font-bold">Get Bidding</h1>
          <p className="mb-5 text-pri">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button label="Get Started" color="secondary" />
        </Hero>
      </div>
      <div className="container mx-auto my-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {shoes.map((shoe) => (
            <Card {...shoe} key={shoe.id} title={shoe.name} />
          ))}
        </div>
      </div>

      <div className="container mx-auto my-8">
        <h2 className="text-size-h2">Search By Model</h2>
        <Carousel>
          {shoes.map((shoe) => (
            <CarouselItem key={shoe.id} id={shoe.id}>
              <Card {...shoe} key={shoe.id} title={shoe.name} />
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </>
  );
}
