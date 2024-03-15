import DashboardDrawer from '@/components/Drawer';
import { Avatar } from 'react-daisyui';
import Button from '@/components/Button';
import Hero from '@/components/Hero';
import Timer from '@/components/Timer';
import Countdown from 'react-countdown';

const dashboard = () => {
  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };
  return (
    <DashboardDrawer>
      <div className="container mx-auto m-8">
        <div className="prose mb-4">
          <h1>Active Bids</h1>
        </div>
        <div className="grid grid-cols-2 gap-4 ">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
                alt=""
              />
            </div>
            <div className="grid grid-cols-5 gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Avatar
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/195px-Apple_logo_black.svg.png"
                shape="square"
                size="sm"
                borderColor="neutral"
              />
              <div>Subaru Champlin, Othoberg, HI 78276</div>
            </div>
            <div className="flex place-content-evenly bg-neutral-100 rounded my-4 p-2">
              <div>
                <ul className="list-none prose">
                  <li>
                    <Countdown
                      date={Date.now() + 20000000}
                      renderer={renderer}
                    />
                  </li>
                  <li className="font-bold">Time Left</li>
                </ul>
              </div>
              <div className="join-item">
                <ul className="list-none prose">
                  <li>Sunday, 9:38PM</li>
                  <li className="font-bold">Auction Ending</li>
                </ul>
              </div>
              <div className="join-item">
                <ul className="list-none prose">
                  <li>18</li>
                  <li className="font-bold">Bids</li>
                </ul>
              </div>
              <div className="join-item">
                <ul className="list-none prose">
                  <li>$14,000</li>
                  <li className="font-bold">Current bid</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardDrawer>
  );
};

export default dashboard;
