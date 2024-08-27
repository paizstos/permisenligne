import { useEffect, useState } from 'react';

export default function Timer() {
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);

  return (
    <div>
      <h3>Temps restant: {time} secondes</h3>
    </div>
  );
}
