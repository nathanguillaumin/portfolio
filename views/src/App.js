import React from 'react';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';

import { withNamespaces } from 'react-i18next';

function App({t}) {
  return (
    <div className="App">
      <Header />
      <Intro />
    </div>
  );
}

export default withNamespaces()(App);
