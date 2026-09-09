import { useEffect, useState } from 'react';

interface CountdownProps {
  targetDate: string;
  label?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(targetDate: string): TimeLeft {
  const diff = new Date(targetDate).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown({ targetDate, label }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Min', value: timeLeft.minutes },
    { label: 'Sec', value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-col gap-3">
      {label && (
        <span className="font-headline text-xs uppercase tracking-[0.2em] text-sky-light/70">{label}</span>
      )}
      <div className="flex gap-3 sm:gap-4">
        {units.map((unit) => (
          <div key={unit.label} className="flex flex-col items-center">
            <div className="relative w-16 sm:w-20 h-16 sm:h-20 rounded-lg glass flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <span className="font-headline font-bold text-2xl sm:text-3xl text-white tabular-nums">
                {String(unit.value).padStart(2, '0')}
              </span>
            </div>
            <span className="mt-2 font-headline text-[10px] uppercase tracking-wider text-sky-light/60">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
