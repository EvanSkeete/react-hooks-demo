import React, { useState } from 'react';
import Translate, { Locale } from '../utils/i18n';

export default () => {
  const [locale, setLocale] = useState('en');

  const onButtonClick = () => {
    setLocale(locale === 'en' ? 'fr' : 'en');
  };

  return (
    <Locale.Provider value={locale}>
      <p>
        <Translate id="message.hello" />
      </p>
      <button className="primary" onClick={onButtonClick}>
        toggle
      </button>
    </Locale.Provider>
  );
};
