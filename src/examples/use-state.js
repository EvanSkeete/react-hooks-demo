import React, { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);

  return (
    <button
      className="primary center-self"
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {count ? `Count: ${count}` : 'Click Me!'}
    </button>
  );
};
