import React, { useRef } from 'react';

export default () => {
  const inputRef = useRef();

  const onButtonClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input className="large" ref={inputRef} type="text" />
      <button className="primary" onClick={onButtonClick}>
        Focus the input
      </button>
    </div>
  );
};
