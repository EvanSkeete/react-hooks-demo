import { useState, useEffect } from 'react';

export default function useObservable(observable, initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(
    () => {
      const subscription = observable.subscribe(value => setValue(value));
      return () => subscription.unsubscribe();
    },
    [observable]
  );

  return value;
}
