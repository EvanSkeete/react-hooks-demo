import React, { useState, useCallback } from 'react';

export default () => {
  const [count, setCount] = useState(0);

  const onButtonClick = useCallback(() => {
    setCount(count => count + 1);
  }, []);

  return (
    <button className="primary" onClick={onButtonClick}>
      {count ? `Count: ${count}` : 'Click Me!'}
    </button>
  );
};
