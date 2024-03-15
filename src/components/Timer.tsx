import { useEffect, useState } from 'react';
import { Countdown } from 'react-daisyui';

interface TimerProps {}
const countdownValue = 37;
export const Timer = ({}: TimerProps) => {
  const [value, setValue] = useState<number>(countdownValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setValue((v) => (v <= 0 ? countdownValue : v - 1));
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
        <Countdown className="font-mono text-5xl" value={countdownValue} />
        sec
      </div>
    </div>
  );
};

export default Timer;
