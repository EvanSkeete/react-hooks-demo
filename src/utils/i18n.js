import React, { createContext, useContext } from 'react';

export const Locale = createContext('en');

const strings = {
  en: {
    'message.hello': 'Hello'
  },
  fr: {
    'message.hello': 'Bonjour'
  }
};

export default ({ id }) => {
  const locale = useContext(Locale);
  return <span>{strings[locale][id]}</span>;
};
