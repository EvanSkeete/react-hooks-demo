import React, { memo, useState, useCallback } from 'react';

const SubTreeA = memo(({ value, onClick }) => {
  console.log('Render SubtreeA');
  return (
    <button className="primary" onClick={onClick}>
      {value}
    </button>
  );
});

const SubTreeB = memo(({ value, onClick }) => {
  console.log('Render SubtreeB');
  return (
    <button className="primary" onClick={onClick}>
      {value}
    </button>
  );
});

export default () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const onClickA = useCallback(
    () => {
      setA(a + 1);
    },
    [a]
  );

  const onClickB = useCallback(
    () => {
      setB(b + 1);
    },
    [b]
  );

  return (
    <div>
      <SubTreeA value={a} onClick={onClickA} />
      <SubTreeB value={b} onClick={onClickB} />
    </div>
  );
};
