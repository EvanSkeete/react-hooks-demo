import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'toggle':
      return state === 'Hello' ? 'Goodbye' : 'Hello';
    default:
      return state;
  }
}

export default () => {
  const [message, dispatch] = useReducer(reducer, 'Hello');
  const onButtonClick = () => dispatch({ type: 'toggle' });

  return (
    <>
      <p>{message}</p>
      <button className="primary" onClick={onButtonClick}>
        toggle
      </button>
    </>
  );
};
