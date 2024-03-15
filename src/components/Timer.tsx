import { Countdown } from 'react-daisyui';
import { useEffect, useState } from 'react';

interface TimerProps {}

export const Timer = ({}: TimerProps) => {
  const [value, setValue] = useState<number>(args.value);
  useEffect(() => {
    const timer = setTimeout(() => {
      // @ts-ignore
      setValue((v) => (v <= 0 ? args.value : v - 1));
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col">
        <Countdown className="font-mono text-5xl" value={15} />
        days
      </div>
      <div className="flex flex-col">
        <Countdown className="font-mono text-5xl" value={10} />
        hours
      </div>
      <div className="flex flex-col">
        <Countdown className="font-mono text-5xl" value={24} />
        min
      </div>
      <div className="flex flex-col">
        <Countdown className="font-mono text-5xl" value={60} />
        sec
      </div>
    </div>
  );
};

export default Timer;
