import React from 'react';
import './App.css';

import { withNamespaces } from 'react-i18next';

function App({t}) {
  return (
    <div className="App">
      <h1>{t('Welcome to React')}</h1>
    </div>
  );
}

export default withNamespaces()(App);
