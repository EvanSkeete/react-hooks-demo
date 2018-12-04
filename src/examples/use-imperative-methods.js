import React, { forwardRef, useImperativeMethods, useRef } from 'react';

const FocusableInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeMethods(ref, () => ({
    focusOnTheThing: () => {
      console.log('Focusing on the thing');
      inputRef.current.focus();
    }
  }));

  return <input className="large" ref={inputRef} type="text" />;
});

export default () => {
  const inputRef = useRef();

  const onButtonClick = () => {
    inputRef.current.focusOnTheThing();
  };

  return (
    <div>
      <FocusableInput ref={inputRef} />
      <button className="primary" onClick={onButtonClick}>
        Focus the input
      </button>
    </div>
  );
};
