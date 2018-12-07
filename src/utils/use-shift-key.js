import { useState, useEffect } from 'react';

export default function useShiftKey() {
  const [shiftKeyPressed, setShiftKeyPressed] = useState(false);

  useEffect(() => {
    const onKeyDown = event => {
      setShiftKeyPressed(event.shiftKey);
    };

    const onKeyUp = () => {
      setShiftKeyPressed(false);
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  return shiftKeyPressed;
}
