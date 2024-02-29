import Button from './Button';
import Countdown from 'react-countdown';
interface CardProps {
  title: string;
  description?: string;
  id: string;
}
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
export const Card = ({ title, description, id }: CardProps) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl sm:mx-auto mx-4" id={id}>
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <Countdown date={Date.now() + 5000} renderer={renderer} />
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
        <Button color="primary" isWide={true} label="Button" />
      </div>
    </div>
  );
};

export default Card;
