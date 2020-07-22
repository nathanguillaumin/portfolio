import React, { useEffect, useState } from 'react';
import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';

const LanguageSelector = ({t}) => {
  const currentLanguage = i18n.language;
  const [toggled, setToggled] = useState(currentLanguage === 'fr');

  useEffect(() => {
    setToggled(currentLanguage === 'fr');
  }, [currentLanguage]);

  const changeLanguage = (event) => {
    const newLanguage = event.target.checked ? 'fr' : 'en';
    setToggled(!toggled);
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('lang', newLanguage);/* eslint-disable-line */
  };


  return (
    <div className='toggle-container'>
      <p>EN</p>
      <label>
        <div className='toggle'>
          <input className='toggle-state' type='checkbox' checked={toggled} onChange={changeLanguage} />
          <div className='indicator' />
        </div>
      </label>
      <p>FR</p>
    </div>
  );
};

export default LanguageSelector;
