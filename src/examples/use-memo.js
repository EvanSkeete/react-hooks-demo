import React, { useState, useMemo } from 'react';

function expensiveCalc(n) {
  console.log('running expensive calc');
  return n * n;
}

export default () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const expensiveValue = useMemo(() => expensiveCalc(a), [a]);

  return (
    <div>
      <button
        className="primary"
        onClick={() => {
          setA(a + 1);
        }}
      >
        {expensiveValue}
      </button>
      <button
        className="primary"
        onClick={() => {
          setB(b + 1);
        }}
      >
        {b}
      </button>
    </div>
  );
};
