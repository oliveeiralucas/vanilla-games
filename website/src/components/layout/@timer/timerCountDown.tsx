'use client';

import { useEffect, useState } from 'react';
import heroBackground from '@/images/countdown-bg.png';

function getTimeRemaining(endDate: string) {
  const total = Date.parse(endDate) - Date.now();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return { total, days, hours, minutes, seconds };
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining('2025-08-28T00:00:00'));

  useEffect(() => {
    const interval = setInterval(() => {
      const updated = getTimeRemaining('2025-08-28T00:00:00');
      if (updated.total <= 0) clearInterval(interval);
      setTimeLeft(updated);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className='text-gold px-4 py-2 flex items-center justify-center gap-6 text-sm border-b-3 border-[#b39b68] pulse-glow'
      style={{
        backgroundImage: `url(${heroBackground.src})`,
        backgroundPosition: 'center',
      }}
    >
      <span className='text-[var(--color-light-blue)] uppercase tracking-wide font-semibold animate-pulse'>
        Lançamento oficial do servidor:{' '}
      </span>

      <div className='flex gap-3 text-white font-bold text-base md:text-lg'>
        {['dias', 'horas', 'min', 'seg'].map((label, i) => {
          const time = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds][i];
          const formatted = String(time).padStart(2, '0');

          return (
            <div key={label} className='flex flex-col items-center animate-pulse'>
              <span className='font-display'>{formatted}</span>
              <span className='text-xs font-normal text-[var(--color-light-blue)] font-sans'>{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
