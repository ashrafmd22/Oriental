import React, { useState, useEffect } from 'react';

interface CounterProps {
  target: number;
  duration: number;
}

export const Counter: React.FC<CounterProps> = ({ target, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 50);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Math.ceil(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}</span>;
};